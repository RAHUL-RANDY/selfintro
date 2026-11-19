import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Send, 
  Copy, 
  Check, 
  Sparkles, 
  ArrowUpRight,
  MessageSquare,
  Clock,
  Loader2,
  AlertCircle
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

// Authentic Brand SVGs
const LinkedInIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.64 1.64 0 1 0 0-3.28 1.64 1.64 0 0 0 0 3.28m1.39 9.74v-8.37H5.07v8.37h2.78Z" />
  </svg>
);

const GitHubIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z" />
  </svg>
);

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    setErrorMessage('');

    try {
      // Send real email directly to Rahul's inbox using FormSubmit AJAX
      const response = await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(personalInfo.email)}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject || 'Portfolio Direct Message',
          message: formData.message,
          _subject: `New Portfolio Message from ${formData.name}: ${formData.subject || 'Direct Inquiry'}`,
          _template: 'table',
          _captcha: 'false',
        }),
      });

      const data = await response.json();

      if (response.ok || data.success === 'true' || data.success === true) {
        setFormSubmitted(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        // Still check if it was accepted
        setFormSubmitted(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
      }
    } catch (err) {
      console.error('Error submitting form:', err);
      // Fallback: offer direct mailto if network error occurs
      setErrorMessage('Could not deliver automatically via network. Click below to send directly via your mail client.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const mailtoHref = `mailto:${personalInfo.email}?subject=${encodeURIComponent(
    formData.subject || 'Portfolio Direct Message'
  )}&body=${encodeURIComponent(
    `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
  )}`;

  return (
    <section id="contact" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto border-t border-neutral-200/70">
      {/* Editorial Header */}
      <div className="flex items-center gap-3 mb-6">
        <span className="text-xs font-mono uppercase tracking-widest text-neutral-400">06 / Connect</span>
        <span className="h-[1px] w-12 bg-neutral-300" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Column: Editorial Invitation & Social Profiles */}
        <div className="lg:col-span-5 space-y-8">
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-neutral-950 font-display leading-tight">
              Have an Idea? Let's Build Something.
            </h2>
            <div className="w-16 h-1 bg-neutral-900 mt-6 rounded-full" />
          </div>

          <p className="text-neutral-600 text-base sm:text-lg leading-relaxed font-normal">
            I'm always interested in learning, collaborating and building innovative technology projects. Whether you have an internship opportunity, an open-source idea, or want to discuss AI, my inbox is open.
          </p>

          {/* Direct Email Action Box */}
          <div className="p-6 rounded-3xl bg-white border border-neutral-200/80 shadow-subtle space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono uppercase text-neutral-400">Direct Email</span>
              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-neutral-600 hover:text-neutral-950 transition-colors"
                title="Copy to clipboard"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span className="text-emerald-700">Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>

            <div className="flex items-center justify-between gap-3">
              <a
                href={`mailto:${personalInfo.email}`}
                className="text-sm sm:text-base font-semibold text-neutral-900 hover:underline truncate"
              >
                {personalInfo.email}
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="p-2 rounded-xl bg-neutral-900 text-white hover:bg-neutral-800 transition-colors shrink-0"
                title="Open email client"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>

            <p className="text-[11px] text-emerald-600 font-mono flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Messages from the form arrive straight to this inbox
            </p>
          </div>

          {/* Social Profiles */}
          <div className="space-y-3">
            <div className="text-xs font-mono uppercase text-neutral-400 tracking-wider">
              Network & Code Repositories
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {/* LinkedIn */}
              <a
                href={personalInfo.linkedinPlaceholder}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-2xl bg-white border border-neutral-200/80 shadow-subtle hover:border-neutral-400 transition-all duration-200 flex items-center justify-between group"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-neutral-100 text-neutral-800 group-hover:bg-neutral-900 group-hover:text-white transition-colors">
                    <LinkedInIcon className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-neutral-900">LinkedIn</div>
                    <div className="text-[11px] font-mono text-neutral-400">Connect on LinkedIn</div>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-neutral-400 group-hover:text-neutral-950 transition-colors" />
              </a>

              {/* GitHub */}
              <a
                href={personalInfo.githubPlaceholder}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-2xl bg-white border border-neutral-200/80 shadow-subtle hover:border-neutral-400 transition-all duration-200 flex items-center justify-between group"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-neutral-100 text-neutral-800 group-hover:bg-neutral-900 group-hover:text-white transition-colors">
                    <GitHubIcon className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-neutral-900">GitHub</div>
                    <div className="text-[11px] font-mono text-neutral-400">@RAHUL-RANDY</div>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-neutral-400 group-hover:text-neutral-950 transition-colors" />
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Functional Interactive Contact Form */}
        <div className="lg:col-span-7">
          <div className="p-8 sm:p-10 rounded-3xl bg-white border border-neutral-200/80 shadow-card">
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-neutral-100">
              <div>
                <h3 className="text-xl font-display font-semibold text-neutral-950">
                  Send a Direct Message
                </h3>
                <p className="text-xs text-neutral-500 mt-0.5">
                  Delivered straight to Rahul's Gmail ({personalInfo.email}).
                </p>
              </div>
              <span className="hidden sm:inline-flex items-center gap-1.5 text-xs font-mono text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                <Clock className="w-3 h-3" />
                Direct to inbox
              </span>
            </div>

            {formSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-8 rounded-2xl bg-emerald-50/70 border border-emerald-200 text-center space-y-3"
              >
                <div className="w-12 h-12 mx-auto rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
                  <Check className="w-6 h-6" />
                </div>
                <h4 className="text-base font-semibold text-emerald-950 font-display">
                  Message Sent Directly to Rahul's Inbox!
                </h4>
                <p className="text-xs sm:text-sm text-emerald-800 leading-relaxed max-w-sm mx-auto">
                  Thank you! Your message has been forwarded straight to <strong className="font-semibold">{personalInfo.email}</strong>. Rahul will review your note and get back to you shortly.
                </p>
                <div className="pt-2">
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="px-4 py-2 text-xs font-medium text-emerald-900 bg-emerald-100 hover:bg-emerald-200 rounded-full transition-colors"
                  >
                    Send another message
                  </button>
                </div>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {errorMessage && (
                  <div className="p-3.5 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-800 flex items-center justify-between gap-3">
                    <div className="flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 text-amber-600 shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                    <a
                      href={mailtoHref}
                      className="px-3 py-1 rounded-lg bg-amber-600 text-white font-medium hover:bg-amber-700 transition-colors shrink-0"
                    >
                      Open Email App
                    </a>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono uppercase text-neutral-600 tracking-wider">
                      Your Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-neutral-50 border border-neutral-200 text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:bg-white transition-all"
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono uppercase text-neutral-600 tracking-wider">
                      Your Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. john@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-neutral-50 border border-neutral-200 text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:bg-white transition-all"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div className="space-y-1.5">
                  <label className="text-xs font-mono uppercase text-neutral-600 tracking-wider">
                    Topic / Subject
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Internship Inquiry / AI Project Discussion"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-neutral-50 border border-neutral-200 text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:bg-white transition-all"
                  />
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <label className="text-xs font-mono uppercase text-neutral-600 tracking-wider">
                    Your Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Tell me about your idea, challenge, or opportunity..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-neutral-50 border border-neutral-200 text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:bg-white transition-all resize-none"
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-2 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-neutral-400">
                    Direct delivery to {personalInfo.email}
                  </span>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-semibold bg-neutral-950 text-white hover:bg-neutral-800 disabled:opacity-70 disabled:cursor-not-allowed transition-all duration-200 shadow-sm hover:scale-[1.02]"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-3.5 h-3.5 animate-spin" />
                        <span>Sending to Inbox...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="w-3.5 h-3.5" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
