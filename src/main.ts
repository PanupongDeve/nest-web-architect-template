import { NestFactory } from '@nestjs/core';
import { AppModule } from './core/app.module';
import { FirebaseAdminProvider } from './DataAccessLayer/FirebaseAdmin';
import { FirebaseProvider } from './DataAccessLayer/Firebase';

async function bootstrap() {
  const firebaseAdminProvider = new FirebaseAdminProvider();
  const firebaseProvider = new FirebaseProvider();
  const app = await NestFactory.create(AppModule);
  firebaseAdminProvider.initialzeApp();
  firebaseProvider.initializeApp();
  await app.listen(3000);
}
bootstrap();
