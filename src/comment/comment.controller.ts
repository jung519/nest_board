import { Post, Body, Controller } from '@nestjs/common';
import { CommentValidator } from 'src/common/validator';
import { CommentService } from './comment.service';

@Controller('comment')
export class CommentController {
  constructor(private readonly commentService: CommentService) {}

  @Post('post')
  async postComment(@Body() commentInfo: CommentValidator) {
    await this.commentService.postComment(commentInfo);
  }
}
