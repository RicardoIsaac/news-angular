import { Component, EventEmitter , Output } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  @Output() SelectedParams= new EventEmitter<any>()

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
  const params={
    category:this.categorySelect,
    country:this.countrySelect
  }
  this.SelectedParams.emit(params)
}
}
