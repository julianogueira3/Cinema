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
exports.LanchoneteService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const Lanchonete_entity_1 = require("./entities/Lanchonete.entity");
let LanchoneteService = class LanchoneteService {
    constructor(LanchoneteRepository) {
        this.LanchoneteRepository = LanchoneteRepository;
    }
    async listar() {
        return this.LanchoneteRepository.find();
    }
    async cadastrar(data) {
        let lanchonete = new Lanchonete_entity_1.Lanchonete();
        lanchonete.id = data.id;
        lanchonete.combo = data.combo;
        lanchonete.valor = data.valor;
        lanchonete.pipoca = data.pipoca;
        lanchonete.refrigerante = data.refrigerante;
        lanchonete.doce = data.doce;
        return this.LanchoneteRepository.save(lanchonete)
            .then((result) => {
            return {
                status: true,
                mensagem: "Lanchonete cadastrado"
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
        return this.LanchoneteRepository.delete(id);
    }
    update(id, updateLanchoneteDto) {
        return this.LanchoneteRepository.update(id, updateLanchoneteDto);
    }
};
LanchoneteService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('LANCHONETE_REPOSITORY')),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], LanchoneteService);
exports.LanchoneteService = LanchoneteService;
//# sourceMappingURL=lanchonete.service.js.map