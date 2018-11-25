import { BaseModel } from './base.model'
import _maxBy from 'lodash/maxBy'

export class Task extends BaseModel {
  constructor(data, tasks) {
    super(data)
    this.id = this.id || this.generateId(tasks)
    this.name = data.name || ''
    this.status = data.status || ''
    this.notes = data.notes || ''
    this.type = data.type || ''
    this.status = data.status || ''
    this.created_at = data.created_at || ''
    this.closed = data.closed || ''
    this.labels = data.labels || ''
    this.expectedLabor = data.expectedLabor || ''
    this.notes = data.notes || ''
    this.deleted_at = data.deleted_at || ''
    // repair request specific
    this.dueBy = data.dueBy || ''
    this.priority = data.priority || ''
    this.requestor = data.requestor || ''
    // preventive maintenance specific
    this.lastPerformed = data.lastPerformed || ''
    this.dueEvery = data.dueEvery || ''
    this.advanceNotice = data.advanceNotice || ''
    // relations
    this.workOrder = data.workOrder || ''
    this.equipment = data.equipment || ''
  }

  generateId(tasks) {
    const latest = _maxBy(tasks, 'id')
    if (!latest) {
      return 1
    }
    return latest.id + 1
  }
}
