import { ComponentSchema } from '../../libs'
import template from './sidebar.template.html'
import './sidebar.scss'

const name = 'sidebar'


function controller() {
  const self = this

  self.$onInit = function() {
    
  }
}

export default new ComponentSchema(name, template, controller, {
  rootNode: '<',
  itemSelectHandle: '<'
})
