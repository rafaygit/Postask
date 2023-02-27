import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateFolderDto } from './dto/create-folder.dto';
import { UpdateFolderDto } from './dto/update-folder.dto';

@Injectable()
export class FoldersService {
  constructor(private prisma: PrismaService) {}

  create(createFolderDto: CreateFolderDto) {
    return this.prisma.folders.create({
      data: createFolderDto,
    });
  }

  findAll() {
    return this.prisma.folders.findMany();
  }

  findOne(id: number) {
    return this.prisma.folders.findMany({
      where: {
        id: id,
      },
    });
  }

  update(id: number, updateFolderDto: UpdateFolderDto) {
    return this.prisma.folders.update({
      where: {
        id: id,
      },
      data: {
        name: updateFolderDto.name,
      },
    });
  }

  remove(id: number) {
    return this.prisma.folders.delete({
      where: {
        id: id,
      },
    });
  }
}
