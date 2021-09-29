import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  @Input() img: string = 'default.png'
  @Input() nombre: string = 'producto'
  @Input() descripcion: string = 'descripción del producto'

  constructor() { }

  ngOnInit(): void {
  }

}
