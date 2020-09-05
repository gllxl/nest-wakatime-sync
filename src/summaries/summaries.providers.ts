import { Mongoose } from 'mongoose';
// @ts-ignore
import { SummariesSchema } from './schema/summaries.schema';

export const summariesProviders = [
  {
    provide: 'SUMMARIES_MODEL',
    useFactory: (mongoose: Mongoose) => mongoose.model('SUMMARIES', SummariesSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];