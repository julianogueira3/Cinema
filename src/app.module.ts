import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FuncionariosModule } from './funcionarios/funcionarios.module';
import { FilmesModule } from './filmes/filmes.module';
import { LanchoneteModule } from './lanchonete/lanchonete.module';
import { UsuariosModule } from './usuarios/usuarios.module';

@Module({
  imports: [ FuncionariosModule, FilmesModule, LanchoneteModule, UsuariosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
export class CatsModule {}
