import { TypeOrmModule } from "@nestjs/typeorm";

export const DB_CONNEXION_MYSQL = TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'users_service',
      synchronize: true,
      entities: [
        
      ],
})