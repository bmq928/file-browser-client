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

  self.toggleShowSubtree = function() {
    if (self.showSub) {
      self._files = []
      self._folders = []
    } else {
      self._files = self.files
      self._folders = self.folders
    }

    self.showSub = !self.showSub
  }

  function preProcess() {
    //for filter
    self.showSub = true
    self._files = self.files
    self._folders = self.folders
  }

  function init() {}
}

export default new ComponentSchema(name, template, controller, {
  rootIsFile: '<',
  rootName: '<',
  files: '<',
  folders: '<'
})
