import { typeRole, Shift } from 'src/user/user.types';
export declare class UpdateUserInput {
    user_id: string;
    username?: string;
    email?: string;
    password?: string;
    phonenumber?: string;
    shift?: Shift;
    usertype?: typeRole;
}
