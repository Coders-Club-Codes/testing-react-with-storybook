/* eslint-disable import/no-extraneous-dependencies */
import '@testing-library/jest-dom';
import 'jest-styled-components';
import { setGlobalConfig } from '@storybook/testing-react';

import * as globalStorybookConfig from '../.storybook/preview.js';

setGlobalConfig(globalStorybookConfig);
