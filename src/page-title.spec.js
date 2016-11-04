import assert from 'assert';

console.log("here");

describe('page title', () => {
  it('has the correct page title', (done) => {
    let expectedTitle = "Google";

    browser.url('http://google.com')
      .getTitle()
      .then((actualTitle) => {
        assert.equal(actualTitle, expectedTitle);
        done;
      });

  });
});

// using stage-0 features
/*
describe('page title', () => {
  it('has the correct page title', function* () {
    yield browser.url('https://google.com')
    const title = yield browser.getTitle();
    assert.equal(title, 'Google');
  });
});
*/
