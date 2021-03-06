import { ParseIntPipe, Query } from '@nestjs/common';
import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { BoardInfoValidator } from 'src/common/validator';
import { BoardService } from './board.service';

@Controller('board')
export class BoardController {
  constructor(private readonly boardService: BoardService) {}

  @Get('list')
  async getBoardList(
    @Query('skip', ParseIntPipe) skip?: number,
    @Query('take', ParseIntPipe) take?: number,
  ) {
    return this.boardService.getBoardList(skip, take);
  }

  @Get('/:id')
  async getBoardOne(@Param('id', ParseIntPipe) id: number) {
    return this.boardService.getBoardOne(id);
  }

  @Post('post')
  async postBoard(@Body() boardInfo: BoardInfoValidator) {
    return this.boardService.postBoard(boardInfo);
  }

  @Put('update/:id')
  async putBoard(
    @Param('id', ParseIntPipe) id: number,
    @Body() boardInfo: BoardInfoValidator,
  ) {
    await this.boardService.putBoard(id, boardInfo.title, boardInfo.content);
  }
}
