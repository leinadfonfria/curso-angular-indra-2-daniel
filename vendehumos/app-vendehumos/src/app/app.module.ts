import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { VendehumosListComponent } from './vendehumos/components/vendehumos-list/vendehumos-list.component';
import { VendehumosDetailComponent } from './vendehumos/components/vendehumos-detail/vendehumos-detail.component';
import { VendehumosNewComponent } from './vendehumos/components/vendehumos-new/vendehumos-new.component';
import { LogInComponent } from './usuarios/components/log-in/log-in.component';
import { LogOutComponent } from './usuarios/components/log-out/log-out.component';
import { HttpClientModule } from '@angular/common/http';
import { VendehumosListElemComponent } from './vendehumos/components/vendehumos-list/vendehumos-list-elem/vendehumos-list-elem.component';
import { RoutingModule } from './vendehumos/app.routes';

@NgModule({
  declarations: [
    AppComponent,
    VendehumosListComponent,
    VendehumosDetailComponent,
    VendehumosNewComponent,
    LogInComponent,
    LogOutComponent,
    VendehumosListElemComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
