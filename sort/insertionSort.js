function insertionSort(nums) {
  for (let unsorted = 1; unsorted <= nums.length - 1; unsorted++) {
    //loop over unsorted sublist
    let temp = nums[unsorted];
    let indexToInsertTemp;
    for (let sorted = unsorted - 1; sorted >= 0; sorted--) {
      //loop over sorted sublist
      if (temp < nums[sorted]) {
        nums[sorted + 1] = nums[sorted];
        indexToInsertTemp = sorted;
      } else {
        break;
      }
    }

    nums[indexToInsertTemp] = temp;
  }
  return nums;
}
