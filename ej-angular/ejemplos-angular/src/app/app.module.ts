import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ComponenteAManoComponent } from './componente-a-mano/componente-a-mano.component';
import { ComponenteCliComponent } from './componente-cli/componente-cli.component';
import { CmpDataBindingComponent } from './cmp-data-binding/cmp-data-binding.component';
import { FormsModule } from '@angular/forms';
import { EventosComponent } from './cmp-data-binding/eventos/eventos.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponenteAManoComponent,
    ComponenteCliComponent,
    CmpDataBindingComponent,
    EventosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
