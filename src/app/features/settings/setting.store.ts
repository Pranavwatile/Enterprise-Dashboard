import { signal } from "@angular/core";

export interface Profile{
    name: string;
    email: string;
}
const STORAGE_KEY = 'profile';

export const profileSignal = signal<Profile | null>(
    JSON.parse(localStorage.getItem(STORAGE_KEY) || 'null' )
);

export function saveProfile(profile : Profile)
{
    localStorage.setItem(STORAGE_KEY, JSON.stringify(profile));
    profileSignal.set(profile);
}