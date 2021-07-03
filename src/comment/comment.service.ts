import { Logger } from '@nestjs/common';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { encrypt } from 'src/common/utils';
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
    const {password, ...comment} = commentInfo
    await this.commentRepository.create({...comment, password: encrypt(password)});
  }

  async putComment(id: number, content: string) {
    await this.commentRepository.update(id, { content });
  }
}
