const MMSLS = ["https://www.maimemo.com/share/page?uid=28382088&pid=6e98273e7bd3f017cff7291815c0b71e&tid=80207c1c018b63a5a1f84a4dc9d5018d",]
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
