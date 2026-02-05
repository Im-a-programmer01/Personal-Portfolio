import { useState } from 'react';
import { Send, Mail, Phone, Linkedin, Facebook, MapPin, Calendar } from 'lucide-react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

type ContactTab = 'message' | 'booking';

const TIME_SLOTS = [
  '9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
  '12:00 PM', '12:30 PM', '1:00 PM', '1:30 PM', '2:00 PM', '2:30 PM',
  '3:00 PM', '3:30 PM', '4:00 PM', '4:30 PM', '5:00 PM'
];

const MEETING_TYPES = [
  'Discovery Call',
  'Project Discussion',
  'Feedback Session',
  'Other'
];

export default function Contact() {
  const [activeTab, setActiveTab] = useState<ContactTab>('message');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [bookingData, setBookingData] = useState({
    name: '',
    email: '',
    meetingType: 'Discovery Call',
    preferredDate: null as Date | null,
    preferredTime: '',
    duration: 30,
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const apiUrl = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/submit-contact`;

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitted(false), 3000);
    } catch (err) {
      setError('Failed to send message. Please try again or contact me directly.');
      console.error('Error submitting form:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleBookingSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    if (!bookingData.preferredDate || !bookingData.preferredTime) {
      setError('Please select both a date and time for your booking.');
      setIsSubmitting(false);
      return;
    }

    try {
      const apiUrl = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/submit-booking`;

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...bookingData,
          preferredDate: bookingData.preferredDate.toISOString().split('T')[0],
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to submit booking');
      }

      setSubmitted(true);
      setBookingData({
        name: '',
        email: '',
        meetingType: 'Discovery Call',
        preferredDate: null,
        preferredTime: '',
        duration: 30,
        message: '',
      });
      setTimeout(() => setSubmitted(false), 4000);
    } catch (err) {
      setError('Failed to submit booking. Please try again or contact me directly.');
      console.error('Error submitting booking:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleBookingChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setBookingData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" className="section-padding bg-dark-teal">
      <div className="container-width mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-light-cream text-center mb-6">
          Let's Talk About Your Project
        </h2>
        <p className="text-mid-green text-center mb-8 md:mb-12 max-w-2xl mx-auto">
          Ready to automate your workflows and save hours every week? Get in touch!
        </p>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          <div className="flex flex-col justify-center">
            <div className="space-y-8 max-w-md mx-auto w-full">
              <div className="group flex items-center gap-5">
                <div className="w-14 h-14 rounded-2xl bg-light-cream/10 flex items-center justify-center flex-shrink-0 group-hover:bg-light-cream/15 transition-all duration-300">
                  <Mail size={24} className="text-accent-pink" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-light-cream/50 text-xs uppercase tracking-wider font-medium mb-1.5">Email</p>
                  <a
                    href="mailto:orlando.autom8@gmail.com"
                    className="text-light-cream hover:text-accent-pink transition-all duration-300 font-medium text-base leading-relaxed block hover:translate-x-1 break-words"
                  >
                    orlando.autom8@gmail.com
                  </a>
                </div>
              </div>

              <div className="group flex items-center gap-5">
                <div className="w-14 h-14 rounded-2xl bg-light-cream/10 flex items-center justify-center flex-shrink-0 group-hover:bg-light-cream/15 transition-all duration-300">
                  <Phone size={24} className="text-accent-pink" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-light-cream/50 text-xs uppercase tracking-wider font-medium mb-1.5">Phone</p>
                  <a
                    href="tel:+639394389353"
                    className="text-light-cream hover:text-accent-pink transition-all duration-300 font-medium text-base leading-relaxed block hover:translate-x-1"
                  >
                    +63 939-438-9353
                  </a>
                </div>
              </div>

              <div className="group flex items-center gap-5">
                <div className="w-14 h-14 rounded-2xl bg-light-cream/10 flex items-center justify-center flex-shrink-0 group-hover:bg-light-cream/15 transition-all duration-300">
                  <Linkedin size={24} className="text-accent-pink" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-light-cream/50 text-xs uppercase tracking-wider font-medium mb-1.5">LinkedIn</p>
                  <a
                    href="https://linkedin.com/in/shauntalle"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-light-cream hover:text-accent-pink transition-all duration-300 font-medium text-base leading-relaxed block hover:translate-x-1 break-words"
                  >
                    linkedin.com/in/shauntalle
                  </a>
                </div>
              </div>

              <div className="group flex items-center gap-5">
                <div className="w-14 h-14 rounded-2xl bg-light-cream/10 flex items-center justify-center flex-shrink-0 group-hover:bg-light-cream/15 transition-all duration-300">
                  <Facebook size={24} className="text-accent-pink" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-light-cream/50 text-xs uppercase tracking-wider font-medium mb-1.5">Facebook</p>
                  <a
                    href="https://www.facebook.com/ellatnuahs.odnalro"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-light-cream hover:text-accent-pink transition-all duration-300 font-medium text-base leading-relaxed block hover:translate-x-1 break-words"
                  >
                    facebook.com/ellatnuahs.odnalro
                  </a>
                </div>
              </div>

              <div className="group flex items-center gap-5">
                <div className="w-14 h-14 rounded-2xl bg-light-cream/10 flex items-center justify-center flex-shrink-0 group-hover:bg-light-cream/15 transition-all duration-300">
                  <MapPin size={24} className="text-accent-pink" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-light-cream/50 text-xs uppercase tracking-wider font-medium mb-1.5">Location</p>
                  <p className="text-light-cream font-medium text-base leading-relaxed">Philippines</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="mb-6">
              <div className="flex gap-3 p-1 bg-light-cream/5 rounded-xl">
                <button
                  type="button"
                  onClick={() => setActiveTab('message')}
                  className={`flex-1 px-4 py-3 rounded-lg font-medium transition-all ${
                    activeTab === 'message'
                      ? 'bg-accent-pink text-white shadow-lg'
                      : 'text-light-cream/60 hover:text-light-cream hover:bg-light-cream/5'
                  }`}
                >
                  <span className="flex items-center justify-center gap-2">
                    <Send size={18} />
                    Send Message
                  </span>
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('booking')}
                  className={`flex-1 px-4 py-3 rounded-lg font-medium transition-all ${
                    activeTab === 'booking'
                      ? 'bg-accent-pink text-white shadow-lg'
                      : 'text-light-cream/60 hover:text-light-cream hover:bg-light-cream/5'
                  }`}
                >
                  <span className="flex items-center justify-center gap-2">
                    <Calendar size={18} />
                    Book a Call
                  </span>
                </button>
              </div>
            </div>

            {activeTab === 'message' ? (
              <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-light-cream/80 text-sm font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-light-cream/10 border border-light-cream/20 rounded-xl text-light-cream placeholder-light-cream/40 focus:border-accent-pink focus:ring-2 focus:ring-accent-pink/20 transition-all outline-none"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-light-cream/80 text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-light-cream/10 border border-light-cream/20 rounded-xl text-light-cream placeholder-light-cream/40 focus:border-accent-pink focus:ring-2 focus:ring-accent-pink/20 transition-all outline-none"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-light-cream/80 text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-light-cream/10 border border-light-cream/20 rounded-xl text-light-cream placeholder-light-cream/40 focus:border-accent-pink focus:ring-2 focus:ring-accent-pink/20 transition-all outline-none resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              {error && (
                <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-300 text-sm">
                  {error}
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting || submitted}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 bg-accent-pink text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {submitted ? (
                  'Message Sent!'
                ) : isSubmitting ? (
                  'Sending...'
                ) : (
                  <>
                    Send Message
                    <Send size={18} />
                  </>
                )}
              </button>
            </form>
            ) : (
              <form onSubmit={handleBookingSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="booking-name" className="block text-light-cream/80 text-sm font-medium mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="booking-name"
                      name="name"
                      value={bookingData.name}
                      onChange={handleBookingChange}
                      required
                      className="w-full px-4 py-3 bg-light-cream/10 border border-light-cream/20 rounded-xl text-light-cream placeholder-light-cream/40 focus:border-accent-pink focus:ring-2 focus:ring-accent-pink/20 transition-all outline-none"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label htmlFor="booking-email" className="block text-light-cream/80 text-sm font-medium mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="booking-email"
                      name="email"
                      value={bookingData.email}
                      onChange={handleBookingChange}
                      required
                      className="w-full px-4 py-3 bg-light-cream/10 border border-light-cream/20 rounded-xl text-light-cream placeholder-light-cream/40 focus:border-accent-pink focus:ring-2 focus:ring-accent-pink/20 transition-all outline-none"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="meeting-type" className="block text-light-cream/80 text-sm font-medium mb-2">
                    Meeting Type
                  </label>
                  <select
                    id="meeting-type"
                    name="meetingType"
                    value={bookingData.meetingType}
                    onChange={handleBookingChange}
                    className="w-full px-4 py-3 bg-light-cream/10 border border-light-cream/20 rounded-xl text-light-cream focus:border-accent-pink focus:ring-2 focus:ring-accent-pink/20 transition-all outline-none"
                  >
                    {MEETING_TYPES.map((type) => (
                      <option key={type} value={type} className="bg-dark-teal">
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-light-cream/80 text-sm font-medium mb-2">
                      Preferred Date
                    </label>
                    <DatePicker
                      selected={bookingData.preferredDate}
                      onChange={(date) => setBookingData(prev => ({ ...prev, preferredDate: date }))}
                      minDate={new Date()}
                      dateFormat="MMMM d, yyyy"
                      className="w-full px-4 py-3 bg-light-cream/10 border border-light-cream/20 rounded-xl text-light-cream placeholder-light-cream/40 focus:border-accent-pink focus:ring-2 focus:ring-accent-pink/20 transition-all outline-none"
                      placeholderText="Select a date"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="preferred-time" className="block text-light-cream/80 text-sm font-medium mb-2">
                      Preferred Time
                    </label>
                    <select
                      id="preferred-time"
                      name="preferredTime"
                      value={bookingData.preferredTime}
                      onChange={handleBookingChange}
                      required
                      className="w-full px-4 py-3 bg-light-cream/10 border border-light-cream/20 rounded-xl text-light-cream focus:border-accent-pink focus:ring-2 focus:ring-accent-pink/20 transition-all outline-none"
                    >
                      <option value="" className="bg-dark-teal">Select time</option>
                      {TIME_SLOTS.map((time) => (
                        <option key={time} value={time} className="bg-dark-teal">
                          {time}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-light-cream/80 text-sm font-medium mb-2">
                    Duration
                  </label>
                  <div className="flex gap-3">
                    <button
                      type="button"
                      onClick={() => setBookingData(prev => ({ ...prev, duration: 30 }))}
                      className={`flex-1 px-4 py-3 rounded-xl font-medium transition-all ${
                        bookingData.duration === 30
                          ? 'bg-accent-pink text-white'
                          : 'bg-light-cream/10 text-light-cream/60 hover:bg-light-cream/20'
                      }`}
                    >
                      30 minutes
                    </button>
                    <button
                      type="button"
                      onClick={() => setBookingData(prev => ({ ...prev, duration: 60 }))}
                      className={`flex-1 px-4 py-3 rounded-xl font-medium transition-all ${
                        bookingData.duration === 60
                          ? 'bg-accent-pink text-white'
                          : 'bg-light-cream/10 text-light-cream/60 hover:bg-light-cream/20'
                      }`}
                    >
                      60 minutes
                    </button>
                  </div>
                </div>

                <div>
                  <label htmlFor="booking-message" className="block text-light-cream/80 text-sm font-medium mb-2">
                    Additional Notes (Optional)
                  </label>
                  <textarea
                    id="booking-message"
                    name="message"
                    value={bookingData.message}
                    onChange={handleBookingChange}
                    rows={3}
                    className="w-full px-4 py-3 bg-light-cream/10 border border-light-cream/20 rounded-xl text-light-cream placeholder-light-cream/40 focus:border-accent-pink focus:ring-2 focus:ring-accent-pink/20 transition-all outline-none resize-none"
                    placeholder="Any specific topics you'd like to discuss?"
                  />
                </div>

                <div className="p-3 bg-light-cream/5 border border-light-cream/10 rounded-xl">
                  <p className="text-light-cream/60 text-xs leading-relaxed">
                    Note: Bookings are proposals. I'll confirm availability within 24 hours via email.
                  </p>
                </div>

                {error && (
                  <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-300 text-sm">
                    {error}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting || submitted}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 bg-accent-pink text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {submitted ? (
                    'Booking Request Sent!'
                  ) : isSubmitting ? (
                    'Submitting...'
                  ) : (
                    <>
                      Request Booking
                      <Calendar size={18} />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
