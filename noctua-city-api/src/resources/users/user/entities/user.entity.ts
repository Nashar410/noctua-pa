import { Entity, OneToOne } from '@mikro-orm/core';
import { UuidEntityAbstract } from '../../../common/abstract/uuid-entity.abstract';
import { UserProfile } from '../../user-profile/entities/user-profile.entity';

@Entity()
export class User extends UuidEntityAbstract {

    email: string;
    firstname: string;
    lastname: string;
    password: string;
    dateOfBirth: Date;
    agreedTermAndCondition: boolean;
    
    @OneToOne(() => UserProfile, profile => profile.user, { owner: true, orphanRemoval: true})
    profile!: UserProfile;

}
