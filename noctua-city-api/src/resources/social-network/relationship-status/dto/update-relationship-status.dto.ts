import { PartialType } from '@nestjs/mapped-types';
import { CreateRelationshipStatusDto } from './create-relationship-status.dto';

export class UpdateRelationshipStatusDto extends PartialType(CreateRelationshipStatusDto) {}
