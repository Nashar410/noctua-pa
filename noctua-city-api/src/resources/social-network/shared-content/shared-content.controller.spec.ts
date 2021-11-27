import { Test, TestingModule } from '@nestjs/testing';
import { SharedContentController } from './shared-content.controller';
import { SharedContentService } from './shared-content.service';

describe('SharedContentController', () => {
  let controller: SharedContentController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SharedContentController],
      providers: [SharedContentService],
    }).compile();

    controller = module.get<SharedContentController>(SharedContentController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
