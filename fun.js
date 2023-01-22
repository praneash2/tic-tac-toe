
const cells=document.querySelectorAll(".cell");

console.log(cells)
cells.forEach((ele)=>{
    ele.addEventListener('click',play);
})

function check(res){
    if((res[1]=="X" && res[2]=="X" && res[3]=="X")||(res[4]=="X" && res[5]=="X" && res[6]=="X")||(res[7]=="X" && res[8]=="X" && res[9]=="X")||(res[1]=="X" && res[4]=="X" && res[7]=="X")||(res[2]=="X" && res[5]=="X" && res[8]=="X")||(res[3]=="X" && res[6]=="X" && res[9]=="X")||(res[1]=="X" && res[5]=="X" && res[9]=="X")||(res[3]=="X" && res[5]=="X" && res[7]=="X") ){
        console.log("x wins");
        const d=document.querySelector("#result");
        d.innerHTML="Xwin";
    }
    if((res[1]=="O" && res[2]=="O" && res[3]=="O")||(res[4]=="O" && res[5]=="O" && res[6]=="O")||(res[7]=="O" && res[8]=="O" && res[9]=="O")||(res[1]=="O" && res[4]=="O" && res[7]=="O")||(res[2]=="O" && res[5]=="O" && res[8]=="O")||(res[3]=="O" && res[6]=="O" && res[9]=="O")||(res[1]=="O" && res[5]=="O" && res[9]=="O")||(res[3]=="O" && res[5]=="O" && res[7]=="O") ){
        console.log("O wins");
        const d=document.querySelector("#result");
        d.innerHTML="Owin";
    }


}

var count=0;
var res={};
function play(){
    console.log(count)
    let value=this.innerHTML;
    
    
    if(value=="X" || value=="O"){
        console.log("already");

    }
    else{
    
    if (count%2==0){

        res[value]="X";
    this.innerHTML="X";}
    else{
        res[value]="O";    
    this.innerHTML="O"}
    count=count+1
    console.log(res);
    check(res);
}
}


