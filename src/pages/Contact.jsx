import { useState } from 'react';
import toast from 'react-hot-toast';

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      toast.error('Please fill all required fields!');
      return;
    }

    toast.success('Message sent successfully!', {
      style: {
        background: '#333',
        color: '#fff',
      },
      iconTheme: {
        primary: '#9333ea',
        secondary: '#fff',
      },
    });

    setForm({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
  };

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-[#171717] to-[#111111] min-h-screen">
      <div className="max-w-xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-white mb-2">Contact Me</h2>
          <p className="text-gray-400">Feel free to reach out through the form below.</p>
        </div>

        <form 
          onSubmit={handleSubmit} 
          className="space-y-6 bg-gray-800 p-8 rounded-xl shadow-lg border border-purple-500/20"
        >
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-300">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={form.name}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-purple-500/40 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/30 text-white outline-none placeholder-gray-400"
              placeholder="Saad Abbasi"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-purple-500/40 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/30 text-white outline-none placeholder-gray-400"
              placeholder="07saadabbasi@gmail.com"
              required
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-300">Phone</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-purple-500/40 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/30 text-white outline-none placeholder-gray-400"
              placeholder="+923276491461"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-300">Message</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              value={form.message}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-purple-500/40 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/30 text-white outline-none placeholder-gray-400"
              placeholder="Type your message here..."
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 px-4 bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-700 hover:to-purple-600 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
