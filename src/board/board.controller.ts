import { Logger } from '@nestjs/common';
import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { CommentService } from 'src/comment/comment.service';
import { Board } from 'src/db/board.entity';
import { BoardService } from './board.service';

@Controller('board')
export class BoardController {
  constructor(
    private readonly boardService: BoardService,
    private readonly commentService: CommentService,
  ) {}

  @Get('list')
  async getBoardList() {
    return this.boardService.getBoardList();
  }

  @Get('/:id')
  async getBoardOne(@Param('id') id: number) {
    return this.boardService.getBoardOne(id);
  }

  @Post('post')
  async postBoard(@Body() boardInfo: Board) {
    return this.boardService.postBoard(boardInfo);
  }

  @Put('update/:id')
  async putBoard(@Param('id') id: number, @Body() boardInfo: Board) {
    await this.boardService.putBoard(id, boardInfo);
  }
}
