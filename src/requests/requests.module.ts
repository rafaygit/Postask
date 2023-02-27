import { Module } from '@nestjs/common';
import { RequestsService } from './requests.service';
import { RequestsController } from './requests.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [RequestsController],
  providers: [RequestsService],
  imports: [PrismaModule],
  exports: [RequestsModule],
})
export class RequestsModule {}
