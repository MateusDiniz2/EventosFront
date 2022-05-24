import { Lote } from "./Lote";
import { PalestranteEvento } from "./PalestranteEvento";
import { RedeSocial } from "./RedeSocial";

export interface Evento {
   Id: number;
   Local: string;
   Tema: string;
   QtdPessoas: number;
   ImagemURL: string;
   Telefone: string;
   DataEvento: Date;
   Lotes: Lote[];
   RedesSociais: RedeSocial[];
   PalestrantesEventos: PalestranteEvento[];
}
