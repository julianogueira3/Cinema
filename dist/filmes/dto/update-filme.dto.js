"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateCategoriaDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_filme_dto_1 = require("./create-filme.dto");
class UpdateCategoriaDto extends (0, mapped_types_1.PartialType)(create_filme_dto_1.FilmeDto) {
}
exports.UpdateCategoriaDto = UpdateCategoriaDto;
//# sourceMappingURL=update-filme.dto.js.map