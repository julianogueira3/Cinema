import { PrismaService } from './prisma.service';
import { filmes, Prisma } from '@prisma/client';
export declare class filmesService {
    private prisma;
    constructor(prisma: PrismaService);
    filmes(filmesWhereUniqueInput: Prisma.filmesWhereUniqueInput): Promise<filmes | null>;
    filme(params: {
        skip?: number;
        take?: number;
        cursor?: Prisma.filmesWhereUniqueInput;
        where?: Prisma.filmesWhereInput;
        orderBy?: Prisma.filmesOrderByWithRelationInput;
    }): Promise<filmes[]>;
    createFilme(data: Prisma.filmesCreateInput): Promise<filmes>;
    updateFilme(params: {
        where: Prisma.filmesWhereUniqueInput;
        data: Prisma.filmesUpdateInput;
    }): Promise<filmes>;
    deleteFilme(where: Prisma.filmesWhereUniqueInput): Promise<filmes>;
}
