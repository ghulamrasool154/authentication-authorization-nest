import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Role } from '../enums/rote.enum';
import {
  Permission,
  PermissionType,
} from 'src/iam/authorization/permission.types';
import { ApiKey } from '../api-keys/entities/api-key.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  email: string;

  @Column({ nullable: true })
  password: string;

  @Column({ enum: Role, default: Role.Regular })
  role: Role;

  @Column({ enum: Permission, default: [], type: 'json' })
  permissions: PermissionType;

  @JoinTable()
  @ManyToMany((type) => ApiKey, (user) => user.user)
  apiKeys: ApiKey[];

  @Column({ nullable: true })
  googleId: string;

  @Column({ default: false, nullable: true })
  isTfaEnabled: boolean;

  @Column({ nullable: true })
  tfaSecret: string;
}
