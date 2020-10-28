import { Directive, ViewContainerRef, TemplateRef, Input } from '@angular/core';

@Directive({
  selector: '[appCustomNgFor]'
})
export class CustomNgForDirective {

  
  constructor(private veiwChildContent:ViewContainerRef, private templetRef:TemplateRef<any>) { 
      
  }
  @Input('appCustomNgFor') set length(l:number){
  

   for (let index = 0; index < l; index++) {
    this.veiwChildContent.createEmbeddedView(this.templetRef,{
      index:index
    });
   }

  }

}
