import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';



async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    //fetch the api and send to the frontend like 
    //http://10.100.72.192:3000/graphql
    origin: [ '10.100.72.192','10.100.72.127','http://localhost:5174','http://localhost:5173' , 'http://localhost:5175'],
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    //creating User   
    preflightContinue: false,
    optionsSuccessStatus: 204,
    allowedHeaders: ['Content-type,  Authorization'],
  });
  await app.listen(process.env.PORT ||  3000, '0.0.0.0');
}
bootstrap();
