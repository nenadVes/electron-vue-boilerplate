
// TO-DO: to add localization here
export const rules = {
  fname: [
    { required: true, message: 'Please input a valid name', trigger: 'blur' },
    { min: 2, max: 15, message: 'Length should be 2 to 15', trigger: 'blur' }
  ],
  lname: [
    { required: true, message: 'Please input a valid name', trigger: 'blur' },
    { min: 2, max: 15, message: 'Length should be 2 to 15', trigger: 'blur' }
  ],
  email: [
    { type: 'email', required: true, message: 'Please enter a valid email', trigger: 'change' }
  ],
  number: [
    { type: 'number', required: true, message: 'This field must be a number', trigger: 'change' }
  ],
  status: [
    { required: true, message: 'Please pick a status', trigger: 'blur' }
  ],
  labor: [
    { type: 'number', message: 'This field must be a number', trigger: 'change' }
  ]
}

