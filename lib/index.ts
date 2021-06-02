import Entity from './Class/Entity'
import Domain from './Class/Domain'
import Adapter from './Class/Adapter'
import Infrastructure from './Class/Infrastructure'
import { Payload } from './Class/Payload'
import PayloadManager from './Class/Payload'
/*
const user: Entity = new Entity()
const domainExample: Domain = new Domain()
const adapterExample: Adapter = new Adapter()
const infrastructureExample: Infrastructure = new Infrastructure()

class DomainTest extends Domain {
  name: string = "domainTesttt";
  group: string = "test"
}

const domainTest = new DomainTest()

user.register(adapterExample)
user.register(domainExample)
user.register(domainTest)
user.register(infrastructureExample)

async function test() {
  console.log("user", await user.getAdapter("Adapter").use(new Payload()))
}

test()
*/
//console.log("user entity", user.getLayers())

//test

export default {
  Entity,
  Domain,
  Adapter,
  Infrastructure,
  Payload,
  PayloadManager
}