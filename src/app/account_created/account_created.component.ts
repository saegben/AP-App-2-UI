import { Component } from "@angular/core";

@Component({ 
    selector: 'account_created-root',
    templateUrl: './account_created.component.html',
    styleUrls: [ './account_created.component.css' ]
})
export class AccountCreatedComponent {

    // Should refer to 'username' from create_account.component.ts
    username = placeholder();

}
export function placeholder():string {
    return "placeholder"
}