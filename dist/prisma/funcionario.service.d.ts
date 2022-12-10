import { PrismaService } from './prisma.service';
import { funcionarios, Prisma } from '@prisma/client';
export declare class funcionariosService {
    private prisma;
    constructor(prisma: PrismaService);
    funcionarios(funcionariosWhereUniqueInput: Prisma.funcionariosWhereUniqueInput): Promise<funcionarios | null>;
    funcionario(params: {
        skip?: number;
        take?: number;
        cursor?: Prisma.filmesWhereUniqueInput;
        where?: Prisma.filmesWhereInput;
        orderBy?: Prisma.filmesOrderByWithRelationInput;
    }): Promise<funcionarios[]>;
    createFuncionario(data: Prisma.funcionariosCreateInput): Promise<funcionarios>;
    updateFuncionario(params: {
        where: Prisma.funcionariosWhereUniqueInput;
        data: Prisma.funcionariosUpdateInput;
    }): Promise<funcionarios>;
    deleteFuncionario(where: Prisma.funcionariosWhereUniqueInput): Promise<funcionarios>;
}
