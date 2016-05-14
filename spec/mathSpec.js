import { add } from '../app/math'

describe('math', ()=>{
  it('can add', ()=>{
    expect(add(2, 5)).toEqual(7)
  })
})
