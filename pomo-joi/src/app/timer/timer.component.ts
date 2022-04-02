import { Component, OnInit } from '@angular/core';
import { zip } from 'rxjs';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {
  minutos: number = 1;
  segundos: number = 10;

  constructor() { }

  ngOnInit(): void {

    this.diminuirTimer(this.minutos, this.segundos);
  }

  diminuirTimer(minutos: number, segundos: number) {

    const intervalo = setInterval(() => {
      console.log('lalalalala')
      if (this.segundos > 0) {
        this.segundos = this.segundos - 1;
      }
      if (this.segundos === 0) {
        console.log('vheguei no 0')
        if (this.minutos === 0) {
          console.log('lima limpa limpa')
          clearInterval(intervalo);
        } else {
          console.log('sinda nao')
          this.minutos = this.minutos - 1;
          this.segundos = 59;
        }
      }
    }, 1000);
  };
}
