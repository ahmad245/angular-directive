import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppClassDirective } from './directives/app-class.directive';
import { CustomNgForDirective } from './directives/custom-ng-for.directive';

@NgModule({
  declarations: [
    AppComponent,
    AppClassDirective,
    CustomNgForDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
