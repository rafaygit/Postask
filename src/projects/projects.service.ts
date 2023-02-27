import { Injectable } from '@nestjs/common';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ProjectsService {
  constructor(private prisma: PrismaService) {}

  create(createProjectDto: CreateProjectDto) {
    return this.prisma.projects.create({
      data: createProjectDto,
    });
  }

  findAll() {
    return this.prisma.projects.findMany();
  }

  findOne(id: number) {
    return this.prisma.projects.findMany({
      where: {
        id: id,
      },
    });
  }

  update(id: number, updateProjectDto: UpdateProjectDto) {
    return this.prisma.projects.update({
      where: {
        id: id,
      },
      data: {
        name: updateProjectDto.name,
      },
    });
  }

  remove(id: number) {
    return this.prisma.projects.delete({
      where: {
        id: id,
      },
    });
  }
}
