import { PaymentsRoutingModule } from './payments-routing.module';

describe('PaymentsRoutingModule', () => {
  let paymentsRoutingModule: PaymentsRoutingModule;

  beforeEach(() => {
    paymentsRoutingModule = new PaymentsRoutingModule();
  });

  it('should create an instance', () => {
    expect(paymentsRoutingModule).toBeTruthy();
  });
});
