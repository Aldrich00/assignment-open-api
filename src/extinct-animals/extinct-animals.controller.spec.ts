import { Test, TestingModule } from '@nestjs/testing';
import { ExtinctAnimalsController } from './extinct-animals.controller';

describe('ExtinctAnimalsController', () => {
  let controller: ExtinctAnimalsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ExtinctAnimalsController],
    }).compile();

    controller = module.get<ExtinctAnimalsController>(ExtinctAnimalsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
