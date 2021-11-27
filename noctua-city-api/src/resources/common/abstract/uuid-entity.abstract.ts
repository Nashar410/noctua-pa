import { UuidEntityInterface } from '../interface/uuid-entity.interface';
import { PrimaryKey } from '@mikro-orm/core';
import { v4 } from 'uuid';

/**
 * Abstract for entity with uuid
 */
export abstract class UuidEntityAbstract implements UuidEntityInterface{
    @PrimaryKey()
    id: string = v4();
}
