const MMSLS = ["https://www.maimemo.com/share/page?uid=28382088&pid=57d93b8cd43bd83689631af0de73275b&tid=86ebcda727f6cd03b861552712beec42",]
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
