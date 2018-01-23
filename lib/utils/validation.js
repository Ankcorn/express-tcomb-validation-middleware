/**
 * 
 * @author Thomas Ankcorn
 * @module validation
 * 
 */

/**
  * NOTE: This works under the assumption that all tcomb schemas have meta and kind properties
  * and will not change
  * If this changes it will need updating.
  */

function isTcomb(SCHEMA) {
    if (!Object.prototype.hasOwnProperty.call(SCHEMA, 'meta') || !Object.prototype.hasOwnProperty.call(SCHEMA.meta, 'kind')){
      return false
    }
    return true
}

module.exports = {
    isTcomb,
};
