import { TestlalPage } from './app.po';

describe('testlal App', () => {
  let page: TestlalPage;

  beforeEach(() => {
    page = new TestlalPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
