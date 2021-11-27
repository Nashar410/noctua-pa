import { IncrementalEntityInterface } from '../interface/incremental-entity.interface';
import { DatetimeEntityInterface } from '../interface/datetime-entity.interface';
import { PrimaryKey, Property } from '@mikro-orm/core';

/**
 * Abstract for entity with Incremental id and Datetime field
 */
export abstract class IncrementalDatetimeEntityAbstract implements IncrementalEntityInterface, DatetimeEntityInterface {
    
    @PrimaryKey()
    id: number;
    
    @Property()
    createdAt: Date;
    
    @Property()
    lastEditAt: Date;
    
}
