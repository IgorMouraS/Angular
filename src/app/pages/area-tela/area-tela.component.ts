import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { data } from '../../data/data'

@Component({
  selector: 'app-area-tela',
  templateUrl: './area-tela.component.html',
  styleUrls: ['./area-tela.component.css']
})
export class AreaTelaComponent implements OnInit {
  tituloArea:string = ""
  bgSrcArea:string = ""
  bgAltArea:string = ""
  textoTitulo:string = ""
  textoParagrafo:string = ""
  private id: string | null = "0"
  private conteudo: string | null = "area"

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(value =>{
      const conteudo = value.get('conteudo');
      const id = value.get('id');
      this.conteudo = conteudo;
      this.id = id;
  })

    this.setValuesToComponent(this.id, this.conteudo)
  }

  setValuesToComponent(id: string | null, conteudo: string | null ) {
    const result = data.filter(article => {
      // if(conteudo !== null && typeof conteudo === "string"){
      //   const rota = article[conteudo][id];
      //   console.log(rota);
      // }
      console.log(article, conteudo, id)
    })
    

  }


}
