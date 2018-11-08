import _isEmpty from 'lodash/isEmpty'
import _has from 'lodash/has'
import _isNull from 'lodash/isNull'
import _map from 'lodash/map'
import _clone from 'lodash/clone'
import _trim from 'lodash/trim'
import _assign from 'lodash/assign'
import _assignWith from 'lodash/assignWith'
import _isArray from 'lodash/isArray'
import _each from 'lodash/each'

export class BaseModel {
  get nestedModels() {
    return {}
  }

  createNestedModel(ModelName, modelData) {
    return new ModelName(modelData)
  }

  constructor(data) {
    _assignWith(this, data)

    if (_isEmpty(data) || _isEmpty(this.nestedModels)) {
      return
    }

    _each(data, (value, key) => {
      if (_has(this.nestedModels, key) && !_isNull(value)) {
        this[key] = _isArray(data[key]) ? _map(data[key], submodelValue => {
          return this.createNestedModel(this.nestedModels[key], submodelValue)
        }) : this.createNestedModel(this.nestedModels[key], data[key])
      }
    })
  }

  clone() {
    return _clone(this)
  }

  update(data) {
    _assign(this, data)
    return this
  }

  isEmptyField(fieldName) {
    return _isEmpty(_trim(this[fieldName]))
  }

  isNotEmptyField(fieldName) {
    return !this.isEmptyField(fieldName)
  }
}
