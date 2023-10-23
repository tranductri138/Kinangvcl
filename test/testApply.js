/**
 * .apply(): Phương thức .apply() gọi một hàm và gán ngữ cảnh this cho một giá trị cụ thể, tương tự như .call().
 * Tuy nhiên, .apply() nhận một mảng các đối số thay vì các đối số riêng lẻ.
 * Cú pháp .apply(thisArg, [arg1, arg2, ...])
 * */

const obj = {
    name: 'John',
    greet: function(message , a) {
        console.log(`${message}, my name is ${this.name}`);
    }
};
// a o day la Alo la param 2

// call immediate cho mot array
obj.greet.apply(obj, ['Hello' , 'Alo']); // Output: Hello, my name is John