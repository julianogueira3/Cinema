import { LanchoneteService } from './lanchonete.service';
import { LanchoneteDto } from './dto/create-lanchonete.dto';
export declare class LanchoneteController {
    private readonly LanchoneteService;
    lanchoneteService: any;
    constructor(LanchoneteService: LanchoneteService);
    create(createLanchoneteDto: LanchoneteDto): any;
    findAll(): any;
    findOne(id: string): any;
    update(id: string, updateLanchoneteDto: any): any;
    remove(id: string): any;
}
