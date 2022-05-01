// AB행렬 객체

class MatrixMake {
  constructor() {
     this.pop_up = document.querySelector('.pop_up');
     this.alert_text = document.querySelector('.alert_text');
     this.x_btn = document.querySelector('.x_btn');
     this.input_del_str = document.querySelectorAll('input');
  }

  // a_b행렬 만들기

  a_b_matrix(result, x, y) {
     if (0 < x && x < 8 && 0 < y && y < 8) {
        result.innerHTML = '';
        for (let i = 0; i < x; i++) {
           for (let j = 0; j < y; j++) {
              result.innerHTML += '<input  maxlength="3"  class="value_box" type="text"/>';
           }
           result.innerHTML += '<br>';
        }
     } else {
        this.pop_up.style.display = 'block';
        this.alert_text.innerHTML = ' 숫자를 1~7까지 입력하세요.';
        result.innerHTML = '';
        this.x_btn.addEventListener('click', () => {
           this.pop_up.style.display = 'none';
        });
     }
     const value_box = document.querySelectorAll('.value_box');
     for (let i = 0; i < value_box.length; i++) {
        value_box[i].addEventListener('click', (e) => {
           e.target.value = '0';
        });
        value_box[i].addEventListener('focus', (e) => {
           e.target.value = '0';
        });
        value_box[i].addEventListener('keyup', (e) => {
           e.target.value = e.target.value.replace(/[^-,^0-9]/gi, '');
           if (e.keyCode == 8 || e.keyCode == 46) {
              value_box[i].setAttribute('maxlength', '3');
           } else if (e.keyCode == 109 || e.keyCode == 189) {
              value_box[i].setAttribute('maxlength', '4');
           }
        });
     }
  }

  // a_b행렬 랜덤값 만들기

  a_b_random(result, x, y) {
     if (0 < x && x < 8 && 0 < y && y < 8) {
        result.innerHTML = '';
        for (let i = 0; i < x; i++) {
           for (let j = 0; j < y; j++) {
              result.innerHTML += `<input  maxlength="3" class="value_box" type="text" value=${
                 Math.floor(Math.random() * (99 - (-99 + 1))) + -99
              } />`;
           }
           result.innerHTML += '<br>';
        }
     }
     const value_box = document.querySelectorAll('.value_box');
     for (let i = 0; i < value_box.length; i++) {
        value_box[i].addEventListener('click', (e) => {
           e.target.value = '0';
        });
        value_box[i].addEventListener('focus', (e) => {
           e.target.value = '0';
        });
        value_box[i].addEventListener('keyup', (e) => {
           e.target.value = e.target.value.replace(/[^-,^0-9]/gi, '');
           if (e.keyCode == 8 || e.keyCode == 46) {
              value_box[i].setAttribute('maxlength', '3');
           } else if (e.keyCode == 109 || e.keyCode == 189) {
              value_box[i].setAttribute('maxlength', '4');
           }
        });
     }
  }

  // 리셋되는 부분

  reset_area(a_area, b_area, r_area) {
     a_area.innerHTML = '';
     b_area.innerHTML = '';
     r_area.innerHTML = '';
  }
}

//행렬 연산객체

class MatrixCal {
  constructor() {
     this.comma = '';
     this.pop_up = document.querySelector('.pop_up');
     this.alert_text = document.querySelector('.alert_text');
     this.x_btn = document.querySelector('.x_btn');
  }

  // A,b행렬 더하기 부분

  plus_area(result, x1, y1, x2, y2, a_val, b_val) {
     if (x1 != x2 || y1 != y2) {
        result.innerHTML = '';
        this.pop_up.style.display = 'block';
        this.alert_text.innerHTML = '행 과 열이 같아야 더하기 가능합니다.';
        this.x_btn.addEventListener('click', () => {
           this.pop_up.style.display = 'none';
           result.innerHTML = '';
        });
     } else {
        result.style.visibility = 'visible';
        result.innerHTML = '';
        for (let i = 1; i <= x1 * y1; i++) {
           // 3*3행렬때문에 x*y행렬
           this.comma = parseInt(a_val[i - 1].value) + parseInt(b_val[i - 1].value);
           if (a_val[i - 1].value == '' || b_val[i - 1].value == '') {
              result.style.visibility = 'hidden';
              this.pop_up.style.display = 'block';
              this.alert_text.innerHTML = '빈칸없이 숫자만 입력해주세요.';
              this.x_btn.addEventListener('click', () => {
                 this.pop_up.style.display = 'none';
              });
           }
           result.innerHTML +=
              '<input type="text" class="value_box " value = ' + this.comma.toLocaleString('kr') + ' ""  readonly/>'; // value들 i=0번부터시작해야되
           if (i % y1 == 0) {
              // 5*4면 4만큼 띄어줘야되기때문에 b값을 나눳을때 0이나오면 띄어준다.
              result.innerHTML += '<br>';
           }
        }
     }
  }

  // A,b행렬 빼기 부분

  minus_area(result, x1, y1, x2, y2, a_val, b_val) {
     if (x1 != x2 || y1 != y2) {
        result.innerHTML = '';
        this.pop_up.style.display = 'block';
        this.alert_text.innerHTML = '행 과 열이 같아야 빼기 가능합니다.';
        this.x_btn.addEventListener('click', () => {
           this.pop_up.style.display = 'none';
           result.innerHTML = '';
        });
     } else {
        result.style.visibility = 'visible';
        result.innerHTML = '';
        for (let i = 1; i <= x1 * y1; i++) {
           // 3*3행렬때문에 x*y행렬
           // let alert_chr = /^-,^0-9/;
           // if (alert_chr.test(a_val[i - 1].value) || alert_chr.test(b_val[i - 1].value)) {
           // result.style.visibility = 'hidden';
           // this.pop_up.style.display = "block";
           // this.alert_text.innerHTML = "숫자만 입력해주세요.";
           // this.x_btn.addEventListener('click', () => {
           // this.pop_up.style.display = "none";
           // })
           // }
           this.comma = parseInt(a_val[i - 1].value) - parseInt(b_val[i - 1].value);
           if (a_val[i - 1].value == '' || b_val[i - 1].value == '') {
              result.style.visibility = 'hidden';
              this.pop_up.style.display = 'block';
              this.alert_text.innerHTML = '빈칸없이 숫자만 입력해주세요.';
              this.x_btn.addEventListener('click', () => {
                 this.pop_up.style.display = 'none';
              });
           }
           result.innerHTML +=
              '<input type="text" class="value_box " value = ' + this.comma.toLocaleString('kr') + ' ""  readonly/>'; // value들 i=0번부터시작해야되
           if (i % y1 == 0) {
              // 5*4면 4만큼 띄어줘야되기때문에 b값을 나눳을때 0이나오면 띄어준다.
              result.innerHTML += '<br>';
           }
        }
     }
  }

  // A값을 받아와서 크기에맞게 이중배열만들기

  numArea1(a_val, x, y) {
     const arr1 = [];
     let real_val = [];
     for (let i = 0; i < a_val.length; i++) {
        real_val.push(a_val[i].value);
     }
     for (let i = 0; i < x; i++) {
        let hang_val = [];
        for (let j = 0; j < y; j++) {
           hang_val.push(real_val.shift());
        }
        arr1.push(hang_val);
     }
     return arr1;
  }

  // B값을 받아와서 크기에맞게 이중배열만들기

  numArea2(b_val, x, y) {
     let arr2 = [];
     let real_val = [];
     for (let i = 0; i < b_val.length; i++) {
        real_val.push(b_val[i].value);
     }
     for (let i = 0; i < x; i++) {
        let hang_val = [];
        for (let j = 0; j < y; j++) {
           hang_val.push(real_val.shift());
        }
        arr2.push(hang_val);
     }
     return arr2;
  }

  // AB값받아와서 조건이 안맞으면 경고창 및 AB곱하기행렬

  multy_area(num1, num2, result, c_val) {
     if (num1[0].length == num2.length) {
        result.style.visibility = 'visible';
        result.innerHTML = '';
        let multy_val = [];
        for (let i = 0; i < num1.length; i++) {
           let row = [];
           for (let j = 0; j < num2[0].length; j++) {
              let row_one_value = 0;
              for (let k = 0; k < num2.length; k++) {
                 row_one_value += parseInt(num1[i][k]) * parseInt(num2[k][j]);
                 this.comma = row_one_value;
                 if (num1[i][k] == '' || num2[k][j] == '') {
                    result.style.visibility = 'hidden';
                    this.pop_up.style.display = 'block';
                    this.alert_text.innerHTML = '빈칸없이 숫자만 입력해주세요.';
                    this.x_btn.addEventListener('click', () => {
                       this.pop_up.style.display = 'none';
                    });
                 }
              }
              result.innerHTML +=
                 '<input class="value_box"  readonly type="text" value =  ' + this.comma.toLocaleString('kr') + '   >';
              row.push(row_one_value);
           }
           result.innerHTML += '<br>';
           multy_val.push(row);
        }
     } else if (num1[0].length != num2.length) {
        result.innerHTML = '';
        this.pop_up.style.display = 'block';
        this.alert_text.innerHTML = 'A의 열과 B의 행이 일치해야 곱셈이 가능합니다.';
        this.x_btn.addEventListener('click', () => {
           this.pop_up.style.display = 'none';
           result.innerHTML = '';
        });
     }
  }
}

(function main() {
  let My_Matrix = new MatrixMake();
  let My_Matrix_cal = new MatrixCal();

  this.addEventListener('click', (e) => {
     let a_matrix = document.querySelectorAll('.a_matrix');
     let a_row = a_matrix[0].value;
     let a_column = a_matrix[1].value;
     let a_result = document.querySelector('.a_result');
     let b_matrix = document.querySelectorAll('.b_matrix');
     let b_row = b_matrix[0].value;
     let b_column = b_matrix[1].value;
     let b_result = document.querySelector('.b_result');
     let input_a_val = document.querySelectorAll('.a_result input');
     let input_b_val = document.querySelectorAll('.b_result input');
     let c_result = document.querySelector('.c_result');

     if (e.target.id == 'input_btn') {
        My_Matrix.a_b_matrix(a_result, a_row, a_column);
        My_Matrix.a_b_matrix(b_result, b_row, b_column);
     }
     if (e.target.id == 'random_btn') {
        My_Matrix.a_b_random(a_result, a_row, a_column);
        My_Matrix.a_b_random(b_result, b_row, b_column);
     }
     if (e.target.id == 'reset_btn') {
        My_Matrix.reset_area(a_result, b_result, c_result);
     }
     if (e.target.id == 'plus_btn') {
        My_Matrix_cal.plus_area(c_result, a_row, a_column, b_row, b_column, input_a_val, input_b_val);
     }
     if (e.target.id == 'minus_btn') {
        My_Matrix_cal.minus_area(c_result, a_row, a_column, b_row, b_column, input_a_val, input_b_val);
     }
     if (e.target.id == 'multy_btn') {
        My_Matrix_cal.multy_area(
           My_Matrix_cal.numArea1(input_a_val, a_row, a_column),
           My_Matrix_cal.numArea2(input_b_val, b_row, b_column),
           c_result
        );
     }
  });
})();