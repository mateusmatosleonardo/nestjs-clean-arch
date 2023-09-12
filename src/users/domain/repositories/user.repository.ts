import { UserEntity } from '../entities/user.entity';
import { SearchableRepositoryInterface } from '@/shared/domain/repositories/serachable-respository-contracts';

export interface UserRepository
  extends SearchableRepositoryInterface<UserEntity, any, any> {
  findByEmail(email: string): Promise<UserEntity>;
  emailExists(email: string): Promise<void>;
}
