import { NextFunction, Request, Response } from "express";
import { IBooking } from "../model/BookingModel";

export interface IBookingRepository{
  createBooking(data:IBooking):Promise<IBooking | null>
  getBookings(email:string):Promise<IBooking[] | null>
}

export interface IBookingService{
  createBooking(data:IBooking):Promise<IBooking | null>
  getBookings(email:string):Promise<IBooking[] | null>
}

export interface IBookingController{
  createBooking(req:Request,res:Response,next:NextFunction):Promise<void>
  getBookings(req:Request,res:Response,next:NextFunction):Promise<void>
}