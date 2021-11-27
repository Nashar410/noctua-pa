import { Test, TestingModule } from '@nestjs/testing';
import { TextFieldService } from './text-field.service';

describe('TextFieldService', () => {
  let service: TextFieldService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TextFieldService],
    }).compile();

    service = module.get<TextFieldService>(TextFieldService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
