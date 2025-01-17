import { Role } from 'src/users/enums/rote.enum';
import { PermissionType } from '../authorization/permission.types';

export interface ActiveUserData {
  sub: number;
  email: string;
  role: Role;
  permissions : PermissionType
}
