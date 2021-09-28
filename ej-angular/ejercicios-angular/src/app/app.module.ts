import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CvDinamicoComponent } from './cv-dinamico/cv-dinamico.component';
import { FormularioComponent } from './cv-dinamico/formulario/formulario.component';
import { PreviewCvComponent } from './cv-dinamico/preview-cv/preview-cv.component';

@NgModule({
  declarations: [
    AppComponent,
    CvDinamicoComponent,
    FormularioComponent,
    PreviewCvComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
