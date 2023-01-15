'use strict';

const binarySearch = (arr, item) => {
	let low = 0;
	let high = arr.length - 1;
	let counter = 0;

	while (low <= high) {
		let mid = Math.ceil((low + high) / 2);
		let guess = arr[mid];
		counter++;

		if (guess === item) {
			return `The item (${item}) index in array is ${mid}. It took ${counter} ${
				counter !== 1 ? 'attemts' : 'attempt'
			} for function to find the item`;
		} else if (guess > item) {
			high = mid - 1;
		} else {
			low = mid + 1;
		}
	}
	return 'Item not found';
};

console.log(binarySearch(array, 221));
