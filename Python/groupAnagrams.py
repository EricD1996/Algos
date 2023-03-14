from collections import defaultdict
# from collections import Counter
def groupAnagrams(strs):
    """
    :type strs: List[str]
    :rtype: List[List[str]]
    """
    res = defaultdict(list)

    for s in strs:
        ordered_s = ''.join(sorted(s))
        print(ordered_s, s, res)
        res[ordered_s].append(s)
    return res.values()


print(groupAnagrams(["eat","tea","tan","ate","nat","bat"]))