/**
 * @file
 * @author 何文林
 * @date 2017/9/29
 */

import axios from 'axios'
const baseUrl = ''
  // const apiUrl = 'http://rap.taobao.org/mockjsdata/26934'

class Service {
  getHero() {
    return axios.get(`${baseUrl}/api/hero`)
  }
  getHeroDetail(prams) {
    return axios.post(`${baseUrl}/api/heroDetail`, prams)
  }
  getSkin() {
    return axios.get(`${baseUrl}/api/skin`)
  }
  getVoiceNav() {
    return axios.get(`${baseUrl}/api/voiceNav`)
  }
}

export default new Service()
