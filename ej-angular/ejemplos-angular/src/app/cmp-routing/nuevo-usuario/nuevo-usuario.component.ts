import { Component, OnInit } from '@angular/core';
import { Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ComponentCanDeactivate } from './nuevo-usuario.guard';

@Component({
  selector: 'app-nuevo-usuario',
  templateUrl: './nuevo-usuario.component.html',
  styleUrls: ['./nuevo-usuario.component.css']
})
export class NuevoUsuarioComponent implements OnInit, ComponentCanDeactivate {

  constructor(private router: Router) { }

  datosGuardados = false

  ngOnInit(): void {
  }

  crearUsuario() {
    console.log("guardando datos...")
    setTimeout(()=> {
      //this.router.navigate(['/'])
      this.datosGuardados = true
    },1000)
  }

  puedoSalir(): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    return this.datosGuardados || confirm('Perderás los cambios...')
  }
}
