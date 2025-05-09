import React from 'react'

const Contact = () => {
  const [formData, setFormData] = React.useState({
      name: '',
      email: '',
      subject: '',
      message: ''
  });

  const handleChange = (e) => {
      setFormData({
          ...formData,
          [e.target.name]: e.target.value
      });
  };

  const handleSubmit = () => {
      // Simulate form submission (e.g., logging data or sending to an API)
      console.log('Form submitted:', formData);
      alert('Thank you for contacting PawPal! We will get back to you soon.');
      // Reset form
      setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
      });
  };

  return (
      <div className="bg-gray-100 min-h-screen flex items-center justify-center p-4">
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-lg w-full">
              <h2 className="text-3xl font-bold text-center text-teal-600 mb-6">
                  Contact PawPal
              </h2>
              <p className="text-center text-gray-600 mb-8">
                  Have a question or need help? Reach out to us!
              </p>
              <div className="space-y-6">
                  <div>
                      <label 
                          htmlFor="name" 
                          className="block text-sm font-medium text-gray-700"
                      >
                          Name
                      </label>
                      <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500 p-2"
                          placeholder="Your Name"
                          required
                      />
                  </div>
                  <div>
                      <label 
                          htmlFor="email" 
                          className="block text-sm font-medium text-gray-700"
                      >
                          Email
                      </label>
                      <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500 p-2"
                          placeholder="your.email@example.com"
                          required
                      />
                  </div>
                  <div>
                      <label 
                          htmlFor="subject" 
                          className="block text-sm font-medium text-gray-700"
                      >
                          Subject
                      </label>
                      <input
                          type="text"
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500 p-2"
                          placeholder="What's this about?"
                          required
                      />
                  </div>
                  <div>
                      <label 
                          htmlFor="message" 
                          className="block text-sm font-medium text-gray-700"
                      >
                          Message
                      </label>
                      <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          rows="4"
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500 p-2"
                          placeholder="Your message here..."
                          required
                      ></textarea>
                  </div>
                  <button
                      onClick={handleSubmit}
                      className="w-full bg-teal-600 text-white py-2 rounded-md hover:bg-teal-700 transition-colors font-semibold"
                  >
                      Send Message
                  </button>
              </div>
          </div>
      </div>)}

export default Contact