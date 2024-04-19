type Props = {
  numberOfGuesses: number;
};
const HangmanSvg = ({ numberOfGuesses }: Props) => (
  <svg
    width="100%"
    height="auto"
    viewBox="0 0 236 441"
    fill="none"
    data-guesses={numberOfGuesses}
    xmlns="http://www.w3.org/2000/svg"
  >
    <g id="hangman">
      <g id="noose">
        <line id="Line 1" x1="74" y1="4" x2="74" y2="441" stroke="black" stroke-width="4" />
        <line id="Line 2" x1="72" y1="2" x2="191.85" y2="2" stroke="black" stroke-width="4" />
        <line id="Line 3" x1="190" y1="4" x2="190" y2="61" stroke="black" stroke-width="4" />
        <line id="Line 4" y1="439" x2="150" y2="439" stroke="black" stroke-width="4" />
      </g>
      <g id="body">
        <g id="arms">
          <line
            id="arm-right"
            x1="186.416"
            y1="161.127"
            x2="234.479"
            y2="125.211"
            stroke="black"
            stroke-width="4"
          />
          <line
            id="arm-left"
            x1="139.795"
            y1="125.224"
            x2="187.472"
            y2="161.651"
            stroke="black"
            stroke-width="4"
          />
        </g>
        <g id="legs">
          <line
            id="leg-left"
            x1="185.697"
            y1="251.939"
            x2="137.634"
            y2="287.855"
            stroke="black"
            stroke-width="4"
          />
          <line
            id="leg-right"
            x1="234.269"
            y1="287.842"
            x2="186.592"
            y2="251.415"
            stroke="black"
            stroke-width="4"
          />
        </g>
        <line id="torso" x1="186.5" y1="128" x2="186.5" y2="253" stroke="black" stroke-width="4" />
        <g id="head">
          <circle
            id="head_2"
            cx="188"
            cy="94.5"
            r="31.5"
            fill="white"
            stroke="black"
            stroke-width="4"
          />
          <g id="face">
            <line
              id="mouth"
              x1="177.254"
              y1="102.253"
              x2="198.746"
              y2="102.253"
              stroke="black"
              stroke-width="5"
            />
            <g id="eye-right">
              <line
                id="Line 10"
                x1="196.32"
                y1="82.2254"
                x2="202.684"
                y2="88.5894"
                stroke="black"
                stroke-width="2"
              />
              <line
                id="Line 11"
                x1="202.563"
                y1="82.3475"
                x2="196.199"
                y2="88.7114"
                stroke="black"
                stroke-width="2"
              />
            </g>
            <g id="eye-left">
              <line
                id="Line 10_2"
                x1="174.828"
                y1="82.2254"
                x2="181.192"
                y2="88.5894"
                stroke="black"
                stroke-width="2"
              />
              <line
                id="Line 11_2"
                x1="181.071"
                y1="82.3475"
                x2="174.707"
                y2="88.7114"
                stroke="black"
                stroke-width="2"
              />
            </g>
          </g>
        </g>
      </g>
    </g>
  </svg>
);

export default HangmanSvg;
