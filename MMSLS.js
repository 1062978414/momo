const MMSLS = ["https://www.maimemo.com/share/page?uid=28382088&pid=4ef7054c9e2a4b9bca8395455ec95d16&tid=25b8fe6e340ffce875cb5a8df544e7fb",]
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
