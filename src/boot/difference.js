
import lodash from 'lodash'
import {ref , computed} from 'vue'

export default function(object, base) {
    function changes(object, base) {
        return _.transform(object, function(result, value, key) {
            if (!_.isEqual(value, base[key])) {
                result[key] = (_.isObject(value) && _.isObject(base[key])) ? changes(value, base[key]) : value;
            }
        });
    }
    const result = changes(object, base)

    return {
        result
    }
  }