import { Component, EventEmitter , Output } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  @Output() SelectedParams= new EventEmitter<any>()

  categorySelect="Category"
  countrySelect="All"

category:any[]=[
  {value:"Category",name:"Category"},
  {value:"business",name:"Business"},
  {value:"entertainment",name:"Entertainment"},
  {value:"general",name:"General"},
  {value:"health",name:"Health"},
  {value:"science",name:"Science"},
  {value:"sports",name:"Sports"},
  {value:"technology",name:"Technology"},

]
countries:any[]=[
  {value:"All",name:"Country"},
  {value:"ae",name:"United Arab Emirates"}, {value:"ar",name:"Argentina"},
  {value:"at",name:"Austria"},              {value:"au",name:"Australia"},
  {value:"be",name:"Belgium"},              {value:"bg",name:"Bulgaria"},
  {value:"br",name:"Brazil"},               {value:"ca",name:"Canada"},
  {value:"ch",name:"Switzerland"},          {value:"cn",name:"China"},
  {value:"co",name:"Colombia"},             {value:"cu",name:"Cuba"},
  {value:"cz",name:"Czech Republic"},       {value:"de",name:"Germany"},
  {value:"eg",name:"Egypt"},                {value:"fr",name:"France"},
  {value:"gb",name:"United Kingdom"},       {value:"gr",name:"Greece"},
  {value:"hk",name:"Hong Kong"},            {value:"hu",name:"Hungary"},
  {value:"id",name:"Indonesia"},            {value:"ie",name:"Ireland"},
  {value:"il",name:"Israel"},               {value:"in",name:"India"},
  {value:"jp",name:"Japan"},                {value:"kr",name:"South Korea"},
  {value:"lt",name:"Italy"},                {value:"lv",name:"Latvia"},
  {value:"ma",name:"Morocco"},              {value:"mx",name:"Mexico"},
  {value:"my",name:"Malaysia"},             {value:"ng",name:"Nigeria"},
  {value:"nl",name:"Netherlands"},          {value:"no",name:"Norway"},
  {value:"nz",name:"New Zealand"},          {value:"ph",name:"Philippines"},
  {value:"pl",name:"Poland"},               {value:"pt",name:"Portugal"},
  {value:"ro",name:"Romania"},              {value:"rs",name:"Serbia"},
  {value:"ru",name:"Romania"},              {value:"sa",name:"Saudi Arabia"},
  {value:"se",name:"Sweden"},               {value:"sg",name:"Singapore"},
  {value:"si",name:"Slovenia"},             {value:"sk",name:"Slovakia"},
  {value:"th",name:"Thailand"},             {value:"tr",name:"Turkey"},
  {value:"tw",name:"Taiwan"},               {value:"ua",name:"Ukraine"},
  {value:"us",name:"United States"},        {value:"ve",name:"Venezuela"},
  {value:"za",name:"South Africa"},

]


searchNew(){
  const params={
    category:this.categorySelect,
    country:this.countrySelect
  }
  this.SelectedParams.emit(params)
}
}
