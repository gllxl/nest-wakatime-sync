import * as mongoose from 'mongoose';
import { dbConfig } from '../config/database'

const { user, host, pwd } = dbConfig;
export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: async (): Promise<typeof mongoose> =>
      await mongoose.connect(`mongodb://${user}:${pwd}@${host}:27017/nest`),
  },
];