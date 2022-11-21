import { v4 as uuid, v4 } from 'uuid';
import { IsNotEmpty, IsString } from 'class-validator';

export class LanchoneteDto {
  id: string;

  @IsNotEmpty()
  @IsString()
  combo: string;
  valor: string;
  pipoca: string;
  refrigerante: string;
  doce: string;
  

  
}
