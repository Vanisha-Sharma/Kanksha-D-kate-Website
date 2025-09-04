"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle } from "lucide-react";

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submit
  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);

  const payload = { ...formData };
  console.log("Sending Contact Form payload:", payload);

  try {
    const response = await fetch("http://localhost:5000/api/contactform", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const data = await response.json();
    console.log("Response from Contact API:", data);

    if (response.ok) {
      setIsSubmitted(true);
      setFormData({ name: "", email: "", service: "", message: "" });
      alert("Contact form submitted successfully!");
    } else {
      console.error("Failed to submit contact form:", data);
      alert(`Error: ${data.error || "Failed to submit"}`);
    }
  } catch (err) {
    console.error("Error submitting contact form:", err);
    alert("Something went wrong. Please try again.");
  } finally {
    setIsSubmitting(false);
  }
};


  return (
    <div
      id="contact-form"
      className="bg-gradient-to-br from-stone-900/30 to-gray-900/30 rounded-2xl p-8 border border-stone-500/30"
    >
      <h3 className="text-2xl font-bold mb-6 text-center text-white">
        Begin Your Transformation Journey
      </h3>

      {isSubmitted ? (
        <div className="text-center py-8">
          <div className="mx-auto w-16 h-16 bg-gradient-to-br from-stone-600 to-stone-700 rounded-full flex items-center justify-center mb-6">
            <CheckCircle className="w-8 h-8 text-white" />
          </div>
          <h4 className="text-xl font-bold mb-4 text-stone-400">
            Message Received!
          </h4>
          <p className="text-gray-300">
            Thank you for reaching out. We'll connect with you soon to discuss
            your transformation journey.
          </p>
          <Button
            onClick={() => setIsSubmitted(false)}
            className="mt-6 bg-gradient-to-r from-stone-600 to-stone-700 hover:from-stone-700 hover:to-stone-800"
          >
            Send Another Message
          </Button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-300 mb-2"
            >
              Your Name
            </label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Enter your name"
              className="bg-black/50 border-stone-500/30 text-white placeholder-gray-400"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-300 mb-2"
            >
              Email Address
            </label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="your@email.com"
              className="bg-black/50 border-stone-500/30 text-white placeholder-gray-400"
            />
          </div>

          <div>
            <label
              htmlFor="service"
              className="block text-sm font-medium text-gray-300 mb-2"
            >
              I'm Interested In
            </label>
            <select
              id="service"
              name="service"
              value={formData.service}
              onChange={handleChange}
              required
              className="w-full p-3 bg-black/50 border border-stone-500/30 rounded-md text-white"
            >
              <option value="">Select a service</option>
              <option value="flo-immersion">¡FLo! Immersion</option>
              <option value="flo-stream">¡FLo! Stream</option>
              <option value="services for businesses, institutions and communities">Services for Businesses, Institutions and Communities</option>
              <option value="not-sure">I'm Not Sure Yet</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-300 mb-2"
            >
              Your Message
            </label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Tell us about what you're looking for..."
              rows={5}
              className="bg-black/50 border-stone-500/30 text-white placeholder-gray-400"
            />
          </div>

          <div className="w-full flex justify-center px-4 pt-6">
            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-block w-auto max-w-full px-6 py-3 text-base font-semibold text-white text-center bg-gradient-to-r from-stone-600 to-stone-700 hover:from-stone-700 hover:to-stone-800 rounded-full transition-all duration-300 leading-tight whitespace-normal break-words"
            >
              {isSubmitting
                ? "Sending..."
                : "Begin Your Transformation Journey"}
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
