import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CvDinamicoComponent } from './cv-dinamico/cv-dinamico.component';
import { FormularioComponent } from './cv-dinamico/formulario/formulario.component';
import { PreviewCvComponent } from './cv-dinamico/preview-cv/preview-cv.component';
import { CmpPowemodeComponent } from './cmp-powemode/cmp-powemode.component';
import { PowerModeDirective } from './cmp-powemode/power-mode.directive';
import { UnsubscribeComponent } from './cmp-observables/unsubscribe/unsubscribe.component';
import { CmpRoutingComponent } from './cmp-routing/cmp-routing.component';
import { Error404Component } from './cmp-routing/error404/error404.component';
import { NuevoUsuarioComponent } from './cmp-routing/nuevo-usuario/nuevo-usuario.component';
import { ListaUsuariosComponent } from './cmp-routing/lista-usuarios/lista-usuarios.component';

@NgModule({
  declarations: [
    AppComponent,
    CvDinamicoComponent,
    FormularioComponent,
    PreviewCvComponent,
    CmpPowemodeComponent,
    PowerModeDirective,
    UnsubscribeComponent,
    CmpRoutingComponent,
    Error404Component,
    NuevoUsuarioComponent,
    ListaUsuariosComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
