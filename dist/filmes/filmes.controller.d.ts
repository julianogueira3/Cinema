import { FilmesService } from './filmes.service';
import { ResultadoDto } from 'src/dto/resultado.dto';
import { Filmes } from './entities/filme.entity';
import { CadastrarFilmeDto } from './dto/cadastrar-filme.dto';
import { UpdateFilmesDto } from './dto/update-filme.dto';
export declare class filmesController {
    private readonly filmesService;
    constructor(filmesService: FilmesService);
    listar(): Promise<Filmes[]>;
    cadastrar(data: CadastrarFilmeDto): Promise<ResultadoDto>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
    update(id: string, updateFilmesDto: UpdateFilmesDto): Promise<import("typeorm").UpdateResult>;
}
