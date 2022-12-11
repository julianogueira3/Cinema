import { Injectable, HttpStatus, HttpException, Inject, forwardRef } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Lanchonete } from './entities/Lanchonete.entity';
import { ResultadoDto } from 'src/dto/resultado.dto';
import { CadastrarLanchoneteDto } from './dto/cadastra-lanche.dto';
import { UpdateLanchoneteDto } from './dto/update-Lanchonete.dto';


@Injectable()
export class LanchoneteService {
  constructor(
    @Inject('LANCHONETE_REPOSITORY')
    private LanchoneteRepository: Repository<Lanchonete>,
  ) {}

  async listar(): Promise<Lanchonete[]> {
    return this.LanchoneteRepository.find();
  }

  async cadastrar(data: CadastrarLanchoneteDto): Promise<ResultadoDto>{
    let lanchonete = new Lanchonete()
    lanchonete.id = data.id
    lanchonete.combo = data.combo
    lanchonete.valor = data.valor
    lanchonete.pipoca = data.pipoca
    lanchonete.refrigerante = data.refrigerante
    lanchonete.doce = data.doce
    return this.LanchoneteRepository.save(lanchonete)
    .then((result)=>{
      return <ResultadoDto>{
        status: true,
        mensagem: "Lanchonete cadastrado"
      }
    })
    .catch((error)=>{
      return <ResultadoDto>{
        status: false,
        mensagem: "Houvr um erro ao cadastrar"
      }
    })
   
  }

  async remove(id: string) {
    return this.LanchoneteRepository.delete(id);
  }


  update(id: string, updateLanchoneteDto: UpdateLanchoneteDto) {
    return this.LanchoneteRepository.update(id, updateLanchoneteDto);
  }
}