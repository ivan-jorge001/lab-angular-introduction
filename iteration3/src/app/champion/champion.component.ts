import { Component, OnInit } from '@angular/core';

class champs{
  public year:string;
  public championName:string;
  public photo:string;
  public mvp:string[];

   constructor(yea:string,championNam:string,phot:string,mv:string[],){
this.year = yea;
this.championName = championNam;
this.photo = phot;
this.mvp = mv;
   }

}
let FirstNBA = new champs('2013-14','San Antonio Spurs','data:image/png;base64,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',['Tim Duncan','Tony Parker','Manu Ginobili','Kawhi Leaonard','Tiago Spliter'])
let SecondNBA = new champs('2014-15','Golden State Warriors','https://s-media-cache-ak0.pinimg.com/originals/ee/25/af/ee25af3e358604700b9cdde1abb3be21.png',['Stephen Curry','Klay Thompson','Draymong Green','Andrew Bogut','Gestus Ezeli'])
let ThirdNBA = new champs('2015-16','Cleveland Cavaliers','http://www.stickpng.com/assets/images/58419c8da6515b1e0ad75a63.png',['Lebron James','Kyrie Irving','J.R.Smith',' Anderson varejao','Kevin Love'])

let array:any[]=[FirstNBA,SecondNBA,ThirdNBA];
@Component({
  selector: 'app-champion',
  templateUrl: './champion.component.html',
  styleUrls: ['./champion.component.css']
})
export class ChampionComponent implements OnInit {
 cham:any[]= array;
  constructor() { }

  ngOnInit() {
  }

}