import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ComponenteAManoComponent } from './componente-a-mano/componente-a-mano.component';
import { ComponenteCliComponent } from './componente-cli/componente-cli.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponenteAManoComponent,
    ComponenteCliComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
