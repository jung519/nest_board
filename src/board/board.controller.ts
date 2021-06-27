import { Controller, Get } from '@nestjs/common';
import { BoardService } from './board.service'

@Controller('board')
export class BoardController {
  constructor(
    private readonly boardService: BoardService
  ){}

  @Get('list')
  getBoardList(): Array<Object> {
    return this.boardService.getBoardList()
  }
}
