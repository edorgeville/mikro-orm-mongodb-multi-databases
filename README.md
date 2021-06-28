# mikro-orm-mongodb-multi-databases
## Testing out MikroORM + multiple MongoDB databases + relationships

### Usage
```bash
npm install
npm start
``` 

### Result
This will result in the following error:
```
mikro-orm-mongodb-multi-databases\node_modules\@mikro-orm\core\errors.js:51
        return new ValidationError(err);
               ^
ValidationError: Trying to persist not discovered entity of type object.
    at Function.notDiscoveredEntity (mikro-orm-mongodb-multi-databases\node_modules\@mikro-orm\core\errors.js:51:16)
    at MongoEntityManager.persist (mikro-orm-mongodb-multi-databases\node_modules\@mikro-orm\core\EntityManager.js:438:48)
    at MongoEntityManager.persistAndFlush (mikro-orm-mongodb-multi-databases\node_modules\@mikro-orm\core\EntityManager.js:449:20)
    at mikro-orm-mongodb-multi-databases\src\index.ts:31:24
    at Generator.next (<anonymous>)
    at fulfilled (mikro-orm-mongodb-multi-databases\src\index.ts:24:58)
    at processTicksAndRejections (node:internal/process/task_queues:94:5)
```