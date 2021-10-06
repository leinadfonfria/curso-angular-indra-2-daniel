import { RouterModule, Routes } from "@angular/router";
import { VendehumosDetailComponent } from "./components/vendehumos-detail/vendehumos-detail.component";
import { VendehumosListComponent } from "./components/vendehumos-list/vendehumos-list.component";

const RUTAS_APP: Routes = [
    { 
        path: 'vendehumos', 
        component: VendehumosListComponent
    },
    {
        path: 'vendehumos/detail/:id',
        component: VendehumosDetailComponent
    },
    { path: '', redirectTo: 'vendehumos', pathMatch: 'full' },

    { path: '**', redirectTo: 'vendehumos'}
]

export const RoutingModule = RouterModule.forRoot(RUTAS_APP)