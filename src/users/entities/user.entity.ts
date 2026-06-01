import {
  Table,
  Column,
  Model,
  DataType,
  PrimaryKey,
  AutoIncrement,
} from 'sequelize-typescript';

@Table({
  tableName: 'users',
  timestamps: true,
  createdAt: 'created_at',
  updatedAt: false,
})
export class User extends Model<User> {
  @PrimaryKey
  @AutoIncrement
  @Column({ type: DataType.INTEGER })
  _ide!: number;

  @Column({ type: DataType.STRING })
  name!: string;

  @Column({ type: DataType.STRING, unique: true })
  email!: string;

  @Column({ type: DataType.STRING })
  password!: string;
}
