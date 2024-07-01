import { typeRole } from "src/user/user.types";
export declare const ROLE_KEY = "usertypes";
export declare const Roles: (...usertypes: typeRole[]) => import("@nestjs/common").CustomDecorator<string>;
