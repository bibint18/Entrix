import axiosClient from "@/lib/axiosClient";
interface BookingData{
  name:string;
  phone:string;
  email:string;
  date:string;
  time:string;
  adults:string;
  children:string;
  message:string;
}

export const sendBooking =async (data:BookingData) => {
  try {
    const response = await axiosClient.post('/api/bookings',data)
    return response.data
  } catch (error) {
    throw error
  }
}