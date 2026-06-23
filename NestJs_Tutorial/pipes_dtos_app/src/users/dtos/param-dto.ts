import { Type } from "class-transformer";
import { IsInt, IsNumber } from "class-validator";

export class ParamDto
{
    
    @Type(()=>Number)
    @IsInt()
    id:number
}