import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { ResourcesModule } from './resources/resources.module';


@Module({
    imports: [
        MikroOrmModule.forRoot(),
        ResourcesModule,
    ],
    controllers: [AppController],
    providers: [AppService]
})
export class AppModule {
}
