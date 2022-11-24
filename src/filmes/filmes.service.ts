import { Injectable, HttpStatus, HttpException, Inject, forwardRef } from '@nestjs/common';
import { FilmeDto } from './dto/create-filme.dto';
import { v4 as uuid, v4 } from 'uuid';
import { PrismaService } from 'src/prisma/prisma.service';

const filmes = [];

@Injectable()

export class FilmesService {
  constructor(private readonly prisma:PrismaService){}
  
  capitalizeFirstLetter(str) {
    return str[0].toUpperCase() + str.slice(1);
  }           
  create(createFilmes: FilmeDto) {
    try {
       const { nome,horario,genero,classificacao,duracao } = createFilmes;
      const filme = {
        id: uuid(),
        nome: this.capitalizeFirstLetter(nome),
        horario,
        genero,
        classificacao,
        duracao,
        
      };
      const filmeExiste = filmes.some(
        (filme) => filme.nome === nome,
      );

      if (filmeExiste) {
        throw new HttpException(
          'Este filme ja foi cadastrado',
          HttpStatus.CONFLICT,
        );
      }

      filmes.push(filme);
      return `filme "${filme.nome}" criado com sucesso`;
    } catch (error) {
      console.log(error);
      throw new HttpException(error, HttpStatus.BAD_REQUEST);
      
    }
  }

  findAll() {
    return filmes;
  }

  findOne(id: string) {
    const filme = filmes.find((element) => element.id === id);
    return filme;
  }

  update(id: string, updateFilmeDto) {
    const filme = filmes.find((element) => element.id === id);

    const updateFilme = Object.assign(filme, updateFilmeDto);
    return updateFilme;
  }

  remove(id: string) {
    const filme = filmes.find((element) => element.id === id);
    const filmeIndex = filmes.indexOf(filmes);
    filmes.splice(filmeIndex, 1);
    return `Filme ${filme.nome} deletado com sucesso`;
  }
}