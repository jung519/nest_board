import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Board } from 'src/db/board.entity';
import { Repository } from 'typeorm';

@Injectable()
export class BoardService {
  constructor(
    @InjectRepository(Board)
    private boardRepository: Repository<Board>,
  ) {}

  async getBoardList() {
    return this.boardRepository.find({
      where: { isDelete: false },
      order: { id: 'DESC' },
    });
  }

  async getBoardOne(id: number) {
    return this.boardRepository.findOne(id);
  }

  async postBoard(boardInfo: Board) {
    return this.boardRepository.create(boardInfo);
  }

  async putBoard(id: number, boardInfo: Board) {
    await this.boardRepository.update(id, boardInfo);
  }
}
