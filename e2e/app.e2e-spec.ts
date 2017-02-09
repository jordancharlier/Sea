import { SeaPage } from './app.po';

describe('sea App', function() {
  let page: SeaPage;

  beforeEach(() => {
    page = new SeaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
