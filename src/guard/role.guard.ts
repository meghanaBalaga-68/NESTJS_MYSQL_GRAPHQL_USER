import { Injectable, CanActivate, ExecutionContext, ForbiddenException } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { GqlExecutionContext } from "@nestjs/graphql";
import { typeRole } from "src/user/user.types";



@Injectable()
export class RoleGuard implements CanActivate{
    constructor(private reflector: Reflector){}


    canActivate(context: ExecutionContext): boolean{
       
        const ctx = GqlExecutionContext.create(context);
        const requiredrole = this.reflector.get<typeRole[]>('usertypes', context.getHandler());
        const { user } = ctx.getContext().req;
        if(!requiredrole){
            return true;
        }
        if(requiredrole && user && !requiredrole.includes(user.usertype)){
            throw new ForbiddenException('Insufficient Permissions');
        }
        return true;
        // const userType = this.reflector.get<string>('usertype', context.getHandler())
        // return userType === 'ADMIN';
    }
}