import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';
import { Comment } from './comment.entity';

@Entity()
export class Board {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string; // default string length: 255

  @Column({ type: 'varchar', length: 1024 })
  content: string;

  @Column({ default: false })
  isDelete: boolean;

  @CreateDateColumn()
  createdAt: Date; // default type: datetime

  @UpdateDateColumn()
  updatedAt: Date; // default type: datetime

  @OneToMany(() => Comment, (comment) => comment.board, { cascade: true })
  comments: Comment[];
}
