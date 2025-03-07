// Copyright 2017-2022 @polkadot/util authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { ToBigInt } from '../types';

import { isOn } from './helpers';

export const isToBigInt = /*#__PURE__*/ isOn<ToBigInt>('toBigInt');
