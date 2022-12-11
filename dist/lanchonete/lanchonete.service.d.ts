import { Repository } from 'typeorm';
import { Lanchonete } from './entities/Lanchonete.entity';
import { ResultadoDto } from 'src/dto/resultado.dto';
import { CadastrarLanchoneteDto } from './dto/cadastra-lanche.dto';
import { UpdateLanchoneteDto } from './dto/update-Lanchonete.dto';
export declare class LanchoneteService {
    private LanchoneteRepository;
    constructor(LanchoneteRepository: Repository<Lanchonete>);
    listar(): Promise<Lanchonete[]>;
    cadastrar(data: CadastrarLanchoneteDto): Promise<ResultadoDto>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
    update(id: string, updateLanchoneteDto: UpdateLanchoneteDto): Promise<import("typeorm").UpdateResult>;
}
