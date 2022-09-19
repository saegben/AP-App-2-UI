import { Component } from '@angular/core';
import { AbstractControl, NgModel, ValidatorFn } from '@angular/forms';
import { Router } from '@angular/router';
import { Student } from '../student';


@Component({ 
    selector: 'create-student-acc-root',
    templateUrl: './create-student-acc.component.html',
    styleUrls: [ './create-student-acc.component.css' ]
})
export class CreateStudentAccComponent {
    
    constructor(private router: Router) {}

    confirmReturn() {
        alert('Changes will not be saved.');
    }

    // Comment-out or delete once unneeded
    observeInput(firstname:string, lastname:string, phonenumber:string, emailaddress:string, 
                highschool:string, birthday:string, addresslineone:string, addresslinetwo:string, password:string) {
        console.log("First Name: " + firstname);
        console.log("Last Name: " + lastname);
        console.log("Phone Number: " + phonenumber);
        console.log("Email Address: " + emailaddress);
        console.log("High School: " + highschool);
        console.log("Birthday: " + birthday);
        console.log("Address Line One: " + addresslineone);
        console.log("Address Line Two: " + addresslinetwo);
        console.log("Password: " + password);
    }

    // Create username in API:
    // -> Send firstname, lastname, and birthday
    // -> Convert into username
    // -> send back to UI to display
    createUsername(firstname:string, lastname:string, birthday:string) {
        // Reformat date
        let re = /[^A-Za-z0-9]/g;
        birthday = birthday.replace(re, "");
        birthday = birthday.slice(-4) + birthday.slice(0, -4);

        // Create username
        var username:string = firstname + lastname + birthday;
        username = username.toLowerCase().replace(re, "");
        console.log('Username: ', username);
    }

    // firstname, lastname, phonenumber, emailaddress, highschool, birthday, addresslineone, addresslinetwo, password, confirmpassword, username
    model = new Student('', '', '', '', '', '', '', '', '', '', '');

    submitted = false;

    onSubmit() {
        this.submitted = true;
        //this.router.navigate(['/account-successfully-created']);
    }


}