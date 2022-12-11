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
exports.FuncionariosService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const funcionario_entity_1 = require("./entities/funcionario.entity");
let FuncionariosService = class FuncionariosService {
    constructor(funcionariosRepository) {
        this.funcionariosRepository = funcionariosRepository;
    }
    async listar() {
        return this.funcionariosRepository.find();
    }
    async cadastrar(data) {
        let funcionarios = new funcionario_entity_1.Funcionarios();
        funcionarios.id = data.id;
        funcionarios.nome = data.nome;
        funcionarios.local = data.local;
        funcionarios.salario = data.salario;
        funcionarios.jornada = data.jornada;
        return this.funcionariosRepository.save(funcionarios)
            .then((result) => {
            return {
                status: true,
                mensagem: "Funcionario cadastrado"
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
        return this.funcionariosRepository.delete(id);
    }
    update(id, updateFuncionariosDto) {
        return this.funcionariosRepository.update(id, updateFuncionariosDto);
    }
};
FuncionariosService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('FUNCIONARIOS_REPOSITORY')),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], FuncionariosService);
exports.FuncionariosService = FuncionariosService;
//# sourceMappingURL=funcionarios.service.js.map