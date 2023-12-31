// input value function
function inputValue (x){
    const element = document.getElementById(x);
    const value = parseFloat(element.value).toFixed(2);
    if(value <= 0 || isNaN(value) === true){
        return alert('Invalid Input');
    } else {
        return value;
    }
}

// Area calculator function one

function areaCalculatorOne(x, y, z){
    const area = parseFloat(z * x * y).toFixed(2);
    return area;
}

// Area calculator function two

function areaCalculatorTwo(x, y){
    const area = parseFloat(x * y).toFixed(2);
    return area;
}

// Area Publisher function

function resultPublish(shape, result){
    const resultContainer = document.getElementById('result-list-container');

    const resultItem = document.createElement('li');
    
    if(result<0 || isNaN(result)){
        return alert ('Invalid Input');
    } else {
        resultItem.innerHTML = `
        <p> ${shape}: 
            <span>
                <span class="results"> ${result} </span>
                <span>cm</span>
                <sup>2</sup>
                <div>
                    <button class = "convert-btn btn btn-primary"> 
                    Convert to m 
                    <sup>2</sup>
                    </button>
                </div>
            </span> 
        </p>
        `;
        resultItem.classList.add('result-item');
        resultItem.style.listStyleType = 'higher-alpha';

        resultContainer.appendChild(resultItem);
    }
}

// Conversion Function

function resultConvert(){
    const buttonList = document.getElementsByClassName('convert-btn');
    for (const button of buttonList){
        button.addEventListener('click', function(){
            const currentResultElement = button.parentNode.previousSibling.firstElementChild.childNodes[1];
            let currentResultText = button.parentNode.previousSibling.firstElementChild.childNodes[3];

            const currentResult = (parseFloat(currentResultElement.innerText)).toFixed(2);
            console.log(currentResultElement);
            const newResult = (currentResult * 0.0001).toFixed(2);
            currentResultElement.innerText = newResult;
            currentResultText.innerText = 'm';
        })
    }
}