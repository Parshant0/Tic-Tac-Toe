var turn=0;
var winner = null;
var choice_history = [];
var nextIndex;
function CPUturn()
{
    
        if(turn == 0) // CPU's turn first
        {
            if(Math.floor(Math.random()*2)==1)
            {
                turn++;
                getRandom();
                return;
            }
            return;
        }
    turn++;
    getRandom();

    if(who_wins(turn-1)==1)
    {
       userLose();
    }
}

function getRandom()
{
    do{
        nextIndex = Math.floor((Math.random()*9))+1;
    }while(document.getElementById("s"+nextIndex).textContent !== " ");

    document.getElementById("s"+nextIndex).textContent = "O";
    document.getElementById("s"+nextIndex).style.color = "#6BD425";
    choice_history.push(nextIndex); 
}


function user_turn(choice)
{
    if(choice.textContent!==" " || winner!==null)
    {
        return;
    }
         turn++;

        choice_history.push(parseInt(choice.id[1]));
        choice.textContent = 'X'; 
        choice.style.color="#FBFF12";
        if(who_wins(turn-1)==1)
        {
            userWins();
        }
        if(who_wins(turn-1)==0)
        {
            CPUturn();  
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
    gameTie();

    return 2;
}


function startGame()
{
    turn=0;
    winner = null;
    choice_history = [];
    for(var i = 1;i<=9;i++)
    {
        document.getElementById("s"+i).textContent = " ";
    }
    document.getElementsByTagName("h2")[0].style.visibility="hidden";
    CPUturn();
}


function userWins()
{
    document.getElementsByTagName("h2")[0].textContent = "You Win";
    document.getElementsByTagName("h2")[0].style.visibility="visible";
    winner = "USER";
}

function userLose()
{
    document.getElementsByTagName("h2")[0].textContent = "YOU LOSE";
    document.getElementsByTagName("h2")[0].style.visibility="visible";
    winner = "CPU";
}

function gameTie()
{
    document.getElementsByTagName("h2")[0].textContent="TIE";
    document.getElementsByTagName("h2")[0].style.visibility="visible";
    winner = "Tie";
}


