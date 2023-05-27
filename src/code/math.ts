/**
 * Calculates the progress made towards a goal, given the current progress.
 * 
 * @param {number} current - The current progress towards the goal.
 * @param {number} goal - The required progress towards the goal.
 * @returns {number} The progress made towards the goal, as a percentage between 0 and 1.
 * @throws {Error} Will throw an error if the current or goal values are not numbers or are negative.
 */
function calculateProgress(current: number, goal: number): number {
    if (typeof current !== 'number' || current < 0) {
      throw new Error('Current progress must be a positive number.');
    }
  
    if (typeof goal !== 'number' || goal <= 0) {
      throw new Error('Goal progress must be a positive number and greater than 0.');
    }
  
    return current / goal;
  }
  
  /**
   * Clamps a value between a minimum and maximum value.
   * @param {number} value - The value to be clamped.
   * @param {number} min - The minimum value that 'value' can be.
   * @param {number} max - The maximum value that 'value' can be.
   * @returns {number} - The clamped value.
   * @throws Will throw an error if 'value', 'min', or 'max' is not a number.
   */
  const clamp = (value: number, min: number, max: number): number => {
    if (typeof value !== 'number' || typeof min !== 'number' || typeof max !== 'number') {
      throw new Error('Invalid input. Arguments must be numbers');
    }
  
    return Math.min(Math.max(value, min), max);
  };
  
  /**
   * Calculates the average of an array of numbers
   * @param {Array} nums - The array of numbers to calculate the average for
   * @returns {number} The average of the numbers in the array
   * @throws {Error} The argument must be an array. The array must contain at least one element.
   */
  const getAverage = (nums: number[]): number => {
    if (!Array.isArray(nums)) {
      throw new Error('The argument must be an array.');
    }
    if (nums.length === 0) {
      throw new Error('The array must contain at least one element.');
    }
  
    const sum = nums.reduce((acc, curr) => acc + curr, 0);
    return sum / nums.length;
  };
  
  /**
   * Normalizes an array of numbers so that they fall within a specific range
   * @param {Array} nums - The array of numbers to normalize
   * @param {number} [min=0] - The minimum value of the new range
   * @param {number} [max=1] - The maximum value of the new range
   * @returns {Array} The normalized array of numbers
   * @throws {Error} If the input is not an array or if the array is empty
   * @throws {Error} If min is greater than or equal to max
   */
  const normalizeValues = (nums: number[], min = 0, max = 1): number[] => {
    if (!Array.isArray(nums) || nums.length === 0) {
      throw new Error("Input must be a non empty array of numbers");
    }
  
    if (min >= max) {
      throw new Error("Min must be less than max");
    }
  
    const oldMin = Math.min(...nums);
    const oldMax = Math.max(...nums);
  
    return nums.map((num) => {
      return ((num - oldMin) / (oldMax - oldMin)) * (max - min) + min;
    });
  };
  
  export {
    calculateProgress,
    clamp,
    getAverage,
    normalizeValues
  };
  