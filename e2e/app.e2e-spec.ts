import { WebsiteComponentsPage } from './app.po';

describe('website-components App', function() {
  let page: WebsiteComponentsPage;

  beforeEach(() => {
    page = new WebsiteComponentsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
