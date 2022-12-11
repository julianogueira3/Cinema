import { Repository } from 'typeorm';
import { Filmes } from './entities/filme.entity';
import { ResultadoDto } from 'src/dto/resultado.dto';
import { CadastrarFilmeDto } from './dto/cadastrar-filme.dto';
import { UpdateFilmesDto } from './dto/update-filme.dto';
export declare class FilmesService {
    private filmesRepository;
    constructor(filmesRepository: Repository<Filmes>);
    listar(): Promise<Filmes[]>;
    cadastrar(data: CadastrarFilmeDto): Promise<ResultadoDto>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
    update(id: string, updateFilmesDto: UpdateFilmesDto): Promise<import("typeorm").UpdateResult>;
}
