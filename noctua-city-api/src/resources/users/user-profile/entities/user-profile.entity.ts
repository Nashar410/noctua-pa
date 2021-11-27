import { IncrementalDatetimeEntityAbstract } from '../../../common/abstract/incremental-datetime-entity.abstract';
import { Entity, OneToOne } from '@mikro-orm/core';
import { User } from '../../user/entities/user.entity';

@Entity()
export class UserProfile extends IncrementalDatetimeEntityAbstract{

    @OneToOne(() => User, user => user.profile)
    user: string;
    
}
