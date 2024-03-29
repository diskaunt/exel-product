import {ExcelStateComponent} from '../../core/ExcelStateComponent.js';
import {createToolbar} from './toolbar.template.js';
import {$} from '@/core/dom.js';
import {defaultStyles} from '../../constans.js';

export class Toolbar extends ExcelStateComponent {
static ClassName = 'excel__toolbar';

constructor($root, options) {
  super($root, {
    name: 'Toolbar',
    listeners: ['click'],
    subscribe: ['currentStyles'],
    ...options,
  });
}

prepare() {
  this.initState(defaultStyles);
}

get template() {
  return createToolbar(this.state);
}

toHTML() {
  return this.template;
}

storeChanged(changes) {
  this.setState(changes.currentStyles);
}

onClick(event) {
  const $target = $(event.target);
  if ($target.data.type === 'button') {
    const value = JSON.parse($target.data.value);
    this.$emit('toolbar:applyStyle', value);
  }
}
}
