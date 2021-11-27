import { Test, TestingModule } from '@nestjs/testing';
import { RelationshipStatusService } from './relationship-status.service';

describe('RelationshipStatusService', () => {
  let service: RelationshipStatusService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RelationshipStatusService],
    }).compile();

    service = module.get<RelationshipStatusService>(RelationshipStatusService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
