import { expect } from 'chai';

import { hello } from './hello';

describe('Hello module', () => {
    it('should return a message', () => {
        expect(hello('Eric')).to.equal('Hello, Eric. Have a nice day.');
    });
});
