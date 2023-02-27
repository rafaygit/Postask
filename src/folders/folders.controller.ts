import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { FoldersService } from './folders.service';
import { CreateFolderDto } from './dto/create-folder.dto';
import { UpdateFolderDto } from './dto/update-folder.dto';
import { ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

@Controller('folders')
@ApiTags('folders')
export class FoldersController {
  constructor(private readonly foldersService: FoldersService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() createFolderDto: CreateFolderDto) {
    return this.foldersService.create(createFolderDto);
  }

  @Get('getall')
  findAll() {
    return this.foldersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.foldersService.findOne(+id);
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFolderDto: UpdateFolderDto) {
    return this.foldersService.update(+id, updateFolderDto);
  }
  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.foldersService.remove(+id);
  }
}
