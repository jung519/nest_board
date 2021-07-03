import { IsNotEmpty } from "class-validator";

export class UserValidator {
  @IsNotEmpty()
  writor: string

  @IsNotEmpty()
  password: string
}

export class BoardInfoValidator extends UserValidator {
  @IsNotEmpty()
  title: string
  
  @IsNotEmpty()
  content: string
}

export class CommentValidator extends UserValidator {
  @IsNotEmpty()
  content: string

  @IsNotEmpty()
  boardId: number
}