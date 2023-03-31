const { expect } = require('chai');
const { match } = require('../src/regex');

describe('match', () => {

    describe('email', () => {
        it('should match valid email address', () => {
            expect(match('john.doe@example.com', 'email')).to.be.true;
            expect(match('jane_doe@example.io', 'email')).to.be.true;
            expect(match('john-doe@example.org', 'email')).to.be.true;
        });

        it('should not match invalid email address', () => {
            expect(match('johndoe@example', 'email')).to.be.false;
            expect(match('jane.doe.example.com', 'email')).to.be.false;
            expect(match('jane@doe@example.com', 'email')).to.be.false;
        });
    });

    describe('url', () => {
        it('should match valid URL', () => {
            expect(match('http://www.example.com', 'url')).to.be.true;
            expect(match('https://www.example.com', 'url')).to.be.true;
            expect(match('http://example.com', 'url')).to.be.true;
            expect(match('https://example.com', 'url')).to.be.true;
            expect(match('http://www.example.com/index.html', 'url')).to.be.true;
            expect(match('https://www.example.com/index.html', 'url')).to.be.true;
            expect(match('http://example.com/index.html', 'url')).to.be.true;
            expect(match('https://example.com/index.html', 'url')).to.be.true;
            expect(match('https://www.example.com/path/to/file.html?query=string', 'url')).to.be.true;
            expect(match('https://example.com/path/to/file.html?query=string', 'url')).to.be.true;
            expect(match('http://www.example.com/index.html?query=string#fragment', 'url')).to.be.true;
        });

        it('should not match invalid URL', () => {
            expect(match('example.com', 'url')).to.be.false;
            expect(match('http:/example.com', 'url')).to.be.false;
            expect(match('https://example', 'url')).to.be.false;
        });
    });

    describe('credit-card', () => {
        it('credit-card should match valid credit card number', () => {
            expect(match('4111111111111111', 'credit-card')).to.be.true; // Visa
            expect(match('5555555555554444', 'credit-card')).to.be.true; // Mastercard
            expect(match('378282246310005', 'credit-card')).to.be.true; // American Express
            expect(match('6011111111111117', 'credit-card')).to.be.true; // Discover
        });

        it('should not match invalid credit card number', () => {
            expect(match('4111-1111-1111-1111', 'credit-card')).to.be.false;
            expect(match('5555 5555 5555 4444', 'credit-card')).to.be.false;
            expect(match('6011 1111 1111 1117', 'credit-card')).to.be.false;
            expect(match('3530 1113 3330 0000', 'credit-card')).to.be.false;
            expect(match('3782 822463 10005', 'credit-card')).to.be.false;
        })
    })


    describe('ip-address', function () {
        describe('IPv4', function () {
            it('should match valid IPv4 address', function () {
                expect(match('192.168.0.1', 'ip-address-v4')).to.be.true;
                expect(match('10.0.0.1', 'ip-address-v4')).to.be.true;
                expect(match('172.16.0.1', 'ip-address-v4')).to.be.true;
            });

            it('should not match invalid IPv4 address', function () {
                expect(match('192.168.0.256', 'ip-address-v4')).to.be.false;
                expect(match('192.168.0', 'ip-address-v4')).to.be.false;
            });
        });
    });


    describe('password', function () {
        it('should match valid password', function () {
            expect(match('p4$$W0rd', 'password')).to.be.true;
            expect(match('Myp@$$w0rd', 'password')).to.be.true;
            expect(match('Str0ng_p@$$w0rd', 'password')).to.be.true;
        });

        it('should not match invalid password', function () {
            expect(match('password', 'password')).to.be.false;
            expect(match('Password', 'password')).to.be.false
            expect(match('12345678', 'password')).to.be.false;
            expect(match('p@$$w0rd2022', 'password')).to.be.false
        })
    })

});
