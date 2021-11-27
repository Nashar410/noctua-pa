import { Test, TestingModule } from '@nestjs/testing';
import { TextContentService } from './text-content.service';

describe('TextContentService', () => {
  let service: TextContentService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TextContentService],
    }).compile();

    service = module.get<TextContentService>(TextContentService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
