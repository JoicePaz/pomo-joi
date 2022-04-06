import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  trabalho: any = 25;
  pausa: any = 5;
  sessoes: any = 3;

  routerLink: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  atualizarTrabalho(evento: Event) {
    this.trabalho = (<HTMLInputElement>evento.target).value
  }

  atualizarPausa(evento: Event) {
    this.pausa = (<HTMLInputElement>evento.target).value;
  }

  atualizarSessoes(evento: Event) {
    this.sessoes = (<HTMLInputElement>evento.target).value;
  }

  montarRota() {
    this.routerLink = `/start/${this.trabalho}/${this.pausa}/${this.sessoes}`;
  }
}
