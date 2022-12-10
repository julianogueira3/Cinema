"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LanchoneteService = void 0;
const common_1 = require("@nestjs/common");
const uuid_1 = require("uuid");
const insumos = [];
let LanchoneteService = class LanchoneteService {
    create(createLanchonete) {
        try {
            const { combo, valor, pipoca, refrigerante, doce } = createLanchonete;
            const insumo = {
                id: (0, uuid_1.v4)(),
                combo,
                valor,
                pipoca,
                refrigerante,
                doce
            };
            const comboExiste = insumos.some((insumo) => insumo.combo === combo);
            if (comboExiste) {
                throw new common_1.HttpException('Este combo ja foi cadastrado', common_1.HttpStatus.CONFLICT);
            }
            insumos.push(insumos);
            return `combo "${insumo.combo}" criado com sucesso`;
        }
        catch (error) {
            console.log(error);
            throw new common_1.HttpException(error, common_1.HttpStatus.BAD_REQUEST);
        }
    }
    findAll() {
        return insumos;
    }
    findOne(id) {
        const insumo = insumos.find((element) => element.id === id);
        return insumo;
    }
    update(id, updateLanchoneteDto) {
        const insumo = insumos.find((element) => element.id === id);
        const updateLanchonete = Object.assign(insumo, updateLanchoneteDto);
        return updateLanchonete;
    }
    remove(id) {
        const insumo = insumos.find((element) => element.id === id);
        const insumoIndex = insumos.indexOf(insumos);
        insumos.splice(insumoIndex, 1);
        return `Combo ${insumo.combo} deletado com sucesso`;
    }
};
LanchoneteService = __decorate([
    (0, common_1.Injectable)()
], LanchoneteService);
exports.LanchoneteService = LanchoneteService;
//# sourceMappingURL=lanchonete.service.js.map