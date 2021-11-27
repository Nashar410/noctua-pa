import { Module } from '@nestjs/common';
import { RelationshipStatusService } from './relationship-status.service';
import { RelationshipStatusController } from './relationship-status.controller';

@Module({
  controllers: [RelationshipStatusController],
  providers: [RelationshipStatusService]
})
export class RelationshipStatusModule {}
