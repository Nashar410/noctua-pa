import { Module } from '@nestjs/common';
import { CommentModule } from './comment/comment.module';
import { LikeModule } from './like/like.module';
import { ReportModule } from './report/report.module';
import { TextContentModule } from './text-content/text-content.module';
import { TextFieldModule } from './text-field/text-field.module';
import { TextfieldTypeModule } from './textfield-type/textfield-type.module';

@Module({
    imports: [
        CommentModule,
        LikeModule,
        ReportModule,
        TextContentModule,
        TextFieldModule,
        TextfieldTypeModule
    ]
})
export class SharedEntitiesModule {}
