import * as React from 'react';
import {TestLibraryService} from '@itrulia/test-library';

export const ReactTest = (props: {service: TestLibraryService}) => <div>Hello</div>;

/* Uncomment this and it will error */
// console.log(TestLibraryService);
