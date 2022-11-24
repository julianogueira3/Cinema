import { FilmeDto } from './dto/create-filme.dto';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class FilmesService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    capitalizeFirstLetter(str: any): any;
    create(createFilmes: FilmeDto): string;
    findAll(): any[];
    findOne(id: string): any;
    update(id: string, updateFilmeDto: any): any;
    remove(id: string): string;
}
