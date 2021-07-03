import { Post, Body, Controller, Put, Param, ParseIntPipe } from '@nestjs/common';
import { CommentValidator } from 'src/common/validator';
import { CommentService } from './comment.service';

@Controller('comment')
export class CommentController {
  constructor(private readonly commentService: CommentService) {}

  @Post('post')
  async postComment(@Body() commentInfo: CommentValidator) {
    await this.commentService.postComment(commentInfo);
  }

  @Put('update/:id')
  async putComment(@Param('id', ParseIntPipe) id: number, @Body() commentInfo: CommentValidator) {
    await this.commentService.putComment(id, commentInfo);
  }
}
