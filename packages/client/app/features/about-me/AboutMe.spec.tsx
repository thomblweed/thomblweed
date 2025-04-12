import { render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, it } from 'vitest';

import { AboutMe } from './AboutMe';

describe('AboutMe', () => {
  beforeEach(() => {
    render(<AboutMe />);
  });

  it('should display about me heading 2', () => {
    expect(
      screen.getByRole('heading', { level: 2, name: "Hi, I'm Thom!" })
    ).toBeInTheDocument();
  });

  it('should display about me paragraph', () => {
    expect(
      screen.getByText(
        /I'm a developer based in Edinburgh with 10 years experience. Although my background encompasses fullstack development, I have been focussing in the frontend space for the past 4 years. I have an enthusiasm for learning, and have a track record of adapting to new technologies./
      )
    ).toBeInTheDocument();
  });
});
