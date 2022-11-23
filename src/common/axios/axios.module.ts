import { HttpModule } from '@nestjs/axios';
import { Global, Module } from '@nestjs/common';

@Global()
@Module({
  imports: [
    HttpModule.register({
      baseURL: 'https://pokeapi.co/api/v2',
    }),
  ],
  exports: [HttpModule],
})
export class AxiosModule {}
