const MMSLS = ["https://www.maimemo.com/share/page?uid=28382088&pid=29e47592f1b4543b3f79569a12264bf4&tid=4d34c325be8744de841b60028d44b4b5",]
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
