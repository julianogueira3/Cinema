import { FilmeDto } from './dto/create-filme.dto';
export declare class FilmesService {
    capitalizeFirstLetter(str: any): any;
    create(createFilmes: FilmeDto): string;
    findAll(): any[];
    findOne(id: string): any;
    update(id: string, updateFilmeDto: any): any;
    remove(id: string): string;
}
