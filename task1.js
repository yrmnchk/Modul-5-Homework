let x = prompt('Введите значение : ');
let y;
y = +x;

if ( y % 2 == 0){
    alert('Ваше значение Четное число : ' + y);
}


else if (y % 2 !==  0){
    alert('Ваше значение Нечетное число : ' + y);
}

else if (typeof (y) == 'number') {
    alert('Упс вы ошиблись, Ваше значение : ' +y);
}
   

