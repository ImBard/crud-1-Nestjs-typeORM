import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { SaveUserDto } from './dto/save-user.dto';
import { UserService } from './user.service';
import { UserEntity } from './entities/user.entity';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  save(@Body() body: SaveUserDto): Promise<UserEntity> {
    return this.userService.save(body);
  }

  @Get('/list')
  getAll(): Promise<UserEntity[]> {
    return this.userService.findAll();
  }

  @Get('/filter/:id')
  getOne(@Param('id') id: string): Promise<UserEntity> {
    return this.userService.findOne(id);
  }

  @Put('/update')
  updateOne(@Body() body: UpdateUserDto): Promise<UserEntity> {
    return this.userService.update(body);
  }

  @Delete('/remove')
  deleteOne(@Param('id') id: string): Promise<void> {
    return this.userService.remove(id);
  }
}
