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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FilmesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const filme_entity_1 = require("./entities/filme.entity");
let FilmesService = class FilmesService {
    constructor(filmesRepository) {
        this.filmesRepository = filmesRepository;
    }
    async listar() {
        return this.filmesRepository.find();
    }
    async cadastrar(data) {
        let filmes = new filme_entity_1.Filmes();
        filmes.id = data.id;
        filmes.nome = data.nome;
        filmes.horario = data.horario;
        filmes.classificacao = data.classificacao;
        filmes.genero = data.genero;
        filmes.duracao = data.duracao;
        return this.filmesRepository.save(filmes)
            .then((result) => {
            return {
                status: true,
                mensagem: "Filme cadastrado"
            };
        })
            .catch((error) => {
            return {
                status: false,
                mensagem: "Houvr um erro ao cadastrar"
            };
        });
    }
    async remove(id) {
        return this.filmesRepository.delete(id);
    }
    update(id, updateFilmesDto) {
        return this.filmesRepository.update(id, updateFilmesDto);
    }
};
FilmesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('FILMES_REPOSITORY')),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], FilmesService);
exports.FilmesService = FilmesService;
//# sourceMappingURL=filmes.service.js.map