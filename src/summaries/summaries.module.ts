import { Module } from '@nestjs/common';
import { SummariesController } from './summaries.controller';
import { SummariesService } from './summaries.service';
import { summariesProviders } from './summaries.providers';
import { DatabaseModule } from '../database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [SummariesController],
  providers: [SummariesService, ...summariesProviders],
})
export class SummariesModule {}
