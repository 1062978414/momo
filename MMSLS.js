const MMSLS = ["https://www.maimemo.com/share/page?uid=28382088&pid=c8f92d63fed8388db0efa043ebf6b614&tid=1bf88d9db51cfcfa15049a762e8952ea",]
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
