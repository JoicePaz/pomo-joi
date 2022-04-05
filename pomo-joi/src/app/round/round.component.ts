import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-round',
  templateUrl: './round.component.html',
  styleUrls: ['./round.component.css']
})

export class RoundComponent implements OnInit {
  trabalho: any = 0;
  pausa: number = 0;
  sessoes: number = 0;

  constructor() { }

  ngOnInit(): void {
   
  }

}
