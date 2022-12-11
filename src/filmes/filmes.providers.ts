import { DataSource } from 'typeorm';
import { Filmes } from './entities/filme.entity';

export const filmesProviders = [
  {
    provide: 'FILMES_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Filmes),
    inject: ['DATA_SOURCE'],
  },
];