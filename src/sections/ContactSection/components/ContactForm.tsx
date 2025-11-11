import { useState } from 'react';

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    organisation: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

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
    setSubmitMessage('');

    try {
      // Basic validation
      if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
        throw new Error('Please fill in all required fields');
      }

      if (!formData.email.includes('@')) {
        throw new Error('Please enter a valid email address');
      }

      // Send email via Supabase Edge Function
      const apiUrl = `https://vwmamivnuiyetegbrkin.supabase.co/functions/v1/send-contact-email`;
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ3bWFtaXZudWl5ZXRlZ2Jya2luIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjI4NzA5NzAsImV4cCI6MjA3ODQ0Njk3MH0.6oCgOxIDk5S5ZWAhnpfjwVRwtRPMD4hk6luKQdIFK_U`,
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to send message. Please try again.');
      }

      setSubmitMessage('Thank you! Your message has been sent successfully.');
      setFormData({
        name: '',
        email: '',
        phone: '',
        organisation: '',
        message: ''
      });
    } catch (error) {
      setSubmitMessage(error instanceof Error ? error.message : 'Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative self-center max-h-[99999px] max-w-[99999px] min-h-0 min-w-0 order-2 w-[317.183px] ml-0 md:self-start md:max-h-none md:max-w-none md:min-h-[auto] md:min-w-[500px] md:w-[455.089px] md:ml-[167.901px]">
      <div className="bg-transparent box-border p-6">
        <form onSubmit={handleSubmit} aria-label="Contact" className="space-y-6">
          <div className="space-y-6">
            <div>
              <label htmlFor="name" className="text-stone-700 text-lg block leading-[22px] mb-2 font-helvetica_w01_roman">
                Name <span className="text-red-500">*</span>
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-3 py-2 text-stone-700 text-base bg-transparent border-b-2 border-stone-700/40 focus:border-blue-600 focus:border-b-2 outline-none font-helvetica_w01_roman transition-colors duration-200 caret-stone-700"
              />
            </div>

            <div>
              <label htmlFor="email" className="text-stone-700 text-lg block leading-[22px] mb-2 font-helvetica_w01_roman">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-3 py-2 text-stone-700 text-base bg-transparent border-b-2 border-stone-700/40 focus:border-blue-600 focus:border-b-2 outline-none font-helvetica_w01_roman transition-colors duration-200 caret-stone-700"
              />
            </div>

            <div>
              <label htmlFor="phone" className="text-stone-700 text-lg block leading-[22px] mb-2 font-helvetica_w01_roman">
                Phone Number
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full px-3 py-2 text-stone-700 text-base bg-transparent border-b-2 border-stone-700/40 focus:border-blue-600 focus:border-b-2 outline-none font-helvetica_w01_roman transition-colors duration-200 caret-stone-700"
              />
            </div>

            <div>
              <label htmlFor="organisation" className="text-stone-700 text-lg block leading-[22px] mb-2 font-helvetica_w01_roman">
                Organisation
              </label>
              <input
                id="organisation"
                name="organisation"
                type="text"
                value={formData.organisation}
                onChange={handleInputChange}
                className="w-full px-3 py-2 text-stone-700 text-base bg-transparent border-b-2 border-stone-700/40 focus:border-blue-600 focus:border-b-2 outline-none font-helvetica_w01_roman transition-colors duration-200 caret-stone-700"
              />
            </div>

            <div>
              <label htmlFor="message" className="text-stone-700 text-lg block leading-[22px] mb-2 font-helvetica_w01_roman">
                Message <span className="text-red-500">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                required
                value={formData.message}
                onChange={handleInputChange}
                rows={4}
                className="w-full px-3 py-2 text-stone-700 text-base bg-transparent border-b-2 border-stone-700/40 focus:border-blue-600 focus:border-b-2 outline-none font-helvetica_w01_roman resize-none transition-colors duration-200 caret-stone-700"
              />
            </div>

            <div className="pt-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full text-neutral-100 text-base bg-stone-700 px-[min(5%,15px)] py-[11px] rounded-[100px] font-helvetica_w01_roman hover:bg-violet-300/70 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </div>

            {submitMessage && (
              <div className={`text-sm text-center ${submitMessage.includes('Thank you') ? 'text-green-600' : 'text-red-600'}`}>
                {submitMessage}
              </div>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};
