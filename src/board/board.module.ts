import { Module } from '@nestjs/common';
import { BoardController } from './board.controller';
import { BoardService } from './board.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Board } from 'src/db/board.entity';
import { Comment } from 'src/db/comment.entity';
import { CommentService } from 'src/comment/comment.service';

@Module({
  imports: [TypeOrmModule.forFeature([Board, Comment])],
  exports: [TypeOrmModule],
  controllers: [BoardController],
  providers: [BoardService, CommentService],
})
export class BoardModule {}
