import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {
  // minutos = this.route.snapshot.params.[trabalho];
  segundos: number = 0;
  minutos: any;
  iniciar: boolean = true;
  pausar: boolean = false;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.minutos = this.route.snapshot.params['trabalho'];
  }

  iniciarTimer() {
    this.iniciar = false;
    this.pausar = true;

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

      if(this.pausar === false) {
        clearInterval(intervalo);
      }
    }, 1000);
  }

  pausarTimer() {
    this.iniciar = true;
    this.pausar = false;
    console.log('~bagaatat')
  }

}
