import { Router } from "express";
import { ContactRepository } from "../repository/ContactRepository";
import { ContactService } from "../services/ContactService";
import { ContactController } from "../controllers/ContactConroller";
const router = Router()
const contactRepository = new ContactRepository()
const contactService = new ContactService(contactRepository)
const contactController = new ContactController(contactService)
router.post('/contact',contactController.createContact.bind(contactController))
export default router