import { Injectable } from '@nestjs/common';

@Injectable()
export class BoardService {
  getBoardList(): Array<Object> {
    return  [
      {title: 'service title 1', content: 'content 1'},
      {title: 'service title 2', content: 'content 2'},
    ]
  }  
}
