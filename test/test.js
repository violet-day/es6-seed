/**
 * Created by Nemo on 16/1/9.
 */

import should from 'should';
import { testFn } from '../src';

describe('test Fn', ()=> {
  it('should resolve', done => {
    var value = 5;
    testFn(value)
      .then((v)=> {
        v.should.equal(value);
        done();
      })
  });
});