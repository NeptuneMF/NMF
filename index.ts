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

class DomainTest extends Domain {
  name: string = "domainTesttt";
  adapterName: string = "Adapter";
}

const domainTest = new DomainTest()

user.register(domainExample)
user.register(domainTest)
user.register(adapterExample)
user.register(infrastructureExample)
user.register(applicationExample)

console.log("domain copy", domainTest.entity.getLayers())
//console.log("user entity", user.getLayers())