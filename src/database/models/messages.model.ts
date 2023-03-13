import { Entity, PrimaryGeneratedColumn, Column, Timestamp, BaseEntity, OneToMany } from 'typeorm'
import config from '~/config'
import { Log } from './logs.model'

@Entity({ schema: config.DB.MAIN_SCHEMA })
export class Message extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  text: string

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

  @OneToMany(() => Log, (log) => log.message)
  log: Log[]
}
