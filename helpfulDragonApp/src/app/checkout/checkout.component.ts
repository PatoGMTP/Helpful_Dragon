import { Component, Input, OnInit } from '@angular/core';
import { profile } from '../profile/profile';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  @Input() list?: {dragon: profile, rent_type: string, start_date: string, rent_length: number}[];

  constructor() { }

  ngOnInit(): void {
  }

}
