import { Router } from "express";
import { BookingRepository } from "../repository/bookingRepository";
import { BookingService } from "../services/BookingService";
import { BookingController } from "../controllers/bookingController";
const router = Router()
const bookingRepository = new BookingRepository()
const bookingService = new BookingService(bookingRepository)
const bookingController = new BookingController(bookingService)
router.post('/bookings',bookingController.createBooking.bind(bookingController))
router.get('/bookings',bookingController.getBookings.bind(bookingController))
export default router