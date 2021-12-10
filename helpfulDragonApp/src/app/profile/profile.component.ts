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
    {name:'Charizard',franchise: 'Pokémon',imgURL:'/assets/images/charizard.png',description:'Charizard are noble and will not turn the full power of their flame on opponents significantly weaker than they are. Charizards are also known to be very eager to battle. Charizard seeks out stronger foes and only breathes fire during battles with worthy opponents. The fiery breath is so hot that it can turn any material to slag. They can be very dangerous and aggressive if provoked.',rates:[10,20,30]},

    {name:'Toothless',franchise: 'How to Train Your Dragon',imgURL:'/assets/images/toothless.jpeg',description:'Toothless is the most intelligent of all known dragons, and seems to have a dry sense of humor. He doesn"t take kindly to being offended, and is very protective of his human friend. He is usually quite playful and even a little teasing when not threatened and shows a sense of great curiosity.',rates:[1,2,3]},

    {name:'Shenron',franchise: 'Dragon Ball',imgURL:'/assets/images/shenron.jpeg',description:'As with most wish-granting Eternal Dragons, Shenron is a neutral figure who grants any wish within his power regardless of the intent of the wish itself or the nature of his summoner. Shenron is normally very courteous, polite, and does his best to grant a wish in a way that will bring the most joy to the summoner, including advising against what he considers impractical wishes and proposing alternatives unless the summoner absolutely insists.',rates:[1,2,3]},

    {name:'Dragon (Shrek)',franchise: 'Shrek',imgURL:'/assets/images/girldragon.png',description:'A giant, magenta-red dragoness who guarded the derelict castle which serves as Princess Fiona’s prison. She had presumably been placed in this role by the Fairy Godmother so that her son Prince Charming could rescue Fiona and marry her and in return, dragon would eat the other knights who tried to rescue Fiona.',rates:[1,2,3]},

    {name:'Falkor',franchise: 'Neverending Story',imgURL:'/assets/images/falkor.jpeg',description:'Being a Luck Dragon, Falkor is very wise, incredibly positive, dignified and a very sociable sophisticated being from Fantasia. He gives advice to people when they have lost hope in many things they set out to do whether in a quest for what they seek or in some cases people and beings have given up altogether and lost faith.',rates:[1,2,3]},

    {name:'Mushu',franchise: 'Mulan',imgURL:'/assets/images/mushu.jpeg',description:'He is a pint-sized, fast-talking, self-absorbed Chinese dragon and the self-appointed guardian of Fa Mulan. Mushu is in most situations more comical, overconfident, and impulsive.',rates:[1,2,3]},

    {name:'Dojo Kanojo Cho',franchise: 'Xiaolin Showdown',imgURL:'/assets/images/dojo.jpeg',description:'He is the guardian dragon of the Xiaolin Temple and keeper of the Ancient Scroll of the Shen Gong Wu. He was also the monks" primary method of transportation. Dojo possessed the ability to change his size from the size of a lizard to a 40-foot dragon. He was also a known shape-shifter.',rates:[1,2,3]},

    {name:'Blue-Eyes White Dragon',franchise: 'Yu-Gi-Oh!',imgURL:'/assets/images/bewd.png',description:'This legendary dragon is a powerful engine of destruction. Virtually invincible, very few have faced this awesome creature and lived to tell the tale. It"s type is [Dragon / Normal]. It"s level is 8. [ATK 3000 / DEF 2500]',rates:[1,2,3]},
    
    {name:'Dragon Tales (bundle)',franchise: 'Dragon Tales',imgURL:'/assets/images/dragontales.jpeg',description:'This bundle consist of 3.5 dragons(Children Not Included). The dragons" names are Ord, Cassie, Zak, and Wheezie.',rates:[1,2,3]}
  ]

  chosenDragon:profile={name:'',franchise: '',imgURL:'',description:'',rates:[1,2,3]};

  constructor() { }

  ngOnInit(): void {
  }

  inCart: boolean = false;

  current_element?: HTMLElement;

  displayInfo(dragon:profile, element: HTMLElement){
    console.log(element);
    this.chosenDragon=dragon;
    this.inCart = !!this.chosenDragon_list.find(item => item.dragon.name === this.chosenDragon.name);
    this.current_element = element;
  }

  rent_type: string = "";
  rent_type_list: [string, string][] = [["Hourly", "hours"], ["Daily", "days"], ["Weekly", "weeks"]];
  start_date: string = "";
  rent_length: number = 0;

  chosenDragon_list: {dragon: profile, rent_type: string, start_date: string, rent_length: number}[] = [];

  onSubmit(form: NgForm): void
  {
    console.log(form);

    if (!this.inCart)
    {
      this.chosenDragon_list.push(
        {dragon: this.chosenDragon, rent_type: this.rent_type, start_date: this.start_date, rent_length: this.rent_length}
      )
      this.current_element?.classList.add("chosen");
    }

  }

  choosing: boolean = true;

  toggleCheckout(): void
  {
    this.choosing = !this.choosing;
  }

}
