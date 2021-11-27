import { Module } from '@nestjs/common';
import { RelationshipStatusModule } from './relationship-status/relationship-status.module';
import { RelationshipTypeModule } from './relationship-type/relationship-type.module';
import { SharedContentModule } from './shared-content/shared-content.module';
import { UserRelationshipModule } from './user-relationship/user-relationship.module';
import { UserSubscriptionModule } from './user-subscription/user-subscription.module';

@Module({
    imports: [
        RelationshipStatusModule,
        RelationshipTypeModule,
        SharedContentModule,
        UserRelationshipModule,
        UserSubscriptionModule
    ]
})
export class SocialNetworkModule {}
