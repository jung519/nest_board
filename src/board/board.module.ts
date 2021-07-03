import { Module } from '@nestjs/common';
import { BoardController } from './board.controller';
import { BoardService } from './board.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Board } from 'src/db/board.entity';
import { Comment } from 'src/db/comment.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Board, Comment])],
  exports: [TypeOrmModule],
  controllers: [BoardController],
  providers: [BoardService],
})
export class BoardModule {}
