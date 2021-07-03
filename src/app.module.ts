import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { BoardModule } from './board/board.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { CommentModule } from './comment/comment.module';
import { ConfirmPasswordMiddleware } from './middleware/confirmPassword';

@Module({
  imports: [TypeOrmModule.forRoot(), BoardModule, CommentModule],
})
export class AppModule {
  // constructor(private connection: Connection) {}

  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(ConfirmPasswordMiddleware)
      .forRoutes({ path: '/board/update/:id', method: RequestMethod.PUT });
  }
}
