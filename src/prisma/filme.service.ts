import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { filmes, Prisma } from '@prisma/client';

@Injectable()
export class filmesService {
  constructor(private prisma: PrismaService) {}

  async filmes(
    filmesWhereUniqueInput: Prisma.filmesWhereUniqueInput,
  ): Promise<filmes | null> {
    return this.prisma.filmes.findUnique({
      where: filmesWhereUniqueInput,
    });
  }

  async filme(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.filmesWhereUniqueInput;
    where?: Prisma.filmesWhereInput;
    orderBy?: Prisma.filmesOrderByWithRelationInput;
  }): Promise<filmes[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.filmes.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async createFilme(data: Prisma.filmesCreateInput): Promise<filmes> {
    return this.prisma.filmes.create({
      data,
    });
  }

  async updateFilme(params: {
    where: Prisma.filmesWhereUniqueInput;
    data: Prisma.filmesUpdateInput;
  }): Promise<filmes> {
    const { where, data } = params;
    return this.prisma.filmes.update({
      data,
      where,
    });
  }

  async deleteFilme(where: Prisma.filmesWhereUniqueInput): Promise<filmes> {
    return this.prisma.filmes.delete({
      where,
    });
  }
}