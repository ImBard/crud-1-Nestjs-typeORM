import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './entities/user.entity';
import { SaveUserDto } from './dto/save-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  async save(data: SaveUserDto): Promise<UserEntity> {
    return await this.userRepository.save(this.userRepository.create(data));
  }

  async findOne(id: string): Promise<UserEntity> {
    return await this.userRepository.findOneBy({ id: id });
  }

  async findAll(): Promise<UserEntity[]> {
    return await this.userRepository.find();
  }

  async update(data: UpdateUserDto): Promise<UserEntity> {
    return await this.userRepository.save(data);
  }

  async remove(id: string): Promise<void> {
    const user = await this.userRepository.findOne({ where: { id } });

    if (!user) {
      throw new NotFoundException('Usuário não encontrado');
    }
    this.userRepository.remove(user);
  }
}
