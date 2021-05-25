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
  group: string = "test"
}

const domainTest = new DomainTest()

user.register(adapterExample)
user.register(domainExample)
user.register(domainTest)
user.register(infrastructureExample)
user.register(applicationExample)


async function test() {
  console.log("user", await user.getAdapter("Adapter").use())
}

test()
//console.log("user entity", user.getLayers())