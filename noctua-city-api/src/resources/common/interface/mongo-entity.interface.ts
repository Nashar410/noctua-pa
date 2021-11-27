import { ObjectId } from '@mikro-orm/mongodb';
/**
 * Interface for mongo entity
 */
export interface MongoEntityInterface {
    _id: ObjectId;
    id: string;
}
