var startTurn = 1;
var turn = startTurn;
var count = 0;
$(".box").click(function() { //Условия смены хода
    if(turn == 1){
        if($(this).text() == "?"){
            turn = 2;
            $(this).html( "<h2>X</h2>");
            $('#winBox').html("<b>Ход О</b>");
            count++;
        }
    }else if(turn == 2){
        if($(this).text() == "?"){
            turn = 1;
            $(this).html( "<h2>O</h2>");
            $('#winBox').html("<b>Ход Х</b>");
            count++;
        }
        
    }
    if(checkWinner()){
        turn = 3;
    }
});
function checkWinner(){   //Условия для выигрыша игроку X и O
    if(
        ($('#box1').text() + $('#box2').text() + $('#box3').text()) == "XXX"||
        ($('#box4').text() + $('#box5').text() + $('#box6').text()) == "XXX"||
        ($('#box7').text() + $('#box8').text() + $('#box9').text()) == "XXX"||
        ($('#box1').text() + $('#box4').text() + $('#box7').text()) == "XXX"||
        ($('#box2').text() + $('#box5').text() + $('#box8').text()) == "XXX"||
        ($('#box3').text() + $('#box6').text() + $('#box9').text()) == "XXX"||
        ($('#box1').text() + $('#box5').text() + $('#box9').text()) == "XXX"||
        ($('#box3').text() + $('#box5').text() + $('#box7').text()) == "XXX"){
        winX();
        return true;
    }else if(
        ($('#box1').text() + $('#box2').text() + $('#box3').text()) == "OOO"||
        ($('#box4').text() + $('#box5').text() + $('#box6').text()) == "OOO"||
        ($('#box7').text() + $('#box8').text() + $('#box9').text()) == "OOO"||
        ($('#box1').text() + $('#box4').text() + $('#box7').text()) == "OOO"||
        ($('#box2').text() + $('#box5').text() + $('#box8').text()) == "OOO"||
        ($('#box3').text() + $('#box6').text() + $('#box9').text()) == "OOO"||
        ($('#box1').text() + $('#box5').text() + $('#box9').text()) == "OOO"||
        ($('#box3').text() + $('#box5').text() + $('#box7').text()) == "OOO"){
        winO();
        return true;
    }
    if(count == 9){ //Появляется если ни одно из условий победы не было выполнено
        $('#winBox').html('<b>Никто не выиграл</b>');
        turn = 3;
    }
} // при выполнении условий выигрыша одной из сторон в зоне с изменяемой информацией высвычивается один из ниже предоставленных вариантов
function winX(){
    $('#winBox').html('<b>X Выиграл Матч</b>');
}
function winO(){
    $('#winBox').html('<b>O Выиграл Матч</b>');
}