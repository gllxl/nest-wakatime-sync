import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { CoreModule } from './core/core.module';
import { SummariesModule } from "./summaries/summaries.module";

@Module({
  imports: [
    CoreModule,
    SummariesModule,
    ScheduleModule.forRoot(),
  ],
})
export class AppModule {
}
