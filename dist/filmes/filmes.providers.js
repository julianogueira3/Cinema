"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.filmesProviders = void 0;
const filme_entity_1 = require("./entities/filme.entity");
exports.filmesProviders = [
    {
        provide: 'FILMES_REPOSITORY',
        useFactory: (dataSource) => dataSource.getRepository(filme_entity_1.Filmes),
        inject: ['DATA_SOURCE'],
    },
];
//# sourceMappingURL=filmes.providers.js.map