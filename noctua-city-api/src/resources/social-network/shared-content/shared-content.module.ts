import { Module } from '@nestjs/common';
import { SharedContentService } from './shared-content.service';
import { SharedContentController } from './shared-content.controller';

@Module({
  controllers: [SharedContentController],
  providers: [SharedContentService]
})
export class SharedContentModule {}
