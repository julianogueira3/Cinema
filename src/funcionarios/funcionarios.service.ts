import { Injectable, HttpStatus, HttpException, Inject, forwardRef } from '@nestjs/common';
import { v4 as uuid, v4 } from 'uuid';
import { Repository } from 'typeorm';
import { Funcionarios } from './entities/funcionario.entity';
import { ResultadoDto } from 'src/dto/resultado.dto';
import { CadastrarFuncionarioDto } from './dto/cadastrar-funcionario.dto';
import { UpdateFuncionarioDto } from './dto/update-funcionario.dto';

//const funcionarios = [];

@Injectable()
export class FuncionariosService {
  constructor(
    @Inject('FUNCIONARIOS_REPOSITORY')
    private funcionariosRepository: Repository<Funcionarios>,
  ) {}

  async listar(): Promise<Funcionarios[]> {
    return this.funcionariosRepository.find();
  }

  async cadastrar(data: CadastrarFuncionarioDto): Promise<ResultadoDto>{
    let funcionarios = new Funcionarios()
    funcionarios.id = data.id
    funcionarios.nome = data.nome
    funcionarios.local = data.local
    funcionarios.salario= data.salario
    funcionarios.jornada = data.jornada
    
    return this.funcionariosRepository.save(funcionarios)
    .then((result)=>{
      return <ResultadoDto>{
        status: true,
        mensagem: "Funcionario cadastrado"
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
    return this.funcionariosRepository.delete(id);
  }


  update(id: string, updateFuncionariosDto: UpdateFuncionarioDto) {
    return this.funcionariosRepository.update(id, updateFuncionariosDto);
  }
}