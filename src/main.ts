import { NestFactory } from '@nestjs/core';
import { AppModule } from './core/app.module';
import { FirebaseAdminProvider } from './DataAccessLayer/FirebaseAdmin';
import { FirebaseProvider } from './DataAccessLayer/Firebase';
import { passportJS } from './DataAccessLayer/Passport';
import session from 'express-session';

async function bootstrap() {
  const firebaseAdminProvider = new FirebaseAdminProvider();
  const firebaseProvider = FirebaseProvider.getInstance();
  const app = await NestFactory.create(AppModule);
  firebaseAdminProvider.initialzeApp();
  firebaseProvider.initializeApp();
  app.use(session({ secret: 'cats'}));
  app.use(passportJS.initialize());
  app.use(passportJS.session());
  passportJS.googleConfig();
  await app.listen(3001, () => {
    console.log('Server running PORT=3001')
  });
}
bootstrap();
