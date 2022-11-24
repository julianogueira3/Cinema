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
exports.FilmesService = void 0;
const common_1 = require("@nestjs/common");
const uuid_1 = require("uuid");
const prisma_service_1 = require("../prisma/prisma.service");
const filmes = [];
let FilmesService = class FilmesService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    capitalizeFirstLetter(str) {
        return str[0].toUpperCase() + str.slice(1);
    }
    create(createFilmes) {
        try {
            const { nome, horario, genero, classificacao, duracao } = createFilmes;
            const filme = {
                id: (0, uuid_1.v4)(),
                nome: this.capitalizeFirstLetter(nome),
                horario,
                genero,
                classificacao,
                duracao,
            };
            const filmeExiste = filmes.some((filme) => filme.nome === nome);
            if (filmeExiste) {
                throw new common_1.HttpException('Este filme ja foi cadastrado', common_1.HttpStatus.CONFLICT);
            }
            filmes.push(filme);
            return `filme "${filme.nome}" criado com sucesso`;
        }
        catch (error) {
            console.log(error);
            throw new common_1.HttpException(error, common_1.HttpStatus.BAD_REQUEST);
        }
    }
    findAll() {
        return filmes;
    }
    findOne(id) {
        const filme = filmes.find((element) => element.id === id);
        return filme;
    }
    update(id, updateFilmeDto) {
        const filme = filmes.find((element) => element.id === id);
        const updateFilme = Object.assign(filme, updateFilmeDto);
        return updateFilme;
    }
    remove(id) {
        const filme = filmes.find((element) => element.id === id);
        const filmeIndex = filmes.indexOf(filmes);
        filmes.splice(filmeIndex, 1);
        return `Filme ${filme.nome} deletado com sucesso`;
    }
};
FilmesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], FilmesService);
exports.FilmesService = FilmesService;
//# sourceMappingURL=filmes.service.js.map