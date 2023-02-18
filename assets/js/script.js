// page url change function
document.getElementById('blog-btn').addEventListener('click', function(){
    location.href = 'blog.html';
})

// Triangle Calc Function
document.getElementById('calculate-btn-1').addEventListener('click', function(){
    const triValueOne = inputValue('shape-tri-1');
    const triValueTwo = inputValue('shape-tri-2');
    
    const triArea = areaCalculatorOne(triValueOne, triValueTwo, 0.5);

    resultPublish('Triangle', triArea);

})
// Rectangle Calc Function
document.getElementById('calculate-btn-2').addEventListener('click', function(){
    const recValueOne = inputValue('shape-rec-1');
    const recValueTwo = inputValue('shape-rec-2');
    
    const recArea = areaCalculatorTwo(recValueOne, recValueTwo);

    resultPublish('Rectangle', recArea);

})
// Parallelogram Calc Function
document.getElementById('calculate-btn-3').addEventListener('click', function(){
    const paraValueOne = inputValue('shape-par-1');
    const paraValueTwo = inputValue('shape-par-2');
    
    const paraArea = areaCalculatorTwo(paraValueOne, paraValueTwo);

    resultPublish('Parallelogram', paraArea);

})
// Rhombus Calc Function
document.getElementById('calculate-btn-4').addEventListener('click', function(){
    const rombValueOne = inputValue('shape-romb-1');
    const rombValueTwo = inputValue('shape-romb-2');
    
    const rombArea = areaCalculatorOne(rombValueOne, rombValueTwo, 0.5);

    resultPublish('Rhombus', rombArea);

})
// Pentagon Calc Function
document.getElementById('calculate-btn-5').addEventListener('click', function(){
    const pentValueOne = inputValue('shape-pent-1');
    const pentValueTwo = inputValue('shape-pent-2');
    
    const pentArea = areaCalculatorOne(pentValueOne, pentValueTwo, 0.5);

    resultPublish('Pentagon', pentArea);

})
document.getElementById('calculate-btn-6').addEventListener('click', function(){
    const ellipseValueOne = inputValue('shape-ellipse-1');
    const ellipseValueTwo = inputValue('shape-ellipse-2');
    
    const ellipseArea = areaCalculatorOne(ellipseValueOne, ellipseValueTwo, 3.1416);

    resultPublish('Ellipse', ellipseArea);

})

// Conversion Of CM To Meter
// const convertBtns = document.getElementsByClassName('convert-btn');
// for(const button = 0; button < convertBtns.length; button++){
//     button.addEventListener('click', function(e){
//         const currentBtn = e.target;
//         const currentResult = e.target.parentNode.previousSibling.firstElementChild;
//         console.log(currentResult);
//     })
// }