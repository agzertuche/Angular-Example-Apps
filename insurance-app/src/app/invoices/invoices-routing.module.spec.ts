import { InvoicesRoutingModule } from './invoices-routing.module';

describe('InvoicesRoutingModule', () => {
  let invoicesRoutingModule: InvoicesRoutingModule;

  beforeEach(() => {
    invoicesRoutingModule = new InvoicesRoutingModule();
  });

  it('should create an instance', () => {
    expect(invoicesRoutingModule).toBeTruthy();
  });
});
