import { PartialType } from '@nestjs/mapped-types';
import { CreateRequestDto } from './create-request.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateRequestDto extends PartialType(CreateRequestDto) {
  @ApiProperty()
  method: string;

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
