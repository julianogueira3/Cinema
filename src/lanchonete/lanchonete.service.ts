import { Injectable, HttpStatus, HttpException, Inject, forwardRef } from '@nestjs/common';
import { LanchoneteDto } from './dto/create-lanchonete.dto';
import { v4 as uuid, v4 } from 'uuid';

const insumos = [];

@Injectable()
export class LanchoneteService {
         
  create(createLanchonete: LanchoneteDto) {
    try {
       const { combo, valor, pipoca,refrigerante,doce} = createLanchonete;
      const insumo = {
        id: uuid(),
        combo,
        valor,
        pipoca,
        refrigerante,
        doce
        
      };
      const comboExiste = insumos.some(
        (insumo) => insumo.combo === combo,
      );

      if (comboExiste) {
        throw new HttpException(
          'Este combo ja foi cadastrado',
          HttpStatus.CONFLICT,
        );
      }

      insumos.push(insumos);
      return `combo "${insumo.combo}" criado com sucesso`;
    } catch (error) {
      console.log(error);
      throw new HttpException(error, HttpStatus.BAD_REQUEST);
      
    }
  }

  findAll() {
    return insumos;
  }

  findOne(id: string) {
    const insumo = insumos.find((element) => element.id === id);
    return insumo;
  }

  update(id: string, updateLanchoneteDto) {
    const insumo = insumos.find((element) => element.id === id);

    const updateLanchonete = Object.assign(insumo, updateLanchoneteDto);
    return updateLanchonete;
  }

  remove(id: string) {
    const insumo = insumos.find((element) => element.id === id);
    const insumoIndex = insumos.indexOf(insumos);
    insumos.splice(insumoIndex, 1);
    return `Combo ${insumo.combo} deletado com sucesso`;
  }
}