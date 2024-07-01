import { UserService } from './user.service';
import { User } from './user.entity';
import { UserGetType, UserType, UserUpdateType } from './user.types';
import { AuthService } from 'src/auth/auth.service';
import { CreateUserInput } from './dto/create.user.input';
import { UpdateUserInput } from './dto/update.user.input';
export declare class UsersResolver {
    private readonly userService;
    private readonly authService;
    constructor(userService: UserService, authService: AuthService);
    createUser(input: CreateUserInput): Promise<User>;
    updateUser(id: string, input: UpdateUserInput): Promise<UserUpdateType>;
    getUsers(): Promise<UserGetType[]>;
    getUser(id: string): Promise<UserType>;
    whoAmI(context: any): Promise<User>;
    login(username: string, password: string): Promise<{
        access_token: string;
        user: any;
    }>;
    deleteUser(id: string): Promise<boolean>;
}
