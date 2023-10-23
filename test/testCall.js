/**
 * .call(): Phương thức .call() gọi một hàm và gán ngữ cảnh this cho một giá trị cụ thể.
 * Cú pháp .call(thisArg, arg1, arg2, ...) cho phép bạn truyền giá trị this và các tham số cho hàm
 * */

const obj = {
    name: 'John',
    greet: function(message) {
        console.log(`${message}, my name is ${this.name}`);
    }
};
// call immediate
obj.greet.call(obj, 'Hello'); // Output: Hello, my name is John