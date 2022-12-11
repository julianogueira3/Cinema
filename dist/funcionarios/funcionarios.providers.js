"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.funcionariosProviders = void 0;
const funcionario_entity_1 = require("./entities/funcionario.entity");
exports.funcionariosProviders = [
    {
        provide: 'FUNCIONARIOS_REPOSITORY',
        useFactory: (dataSource) => dataSource.getRepository(funcionario_entity_1.Funcionarios),
        inject: ['DATA_SOURCE'],
    },
];
//# sourceMappingURL=funcionarios.providers.js.map