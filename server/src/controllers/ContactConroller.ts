import { Request, Response, NextFunction } from "express";
import { IContactController, IContactService } from "../interface/ContactInterface";

export class ContactController implements IContactController{
  constructor(private contactService:IContactService){}
  async createContact(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const data = req.body
      if(!data){
        throw new Error()
      }
      const result = await this.contactService.createContact(data)
      res.status(200).json({success:true,data:result})
    } catch (error) {
      next(error)
    }
  }
}