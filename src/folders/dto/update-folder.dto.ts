import { PartialType } from '@nestjs/mapped-types';
import { CreateFolderDto } from './create-folder.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateFolderDto extends PartialType(CreateFolderDto) {
  @ApiProperty()
  name: string;
}
