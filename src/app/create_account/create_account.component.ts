import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({ 
    selector: 'create_account-root',
    templateUrl: './create_account.component.html',
    styleUrls: [ './create_account.component.css' ]
})
export class CreateAccountComponent {
    
    constructor(private router: Router) {}

    confirmReturn() {
        alert('Changes will not be saved.');
    }

    validatePassword(password:string, confirmPassword:string) {
        const min = 6;

        if (password.length < min) {
            alert("Must have at least 6 characters");
            return false;
        }
        if (password != confirmPassword) {
            alert("Password does not match.");
            return false;
        } 
        else {
            return true;
        }
    }

    // In the future will accept more parameters than just password
    validForm(matchPassword:boolean) {
        if (matchPassword == true) {
            this.router.navigate(['/account-created']);
            return true;
        } else {
            return false;
        }
    }

    onSubmit(fullname:string, phonenumber:string, email:string, highschool:string, 
        birthday:string, address1:string, address2:string, password:string) {
        // Should eventually send information to database 
        // For now, new logged input in console to check
        console.log('Full Name: ', fullname);
        console.log('Phone Number: ', phonenumber);
        console.log('Email: ', email);
        console.log('High School: ', highschool);
        console.log('Birthday: ', birthday);
        console.log('Address 1: ', address1);
        console.log('Address 2: ', address2);
        console.log('Password: ', password);

        createUsername(fullname, birthday); 
    }

}
export function createUsername(fullname:string, birthday:string) {
    // Reformat date
    let re = /[^A-Za-z0-9]/g;
    birthday = birthday.replace(re, "");
    birthday = birthday.slice(-4) + birthday.slice(0, -4);

    // Create username
    var username:string = fullname + birthday;
    username = username.toLowerCase().replace(re, "");
    console.log('Username: ', username);
}