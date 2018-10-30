import { ComponentSchema } from '../../libs'
import template from './navbar.template.html'
// import './navbar.scss'

const name = 'navbar'

function controller() {
    const self = this

    self.$onInit = function() {
        
    }

    
}

export default new ComponentSchema(name, template, controller)