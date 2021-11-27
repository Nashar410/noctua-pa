import { Injectable } from '@nestjs/common';
import { CreateRelationshipStatusDto } from './dto/create-relationship-status.dto';
import { UpdateRelationshipStatusDto } from './dto/update-relationship-status.dto';

@Injectable()
export class RelationshipStatusService {
  create(createRelationshipStatusDto: CreateRelationshipStatusDto) {
    return 'This action adds a new relationshipStatus';
  }

  findAll() {
    return `This action returns all relationshipStatus`;
  }

  findOne(id: number) {
    return `This action returns a #${id} relationshipStatus`;
  }

  update(id: number, updateRelationshipStatusDto: UpdateRelationshipStatusDto) {
    return `This action updates a #${id} relationshipStatus`;
  }

  remove(id: number) {
    return `This action removes a #${id} relationshipStatus`;
  }
}
