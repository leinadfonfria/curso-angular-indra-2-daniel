import { Routes, RouterModule } from "@angular/router";
import { AdminComponent } from "./admin/admin.component";

const ADMIN_ROUTES: Routes = [
    {
        path: '', component: AdminComponent
    }
]

export const ADMIN_ROUTER_MODULE = RouterModule.forChild(ADMIN_ROUTES)