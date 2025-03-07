// Copyright 2017-2022 @polkadot/util authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { isOnObject } from './helpers';

export const isPromise = /*#__PURE__*/ isOnObject<Promise<unknown>>('catch', 'then');
