import { NextFunction, Request, Response } from "express";
import { IBookingController, IBookingService } from "../interface/BookingInterface";

export class BookingController implements IBookingController {
  constructor(private bookingService:IBookingService){}
  async createBooking(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      console.log("reached")
      console.log(req.body)
      const data = req.body
      if(!data){
        throw new Error()
      }
      const result = await this.bookingService.createBooking(data)
      res.status(200).json({success:true,data:result})
    } catch (error) {
      next(error)
    }
  }
}