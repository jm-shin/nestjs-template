import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { RedisModule } from '@nestjs-modules/ioredis';
import { AppService } from './app.service';

@Module({
  imports: [
    RedisModule.forRootAsync({
      useFactory: () => ({
        type: 'single',
        url: 'redis://localhost:6379',
      }),
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
