import { BaseModel } from './base.model'
import _maxBy from 'lodash/maxBy'

export class Equipment extends BaseModel {
  constructor(data, equipment) {
    super(data)
    this.id = this.id || this.generateId(equipment)
    this.description = data.description || ''
    this.year = data.year || ''
    this.make = data.make || ''
    this.model = data.model || ''
    this.serialNumber = data.serialNumber || ''
    this.status = data.status || ''
    this.assetType = data.assetType || ''
    this.checkList = data.checkList || ''
    this.notes = data.notes || ''
    this.deleted_at = data.deleted_at || ''
  }

  generateId(equipment) {
    const latest = _maxBy(equipment, 'id')
    if (!latest) {
      return 1
    }
    return latest.id + 1
  }
}
