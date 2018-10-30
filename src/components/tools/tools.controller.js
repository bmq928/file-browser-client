import { ComponentSchema } from '../../libs'
import template from './tools.template.html'
// import './tools.scss'

const name = 'tools'

function controller() {
    const self = this

    self.$onInit = function() {
        
    }

    
}

export default new ComponentSchema(name, template, controller)