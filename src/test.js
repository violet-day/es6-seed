/**
 * Created by Nemo on 16/1/9.
 */

export default function testFn(value) {
  if (value > 0) {
    return Promise.resolve(value);
  } else {
    return Promise.reject(new Error(value))
  }
}