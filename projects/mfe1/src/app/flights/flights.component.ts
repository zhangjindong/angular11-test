import { Component, OnInit } from '@angular/core';
import { AuthLibService } from 'auth-lib';

@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.sass'],
})
export class FlightsComponent implements OnInit {
  user = this.service.user;

  constructor(private service: AuthLibService) {}

  ngOnInit(): void {}
}
