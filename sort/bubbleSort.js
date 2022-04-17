function bubbleSort(nums) {
  if (nums.length === 0) return nums;
  let sorted = false;
  while (!sorted) {
    let sortEvenOnce = false;
    for (let i = 0; i <= nums.length - 2; i++) {
      let curr = i;
      let next = i + 1;
      if (nums[curr] > nums[next]) {
        sortEvenOnce = true;
        [nums[curr], nums[next]] = [nums[next], nums[curr]]
      }
    }

    if (!sortEvenOnce) {
      sorted = true;
    }
  }
  return nums;
}
