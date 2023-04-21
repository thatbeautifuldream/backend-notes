class MergeSort {
    constructor() {
        this.name = 'MergeSort';
    }
    sort(array) {
        if (array.length <= 1) {
            return array;
        }
        const middle = Math.floor(array.length / 2);
        const left = array.slice(0, middle);
        const right = array.slice(middle);
        return this.merge(this.sort(left), this.sort(right));
    }
    merge(left, right) {
        let result = [];
        let indexLeft = 0;
        let indexRight = 0;
        while (indexLeft < left.length && indexRight < right.length) {
            if (left[indexLeft] < right[indexRight]) {
                result.push(left[indexLeft++]);
            }
            else {
                result.push(right[indexRight++]);
            }
        }
        return result.concat(left.slice(indexLeft)).concat(right.slice(indexRight));
    }
}

module.exports = MergeSort;