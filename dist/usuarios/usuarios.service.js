"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuariosService = void 0;
const common_1 = require("@nestjs/common");
const usuarios = [];
let UsuariosService = class UsuariosService {
    findAll() {
        throw new Error('Method not implemented.');
    }
    findOne(arg0) {
        throw new Error('Method not implemented.');
    }
    update(arg0, updateUsuarioDto) {
        throw new Error('Method not implemented.');
    }
    remove(arg0) {
        throw new Error('Method not implemented.');
    }
    async create(createUsuarioDto) {
        const { email, senha } = createUsuarioDto;
        const adm = {
            user: usuarios,
            password: 123456,
        };
        return `Usuario logado com sucesso`;
    }
};
UsuariosService = __decorate([
    (0, common_1.Injectable)()
], UsuariosService);
exports.UsuariosService = UsuariosService;
//# sourceMappingURL=usuarios.service.js.map