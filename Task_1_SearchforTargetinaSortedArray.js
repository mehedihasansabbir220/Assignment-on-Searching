// Function to search for a target in a sorted array using binary search
function search(nums, target) {
    // Initialize two pointers: left and right
    let left = 0;
    let right = nums.length - 1;
  
    // Continue searching while the left pointer is less than or equal to the right pointer
    while (left <= right) {
      // Find the middle index
      const mid = Math.floor((left + right) / 2);
  
      // Check if the middle element is the target
      if (nums[mid] === target) {
        return mid; // Target found, return the index
      } else if (nums[mid] < target) {
        // If target is greater than the mid element, search in the right half
        left = mid + 1;
      } else {
        // If target is smaller than the mid element, search in the left half
        right = mid - 1;
      }
    }
  
    // If target is not found, return -1
    return -1;
  }
  
  // Example usage:
  console.log(search([-1, 0, 3, 5, 9, 12], 9)); // Output: 4
  console.log(search([-1, 0, 3, 5, 9, 12], 2)); // Output: -1

  /**
   * 
   * Time Complexity: O(log n) since we are using binary search and reducing the search space by half in each iteration.
   * 
   * Space Complexity: O(1) because we are only using a few variables (constant space).
   */