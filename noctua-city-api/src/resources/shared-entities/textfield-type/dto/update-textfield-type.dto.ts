import { PartialType } from '@nestjs/mapped-types';
import { CreateTextfieldTypeDto } from './create-textfield-type.dto';

export class UpdateTextfieldTypeDto extends PartialType(CreateTextfieldTypeDto) {}
