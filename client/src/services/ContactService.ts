import axiosClient from "@/lib/axiosClient";

interface contactData{
  name:string;
  email:string;
  service:string;
  budget:string;
  message:string;
}

export const sendContact = async (data:contactData) => {
  try {
    const response = await axiosClient.post('/api/contact',data)
    return response.data
  } catch (error) {
    throw error
  }
}