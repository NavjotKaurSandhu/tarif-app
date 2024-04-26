import { MbpsPipe } from './mbps.pipe';

describe('MbpsPipe', () => {

  it('should create an instance', () => {
    const pipe = new MbpsPipe();
    expect(pipe).toBeTruthy();
  });

  it('should transform data to mbps format', () => {
    const pipe = new MbpsPipe();
    const formatedData = pipe.transform(12000000);
    expect(formatedData).toBe("11.44");
  });

  it('should return null in case value is null', () => {
    const pipe = new MbpsPipe();
    const formatedData = pipe.transform(null);
    expect(formatedData).toBe(null);
  });

});
