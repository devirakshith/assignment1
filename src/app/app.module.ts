import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FeatureComponent } from './feature/feature.component';
import { ChangebackgroundcolorDirective } from './feature/changebackgroundcolor.directive';

@NgModule({
  declarations: [
    AppComponent,
    FeatureComponent,
    ChangebackgroundcolorDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
