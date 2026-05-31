/**
 * @name 长青SVIP音源(解密版)
 * @description 音源更新，关注微信公众号: 元力菌
 * @version 1.2.0
 * @author SVIP
 * @mail 微信公众号: 元力菌
 * @homepage TZB679
 * @update_url https://13413.kstore.vip/lxmusic/changqing.json
 */

const {
  EVENT_NAMES: g,
  request: h,
  on: a,
  send: i
} = globalThis.lx;
const d = "1.2.0";
const b = "https://13413.kstore.vip/lxmusic/changqing.json";
const c = {
  kg: {
    "128k": "standard",
    "320k": "exhigh",
    flac: "lossless"
  },
  tx: {
    "128k": "standard",
    "320k": "exhigh",
    flac: "lossless"
  },
  wy: {
    "128k": "standard",
    "320k": "exhigh",
    flac: "lossless"
  },
  kw: {
    "128k": "standard",
    "320k": "exhigh",
    flac: "lossless"
  },
  mg: {
    "128k": "standard",
    "320k": "exhigh",
    flac: "lossless"
  }
};
const e = c;
const f = {
  kg: {
    musicUrl(e, a) {
      let b = "";
      const f = e.hash;
      console.log(a, f);
      b = "https://music.haitangw.cc/kgqq1/kg.php?type=mp3&id=" + f + "&level=" + a;
      return new Promise(c => {
        c(b);
      });
    }
  },
  tx: {
    musicUrl(e, a) {
      let b = "";
      const f = e.songmid;
      console.log(a, f);
      b = "http://175.27.166.236/kgqq1/qq.php?type=mp3&id=" + f + "&level=" + a;
      return new Promise(c => {
        c(b);
      });
    }
  },
  wy: {
    musicUrl(e, a) {
      let b = "";
      const f = e.songmid;
      console.log(a, f);
      b = "http://175.27.166.236/wy1/wy.php?type=mp3&id=" + f + "&level=" + a;
      return new Promise(c => {
        c(b);
      });
    }
  },
  kw: {
    musicUrl(e, a) {
      let b = "";
      const f = e.songmid;
      console.log(a, f);
      b = "https://musicapi.haitangw.net/music1/kw.php?type=mp3&id=" + f + "&level=" + a;
      return new Promise(c => {
        c(b);
      });
    }
  },
  mg: {
    musicUrl(e, a) {
      let b = "";
      const f = e.songmid;
      console.log(a, f);
      b = "https://music.haitangw.cc/musicapi1/mg.php?type=mp3&id=" + f + "&level=" + a;
      return new Promise(c => {
        c(b);
      });
    }
  }
};
const j = (e, a) => {
  const f = e.split(".").map(Number);
  const c = a.split(".").map(Number);
  for (let d = 0; d < Math.max(f.length, c.length); d++) {
    const e = f[d] || 0;
    const a = c[d] || 0;
    if (e > a) {
      return 1;
    }
    if (e < a) {
      return -1;
    }
  }
  return 0;
};
const k = async () => {
  return new Promise((e, a) => {
    h(b, {
      method: "GET",
      timeout: 3000
    }, (a, f) => {
      if (a || f.statusCode !== 200) {
        console.log("检查更新失败:", a || f.statusMessage);
        e(null);
        return;
      }
      try {
        const a = f.body;
        if (j(d, a.version) < 0) {
          const b = {
            version: a.version,
            updateUrl: a.updateUrl,
            description: a.description || ""
          };
          e(b);
        } else {
          e(null);
        }
      } catch (a) {
        console.log("解析版本信息失败:", a);
        e(null);
      }
    });
  });
};
a(g.request, ({
  source: d,
  action: a,
  info: b
}) => {
  switch (a) {
    case "musicUrl":
      console.log(f[d].musicUrl(b.musicInfo, e[d][b.type]), d);
      return f[d].musicUrl(b.musicInfo, e[d][b.type]);
  }
});
k().then(a => {
  if (a) {
    const b = "发现新版本 v" + a.version + "\n" + (a.description ? "更新内容: " + a.description + "\n" : "") + "请更新后使用";
    const c = {
      log: b,
      updateUrl: a.updateUrl
    };
    i(g.updateAlert, c);
    console.log("发现新版本,需要更新,脚本将不会初始化:", a);
    return;
  } else {
    console.log("当前已是最新版本,正常初始化");
    i(g.inited, {
      openDevTools: false,
      sources: {
        kg: {
          name: "kg音乐",
          type: "music",
          actions: ["musicUrl"],
          qualitys: ["128k", "320k", "flac"]
        },
        tx: {
          name: "tx音乐",
          type: "music",
          actions: ["musicUrl"],
          qualitys: ["128k", "320k", "flac"]
        },
        wy: {
          name: "wy音乐",
          type: "music",
          actions: ["musicUrl"],
          qualitys: ["128k", "320k", "flac"]
        },
        kw: {
          name: "kw音乐",
          type: "music",
          actions: ["musicUrl"],
          qualitys: ["128k", "320k", "flac"]
        },
        mg: {
          name: "mg音乐",
          type: "music",
          actions: ["musicUrl"],
          qualitys: ["128k", "320k", "flac"]
        }
      }
    });
  }
}).catch(a => {
  console.log("检查更新出错,正常初始化:", a);
  i(g.inited, {
    openDevTools: false,
    sources: {
      kg: {
        name: "kg音乐",
        type: "music",
        actions: ["musicUrl"],
        qualitys: ["128k", "320k", "flac"]
      },
      tx: {
        name: "tx音乐",
        type: "music",
        actions: ["musicUrl"],
        qualitys: ["128k", "320k", "flac"]
      },
      wy: {
        name: "wy音乐",
        type: "music",
        actions: ["musicUrl"],
        qualitys: ["128k", "320k", "flac"]
      },
      kw: {
        name: "kw音乐",
        type: "music",
        actions: ["musicUrl"],
        qualitys: ["128k", "320k", "flac"]
      },
      mg: {
        name: "mg音乐",
        type: "music",
        actions: ["musicUrl"],
        qualitys: ["128k", "320k", "flac"]
      }
    }
  });
});
