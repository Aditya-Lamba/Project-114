function setup()
{
    canvas = createCanvas(300, 300);
    canvas.center();
}

function take_snapshot()
{
    save('My Filtered Image.png');
}