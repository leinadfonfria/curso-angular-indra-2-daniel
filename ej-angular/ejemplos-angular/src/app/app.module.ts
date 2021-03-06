import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RoutingModule } from './cmp-routing/app.routes';
import { SharedModule } from './cmp-modulos/shared/shared.module';

import { AppComponent } from './app.component';
import { ComponenteAManoComponent } from './componente-a-mano/componente-a-mano.component';
import { ComponenteCliComponent } from './componente-cli/componente-cli.component';
import { CmpDataBindingComponent } from './cmp-data-binding/cmp-data-binding.component';
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
import { CmpDirectivasComponent } from './cmp-directivas/cmp-directivas.component';
import { MarcarDirective } from './cmp-directivas/marcar.directive';
import { PowerModeDirective } from './cmp-directivas/power-mode.directive';
import { FiltroPipe } from './cmp-directivas/filtro.pipe';
import { CmpServiciosComponent } from './cmp-servicios/cmp-servicios.component';

import { LukeComponent as SLukeComponent } from './cmp-servicios/luke/luke.component';
import { LeiaComponent as SLeiaComponent } from './cmp-servicios/leia/leia.component';
import { TareaComponent } from './cmp-servicios/tarea/tarea.component';
import { CmpObservablesComponent } from './cmp-observables/cmp-observables.component';
import { CmpHttpComponent } from './cmp-http/cmp-http.component';
import { CmpRoutingComponent } from './cmp-routing/cmp-routing.component';
import { Error404Component } from './cmp-routing/error404/error404.component';
import { NuevoUsuarioComponent } from './cmp-routing/nuevo-usuario/nuevo-usuario.component';
import { ListaUsuariosComponent } from './cmp-routing/lista-usuarios/lista-usuarios.component';
import { InfoUsuarioComponent } from './cmp-routing/info-usuario/info-usuario.component';
import { CmpModulosComponent } from './cmp-modulos/cmp-modulos.component';
import { TokenInterceptor } from './cmp-http/token.interceptor';
import { CacheInterceptor } from './cmp-http/cache.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    ComponenteAManoComponent,
    ComponenteCliComponent,
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
    HideWordsPipe,
    CmpDirectivasComponent,
    MarcarDirective,
    PowerModeDirective,
    FiltroPipe,
    CmpServiciosComponent,
    SLukeComponent,
    SLeiaComponent,
    TareaComponent,
    CmpObservablesComponent,
    CmpHttpComponent,
    CmpRoutingComponent,
    Error404Component,
    NuevoUsuarioComponent,
    ListaUsuariosComponent,
    InfoUsuarioComponent,
    CmpModulosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RoutingModule,
    SharedModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: CacheInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
