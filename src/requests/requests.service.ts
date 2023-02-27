import { Injectable } from '@nestjs/common';
import { CreateRequestDto } from './dto/create-request.dto';
import { UpdateRequestDto } from './dto/update-request.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class RequestsService {
  constructor(private prisma: PrismaService) {}

  create(createRequestDto: CreateRequestDto) {
    return this.prisma.requests.create({
      data: createRequestDto,
    });
  }

  findAll() {
    return this.prisma.requests.findMany();
  }

  findOne(id: number) {
    return this.prisma.requests.findMany({
      where: {
        id: id,
      },
    });
  }

  update(id: number, updateRequestDto: UpdateRequestDto) {
    return this.prisma.requests.update({
      where: {
        id: id,
      },
      data: {
        method: updateRequestDto.method,
        url: updateRequestDto.url,
        query_params: updateRequestDto.query_params,
        body: updateRequestDto.body,
        request: updateRequestDto.request,
        response: updateRequestDto.response,
      },
    });
  }

  remove(id: number) {
    return this.prisma.requests.delete({
      where: {
        id: id,
      },
    });
  }
}
