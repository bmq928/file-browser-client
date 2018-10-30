import { ComponentSchema } from '../../libs'
import template from './sidebar.template.html'
import './sidebar.scss'

const name = 'sidebar'

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

  self.rootNode = new Node(
    'root',
    true,
    [new Node('sub', false, [new Node('sub-sub')])],
    [
      new Node('sub-sub', false, [new Node('sub-sub')], [new Node('sub-sub')]),
      new Node('sub-sub'),
      new Node('sub-sub')
    ]
  )

  console.log({'self.rootNode': self.rootNode.folders})
  

  self.$onChanges = function({ curView }) {
    self.curView = curView.currentValue
  }
}

export default new ComponentSchema(name, template, controller, {
  handleViewClick: '<',
  curView: '<'
})
