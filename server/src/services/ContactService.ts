import { IContactRepository, IContactService } from "../interface/ContactInterface";
import { IContact } from "../model/ContactModel";

export class ContactService implements IContactService{
  constructor(private contactRepo : IContactRepository){}
  async createContact(data: IContact): Promise<IContact | null> {
    return await this.contactRepo.createContact(data)
  }
}