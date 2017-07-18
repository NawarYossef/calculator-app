/* global $ */
/* global Resolve */
// display of large numbers on screen
"use strict";

let input = [];
let screenOutput = '';

class Calculator extends Resolve {

  init(){
    this.initializeScreen();
    this.collectInput();
    this.inputClear();
    this.allClear();
    this.clearEntry();
    this.plusMinusComb();
    this.firstInputOperators();
    this.allOperatorComb();
    this.multipleDecimalInput();
    this.operatorDecimalComb();
    this.equalOperatorComb();
    this.multipleZeroInput();
    this.multZeroAfterOperator();
    this.displayScreen();
    this.deleteEqualSign();
    this.operatorConvertion();
    this.calculateExpression();
    this.displayTotal();
  }

  collectInput() {
    $(document).ready(function() {
      $("a").click(function() {
        input.push($(this).text());
      });
    });
  }

  displayScreen() {
    $(document).ready(function() {
      $("a").click(function() {
        $("#display").text(input.join(""));
      });
    });
  }

  operatorConvertion() {
    $(document).ready(function() {
      $("#evaluate").click(function() {
      input = input.join("").replace("x", "*").split('');
      });
    });
  }

  // delete '=' operator from input before evaluating expression. Otherwise, passing an expression  with  '=' to eval() returns an error.
  deleteEqualSign() {
    let that = this
    $(document).ready(function() {
      $("#evaluate").click(function() {
        that.lastInputDelete();
      });
    });
  }

  calculateExpression() {
    $(document).ready(function() {
      $("#evaluate").click(function() {
        screenOutput = eval(input.join(""));
      });
    });
  }

  displayTotal() {
    let that = this
    $(document).ready(function() {
      $("#evaluate").click(function() {
        $("#display").text(screenOutput);
        // calling function to reset values for new operation
        that.resetForNewOperation();
      });
    });
  }

  // if evaluated result is too large then screen should allow for horizontal scroll


  resetForNewOperation() {
    input = [];
    screenOutput = '';
  }

  initializeScreen() {
    $(document).ready(function() {
        $("#display").text("0");
    });
  }

  inputClear() {
    $(document).ready(function() {
      $("#delete-all").click(function() {
        input = [];
        screenOutput = '';
      });
    });
  }

  // apply AC button
  allClear() {
    let that = this
    $(document).ready(function() {
      $("#delete-all").click(function() {
        that.initializeScreen();
      });
    });
  }

  // apply CE button in the middle of an expression
  clearEntry() {
    let that = this
    $(document).ready(function() {
      $("#back-space").click(function() {
        // delete "CE" value then delete last number/operator input.
        if (input.length === 2) {
          that.initializeScreen();
          that.resetForNewOperation();
        } else {
            that.twoLastInputsDelete();
        }
      });
    });
  }
}

let app = new Calculator()
app.init()









