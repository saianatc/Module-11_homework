function countDown(n) {
    let arrow = [];
    if(n > 0){
        while (n !==0) {
            arrow.push(n);
            n--
        }
    }
    else if (n < 0){
        while (n !==0){
            arrow.push(n);
            n++
        }
    }
    else {
        arrow.push(n);
    }
    let string = arrow.join("");
    return string
}