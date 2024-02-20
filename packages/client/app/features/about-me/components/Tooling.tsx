import { AwsLambdaSVG } from './svg/AwsLambdaSVG';
import { CssSVG } from './svg/CssSVG';
import { HtmlSVG } from './svg/HtmlSVG';
import { JavaScriptSVG } from './svg/JavaScriptSVG';
import { NextJsSVG } from './svg/NextJsSVG';
import { NodeSVG } from './svg/NodeSvg';
import { PlaywrightSVG } from './svg/PlaywrightSVG';
import { ReactSVG } from './svg/ReactSVG';
import { RemixSVG } from './svg/RemixSVG';
import { TestingLibrarySVG } from './svg/TestingLibrarySVG';
import { TypeScriptSVG } from './svg/TypeScriptSVG';
import { VitestSVG } from './svg/VitestSVG';
import './tooling.css';

export const Tooling = () => {
  return (
    <div className="tools-container">
      <div className="tools">
        <div className="tool-item">
          <div className="tool-logo">
            <ReactSVG />
          </div>
          <div className="tool-text">
            <span>React</span>
          </div>
        </div>
        <div className="tool-item">
          <div className="tool-logo">
            <NodeSVG />
          </div>
          <div className="tool-text">
            <span>Node</span>
          </div>
        </div>
        <div className="tool-item">
          <div className="tool-logo">
            <TypeScriptSVG />
          </div>
          <div className="tool-text">
            <span>TypeScript</span>
          </div>
        </div>
        <div className="tool-item">
          <div className="tool-logo">
            <JavaScriptSVG />
          </div>
          <div className="tool-text">
            <span>JavaScript</span>
          </div>
        </div>
        <div className="tool-item">
          <div className="tool-logo">
            <HtmlSVG />
          </div>
          <div className="tool-text">
            <span>HTML</span>
          </div>
        </div>
        <div className="tool-item">
          <div className="tool-logo">
            <CssSVG />
          </div>
          <div className="tool-text">
            <span>CSS</span>
          </div>
        </div>
        <div className="tool-item">
          <div className="tool-logo">
            <TestingLibrarySVG />
          </div>
          <div className="tool-text">
            <span>Testing Library</span>
          </div>
        </div>
        <div className="tool-item">
          <div className="tool-logo">
            <VitestSVG />
          </div>
          <div className="tool-text">
            <span>Vitest</span>
          </div>
        </div>
        <div className="tool-item">
          <div className="tool-logo">
            <PlaywrightSVG />
          </div>
          <div className="tool-text">
            <span>Playwright</span>
          </div>
        </div>
        <div className="tool-item">
          <div className="tool-logo">
            <AwsLambdaSVG />
          </div>
          <div className="tool-text">
            <span>AWS Lambda</span>
          </div>
        </div>
        <div className="tool-item">
          <div className="tool-logo">
            <RemixSVG />
          </div>
          <div className="tool-text">
            <span>Remix</span>
          </div>
        </div>
        <div className="tool-item">
          <div className="tool-logo">
            <NextJsSVG />
          </div>
          <div className="tool-text">
            <span>Next.js</span>
          </div>
        </div>
      </div>
    </div>
  );
};
