const MMSLS = ["https://www.maimemo.com/share/page?uid=28382088&pid=bf8ad7805795c8c74e8c15d88127d1a1&tid=da83bb2a9f4b634e5f41a972fe8684aa",]
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
