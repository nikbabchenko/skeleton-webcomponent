import { newE2EPage } from '@stencil/core/testing';

describe('nb-skeleton', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<nb-skeleton></nb-skeleton>');
    await page.waitForChanges();
    const element = await page.find('nb-skeleton');
    expect(element).toHaveClass('hydrated');
  });

  it('sets aria-label from label prop on a single progressbar container', async () => {
    const page = await newE2EPage();

    await page.setContent('<nb-skeleton label="Loading comments..."></nb-skeleton>');
    await page.waitForChanges();

    const progressbar = await page.find('nb-skeleton >>> [role="progressbar"]');
    expect(progressbar).not.toBeNull();
    expect(progressbar).toEqualAttribute('aria-label', 'Loading comments...');
    expect(progressbar).toEqualAttribute('aria-valuetext', 'Loading comments...');
  });

  it('keeps repeated visual rows aria-hidden and exposes one progressbar', async () => {
    const page = await newE2EPage();

    await page.setContent('<nb-skeleton variant="text" count="3"></nb-skeleton>');
    await page.waitForChanges();

    const progressbars = await page.findAll('nb-skeleton >>> [role="progressbar"]');
    expect(progressbars.length).toBe(1);

    const rows = await page.findAll('nb-skeleton >>> .skeleton');
    expect(rows.length).toBe(3);

    for (const row of rows) {
      expect(row).toEqualAttribute('aria-hidden', 'true');
    }
  });

  it('supports asChild and puts ARIA attributes on the host', async () => {
    const page = await newE2EPage();

    await page.setContent('<nb-skeleton as-child="true" count="2" label="Loading comments..."></nb-skeleton>');
    await page.waitForChanges();

    const host = await page.find('nb-skeleton');
    expect(host).toEqualAttribute('role', 'progressbar');
    expect(host).toEqualAttribute('aria-label', 'Loading comments...');

    const shadowProgressbars = await page.findAll('nb-skeleton >>> [role="progressbar"]');
    expect(shadowProgressbars.length).toBe(0);
  });

  it('uses custom wrapper tag when as is set and asChild is false', async () => {
    const page = await newE2EPage();

    await page.setContent('<nb-skeleton as="span" label="Loading list..."></nb-skeleton>');
    await page.waitForChanges();

    const spanWrapper = await page.find('nb-skeleton >>> span[role="progressbar"]');
    expect(spanWrapper).not.toBeNull();
    expect(spanWrapper).toEqualAttribute('aria-label', 'Loading list...');
  });
});
