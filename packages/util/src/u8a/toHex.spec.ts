// Copyright 2017-2022 @polkadot/util authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { performanceCmp } from '../test/performance';
import { u8aToHex as u8aToHexBuffer } from './toHexBuffer';
import { u8aToHex } from '.';

const ptest = new Uint8Array(32768);

for (let i = 0; i < ptest.length; i++) {
  ptest[i] = i % 256;
}

describe('u8aToHex', (): void => {
  it('returns empty as 0x', (): void => {
    expect(
      u8aToHex()
    ).toEqual('0x');
  });

  it('returns empty as "" (unprefixed)', (): void => {
    expect(
      u8aToHex(null, -1, false)
    ).toEqual('');
  });

  it('returns the hex value for the array', (): void => {
    expect(
      u8aToHex(
        new Uint8Array([128, 0, 10])
      )
    ).toEqual('0x80000a');
  });

  it('returns the hex value for the array (unprefixed)', (): void => {
    expect(
      u8aToHex(
        new Uint8Array([128, 0, 10]),
        -1, false
      )
    ).toEqual('80000a');
  });

  it('handles starting zeros correctly', (): void => {
    expect(
      u8aToHex(
        new Uint8Array([0, 1, 0, 0, 0, 0, 0, 0])
      )
    ).toEqual('0x0001000000000000');
  });

  it('returns the hex value where allowed < max', (): void => {
    expect(
      u8aToHex(
        new Uint8Array(Uint8Array.from([128, 0, 10, 11]), 64)
      )
    ).toEqual('0x80000a0b');
  });

  it('returns the trimmed hex value where allowed >= max', (): void => {
    expect(
      u8aToHex(
        new Uint8Array([128, 0, 10, 11, 12, 13]),
        32
      )
    ).toEqual('0x8000…0c0d');
  });

  performanceCmp('u8aToHex', ['u8aToHexBuffer', 'u8aToHex'], 2000, [[ptest]], (s: Uint8Array, isSecond) =>
    isSecond
      ? u8aToHex(s)
      : u8aToHexBuffer(s)
  );
});
