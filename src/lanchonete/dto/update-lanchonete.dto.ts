import { PartialType } from '@nestjs/mapped-types';
import { LanchoneteDto } from './create-lanchonete.dto';

export class UpdateLanchoneteDto extends PartialType(LanchoneteDto) {}
