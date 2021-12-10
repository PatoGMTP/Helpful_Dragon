import { Component, OnInit } from '@angular/core';
import { profile } from './profile';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  dragonsArr:profile[]=[
    {name:'Dragon (Shrek)',picURL:'',description:'loves donkeys',rates:[1,2,3]},
    {name:'Dojo',picURL:'',description:'Xiaolin Showdown',rates:[1,2,3]},
    {name:'Toothless',picURL:'',description:'great dental hygiene',rates:[1,2,3]},
    {name:'Falkor',picURL:'',description:'very fluffy',rates:[1,2,3]},
    {name:'Mushu',picURL:'',description:'charming',rates:[1,2,3]},
    {name:'Shenron',picURL:'',description:'powerful',rates:[1,2,3]},
    {name:'Charizard',picURL:'',description:'hot af',rates:[1,2,3]}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
