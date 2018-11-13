import { validateText, validateNumber, validateDate, validateEmail, validateSelect } from './validate'
// TO-DO: to add localization here
export const employeeRules = {
  fname: [
    { validator: validateText, min: 2, max: 15, required: true, trigger: 'blur' }
  ],
  lname: [
    { validator: validateText, min: 2, max: 15, required: true, trigger: 'blur' }
  ],
  email: [
    { validator: validateEmail, required: false, trigger: 'blur' }
  ],
  number: [
    { validator: validateNumber, min: 0, required: true, trigger: 'blur' }
  ],
  status: [
    { validator: validateSelect, required: true, trigger: 'change' }
  ],
  labor: [
    { validator: validateNumber, min: 0, required: false, trigger: 'blur' }
  ]
}

export const equipmentRules = {
  description: [
    { validator: validateText, min: 1, max: 30, required: true, trigger: 'blur' }
  ],
  make: [
    { validator: validateText, min: 1, max: 30, required: true, trigger: 'blur' }
  ],
  model: [
    { validator: validateText, min: 1, max: 30, required: true, trigger: 'blur' }
  ],
  serialNumber: [
    { validator: validateText, required: true, trigger: 'blur' }
  ],
  year: [
    { validator: validateDate, yearOnly: true, required: true, trigger: 'blur' }
  ],
  status: [
    { validator: validateSelect, required: true, trigger: 'change' }
  ],
  assetType: [
    { validator: validateSelect, required: true, trigger: 'change' }
  ]
}
