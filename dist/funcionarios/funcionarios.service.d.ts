import { FuncionarioDto } from './dto/create-funcionario.dto';
export declare class FuncionariosService {
    capitalizeFirstLetter(str: any): any;
    create(createFuncionarios: FuncionarioDto): string;
    findAll(): any[];
    findOne(id: string): any;
    update(id: string, updateFuncionarioDto: any): any;
    remove(id: string): string;
}
