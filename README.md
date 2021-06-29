# mikro-orm-mongodb-multi-databases
## Testing out MikroORM + multiple MongoDB databases + relationships

See corresponding discussion: https://github.com/mikro-orm/mikro-orm/discussions/1985

### Usage
```bash
npm install
npm start
```

### Result
```
User { name: 'John Doe' }
Product {
  user: User { name: 'John Doe', _id: ObjectId('60db2757658c37104c006057') },
  name: 'test product A1'
}
Product {
  user: User { name: 'John Doe', _id: ObjectId('60db2757658c37104c006057') },
  name: 'test product A1',
  _id: ObjectId('60db2757658c37104c006058')
}
John Doe
```
