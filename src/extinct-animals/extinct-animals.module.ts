import { Module } from '@nestjs/common';
import { ExtinctAnimalsController } from './extinct-animals.controller';
import { ExtinctAnimalsService } from './extinct-animals.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  controllers: [ExtinctAnimalsController],
  providers: [ExtinctAnimalsService],
})
export class ExtinctAnimalsModule {}
