import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TextfieldTypeService } from './textfield-type.service';
import { CreateTextfieldTypeDto } from './dto/create-textfield-type.dto';
import { UpdateTextfieldTypeDto } from './dto/update-textfield-type.dto';

@Controller('textfield-type')
export class TextfieldTypeController {
  constructor(private readonly textfieldTypeService: TextfieldTypeService) {}

  @Post()
  create(@Body() createTextfieldTypeDto: CreateTextfieldTypeDto) {
    return this.textfieldTypeService.create(createTextfieldTypeDto);
  }

  @Get()
  findAll() {
    return this.textfieldTypeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.textfieldTypeService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTextfieldTypeDto: UpdateTextfieldTypeDto) {
    return this.textfieldTypeService.update(+id, updateTextfieldTypeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.textfieldTypeService.remove(+id);
  }
}
