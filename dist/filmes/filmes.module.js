"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommonModule = exports.FilmesModule = void 0;
const common_1 = require("@nestjs/common");
const filmes_service_1 = require("./filmes.service");
const filmes_controller_1 = require("./filmes.controller");
const prisma_service_1 = require("../prisma/prisma.service");
let FilmesModule = class FilmesModule {
};
FilmesModule = __decorate([
    (0, common_1.Module)({
        controllers: [filmes_controller_1.filmesController],
        providers: [filmes_service_1.FilmesService, prisma_service_1.PrismaService],
        exports: [filmes_service_1.FilmesService],
    })
], FilmesModule);
exports.FilmesModule = FilmesModule;
class CommonModule {
}
exports.CommonModule = CommonModule;
//# sourceMappingURL=filmes.module.js.map