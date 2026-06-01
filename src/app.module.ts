import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { UsersModule } from './users/users.module';
import { User } from './users/entities/user.entity';
import { PropetiesModule } from './propeties/propeties.module';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.PGHOST,
      port: Number(process.env.PGPORT) || 5432,
      username: process.env.PGUSER,
      password: process.env.PGPASSWORD,
      database: process.env.PGDATABASE,
      dialectOptions: {
        ssl: {
          rejectUnauthorized: false,
        },
      },
      autoLoadModels: true,
      models: [User],
      synchronize: true,
    }),
    UsersModule,
    PropetiesModule,
  ],
})
export class AppModule {}
