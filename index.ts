import Entity from './Class/Entity'
import Domain from './Class/Domain'
import Adapter from './Class/Adapter'
import Infrastructure from './Class/Infrastructure'
import Application from './Class/Application'

const user: Entity = new Entity()
const domainExample: Domain = new Domain()
const adapterExample: Adapter = new Adapter()
const infrastructureExample: Infrastructure = new Infrastructure()
const applicationExample: Application = new Application()

user.register(domainExample)
user.register(adapterExample)
user.register(infrastructureExample)
user.register(applicationExample)
console.log(user.getLayers())