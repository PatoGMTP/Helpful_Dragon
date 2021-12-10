import { Component, Input, OnInit } from '@angular/core';
import { profile } from '../profile/profile';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  @Input() list!: {dragon: profile, rent_type: string, start_date: string, rent_length: number}[];

  total: number = 0;

  constructor() { }

  ngOnInit(): void {
    this.total = this.list.reduce((a, c) => a+(c.dragon.rates[0]*c.rent_length), 0);
  }

  AfterViewInit()
  {
  }

}
