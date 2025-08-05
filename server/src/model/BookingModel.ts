import mongoose, { model, Schema } from "mongoose";
export interface IBooking {
  name: String,
  phone: String,
  email: String,
  date: String,
  time: String,
  adults: String,
  children: String,
  message: String,
}

const BookingSchema = new Schema<IBooking>({
  name:{type:String,required:true},
  phone:{type:String,required:true},
  email:{type:String,required:true},
  date:{type:String,required:true},
  time:{type:String,required:true},
  adults:{type:String,required:true},
  children:{type:String,required:true},
  message:{type:String,required:true}
})
export const Booking  = model<IBooking>('Booking',BookingSchema)