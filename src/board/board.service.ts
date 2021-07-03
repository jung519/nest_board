import { Logger } from '@nestjs/common';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BoardInfoValidator } from 'src/common/validator';
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
    Logger.log('getBoardOne(), id: ' + id);
    return this.boardRepository
      .createQueryBuilder('board')
      .leftJoinAndSelect('board.comments', 'comments')
      .where('board.id = :id', { id })
      .andWhere('board.comments.isDelete = :isDelete', { isDelete: false })
      .orderBy('board.comments.id', 'DESC')
      .getOne();
  }

  async postBoard(boardInfo: BoardInfoValidator) {
    Logger.log('postBoard');
    return this.boardRepository.create(boardInfo);
  }

  async putBoard(id: number, boardInfo: BoardInfoValidator) {
    Logger.log('putBoard');
    await this.boardRepository.update(id, boardInfo);
  }
}
