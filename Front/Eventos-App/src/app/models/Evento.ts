import { Lote } from "./Lote";
import { Palestrante } from "./Palestrante";
import { PalestranteEvento } from "./PalestranteEvento";
import { RedeSocial } from "./RedeSocial";

export interface Evento {
   id: number;
   local: string;
   tema: string;
   qtdPessoas: number;
   imagemURL: string;
   telefone: string;
   dataEvento: Date;
   lotes: Lote[];
   redesSociais: RedeSocial[];
   palestrantesEventos: Palestrante[];
}
