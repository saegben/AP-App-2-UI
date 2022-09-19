import { Component, OnInit } from "@angular/core";


@Component({ 
    selector: 'success-root',
    templateUrl: './success.component.html',
    styleUrls: [ './success.component.css' ]
})
export class SuccessComponent {

    // Should refer to 'username' made in create_account.component.ts
    // -> Recieve value from API
    username = placeholder();

}
export function placeholder():string {
    return "placeholder";
}