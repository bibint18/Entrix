import { IBookingRepository, IBookingService } from "../interface/BookingInterface";
import { IBooking } from "../model/BookingModel";

export class BookingService implements IBookingService{
  constructor(private bookingRepo:IBookingRepository){}
  async createBooking(data: IBooking): Promise<IBooking | null> {
    return this.bookingRepo.createBooking(data)
  }

  async getBookings(email: string): Promise<IBooking[] | null> {
    return this.bookingRepo.getBookings(email)
  }
}