/* eslint-disable prettier/prettier */
import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsEmail, IsDate } from "class-validator";

export class UpdateUserDto {
  @ApiProperty()
  @IsNotEmpty()
  id: string;

  name: string;

  email: string;

  dateBirth: string;
}