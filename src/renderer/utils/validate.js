import { i18n } from '../language/lang'

export function isvalidUsername(str) {
  const valid_map = ['admin', 'editor']
  return valid_map.indexOf(str.trim()) >= 0
}

/* 合法uri*/
export function validateURL(textval) {
  const urlregex = /^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/
  return urlregex.test(textval)
}

/* 小写字母*/
export function validateLowerCase(str) {
  const reg = /^[a-z]+$/
  return reg.test(str)
}

/* 大写字母*/
export function validateUpperCase(str) {
  const reg = /^[A-Z]+$/
  return reg.test(str)
}

/* 大小写字母*/
export function validatAlphabets(str) {
  const reg = /^[A-Za-z]+$/
  return reg.test(str)
}

export function validateText(rule, value, callback) {
  if (value === '' && rule.required) {
    callback(new Error(i18n.tc('validation.required')))
  } else if (value !== '' && value.length < rule.min) {
    callback(new Error(i18n.tc('validation.text.must1') + ' ' + rule.min + ' ' + i18n.tc('validation.text.must3')))
  } else if (value !== '' && value.length > rule.max) {
    callback(new Error(i18n.tc('validation.text.must2') + ' ' + rule.max + ' ' + i18n.tc('validation.text.must3')))
  } else {
    callback()
  }
}

export function validateNumber(rule, value, callback) {
  if (value === '' && rule.required) {
    callback(new Error(i18n.tc('validation.required')))
  } else if (!/^[0-9]*$/.test(value)) {
    callback(new Error(i18n.tc('validation.number.invalid')))
  } else if (value !== '' && value < rule.min) {
    callback(new Error(i18n.tc('validation.number.must1') + ' ' + rule.min))
  } else if (value !== '' && value > rule.max) {
    callback(new Error(i18n.tc('validation.number.must2') + ' ' + rule.max))
  } else {
    callback()
  }
}

export function validateDate(rule, value, callback) {
  if (value === '' && rule.required) {
    callback(new Error(i18n.tc('validation.required')))
  } else if (rule.yearOnly && !/^(19|20)\d{2}$/.test(value)) {
    callback(new Error(i18n.tc('validation.date.year')))
  } else {
    callback()
  }
}

export function validateEmail(rule, value, callback) {
  if (value === '' && rule.required) {
    callback(new Error(i18n.tc('validation.required')))
  } else if (value !== '' && !/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(value)) {
    callback(new Error(i18n.tc('validation.email')))
  } else {
    callback()
  }
}

export function validateSelect(rule, value, callback) {
  if (value === '' && rule.required) {
    callback(new Error(i18n.tc('validation.required')))
  } else {
    callback()
  }
}
