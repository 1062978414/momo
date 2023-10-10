const MMSLS = ["https://www.maimemo.com/share/page?uid=28382088&pid=ac7af1efa2de8c0def073c503af5d892&tid=3adc79dceb9fa21a476708cb22b8a3d7",]
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
