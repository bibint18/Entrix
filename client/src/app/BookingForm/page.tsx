"use client";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import toast from "react-hot-toast";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import DatePicker from "react-datepicker";
import { sendBooking } from "@/services/BookingService";
import "react-datepicker/dist/react-datepicker.css";

export default function BookingForm() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
  const [selectedTime, setSelectedTime] = useState<string>("");
  const [adults, setAdults] = useState<string>("");
  const [children, setChildren] = useState<string>("");

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const isToday = selectedDate?.toDateString() === new Date().toDateString();
  const getMinTime = () => {
    const now = new Date();
    return isToday ? now.toISOString().slice(11, 16) : "00:00";
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    if (formData.phone.trim().length < 9)
      newErrors.phone = "Must be 10 Numbers";
    if (formData.phone.trim().length > 10)
      newErrors.phone = "Must be 10 Numbers";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Invalid email format";
    if (!selectedDate) newErrors.date = "Date is required";
    if (!selectedTime) newErrors.time = "Time is required";
    if (!adults) newErrors.adults = "Please select number of adults";
    if (children === "")
      newErrors.children = "Please select number of children";
    if (!formData.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const payload = {
      ...formData,
      date: selectedDate?.toISOString().split("T")[0] || "",
      time: selectedTime,
      adults,
      children,
    };

    try {
      const res = await sendBooking(payload);
      console.log(res);
      toast.success("Booked Succesfully!");
      setFormData({ name: "", phone: "", email: "", message: "" });
      setSelectedDate(new Date());
      setSelectedTime("");
      setAdults("");
      setChildren("");
      setErrors({});
    } catch (err) {
      console.error(err);
      alert("Failed to submit booking");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div className="flex flex-col">
          <Input
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            className={`bg-white/10 border ${
              errors.name ? "border-red-500" : "border-white/30"
            } text-white placeholder:text-white/70 focus:bg-white/20`}
          />
          {errors.name && (
            <p className="text-black-500 text-sm mt-1">{errors.name}</p>
          )}
        </div>

        <div className="flex flex-col">
          <Input
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className={`bg-white/10 border ${
              errors.phone ? "border-red-500" : "border-white/30"
            } text-white placeholder:text-white/70 focus:bg-white/20`}
          />
          {errors.phone && (
            <p className="text-black-500 text-sm mt-1">{errors.phone}</p>
          )}
        </div>
      </div>

      <div className="flex flex-col">
        <Input
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          className={`bg-white/10 border ${
            errors.email ? "border-red-500" : "border-white/30"
          } text-white placeholder:text-white/70 focus:bg-white/20`}
        />
        {errors.email && (
          <p className="text-black-500 text-sm mt-1">{errors.email}</p>
        )}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div className="flex flex-col bg-white/10 border rounded-md px-3 py-2 text-white">
          <label className="block text-sm mb-1">Select Date</label>
          <DatePicker
            selected={selectedDate}
            onChange={(date) => {
              setSelectedDate(date);
              setErrors({ ...errors, date: "" });
            }}
            minDate={new Date()}
            dateFormat="dd/MM/yyyy"
            className="w-full bg-transparent text-white outline-none"
          />
          {errors.date && (
            <p className="text-black-500 text-sm mt-1">{errors.date}</p>
          )}
        </div>

        <div className="flex flex-col bg-white/10 border rounded-md px-3 py-2 text-white">
          <label className="block text-sm mb-1">Select Time</label>
          <input
            type="time"
            value={selectedTime}
            min={getMinTime()}
            onChange={(e) => {
              setSelectedTime(e.target.value);
              setErrors({ ...errors, time: "" });
            }}
            className="w-full bg-transparent text-white outline-none"
          />
          {errors.time && (
            <p className="text-black-500 text-sm mt-1">{errors.time}</p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div className="flex flex-col">
          <Select
            onValueChange={(val) => {
              setAdults(val);
              setErrors({ ...errors, adults: "" });
            }}
          >
            <SelectTrigger
              className={`bg-white/10 text-white ${
                errors.adults ? "border-red-500" : "border-white/30"
              }`}
            >
              <SelectValue placeholder="Adults" />
            </SelectTrigger>
            <SelectContent>
              {[1, 2, 3, 4, 5].map((i) => (
                <SelectItem key={i} value={`${i}`}>
                  {i} {i === 1 ? "Adult" : "Adults"}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {errors.adults && (
            <p className="text-black-500 text-sm mt-1">{errors.adults}</p>
          )}
        </div>

        <div className="flex flex-col">
          <Select
            onValueChange={(val) => {
              setChildren(val);
              setErrors({ ...errors, children: "" });
            }}
          >
            <SelectTrigger
              className={`bg-white/10 text-white ${
                errors.children ? "border-red-500" : "border-white/30"
              }`}
            >
              <SelectValue placeholder="Children" />
            </SelectTrigger>
            <SelectContent>
              {[0, 1, 2, 3, 4].map((i) => (
                <SelectItem key={i} value={`${i}`}>
                  {i === 0
                    ? "No Children"
                    : `${i} ${i === 1 ? "Child" : "Children"}`}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {errors.children && (
            <p className="text-blask-500 text-sm mt-1">{errors.children}</p>
          )}
        </div>
      </div>

      <div className="flex flex-col">
        <Textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Message"
          className={`bg-white/10 min-h-[90px] text-white placeholder:text-white/70 ${
            errors.message ? "border-red-500" : "border-white/30"
          }`}
        />
        {errors.message && (
          <p className="text-black-500 text-sm mt-1">{errors.message}</p>
        )}
      </div>

      <div className="flex gap-3 pt-2">
        <Button
          type="reset"
          variant="outline"
          className="flex-1 bg-transparent border-white text-white hover:bg-white hover:text-red-500"
          onClick={() => {
            setFormData({ name: "", phone: "", email: "", message: "" });
            setSelectedDate(new Date());
            setSelectedTime("");
            setAdults("");
            setChildren("");
            setErrors({});
          }}
        >
          RESET
        </Button>
        <Button
          type="submit"
          className="flex-1 bg-white text-red-500 hover:bg-gray-100 font-semibold"
        >
          {"LET'S BOOK NOW"}
        </Button>
      </div>
    </form>
  );
}
