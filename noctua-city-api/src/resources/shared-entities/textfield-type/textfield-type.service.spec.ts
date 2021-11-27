import { Test, TestingModule } from '@nestjs/testing';
import { TextfieldTypeService } from './textfield-type.service';

describe('TextfieldTypeService', () => {
  let service: TextfieldTypeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TextfieldTypeService],
    }).compile();

    service = module.get<TextfieldTypeService>(TextfieldTypeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
