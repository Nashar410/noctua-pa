import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RelationshipStatusService } from './relationship-status.service';
import { CreateRelationshipStatusDto } from './dto/create-relationship-status.dto';
import { UpdateRelationshipStatusDto } from './dto/update-relationship-status.dto';

@Controller('relationship-status')
export class RelationshipStatusController {
  constructor(private readonly relationshipStatusService: RelationshipStatusService) {}

  @Post()
  create(@Body() createRelationshipStatusDto: CreateRelationshipStatusDto) {
    return this.relationshipStatusService.create(createRelationshipStatusDto);
  }

  @Get()
  findAll() {
    return this.relationshipStatusService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.relationshipStatusService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRelationshipStatusDto: UpdateRelationshipStatusDto) {
    return this.relationshipStatusService.update(+id, updateRelationshipStatusDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.relationshipStatusService.remove(+id);
  }
}
