// @ts-ignore
import * as mongoose from 'mongoose';

export const SummariesSchema = new mongoose.Schema({
  categories: Array,
  dependencies: Array,
  editors: Array,
  grand_total: Object,
  languages: Array,
  machines: Array,
  operating_systems: Array,
  projects: Array,
  range: Object,
});