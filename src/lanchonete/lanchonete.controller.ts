import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { LanchoneteService } from './lanchonete.service';
import { LanchoneteDto } from './dto/create-lanchonete.dto';

@Controller('lanchonete')
export class LanchoneteController {
  lanchoneteService: any;
  constructor(private readonly LanchoneteService: LanchoneteService) {}

  @Post()
  create(@Body() createLanchoneteDto: LanchoneteDto) {
    console.log(createLanchoneteDto);
    return this.lanchoneteService.create(createLanchoneteDto);
  }

  @Get()
  findAll() {
    return this.lanchoneteService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.lanchoneteService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLanchoneteDto) {
    return this.lanchoneteService.update(id, updateLanchoneteDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.lanchoneteService.remove(id);
  }
}