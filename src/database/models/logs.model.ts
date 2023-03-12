import { Entity, PrimaryGeneratedColumn, Column, Timestamp, Generated, ManyToOne, BaseEntity } from 'typeorm'
import { Category } from './categories.model'
import { Channel } from './channels.model'
import { Message } from './messages.model'
import { User } from './users.model'

@Entity()
export class Log extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Generated('uuid')
  uuid: string

  @Column()
  time: number

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

  @ManyToOne(() => User, (user) => user.log)
  user: User

  @ManyToOne(() => Channel, (channel) => channel.log)
  channel: Channel

  @ManyToOne(() => Category, (category) => category.log)
  category: Category

  @ManyToOne(() => Message, (message) => message.log)
  message: Message
}
