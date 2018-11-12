import { validateText, validateNumber } from './validate'
// TO-DO: to add localization here
export const employeeRules = {
  fname: [
    { validator: validateText, min: 2, max: 15, required: true, trigger: 'blur' }
  ],
  lname: [
    { validator: validateText, min: 2, max: 15, required: true, trigger: 'blur' }
  ],
  email: [
    { type: 'email', required: true, message: 'Please enter a valid email', trigger: 'blur' }
  ],
  number: [
    { validator: validateNumber, min: 0, required: true, trigger: 'blur' }
  ],
  status: [
    { required: true, message: 'Please pick a status', trigger: 'blur' }
  ],
  labor: [
    { validator: validateNumber, min: 0, required: false, trigger: 'blur' }
  ]
}

export const equipmentRules = {
  description: [
    { validator: validateText, min: 2, max: 15, required: true, trigger: 'blur' }
  ],
  make: [
    { validator: validateText, min: 2, max: 15, required: true, trigger: 'blur' }
  ],
  model: [
    { type: 'email', required: true, message: 'Please enter a valid email', trigger: 'blur' }
  ],
  serialNumber: [
    { validator: validateNumber, min: 0, required: true, trigger: 'blur' }
  ],
  status: [
    { required: true, message: 'Please pick a status', trigger: 'blur' }
  ],
  assetType: [
    { validator: validateText, min: 2, max: 15, required: true, trigger: 'blur' }
  ]
}
