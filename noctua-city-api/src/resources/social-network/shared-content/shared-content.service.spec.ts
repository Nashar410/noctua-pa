import { Test, TestingModule } from '@nestjs/testing';
import { SharedContentService } from './shared-content.service';

describe('SharedContentService', () => {
  let service: SharedContentService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SharedContentService],
    }).compile();

    service = module.get<SharedContentService>(SharedContentService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
