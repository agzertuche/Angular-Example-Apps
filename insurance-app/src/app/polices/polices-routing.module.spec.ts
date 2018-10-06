import { PolicesRoutingModule } from './polices-routing.module';

describe('PolicesRoutingModule', () => {
  let policesRoutingModule: PolicesRoutingModule;

  beforeEach(() => {
    policesRoutingModule = new PolicesRoutingModule();
  });

  it('should create an instance', () => {
    expect(policesRoutingModule).toBeTruthy();
  });
});
