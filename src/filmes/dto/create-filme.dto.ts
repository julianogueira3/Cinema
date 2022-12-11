import { v4 as uuid, v4 } from 'uuid';
import { IsNotEmpty, IsString } from 'class-validator';

export class FilmeDto {
  id: string;

  @IsNotEmpty()
  @IsString()
  nome: string;
  horario: string;
  genero: string;
  classificacao: string;
  duracao: string;

  
}