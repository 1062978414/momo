const MMSLS = ["https://www.maimemo.com/share/page?uid=28382088&pid=e9a60ac0a4030bc7150f99b0cd231005&tid=6879df309125eb0b0266b20ddf81bd75",]
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
