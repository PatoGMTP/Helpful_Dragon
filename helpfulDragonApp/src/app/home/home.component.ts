import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  review: {title: string, text: string, reviewee:string} = {title: "", text: "", reviewee:""};

  index: number = 0;

  review_list: {title: string, text: string, reviewee:string}[] = [
    {title: "Charizard is the sweetest dragon out there!", text: "'I've known him since he was a charmander, he wouldn't hurt a fly.' -Ash Ketchum",reviewee:"Charizard"},
    {title: "She is happily taken!", text: "'ALL OTHER DONKEYS BETTER STAY AWAY' -Donkey",reviewee:"Dragon"},
    {title: "The 3 wishes came in quite handy!", text: "'I used my wishes to grow a couple inches, grow my hair back, and get the girl of my dreams :D' -Master Roshi",reviewee:"Shenron"},
    {title: "Why rent 1 dragon when you can rent 4?!", text: "'This bundle package is amazing. Regardless of my needs, there is always a dragon to help me.' -Emmy and Max",reviewee:"Dragon Tales"},
    {title: "Wonderful with kids", text: "'His lack of teeth make him pleasing to kids and elderly alike.' -",reviewee:"Toothless"},
  ];

  constructor()
  {
    this.review = this.review_list[this.index];
  }

  ngOnInit(): void {
  }

  changeSlide(input: number): void
  {
    this.index = (this.index + input) % this.review_list.length;
    if (this.index === -1) this.index = this.review_list.length-1;
    this.review = this.review_list[this.index];
  }
}
