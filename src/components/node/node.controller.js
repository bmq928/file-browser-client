import { ComponentSchema } from '../../libs'
import template from './node.template.html'
// import './node.scss'

const name = 'node'

function controller() {
  const self = this

  self.$onInit = function() {
    preProcess()
    init()
  }

  function preProcess() {
    console.log(self.rootIsFile)
    console.log(self.files)
    console.log(self.folders)
    console.log({self})
  }

  function init() {}
}

export default new ComponentSchema(name, template, controller, {
  rootIsFile: '<',
  rootName: '<',
  files: '<',
  folders: '<'
})
