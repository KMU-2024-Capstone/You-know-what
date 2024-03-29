import { Module } from '@nestjs/common';
import AuthModule from './auth/auth.module';
import UserModule from './user/user.module';

@Module({
	imports: [AuthModule, UserModule],
})
class ApiModule {}

export default ApiModule;
