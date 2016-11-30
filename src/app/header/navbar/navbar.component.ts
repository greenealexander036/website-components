import { Component } from '@angular/core';

@Component({
    moduleId: 'module.id',
    selector: 'navbar',
    templateUrl: 'navbar.component.html',
    styleUrls: ['navbar.component.scss']
})
export class NavbarComponent {
    title = 'Wanowa Rising Sons';
    links = [
        {name: 'About', url: '#'},
        {name: 'Products', url: '#'},
        {name: 'Places', url: '#'},
        {name: 'Sign Up', url: '#'}  
    ];
}
