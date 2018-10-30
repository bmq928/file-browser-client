import { ComponentSchema } from '../../libs'
import template from './app.template.html'

const name = 'app'

class Node {
  constructor(rootName, rootIsFile = false, files = [], folders = []) {
    this.rootIsFile = rootIsFile
    this.rootName = rootName
    this.files = files
    this.folders = folders
  }
}

function controller() {
  const self = this

  self.$onInit = function() {
    preProcess()
    init()
  }

  self.itemSelectHandle = function(items) {
    self.listFile = items.files
    self.listFolder = items.folders
    
  }

  function preProcess() {
    self.rootNode = {}
    self.listFile = []
    self.listFolder = []
  }

  function init() {
    self.rootNode = self.rootNode = new Node(
      'root',
      true,
      [new Node('sub', false, [new Node('sub-sub')])],
      [
        new Node(
          'sub-sub',
          false,
          [new Node('sub-sub')],
          [new Node('sub-sub')]
        ),
        new Node('sub-sub'),
        new Node('sub-sub')
      ]
    )
  }
}

export default new ComponentSchema(name, template, controller)
