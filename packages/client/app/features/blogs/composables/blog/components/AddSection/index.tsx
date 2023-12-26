import './add-section.css';

export const AddSection = () => {
  return (
    <div className="add-section">
      <hr className="add-line" />
      <svg
        className="add-icon"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g>
          <g>
            <g>
              <rect
                fill="none"
                height="20"
                rx="2"
                ry="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                width="20"
                x="2"
                y="2"
              />
              <line
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                x1="15.5"
                x2="8.5"
                y1="12"
                y2="12"
              />
              <line
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                x1="12"
                x2="12"
                y1="15.5"
                y2="8.5"
              />
            </g>
          </g>
        </g>
      </svg>
      <hr className="add-line" />
    </div>
  );
};
