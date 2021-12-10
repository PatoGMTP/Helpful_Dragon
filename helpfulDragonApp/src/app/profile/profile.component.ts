import { Component, OnInit } from '@angular/core';
import { profile } from './profile';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  dragonsArr:profile[]=[
    {name:'Charizard',imgURL:'/assets/images/charizard.png',description:'hot af',rates:[1,2,3]},
    {name:'Toothless',imgURL:'/assets/images/toothless.jpeg',description:'great dental hygiene',rates:[1,2,3]},
    {name:'Shenron',imgURL:'/assets/images/shenron.jpeg',description:'powerful',rates:[1,2,3]},
    {name:'Dragon (Shrek)',imgURL:'/assets/images/girldragon.png',description:'loves donkeys',rates:[1,2,3]},
    {name:'Falkor',imgURL:'/assets/images/falkor.jpeg',description:'very fluffy',rates:[1,2,3]},
    {name:'Mushu',imgURL:'/assets/images/mushu.jpeg',description:'charming',rates:[1,2,3]},
    {name:'Dojo Kanojo',imgURL:'/assets/images/dojo.jpeg',description:'Xiaolin Showdown',rates:[1,2,3]},
    {name:'Dragon Tales (bundle)',imgURL:'/assets/images/dragontales.jpeg',description:'3.5 dragons and 2 children',rates:[1,2,3]}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
