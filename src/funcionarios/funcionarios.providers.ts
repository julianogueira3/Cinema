import { DataSource } from 'typeorm';
import { Funcionarios } from './entities/funcionario.entity';

export const funcionariosProviders = [
  {
    provide: 'FUNCIONARIOS_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Funcionarios),
    inject: ['DATA_SOURCE'],
  },
];