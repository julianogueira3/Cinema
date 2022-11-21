import { Injectable, HttpStatus, HttpException, Inject, forwardRef } from '@nestjs/common';
import { FuncionarioDto } from './dto/create-funcionario.dto';
import { v4 as uuid, v4 } from 'uuid';

const funcionarios = [];

@Injectable()
export class FuncionariosService {
  capitalizeFirstLetter(str) {
    return str[0].toUpperCase() + str.slice(1);
  }           
  create(createFuncionarios: FuncionarioDto) {
    try {
       const { nome,local,salario,jornada} = createFuncionarios;
      const funcionario = {
        id: uuid(),
        nome: this.capitalizeFirstLetter(nome),
        local,
        salario,
        jornada,
        
      };
      const funcionarioExiste = funcionarios.some(
        (funcionario) => funcionario.nome === nome,
      );

      if (funcionarioExiste) {
        throw new HttpException(
          'Este funcionario ja foi cadastrado',
          HttpStatus.CONFLICT,
        );
      }

      funcionarios.push(funcionarios);
      return `funcionario "${funcionario.nome}" criado com sucesso`;
    } catch (error) {
      console.log(error);
      throw new HttpException(error, HttpStatus.BAD_REQUEST);
      
    }
  }

  findAll() {
    return funcionarios;
  }

  findOne(id: string) {
    const funcionario = funcionarios.find((element) => element.id === id);
    return funcionario;
  }

  update(id: string, updateFuncionarioDto) {
    const funcionario = funcionarios.find((element) => element.id === id);

    const updateFuncionario = Object.assign(funcionario, updateFuncionarioDto);
    return updateFuncionario;
  }

  remove(id: string) {
    const filme = funcionarios.find((element) => element.id === id);
    const filmeIndex = funcionarios.indexOf(funcionarios);
    funcionarios.splice(filmeIndex, 1);
    return `Filme ${filme.nome} deletado com sucesso`;
  }
}