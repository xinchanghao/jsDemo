/**
 * @description:两数之和
 * @param {type}
 * @return: []
 */
var twoSum = function(nums, target) {
  var res = [];
  for (let i = 0; i < nums.length; i++) {
    const index = nums.findIndex(
      (item, s) => item == target - nums[i] && s != i
    );
    if (index > i) {
      res = [i, index];
    }
  }
  return res;
};

// twoSum([-1, -2, -3, -4, -5], -8);
