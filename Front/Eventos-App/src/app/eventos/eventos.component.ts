import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.scss']
})
export class EventosComponent implements OnInit {

  public eventos: any = [];
  margemImagem: number = 2;
  larguraImagem: number = 150;
  exibirImagem: boolean = true;
  filtroLista: string = '';
  
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getEventos();
  }

  public getEventos(): void {
    this.http.get("https://localhost:5001/api/eventos").subscribe(
      response => this.eventos = response,
      error => console.log(error)
    );
  }

  public alterarImagem(): void {
    this.exibirImagem = !this.exibirImagem;
  }
}
