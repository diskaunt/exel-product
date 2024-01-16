import {ExcelComponents} from '../../core/ExcelComponent';
import {createTable} from './table.template';

export class Table extends ExcelComponents {
static ClassName = 'excel__table';

toHTML() {
  return createTable(25);
}
}