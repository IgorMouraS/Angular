import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-titulo-descricao',
  templateUrl: './titulo-descricao.component.html',
  styleUrls: ['./titulo-descricao.component.css']
})
export class TituloDescricaoComponent implements OnInit {

  @Input()
  titulo:string = "";
  @Input()
  texto:string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
