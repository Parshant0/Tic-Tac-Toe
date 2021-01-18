var array  = [['2','1','4','9','5','6','8'],
['2','1','5','8','6','4','7'],
['2','1','6','7','4','5','9'],
['2','1','6','7','5','4','8'],
['2','3','4','9','5','6','8'],
['2','3','4','9','6','5','7'],
['2','3','5','8','4','6','9'],
['2','3','6','7','5','4','8'],
['2','4','6','7','8','1','5'],
['2','4','7','6','5','3','8'],
['2','4','8','5','6','1','7'],
['2','6','4','9','8','3','5'],
['2','6','8','5','4','3','9'],
['2','6','9','4','5','1','8'],
['2','7','4','9','5','6','8'],
['2','7','4','9','8','3','5'],
['2','7','5','8','4','6','9'],
['2','7','5','8','9','1','4'],
['2','7','9','4','5','1','8'],
['2','8','4','9','6','5','7'],
['2','8','6','7','4','5','9'],
['2','9','5','8','6','4','7'],
['2','9','5','8','7','3','6'],
['2','9','6','7','5','4','8'],
['2','9','6','7','8','1','5'],
['2','9','7','6','5','3','8'],
['4','1','2','9','5','8','6'],
['4','1','5','6','8','2','3'],
['4','1','8','3','2','5','9'],
['4','1','8','3','5','2','6'],
['4','2','3','8','5','7','6'],
['4','2','6','5','8','1','3'],
['4','2','8','3','6','1','5'],
['4','3','2','9','5','8','6'],
['4','3','2','9','6','7','5'],
['4','3','5','6','2','8','9'],
['4','3','5','6','9','1','2'],
['4','3','9','2','5','1','6'],
['4','6','2','9','8','5','3'],
['4','6','8','3','2','5','9'],
['4','7','2','9','5','8','6'],
['4','7','2','9','8','5','3'],
['4','7','5','6','2','8','9'],
['4','7','8','3','5','2','6'],
['4','8','2','9','6','7','5'],
['4','8','6','5','2','7','9'],
['4','8','9','2','5','1','6'],
['4','9','3','8','5','7','6'],
['4','9','5','6','3','7','8'],
['4','9','5','6','8','2','3'],
['4','9','8','3','5','2','6'],
['4','9','8','3','6','1','5'],
['6','1','2','7','4','9','5'],
['6','1','2','7','5','8','4'],
['6','1','5','4','2','8','7'],
['6','1','5','4','7','3','2'],
['6','1','7','2','5','3','4'],
['6','2','1','8','5','9','4'],
['6','2','4','5','8','3','1'],
['6','2','8','1','4','3','5'],
['6','3','2','7','5','8','4'],
['6','3','5','4','8','2','1'],
['6','3','8','1','2','5','7'],
['6','3','8','1','5','2','4'],
['6','4','2','7','8','5','1'],
['6','4','8','1','2','5','7'],
['6','7','1','8','5','9','4'],
['6','7','5','4','1','9','8'],
['6','7','5','4','8','2','1'],
['6','7','8','1','4','3','5'],
['6','7','8','1','5','2','4'],
['6','8','2','7','4','9','5'],
['6','8','4','5','2','9','7'],
['6','8','7','2','5','3','4'],
['6','9','2','7','5','8','4'],
['6','9','2','7','8','5','1'],
['6','9','5','4','2','8','7'],
['6','9','8','1','5','2','4'],
['8','1','3','4','5','7','2'],
['8','1','4','3','2','9','5'],
['8','1','4','3','5','6','2'],
['8','1','5','2','3','7','4'],
['8','1','5','2','4','6','3'],
['8','2','4','3','6','5','1'],
['8','2','6','1','4','5','3'],
['8','3','1','6','5','9','2'],
['8','3','5','2','1','9','6'],
['8','3','5','2','6','4','1'],
['8','3','6','1','2','7','5'],
['8','3','6','1','5','4','2'],
['8','4','1','6','5','9','2'],
['8','4','2','5','6','7','1'],
['8','4','6','1','2','7','5'],
['8','6','2','5','4','9','3'],
['8','6','3','4','5','7','2'],
['8','6','4','3','2','9','5'],
['8','7','4','3','5','6','2'],
['8','7','5','2','6','4','1'],
['8','7','6','1','4','5','3'],
['8','7','6','1','5','4','2'],
['8','9','4','3','5','6','2'],
['8','9','4','3','6','5','1'],
['8','9','5','2','4','6','3'],
['8','9','6','1','5','4','2']];

var firstIndex = 0;
var lastIndex = 103;
var nextIndex; 
var turn=0;
var winner = null;
var choice_history = [];

/// CPUs turn-------------------------------------
function CPUturn()
{
    if(if_wins(turn)!==1)// check if CPU wins
    {
        turn++;

        if(choice_history[1]==5) // if user enters in 5th cell in 2nd turn
        {
            var array4five = [1,3,8,7,6,1,9,4,3,7,2,9];

            if(turn==3)// 3rd turn
            {
                nextIndex = choice_history[0]/2;
                nextIndex = (nextIndex-1) * 3;
                nextIndex = nextIndex + Math.floor(Math.random()*3); 
                document.getElementById("s" + array4five[nextIndex]).textContent="O";
                document.getElementById("s"+ array4five[nextIndex]).style.color = "#6BD425";
                choice_history.push(array4five[nextIndex]);
                return;
            }
            if(if_wins(turn)) // if opponent is winning
            {                
                if(turn == 9) // means last turn and game is tie now
                {
                    gameTie();
                }
                return;
            }

            if(turn==5)
            {
                for(var i=1;i<=9;i++)
                {
                    if(check(1,i) && check(3,i))
                    {
                        document.getElementById("s" + i).textContent = "O";
                        document.getElementById("s"+ i).style.color = "#6BD425";
                        choice_history.push(i);
                        return;
                    }
                }
                
            }
            getRandom();
            console.log(turn);
            if(turn == 9) // means last turn and game is tie now
            {
               gameTie();
            }
            return;
        }

        nextIndex = lastIndex - firstIndex + 1 ;
        nextIndex = Math.random()*nextIndex;
        nextIndex = Math.floor(nextIndex);  
        nextIndex = nextIndex + firstIndex;
        document.getElementById("s"+array[nextIndex][turn-1]).textContent = 'O';
        document.getElementById("s"+ array[nextIndex][turn-1]).style.color = "#6BD425";

        choice_history.push(parseInt(array[nextIndex][turn-1]))
        changeIndex(turn);
        return;
    }
    /// declaring CPU winner;
    userLose();
}
///----------------------------------------------


function startGame()
{
    firstIndex = 0;
    lastIndex = 103;
    turn=0;
    winner = null;
    choice_history = [];
    for(var i = 1;i<=9;i++)
    {
        document.getElementById("s"+i).textContent = " ";
    }
    document.getElementsByTagName("h2")[0].textContent = "result";
    document.getElementsByTagName("h2")[0].style.visibility = "hidden";
    CPUturn();
}



/// updaing index (first index and last index)
function changeIndex(turn)
{

    for(var i=firstIndex;i<=lastIndex;i++)
    {
        if(array[i][turn-1]==array[nextIndex][turn-1])
        {
            firstIndex = i; 
            break;          
        }
    }

    for(var i=lastIndex;i>=firstIndex;i--)
    {
        if(array[i][turn-1]==array[nextIndex][turn-1])
        {
            lastIndex = i;
            break;
        }
    }
}
///----------------------------------------------


/// when user enters --------------------------------------
function nextMove(choice)
{
   
    if(choice.textContent!==" " || winner!==null)
    {
        return;
    }
         turn++;
        for(var i=firstIndex;i<=lastIndex;i++)
        {
            if("s"+array[i][turn-1]==choice.id)
            {
                firstIndex = i;
                break;
            }
        }

        for(var i=lastIndex;i>=firstIndex;i--)
        {
            if("s"+array[i][turn-1]==choice.id)
            {
                lastIndex = i;
                break;
            }
        }

        choice_history.push(parseInt(choice.id[1]));
        choice.textContent = 'X'; 
        choice.style.color="#FBFF12";


            CPUturn();  
    
}
/// ---------------------------------------------------------

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


function check(turn_n,i)
{
    if(document.getElementById("s" + i).textContent !==" ")
    {
        return 0;
    }

    nextIndex = choice_history[turn_n-1] + i;
    nextIndex = 15 - nextIndex;

    if(nextIndex>0 && nextIndex<10 && document.getElementById("s" + nextIndex).textContent == " ")
    {
        return 1;
    }
    return 0;
} 


function getRandom()
{
    do{
        nextIndex = Math.floor((Math.random()*9))+1;
    }while(document.getElementById("s"+nextIndex).textContent !== " ");

    document.getElementById("s"+nextIndex).textContent = "O";
    document.getElementById("s"+ nextIndex).style.color = "#6BD425";

    choice_history.push(nextIndex); 
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
