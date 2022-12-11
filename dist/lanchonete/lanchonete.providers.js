"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.lanchoneteProviders = void 0;
const lanchonete_entity_1 = require("./entities/lanchonete.entity");
exports.lanchoneteProviders = [
    {
        provide: 'LANCHONETE_REPOSITORY',
        useFactory: (dataSource) => dataSource.getRepository(lanchonete_entity_1.Lanchonete),
        inject: ['DATA_SOURCE'],
    },
];
//# sourceMappingURL=lanchonete.providers.js.map