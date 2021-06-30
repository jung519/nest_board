import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Comment } from 'src/db/comment.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CommentService {
  constructor(
    @InjectRepository(Comment)
    private commentRepository: Repository<Comment>,
  ) {}

  async postComment(commentInfo: Comment) {
    await this.commentRepository.create(commentInfo);
  }

  async getCommentByBoardId(boardId: number) {
    return this.commentRepository.find({
      where: { boardId, isDelete: false },
      order: { id: 'ASC' },
    });
  }

  async putComment(id: number, commentInfo: Comment) {
    await this.commentRepository.update(id, commentInfo);
  }
}
