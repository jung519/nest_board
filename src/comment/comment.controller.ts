import { Post, Body, Controller, Put, Param } from '@nestjs/common';
import { Comment } from 'src/db/comment.entity';
import { CommentService } from './comment.service';

@Controller('comment')
export class CommentController {
  constructor(private readonly commentService: CommentService) {}

  @Post('post')
  async postComment(@Body() commentInfo: Comment) {
    await this.commentService.postComment(commentInfo);
  }

  @Put('update/:id')
  async putComment(@Param('id') id: number, @Body() commentInfo: Comment) {
    await this.commentService.putComment(id, commentInfo);
  }
}
