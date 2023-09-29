import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input()
  area: string = "";

  @Input()
  bgSrc: string = "";

  @Input()
  bgAlt: string = "";

  @Input()
  iconSrc:string = "";

  @Input()
  iconAlt:string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
