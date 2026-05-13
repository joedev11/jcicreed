'use client';

import { useState } from 'react';
import { contactInfo } from '@/data/content';

const infoItems = [
  { icon: '📍', label: 'ADDRESS', value: contactInfo.address },
  { icon: '📞', label: 'PHONE', value: contactInfo.phone, href: `tel:${contactInfo.phone}` },
  { icon: '✉️', label: 'EMAIL', value: contactInfo.email, href: `mailto:${contactInfo.email}` },
  { icon: '🕐', label: 'BUSINESS HOURS', value: contactInfo.hours },
];

const serviceOptions = [
  'Closed Van Delivery',
  'Refrigerated Transport',
  'Freight Forwarding',
  'Nationwide Trucking',
  'Other',
];

const initialForm = { name: '', company: '', email: '', phone: '', service: '', message: '' };

const inputClass =
  'w-full px-4 py-3 border border-[#dce4f0] rounded text-sm text-gray-800 bg-white focus:outline-none focus:border-jds-blue transition-colors';

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  function handleChange(e) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          company: form.company || undefined,
          email: form.email,
          phone: form.phone || undefined,
          service: form.service || undefined,
          message: form.message,
        }),
      });
      const data = await res.json();
      setStatus({ type: data.success ? 'success' : 'error', message: data.message });
      if (data.success) setForm(initialForm);
    } catch {
      setStatus({ type: 'error', message: 'Network error. Please try again.' });
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="contact" className="py-[90px] px-[5%] bg-white">
      <div className="w-10 h-1 bg-jds-orange rounded mb-4" />
      <h2 className="text-[clamp(26px,4vw,40px)] font-extrabold text-navy mb-3">Get in Touch</h2>
      <p className="text-base text-gray-500 leading-relaxed max-w-xl">
        Ready to move your cargo? Contact us for a quote or any inquiries.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-[72px] items-start mt-[52px]">
        {/* Info */}
        <div>
          <h3 className="text-xl font-bold text-navy mb-8">Contact Information</h3>
          {infoItems.map((item) => (
            <div key={item.label} className="flex gap-4 items-start mb-7">
              <div className="shrink-0 w-11 h-11 bg-navy rounded flex items-center justify-center text-lg">
                {item.icon}
              </div>
              <div>
                <strong className="block text-[13px] text-gray-400 tracking-widest mb-1">{item.label}</strong>
                {item.href ? (
                  <p className="text-[15px] font-semibold text-navy leading-snug">
                    <a href={item.href} className="text-navy hover:text-jds-orange transition-colors no-underline">
                      {item.value}
                    </a>
                  </p>
                ) : (
                  <p className="text-[15px] font-semibold text-navy leading-snug">{item.value}</p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Form */}
        <div className="bg-jds-gray rounded-lg p-10">
          <h3 className="text-xl font-bold text-navy mb-6">Send a Message</h3>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-4 mb-5">
              <div>
                <label className="block text-[13px] font-semibold text-navy mb-2">Full Name *</label>
                <input name="name" type="text" placeholder="Juan dela Cruz" required
                  value={form.name} onChange={handleChange} className={inputClass} />
              </div>
              <div>
                <label className="block text-[13px] font-semibold text-navy mb-2">Company</label>
                <input name="company" type="text" placeholder="Your Company"
                  value={form.company} onChange={handleChange} className={inputClass} />
              </div>
            </div>

            <div className="mb-5">
              <label className="block text-[13px] font-semibold text-navy mb-2">Email Address *</label>
              <input name="email" type="email" placeholder="you@company.com" required
                value={form.email} onChange={handleChange} className={inputClass} />
            </div>

            <div className="mb-5">
              <label className="block text-[13px] font-semibold text-navy mb-2">Phone Number</label>
              <input name="phone" type="tel" placeholder="+63 9XX XXX XXXX"
                value={form.phone} onChange={handleChange} className={inputClass} />
            </div>

            <div className="mb-5">
              <label className="block text-[13px] font-semibold text-navy mb-2">Service Needed</label>
              <select name="service" value={form.service} onChange={handleChange} className={inputClass}>
                <option value="">Select a service...</option>
                {serviceOptions.map((opt) => <option key={opt}>{opt}</option>)}
              </select>
            </div>

            <div className="mb-5">
              <label className="block text-[13px] font-semibold text-navy mb-2">Message *</label>
              <textarea name="message" placeholder="Tell us about your delivery needs..." required
                value={form.message} onChange={handleChange}
                className={`${inputClass} resize-y min-h-[120px]`} />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-navy text-white py-3.5 rounded font-bold text-[15px] tracking-wide hover:bg-jds-orange transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {loading ? 'Sending...' : 'Send Inquiry'}
            </button>

            {status && (
              <div className={`mt-3 px-4 py-3 rounded text-sm font-semibold ${
                status.type === 'success' ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'
              }`}>
                {status.message}
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
