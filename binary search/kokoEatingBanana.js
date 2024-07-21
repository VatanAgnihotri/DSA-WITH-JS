// Koko loves to eat bananas. There are n piles of bananas, the ith pile has piles[i] bananas. The guards have gone and will come back in h hours.

// Koko can decide her bananas-per-hour eating speed of k. Each hour, she chooses some pile of bananas and eats k bananas from that pile. If the pile has less than k bananas, she eats all of them instead and will not eat any more bananas during this hour.

// Koko likes to eat slowly but still wants to finish eating all the bananas before the guards return.

// Return the minimum integer k such that she can eat all the bananas within h hours.

// Example 1:

// Input: piles = [3,6,7,11], h = 8
// Output: 4
// Example 2:

// Input: piles = [30,11,23,4,20], h = 5
// Output: 30
// Example 3:

// Input: piles = [30,11,23,4,20], h = 6
// Output: 23

// Constraints:

// 1 <= piles.length <= 104
// piles.length <= h <= 109
// 1 <= piles[i] <= 109

var minEatingSpeed = function (piles, h) {
  let right = Math.max(...piles);
  let left = 1;
  let k = right;
  while (left <= right) {
    let m = Math.floor((left + right) / 2);
    let hour = 0;
    for (let pile of piles) {
      hour += Math.ceil(pile / m);
    }

    if (hour <= h) {
      right = m - 1;
      k = Math.min(m, k);
    } else if (hour >= h) {
      left = m + 1;
    }
  }
  return k;
};
