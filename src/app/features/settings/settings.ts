import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-settings',
  imports: [ReactiveFormsModule, JsonPipe],
  templateUrl: './settings.html',
  styleUrl: './settings.scss',
  standalone: true,
})
export class Settings {

  private fb = new FormBuilder();

  profileForm = this.fb.group(
    {
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    }
  );
  

  save() {
    console.log("SAVE CLICKED", this.profileForm.value);
  }

}
