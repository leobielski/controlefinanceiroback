import { Base } from 'src/base/base';
import { Entity } from 'typeorm';

@Entity()
export class User extends Base {
  name: string;
  email: string;
  username: string;
  password: string;
  isActive: boolean;
}
