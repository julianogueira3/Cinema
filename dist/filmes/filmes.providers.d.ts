import { DataSource } from 'typeorm';
import { Filmes } from './entities/filme.entity';
export declare const filmesProviders: {
    provide: string;
    useFactory: (dataSource: DataSource) => import("typeorm").Repository<Filmes>;
    inject: string[];
}[];
