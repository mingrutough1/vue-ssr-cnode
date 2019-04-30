/* eslint-disable */
const baseUtils = {}; //
import errorImg from "@/assets/img/onErrorImg.png";
baseUtils.install = Vue => {
  Vue.mixin({
    data() {
      return {
        defaultImg: `this.src='${errorImg}'`
      };
    },
    methods: {
      stopPropagation() {},
      getDateDiff(date) {
        const dateTimeStamp = new Date(date).getTime();
        var minute = 1000 * 60;
        var hour = minute * 60;
        var day = hour * 24;
        var month = day * 30;
        var now = new Date().getTime();
        var diffValue = now - dateTimeStamp;
        let result = "";
        if (diffValue < 0) {
          return "未来";
        }
        var monthC = diffValue / month;
        var weekC = diffValue / (7 * day);
        var dayC = diffValue / day;
        var hourC = diffValue / hour;
        var minC = diffValue / minute;
        if (monthC >= 1) {
          result = `${parseInt(monthC)} 月前`;
        } else if (weekC >= 1) {
          result = `${parseInt(weekC)} 周前`;
        } else if (dayC >= 1) {
          result = `${parseInt(dayC)} 天前`;
        } else if (hourC >= 1) {
          result = `${parseInt(hourC)} 小时前`;
        } else if (minC >= 1) {
          result = `${parseInt(minC)} 分钟前`;
        } else result = "刚刚";
        return result;
      }
    }
  });
};

export default baseUtils;

const trim = function(string) {
  return (string || "").replace(/^[\s\uFEFF]+|[\s\uFEFF]+$/g, "");
};
export const getStyle = (element, styleName) => {
  if (!element || !styleName) return null;
  var computed = document.defaultView.getComputedStyle(element, "");
  return element.style[styleName] || computed ? computed[styleName] : null;
};
export function hasClass(el, cls) {
  if (!el || !cls) return false;
  if (cls.indexOf(" ") !== -1)
    throw new Error("className should not contain space.");
  if (el.classList) {
    return el.classList.contains(cls);
  } else {
    return (" " + el.className + " ").indexOf(" " + cls + " ") > -1;
  }
}
export function addClass(el, cls) {
  if (!el) return;
  var curClass = el.className;
  var classes = (cls || "").split(" ");

  for (var i = 0, j = classes.length; i < j; i++) {
    var clsName = classes[i];
    if (!clsName) continue;

    if (el.classList) {
      el.classList.add(clsName);
    } else if (!hasClass(el, clsName)) {
      curClass += " " + clsName;
    }
  }
  if (!el.classList) {
    el.className = curClass;
  }
}

export function removeClass(el, cls) {
  if (!el || !cls) return;
  var classes = cls.split(" ");
  var curClass = " " + el.className + " ";

  for (var i = 0, j = classes.length; i < j; i++) {
    var clsName = classes[i];
    if (!clsName) continue;

    if (el.classList) {
      el.classList.remove(clsName);
    } else if (hasClass(el, clsName)) {
      curClass = curClass.replace(" " + clsName + " ", " ");
    }
  }
  if (!el.classList) {
    el.className = trim(curClass);
  }
}
