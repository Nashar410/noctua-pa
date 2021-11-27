import { Module } from '@nestjs/common';
import { TextfieldTypeService } from './textfield-type.service';
import { TextfieldTypeController } from './textfield-type.controller';

@Module({
  controllers: [TextfieldTypeController],
  providers: [TextfieldTypeService]
})
export class TextfieldTypeModule {}
