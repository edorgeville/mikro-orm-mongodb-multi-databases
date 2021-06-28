
import { MikroORM } from '@mikro-orm/core'
import { MongoDriver } from '@mikro-orm/mongodb'
import * as entities from './entities'

const entrypoint = async () => {
  const mainEntities = Object.values(entities.main)
  const productAEntities = Object.values(entities.productA)

  const mainOrm = await MikroORM.init<MongoDriver>({
    entities: mainEntities,
    dbName: 'main',
    type: 'mongo',
    implicitTransactions: false,
    forceEntityConstructor: true
  })

  const productAOrm = await MikroORM.init<MongoDriver>({
    entities: mainEntities,
    dbName: 'main',
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

//   mikro-orm-mongodb-multi-databases\node_modules\@mikro-orm\core\errors.js:51
//         return new ValidationError(err);
//                ^
// ValidationError: Trying to persist not discovered entity of type object.
//     at Function.notDiscoveredEntity (mikro-orm-mongodb-multi-databases\node_modules\@mikro-orm\core\errors.js:51:16)
//     at MongoEntityManager.persist (mikro-orm-mongodb-multi-databases\node_modules\@mikro-orm\core\EntityManager.js:438:48)
//     at MongoEntityManager.persistAndFlush (mikro-orm-mongodb-multi-databases\node_modules\@mikro-orm\core\EntityManager.js:449:20)
//     at mikro-orm-mongodb-multi-databases\src\index.ts:31:24
//     at Generator.next (<anonymous>)
//     at fulfilled (mikro-orm-mongodb-multi-databases\src\index.ts:24:58)
//     at processTicksAndRejections (node:internal/process/task_queues:94:5)
}

entrypoint()