import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { data } from '../../data/data'

@Component({
  selector: 'app-area-tela',
  templateUrl: './area-tela.component.html',
  styleUrls: ['./area-tela.component.css']
})
export class AreaTelaComponent implements OnInit {
  tituloArea:string = ""
  private id: string | null = "0"

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(value =>
      this.id = value.get("id")
    )

    this.setValuesToComponent(this.id)
  }

  setValuesToComponent(id: string | null ) {
    const result = data.filter(article => console.log(article.area))
    

  }


}
