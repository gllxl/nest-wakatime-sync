import { Inject, Injectable, Logger } from '@nestjs/common';
import { Summaries } from './interfaces/summaries.interface';
import { Model } from 'mongoose';
import { CreateSummariesDto } from './dto/create-summaries.dto';
// @ts-ignore
import { WakaTime } from 'wakatime';
import { Cron } from "@nestjs/schedule";

const wakaTimeInstance = new WakaTime('f3bdbda8-e144-404b-8fb5-41c0a3eedac8');

@Injectable()
export class SummariesService {
  constructor(@Inject('SUMMARIES_MODEL') private readonly summariesModel: Model<Summaries>) {}
  private readonly logger = new Logger(SummariesService.name);

  async create(createSummariesDto: CreateSummariesDto): Promise<Summaries> {
    const createdSummaries = new this.summariesModel(createSummariesDto);
    return createdSummaries.save();
  }

  async getUser(): Promise<any> {
    let data = await wakaTimeInstance.summaries('2020-09-04');
    data = data.data;
    return await data;
  }

  async findAll(): Promise<Summaries[]> {
    return this.summariesModel.find().exec();
  }

  @Cron('30 50 23 * * *')
  async getSummariesFromApi() {
    const data = await wakaTimeInstance.summaries(new Date().toLocaleDateString());
    const createdSummaries = new this.summariesModel(data.data[0]);
    this.logger.debug('createdSummaries');
    return createdSummaries.save();
  }
}
