import { HttpService } from '@nestjs/axios';
import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { AxiosError } from 'axios';
import { ReturnCepExternalDto } from './dtos/return-cep-external.dto';
import { CityService } from 'src/models/city/city.service';

@Injectable()
export class CorreiosService {
  URL_CORREIOS = process.env.URL_CEP_CORREIOS;

  constructor(
    private readonly httpService: HttpService,
    private readonly cityService: CityService,
  ) {}

  public async findAddressByCep(cep: string): Promise<ReturnCepExternalDto> {
    const retunrCep: ReturnCepExternalDto = await this.httpService.axiosRef
      .get<ReturnCepExternalDto>(this.URL_CORREIOS.replace('{CEP}', cep))
      .then((result) => {
        if (result.data.erro === 'true') {
          throw new NotFoundException('CEP not found.');
        }
        return result.data;
      })
      .catch((error: AxiosError) => {
        throw new BadRequestException(
          `Error in connection request API Correios. ${error.message}`,
        );
      });

    const city = await this.cityService.findCityByName(
      retunrCep.localidade,
      retunrCep.uf,
    );

    return retunrCep;
  }
}
