import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, Timestamp, OneToMany, BaseEntity } from 'typeorm'
import { Log } from './logs.model'
import { User } from './users.model'

@Entity()
export class Category extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column({
    length: 50,
    unique: true,
  })
  name: string

  @Column({
    length: 50,
  })
  description: string

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

  @ManyToMany(() => User, (user) => user.categories)
  users: User[]

  @OneToMany(() => Log, (log) => log.category)
  log: Log[]
}
