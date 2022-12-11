"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CatsModule = exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const funcionarios_module_1 = require("./funcionarios/funcionarios.module");
const filmes_module_1 = require("./filmes/filmes.module");
const lanchonete_module_1 = require("./lanchonete/lanchonete.module");
const usuarios_module_1 = require("./usuarios/usuarios.module");
const path_1 = require("path");
const serve_static_1 = require("@nestjs/serve-static");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [funcionarios_module_1.FuncionariosModule, filmes_module_1.FilmesModule, lanchonete_module_1.LanchoneteModule, usuarios_module_1.UsuariosModule, serve_static_1.ServeStaticModule.forRoot({
                renderPath: (0, path_1.join)(__dirname, '..', 'client'),
            }),],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
exports.AppModule = AppModule;
class CatsModule {
}
exports.CatsModule = CatsModule;
//# sourceMappingURL=app.module.js.map