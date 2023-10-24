const MMSLS = ["https://www.maimemo.com/share/page?uid=28382088&pid=87dd8eb8e58d0a5310867ca1388d0dc0&tid=3e43776a2f9e60bbfae769f8d03832af",]
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
