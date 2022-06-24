import React, {useState} from 'react'

// css
import './TicTacToe.css'

export const TicTacToe = ()=>{
    const [ turn, setTurn ] = useState('x')
    const [ cells, setCells ] = useState(Array(9).fill(''))
    const [ winner, setWinner ] = useState()
    // function
    const checkForWinner = (squares)=>{
        let combos = {
            across: [
                [0, 1, 2],
                [3, 4, 5],
                [6, 7, 8]
            ],
            down: [
                [0, 3, 6],
                [1, 4, 7],
                [2, 5, 8]
            ],
            diagonal: [
                [0, 4, 8],
                [2, 4, 6]
            ]
        }
        for(let combo in combos){
            combos[combo].forEach((pattern)=>{
                if
                (
                    squares[pattern[0]] === '' &&
                    squares[pattern[1]] === '' &&
                    squares[pattern[2]] === '' 
                )
                {
                    
                }else if
                (
                    squares[pattern[0]] === squares[pattern[1]] && 
                    squares[pattern[1]] === squares[pattern[2]]
                )
                {
                    setWinner(squares[pattern[0]])
                    return;
                }
                // if
                // (
                //     squares[combos.across[0]] !== '' &&
                //     squares[combos.across[1]] !== '' &&
                //     squares[combos.across[2]] !== '' &&

                //     squares[combos.down[0]] !== '' &&
                //     squares[combos.down[1]] !== '' &&
                //     squares[combos.down[2]] !== '' &&

                //     squares[combos.diagonal[0]] !== '' &&
                //     squares[combos.diagonal[1]] !== '' &&
                //     squares[combos.diagonal[2]] !== '' &&

                //     squares[pattern[0]] !== squares[pattern[1]] !== squares[pattern[2]]
                // )
                // {
                //     console.log('hello')
                // }
            })
        }
    }

    const handleClick = (num)=>{
        if(winner){
            alert('Game Over!')
            return;
        }
        if(cells[num] !== ''){
            alert('already clicked!')
            return;
        }
        let squares = [...cells];

        if(turn === 'x'){
            squares[num] = 'x'
            setTurn('o')
        }else{
            squares[num] = 'o'
            setTurn('x')
        }
        checkForWinner(squares)
        setCells(squares)
    }

    const handleRestart = ()=>{
        setTurn(winner)
        setWinner(null)
        setCells(Array(9).fill(''))
    }

    // components
    const Cell = ({ num }) => {
        return(
            <td onClick={()=>handleClick(num)} className={cells[num] === 'x' ? 'green' : 'red'}>{cells[num]}</td>
        )
    }

    return(
        <div className='container'>
            <table>
                <h3>Turn: <span className={winner === 'x' ? 'green' : 'red'} style={{fontSize: "2rem"}}> {turn} </span></h3>
                <tbody>
                    <tr>
                        <Cell num={0} />
                        <Cell num={1} />
                        <Cell num={2} />
                    </tr>
                    <tr>
                        <Cell num={3} />
                        <Cell num={4} />
                        <Cell num={5} />
                    </tr>
                    <tr>
                        <Cell num={6} />
                        <Cell num={7} />
                        <Cell num={8} />
                    </tr>
                </tbody>
            </table>
            {
                winner && (
                    <>
                        <p><span className={winner === 'x' ? 'green' : 'red'} style={{fontSize: "5rem"}}>{winner} </span> is the winner!</p>
                        <button onClick={()=>handleRestart()}>Play again!</button>
                    </>
                )
            }
        </div>
    )
}