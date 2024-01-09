/**
 * link: https://leetcode.com/problems/teemo-attacking/description/
 * meaning duration be a time kieu so lan ma trong round co the danh ma mu` trong so s day
 * con timeSeries se la nhung lan danh
 * */

/**
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */
const findPoisonedDuration = (timeSeries = [], duration) => {
    if (!timeSeries.length || duration <= 0) {
        return 0
    }

    let total = 0

    for (let i = 0; i < timeSeries.length; i ++) {
        const temp = Math.min(timeSeries[i + 1] - timeSeries[i], duration)
        if (!isNaN(temp)) {
            total += temp
        }
    }

    total += duration
    return total
}

const case1 = {
    timeSeries: [ 1, 4 ],
    duration: 2
}
const resCase1 = findPoisonedDuration(case1.timeSeries, case1.duration) // 2
console.log({ resCase1 })