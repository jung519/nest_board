import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
} from 'typeorm';
import { Board } from './board.entity';

@Entity()
export class Comment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  content: string; // default string length: 255

  @Column({ default: false })
  isDelete: boolean;

  @CreateDateColumn()
  createdAt: Date; // default type: datetime

  @UpdateDateColumn()
  updatedAt: Date; // default type: datetime

  @ManyToOne(() => Board, (board) => board.comment)
  board: Board;
}
