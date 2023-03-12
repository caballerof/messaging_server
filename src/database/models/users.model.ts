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
import { Category } from './categories.model'
import { Channel } from './channels.model'
import { Log } from './logs.model'

@Entity()
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
  public deletedAt: Timestamp

  @ManyToMany(() => Category, (category) => category.users)
  @JoinTable()
  categories: Category[]

  @ManyToMany(() => Channel, (channel) => channel.user)
  @JoinTable()
  channels: Channel[]

  @OneToMany(() => Log, (log) => log.user)
  log: Log[]
}
