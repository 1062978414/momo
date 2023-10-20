const MMSLS = ["https://www.maimemo.com/share/page?uid=28382088&pid=99d1c2b656596efa4308a3f28eb2ff61&tid=16b0bdead3a8940727aba2bbd6e54cb2",]
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
