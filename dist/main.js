"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const common_1 = require("@nestjs/common");
require("dotenv/config");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const options = {
        origin: [
            /^(.*)/,
            process.env.FE_HOST,
            process.env.FE_RECRUITER_HOST,
            process.env.FE_ADMIN_HOST,
        ],
        methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
        preflightContinue: false,
        optionsSuccessStatus: 200,
        credentials: true,
        allowedHeaders: 'Origin,X-Requested-With,Content-Type,Accept,Authorization,authorization,X-Forwarded-for,traceparent,request-id,request-context,user-agent',
        exposedHeaders: 'X-TEST-KEY,X-TEST-KEY-EXPIRES',
    };
    app.enableCors(options);
    await app.listen(process.env.PORT ?? 3000);
    common_1.Logger.log(`Server running on http://localhost:${process.env.PORT}`, 'Bootstrap');
}
bootstrap();
//# sourceMappingURL=main.js.map