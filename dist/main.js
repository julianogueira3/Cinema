"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
async function bootstrap() {
    const port = 8080;
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    await app.listen(process.env.PORT || 8080);
    console.log(`Cinema App Rodando na porta ${port}`);
}
bootstrap();
//# sourceMappingURL=main.js.map