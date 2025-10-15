import { useState, FormEvent, useEffect } from 'react'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function Modal({ isOpen, onClose }: ModalProps) {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  // Reset form when modal closes
  useEffect(() => {
    if (!isOpen) {
      setTimeout(() => {
        setFirstName('')
        setLastName('')
        setEmail('')
        setPhone('')
        setMessage('')
        setSubmitStatus('idle')
        setErrorMessage('')
      }, 300)
    }
  }, [isOpen])

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')
    setErrorMessage('')

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: 'e340b90e-558d-469a-a198-2d833e72339b',
          name: firstName,
          last_name: lastName,
          email: email,
          phone: phone,
          message: message,
          subject: 'New Meridian XYZ Access Request',
          botcheck: false, // Honeypot field for spam prevention
        }),
      })

      const data = await response.json()

      if (data.success) {
        setSubmitStatus('success')
        setFirstName('')
        setLastName('')
        setEmail('')
        setPhone('')
        setMessage('')
      } else {
        setSubmitStatus('error')
        setErrorMessage('Something went wrong. Please try again.')
      }
    } catch (error) {
      setSubmitStatus('error')
      setErrorMessage('Network error. Please check your connection and try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  if (!isOpen) return null

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 transition-opacity"
      onClick={handleBackdropClick}
    >
      <div className="bg-[#303030] rounded-lg shadow-2xl p-8 max-w-2xl w-full mx-4 relative max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-[#f0f0f0] hover:text-[#bebebe] text-2xl font-light transition-colors z-10"
          aria-label="Close modal"
        >
          ×
        </button>

        {submitStatus === 'success' ? (
          <div className="text-center py-8">
            <h2 className="text-[#f0f0f0] text-2xl font-black mb-4">Thank You!</h2>
            <p className="text-[#f0f0f0] font-light mb-6">
              We've received your request. We'll be in touch soon.
            </p>
            <button
              onClick={onClose}
              className="bg-[#666666] text-[#f0f0f0] px-6 py-3 font-light hover:bg-[#757575] transition-colors shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"
            >
              Close
            </button>
          </div>
        ) : (
          <>
            <h2 className="text-[#f0f0f0] text-2xl font-black mb-2">Request Access</h2>
            <p className="text-[rgba(170,170,170,0.94)] font-light mb-6">
              Fill out the form below to get early access to Meridian XYZ.
            </p>

            <form onSubmit={handleSubmit}>
              {/* First Name and Last Name */}
              <div className="flex flex-col md:flex-row gap-4 mb-4">
                <div className="w-full md:w-1/2">
                  <label htmlFor="firstName" className="block text-[#f0f0f0] font-light mb-2 text-sm">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                    className="w-full bg-[#404040] text-[#f0f0f0] border border-[#666666] px-4 py-3 focus:outline-none focus:border-[#bebebe] transition-colors font-light placeholder-gray-500"
                    placeholder="John"
                    disabled={isSubmitting}
                  />
                </div>
                <div className="w-full md:w-1/2">
                  <label htmlFor="lastName" className="block text-[#f0f0f0] font-light mb-2 text-sm">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    required
                    className="w-full bg-[#404040] text-[#f0f0f0] border border-[#666666] px-4 py-3 focus:outline-none focus:border-[#bebebe] transition-colors font-light placeholder-gray-500"
                    placeholder="Doe"
                    disabled={isSubmitting}
                  />
                </div>
              </div>

              {/* Email and Phone */}
              <div className="flex flex-col md:flex-row gap-4 mb-4">
                <div className="w-full md:w-1/2">
                  <label htmlFor="email" className="block text-[#f0f0f0] font-light mb-2 text-sm">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full bg-[#404040] text-[#f0f0f0] border border-[#666666] px-4 py-3 focus:outline-none focus:border-[#bebebe] transition-colors font-light placeholder-gray-500"
                    placeholder="you@company.com"
                    disabled={isSubmitting}
                  />
                </div>
                <div className="w-full md:w-1/2">
                  <label htmlFor="phone" className="block text-[#f0f0f0] font-light mb-2 text-sm">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                    className="w-full bg-[#404040] text-[#f0f0f0] border border-[#666666] px-4 py-3 focus:outline-none focus:border-[#bebebe] transition-colors font-light placeholder-gray-500"
                    placeholder="+1 (555) 1234-567"
                    disabled={isSubmitting}
                  />
                </div>
              </div>

              {/* Message */}
              <div className="mb-4">
                <label htmlFor="message" className="block text-[#f0f0f0] font-light mb-2 text-sm">
                  Your Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  className="w-full bg-[#404040] text-[#f0f0f0] border border-[#666666] px-4 py-3 focus:outline-none focus:border-[#bebebe] transition-colors font-light placeholder-gray-500 resize-none"
                  placeholder="Tell us about your needs..."
                  disabled={isSubmitting}
                />
              </div>

              {submitStatus === 'error' && (
                <div className="mb-4 p-3 bg-red-900 bg-opacity-30 border border-red-700 text-red-300 font-light text-sm">
                  {errorMessage}
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#666666] text-[#f0f0f0] py-3 font-light hover:bg-[#757575] transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"
              >
                {isSubmitting ? 'Submitting...' : 'Send Message'}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  )
}

