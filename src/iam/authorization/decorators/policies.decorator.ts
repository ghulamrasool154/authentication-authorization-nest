import { SetMetadata } from '@nestjs/common';
import { Role } from 'src/users/enums/rote.enum';
import { Policy } from '../policies/interfaces/policy.interface';

export const POLICY_KEY = 'policies';
export const Policies = (...policies: Policy[]) =>
  SetMetadata(POLICY_KEY, policies);
