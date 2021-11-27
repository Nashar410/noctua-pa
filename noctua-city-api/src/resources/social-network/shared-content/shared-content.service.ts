import { Injectable } from '@nestjs/common';
import { CreateSharedContentDto } from './dto/create-shared-content.dto';
import { UpdateSharedContentDto } from './dto/update-shared-content.dto';

@Injectable()
export class SharedContentService {
  create(createSharedContentDto: CreateSharedContentDto) {
    return 'This action adds a new sharedContent';
  }

  findAll() {
    return `This action returns all sharedContent`;
  }

  findOne(id: number) {
    return `This action returns a #${id} sharedContent`;
  }

  update(id: number, updateSharedContentDto: UpdateSharedContentDto) {
    return `This action updates a #${id} sharedContent`;
  }

  remove(id: number) {
    return `This action removes a #${id} sharedContent`;
  }
}
