import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TextFieldService } from './text-field.service';
import { CreateTextFieldDto } from './dto/create-text-field.dto';
import { UpdateTextFieldDto } from './dto/update-text-field.dto';

@Controller('text-field')
export class TextFieldController {
  constructor(private readonly textFieldService: TextFieldService) {}

  @Post()
  create(@Body() createTextFieldDto: CreateTextFieldDto) {
    return this.textFieldService.create(createTextFieldDto);
  }

  @Get()
  findAll() {
    return this.textFieldService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.textFieldService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTextFieldDto: UpdateTextFieldDto) {
    return this.textFieldService.update(+id, updateTextFieldDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.textFieldService.remove(+id);
  }
}
