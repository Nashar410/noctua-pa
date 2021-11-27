import { StoryContentModule } from './story-content/story-content.module';
import { SocialNetworkModule } from './social-network/social-network.module';
import { UsersModule } from './users/users.module';
import { Module } from '@nestjs/common';
import { SharedEntitiesModule } from './shared-entities/shared-entities.module';


@Module({
    imports: [
        StoryContentModule,
        SocialNetworkModule,
        UsersModule,
        SharedEntitiesModule,
    ]
})
export class ResourcesModule {
}
