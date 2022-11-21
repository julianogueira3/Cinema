import { Injectable } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { Usuario } from './entities/usuario.entity';

const usuarios = [];
@Injectable()
export class UsuariosService {
  findAll() {
    throw new Error('Method not implemented.');
  }
  findOne(arg0: number) {
    throw new Error('Method not implemented.');
  }
  update(arg0: number, updateUsuarioDto: UpdateUsuarioDto) {
    throw new Error('Method not implemented.');
  }
  remove(arg0: number) {
    throw new Error('Method not implemented.');
  }
  async create(createUsuarioDto: CreateUsuarioDto) {
      const { email, senha } = createUsuarioDto;
      const adm = {
        user: usuarios,
        password: 123456,
      };
      return `Usuario logado com sucesso`
   
}
}
