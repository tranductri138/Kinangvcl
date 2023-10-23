/**
 * .bind(): Phương thức .bind() tạo ra một bản sao của hàm và gán ngữ cảnh this cho một giá trị cụ thể.
 * Khi sử dụng .bind(), bạn có thể chuyển đối tượng cụ thể để nó trở thành giá trị this của hàm.
 * */
const obj = {
    name: 'John',
    greet: function() {
        console.log(`Hello, my name is ${this.name}`);
    }
};
//bind can them mot step to assign
const boundGreet = obj.greet.bind(obj);
boundGreet(); // Output: Hello, my name is John