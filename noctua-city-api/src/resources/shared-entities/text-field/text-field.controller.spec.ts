import { Test, TestingModule } from '@nestjs/testing';
import { TextFieldController } from './text-field.controller';
import { TextFieldService } from './text-field.service';

describe('TextFieldController', () => {
  let controller: TextFieldController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TextFieldController],
      providers: [TextFieldService],
    }).compile();

    controller = module.get<TextFieldController>(TextFieldController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
