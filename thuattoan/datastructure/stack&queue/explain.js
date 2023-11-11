/**
 * Stack can base on
 * Queue can base on
 * Arrays or Linklist
 * */

/**
 * so about side technique
 * Array will look up faster
 * meaning : array se co 1 do dai nhat dinh neu nhu size tang vuot qua no phai tang array or nguoc lai
 * neu nhu remove an element array do cung phai xoa mot phan tu nhung array no se khong the thay doi va
 * create a new array
 * va them mot dieu nua vi array co index ben trong nen neu nhu ban xoa mot phan tu chung ta phai dich toan bo
 * data len 1 index ko phu hop vs queue
 * vd :
 * step1 : 0 tim - 1mat - 2tris -3hinh  remove tim
 * step2 : 0 empty - 1mat - 2tris - 3hinh
 * step3 : 0mat - 1tris - 2hinh
 * overcomplicated
 *
 * khac vs linklist vd:
 * step1   head          tail
 *          tri hinh mat tim  remove tim
 *          head     tail
 *          tri hinh mat
 * easier
 * but Linklist has dynamic memory
 * meaning : link list co the chi toi bat ky node nao nen ko bi bo buoc bo nho
 * */



/**
 * How dose Js work
 *
 * what is a program
 *  + allocate memory
 *  + parse and execute
 * phan tic syntax va thuc thi code mean read and run code and comment
 *
 *
 * Memory heap la noi allocate memory
 *
 * Call stack se la noi doc va thuc thi code, chinh xac no cho ban biet chay den dong nao trong code
 * Js la mot ngon ngu single thread no se la non-blocking
 * va vs viec ko xu ly da luong no se don gian hoa hon
 *
 * */


//call stack
console.log(1)
setTimeout(()=> {
    console.log(2)
} ,1000)

console.log(3)

//CALL STACK

// WEB API

// CALLBACK QUEUE

// EVENT LOOP

