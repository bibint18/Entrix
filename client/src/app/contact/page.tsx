"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import { sendContact } from "@/services/ContactService";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Enter a valid email"),
  service: z.string().min(1, "Please select a service"),
  budget: z.string().min(1, "Please select a budget"),
  message: z.string().min(1, "Message is required"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactSection() {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const [submitted, setSubmitted] = useState(false);

  const onSubmit = async (data: ContactFormData) => {
    try {
      await sendContact(data);
      setSubmitted(true);
    } catch (error) {
      console.error("Submission failed:", error);
    }
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            <div className="space-y-12">
              <div>
                <h2 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                  Lets Talk
                </h2>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Email</h3>
                <a
                  href="mailto:bookings@entrex.in"
                  className="text-gray-700 hover:text-gray-900 underline text-lg"
                >
                  bookings@entrex.in
                </a>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Socials</h3>
                <div className="space-y-4">
                  {["Instagram", "Twitter", "Facebook"].map((social) => (
                    <a
                      key={social}
                      href={`https://${social.toLowerCase()}.com`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-700 hover:text-gray-900 underline text-lg block"
                    >
                      {social}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm">
              {submitted ? (
                <div className="text-green-600 text-xl font-medium">
                  Thank you! We’ll be in touch soon.
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Name
                    </label>
                    <Input
                      id="name"
                      {...register("name")}
                      className={`w-full bg-gray-50 border-gray-200 focus:border-gray-300 focus:ring-0 ${
                        errors.name ? "border-red-500" : ""
                      }`}
                    />
                    {errors.name && (
                      <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      {...register("email")}
                      className={`w-full bg-gray-50 border-gray-200 focus:border-gray-300 focus:ring-0 ${
                        errors.email ? "border-red-500" : ""
                      }`}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      What service are you interested in
                    </label>
                    <Select onValueChange={(val) => setValue("service", val)}>
                      <SelectTrigger
                        className={`w-full bg-gray-50 border-gray-200 focus:border-gray-300 focus:ring-0 ${
                          errors.service ? "border-red-500" : ""
                        }`}
                      >
                        <SelectValue placeholder="Select project type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="corporate">Corporate Solutions</SelectItem>
                        <SelectItem value="executive">Executive Chauffeur Service</SelectItem>
                        <SelectItem value="airport">Airport Transfers</SelectItem>
                        <SelectItem value="events">Event & Conference Travel</SelectItem>
                        <SelectItem value="personal">Personal / Retail Rides</SelectItem>
                      </SelectContent>
                    </Select>
                    {errors.service && (
                      <p className="text-red-500 text-sm mt-1">{errors.service.message}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Budget
                    </label>
                    <Select onValueChange={(val) => setValue("budget", val)}>
                      <SelectTrigger
                        className={`w-full bg-gray-50 border-gray-200 focus:border-gray-300 focus:ring-0 ${
                          errors.budget ? "border-red-500" : ""
                        }`}
                      >
                        <SelectValue placeholder="Select project budget" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="under-10k">Under ₹10,000</SelectItem>
                        <SelectItem value="10k-50k">₹10,000 - ₹50,000</SelectItem>
                        <SelectItem value="50k-100k">₹50,000 - ₹1,00,000</SelectItem>
                        <SelectItem value="100k-500k">₹1,00,000 - ₹5,00,000</SelectItem>
                        <SelectItem value="above-500k">Above ₹5,00,000</SelectItem>
                      </SelectContent>
                    </Select>
                    {errors.budget && (
                      <p className="text-red-500 text-sm mt-1">{errors.budget.message}</p>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Message
                    </label>
                    <Textarea
                      id="message"
                      rows={4}
                      {...register("message")}
                      className={`w-full bg-gray-50 border-gray-200 focus:border-gray-300 focus:ring-0 resize-none ${
                        errors.message ? "border-red-500" : ""
                      }`}
                    />
                    {errors.message && (
                      <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
                    )}
                  </div>
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-black hover:bg-gray-800 text-white py-3 text-lg font-medium"
                  >
                    {isSubmitting ? "Submitting..." : "Submit"}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
