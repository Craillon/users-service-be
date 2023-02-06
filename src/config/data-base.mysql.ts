import { TypeOrmModule } from "@nestjs/typeorm";
import { Role } from '../roles/entities/role.entity';
import { Responsability } from '../responsability/entities/responsability.entity';
import { User } from '../users/entities/user.entity';
import { Access } from '../access/entities/access.entity';
import { Attribution } from '../attribution/entities/attribution.entity';

export const DB_CONNEXION_MYSQL = TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'users_service',
      synchronize: true,
      entities: [
        Role, Responsability, User, Access, Attribution
      ],
})