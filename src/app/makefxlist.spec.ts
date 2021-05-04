import { Makefxlist } from './makefxlist';

describe('Makefxlist', () => {
  it('should take a string of currency pairs and make a list', () => {
      let component = new Makefxlist()
      let arg = {"GBP":1,"AED":5.09,"AFN":108.52,"ALL":141.43} // 4 currency pairs
      let fxlist = component.getFxresult(arg);
      expect(fxlist.length).toEqual(4)

  })
})
