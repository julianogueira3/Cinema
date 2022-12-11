import { DataSource } from 'typeorm';
import { Lanchonete } from './entities/lanchonete.entity';
export declare const lanchoneteProviders: {
    provide: string;
    useFactory: (dataSource: DataSource) => import("typeorm").Repository<Lanchonete>;
    inject: string[];
}[];
