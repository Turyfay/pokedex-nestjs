import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { PokemonService } from 'src/pokemon/pokemon.service';
import { PokeResponse } from './interfaces/poke-response.interface';

@Injectable()
export class SeedService {
  constructor(
    private readonly httpService: HttpService,
    private readonly pokemonService: PokemonService,
  ) {}
  async executeSeed() {
    await this.pokemonService.deleteAll();
    const { data } = await this.httpService.axiosRef.get<PokeResponse>(
      '/pokemon?limit=100',
    );

    const pokemonToInsert: { name: string; no: number }[] = [];
    data.results.forEach(({ name, url }) => {
      const segments = url.split('/');
      const no = +segments[segments.length - 2];
      pokemonToInsert.push({ name, no });
    });

    await this.pokemonService.createMany(pokemonToInsert);
    /*  const pokemonPromise = [];

    
    data.results.forEach(({ name, url }) => {
      const segments = url.split('/');
      const no = +segments[segments.length - 2];
      pokemonPromise.push(this.pokemonService.create({ name, no }));
    });
    await Promise.all(pokemonPromise); */
    return 'Seed Execute Success';
  }
}
