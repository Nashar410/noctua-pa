import { Module } from '@nestjs/common';
import { TextFieldService } from './text-field.service';
import { TextFieldController } from './text-field.controller';

@Module({
  controllers: [TextFieldController],
  providers: [TextFieldService]
})
export class TextFieldModule {}
