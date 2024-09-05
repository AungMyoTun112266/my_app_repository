// src/models/userModel.ts
import { IsString, IsEmail, IsInt, MaxLength, MinLength,Min } from 'class-validator';

export class User {
  @IsInt()
  @Min(1)
  id: number;

  @IsString()
  @MinLength(1, { message: 'Name must not be empty' }) // Ensure the name is not empty
  @MaxLength(50, { message: 'Name must not be greater than 50 characters' }) // Limit the length
  name: string;

  @IsEmail({}, { message: 'Email must be a valid email address' })
  email: string;

  constructor(id: number, name: string, email: string) {
    this.id = id;
    this.name = name;
    this.email = email;
  }
}
