import { Repository } from 'typeorm';
import { Filmes } from './entities/filme.entity';
import { ResultadoDto } from 'src/dto/resultado.dto';
import { CadastrarFilmeDto } from './dto/create-filme.dto';
export declare class FilmesService {
    private filmesRepository;
    constructor(filmesRepository: Repository<Filmes>);
    listar(): Promise<Filmes[]>;
    cadastrar(data: CadastrarFilmeDto): Promise<ResultadoDto>;
}
