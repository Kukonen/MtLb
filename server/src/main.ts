import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as mongoose from 'mongoose';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  await mongoose.connect('mongodb://localhost:27017/', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'test',
  } as mongoose.ConnectOptions);
  await app.listen(3000);
}
bootstrap();
