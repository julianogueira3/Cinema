"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.filmesService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("./prisma.service");
let filmesService = class filmesService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async filmes(filmesWhereUniqueInput) {
        return this.prisma.filmes.findUnique({
            where: filmesWhereUniqueInput,
        });
    }
    async filme(params) {
        const { skip, take, cursor, where, orderBy } = params;
        return this.prisma.filmes.findMany({
            skip,
            take,
            cursor,
            where,
            orderBy,
        });
    }
    async createFilme(data) {
        return this.prisma.filmes.create({
            data,
        });
    }
    async updateFilme(params) {
        const { where, data } = params;
        return this.prisma.filmes.update({
            data,
            where,
        });
    }
    async deleteFilme(where) {
        return this.prisma.filmes.delete({
            where,
        });
    }
};
filmesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], filmesService);
exports.filmesService = filmesService;
//# sourceMappingURL=filme.service.js.map