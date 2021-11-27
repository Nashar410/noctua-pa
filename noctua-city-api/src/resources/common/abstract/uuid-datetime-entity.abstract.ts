import { DatetimeEntityInterface } from '../interface/datetime-entity.interface';
import { PrimaryKey, Property } from '@mikro-orm/core';
import { UuidEntityInterface } from '../interface/uuid-entity.interface';
import { v4 } from 'uuid';

/**
 * Abstract for entity with uuid id and Datetime field
 */
export abstract class UuidDatetimeEntityAbstract implements UuidEntityInterface, DatetimeEntityInterface {
    
    @PrimaryKey()
    id: string = v4();
    
    @Property()
    createdAt: Date;
    
    @Property()
    lastEditAt: Date;
    
}
