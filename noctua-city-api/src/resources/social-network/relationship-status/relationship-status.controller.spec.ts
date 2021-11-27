import { Test, TestingModule } from '@nestjs/testing';
import { RelationshipStatusController } from './relationship-status.controller';
import { RelationshipStatusService } from './relationship-status.service';

describe('RelationshipStatusController', () => {
  let controller: RelationshipStatusController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RelationshipStatusController],
      providers: [RelationshipStatusService],
    }).compile();

    controller = module.get<RelationshipStatusController>(RelationshipStatusController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
