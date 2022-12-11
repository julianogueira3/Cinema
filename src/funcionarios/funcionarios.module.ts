import { Module } from '@nestjs/common';
import { FuncionariosService } from './funcionarios.service';
import { funcionarioController } from './funcionarios.controller';

@Module({
  controllers: [funcionarioController],
  providers: [FuncionariosService]
})
export class FuncionariosModule {}
