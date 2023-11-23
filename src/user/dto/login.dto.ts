import { IsNotEmpty, IsString, Length } from 'class-validator';

export class LoginDto {
  @IsString({
    message: '用户名不能为空',
  })
  @IsNotEmpty({
    message: '用户名不能为空',
  })
  @Length(4, 30, {
    message: '用户名长度为6-30个字符',
  })
  username: string;

  @IsString({
    message: '用户名不能为空',
  })
  @IsNotEmpty({
    message: '用户名不能为空',
  })
  @Length(6, 30, {
    message: '用户名长度为6-30个字符',
  })
  password: string;
}
