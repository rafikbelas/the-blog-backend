import { MiddlewareConsumer, Module, NestModule } from "@nestjs/common";
import cookieParser from "cookie-parser";
import glob from "glob";

const controllers = glob
  .sync("*.module/*-controllers.ts", { cwd: __dirname, absolute: true }) // go through all the modules containing controllers
  .map(require) // require every one of them
  .map(imported => imported.default); // and return each one's default export (which is expected to be a NestJS controller class)

@Module({
  controllers
})
export class ApplicationModule implements NestModule {
  configure(consumer: MiddlewareConsumer): MiddlewareConsumer | void {
    consumer.apply(cookieParser()).forRoutes("/");
  }
}
