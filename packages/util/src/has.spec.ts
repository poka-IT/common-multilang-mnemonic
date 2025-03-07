// Copyright 2017-2022 @polkadot/util authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { hasBuffer } from './has';

describe('hasBuffer', (): void => {
  it('has Buffer (Jest + Node.js)', (): void => {
    expect(hasBuffer).toEqual(typeof Buffer !== 'undefined');
  });
});
