import { Entity, ManyToOne, PrimaryKey, Property } from '@mikro-orm/core'
import { ObjectId } from '@mikro-orm/mongodb'
import { User } from '../main'


@Entity()
export class Product {
  @PrimaryKey()
  _id!: ObjectId

  @Property()
  name: string

  @ManyToOne(() => User)
  user: User

  constructor (user: User, name: string) {
    this.user = user
    this.name = name
  }
}