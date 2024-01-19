import {ExcelComponents} from '../../core/ExcelComponent';
import {createTable} from './table.template';
import {resizeHandler} from './table.resize';
import {shouldResize} from './table.functions';

export class Table extends ExcelComponents {
static ClassName = 'excel__table';

constructor($root, options) {
  super($root, {
    listeners: ['mousedown'],
  });
}

toHTML() {
  return createTable(25);
}

// onClick() {
//   console.log('click');
// }

onMousedown(event) {
  if (shouldResize(event)) {
    resizeHandler(this.$root, event);
  }
}
  // onMousemove() {
  //   console.log('mousemove');
  // }

// onMouseup() {
//   console.log('mouseup');
// }
}
