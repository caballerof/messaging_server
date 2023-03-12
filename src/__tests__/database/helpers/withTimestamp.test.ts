import { Table } from 'typeorm'
import { withTimestampsMigration } from '~/database/helpers/withTimestampsMigration'

describe('withTimestampsMigration', () => {
  it('should generate a TypeORM table with timestamps', () => {
    const table = new Table(
      withTimestampsMigration({
        columns: [
          {
            generationStrategy: 'uuid',
            isGenerated: true,
            isPrimary: true,
            name: 'id',
            type: 'uuid',
          },
          {
            isNullable: false,
            name: 'email',
            type: 'varchar',
          },
        ],
        name: 'users',
      }),
    )

    expect(table.columns).toEqual(expect.arrayContaining([expect.objectContaining({ name: 'createdAt' })]))
    expect(table.columns).toEqual(expect.arrayContaining([expect.objectContaining({ name: 'updatedAt' })]))
    expect(table.columns).toEqual(expect.arrayContaining([expect.objectContaining({ name: 'deletedAt' })]))
  })
})
