function append(number) {
    document.getElementById('result').value += number;
}

function clearResult() {
    document.getElementById('result').value = '';
  }

function appendOps(ops) {
    document.getElementById('result').value += ops;
}

// I'm using eval, but it's for a number value and not a string so I think it's ok
function calc() {
    try {
        const result = eval(document.getElementById('result').value);
        document.getElementById('result').value = result;
    }
    catch (error) {
        document.getElementById('result').value = "Pls stop, I'm broken";
    }
}

function toggle() {
    const curval = document.getElementById('result').value;
    if (curval !== '' && !isNaN(curval)){
        document.getElementById('result').value = parseFloat(curval) * -1;
    }
    else{
        document.getElementById('result').value = "Pls stop, I'm broken";
    }
}

function square() {
    const curval = document.getElementById('result').value;
    if (curval !== '' && !isNaN(curval) && parseFloat(curval) >= 0){
        document.getElementById('result').value = Math.sqrt(parseFloat(curval));
    }
    else{
        document.getElementById('result').value = "Pls stop, I'm broken";
    }
}

function percent() {
    const curval = document.getElementById('result').value;
    if (curval !== '' && !isNaN(curval)){
        document.getElementById('result').value = parseFloat(curval) / 100;
    }
    else{
        document.getElementById('result').value = "Pls stop, I'm broken";
    }
}
