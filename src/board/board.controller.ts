import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { Board } from 'src/db/board.entity';
import { BoardService } from './board.service'

@Controller('board')
export class BoardController {
  constructor(
    private readonly boardService: BoardService
  ){}

  @Get('/:id')
  async getBoardOne(@Param('id') id: number) {
    return this.boardService.getBoardOne(id)
  }

  @Get('list')
  async getBoardList() {
    return this.boardService.getBoardList()
  }

  @Post('post')
  async postBoard(@Body() boardInfo: Board) {
    return this.boardService.postBoard(boardInfo)
  }

  @Put('update/:id')
  async putBoard(@Param('id') id: number, @Body() boardInfo: Board ) {
    await this.boardService.putBoard(id, boardInfo)
  }
}
