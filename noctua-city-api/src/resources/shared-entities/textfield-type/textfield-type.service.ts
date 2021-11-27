import { Injectable } from '@nestjs/common';
import { CreateTextfieldTypeDto } from './dto/create-textfield-type.dto';
import { UpdateTextfieldTypeDto } from './dto/update-textfield-type.dto';

@Injectable()
export class TextfieldTypeService {
  create(createTextfieldTypeDto: CreateTextfieldTypeDto) {
    return 'This action adds a new textfieldType';
  }

  findAll() {
    return `This action returns all textfieldType`;
  }

  findOne(id: number) {
    return `This action returns a #${id} textfieldType`;
  }

  update(id: number, updateTextfieldTypeDto: UpdateTextfieldTypeDto) {
    return `This action updates a #${id} textfieldType`;
  }

  remove(id: number) {
    return `This action removes a #${id} textfieldType`;
  }
}
