import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { profile } from './profile';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  dragonsArr:profile[]=[
    {name:'Charizard',franchise: 'Pokémon',imgURL:'/assets/images/charizard.png',description:'hot af',rates:[1,2,3]},
    {name:'Toothless',franchise: 'How to Train Your Dragon',imgURL:'/assets/images/toothless.jpeg',description:'great dental hygiene',rates:[1,2,3]},
    {name:'Shenron',franchise: 'Dragon Ball',imgURL:'/assets/images/shenron.jpeg',description:'powerful',rates:[1,2,3]},
    {name:'Dragon (Shrek)',franchise: 'Shrek',imgURL:'/assets/images/girldragon.png',description:'loves donkeys',rates:[1,2,3]},
    {name:'Falkor',franchise: 'Neverending Story',imgURL:'/assets/images/falkor.jpeg',description:'very fluffy',rates:[1,2,3]},
    {name:'Mushu',franchise: 'Mulan',imgURL:'/assets/images/mushu.jpeg',description:'charming',rates:[1,2,3]},
    {name:'Dojo Kanojo',franchise: 'Xiaolin Showdown',imgURL:'/assets/images/dojo.jpeg',description:'He is the guardian dragon of the Xiaolin Temple and keeper of the Ancient Scroll of the Shen Gong Wu. He was also the monks" primary method of transportation.',rates:[1,2,3]},
    {name:'Blue-Eyes White Dragon',franchise: 'Yu-Gi-Oh!',imgURL:'/assets/images/bewd.png',description:'This legendary dragon is a powerful engine of destruction. Virtually invincible, very few have faced this awesome creature and lived to tell the tale. It"s type is [Dragon / Normal]. It"s level is 8. [ATK 3000 / DEF 2500]',rates:[1,2,3]},
    {name:'Dragon Tales (bundle)',franchise: 'Dragon Tales',imgURL:'/assets/images/dragontales.jpeg',description:'This bundle consist of 3.5 dragons and 2 children. The dragons" names are Ord, Cassie, Zak, and Wheezie and the childrens" names are Emmy and Max.',rates:[1,2,3]}
  ]

  chosenDragon:profile=this.dragonsArr[0];

  constructor() { }

  ngOnInit(): void {
  }

  displayInfo(dragon:profile){
    this.chosenDragon=dragon
  }

  rent_type: string = "";
  rent_type_list: [string, string][] = [["Hourly", "hours"], ["Daily", "days"], ["Weekly", "weeks"]];
  start_date: string = "";
  rent_length: number = 0;

  onSubmit(form: NgForm): void
  {
    console.log(form);
  }

}
