import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Square(props) {
  return (
    <button className="square" onClick={props.onClick}> 
      {props.value}
    </button>
  );
}

class Board extends React.Component {
  renderSquare(j) {
    return (
      <Square
        key={j}
        value={this.props.squares[j]}
        onClick={() => this.props.onClick(j)}
      />
    );
  }

  lineupSquare(i) {
    const squares = []
    for (let j = i * 3; j < (i * 3) + 3; j++) {
        squares.push(this.renderSquare(j));
    }
    return squares;
  }

  lineupRows() {
    const rowItems = []
    for (let i = 0; i < 3; i++) {
      rowItems.push(
        <div key={i} className='board-row'>
          {this.lineupSquare(i)}
        </div>
      );
    }
    return rowItems;
  }

  render() {
    return (
      <div>
        {this.lineupRows()}
      </div>
    );
  }
}

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [{
        squares: Array(9).fill(null),
        position: null,
      }],
      stepNumber: 0,
      xIsNext: true,
      historyOrder: 'asc',
    };
  }

  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      history: history.concat([{
        squares: squares, 
        position: i,
      }]),
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext,
    });
  }

  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: (step % 2) === 0,
    });
  }

  toggleClicked() {
    this.setState({
      historyOrder: this.state.historyOrder === 'asc' ? 'desc' : 'asc'
    })
  }

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.squares);

    const moves = history.map((step, move) => {
      const position = history[move].position;
      const desc = move ?
        'Go to move #'  + move + `(${(position % 3) + 1}, ${Math.floor(position / 3) + 1})` :
        'Go to game start'
      const fontWeight = this.state.stepNumber === move ? 'bold' : 'normal'

      return (
        <li key={move}>
          <button style={{fontWeight}} onClick={() => this.jumpTo(move)}>
            {desc}
          </button>
        </li>
      );
    });

    let status;
    if (winner) {
      status = 'Winner: ' + winner;
    } else {
      status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
    }
    return (
      <div className="game">
        <div className="game-board">
          <Board
            squares={current.squares}
            onClick={(i) => this.handleClick(i)}
          />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ol>{this.state.historyOrder === 'asc' ? moves : moves.reverse()}</ol>
          <button onClick={() => this.toggleClicked()}>{this.state.historyOrder}</button>
        </div>
      </div>
    );
  }
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);
