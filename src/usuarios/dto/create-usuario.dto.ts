import { Usuario } from '../entities/usuario.entity';

export class CreateUsuarioDto extends Usuario {
  email: string;

  password: string;
}
