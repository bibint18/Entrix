import { IBookingRepository } from "../interface/BookingInterface";
import { Booking, IBooking } from "../model/BookingModel";

export class BookingRepository implements IBookingRepository{
  async createBooking(data: IBooking): Promise<IBooking | null> {
    return Booking.create(data)
  }
}