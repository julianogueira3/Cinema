import { DataSource } from 'typeorm';
import { Lanchonete } from './entities/lanchonete.entity';

export const lanchoneteProviders = [
  {
    provide: 'LANCHONETE_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Lanchonete),
    inject: ['DATA_SOURCE'],
  },
];