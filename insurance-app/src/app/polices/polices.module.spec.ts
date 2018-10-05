import { PolicesModule } from './polices.module';

describe('PolicesModule', () => {
  let policesModule: PolicesModule;

  beforeEach(() => {
    policesModule = new PolicesModule();
  });

  it('should create an instance', () => {
    expect(policesModule).toBeTruthy();
  });
});
