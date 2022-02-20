let ind = 1;
let image_count = 9;
let time_id;
show(ind);

function slide(n) {
    show(ind += n);
}

function show(n) {
    let slider = document.getElementById("image");
    if (n > image_count) {
        ind = 1;
    }
    if (n < 1) {
        ind = image_count;
    }
    slider.src = `./assets/images/${ind}.png`;
    clearInterval(time_id);
    time_id = setInterval(() => slide(1), 3000);
}