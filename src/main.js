var change = document.getElementById('change');
var turn = 'x';


function start(id){
    var element = document.getElementById(id.id);
    var statue;
    if(turn === 'x' && element.innerHTML == '' ){
        element.innerHTML = 'x';
        element.style.color = 'red';
        turn = 'o';
        statue = "O دور ";
        change.innerHTML = statue;
        
    }
    else if(turn === 'o' && element.innerHTML == '' ){
        element.innerHTML = 'o';
        element.style.color = 'yellow'
        turn = 'x';
        statue = "X دور ";
        change.innerHTML = statue;
    }
    winer();
    

}

var items=[];
var v=[];

function winer(){

    for(var i = 1; i < 10; i++)
    {
        items[i] = document.getElementById('item'+i).innerHTML;
    }

    // rows
    if(items[1] == items[2] && items[2] == items[3] && items[1] !='' ){
        end(1,2,3);
    }

    else if(items[4] == items[5] && items[5] == items[6] && items[5] !='' ){
        end(4,5,6);
    }

    else if(items[7] == items[8] && items[8] == items[9] && items[9] !='' ){
        end(7,8,9);
    }

    // columns
    else if(items[1] == items[4] && items[4] == items[7] && items[4] !='' ){
        end(1,4,7);
    }

    else if(items[2] == items[5] && items[5] == items[8] && items[5] !='' ){
        end(2,5,8);
    }

    else if(items[3] == items[6] && items[6] == items[9] && items[6] !='' ){
        end(3,6,9);
    }

    // cross
    else if(items[1] == items[5] && items[5] == items[9] && items[5] !='' ){
        end(1,5,9);
    }

    else if(items[3] == items[5] && items[5] == items[7] && items[5] !='' ){
        end(3,5,7);
    }
    else if(items[1] !='' && items[2] !='' && items[3] !='' &&
        items[4] !='' && items[5] !='' && items[6] !='' &&
        items[7] !='' && items[8] !='' && items[9] !=''
    ){
        draw();
    }   
}

function end(num1 , num2 ,num3){
    var parse = `${items[num1]} خلصت اللعبة يا صاحبي و مبارك <br>`;
    change.innerHTML = parse;
    change.style.textTransform = 'uppercase';
    
    setInterval(function(){
        document.getElementById('item'+num1).style.background = 'white';
        document.getElementById('item'+num2).style.background = 'white';
        document.getElementById('item'+num3).style.background = 'white';
    },500);

    setInterval(function(){
        document.getElementById('item'+num1).style.background = 'green';
        document.getElementById('item'+num2).style.background = 'green';
        document.getElementById('item'+num3).style.background = 'green';
    },1000);
    
    setInterval(function(){
        change.innerHTML += '(:'
    },1000);

    setTimeout(function(){
        location.reload();
    },4000)
    stop();
}

function stop(){
    for(var z = 1; z < 10; z++)
        {
            v[z] = document.getElementById('item'+z);
            v[z].setAttribute('onclick' , '');
        }
}

function draw(){
    change.innerHTML = 'تعادل يا باشاااا';
    setInterval(function(){
        change.innerHTML += '.'
    },1000);
    setTimeout(function(){
        location.reload();
    },4000)
    stop();
}
