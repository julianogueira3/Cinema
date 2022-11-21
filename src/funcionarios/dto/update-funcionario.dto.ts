import { PartialType } from '@nestjs/mapped-types';
import { FuncionarioDto } from './create-funcionario.dto';

export class UpdateFuncionarioDto extends PartialType(FuncionarioDto) {}
