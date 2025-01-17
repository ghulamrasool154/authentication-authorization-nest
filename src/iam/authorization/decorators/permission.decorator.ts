import { SetMetadata } from '@nestjs/common';
import { Role } from 'src/users/enums/rote.enum';
import { PermissionType } from '../permission.types';

export const PERMISSION_KEY = 'permissions';
export const Permissions = (...permissions: PermissionType[]) =>
  SetMetadata(PERMISSION_KEY, permissions);
