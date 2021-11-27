import { Test, TestingModule } from '@nestjs/testing';
import { TextfieldTypeController } from './textfield-type.controller';
import { TextfieldTypeService } from './textfield-type.service';

describe('TextfieldTypeController', () => {
  let controller: TextfieldTypeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TextfieldTypeController],
      providers: [TextfieldTypeService],
    }).compile();

    controller = module.get<TextfieldTypeController>(TextfieldTypeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
