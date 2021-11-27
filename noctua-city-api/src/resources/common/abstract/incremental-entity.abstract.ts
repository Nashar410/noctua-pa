import { IncrementalEntityInterface } from '../interface/incremental-entity.interface';
import { PrimaryKey } from '@mikro-orm/core';


/**
 * Abstract for entity with Incremental id
 */
export abstract class IncrementalEntityAbstract implements IncrementalEntityInterface{
    @PrimaryKey()
    id: number;

}
