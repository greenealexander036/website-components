// Angular Imports
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

// This Module's Components
import { HeaderComponent } from './header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderTextComponent } from './header-text/header-text.component';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        HeaderComponent,
        NavbarComponent,
        HeaderTextComponent
    ],
    exports: [
        HeaderComponent
    ]
})
export class HeaderModule {

}
