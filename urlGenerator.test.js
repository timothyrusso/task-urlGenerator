const urlGenerator= require('./urlGenerator.js');
const urlRegEx = /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[\-;:&=\+\$,\w]+@)?[A-Za-z0-9\.\-]+|(?:www\.|[\-;:&=\+\$,\w]+@)[A-Za-z0-9\.\-]+)((?:\/[\+~%\/\.\w\-_]*)?\??(?:[\-\+=&;%@\.\w_]*)#?(?:[\.\!\/\\\w]*))?)/;

it('Check that the string matches the regular expression', () => {
    expect(urlGenerator('test1234è')).toMatch(urlRegEx);
  });

  it('Check that the url is a string', () => {
    expect(typeof urlGenerator('test')).toBe('string');
  });

