import { PartialType } from '@nestjs/mapped-types';
import { CreateSharedContentDto } from './create-shared-content.dto';

export class UpdateSharedContentDto extends PartialType(CreateSharedContentDto) {}
