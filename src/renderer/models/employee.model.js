import { BaseModel } from './base.model'
import _maxBy from 'lodash/maxBy'

export class Employee extends BaseModel {
  constructor(data, employees) {
    super(data)
    this.id = this.id || this.generateId(employees)
    this.fname = data.fname || ''
    this.lname = data.lname || ''
    this.email = data.email || ''
    this.number = data.number || ''
    this.status = data.status || ''
    this.desc = data.desc || ''
    this.labor = data.labor || ''
    this.keywords = data.keywords || ''
    this.deleted_at = data.deleted_at || ''
  }

  generateId(employees) {
    const latest = _maxBy(employees, 'id')
    if (!latest) {
      return 1
    }
    return latest.id + 1
  }
}
