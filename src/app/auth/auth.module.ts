import {APP_INITIALIZER, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {initializeKeycloak} from "./keycloak-init.factory";
import {KeycloakAngularModule, KeycloakService} from "keycloak-angular";
import {AuthGuard} from "./auth.guard";
import {AuthService} from "./service/auth.service";


@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        KeycloakAngularModule
    ],
    providers: [
        {
            provide: APP_INITIALIZER,
            useFactory: initializeKeycloak,
            multi: true,
            deps: [KeycloakService],
        },
        AuthGuard,
        AuthService
    ]
})
export class AuthModule { }
