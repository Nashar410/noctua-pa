import { Module } from '@nestjs/common';
import { UserProfileModule } from './user-profile/user-profile.module';

@Module({
    imports: [
        UsersModule,
        UserProfileModule
    ]
})
export class UsersModule {}
