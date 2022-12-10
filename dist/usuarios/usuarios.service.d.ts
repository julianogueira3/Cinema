import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
export declare class UsuariosService {
    findAll(): void;
    findOne(arg0: number): void;
    update(arg0: number, updateUsuarioDto: UpdateUsuarioDto): void;
    remove(arg0: number): void;
    create(createUsuarioDto: CreateUsuarioDto): Promise<string>;
}
