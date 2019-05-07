import { PricePercentagePipe } from './price-percentage.pipe';

describe('PricePercentagePipe', () => {
  it('create an instance', () => {
    const pipe = new PricePercentagePipe();
    expect(pipe).toBeTruthy();
  });
});
