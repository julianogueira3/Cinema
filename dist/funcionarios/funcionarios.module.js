"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommonModule = exports.FuncionariosModule = void 0;
const common_1 = require("@nestjs/common");
const funcionarios_service_1 = require("./funcionarios.service");
const funcionarios_controller_1 = require("./funcionarios.controller");
const funcionarios_providers_1 = require("./funcionarios.providers");
const database_providers_1 = require("../database/database.providers");
const database_module_1 = require("../database/database.module");
let FuncionariosModule = class FuncionariosModule {
};
FuncionariosModule = __decorate([
    (0, common_1.Module)({
        imports: [database_module_1.DatabaseModule],
        controllers: [funcionarios_controller_1.funcionarioController],
        providers: [funcionarios_service_1.FuncionariosService, ...funcionarios_providers_1.funcionariosProviders, ...database_providers_1.databaseProviders],
        exports: [funcionarios_service_1.FuncionariosService]
    })
], FuncionariosModule);
exports.FuncionariosModule = FuncionariosModule;
class CommonModule {
}
exports.CommonModule = CommonModule;
//# sourceMappingURL=funcionarios.module.js.map