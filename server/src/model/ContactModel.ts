import mongoose, { model, Schema } from "mongoose";
export interface IContact{
  name:string;
  email:string;
  service:string;
  budget:string;
  message:string
}
const ContactSchema = new Schema<IContact>({
  name:{type:String,required:true},
  email:{type:String,required:true},
  service:{type:String,required:true},
  budget:{type:String,required:true},
  message:{type:String,required:true},
})

export const Contact = model<IContact>('Contact',ContactSchema)