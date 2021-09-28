import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ComponenteAManoComponent } from './componente-a-mano/componente-a-mano.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponenteAManoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
