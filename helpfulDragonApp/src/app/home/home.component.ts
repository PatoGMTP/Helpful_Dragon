import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  review: {title: string, text: string} = {title: "", text: ""};

  index: number = 0;

  review_list: {title: string, text: string}[] = [
    {title: "1", text: "11"},
    {title: "2", text: "22"},
    {title: "3", text: "33"},
    {title: "4", text: "44"},
    {title: "5", text: "55"},
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
