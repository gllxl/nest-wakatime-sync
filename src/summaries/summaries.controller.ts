import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { Roles } from '../common/decorators/roles.decorator';
import { RolesGuard } from '../common/guards/roles.guard';
import { ParseIntPipe } from '../common/pipes/parse-int.pipe';
import { SummariesService } from './summaries.service';
import { CreateSummariesDto } from './dto/create-summaries.dto';
import { Summaries } from './interfaces/summaries.interface';

@UseGuards(RolesGuard)
@Controller('summaries')
export class SummariesController {
  constructor(private readonly summariesService: SummariesService) {}

  @Post()
  @Roles('admin')
  async create(@Body() createSummariesDto: CreateSummariesDto) {
    await this.summariesService.create(createSummariesDto);
  }

  @Get('findAll')
  async findAll(): Promise<Summaries[]> {
    return this.summariesService.findAll();
  }


  @Get('getUser')
  async getUser(): Promise<any> {
    return await this.summariesService.getUser();
  }

  @Get(':id')
  findOne(
    @Param('id', new ParseIntPipe())
    id: number,
  ) {
    return id
  }
}
