import { PartialType } from '@nestjs/mapped-types';
import { FilmeDto } from './create-filme.dto';

export class UpdateCategoriaDto extends PartialType(FilmeDto) {}

