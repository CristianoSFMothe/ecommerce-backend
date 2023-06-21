import { Controller, Get } from '@nestjs/common';
import { StateEntity } from './entities/state.entity';
import { StateService } from './state.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Estados')
@Controller('state')
export class StateController {
  constructor(private readonly stateService: StateService) {}

  @Get()
  async getAllState(): Promise<StateEntity[]> {
    return this.stateService.getAllState();
  }
}
