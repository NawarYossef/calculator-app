/* global $ */
/* global input */


"use strict";
class Resolve {

  lastInputDelete() {
    input.pop();
  }

  twoLastInputsDelete() {
    input.pop();
    input.pop();
  }

  secondToLastInputDelete() {
    input.splice(input.length - 2, 1);
  }

  firstInputOperators() {
    let that = this
    $(document).ready(function() {
      $("a").click(function() {

        if (input.join("").match(/^[(x|\/)]/g)) {
          that.lastInputDelete();
          that.initializeScreen();
        } else if (input.join("").match(/^[(+|\-|x|\/)][(+|\-|x|\/)]/g)) {
           that.secondToLastInputDelete();
        }
      });
    });
  }

  allOperatorComb() {
    let that = this
    $(document).ready(function() {
      $("a").click(function() {

        if (input.join("").match(/[0-9][(x|\/)][(+|x|\/)]/g)) { //  resolve input "23 x +" to output "23 +"
          that.secondToLastInputDelete();
        } else if (input.join("").match(/[0-9][(x|\/)][(\-)][(x|\/)]/g)) { //  prevent an input like "3 x - /"  but not "3 x -4". Insure that last input is a digit
           that.twoLastInputsDelete();
        } else if (input.join("").match(/[0-9][(+|\-)][(x|\/)]/g)) {
           that.secondToLastInputDelete();
        } else if (input.join("").match(/[(x|\/)][(\-)][(\-|+)]/g)) {
           that.lastInputDelete();
        }
      });
    });
  }

  equalOperatorComb() {
    let that = this
    $(document).ready(function() {
      $("a").click(function() {

        if (input.join("").match(/[0-9][(x)|(\/)|(+)|(\-)][(=)]/g)) {
          that.lastInputDelete()
        }
        // } else if (input.join("").match(/[0-9][(x)][0-9][(=)]/g)){
        //   that.lastInputDelete()
        // }
      });
    });
  }

  plusMinusComb() {
    let that = this
    $(document).ready(function() {
      $("a").click(function() {

        if (input.join("").match(/[0-9][(+|\-)][(+|\-)]/g)) {
         that.secondToLastInputDelete();
        } else if (input.join("").match(/[0-9][(+|\-)][(+|\-)]/g)) {
          that.secondToLastInputDelete();
        }
      });
    });
  }

  // Although expressions like ".+0=" display an "Error" message in some calculators, I prefer for it to not display any words. Instead, it displays a decimal point.
  operatorDecimalComb() {
    let that = this
   $(document).ready(function() {
      $("a").click(function() {

        if (input.join("").match(/[\.][(\-|+|x|\/|=)]/g)) {
          that.lastInputDelete();
        } else if (input.join("").match(/^[(\-|+|x|\/)][\.][=]/g)) {
            that.lastInputDelete();
        }
      });
   });
  }

  multipleDecimalInput() {
    let that=  this
    $(document).ready(function() {
       $("a").click(function() {

        if (input.join("").match(/[\.][\.]/g) || input.join("").match(/(\.)(\d+)(\.)/g)) {
          that.lastInputDelete();
        }
       });
    });
  }

  multipleZeroInput() {
    let that = this
    $(document).ready(function() {
      $("a").click(function() {
        // if first input is zero and second input is a non-zero number, then replace zero with number .
        if (input.join("").match(/^[0][0-9]/g) || input.join("").match(/[(\-|+|x|\/)][0][1-9]/g)) {
          that.secondToLastInputDelete()
        }
      });
    });
  }

  multZeroAfterOperator() {
    let that = this
    $(document).ready(function() {
      $("a").click(function() {

        if (input.join("").match(/[(\-|=|+|x|\/)][0][0]/g)) {
          that.lastInputDelete();
        }
      });
    });
  }
}

