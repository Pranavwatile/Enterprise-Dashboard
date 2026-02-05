import { JsonPipe, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { profileSignal, saveProfile } from './setting.store';

@Component({
  selector: 'app-settings',
  imports: [ReactiveFormsModule, JsonPipe, NgIf],
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
  
constructor(){
  const profile = profileSignal();
  if (profile){
    this.profileForm.patchValue(profile);
  }
}
  save() {
    saveProfile(this.profileForm.value as any);
    console.log("SAVE CLICKED", this.profileForm.value);
  }

}
