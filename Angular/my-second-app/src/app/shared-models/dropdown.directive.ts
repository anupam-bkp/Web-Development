import { Directive, OnInit, HostListener, HostBinding } from '@angular/core';

@Directive({
    selector: '[appDropdown]'
})
export class DropdownDirective implements OnInit{

    @HostBinding('class.open') isOpen:boolean = false;

    @HostListener('click') toggleOpen(){
        console.log(this.isOpen);
        this.isOpen = !this.isOpen;
    }

    constructor(){
    }

    ngOnInit(){
    }
}