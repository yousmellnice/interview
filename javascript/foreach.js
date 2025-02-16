const arr = [1, 2, 3, 4, 5, 6, 7];
arr.forEach(item => {
    if (item > 4) {
        arr.splice(3, arr.length - 3)
        console.log(arr);
        // return;
    }
    console.log(item);
})

// const deleteArr = [1, 2, 3, 4, 5, 6, 7];
// deleteArr.splice(3, 3)
// console.log(deleteArr);