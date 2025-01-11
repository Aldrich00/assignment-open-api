import { Test, TestingModule } from '@nestjs/testing';
import { ExtinctAnimalsService } from './extinct-animals.service';

describe('ExtinctAnimalsService', () => {
  let service: ExtinctAnimalsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ExtinctAnimalsService],
    }).compile();

    service = module.get<ExtinctAnimalsService>(ExtinctAnimalsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
