import { InputType, Field, registerEnumType, ID } from '@nestjs/graphql';
import { IsEnum } from 'class-validator';
import { typeRole, Shift } from 'src/user/user.types';
import { IsNotEmpty, IsString } from 'class-validator';

registerEnumType(typeRole, {
    name: 'typeRole',
});

registerEnumType(Shift, {
    name: 'Shift',
});
@InputType()
export class UpdateUserInput {
  @Field(()=>ID)
  @IsNotEmpty()
  @IsString()
  user_id: string;

  @Field({nullable: true})
  username?: string;

  @Field({nullable: true})
  email?: string;

  @Field({nullable: true})
  password?: string;

  @Field({nullable: true})
  phonenumber?: string;

  @Field({nullable: true})
  @IsEnum(Shift)
  shift?: Shift;

  @Field({nullable: true})
  @IsEnum(typeRole)
  usertype?: typeRole;
}
