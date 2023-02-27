import { ApiProperty } from '@nestjs/swagger';
export class CreateProjectDto {
  @ApiProperty()
  name: string;

  @ApiProperty()
  user_id: number;
}
