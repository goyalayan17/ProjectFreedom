import React from 'react';
import { configure } from '@storybook/react';

const req = require.context('../stories', true, /\.story\.(tsx|mdx)$/);

configure(req, module);