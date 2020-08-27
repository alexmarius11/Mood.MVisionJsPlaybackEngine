import amGeneral = require("../../../../../app/ts/abstract/am_general/a_entity/A_Entity");

export module am_general
{
  export interface AE_Queue extends amGeneral.am_general.A_Entity
  {
      /**
       * Returns the item at the specified index from the list.
       * 0 is the first element, 1 is the second, and so on...
       * Elements at negative values are that many from the end: -1 is one before the end
       * (the last element), -2 is two before the end (one before last), etc.
       * @param index
       * @returns {*}
       */
      peekAt(index);
      
      /**
       * Alias for peekAt()
       * @param i
       * @returns {*}
       */
      get(i);
    
      /**
       * Returns the first item in the list without removing it.
       * @returns {*}
       */
      peek();

      /**
      * Alias for peek()
      * @returns {*}
      */
      peekFront() ;
    
      /**
       * Returns the item that is at the back of the queue without removing it.
       * Uses peekAt(-1)
       */
      peekBack() ;

      
      /**
       * Return the number of items on the list, or 0 if empty.
       * @returns {number}
       */
      size();
      /**
       * Add an item at the beginning of the list.
       * @param item
       */
      unshift(item);
      
      /**
       * Remove and return the first item on the list,
       * Returns undefined if the list is empty.
       * @returns {*}
       */
      shift();
      
      /**
       * Add an item to the bottom of the list.
       * @param item
       */
      push(item);
      
      /**
       * Remove and return the last item on the list.
       * Returns undefined if the list is empty.
       * @returns {*}
       */
      pop();
      
      /**
       * Remove and return the item at the specified index from the list.
       * Returns undefined if the list is empty.
       * @param index
       * @returns {*}
       */
      removeOne(index);
      
      /**
       * Remove number of items from the specified index from the list.
       * Returns array of removed items.
       * Returns undefined if the list is empty.
       * @param index
       * @param count
       * @returns {array}
       */
      remove(index, count);
      
      /**
       * Native splice implementation.
       * Remove number of items from the specified index from the list and/or add new elements.
       * Returns array of removed items or empty array if count == 0.
       * Returns undefined if the list is empty.
       *
       * @param index
       * @param count
       * @param {...*} [elements]
       * @returns {array}
       */
      splice(index: any, count: any, ...elements);
      
      /**
       * Soft clear - does not reset capacity.
       */
      clear();
      
      /**
       * Returns true or false whether the list is empty.
       * @returns {boolean}
       */
      isEmpty();
      
      /**
       * Returns an array of all queue items.
       * @returns {Array}
       */
      toArray();  
  }

} 