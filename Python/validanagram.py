def isAnagram(s, t):
    """
    :type s: str
    :type t: str
    :rtype: bool
    """
    # return Counter(s) == Counter(t)
    if len(s) != len(t): return False
    countS, countT = {}, {}

    for i in range(len(s)):
        countS[s[i]] = 1 + countS.get(s[i], 0)
        countT[t[i]] = 1 + countT.get(t[i], 0)
    for c in countS:
        if countS[c] != countT.get(c):
            return False
    return True

s = "anagram"
t="nagaram"
print(isAnagram(s, t))