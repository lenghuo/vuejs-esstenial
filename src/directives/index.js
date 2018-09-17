import Vue from 'vue'
import validator from './validator'
import dropdown from './dropdown'

const directive = {
  validator,
  dropdown
}

for (const [key, value] of Object.entries(directive)) {
  Vue.directive(key, value)
}
