import { PartialType } from '@nestjs/mapped-types';
import { CreateTextFieldDto } from './create-text-field.dto';

export class UpdateTextFieldDto extends PartialType(CreateTextFieldDto) {}
