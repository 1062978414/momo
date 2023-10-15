const MMSLS = ["https://www.maimemo.com/share/page?uid=28382088&pid=a8f9bccd031e902f2cccc869e37bbbb6&tid=df84639d86c539ecf180daa9dfba7428",]
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
