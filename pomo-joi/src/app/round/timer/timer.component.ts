import { Component, OnInit } from '@angular/core';
import { zip } from 'rxjs';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {
  minutos: number = 25;
  segundos: number = 0;

  constructor() { }

  ngOnInit(): void {

   
  }

  iniciarTimer() {
    const intervalo = setInterval(() => {
      if (this.segundos > 0) {
        this.segundos = this.segundos - 1;
      }
      if (this.segundos === 0) {
        if (this.minutos === 0) {
          clearInterval(intervalo);
        } else {
          this.minutos = this.minutos - 1;
          this.segundos = 59;
        }
      }
    }, 1000);
  };
}
