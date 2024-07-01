import { SetMetadata } from "@nestjs/common";
import { typeRole } from "src/user/user.types";


export const ROLE_KEY = 'usertypes';
export const Roles = (...usertypes: typeRole[]) => SetMetadata(ROLE_KEY, usertypes);