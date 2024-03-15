import { User } from '../user.entity';

export class UserDto {
  name: string;
  email: string;
  username: string;
  password: string;
  isActive: boolean;

  public static toDomain(dto: UserDto, exists?: User): User {
    const entity = exists || new User();
    entity.name = dto.name;
    entity.email = dto.email;
    entity.password = dto.password;
    entity.username = dto.username;
    entity.isActive = exists ? exists.isActive : dto.isActive;
    return entity;
  }
}
