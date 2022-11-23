import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { PokeResponse } from './interfaces/poke-response.interface';

@Injectable()
export class SeedService {
  constructor(private readonly httpService: HttpService) {}
  async executeSeed() {
    const { data } = await this.httpService.axiosRef.get<PokeResponse>(
      '/pokemon?limit=650',
    );
    data.results.forEach(({ name, url }) => {
      const segments = url.split('/');
      const no = +segments[segments.length - 2];
    });
    return data;
  }
}
