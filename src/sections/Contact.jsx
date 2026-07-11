import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaLinkedin, FaGithub, FaMapMarkerAlt, FaBriefcase, FaCalendarCheck, FaPaperPlane } from 'react-icons/fa';
import { SiLeetcode, SiHackerrank } from 'react-icons/si';
import confetti from 'canvas-confetti';
import emailjs from '@emailjs/browser';
import { personalDetails } from '../data/portfolioData';
import { emailConfig, isConfigured } from '../utils/emailConfig';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error'

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Invalid email address';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setSubmitStatus(null);

    const templateParams = {
      from_name: formData.name,
      reply_to: formData.email,
      message: formData.message
    };

    if (isConfigured()) {
      // EmailJS active route
      try {
        await emailjs.send(
          emailConfig.serviceId,
          emailConfig.templateId,
          templateParams,
          emailConfig.publicKey
        );
        handleSuccess();
      } catch (err) {
        console.error('EmailJS Error:', err);
        setSubmitStatus('error');
      } finally {
        setIsSubmitting(false);
      }
    } else {
      // Mock Sandbox route for demo
      setTimeout(() => {
        setIsSubmitting(false);
        console.info('EmailJS not configured. Simulating submit success in sandbox mode.', templateParams);
        handleSuccess();
      }, 1200);
    }
  };

  const handleSuccess = () => {
    setSubmitStatus('success');
    setFormData({ name: '', email: '', message: '' });
    // Trigger confetti shower
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
  };

  return (
    <section id="contact" className="py-24 bg-white dark:bg-slate-950 relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-indigo-500/5 blur-3xl -z-10 animate-pulse-subtle" />

      <div className="container mx-auto px-6 max-w-5xl z-10 relative">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white mb-4">
            Connect &amp; Collaborate
          </h2>
          <div className="h-1 w-20 bg-indigo-500 mx-auto rounded-full" />
          <p className="mt-4 text-slate-500 dark:text-slate-400">
            Let's discuss full-stack opportunities, cloud architectures, or database optimization assignments.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Metadata Cards (Col 5) */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-2">Availability &amp; Profile</h3>
            
            <div className="space-y-4">
              {/* Card 1 */}
              <div className="p-5 rounded-2xl glass-card border border-slate-200/50 dark:border-slate-800/50 flex items-start space-x-4">
                <div className="p-3 bg-indigo-500/10 rounded-xl text-indigo-500">
                  <FaEnvelope className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest">Email</h4>
                  <a href={`mailto:${personalDetails.email}`} className="text-sm font-semibold text-slate-700 dark:text-slate-200 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors">
                    {personalDetails.email}
                  </a>
                </div>
              </div>

              {/* Card 2 */}
              <div className="p-5 rounded-2xl glass-card border border-slate-200/50 dark:border-slate-800/50 flex items-start space-x-4">
                <div className="p-3 bg-emerald-500/10 rounded-xl text-emerald-500">
                  <FaMapMarkerAlt className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest">Location</h4>
                  <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">
                    {personalDetails.location}
                  </span>
                </div>
              </div>

              {/* Card 3 */}
              <div className="p-5 rounded-2xl glass-card border border-slate-200/50 dark:border-slate-800/50 flex items-start space-x-4">
                <div className="p-3 bg-amber-500/10 rounded-xl text-amber-500">
                  <FaBriefcase className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest">Working Status</h4>
                  <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">
                    Open for Software Engineering Positions
                  </span>
                </div>
              </div>

              {/* Card 4 */}
              <div className="p-5 rounded-2xl glass-card border border-slate-200/50 dark:border-slate-800/50 flex items-start space-x-4">
                <div className="p-3 bg-pink-500/10 rounded-xl text-pink-500">
                  <FaCalendarCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest">Availability</h4>
                  <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">
                    Immediate joiner / full availability
                  </span>
                </div>
              </div>
            </div>

            {/* Quick anchors */}
            <div className="flex space-x-3 pt-2">
              <a
                href={personalDetails.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl glass-card text-slate-500 dark:text-slate-400 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors"
                aria-label="GitHub Profile"
              >
                <FaGithub className="w-5 h-5" />
              </a>
              <a
                href={personalDetails.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl glass-card text-slate-500 dark:text-slate-400 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors"
                aria-label="LinkedIn Profile"
              >
                <FaLinkedin className="w-5 h-5" />
              </a>
              <a
                href={personalDetails.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl glass-card text-slate-500 dark:text-slate-400 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors"
                aria-label="LeetCode Profile"
              >
                <SiLeetcode className="w-5 h-5" />
              </a>
              <a
                href={personalDetails.hackerrank}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl glass-card text-slate-500 dark:text-slate-400 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors"
                aria-label="HackerRank Profile"
              >
                <SiHackerrank className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Email Form (Col 7) */}
          <div className="lg:col-span-7 text-left">
            <div className="p-8 rounded-2xl glass-card border border-slate-200/50 dark:border-slate-800/50">
              <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-6">Send Message</h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div className="space-y-1">
                  <label htmlFor="name" className="text-xs font-bold text-slate-400 uppercase tracking-widest">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700/60 text-slate-900 dark:text-white text-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"
                    placeholder="John Doe"
                  />
                  {errors.name && <span className="text-xs text-rose-500 font-semibold">{errors.name}</span>}
                </div>

                {/* Email */}
                <div className="space-y-1">
                  <label htmlFor="email" className="text-xs font-bold text-slate-400 uppercase tracking-widest">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700/60 text-slate-900 dark:text-white text-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"
                    placeholder="johndoe@gmail.com"
                  />
                  {errors.email && <span className="text-xs text-rose-500 font-semibold">{errors.email}</span>}
                </div>

                {/* Message */}
                <div className="space-y-1">
                  <label htmlFor="message" className="text-xs font-bold text-slate-400 uppercase tracking-widest">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700/60 text-slate-900 dark:text-white text-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all resize-none"
                    placeholder="I'd love to talk about hiring you for our team..."
                  />
                  {errors.message && <span className="text-xs text-rose-500 font-semibold">{errors.message}</span>}
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary flex items-center justify-center space-x-2 py-3 rounded-xl text-sm font-bold disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <>
                      <FaPaperPlane />
                      <span>Transmit Message</span>
                    </>
                  )}
                </button>

                {/* Status indicator */}
                {submitStatus === 'success' && (
                  <div className="p-4 bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 text-xs font-semibold rounded-xl text-center">
                    Message transmitted successfully!
                  </div>
                )}
                {submitStatus === 'error' && (
                  <div className="p-4 bg-rose-500/10 border border-rose-500/20 text-rose-500 text-xs font-semibold rounded-xl text-center">
                    Transmission failed. Please copy email directly.
                  </div>
                )}
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
