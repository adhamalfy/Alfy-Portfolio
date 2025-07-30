"use client";
import { motion } from "framer-motion";
import { useTheme } from "@/contexts/ThemeContext";
import { Send, User, Mail, MessageSquare } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const { theme } = useTheme();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    description: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSubmitStatus('success');
      setFormData({ name: "", email: "", description: "" });
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className={`py-16 ${
        theme === "dark" ? "bg-[#0F1419]" : "bg-white"
      } min-h-screen w-full flex flex-col justify-center items-center`}
    >
      <div className="w-full max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2
            className={`text-4xl md:text-5xl font-bold mb-4 ${
              theme === "dark" ? "text-white" : "text-gray-900"
            }`}
          >
            Let&apos;s Work Together
          </h2>
          <p
            className={`text-lg md:text-xl ${
              theme === "dark" ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Have a project in mind? Let&apos;s discuss how we can bring your ideas to life.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full max-w-2xl mx-auto"
        >
          <div
            className={`rounded-2xl p-8 shadow-2xl ${
              theme === "dark"
                ? "bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 border border-slate-700"
                : "bg-gradient-to-br from-white via-gray-50 to-white border border-gray-200"
            }`}
            style={{
              boxShadow: theme === "dark"
                ? "0 25px 50px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.05)"
                : "0 25px 50px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(0, 0, 0, 0.05)",
            }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Input */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <label
                  htmlFor="name"
                  className={`block text-sm font-medium mb-2 ${
                    theme === "dark" ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  <User size={16} className="inline mr-2" />
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className={`w-full px-4 py-3 rounded-lg border transition-all duration-200 focus:outline-none focus:ring-2 ${
                    theme === "dark"
                      ? "bg-slate-700 border-slate-600 text-white placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500"
                      : "bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:ring-blue-500 focus:border-blue-500"
                  }`}
                  placeholder="Enter your full name"
                />
              </motion.div>

            
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <label
                  htmlFor="email"
                  className={`block text-sm font-medium mb-2 ${
                    theme === "dark" ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  <Mail size={16} className="inline mr-2" />
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className={`w-full px-4 py-3 rounded-lg border transition-all duration-200 focus:outline-none focus:ring-2 ${
                    theme === "dark"
                      ? "bg-slate-700 border-slate-600 text-white placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500"
                      : "bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:ring-blue-500 focus:border-blue-500"
                  }`}
                  placeholder="your.email@example.com"
                />
              </motion.div>

             
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <label
                  htmlFor="description"
                  className={`block text-sm font-medium mb-2 ${
                    theme === "dark" ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  <MessageSquare size={16} className="inline mr-2" />
                  Project Description
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className={`w-full px-4 py-3 rounded-lg border transition-all duration-200 focus:outline-none focus:ring-2 resize-none ${
                    theme === "dark"
                      ? "bg-slate-700 border-slate-600 text-white placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500"
                      : "bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:ring-blue-500 focus:border-blue-500"
                  }`}
                  placeholder="Tell me about your project, goals, timeline, and any specific requirements..."
                />
              </motion.div>

            
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-4 px-6 rounded-lg font-medium text-lg transition-all duration-200 flex items-center justify-center space-x-2 ${
                    isSubmitting
                      ? "opacity-70 cursor-not-allowed"
                      : "hover:scale-105 active:scale-95"
                  } ${
                    theme === "dark"
                      ? "bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-lg"
                      : "bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white shadow-lg"
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </motion.div>

             
              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className={`text-center p-4 rounded-lg ${
                    theme === "dark"
                      ? "bg-green-900/50 border border-green-700 text-green-300"
                      : "bg-green-100 border border-green-300 text-green-700"
                  }`}
                >
                  ✅ Message sent successfully! I&apos;ll get back to you soon.
                </motion.div>
              )}

              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className={`text-center p-4 rounded-lg ${
                    theme === "dark"
                      ? "bg-red-900/50 border border-red-700 text-red-300"
                      : "bg-red-100 border border-red-300 text-red-700"
                  }`}
                >
                  ❌ Something went wrong. Please try again later.
                </motion.div>
              )}
            </form>
          </div>
        </motion.div>

       
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <p
            className={`text-sm ${
              theme === "dark" ? "text-gray-400" : "text-gray-500"
            }`}
          >
            Or reach out directly at{" "}
            <a
              href="mailto:your.email@example.com"
              className={`font-medium underline ${
                theme === "dark" ? "text-blue-400 hover:text-blue-300" : "text-blue-600 hover:text-blue-700"
              }`}
            >
              your.email@example.com
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
