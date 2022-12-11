import { LanchoneteService } from './Lanchonete.service';
import { ResultadoDto } from 'src/dto/resultado.dto';
import { Lanchonete } from './entities/Lanchonete.entity';
import { CadastrarLanchoneteDto } from './dto/cadastra-lanche.dto';
import { UpdateLanchoneteDto } from './dto/update-Lanchonete.dto';
export declare class lanchoneteController {
    private readonly lanchoneteService;
    constructor(lanchoneteService: LanchoneteService);
    listar(): Promise<Lanchonete[]>;
    cadastrar(data: CadastrarLanchoneteDto): Promise<ResultadoDto>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
    update(id: string, updateLanchoneteDto: UpdateLanchoneteDto): Promise<import("typeorm").UpdateResult>;
}
