import { CanActivate, ExecutionContext } from "@nestjs/common";

export class IsAuthenticatedGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();
    const { auth } = request;
    return !!auth;
  }
}
