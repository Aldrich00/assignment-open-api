import { Module } from '@nestjs/common';
import { ExtinctAnimalsModule } from './extinct-animals/extinct-animals.module';
import { HttpModule } from '@nestjs/axios';  // <-- Import HttpModule

@Module({
  imports: [ExtinctAnimalsModule, HttpModule],  // <-- Add HttpModule here
})
export class AppModule {}
