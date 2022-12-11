"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommonModule = exports.LanchoneteModule = void 0;
const common_1 = require("@nestjs/common");
const lanchonete_service_1 = require("./lanchonete.service");
const lanchonete_controller_1 = require("./lanchonete.controller");
const lanchonete_providers_1 = require("./lanchonete.providers");
const database_providers_1 = require("../database/database.providers");
const database_module_1 = require("../database/database.module");
let LanchoneteModule = class LanchoneteModule {
};
LanchoneteModule = __decorate([
    (0, common_1.Module)({
        imports: [database_module_1.DatabaseModule],
        controllers: [lanchonete_controller_1.lanchoneteController],
        providers: [lanchonete_service_1.LanchoneteService, ...lanchonete_providers_1.lanchoneteProviders, ...database_providers_1.databaseProviders],
    })
], LanchoneteModule);
exports.LanchoneteModule = LanchoneteModule;
class CommonModule {
}
exports.CommonModule = CommonModule;
//# sourceMappingURL=lanchonete.module.js.map