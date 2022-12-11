"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateFilmesDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_filme_dto_1 = require("./create-filme.dto");
class UpdateFilmesDto extends (0, mapped_types_1.PartialType)(create_filme_dto_1.FilmeDto) {
}
exports.UpdateFilmesDto = UpdateFilmesDto;
//# sourceMappingURL=update-filme.dto.js.map