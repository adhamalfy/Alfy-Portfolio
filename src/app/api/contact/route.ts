import { NextRequest, NextResponse } from 'next/server';
import { neon } from '@neondatabase/serverless';

interface ContactFormData {
  name: string;
  email: string;
  description: string;
}

// Add error handling for missing environment variable
if (!process.env.DATABASE_URL) {
  console.error('DATABASE_URL environment variable is not set');
}

const sql = neon(process.env.DATABASE_URL || 'postgresql://neondb_owner:npg_BcLRIi5x6KFj@ep-tiny-mode-abf86097-pooler.eu-west-2.aws.neon.tech/neondb?sslmode=require&channel_binding=require');

export async function POST(request: NextRequest) {
  try {
    console.log('API route called'); // Debug log
    
    const body: ContactFormData = await request.json();
    const { name, email, description } = body;

    console.log('Form data received:', { name, email, description }); // Debug log

    // Validate required fields
    if (!name || !email || !description) {
      console.log('Validation failed: missing fields');
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      console.log('Validation failed: invalid email');
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    console.log('Creating table if not exists...'); // Debug log

    // Create table if it doesn't exist
    await sql`
      CREATE TABLE IF NOT EXISTS contacts (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        description TEXT NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `;

    console.log('Inserting data...'); // Debug log

    // Insert contact data
    const result = await sql`
      INSERT INTO contacts (name, email, description) 
      VALUES (${name}, ${email}, ${description}) 
      RETURNING id, created_at
    `;

    console.log('Data inserted successfully:', result[0]); // Debug log

    return NextResponse.json(
      {
        success: true,
        message: 'Contact form submitted successfully',
        data: {
          id: result[0].id,
          created_at: result[0].created_at
        }
      },
      { status: 201 }
    );

  } catch (error) {
    console.error('Detailed error in contact API:', error);
    return NextResponse.json(
      { 
        error: 'Internal server error',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    // Get all contacts (you might want to add authentication here)
    const result = await sql`
      SELECT id, name, email, description, created_at 
      FROM contacts 
      ORDER BY created_at DESC
    `;

    return NextResponse.json({
      success: true,
      data: result
    });

  } catch (error) {
    console.error('Error fetching contacts:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
