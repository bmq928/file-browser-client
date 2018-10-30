import { ComponentSchema } from '../../libs'
import template from './node.template.html'
// import './node.scss'

const name = 'node'

function controller() {
  const self = this

  self.$onInit = function() {
    preProcess()
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

  self._itemClick = function() {
    const item = {
      files: self.files,
      folders: self.folders
    }

    self.itemClick(item)
  }

  function preProcess() {
    //for filter
    self.showSub = false
    // self._files = self.files
    // self._folders = self.folders
    self._files = []
    self._folders = []
  }
}

export default new ComponentSchema(name, template, controller, {
  rootIsFile: '<',
  rootName: '<',
  files: '<',
  folders: '<',
  itemClick: '<'
})
