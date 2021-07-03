import { Logger } from '@nestjs/common';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CommentValidator } from 'src/common/validator';
import { Comment } from 'src/db/comment.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CommentService {
  constructor(
    @InjectRepository(Comment)
    private commentRepository: Repository<Comment>,
  ) {}

  async postComment(commentInfo: CommentValidator) {
    await this.commentRepository.create(commentInfo);
  }

  async putComment(id: number, commentInfo: CommentValidator) {
    await this.commentRepository.update(id, commentInfo);
  }
}
