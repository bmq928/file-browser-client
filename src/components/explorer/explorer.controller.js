import { ComponentSchema } from '../../libs'
import template from './explorer.template.html'
import './explorer.scss'

const name = 'explorer'

function controller() {
  const self = this

  self.$onInit = function() {
    console.log({'self.listFile': self.listFile, 'self.listFolder': self.listFolder})
  }
}

export default new ComponentSchema(name, template, controller, {
  listFile: '<',
  listFolder: '<'
})
