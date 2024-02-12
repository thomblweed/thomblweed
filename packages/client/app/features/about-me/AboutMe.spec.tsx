import { render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, it } from 'vitest';

import { AboutMe } from './AboutMe';

describe('AboutMe', () => {
  beforeEach(() => {
    render(<AboutMe />);
  });

  it('should display about me heading 2', () => {
    expect(
      screen.getByRole('heading', { level: 2, name: 'about me' })
    ).toBeInTheDocument();
  });

  it('should display about me paragraph', () => {
    expect(
      screen.getByText(
        /Frontend Developer, with a history of full stack development and over 9 years of industry experience including 5 years in consulting. Thrives in agile environments, fostering collaboration and code pairing. Demonstrates a strong passion for continuous learning and has a proven track record of quickly adapting to new technologies. Derives great satisfaction from thoroughly testing across all areas, including unit, integration, acceptance, and end-to-end, while utilising the principles of Test-Driven Development\./
      )
    ).toBeInTheDocument();
  });
});
