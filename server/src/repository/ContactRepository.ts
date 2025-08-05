import { IContactRepository } from "../interface/ContactInterface";
import { Contact, IContact } from "../model/ContactModel";

export class ContactRepository implements IContactRepository{
  async createContact(data: IContact): Promise<IContact | null> {
    return Contact.create(data)
  }
}