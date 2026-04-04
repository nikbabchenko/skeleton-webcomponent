import { newSpecPage } from '@stencil/core/testing';
import { Skeleton } from './skeleton';

describe('nb-skeleton (spec)', () => {
  it('uses default accessible label on a single progressbar', async () => {
    const page = await newSpecPage({
      components: [Skeleton],
      html: '<nb-skeleton></nb-skeleton>',
    });

    const progressbar = page.root.shadowRoot.querySelector('[role="progressbar"]');
    expect(progressbar).not.toBeNull();
    expect(progressbar.getAttribute('aria-label')).toBe('Loading...');
    expect(progressbar.getAttribute('aria-valuetext')).toBe('Loading...');

    const progressbars = page.root.shadowRoot.querySelectorAll('[role="progressbar"]');
    expect(progressbars.length).toBe(1);
  });

  it('renders count skeleton items as aria-hidden and keeps one ARIA container', async () => {
    const page = await newSpecPage({
      components: [Skeleton],
      html: '<nb-skeleton label="Loading comments..." count="3"></nb-skeleton>',
    });

    const progressbars = page.root.shadowRoot.querySelectorAll('[role="progressbar"]');
    expect(progressbars.length).toBe(1);

    const progressbar = progressbars[0];
    expect(progressbar.getAttribute('aria-label')).toBe('Loading comments...');

    const rows = page.root.shadowRoot.querySelectorAll('.skeleton');
    expect(rows.length).toBe(3);

    rows.forEach(row => {
      expect(row.getAttribute('aria-hidden')).toBe('true');
    });
  });

  it('falls back to progress animation and warns on invalid animation', async () => {
    const warnSpy = jest.spyOn(console, 'warn').mockImplementation(() => undefined);

    const page = await newSpecPage({
      components: [Skeleton],
      html: '<nb-skeleton animation="not-valid"></nb-skeleton>',
    });

    expect(page.rootInstance.animation).toBe('progress');
    expect(warnSpy).toHaveBeenCalled();
    expect(warnSpy.mock.calls[0][0]).toContain('need to receive');

    warnSpy.mockRestore();
  });

  it('parses customStyles JSON and merges with dimensions styles', async () => {
    const page = await newSpecPage({
      components: [Skeleton],
      html: '<nb-skeleton width="120px" margin-bottom="8px" custom-styles="{&quot;height&quot;:&quot;30px&quot;,&quot;background&quot;:&quot;red&quot;}"></nb-skeleton>',
    });

    expect(page.rootInstance.style).toEqual(
      expect.objectContaining({
        width: '120px',
        height: '30px',
        marginBottom: '8px',
        background: 'red',
      }),
    );
  });

  it('renders with a custom wrapper tag when as is provided', async () => {
    const page = await newSpecPage({
      components: [Skeleton],
      html: '<nb-skeleton as="span"></nb-skeleton>',
    });

    const wrapper = page.root.shadowRoot.querySelector('span[role="progressbar"]');
    expect(wrapper).not.toBeNull();
  });

  it('falls back to div wrapper for invalid as values', async () => {
    const warnSpy = jest.spyOn(console, 'warn').mockImplementation(() => undefined);

    const page = await newSpecPage({
      components: [Skeleton],
      html: '<nb-skeleton as="bad tag"></nb-skeleton>',
    });

    const wrapper = page.root.shadowRoot.querySelector('div[role="progressbar"]');
    expect(wrapper).not.toBeNull();
    expect(warnSpy).toHaveBeenCalled();

    warnSpy.mockRestore();
  });

  it('supports asChild by applying ARIA to host and skipping internal wrapper role', async () => {
    const page = await newSpecPage({
      components: [Skeleton],
      html: '<nb-skeleton as-child="true" count="2" label="Loading rows..."></nb-skeleton>',
    });

    expect(page.root.getAttribute('role')).toBe('progressbar');
    expect(page.root.getAttribute('aria-label')).toBe('Loading rows...');

    const innerProgressbar = page.root.shadowRoot.querySelector('[role="progressbar"]');
    expect(innerProgressbar).toBeNull();

    const rows = page.root.shadowRoot.querySelectorAll('.skeleton');
    expect(rows.length).toBe(2);
  });

  it('ignores invalid as when asChild is true and does not resolve wrapper tag', async () => {
    const warnSpy = jest.spyOn(console, 'warn').mockImplementation(() => undefined);

    const page = await newSpecPage({
      components: [Skeleton],
      html: '<nb-skeleton as="bad tag" as-child="true"></nb-skeleton>',
    });

    expect(page.root.getAttribute('role')).toBe('progressbar');
    expect(page.root.shadowRoot.querySelector('[role="progressbar"]')).toBeNull();

    const asWarnings = warnSpy.mock.calls.filter(call =>
      String(call[0]).includes('`as` prop must be a valid html tag name'),
    );
    expect(asWarnings.length).toBe(0);

    warnSpy.mockRestore();
  });
});
