import { CssSVG } from '~/components/Svg/CssSVG';
import { JavaScriptSVG } from '~/components/Svg/JavaScriptSVG';
import { NodeSVG } from '~/components/Svg/NodeSvg';
import { ReactSVG } from '~/components/Svg/ReactSVG';
import { TestingLibrarySVG } from '~/components/Svg/TestingLibrarySVG';
import { TypeScriptSVG } from '~/components/Svg/TypeScriptSVG';

import './tooling.css';

export const Tooling = () => {
  return (
    <div className="tools-container">
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
    </div>
  );
};
