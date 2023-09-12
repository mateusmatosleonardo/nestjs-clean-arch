import { UserRepository } from '@/users/domain/repositories/user.repository';
import { UserEntity } from '@/users/domain/entities/user.entity';
import { NotFoundError } from '@/shared/domain/errors/not-found-error';
import { ConflictError } from '@/shared/domain/errors/conflict-error';
import { InMemorySearchableRepository } from '@/shared/domain/repositories/in-memory-searchable.repository';

export class UserInMemoryRepository
  extends InMemorySearchableRepository<UserEntity>
  implements UserRepository
{
  async findByEmail(email: string): Promise<UserEntity> {
    const entity = this.items.find(user => user.email === email);
    if (!entity) {
      throw new NotFoundError(`Entity not found using email ${email}`);
    }
    return entity;
  }
  async emailExists(email: string): Promise<void> {
    const entity = this.items.find(user => user.email === email);
    if (entity) {
      throw new ConflictError('Email address already used');
    }
  }
}
