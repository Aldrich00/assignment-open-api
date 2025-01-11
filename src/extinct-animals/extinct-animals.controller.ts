import { Controller, Get, Param } from '@nestjs/common';
import { ExtinctAnimalsService } from './extinct-animals.service';

@Controller('extinct-animals')
export class ExtinctAnimalsController {
  constructor(private readonly extinctAnimalsService: ExtinctAnimalsService) {}

  @Get()
  getAllAnimals() {
    return this.extinctAnimalsService.getAllAnimals();
  }

  @Get(':id')
  getAnimalById(@Param('id') id: string) {
    return this.extinctAnimalsService.getAnimalById(id);
  }
}
