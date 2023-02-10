/** 获取随机数 */
export function getRound(min = 0, max = 1) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
