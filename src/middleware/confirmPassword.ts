import { HttpStatus } from '@nestjs/common';
import { HttpException, Injectable, NestMiddleware } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Request, Response, NextFunction } from 'express';
import { validatePassword } from 'src/common/utils';
import { Board } from 'src/db/board.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ConfirmPasswordMiddleware implements NestMiddleware {
  constructor(
    @InjectRepository(Board)
    private boardRepository: Repository<Board>,
  ) {}

  async use(req: Request, res: Response, next: NextFunction) {
    const { id } = req.params;
    const { password } = req.body;

    const board = await this.boardRepository.findOne(id);

    if (!validatePassword(password, board.password)) {
      throw new HttpException('invalid password!', HttpStatus.UNAUTHORIZED);
    }

    next();
  }
}
