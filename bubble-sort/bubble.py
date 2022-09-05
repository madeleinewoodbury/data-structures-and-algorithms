import time

def bubble_sort(nums):
    while(True):
        swaps = 0
        for idx, n in enumerate(nums):
            if idx == len(nums) - 1:
                break;
            if n > nums[idx + 1]:
                temp = nums[idx + 1]
                nums[idx + 1] = n
                nums[idx] = temp 
                swaps += 1
        
        if swaps == 0:
            break;
    
    return nums


nums = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1];
print(f'Unsorted: {nums}');

start = time.time()
sorted_nums = bubble_sort(nums)
elapsed = time.time() - start

print(f'Sorted: {sorted_nums}\nTime: {elapsed}');