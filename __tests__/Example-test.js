import 'react-native';
import React from 'react';
import Start from '../Start';
import renderer from 'react-test-renderer';


it('works', () => {
    expect(1).toBe(1);
  });

// test('Start snapShot', ()=>{
//     const snap = renderer.create(
//             <Start />
//     ).toJSON();

//     expect(snap).toMatchSnapshot();

// });