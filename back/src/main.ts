import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  app.setGlobalPrefix('api') //добавляем /api/ к каждому запросу
  await app.listen(4200)
}
bootstrap()

//yarn dev изменения сохраняются
