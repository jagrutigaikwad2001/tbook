'use strict';
var arrTicketNo =[];
var arrAmount=[];
var allTickets = [
    {ticketNo:'R1' , ticketAmount:80},
    {ticketNo:'R2' , ticketAmount:70},
    {ticketNo:'R3' , ticketAmount:90},
    {ticketNo:'R4' , ticketAmount:180},
    {ticketNo:'R5' , ticketAmount:280},
    {ticketNo:'R6' , ticketAmount:120},
    {ticketNo:'R7' , ticketAmount:200},
    {ticketNo:'R8' , ticketAmount:130},
    {ticketNo:'R9' , ticketAmount:340},
    {ticketNo:'R10' , ticketAmount:210},
    {ticketNo:'R11' , ticketAmount:90},
    {ticketNo:'R12' , ticketAmount:140},
    {ticketNo:'R13' , ticketAmount:110},
    {ticketNo:'R14' , ticketAmount:150},
    {ticketNo:'R15' , ticketAmount:190}
    

];
//console.log(allTickets.length);
//if(allTickets.length > 0){
    //allTickets.forEach((val)=>{
        //console.log(val);
        
    //})
//}
//short circuit operator
allTickets.length > 0 && allTickets.forEach((val)=>{
    console.log(val);
    
    //object destruction
    var{ticketNo,ticketAmount} = val;
    //console.log(ticketNo);

    var spanTag = document.createElement("span");
    //console.log(spanTag , typeof spanTag);
    
    spanTag.innerHTML = `${ticketNo} <br /> ${ticketAmount}`;
    spanTag.className = "ticket";

    spanTag.setAttribute("for" , `${ticketNo}#${ticketAmount}`)
    
    //dom event listener
    spanTag.addEventListener("click",ticketClick);
    document.querySelector('.allTickets').append(spanTag);
    
})
function ticketClick(){
    //console.log('TEST');
    console.log(this);

    var result = this.getAttribute("for");
    console.log(result,'ans');

    var resultSplit = result.split("#");
    console.log(resultSplit);

    // Array Destructor

    var[no,amount]= resultSplit;
    console.log(no);
    console.log(amount);
    


    var check_ticket = arrTicketNo.indexOf(no);
    console.log(check_ticket);

    if(check_ticket == -1){
        arrTicketNo.push(no);
        arrAmount.push(amount);
        this.style.background ='red';
    }
    else{
        console.log('ticket exist');
        arrTicketNo.splice(check_ticket,1);
        arrAmount.splice(check_ticket,1);
        this.style.background = 'white'
    }

    console.log(arrTicketNo);
    console.log(arrAmount);

    if(arrTicketNo.length>0){

        document.getElementById('x1').innerHTML = arrTicketNo.join(",");
        document.getElementById('x2').innerHTML = eval(arrAmount.join("+"));
    } 
    else{
        document.getElementById('x1').innerHTML="No Ticket Selected";
        document.getElementById('x2').innerHTML=0;
    }

}
