const MMSLS = ["https://www.maimemo.com/share/page?uid=28382088&pid=eeb8eace05d414328b617bdc1e01550c&tid=569c811cf1149860d40008d76e9e8aa6",]
  /**
   * 生成随机数字
   * @param {number} min 最小值（包含）
   * @param {number} max 最大值（不包含）
   */
  function randomNumber(min = 0, max = 100) {
    return Math.min(Math.floor(min + Math.random() * (max - min)), max);
  }
  const MMSL_random = MMSLS[randomNumber(0, MMSLS.length)];
  
  module.exports = {
    MMSL_random
  }
