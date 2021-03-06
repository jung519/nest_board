import { Logger } from '@nestjs/common';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { encrypt } from 'src/common/utils';
import { BoardInfoValidator } from 'src/common/validator';
import { Board } from 'src/db/board.entity';
import { Repository } from 'typeorm';

@Injectable()
export class BoardService {
  constructor(
    @InjectRepository(Board)
    private boardRepository: Repository<Board>,
  ) {}

  async getBoardList(skip: number, take: number) {
    Logger.log(`getBoardList(), skip=${skip}, take=${take}`);

    return this.boardRepository.find({
      where: { isDelete: false },
      order: { id: 'DESC' },
      skip, // 시작 index
      take, // page당 갯수
    });
  }

  async getBoardOne(id: number) {
    Logger.log(`getBoardOne(), id: ${id}`);

    return this.boardRepository
      .createQueryBuilder('board')
      .leftJoinAndSelect('board.comments', 'comments')
      .where('board.id = :id', { id })
      .orderBy('board.comments.id', 'DESC')
      .getOne();
  }

  async postBoard(boardInfo: BoardInfoValidator) {
    Logger.log(`postBoard()`);

    const { password, ...board } = boardInfo;
    return this.boardRepository.insert({
      ...board,
      password: encrypt(password),
    });
  }

  async putBoard(id: number, title: string, content: string) {
    Logger.log(`putBoard(), id= ${id}, title= ${title}, content= ${content}`);

    await this.boardRepository.update(id, { title, content });
  }
}
