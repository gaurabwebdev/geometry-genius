function inputValue (x){
    const element = document.getElementById(x);
    const value = parseFloat(element.value).toFixed(2);
    if(value <= 0 || isNaN(value) === true){
        return alert('Invalid Input');
    } else {
        return value;
    }
}

function areaCalculatorOne(x, y, z){
    const area = parseFloat(z * x * y).toFixed(2);
    return area;
}

function areaCalculatorTwo(x, y){
    const area = parseFloat(x * y).toFixed(2);
    return area;
}

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
                cm<sup>2</sup>
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

