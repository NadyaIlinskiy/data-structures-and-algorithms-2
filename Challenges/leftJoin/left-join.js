'use strict'

const leftJoin = (h1, h2) => {
    let kk = h1.keys()
    let res = []
    kk.forEach(k => {
        let r = [k, h1.get(k), h2.get(k)]
        res.push(r)
    })
    return res;
}

