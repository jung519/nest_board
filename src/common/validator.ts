import { IsNotEmpty } from "class-validator";


export class BoardInfoValidator {
  @IsNotEmpty()
  title: string
  
  @IsNotEmpty()
  content: string
}

export class CommentValidator {
  @IsNotEmpty()
  content: string

  @IsNotEmpty()
  boardId: number
}