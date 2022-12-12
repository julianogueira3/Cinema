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
exports.funcionarioController = void 0;
const common_1 = require("@nestjs/common");
const funcionarios_service_1 = require("./funcionarios.service");
const update_funcionario_dto_1 = require("./dto/update-funcionario.dto");
let funcionarioController = class funcionarioController {
    constructor(funcionarioService) {
        this.funcionarioService = funcionarioService;
    }
    async listar() {
        return this.funcionarioService.listar();
    }
    async cadastrar(data) {
        return this.funcionarioService.cadastrar(data);
    }
    async remove(id) {
        return this.funcionarioService.remove(id);
    }
    async update(id, updateFuncionarioDto) {
        return this.funcionarioService.update(id, updateFuncionarioDto);
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], funcionarioController.prototype, "listar", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], funcionarioController.prototype, "cadastrar", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], funcionarioController.prototype, "remove", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_funcionario_dto_1.UpdateFuncionarioDto]),
    __metadata("design:returntype", Promise)
], funcionarioController.prototype, "update", null);
funcionarioController = __decorate([
    (0, common_1.Controller)('funcionario'),
    __metadata("design:paramtypes", [funcionarios_service_1.FuncionariosService])
], funcionarioController);
exports.funcionarioController = funcionarioController;
//# sourceMappingURL=funcionarios.controller.js.map