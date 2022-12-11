import { FilmesService } from './filmes.service';
import { ResultadoDto } from 'src/dto/resultado.dto';
import { Filmes } from './entities/filme.entity';
import { CadastrarFilmeDto } from './dto/create-filme.dto';
export declare class filmesController {
    private readonly filmesService;
    constructor(filmesService: FilmesService);
    listar(): Promise<Filmes[]>;
    cadastrar(data: CadastrarFilmeDto): Promise<ResultadoDto>;
}
