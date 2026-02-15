import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import emailjs from '@emailjs/browser';
import { EmailResponse } from '../model/emailResponseModel';
import { from, Observable } from 'rxjs';
import { ContactForm } from '../model/contactFormModel';

@Injectable({
  providedIn: 'root',
})
export class Email {
  private readonly config = environment.emailjs

  constructor(){
    emailjs.init(this.config.publicKey)
  }


    sendContactEmail(formData: ContactForm): Observable<EmailResponse> {
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
      to_email: 'valeriasoaressantos2@gmail.com'
    };

    return from(
      emailjs.send(
        this.config.serviceId,
        this.config.templateId,
        templateParams
      )
    );
  }
}
