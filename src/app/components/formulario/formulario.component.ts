import { Component } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {

  categorySelect="general"
  countrySelect="All"

category:any[]=[
  {value:"general",name:"General"},
  {value:"business",name:"Business"},

]
countries:any[]=[
  {value:"All",name:"All"},
  {value:"mx",name:"Mexico"},
  {value:"ar",name:"Argentina"},

]


searchNew(){
  console.log(this.categorySelect)
  console.log(this.countrySelect)
}
}
