import { Module } from '@nestjs/common';
import { RelationshipTypeService } from './relationship-type.service';
import { RelationshipTypeController } from './relationship-type.controller';

@Module({
  controllers: [RelationshipTypeController],
  providers: [RelationshipTypeService]
})
export class RelationshipTypeModule {}
