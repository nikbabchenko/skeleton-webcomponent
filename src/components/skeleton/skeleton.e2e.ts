import { newE2EPage } from '@stencil/core/testing';

describe('nb-skeleton', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<nb-skeleton></nb-skeleton>');
    await page.waitForChanges();
    const element = await page.find('nb-skeleton');
    expect(element).toHaveClass('hydrated');
  });
});
