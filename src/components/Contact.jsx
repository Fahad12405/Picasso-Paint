import React, { useRef, useState } from 'react'
import { Loader, Phone } from 'lucide-react'
import emailjs from 'emailjs-com'
import Swal from 'sweetalert2'

function Contact() {
  const form = useRef()
  const [loading, setLoading] = useState(false)

  const sendEmail = (e) => {
    e.preventDefault()
    setLoading(true)

    const formData = new FormData(form.current)
    const name = formData.get('user_name')
    const email = formData.get('user_email')
    const subject = formData.get('subject')
    const message = formData.get('message')

    // Basic validation
    if (!name || !email || !subject || !message) {
      Swal.fire({
        icon: 'warning',
        title: 'Incomplete Form',
        text: 'Please fill in all fields.',
      })
      setLoading(false)
      return
    }

    // Email format check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      Swal.fire({
        icon: 'error',
        title: 'Invalid Email',
        text: 'Please enter a valid email address.',
      })
      setLoading(false)
      return
    }

    emailjs
      .sendForm(
        'service_zqzlnq3',     // Your service ID
        'template_1bb6r9k',          // Your template ID
        form.current,
        'DZdZmaB1P7SGrUB4r'          // Your public key
      )
      .then(
        (result) => {
          console.log(result.text)
          Swal.fire({
            icon: 'success',
            title: 'Message Sent!',
            text: 'Thank you for contacting us. We will get back to you soon.',
          })
          form.current.reset()
          setLoading(false)
        },
        (error) => {
          console.log(error.text)
          Swal.fire({
            icon: 'error',
            title: 'Failed to Send',
            text: 'Something went wrong. Please try again.',
          })
          setLoading(false)
        }
      )
  }

  return (
    <div className="p-4 sm:p-0 lg:p-0 bg-white mb-14">
      {/* Centered Big Heading */}
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-slate-900 mb-24">
        Contact Us
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto bg-white">

        {/* Left Content */}
        <div>
          <h2 className="text-slate-900 text-2xl sm:text-3xl font-bold">Let's Talk</h2>
          <p className="text-[15px] text-slate-600 mt-3 leading-relaxed">
            Email us with any questions or inquiries or call <strong>0331-PICASSO (7422776)</strong>.
            We’d be happy to answer your questions and set up a meeting with you.
          </p>

          {/* Email */}
          <div className="mt-6">
            <h3 className="text-slate-900 text-base font-semibold">Email</h3>
            <ul className="mt-4">
              <li className="flex items-center gap-4">
                <div className="bg-gray-200 h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#000" viewBox="0 0 479.058 479.058">
                    <path d="M434.146 59.882H44.912C20.146 59.882 0 80.028 0 104.794v269.47c0 24.766 20.146 44.912 44.912 44.912h389.234c24.766 0 44.912-20.146 44.912-44.912v-269.47c0-24.766-20.146-44.912-44.912-44.912zM239.529 264.631 39.173 90.982a14.902 14.902 0 0 1 5.738-1.159h389.235a14.902 14.902 0 0 1 5.738 1.159L239.529 264.631z" />
                  </svg>
                </div>
                <a href="mailto:picassopaintindustries@gmail.com" className="text-sm">
                  <small className="block text-slate-900">Mail</small>
                  <span className="text-blue-600 font-medium break-words">
                    picassopaintindustries@gmail.com
                  </span>
                </a>
              </li>
            </ul>
          </div>

          {/* Phone */}
          <div className="mt-6">
            <h3 className="text-slate-900 text-base font-semibold">Phone</h3>
            <ul className="mt-4">
              <li className="flex items-center gap-4">
                <div className="bg-gray-200 h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-black" />
                </div>
                <a href="tel:03317422776" className="text-sm">
                  <small className="block text-slate-900">Phone</small>
                  <span className="text-blue-600 font-medium">0331-7422776 | 0323-7422776</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Right Form */}
        <form ref={form} onSubmit={sendEmail} className="space-y-4 w-full">
          <input
            type="text"
            name="user_name"
            placeholder="Name"
            required
            className="w-full text-slate-900 rounded-md py-2.5 px-4 border border-gray-300 text-sm outline-0 focus:border-blue-500"
          />
          <input
            type="email"
            name="user_email"
            placeholder="Email"
            required
            className="w-full text-slate-900 rounded-md py-2.5 px-4 border border-gray-300 text-sm outline-0 focus:border-blue-500"
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            required
            className="w-full text-slate-900 rounded-md py-2.5 px-4 border border-gray-300 text-sm outline-0 focus:border-blue-500"
          />
          <textarea
            name="message"
            placeholder="Message"
            rows={5}
            required
            className="w-full text-slate-900 rounded-md px-4 py-2.5 border border-gray-300 text-sm outline-0 focus:border-blue-500"
          />
          <button
            type="submit"
            className="w-full text-white bg-[#BB2429] hover:bg-[#bb2429cf] transition rounded-md text-sm font-medium px-4 py-2.5 mt-2"
            disabled={loading}
          >
            {
              loading ? (
                <div className='flex justify-center items-center'>
                  <Loader className='animate-spin' />
                  <span className='ml-2'>Sending...</span>
                </div>
              ) : "Send Message"
            }
          </button>
        </form>
      </div>
    </div>
  )

}

export default Contact
