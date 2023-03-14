import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  Timestamp,
  BaseEntity,
  OneToOne,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm'
import config from '~/config'
import { Category } from './categories.model'
import { Channel } from './channels.model'
import { Message } from './messages.model'
import { User } from './users.model'

@Entity({ schema: config.DB.MAIN_SCHEMA })
export class Log extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ type: 'bigint' })
  time: string

  @ManyToOne(() => User, (user) => user.log)
  @JoinColumn()
  user: User

  @ManyToOne(() => Channel, (channel) => channel.log)
  @JoinColumn()
  channel: Channel

  @ManyToOne(() => Category, (category) => category.log)
  @JoinColumn()
  category: Category

  @ManyToOne(() => Message, (message) => message.log)
  @JoinColumn()
  message: Message

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
