import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InfoUsuarioGuard implements CanActivate {
  canActivate(
    route: ActivatedRouteSnapshot,//ruta de la que vamos a salir
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {//estado de la ruta en la que estamos
    return confirm("Seguro que puedes verlo?");//si esta función retorna true, podrá navegar
  }
  
}
