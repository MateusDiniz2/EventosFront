// import { HttpClient } from '@angular/common/http';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { Evento } from '../../models/Evento';
import { EventoService } from '../../services/Evento.service';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.scss']
})
export class EventosComponent implements OnInit {

  modalRef?: BsModalRef;
  public eventosFiltrados : Evento[] = [];
  public eventos:  Evento[] = [];
  public margemImagem: number = 2;
  public larguraImagem: number = 150;
  public exibirImagem: boolean = true;
  private _filtroLista: string = '';

  public get filtroLista(): string{
    return this._filtroLista;
  }

  public set filtroLista(value: string){
    this._filtroLista = value;
    this.eventosFiltrados = this.filtroLista ? this.filtrarEventos(this.filtroLista) : this.eventos;
  }

  public filtrarEventos(filtrarPor: string) : Evento[] {
    filtrarPor = filtrarPor.toLocaleLowerCase();
    return this.eventos.filter(
      (evento:any) => evento.tema.toLocaleLowerCase().indexOf(filtrarPor) !== - 1
    )
  }

  constructor(
     private eventoService: EventoService,
     private modalService: BsModalService,
     private toastrService: ToastrService,
     private spinnerService: NgxSpinnerService) { }

  public ngOnInit() {
  this.spinnerService.show();
  this.getEventos();

  }

  public getEventos(): void {
    this.eventoService.getEventos().subscribe({
    next: (eventos: Evento[]) => {
      this.eventos = eventos;
      this.eventosFiltrados = this.eventos;
      },
      error: (error: any) => {
        this.spinnerService.hide();
        this.toastrService.error('Error ao carregar os Eventos', 'Error!')
      },
      complete: () => this.spinnerService.hide()
    });
  }

  public alterarImagem(): void {
    this.exibirImagem = !this.exibirImagem;
  }

  public openModal(template: TemplateRef<any>) : void {
    this.modalRef = this.modalService.show(template, {class: 'modal-sm'});
  }

  confirm(): void {
    this.modalRef?.hide();
    this.toastrService.success('O Evento foi editado com sucesso.', 'Editado');
  }

  decline(): void {
    this.modalRef?.hide();
    this.toastrService.success('O Evento foi deletado com sucesso.', 'Deletado');
  }
}
