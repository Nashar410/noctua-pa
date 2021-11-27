import { Test, TestingModule } from '@nestjs/testing';
import { TextContentController } from './text-content.controller';
import { TextContentService } from './text-content.service';

describe('TextContentController', () => {
  let controller: TextContentController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TextContentController],
      providers: [TextContentService],
    }).compile();

    controller = module.get<TextContentController>(TextContentController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
