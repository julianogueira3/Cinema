import { FuncionariosService } from './funcionarios.service';
import { FuncionarioDto } from './dto/create-funcionario.dto';
export declare class FuncionariosController {
    private readonly filmesService;
    funcionariosService: any;
    constructor(filmesService: FuncionariosService);
    create(createFuncionariosDto: FuncionarioDto): string;
    findAll(): any;
    findOne(id: string): any;
    update(id: string, updateFuncionarioDto: any): any;
    remove(id: string): any;
}
