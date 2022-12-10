import { LanchoneteDto } from './dto/create-lanchonete.dto';
export declare class LanchoneteService {
    create(createLanchonete: LanchoneteDto): string;
    findAll(): any[];
    findOne(id: string): any;
    update(id: string, updateLanchoneteDto: any): any;
    remove(id: string): string;
}
