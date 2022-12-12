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
exports.filmesController = void 0;
const common_1 = require("@nestjs/common");
const filmes_service_1 = require("./filmes.service");
const update_filme_dto_1 = require("./dto/update-filme.dto");
let filmesController = class filmesController {
    constructor(filmesService) {
        this.filmesService = filmesService;
    }
    async listar() {
        return this.filmesService.listar();
    }
    async cadastrar(data) {
        return this.filmesService.cadastrar(data);
    }
    async remove(id) {
        return this.filmesService.remove(id);
    }
    update(id, updateFilmesDto) {
        return this.filmesService.update(id, updateFilmesDto);
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], filmesController.prototype, "listar", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], filmesController.prototype, "cadastrar", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], filmesController.prototype, "remove", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_filme_dto_1.UpdateFilmesDto]),
    __metadata("design:returntype", void 0)
], filmesController.prototype, "update", null);
filmesController = __decorate([
    (0, common_1.Controller)('filme'),
    __metadata("design:paramtypes", [filmes_service_1.FilmesService])
], filmesController);
exports.filmesController = filmesController;
//# sourceMappingURL=filmes.controller.js.map