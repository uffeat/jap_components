import { JapBase } from './_jap-base.js';

/* 
TODO:
- Pagination.
*/

/* Implements a data-aware component that can hold a list of JapCard components. */
class JapList extends JapBase  {
  constructor() {
    super({});

  }
  
}

const componentTag = 'jap-list';
customElements.get(componentTag) || customElements.define(componentTag, JapList);

export { JapList };
