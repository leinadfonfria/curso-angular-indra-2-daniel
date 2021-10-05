import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CvDinamicoComponent } from './cv-dinamico/cv-dinamico.component';
import { FormularioComponent } from './cv-dinamico/formulario/formulario.component';
import { PreviewCvComponent } from './cv-dinamico/preview-cv/preview-cv.component';
import { CmpPowemodeComponent } from './cmp-powemode/cmp-powemode.component';
import { PowerModeDirective } from './cmp-powemode/power-mode.directive';
import { UnsubscribeComponent } from './cmp-observables/unsubscribe/unsubscribe.component';

@NgModule({
  declarations: [
    AppComponent,
    CvDinamicoComponent,
    FormularioComponent,
    PreviewCvComponent,
    CmpPowemodeComponent,
    PowerModeDirective,
    UnsubscribeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
