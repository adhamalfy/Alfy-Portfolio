import { neon } from '@neondatabase/serverless';

if (!process.env.DATABASE_URL) {
  throw new Error('DATABASE_URL environment variable is not set');
}

const sql = neon(process.env.DATABASE_URL);

export async function query(text: string, params: unknown[] = []) {
  try {
    // For Neon serverless, we need to use template strings
    // Convert parameterized query to a simple query for now
    let finalQuery = text;
    if (params && params.length > 0) {
      params.forEach((param, index) => {
        const placeholder = `$${index + 1}`;
        const value = typeof param === 'string' ? `'${param.replace(/'/g, "''")}'` : String(param);
        finalQuery = finalQuery.replace(placeholder, value);
      });
    }
    
    const result = await sql`${finalQuery}`;
    return { rows: result };
  } catch (error) {
    console.error('Database query error:', error);
    throw error;
  }
}

// Alternative function for direct SQL template usage
export async function sqlQuery(strings: TemplateStringsArray, ...values: unknown[]) {
  try {
    const result = await sql(strings, ...values);
    return { rows: result };
  } catch (error) {
    console.error('Database query error:', error);
    throw error;
  }
}

export default sql;
