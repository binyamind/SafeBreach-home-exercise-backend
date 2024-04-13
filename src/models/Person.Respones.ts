import { ApiProperty } from '@nestjs/swagger';

export class PersonResponse {
  @ApiProperty({ type: String, description: 'name' })
  name: string;
  @ApiProperty({ type: String, description: 'age' })
  age: string;
  @ApiProperty({ type: String, description: 'phone' })
  phone: string;
  @ApiProperty({ type: String, description: 'address' })
  address: string;
  @ApiProperty({ type: String, description: 'portrait' })
  portrait: string;
}
