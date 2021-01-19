var nextIndex; 
var turn=0;
var winner = null;
var choice_history = [];

function CPUturn()
{
    
        if(turn == 0) // CPU's turn first
        {
            if(Math.floor(Math.random()*2)==1)
            {
                turn ++;
                nextIndex = Math.floor(Math.random()*9)+1;
                document.getElementById("s" + nextIndex).textContent = "O";
                document.getElementById("s"+ nextIndex).style.color = "#6BD425";
                choice_history.push(nextIndex);
                return;
            }
            return;
        }

    turn++;

    if(if_wins(turn-1)!==1)
    {

        if(if_wins(turn)) // if opponent is winning
        {                
            if(turn == 9) // means last turn and game is tie now
            {
                gameTie();
            }
            return;
        }

        if(turn == 5)
        {
            for(var i=1;i<=9;i++)
            {
                if(check(1,i)&&check(3,i))
                {
                    choice_history.push(i);
                    document.getElementById("s"+i).textContent = "O";
                    document.getElementById("s"+i).style.color = "#6BD425";
                    return;
                }
            }
        }
        
        for(var j=turn-2;j>0;j=j-2)
        {
            for(var i=1;i<=9;i++)
            {
                if(check(j,i))
                {
                    choice_history.push(i);
                    document.getElementById("s"+i).textContent = "O";
                    document.getElementById("s"+i).style.color = "#6BD425";
                    if(who_wins(turn-1)==1)
                    {
                        userLose();
                    }
                    return;
                }
            }
            
        }
        // getting random number
        getRandom();
        if(who_wins(turn-1)==1)
        {
           userLose();
        }
        return;
    }
        /// declaring CPU winner;
    userLose();
    return;
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
    document.getElementsByTagName("h2")[0].textContent = "Result";
    document.getElementsByTagName("h2")[0].style.visibility="hidden";
    CPUturn();
}



function check(turn_n,index)
{
    if(document.getElementById("s" + index).textContent!==" ")
    {
        return 0;
    }

    nextIndex = choice_history[turn_n-1]+index;
    nextIndex = 15-nextIndex;

    if(nextIndex>0 && nextIndex<10)
    {
        if(document.getElementById("s"+index).textContent==" ")
        {
            return 1;
        }
    }
    return 0;
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

function getRandom()
{
    do{
        nextIndex = Math.floor((Math.random()*9))+1;
    }while(document.getElementById("s"+nextIndex).textContent !== " ");

    document.getElementById("s"+nextIndex).textContent = "O";
    document.getElementById("s"+nextIndex).style.color = "#6BD425";
    choice_history.push(nextIndex); 
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
    document.getElementsByTagName("h2")[0].style.visibility="visible";

    winner = "Tie";
    return 2;
}

/// check if wins
function if_wins(turn_n)
{
    var predictedIndex;
    for(var i = turn_n-2; i>=0;i=i-2)
    {
        for(var j = turn_n-2;j>=0;j=j-2)
        {
            if(i==j)
            {
                continue;
            }
            
            predictedIndex = choice_history[i]+choice_history[j];
            predictedIndex = 15 - predictedIndex;

            if(predictedIndex>0 && predictedIndex<10 )
            {
                if(document.getElementById("s" + predictedIndex).textContent==" ")
                {
                    choice_history.push(predictedIndex);
                    document.getElementById("s" + predictedIndex).textContent = "O";
                    document.getElementById("s"+ predictedIndex).style.color = "#6BD425";
                    return 1;
                }                
            }
        }
    }
    return 0;
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
