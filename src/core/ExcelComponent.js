import {DomListener} from './DomListener';

export class ExcelComponents extends DomListener {
  constructor($root, options = {}) {
    super($root, options.listeners);
    this.name = options.name || '';
    this.emitter = options.emitter;
    this.subscribe = options.subscribe || [];
    this.store = options.store;
    this.unsubscribers = [];

    this.prepare();
  }
  // настраиваем наш компонент до init
  prepare() {

  }

  // возвращает шаблон компонента
  toHTML() {
    return '';
  }

  // уведомляем слушаетелей про события event
  $emit(event, ...args) {
    this.emitter.emit(event, ...args);
  }

  $on(event, fn) {
    const unsub = this.emitter.subscribe(event, fn);
    this.unsubscribers.push(unsub);
  }

  $dispatch(action) {
    this.store.dispatch(action);
  }

  storeChanged() {

  }

  isWatching(key) {
    return this.subscribe.includes(key);
  }

  // инициализируем компонент
  // добавляем DOM слушателей
  init() {
    this.initDOMListeners();
  }
  // удаляем компонент
  // чистим слушатели
  destroy() {
    this.removeDOMListeners();
    this.unsubscribers.forEach((unsub) => unsub());
  }
}
