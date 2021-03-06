import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ComponenteAManoComponent } from './componente-a-mano/componente-a-mano.component';
import { ComponenteAComponent } from './componente-a/componente-a.component';
import { ComponenteBComponent } from './componente-b/componente-b.component';
import { CmpDataBindingComponent } from './cmp-data-binding/cmp-data-binding.component'
import { FormsModule } from '@angular/forms';
import { EventosComponent } from './cmp-data-binding/eventos/eventos.component';
import { CmpComunicacionEntreComponentesComponent } from './cmp-comunicacion-entre-componentes/cmp-comunicacion-entre-componentes.component';
import { SugusComponent } from './cmp-comunicacion-entre-componentes/sugus/sugus.component';
import { ProductoComponent } from './cmp-comunicacion-entre-componentes/producto/producto.component';
import { AnakinComponent } from './cmp-comunicacion-entre-componentes/anakin/anakin.component';
import { LukeComponent } from './cmp-comunicacion-entre-componentes/luke/luke.component';
import { LeiaComponent } from './cmp-comunicacion-entre-componentes/leia/leia.component';
import { MiBotonComponent } from './cmp-comunicacion-entre-componentes/mi-boton/mi-boton.component';
import { CmpPipesComponent } from './cmp-pipes/cmp-pipes.component';
import { ReversePipe } from './cmp-pipes/reverse.pipe';
import { DoblePipe } from './cmp-pipes/doble.pipe';
import { HideWordsPipe } from './cmp-pipes/hide-words.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ComponenteAManoComponent,
    ComponenteAComponent,
    ComponenteBComponent,
    CmpDataBindingComponent,
    EventosComponent,
    CmpComunicacionEntreComponentesComponent,
    SugusComponent,
    ProductoComponent,
    AnakinComponent,
    LukeComponent,
    LeiaComponent,
    MiBotonComponent,
    CmpPipesComponent,
    ReversePipe,
    DoblePipe,
    HideWordsPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
