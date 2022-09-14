function reverseArray(arr) {
    let temp, beg = 0, end = arr.length - 1;
    while (beg < end) {
        temp = arr[beg];
        arr[beg] = arr[end];
        arr[end] = temp;
        beg++;
        end--;
    }
    return arr;

}
var t = [1, 2, 3, 4];
t = reverseArray(t);
console.log(t);
