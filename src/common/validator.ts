import { IsNotEmpty } from 'class-validator';

export class UserValidator {
  @IsNotEmpty()
  writer: string;

  @IsNotEmpty()
  password: string;
}

export class BoardInfoValidator extends UserValidator {
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  content: string;
}

export class CommentValidator {
  @IsNotEmpty()
  writer: string;

  @IsNotEmpty()
  content: string;

  @IsNotEmpty()
  boardId: number;
}
