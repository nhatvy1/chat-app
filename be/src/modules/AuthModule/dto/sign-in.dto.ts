import { IsEmail, IsNotEmpty, MaxLength, MinLength } from 'class-validator';

export class SignInDto {
  @IsNotEmpty()
  @IsEmail()
  readonly email: string;

  @IsNotEmpty()
  @MinLength(2, { message: ' Mật khẩu phải từ 2 ký tự trở' })
  @MaxLength(100)
  password: string;
}
