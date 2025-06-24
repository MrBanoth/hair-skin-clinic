"use client"

import type React from "react"

import { useState } from "react"
import { Calendar, Clock, User, Mail, Phone, MessageSquare } from "lucide-react"

const services = [
  "HydraFacial MD",
  "Laser Hair Removal",
  "PRP Hair Therapy",
  "Chemical Peels"
]

const timeSlots = ["9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM"]

interface BookingFormProps {
  defaultService?: string;
}

export default function BookingForm({ defaultService = '' }: BookingFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: defaultService || "",
    date: "",
    time: "",
    notes: "",
    honeypot: "", // Honeypot field for spam protection
  })
  
  // Hide service selection if defaultService is provided
  const showServiceSelect = !defaultService
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.name.trim()) newErrors.name = "Name is required"
    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid"
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone is required"
    } else if (!/^\+?[\d\s\-$$$$]+$/.test(formData.phone)) {
      newErrors.phone = "Phone number is invalid"
    }
    if (!formData.service) newErrors.service = "Please select a service"
    if (!formData.date) newErrors.date = "Please select a date"
    if (!formData.time) newErrors.time = "Please select a time"

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Check honeypot
    if (formData.honeypot) {
      return // Likely spam
    }

    if (!validateForm()) return

    setIsSubmitting(true)

    try {
      // Simulate API call
      const response = await fetch("/api/booking", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setShowSuccess(true)
        setFormData({
          name: "",
          email: "",
          phone: "",
          service: "",
          date: "",
          time: "",
          notes: "",
          honeypot: "",
        })
      } else {
        throw new Error("Failed to submit booking")
      }
    } catch (error) {
      console.error("Booking error:", error)
      alert("There was an error submitting your booking. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }))
    }
  }

  if (showSuccess) {
    return (
      <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl p-8 text-center">
        <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
          <span className="text-white text-2xl">✓</span>
        </div>
        <h3 className="text-2xl font-medium text-gray-900 dark:text-white mb-4">Booking Confirmed!</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          Thank you for your booking. We&apos;ll contact you shortly to confirm your appointment details.
        </p>
        <button
          onClick={() => setShowSuccess(false)}
          className="bg-rose-500 text-white px-6 py-2 rounded-xl hover:bg-rose-600 transition-colors shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 font-heading"
        >
          Book Another Appointment
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8">
      <h3 className="text-2xl font-heading font-medium text-gray-900 dark:text-white mb-6">Schedule Your Appointment</h3>

      {/* Honeypot field - hidden from users */}
      <input
        type="text"
        name="honeypot"
        value={formData.honeypot}
        onChange={handleChange}
        style={{ display: "none" }}
        tabIndex={-1}
        autoComplete="off"
      />

      <div className="grid md:grid-cols-2 gap-6">
        {/* Name */}
        <div>
          <label htmlFor="name" className="block text-sm font-heading font-medium text-gray-700 dark:text-gray-300 mb-2">
            <User className="w-4 h-4 inline mr-2" />
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-rose-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white ${
              errors.name ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="Enter your full name"
          />
          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-heading font-medium text-gray-700 dark:text-gray-300 mb-2">
            <Mail className="w-4 h-4 inline mr-2" />
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-rose-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white ${
              errors.email ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="Enter your email"
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="phone" className="block text-sm font-heading font-medium text-gray-700 dark:text-gray-300 mb-2">
            <Phone className="w-4 h-4 inline mr-2" />
            Phone Number *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-rose-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white ${
              errors.phone ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="Enter your phone number"
          />
          {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
        </div>

        {/* Service Selection - Only show if no defaultService */}
        {showServiceSelect && (
          <div className="space-y-2">
            <label htmlFor="service" className="block text-sm font-heading font-medium text-gray-700 dark:text-gray-300">
              Service <span className="text-rose-500">*</span>
            </label>
            <div className="relative">
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                className={`w-full px-4 py-3 border ${
                  errors.service
                    ? "border-red-500"
                    : "border-gray-300 dark:border-gray-600"
                } rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-rose-500 focus:border-transparent`}
                required
              >
                <option value="">Select a service</option>
                {services.map((service) => (
                  <option key={service} value={service}>
                    {service}
                  </option>
                ))}
              </select>
              {errors.service && (
                <p className="mt-1 text-sm text-red-500">{errors.service}</p>
              )}
            </div>
          </div>
        )}
        {/* Hidden input to maintain service value in form data */}
        {!showServiceSelect && (
          <input type="hidden" name="service" value={formData.service} />
        )}
        {/* Date */}
        <div>
          <label htmlFor="date" className="block text-sm font-heading font-medium text-gray-700 dark:text-gray-300 mb-2">
            <Calendar className="w-4 h-4 inline mr-2" />
            Preferred Date *
          </label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            min={new Date().toISOString().split("T")[0]}
            className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-rose-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white ${
              errors.date ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.date && <p className="text-red-500 text-sm mt-1">{errors.date}</p>}
        </div>

        {/* Time */}
        <div>
          <label htmlFor="time" className="block text-sm font-heading font-medium text-gray-700 dark:text-gray-300 mb-2">
            <Clock className="w-4 h-4 inline mr-2" />
            Preferred Time *
          </label>
          <select
            id="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-rose-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white ${
              errors.time ? "border-red-500" : "border-gray-300"
            }`}
          >
            <option value="">Select a time</option>
            {timeSlots.map((time) => (
              <option key={time} value={time}>
                {time}
              </option>
            ))}
          </select>
          {errors.time && <p className="text-red-500 text-sm mt-1">{errors.time}</p>}
        </div>
      </div>

      {/* Notes */}
      <div className="mt-6">
        <label htmlFor="notes" className="block text-sm font-heading font-medium text-gray-700 dark:text-gray-300 mb-2">
          <MessageSquare className="w-4 h-4 inline mr-2" />
          Additional Notes
        </label>
        <textarea
          id="notes"
          name="notes"
          value={formData.notes}
          onChange={handleChange}
          rows={4}
          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-rose-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          placeholder="Any specific concerns or requests?"
        />
      </div>

      {/* Submit Button */}
      <div className="mt-8">
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-rose-500 text-white py-4 px-6 rounded-xl font-heading hover:bg-rose-600 focus:ring-2 focus:ring-rose-500 focus:ring-offset-2 transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5 transform disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? "Submitting..." : "Book Appointment"}
        </button>
      </div>

      <p className="text-sm text-gray-500 dark:text-gray-400 mt-4 text-center font-sans">
        * Required fields. We&apos;ll contact you within 24 hours to confirm your appointment.
      </p>
    </form>
  )
}
