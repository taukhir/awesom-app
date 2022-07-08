import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @Input() public appHighlight : string = "yellow"

  constructor(private elementRef : ElementRef) { 

    elementRef.nativeElement.style.backgroundColor = "yellow";


  }



  @HostListener("mouseenter")
  mouseenter(){
    this.elementRef.nativeElement.style.backgroundColor = "blue";
  }


  @HostListener("mouseleave")
  mouseleave(){
    this.elementRef.nativeElement.style.backgroundColor = "blue";
  }

}
