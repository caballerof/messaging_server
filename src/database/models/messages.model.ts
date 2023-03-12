import { Entity, PrimaryGeneratedColumn, Column, Timestamp, OneToMany, BaseEntity } from 'typeorm'
import { Log } from './logs.model'

@Entity()
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
  public deletedAt: Timestamp

  @OneToMany(() => Log, (log) => log.message)
  log: Log[]
}
