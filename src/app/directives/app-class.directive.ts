import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appAppClass]'
})
export class AppClassDirective {
  
  constructor(public element:ElementRef) { }
  @Input('appAppClass') set className(classObject:any){
      // this.element.nativeElement.style.color=color;
      for (const key in classObject) {
          if(classObject[key]){
            this.element.nativeElement.classList.add(key)
          }
          else{
            this.element.nativeElement.classList.remove(key)
          }
      }
  }

}
