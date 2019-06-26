import { ValidatorFn, AbstractControl } from '@angular/forms';

export class CustomValidator {

    static validAgeRange(min: number, max: number): ValidatorFn {
        return (control: AbstractControl): { [key: string]: boolean } | null => {
            if (control.value !== null && (isNaN(control.value) || control.value < min || control.value > max)) {
                return { 'ageRange': true };
            }
            return null;
        };
    }

    static validateUrl(control: AbstractControl): { [key: string]: boolean } | null {
        if (control.value !== null && (!control.value.startsWith('https://'))) {
            return { 'validUrl': true };
        }
        return null;
    } 
}
