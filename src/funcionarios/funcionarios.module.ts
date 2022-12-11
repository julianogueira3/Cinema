import { Module } from '@nestjs/common';
import { FuncionariosService } from './funcionarios.service';
import { funcionarioController } from './funcionarios.controller';
import { funcionariosProviders } from './funcionarios.providers';
import { databaseProviders } from 'src/database/database.providers';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [funcionarioController],
  providers: [FuncionariosService,...funcionariosProviders,...databaseProviders],
  exports:[FuncionariosService]
})
export class FuncionariosModule {}
export class CommonModule {}
