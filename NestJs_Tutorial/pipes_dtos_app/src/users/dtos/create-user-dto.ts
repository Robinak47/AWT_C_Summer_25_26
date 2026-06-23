
import { Type } from "class-transformer";
import { IsEmail, IsNotEmpty, IsNumber, IsString, Matches, MaxLength, MinLength } from "class-validator";

export class CreateUsersDto
{
    @Type(()=>Number)
    @IsNumber()
    @IsNotEmpty()
    id:number;
    @IsString({message:"meow meow"})
    @IsNotEmpty()
    @MinLength(3)
    @MaxLength(20)
    name:string;
    @IsEmail()
    @IsNotEmpty()
    email:string;
    @IsString()
    @IsNotEmpty()
    @MaxLength(6)
    gender:string;
    @IsNumber()
    age:number;
    @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)
    password:string;
}