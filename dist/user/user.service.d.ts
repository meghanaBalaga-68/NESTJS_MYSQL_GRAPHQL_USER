import { Repository } from 'typeorm';
import { User } from './user.entity';
import { UserUpdateType } from './user.types';
import { CreateUserInput } from './dto/create.user.input';
import { UserGetType, UserType } from './user.types';
import { UpdateUserInput } from './dto/update.user.input';
export declare class UserService {
    private readonly userRepository;
    constructor(userRepository: Repository<User>);
    createUser(createUserDto: CreateUserInput): Promise<User>;
    updateUser(id: string, updateUserDto: UpdateUserInput): Promise<UserUpdateType>;
    getUsers(): Promise<UserGetType[]>;
    getUser(user_id: string): Promise<UserType>;
    findByUsername(username: string): Promise<User | undefined>;
    findOneById(user_id: string): Promise<UserType | undefined>;
    deleteUser(user_id: string): Promise<boolean>;
}
