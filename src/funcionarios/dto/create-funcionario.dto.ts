import { v4 as uuid, v4 } from 'uuid';
import { IsNotEmpty, IsString } from 'class-validator';

export class FuncionarioDto {
  id: string;

  @IsNotEmpty()
  @IsString()
  nome: string;
  local: string;
  salario: string;
  jornada: string;
  

  
}

