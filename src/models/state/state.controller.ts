import { Controller, Get, Param, ParseUUIDPipe, Query } from '@nestjs/common';
import { StateService } from './state.service';
import { StateEntity } from './entities/state.entity';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Estados')
@Controller('states')
export class StateController {
  constructor(private readonly stateService: StateService) {}

  @Get()
  async findAll(): Promise<StateEntity[]> {
    return this.stateService.findAll();
  }

  @Get('search')
  async findByName(@Query('name') name: string) {
    return this.stateService.findByName(name);
  }

  @Get(':id')
  async findById(
    @Param('id', new ParseUUIDPipe()) id: string,
  ): Promise<StateEntity> {
    return this.stateService.findById(id);
  }
}
