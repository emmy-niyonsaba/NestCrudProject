import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User) private userModel: typeof User) {}

  async create(createUserDto: CreateUserDto) {
    const created = await this.userModel.create(createUserDto as any);
    const plain = created.get({ plain: true }) as any;
    // exclude password
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password, ...rest } = plain;
    return rest as Partial<User>;
  }

  findAll() {
    return this.userModel.findAll({
      attributes: ['id', 'name', 'email'],
    });
  }

  findOne(id: number) {
    return this.userModel.findByPk(id, {
      attributes: ['id', 'name', 'email'],
    });
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return this.userModel.update(updateUserDto, { where: { id } });
  }

  remove(id: number) {
    return this.userModel.destroy({ where: { id } });
  }
}
