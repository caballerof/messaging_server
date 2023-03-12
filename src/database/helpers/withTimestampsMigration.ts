import { TableOptions } from 'typeorm/schema-builder/options/TableOptions'

export function withTimestampsMigration(tableDefinitions: TableOptions) {
  return {
    ...tableDefinitions,
    columns: [
      ...tableDefinitions.columns,
      {
        default: `now()`,
        name: 'createdAt',
        type: 'timestamp with time zone',
      },
      {
        default: `now()`,
        name: 'updatedAt',
        type: 'timestamp with time zone',
      },
      {
        default: null,
        isNullable: true,
        name: 'deletedAt',
        type: 'timestamp with time zone',
      },
    ],
  }
}
