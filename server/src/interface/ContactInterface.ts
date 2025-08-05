import { NextFunction, Request, Response } from "express";
import { IContact } from "../model/ContactModel";

export interface IContactRepository{
  createContact(data:IContact):Promise<IContact|null>
}

export interface IContactService{
  createContact(data:IContact):Promise<IContact | null>
}

export interface IContactController{
  createContact(req:Request,res:Response,next:NextFunction):Promise<void>
}