import { IsNotEmpty, IsString, Length, Matches } from 'class-validator';

export class RegisterDto {
  @IsString({
    message: '用户名不能为空',
  })
  @IsNotEmpty({
    message: '用户名不能为空',
  })
  @Length(6, 30, {
    message: '用户名长度为6-30个字符',
  })
  @Matches(/^[a-zA-Z0-9#$%_-]+$/, {
    message: '用户名只能是字母、数字或者 #、$、%、_、- 这些字符',
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
