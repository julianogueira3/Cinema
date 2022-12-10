import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { funcionarios, Prisma } from '@prisma/client';

@Injectable()
export class funcionariosService {
  constructor(private prisma: PrismaService) {}

  async funcionarios(
    funcionariosWhereUniqueInput: Prisma.funcionariosWhereUniqueInput,
  ): Promise<funcionarios | null> {
    return this.prisma.funcionarios.findUnique({
      where: funcionariosWhereUniqueInput,
    });
  }

  async funcionario(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.filmesWhereUniqueInput;
    where?: Prisma.filmesWhereInput;
    orderBy?: Prisma.filmesOrderByWithRelationInput;
  }): Promise<funcionarios[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.funcionarios.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async createFuncionario(data: Prisma.funcionariosCreateInput): Promise<funcionarios> {
    return this.prisma.funcionarios.create({
      data,
    });
  }

  async updateFuncionario(params: {
    where: Prisma.funcionariosWhereUniqueInput;
    data: Prisma.funcionariosUpdateInput;
  }): Promise<funcionarios> {
    const { where, data } = params;
    return this.prisma.funcionarios.update({
      data,
      where,
    });
  }

  async deleteFuncionario(where: Prisma.funcionariosWhereUniqueInput): Promise<funcionarios> {
    return this.prisma.funcionarios.delete({
      where,
    });
  }
}