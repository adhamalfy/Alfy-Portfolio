"use client";
import { motion } from "framer-motion";
import { useTheme } from "@/contexts/ThemeContext";
import { User, Mail, MessageSquare } from "lucide-react";
import { useState } from "react";
import AnimatedSendButton from "@/components/ui/AnimatedSendButton";

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

  const handleFormSubmit = async (data: {name: string, email: string, description: string}) => {
    console.log('handleFormSubmit called with:', data); // Debug log
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      console.log('Response status:', response.status); // Debug log
      const result = await response.json();
      console.log('Response result:', result); // Debug log

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: "", email: "", description: "" });
      } else {
        setSubmitStatus('error');
        console.error('Error:', result.error);
      }
    } catch (error) {
      setSubmitStatus('error');
      console.error('Network error:', error);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Reset status when starting new submission
    setSubmitStatus('idle');
    setIsSubmitting(true);

    await handleFormSubmit(formData);
    setIsSubmitting(false);
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
                className="flex justify-center"
              >
                <AnimatedSendButton
                  onSubmit={handleFormSubmit}
                  disabled={isSubmitting}
                  isSubmitting={isSubmitting}
                  formData={formData}
                  submitStatus={submitStatus}
                  onResetStatus={() => setSubmitStatus('idle')}
                />
              </motion.div>

              {/* Status messages removed - button shows the state */}
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
              href="mailto:     elvlfy9@gmail.com"
              className={`font-medium underline ${
                theme === "dark" ? "text-blue-400 hover:text-blue-300" : "text-blue-600 hover:text-blue-700"
              }`}
            >
              elvlfy9@gmail.com
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
