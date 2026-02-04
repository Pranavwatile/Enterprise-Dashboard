import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-settings',
  imports: [ReactiveFormsModule],
  templateUrl: './settings.html',
  styleUrl: './settings.scss',
  standalone: true,
})
export class Settings {

settingsForm;

  constructor(private fb: FormBuilder) {
    this.settingsForm = this.fb.group({
      fullName: [''],
      email: ['']
    })
  }

  save() {
    console.log("SAVE CLICKED", this.settingsForm.value);
  }

}
