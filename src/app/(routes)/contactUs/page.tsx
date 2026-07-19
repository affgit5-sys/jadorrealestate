import { Input } from "@/src/components/ui/input"
import { Textarea } from "@/src/components/ui/textarea"
import { Button } from "@/src/components/ui/button"
import EnquireForm from "@/src/components/common/enquireForm"

function ContactUs() {
  return (
    <div className="luxury-bg">
      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto text-center">
          <h1 className="font-bold text-4xl font-serif">
            <span className="text-[#DC2626]  font-normal">Contact</span> Us
          </h1>
          <div className="w-44 h-1 bg-gradient-to-r from-[#DC2626] to-[#B91C1C] mx-auto mb-8"></div>
        </div>
      </section>
      <div className="flex flex-col lg:flex-row py-20 items-center justify-center container mx-auto max-w-7xl">
        <div className="w-full lg:w-1/2 p-6 md:p-8 lg:pr-16 space-y-8 text-center lg:text-left">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20">
            <p className="text-[#DC2626] text-sm font-medium uppercase tracking-widest font-sans mb-4">
              CONNECT WITH LUXURY
            </p>
            <h2 className="text-4xl md:text-5xl text-gray-800 leading-tight font-sans mb-6 font-serif">
              Get in Touch with <span className="text-[#DC2626] font-normal">Evid Properties</span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed font-sans">
              Have a question or ready to embark on your real estate journey? Our team is here to assist you every step of
              the way. Reach out to us via phone, email, or simply fill out the contact form below. We look forward to
              hearing from you!
            </p>
          </div>
          <div className="bg-gradient-to-br from-[#DC2626]/10 to-[#B91C1C]/10 rounded-2xl p-6 border border-[#DC2626]/20">
            <h3 className="text-xl font-semibold text-gray-800 mb-6 font-sans">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-[#DC2626] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-gray-800 font-medium font-sans">Address</p>
                  <a
                    href="https://maps.app.goo.gl/NMULwbYBcSqjuJco6"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#DC2626] hover:text-[#B91C1C] transition-colors font-sans block"
                  >
                    <p className="text-gray-600 hover:text-[#DC2626] font-sans transition-colors">2107, Al Manara Tower, Business Bay</p>
                    <p className="text-gray-600 hover:text-[#DC2626] font-sans transition-colors">Dubai – UAE</p>
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-[#DC2626] rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-gray-800 font-medium font-sans">Phone</p>
                  <a
                    href="tel:+971542524242"
                    className="text-[#DC2626] hover:text-[#B91C1C] transition-colors font-sans"
                  >
                    +971 54 252 4242
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-[#DC2626] rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-gray-800 font-medium font-sans">Email</p>
                  <a
                    href="mailto:info@evidproperties.com"
                    className="text-[#DC2626] hover:text-[#B91C1C] transition-colors font-sans"
                  >
                    info@evidproperties.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-[#DC2626] rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </div>
                <div>
                  <p className="text-gray-800 font-medium font-sans">Instagram</p>
                  <a
                    href="https://www.instagram.com/evidproperties/?hl=en"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#DC2626] hover:text-[#B91C1C] transition-colors font-sans"
                  >
                    @evidproperties
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-[#DC2626] rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-gray-800 font-medium font-sans">Business Hours</p>
                  <p className="text-gray-600 font-sans">Mon – Fri: 9AM to 7PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2 p-6 md:p-8 lg:pl-16 mt-8 lg:mt-0">
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20">
            <EnquireForm type="contact"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactUs

