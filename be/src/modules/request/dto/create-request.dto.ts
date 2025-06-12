import {
  IsEnum,
  IsMongoId,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateRequestDto {
  @IsString()
  @IsNotEmpty()
  accountHolderName: string;

  @IsString()
  @IsNotEmpty()
  bankName: string;

  @IsString()
  @IsNotEmpty()
  accountNumber: string;

  @IsString()
  @IsNotEmpty()
  orderCode: string;

  @IsNumber()
  amount: number;

  @IsMongoId()
  userId: string;

  @IsOptional()
  @IsEnum(['pending', 'approved', 'rejected'])
  status?: string;
}
