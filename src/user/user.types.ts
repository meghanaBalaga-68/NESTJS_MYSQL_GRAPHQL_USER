import { ObjectType, Field, ID, registerEnumType } from '@nestjs/graphql';
export enum typeRole{
    ADMIN = "Admin",
    WORKER = "Worker",
    SUPERVISOR = "Supervisor"
}
registerEnumType(typeRole, {
    name: 'typeRole',
})


export enum Shift{
    MORNING = "Morning",
    AFTERNOON = "Afternoon",
    EVENING   = "Evening",
    NIGHT     = "Night"
}

registerEnumType(Shift, { name: 'Shift', })

@ObjectType()
export class UserType{
    @Field(() => ID)
    user_id: string;

    @Field(()=> String)
    username: string;

    @Field(()=>String)
    email: string;

    @Field(()=> String)
    phonenumber: string;

    @Field(()=> String)
    empId: string;

    @Field(()=>Shift)
    shift: Shift;

    @Field(()=>typeRole)
    usertype: typeRole;

    @Field()
    created_at: Date;


}

@ObjectType()
export class UserGetType {
    @Field(() => ID)
    user_id: string;

    @Field(() => String)
    username: string;

    @Field(() => String)
    empId: string;

    @Field(() => typeRole)
    usertype: typeRole;
}

@ObjectType()
export class UserUpdateType{
    @Field(() => ID)
    user_id: string;

    @Field(()=> String)
    username: string;

    @Field(()=>String)
    email: string;

    @Field(()=>String)
    password: string;

    @Field(()=> String)
    phonenumber: string;

    @Field(()=> String)
    empId: string;

    @Field(()=>Shift)
    shift: Shift;

    @Field(()=>typeRole)
    usertype: typeRole;

    @Field()
    created_at: Date;


}

