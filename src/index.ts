
import { MikroORM } from '@mikro-orm/core'
import { MongoDriver } from '@mikro-orm/mongodb'
import * as entities from './entities'

const entrypoint = async () => {
  const mainEntities = Object.values(entities.main)
  const productAEntities = Object.values(entities.productA)
  const allEntities = [...mainEntities, ...productAEntities]

  const mainOrm = await MikroORM.init<MongoDriver>({
    entities: allEntities,
    dbName: 'main',
    type: 'mongo',
    implicitTransactions: false,
    forceEntityConstructor: true
  })

  const productAOrm = await MikroORM.init<MongoDriver>({
    entities: allEntities,
    dbName: 'productA',
    type: 'mongo',
    implicitTransactions: false,
    forceEntityConstructor: true
  })

  const user = new entities.main.User()
  console.log(user)
  await mainOrm.em.persistAndFlush(user)
  const product = new entities.productA.Product(user, 'test product A1')
  console.log(product)
  await productAOrm.em.persistAndFlush(product)

  const productAProductRepository = productAOrm.em.getRepository(entities.productA.Product)
  const freshProduct = await productAProductRepository.findOne({ name: 'test product A1' }, ['user'])
  console.log(freshProduct)
  console.log(freshProduct.user.name)
}

entrypoint()