import wepy from '@wepy/core'
import util from './util';
// import md5 from './md5';
import tip from './tip'
import promisify  from '@wepy/use-promisify'
wepy.use(promisify)

const baseUrl = 'http://wx.tj720.com/admin'
const API_SECRET_KEY = 'www.mall.cycle.com'
const TIMESTAMP = util.getCurrentTime()
// const SIGN = md5.hex_md5((TIMESTAMP + API_SECRET_KEY).toLowerCase())

const wxRequest = async(url, params = {}) => {
    tip.loading();
    let data = params.query || {};
    // data.sign = SIGN;
    data.time = TIMESTAMP;
    let res = await wepy.wx.request({
      url: baseUrl + url,
      method: params.method || 'GET',
      data: data,
      header: { 'Content-Type': 'application/json' },
    });
    console.log(222, res)
    tip.loaded();
    return res.data;
};


module.exports = {
  wxRequest
}
