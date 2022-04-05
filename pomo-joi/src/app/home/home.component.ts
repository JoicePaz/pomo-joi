import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  trabalho: number = 25;
  pausa: number = 5;
  sessoes: number = 3;
  routerLink: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
