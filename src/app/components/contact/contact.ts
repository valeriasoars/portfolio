import { Component, inject, signal } from '@angular/core';
import { Title } from "../title/title";
import { Email } from '../../services/email';
import { ContactForm } from '../../model/contactFormModel';
import { FormBuilder, FormsModule, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  imports: [Title, CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
private emailService = inject(Email)

isLoading = signal(false)
successMessage = signal('')
errorMessage = signal('')
private fb = inject(FormBuilder)

 contactForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]],
    message: ['', [Validators.required, Validators.minLength(10)]]
  })

  onSubmit(): void{
     if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      this.errorMessage.set('Por favor, preencha todos os campos corretamente.');
      return;
    }

    this.isLoading.set(true);
    this.errorMessage.set('');
    this.successMessage.set('');

    this.emailService.sendContactEmail(this.contactForm.value as any).subscribe({
      next: (response) => {
        console.log('Email enviado:', response);
        this.successMessage.set('Mensagem enviada com sucesso!');
        this.contactForm.reset();
      },
      error: (error) => {
        console.error('Erro:', error);
        
        if (error.status === 412) {
          this.errorMessage.set('Erro de autenticação. Tente novamente.');
        } else {
          this.errorMessage.set('Erro ao enviar. Tente novamente.');
        }
      },
      complete: () => {
        this.isLoading.set(false);
      }
    });
  }

  // Getters para facilitar acesso aos controles
  get name() { return this.contactForm.get('name'); }
  get email() { return this.contactForm.get('email'); }
  get message() { return this.contactForm.get('message'); }

  

}
