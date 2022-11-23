import { Module } from '@nestjs/common';
import { AxiosModule } from './axios/axios.module';

@Module({
  imports: [AxiosModule],
})
export class CommonModule {}
