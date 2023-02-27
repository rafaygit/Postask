import { ApiProperty } from '@nestjs/swagger';
export class CreateRequestDto {
  @ApiProperty()
  method: string;

  @ApiProperty()
  folder_id: number;

  @ApiProperty()
  url: string;

  @ApiProperty()
  body: string;

  @ApiProperty()
  request: string;

  @ApiProperty()
  response: string;

  @ApiProperty()
  query_params: string;
}
