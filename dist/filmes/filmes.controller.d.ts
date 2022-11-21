import { FilmesService } from './filmes.service';
import { FilmeDto } from './dto/create-filme.dto';
export declare class filmesController {
    private readonly filmesService;
    constructor(filmesService: FilmesService);
    create(createFilmesDto: FilmeDto): string;
    findAll(): any[];
    findOne(id: string): any;
    update(id: string, updateFilmeDto: any): any;
    remove(id: string): string;
}
