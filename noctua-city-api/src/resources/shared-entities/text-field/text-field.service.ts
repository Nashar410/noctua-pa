import { Injectable } from '@nestjs/common';
import { CreateTextFieldDto } from './dto/create-text-field.dto';
import { UpdateTextFieldDto } from './dto/update-text-field.dto';

@Injectable()
export class TextFieldService {
  create(createTextFieldDto: CreateTextFieldDto) {
    return 'This action adds a new textField';
  }

  findAll() {
    return `This action returns all textField`;
  }

  findOne(id: number) {
    return `This action returns a #${id} textField`;
  }

  update(id: number, updateTextFieldDto: UpdateTextFieldDto) {
    return `This action updates a #${id} textField`;
  }

  remove(id: number) {
    return `This action removes a #${id} textField`;
  }
}
