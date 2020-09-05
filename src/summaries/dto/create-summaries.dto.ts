import { IsArray, IsObject } from 'class-validator';
import { Detail, Range } from "../interfaces/summaries.interface";

export class CreateSummariesDto {
  @IsArray()
  readonly categories: Detail[];

  @IsArray()
  readonly dependencies: Detail[];

  @IsArray()
  readonly editors: Detail[];

  @IsObject()
  readonly grand_total: Detail;

  @IsArray()
  readonly languages: Detail[];

  @IsArray()
  readonly machines: Detail[];

  @IsArray()
  readonly operating_systems: Detail[];

  @IsArray()
  readonly projects: Detail[];

  @IsObject()
  readonly range: Range;

}
