var turnCount = 0;
var turn = null;
var winner = null;
var choice_history = [];

function startGame()
{
    turnCount = 0;
    turn = null;
    winner = null;
    choice_history = [];
    for (var i = '1'; i<= '9'; i++)
    {
        document.getElementById("s" + i).style.fontWeight = "normal";
        document.getElementById("s"+i).textContent = " ";
    }

    turn = "X";
    if (Math.random()<0.5)
    {
        turn = "O";
    }
    document.getElementsByTagName("h2")[0].textContent =  turn + " gets to start.";
    document.getElementsByTagName("h2")[0].style.visibility = "visible";

}

function user_turn(choice)
{
    if(choice.textContent!==" " || winner!==null)
    {
        return;
    }

        turnCount++;
        choice_history.push(parseInt(choice.id[1]));
        choice.textContent = turn; 
        choice.style.color = "#6BD425";
        if(turn=="X")
        {
            choice.style.color = "#FBFF12"; 
        }

        if(who_wins(turnCount-1)==1)
        {
            document.getElementsByTagName("h2")[0].textContent = "Player " + turn + " won";
            winner = turn;
        }
        else if(who_wins(turnCount-1)==0)// game is still going
        {
            if(turn == "X")
            {
                turn = "O";
                document.getElementsByTagName("h2")[0].textContent = "Player O's turn";
            }
            else
            {
                turn = "X";
                document.getElementsByTagName("h2")[0].textContent = "Player X's turn";
            }
        }
        

}

function who_wins(turn_n)
{
    for(var i=turn_n;i>=0;i=i-2)
    {
        for(var j=turn_n;j>=0;j=j-2)
        {
            for(var k=turn_n;k>=0;k=k-2)
            if(i!==j && i!==k && k!==j)
            {
                nextIndex = choice_history[i]+choice_history[j]+choice_history[k];
                if(nextIndex == 15)
                {
                    return 1;
                }
            }
        }
    }
    
    for(var i=1;i<=9;i++)
    {
        if(document.getElementById("s"+i).textContent==" ")
        {
            return 0;
        }
    }

    document.getElementsByTagName("h2")[0].textContent="TIE";
    winner = "Tie";
    return 2;
}