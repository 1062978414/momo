const MMSLS = ["https://www.maimemo.com/share/page?uid=28382088&pid=bff049c6fdf967e37e196d843898b611&tid=ef1c9d606b86170bbc49f500f5fdf582",]
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
