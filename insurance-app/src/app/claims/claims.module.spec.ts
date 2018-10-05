import { ClaimsModule } from './claims.module';

describe('ClaimsModule', () => {
  let claimsModule: ClaimsModule;

  beforeEach(() => {
    claimsModule = new ClaimsModule();
  });

  it('should create an instance', () => {
    expect(claimsModule).toBeTruthy();
  });
});
