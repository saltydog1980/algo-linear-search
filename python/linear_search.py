from re import X


array_to_search_through = []
for number in range(1, 1001):
    array_to_search_through.append(number)

def linear_search(value_to_find, array_to_search_through):
    if value_to_find not in array_to_search_through:
        return
    else:
        for x in range(len(array_to_search_through)):
            if array_to_search_through[x] == value_to_find:
                return x

def linear_search_global(value_to_find, array_to_search_through):
    ans_list = []
    if value_to_find not in array_to_search_through:
        return
    else:
        for x in range(len(array_to_search_through)):
            if array_to_search_through[x] == value_to_find:
                ans_list.append(x)
        return ans_list