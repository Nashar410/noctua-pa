import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SharedContentService } from './shared-content.service';
import { CreateSharedContentDto } from './dto/create-shared-content.dto';
import { UpdateSharedContentDto } from './dto/update-shared-content.dto';

@Controller('shared-entities-content')
export class SharedContentController {
  constructor(private readonly sharedContentService: SharedContentService) {}

  @Post()
  create(@Body() createSharedContentDto: CreateSharedContentDto) {
    return this.sharedContentService.create(createSharedContentDto);
  }

  @Get()
  findAll() {
    return this.sharedContentService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.sharedContentService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSharedContentDto: UpdateSharedContentDto) {
    return this.sharedContentService.update(+id, updateSharedContentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.sharedContentService.remove(+id);
  }
}
