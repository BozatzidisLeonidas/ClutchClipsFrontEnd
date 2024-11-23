import { Component, inject} from '@angular/core';
import { ReactiveFormsModule, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  formBuilder = inject(FormBuilder);

  form = this.formBuilder.nonNullable.group({
    name: [''],
    email: [''],
    age: [18],
    password: [''],
    confirmPassword: [''],
    phoneNumber: [''],
  });
}
