// Function to find the minimum element in a sorted rotated array
function findMin(nums) {
    // Initialize two pointers: left and right
    let left = 0;
    let right = nums.length - 1;
  
    // If the array is not rotated, return the first element
    if (nums[left] <= nums[right]) return nums[left];
  
    // Perform binary search to find the minimum element
    while (left <= right) {
      // Find the middle index
      const mid = Math.floor((left + right) / 2);
  
      // Check if the middle element is the minimum element
      if (nums[mid] > nums[mid + 1]) {
        return nums[mid + 1]; // Found the minimum element
      }
  
      // Check if the middle element is less than the previous element (rotate point)
      if (nums[mid] < nums[mid - 1]) {
        return nums[mid]; // Found the minimum element
      }
  
      // If the middle element is greater than the leftmost element, search in the right half
      if (nums[mid] >= nums[left]) {
        left = mid + 1;
      } else {
        // If the middle element is less, search in the left half
        right = mid - 1;
      }
    }
  
    // Fallback return value (though the algorithm guarantees the minimum will be found)
    return -1;
  }
  
  // Example usage:
  console.log(findMin([3, 4, 5, 1, 2])); // Output: 1
  console.log(findMin([4, 5, 6, 7, 0, 1, 2])); // Output: 0
  console.log(findMin([11, 13, 15, 17])); // Output: 11

  
/**
 * Time Complexity: O(log n) since we use binary search and reduce the search space by half in each iteration.
 * 
 * Space Complexity: O(1) as the space usage remains constant with only a few variables used.
 **/  