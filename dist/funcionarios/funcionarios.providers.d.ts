import { DataSource } from 'typeorm';
import { Funcionarios } from './entities/funcionario.entity';
export declare const funcionariosProviders: {
    provide: string;
    useFactory: (dataSource: DataSource) => import("typeorm").Repository<Funcionarios>;
    inject: string[];
}[];
