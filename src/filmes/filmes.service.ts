import { Injectable, HttpStatus, HttpException, Inject, forwardRef } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Filmes } from './entities/filme.entity';
import { ResultadoDto } from 'src/dto/resultado.dto';
import { CadastrarFilmeDto } from './dto/cadastrar-filme.dto';
import { UpdateFilmesDto } from './dto/update-filme.dto';

@Injectable()
export class FilmesService {
  constructor(
    @Inject('FILMES_REPOSITORY')
    private filmesRepository: Repository<Filmes>,
  ) {}

  async listar(): Promise<Filmes[]> {
    return this.filmesRepository.find();
  }

  async cadastrar(data: CadastrarFilmeDto): Promise<ResultadoDto>{
    let filmes = new Filmes()
    filmes.id = data.id
    filmes.nome = data.nome
    filmes.horario = data.horario
    filmes.classificacao = data.classificacao
    filmes.genero = data.genero
    filmes.duracao = data.duracao
    return this.filmesRepository.save(filmes)
    .then((result)=>{
      return <ResultadoDto>{
        status: true,
        mensagem: "Filme cadastrado"
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
    return this.filmesRepository.delete(id);
  }


  async update(id: string, updateFilmesDto: UpdateFilmesDto) {
    return this.filmesRepository.update(id, updateFilmesDto);
  }
}





  // capitalizeFirstLetter(str) {
  //   return str[0].toUpperCase() + str.slice(1);
  // }           
  // create(createFilmes: FilmeDto) {
  //   try {
  //      const { nome,horario,genero,classificacao,duracao } = createFilmes;
  //     const filme = {
  //       id: uuid(),
  //       nome: this.capitalizeFirstLetter(nome),
  //       horario,
  //       genero,
  //       classificacao,
  //       duracao,
        
  //     };
  //     const filmeExiste = Filmes.some(
  //       (filme) => filme.nome === nome,
  //     );

  //     if (filmeExiste) {
  //       throw new HttpException(
  //         'Este filme ja foi cadastrado',
  //         HttpStatus.CONFLICT,
  //       );
  //     }

  //     filmes.push(filme);
  //     return `filme "${filme.nome}" criado com sucesso`;
  //   } catch (error) {
  //     console.log(error);
  //     throw new HttpException(error, HttpStatus.BAD_REQUEST);
      
  //   }
  // }


  

//   findAll() {
//     return filmes;
//   }

//   findOne(id: string) {
//     const filme = filmes.find((element) => element.id === id);
//     return filme;
//   }

//   update(id: string, updateFilmeDto) {
//     const filme = filmes.find((element) => element.id === id);

//     const updateFilme = Object.assign(filme, updateFilmeDto);
//     return updateFilme;
//   }

//   remove(id: string) {
//     const filme = filmes.find((element) => element.id === id);
//     const filmeIndex = filmes.indexOf(filmes);
//     filmes.splice(filmeIndex, 1);
//     return `Filme ${filme.nome} deletado com sucesso`;
//   }
// }