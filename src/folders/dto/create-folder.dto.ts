import { ApiProperty } from '@nestjs/swagger';

export class CreateFolderDto {
  @ApiProperty()
  name: string;

  @ApiProperty()
  project_id: number;
}
