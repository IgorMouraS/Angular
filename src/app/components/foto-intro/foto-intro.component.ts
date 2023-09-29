import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-foto-intro',
  templateUrl: './foto-intro.component.html',
  styleUrls: ['./foto-intro.component.css']
})
export class FotoIntroComponent implements OnInit {

  @Input()
  titulo:String = "";
  @Input()
  subTitulo:String = "";
  @Input()
  subTituloSpan:String = "";
  @Input()
  bgSrc: string = "";
  @Input()
  bgAlt: string = "";
  // @Input()
  // cardLink: string = "";


  constructor() {}

  ngOnInit(): void {
  }

}
