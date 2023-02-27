import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { PrismaModule } from './prisma/prisma.module';
import { RequestsModule } from './requests/requests.module';
import { ProjectsModule } from './projects/projects.module';
import { FoldersModule } from './folders/folders.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [UsersModule, PrismaModule, RequestsModule, ProjectsModule, FoldersModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
