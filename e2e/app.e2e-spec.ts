import { ComponentLibraryPage } from './app.po';

describe('component-library App', () => {
  let page: ComponentLibraryPage;

  beforeEach(() => {
    page = new ComponentLibraryPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
