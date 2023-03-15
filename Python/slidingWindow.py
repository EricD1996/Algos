def maxProfit(prices):
    """
    :type prices: List[int]
    :rtype: int
    """
    maxProfit, l, r = 0, 0, 1
    while r < len(prices):
        if prices[l] < prices[r]:
            profit = prices[r] - prices[l]
            maxProfit = max(profit, maxProfit)
        else :
            l = r
        r += 1
    return maxProfit

print(maxProfit([7,1,5,3,6,4]))