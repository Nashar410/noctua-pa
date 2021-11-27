import { Module } from '@nestjs/common';
import { CategoryModule } from './category/category.module';
import { ClassificationModule } from './classification/classification.module';
import { PostModule } from './post/post.module';
import { SectionModule } from './section/section.module';
import { StoryModule } from './story/story.module';

@Module({
    imports: [
        CategoryModule,
        ClassificationModule,
        PostModule,
        SectionModule,
        StoryModule
    ]
})
export class StoryContentModule {}
