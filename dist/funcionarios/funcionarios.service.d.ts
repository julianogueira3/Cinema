import { Repository } from 'typeorm';
import { Funcionarios } from './entities/funcionario.entity';
import { ResultadoDto } from 'src/dto/resultado.dto';
import { CadastrarFuncionarioDto } from './dto/cadastrar-funcionario.dto';
import { UpdateFuncionarioDto } from './dto/update-funcionario.dto';
export declare class FuncionariosService {
    private funcionariosRepository;
    constructor(funcionariosRepository: Repository<Funcionarios>);
    listar(): Promise<Funcionarios[]>;
    cadastrar(data: CadastrarFuncionarioDto): Promise<ResultadoDto>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
    update(id: string, updateFuncionariosDto: UpdateFuncionarioDto): Promise<import("typeorm").UpdateResult>;
}
