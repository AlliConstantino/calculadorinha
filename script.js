let expression = '';

function appendNumber(number) {
    if (expression === '' && number === '0') {
      return;
    }
  
    if (expression === '' || isNaN(expression.slice(-1))) {
      expression += '0';
    }
  
    expression += number;
    document.getElementById('result').value = expression;
  }
  

function appendOperator(operator) {
  expression += operator;
  document.getElementById('result').value = expression;
}

function clearResult() {
  expression = '';
  document.getElementById('result').value = '';
}

function deleteLast() {
  expression = expression.slice(0, -1);
  document.getElementById('result').value = expression;
}

function calculateResult() {
  try {
    const result = eval(expression);
    document.getElementById('result').value = result;
    expression = '';
  } catch (error) {
    document.getElementById('result').value = 'Error';
  }


  
} //end calculateteResult

function calculatePercentage() {
    try {
      const result = eval(expression);
      const percentage = result / 100;
      document.getElementById('result').value = percentage;
      expression = '';
    } catch (error) {
      document.getElementById('result').value = 'Error';
    }
  }
  
