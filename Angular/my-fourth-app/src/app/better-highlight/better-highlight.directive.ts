import { Directive, OnInit, ElementRef, Renderer2, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit{

  @Input() defaultColor: string  = 'transparent';
  @Input() highlighColor: string = 'blue';

  @HostBinding('style.background') backgroundColor: string;

  constructor(private eleRef: ElementRef,
              private renderer: Renderer2) { 
  }

  ngOnInit(){
    this.backgroundColor = this.defaultColor;
    // this.renderer.setStyle(this.eleRef.nativeElement,
    //             'background-color', 'blue');
  }

  @HostListener('mouseenter') mouseover(eventData: Event){
    // this.renderer.setStyle(this.eleRef.nativeElement,'background-color', 'blue');
    this.backgroundColor = this.highlighColor;
  } 

  @HostListener('mouseleave') mouseleave(eventData: Event){
    // this.renderer.setStyle(this.eleRef.nativeElement,'background-color', 'transparent');
    this.backgroundColor = this.defaultColor;
  } 

}
