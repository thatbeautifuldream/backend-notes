class QuickSort {
    constructor() {
        this.arr = [];
    }

    sort(arr) {
        this.arr = arr;
        this._sort(0, arr.length - 1);
        return this.arr;
    }

    _sort(low, high) {
        if (low < high) {
            let pivot = this._partition(low, high);
            this._sort(low, pivot - 1);
            this._sort(pivot + 1, high);
        }
    }

    _partition(low, high) {
        let pivot = this.arr[high];
        let i = low - 1;
        for (let j = low; j < high; j++) {
            if (this.arr[j] <= pivot) {
                i++;
                this._swap(i, j);
            }
        }
        this._swap(i + 1, high);
        return i + 1;
    }

    _swap(i, j) {
        let temp = this.arr[i];
        this.arr[i] = this.arr[j];
        this.arr[j] = temp;
    }
}

module.exports = QuickSort;