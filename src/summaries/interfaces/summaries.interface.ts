export interface Summaries {
  readonly categories: Detail[];
  readonly dependencies: Detail[];
  readonly editors: Detail[];
  readonly grand_total: Detail;
  readonly languages: Detail[];
  readonly machines: Detail[];
  readonly operating_systems: Detail[];
  readonly projects: Detail[];
  readonly range: Range;
}

export interface Detail {
  readonly digital: string;
  readonly hours: number;
  readonly minutes: number;
  readonly name: string;
  readonly percent: number;
  readonly seconds: number;
  readonly text: string;
  readonly total_seconds: number;
}

export interface Range {
  readonly date: string;
  readonly end: string;
  readonly start: string;
  readonly text: string;
  readonly timezone: string;
}