import {
  BaseEntity,
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  JoinTable,
  Timestamp,
  OneToMany,
} from 'typeorm'
import config from '~/config'
import { Category } from './categories.model'
import { Channel } from './channels.model'
import { Log } from './logs.model'

@Entity({ schema: config.DB.MAIN_SCHEMA })
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @Column()
  email: string

  @Column({
    length: 50,
  })
  phoneNumber: string

  @ManyToMany(() => Category, (category) => category.user)
  @JoinTable()
  categories: Category[]

  @ManyToMany(() => Channel, (channel) => channel.user)
  @JoinTable()
  channels: Channel[]

  @OneToMany(() => Log, (log) => log.user)
  log: Log[]

  @Column({
    type: 'timestamp with time zone',
    default: () => 'now()',
  })
  public createdAt: Timestamp

  @Column({
    type: 'timestamp with time zone',
    default: () => 'now()',
  })
  public updatedAt: Timestamp

  @Column({ type: 'timestamp with time zone', nullable: true })
  public deletedAt: Timestamp | null
}
