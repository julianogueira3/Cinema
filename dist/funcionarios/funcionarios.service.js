"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FuncionariosService = void 0;
const common_1 = require("@nestjs/common");
const uuid_1 = require("uuid");
const funcionarios = [];
let FuncionariosService = class FuncionariosService {
    capitalizeFirstLetter(str) {
        return str[0].toUpperCase() + str.slice(1);
    }
    create(createFuncionarios) {
        try {
            const { nome, local, salario, jornada } = createFuncionarios;
            const funcionario = {
                id: (0, uuid_1.v4)(),
                nome: this.capitalizeFirstLetter(nome),
                local,
                salario,
                jornada,
            };
            const funcionarioExiste = funcionarios.some((funcionario) => funcionario.nome === nome);
            if (funcionarioExiste) {
                throw new common_1.HttpException('Este funcionario ja foi cadastrado', common_1.HttpStatus.CONFLICT);
            }
            funcionarios.push(funcionarios);
            return `funcionario "${funcionario.nome}" criado com sucesso`;
        }
        catch (error) {
            console.log(error);
            throw new common_1.HttpException(error, common_1.HttpStatus.BAD_REQUEST);
        }
    }
    findAll() {
        return funcionarios;
    }
    findOne(id) {
        const funcionario = funcionarios.find((element) => element.id === id);
        return funcionario;
    }
    update(id, updateFuncionarioDto) {
        const funcionario = funcionarios.find((element) => element.id === id);
        const updateFuncionario = Object.assign(funcionario, updateFuncionarioDto);
        return updateFuncionario;
    }
    remove(id) {
        const filme = funcionarios.find((element) => element.id === id);
        const filmeIndex = funcionarios.indexOf(funcionarios);
        funcionarios.splice(filmeIndex, 1);
        return `Filme ${filme.nome} deletado com sucesso`;
    }
};
FuncionariosService = __decorate([
    (0, common_1.Injectable)()
], FuncionariosService);
exports.FuncionariosService = FuncionariosService;
//# sourceMappingURL=funcionarios.service.js.map