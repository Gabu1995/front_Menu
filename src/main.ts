import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { getConnection } from 'typeorm';
import { Rol } from './entity/rol.entity';
import { Usuario } from './entity/usuario.entity';
import * as dotenv from 'dotenv';

// Cargar las variables de entorno
dotenv.config();

async function bootstrap() {

  const app = await NestFactory.create(AppModule);
  //const connection = getConnection();
  
  // Seed roles
 /* const rolRepository = connection.getRepository(Rol);
  const normalUserRole = rolRepository.create({ nombre: 'normal user' });
  await rolRepository.save(normalUserRole);

  // Seed users
  const usuarioRepository = connection.getRepository(Usuario);
  const normalUser = usuarioRepository.create({
    nombre: 'Usuario Normal',
    email: 'usuario@normal.com',
    password: 'password',
    rol: normalUserRole,
  });
  await usuarioRepository.save(normalUser);*/

  app.enableCors({
    origin: '*', // Permitir cualquier origen
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    allowedHeaders: 'Content-Type, Accept',
    credentials: true,
  });

  await app.listen(3000);
}
bootstrap();
