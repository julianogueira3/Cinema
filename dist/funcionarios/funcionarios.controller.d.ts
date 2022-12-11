import { FuncionariosService } from './funcionarios.service';
import { ResultadoDto } from 'src/dto/resultado.dto';
import { Funcionarios } from './entities/funcionario.entity';
import { CadastrarFuncionarioDto } from './dto/cadastrar-funcionario.dto';
import { UpdateFuncionarioDto } from './dto/update-funcionario.dto';
export declare class funcionarioController {
    private readonly funcionarioService;
    constructor(funcionarioService: FuncionariosService);
    listar(): Promise<Funcionarios[]>;
    cadastrar(data: CadastrarFuncionarioDto): Promise<ResultadoDto>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
    update(id: string, updateFuncionarioDto: UpdateFuncionarioDto): Promise<import("typeorm").UpdateResult>;
}
