import { Component, OnInit, Input, 
    ViewEncapsulation, ViewChild, 
    ElementRef, ContentChild, SimpleChanges, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated  //Native, None, ShadowDom
})
export class ServerElementComponent implements OnInit, OnChanges, 
        DoCheck, AfterContentInit, AfterContentChecked, 
        AfterViewInit, AfterViewChecked, OnDestroy {

  // @Input('aliasName') directive to expose this property 
    // for binding from other component
  @Input('srvElement') element: {type: string, name: string, content: string};

  @Input() name: string;

  @ViewChild('heading', {static: true}) header: ElementRef;
  @ContentChild('contentParagraph', {static: true}) paragraph: ElementRef;

  constructor() { 
    console.log('Constructor Called');
  }

  ngOnChanges(changes: SimpleChanges){
    console.log('ngOnChanges called');
    console.log(changes);
  }

  ngOnInit(): void {
    console.log('ngOnInint Called');
    console.log('Text Content : ' + this.header.nativeElement.textContent);
    console.log('Text Content of paragraph : ' + this.paragraph.nativeElement.textContent);
  }

  ngDoCheck(){
    console.log('ngDoCheck called');
  }

  ngAfterContentInit(){
    console.log('ngAfterContentInit called');
    console.log('Text Content of paragraph : ' + this.paragraph.nativeElement.textContent);
  }

  ngAfterContentChecked(){
    console.log('ngAfterContentChecked Called');    
  }

  ngAfterViewInit(){
    console.log('ngAfterViewInit called');
    console.log('Text Content : ' + this.header.nativeElement.textContent);   
  }

  ngAfterViewChecked(){
    console.log('ngAfterViewChecked Called');
    
  }

  ngOnDestroy(){
    console.log('ngOnDestroy Called');
    
  }
}
