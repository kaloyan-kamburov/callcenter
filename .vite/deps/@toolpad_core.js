import {
  PageContainer,
  PageHeader,
  PageHeaderToolbar
} from "./chunk-MYGSRSEM.js";
import {
  DashboardHeader,
  DashboardLayout,
  DashboardSidebarPageItem,
  ThemeSwitcher,
  ToolbarActions,
  useSsr
} from "./chunk-GHBMJXVE.js";
import {
  match,
  useActivePage
} from "./chunk-4NUYUSI7.js";
import {
  Account,
  AccountPopoverFooter,
  AccountPopoverHeader,
  AccountPreview,
  AlertDialog,
  AppProvider,
  AuthenticationContext,
  CODEC_DATE,
  CODEC_DATE_ONLY,
  CODEC_JSON,
  CODEC_JSON_STRICT,
  CODEC_NUMBER,
  CODEC_STRING,
  CODE_BOOLEAN,
  ConfirmDialog,
  DialogsProvider,
  LocalizationContext,
  LocalizationProvider,
  NotificationsProvider,
  PromptDialog,
  SessionContext,
  SignInButton,
  SignOutButton,
  en_default,
  hiIN_default,
  useDialogs,
  useLocalStorageState,
  useLocaleText,
  useNotifications,
  useStorageState,
  useStorageStateServer
} from "./chunk-PY242DK4.js";
import {
  BrandingContext,
  CrudContext,
  NavigationContext,
  RouterContext,
  require_browser
} from "./chunk-JANN4EKF.js";
import {
  DataGrid,
  GridActionsCellItem,
  GridToolbar,
  gridClasses,
  warnOnce
} from "./chunk-GQB2MIWH.js";
import "./chunk-NJSCAHKY.js";
import "./chunk-CBK42D2S.js";
import {
  Alert_default,
  Container_default,
  DialogActions_default,
  DialogContent_default,
  FormGroup_default,
  Grid_default,
  ListItem_default,
  Stack_default,
  major,
  useMediaQuery_default,
  visuallyHidden_default
} from "./chunk-ZN7YYN64.js";
import {
  Dialog_default,
  dialogClasses_default
} from "./chunk-CTHKH7H3.js";
import "./chunk-664K4RHA.js";
import {
  Checkbox_default,
  Chip_default,
  FormControlLabel_default,
  Popper_default,
  Tab_default,
  Tabs_default,
  Tooltip_default,
  tabsClasses_default
} from "./chunk-ZWOLCVG4.js";
import {
  IconButton_default
} from "./chunk-2Z6OQFSY.js";
import {
  InputAdornment_default
} from "./chunk-SWTVAN3B.js";
import {
  FormControl_default,
  FormHelperText_default,
  Grow_default,
  InputLabel_default,
  List_default,
  MenuList_default,
  Select_default,
  TextField_default,
  useSlotProps_default
} from "./chunk-JSJGIC5I.js";
import {
  Fade_default,
  FocusTrap_default,
  Paper_default
} from "./chunk-UXST6MBD.js";
import {
  useFormControl
} from "./chunk-PXUASEBH.js";
import {
  Divider_default,
  MenuItem_default
} from "./chunk-RW52E5ME.js";
import {
  Typography_default
} from "./chunk-QGXQENJK.js";
import "./chunk-KCBBXD2E.js";
import {
  resolveComponentProps_default
} from "./chunk-A5IPHVMU.js";
import {
  Button_default
} from "./chunk-REV5P6WV.js";
import {
  CircularProgress_default
} from "./chunk-HNR6C2R2.js";
import {
  ButtonBase_default
} from "./chunk-KFDJ6GN3.js";
import "./chunk-ZWM3JFZX.js";
import {
  refType_default,
  useTimeout
} from "./chunk-XE7SFMJT.js";
import {
  CSSTransition_default,
  TransitionGroup_default,
  _objectWithoutPropertiesLoose
} from "./chunk-3ALNVYUQ.js";
import "./chunk-Z5QZWHZI.js";
import "./chunk-QSX7OHDZ.js";
import "./chunk-EFE2JJH6.js";
import {
  Box_default
} from "./chunk-UTQ6B6VX.js";
import {
  useThemeProps
} from "./chunk-D56TNETT.js";
import {
  Delete_default
} from "./chunk-ILH2L5JZ.js";
import {
  Edit_default
} from "./chunk-GTMONOB6.js";
import "./chunk-F7KOCRMX.js";
import "./chunk-CMI77TUC.js";
import {
  Add_default
} from "./chunk-Y4AGVB3U.js";
import "./chunk-XIAX66S7.js";
import {
  createSvgIcon,
  useControlled
} from "./chunk-BKRUDB4B.js";
import {
  ownerDocument
} from "./chunk-VBFXXF3Q.js";
import "./chunk-RQNFXUFV.js";
import {
  useEventCallback_default,
  useForkRef
} from "./chunk-FXCPMEQ2.js";
import "./chunk-TEXT3WRW.js";
import {
  _extends,
  alpha,
  capitalize,
  clsx_default,
  composeClasses,
  generateUtilityClass,
  generateUtilityClasses,
  require_prop_types,
  shouldForwardProp,
  styled_default2 as styled_default,
  useEnhancedEffect_default,
  useId,
  useRtl,
  useTheme
} from "./chunk-3NB4NH7D.js";
import "./chunk-LHLKB4MV.js";
import {
  require_jsx_runtime
} from "./chunk-6BPC6FNR.js";
import {
  require_react
} from "./chunk-I4BD4AGR.js";
import {
  __commonJS,
  __toESM
} from "./chunk-G3PMV62Z.js";

// node_modules/.pnpm/dayjs@1.11.13/node_modules/dayjs/dayjs.min.js
var require_dayjs_min = __commonJS({
  "node_modules/.pnpm/dayjs@1.11.13/node_modules/dayjs/dayjs.min.js"(exports, module) {
    !(function(t, e) {
      "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : (t = "undefined" != typeof globalThis ? globalThis : t || self).dayjs = e();
    })(exports, (function() {
      "use strict";
      var t = 1e3, e = 6e4, n = 36e5, r = "millisecond", i = "second", s = "minute", u = "hour", a = "day", o = "week", c = "month", f = "quarter", h = "year", d = "date", l = "Invalid Date", $ = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, y = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, M = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(t2) {
        var e2 = ["th", "st", "nd", "rd"], n2 = t2 % 100;
        return "[" + t2 + (e2[(n2 - 20) % 10] || e2[n2] || e2[0]) + "]";
      } }, m = function(t2, e2, n2) {
        var r2 = String(t2);
        return !r2 || r2.length >= e2 ? t2 : "" + Array(e2 + 1 - r2.length).join(n2) + t2;
      }, v = { s: m, z: function(t2) {
        var e2 = -t2.utcOffset(), n2 = Math.abs(e2), r2 = Math.floor(n2 / 60), i2 = n2 % 60;
        return (e2 <= 0 ? "+" : "-") + m(r2, 2, "0") + ":" + m(i2, 2, "0");
      }, m: function t2(e2, n2) {
        if (e2.date() < n2.date()) return -t2(n2, e2);
        var r2 = 12 * (n2.year() - e2.year()) + (n2.month() - e2.month()), i2 = e2.clone().add(r2, c), s2 = n2 - i2 < 0, u2 = e2.clone().add(r2 + (s2 ? -1 : 1), c);
        return +(-(r2 + (n2 - i2) / (s2 ? i2 - u2 : u2 - i2)) || 0);
      }, a: function(t2) {
        return t2 < 0 ? Math.ceil(t2) || 0 : Math.floor(t2);
      }, p: function(t2) {
        return { M: c, y: h, w: o, d: a, D: d, h: u, m: s, s: i, ms: r, Q: f }[t2] || String(t2 || "").toLowerCase().replace(/s$/, "");
      }, u: function(t2) {
        return void 0 === t2;
      } }, g = "en", D = {};
      D[g] = M;
      var p = "$isDayjsObject", S = function(t2) {
        return t2 instanceof _ || !(!t2 || !t2[p]);
      }, w = function t2(e2, n2, r2) {
        var i2;
        if (!e2) return g;
        if ("string" == typeof e2) {
          var s2 = e2.toLowerCase();
          D[s2] && (i2 = s2), n2 && (D[s2] = n2, i2 = s2);
          var u2 = e2.split("-");
          if (!i2 && u2.length > 1) return t2(u2[0]);
        } else {
          var a2 = e2.name;
          D[a2] = e2, i2 = a2;
        }
        return !r2 && i2 && (g = i2), i2 || !r2 && g;
      }, O = function(t2, e2) {
        if (S(t2)) return t2.clone();
        var n2 = "object" == typeof e2 ? e2 : {};
        return n2.date = t2, n2.args = arguments, new _(n2);
      }, b = v;
      b.l = w, b.i = S, b.w = function(t2, e2) {
        return O(t2, { locale: e2.$L, utc: e2.$u, x: e2.$x, $offset: e2.$offset });
      };
      var _ = (function() {
        function M2(t2) {
          this.$L = w(t2.locale, null, true), this.parse(t2), this.$x = this.$x || t2.x || {}, this[p] = true;
        }
        var m2 = M2.prototype;
        return m2.parse = function(t2) {
          this.$d = (function(t3) {
            var e2 = t3.date, n2 = t3.utc;
            if (null === e2) return /* @__PURE__ */ new Date(NaN);
            if (b.u(e2)) return /* @__PURE__ */ new Date();
            if (e2 instanceof Date) return new Date(e2);
            if ("string" == typeof e2 && !/Z$/i.test(e2)) {
              var r2 = e2.match($);
              if (r2) {
                var i2 = r2[2] - 1 || 0, s2 = (r2[7] || "0").substring(0, 3);
                return n2 ? new Date(Date.UTC(r2[1], i2, r2[3] || 1, r2[4] || 0, r2[5] || 0, r2[6] || 0, s2)) : new Date(r2[1], i2, r2[3] || 1, r2[4] || 0, r2[5] || 0, r2[6] || 0, s2);
              }
            }
            return new Date(e2);
          })(t2), this.init();
        }, m2.init = function() {
          var t2 = this.$d;
          this.$y = t2.getFullYear(), this.$M = t2.getMonth(), this.$D = t2.getDate(), this.$W = t2.getDay(), this.$H = t2.getHours(), this.$m = t2.getMinutes(), this.$s = t2.getSeconds(), this.$ms = t2.getMilliseconds();
        }, m2.$utils = function() {
          return b;
        }, m2.isValid = function() {
          return !(this.$d.toString() === l);
        }, m2.isSame = function(t2, e2) {
          var n2 = O(t2);
          return this.startOf(e2) <= n2 && n2 <= this.endOf(e2);
        }, m2.isAfter = function(t2, e2) {
          return O(t2) < this.startOf(e2);
        }, m2.isBefore = function(t2, e2) {
          return this.endOf(e2) < O(t2);
        }, m2.$g = function(t2, e2, n2) {
          return b.u(t2) ? this[e2] : this.set(n2, t2);
        }, m2.unix = function() {
          return Math.floor(this.valueOf() / 1e3);
        }, m2.valueOf = function() {
          return this.$d.getTime();
        }, m2.startOf = function(t2, e2) {
          var n2 = this, r2 = !!b.u(e2) || e2, f2 = b.p(t2), l2 = function(t3, e3) {
            var i2 = b.w(n2.$u ? Date.UTC(n2.$y, e3, t3) : new Date(n2.$y, e3, t3), n2);
            return r2 ? i2 : i2.endOf(a);
          }, $2 = function(t3, e3) {
            return b.w(n2.toDate()[t3].apply(n2.toDate("s"), (r2 ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(e3)), n2);
          }, y2 = this.$W, M3 = this.$M, m3 = this.$D, v2 = "set" + (this.$u ? "UTC" : "");
          switch (f2) {
            case h:
              return r2 ? l2(1, 0) : l2(31, 11);
            case c:
              return r2 ? l2(1, M3) : l2(0, M3 + 1);
            case o:
              var g2 = this.$locale().weekStart || 0, D2 = (y2 < g2 ? y2 + 7 : y2) - g2;
              return l2(r2 ? m3 - D2 : m3 + (6 - D2), M3);
            case a:
            case d:
              return $2(v2 + "Hours", 0);
            case u:
              return $2(v2 + "Minutes", 1);
            case s:
              return $2(v2 + "Seconds", 2);
            case i:
              return $2(v2 + "Milliseconds", 3);
            default:
              return this.clone();
          }
        }, m2.endOf = function(t2) {
          return this.startOf(t2, false);
        }, m2.$set = function(t2, e2) {
          var n2, o2 = b.p(t2), f2 = "set" + (this.$u ? "UTC" : ""), l2 = (n2 = {}, n2[a] = f2 + "Date", n2[d] = f2 + "Date", n2[c] = f2 + "Month", n2[h] = f2 + "FullYear", n2[u] = f2 + "Hours", n2[s] = f2 + "Minutes", n2[i] = f2 + "Seconds", n2[r] = f2 + "Milliseconds", n2)[o2], $2 = o2 === a ? this.$D + (e2 - this.$W) : e2;
          if (o2 === c || o2 === h) {
            var y2 = this.clone().set(d, 1);
            y2.$d[l2]($2), y2.init(), this.$d = y2.set(d, Math.min(this.$D, y2.daysInMonth())).$d;
          } else l2 && this.$d[l2]($2);
          return this.init(), this;
        }, m2.set = function(t2, e2) {
          return this.clone().$set(t2, e2);
        }, m2.get = function(t2) {
          return this[b.p(t2)]();
        }, m2.add = function(r2, f2) {
          var d2, l2 = this;
          r2 = Number(r2);
          var $2 = b.p(f2), y2 = function(t2) {
            var e2 = O(l2);
            return b.w(e2.date(e2.date() + Math.round(t2 * r2)), l2);
          };
          if ($2 === c) return this.set(c, this.$M + r2);
          if ($2 === h) return this.set(h, this.$y + r2);
          if ($2 === a) return y2(1);
          if ($2 === o) return y2(7);
          var M3 = (d2 = {}, d2[s] = e, d2[u] = n, d2[i] = t, d2)[$2] || 1, m3 = this.$d.getTime() + r2 * M3;
          return b.w(m3, this);
        }, m2.subtract = function(t2, e2) {
          return this.add(-1 * t2, e2);
        }, m2.format = function(t2) {
          var e2 = this, n2 = this.$locale();
          if (!this.isValid()) return n2.invalidDate || l;
          var r2 = t2 || "YYYY-MM-DDTHH:mm:ssZ", i2 = b.z(this), s2 = this.$H, u2 = this.$m, a2 = this.$M, o2 = n2.weekdays, c2 = n2.months, f2 = n2.meridiem, h2 = function(t3, n3, i3, s3) {
            return t3 && (t3[n3] || t3(e2, r2)) || i3[n3].slice(0, s3);
          }, d2 = function(t3) {
            return b.s(s2 % 12 || 12, t3, "0");
          }, $2 = f2 || function(t3, e3, n3) {
            var r3 = t3 < 12 ? "AM" : "PM";
            return n3 ? r3.toLowerCase() : r3;
          };
          return r2.replace(y, (function(t3, r3) {
            return r3 || (function(t4) {
              switch (t4) {
                case "YY":
                  return String(e2.$y).slice(-2);
                case "YYYY":
                  return b.s(e2.$y, 4, "0");
                case "M":
                  return a2 + 1;
                case "MM":
                  return b.s(a2 + 1, 2, "0");
                case "MMM":
                  return h2(n2.monthsShort, a2, c2, 3);
                case "MMMM":
                  return h2(c2, a2);
                case "D":
                  return e2.$D;
                case "DD":
                  return b.s(e2.$D, 2, "0");
                case "d":
                  return String(e2.$W);
                case "dd":
                  return h2(n2.weekdaysMin, e2.$W, o2, 2);
                case "ddd":
                  return h2(n2.weekdaysShort, e2.$W, o2, 3);
                case "dddd":
                  return o2[e2.$W];
                case "H":
                  return String(s2);
                case "HH":
                  return b.s(s2, 2, "0");
                case "h":
                  return d2(1);
                case "hh":
                  return d2(2);
                case "a":
                  return $2(s2, u2, true);
                case "A":
                  return $2(s2, u2, false);
                case "m":
                  return String(u2);
                case "mm":
                  return b.s(u2, 2, "0");
                case "s":
                  return String(e2.$s);
                case "ss":
                  return b.s(e2.$s, 2, "0");
                case "SSS":
                  return b.s(e2.$ms, 3, "0");
                case "Z":
                  return i2;
              }
              return null;
            })(t3) || i2.replace(":", "");
          }));
        }, m2.utcOffset = function() {
          return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
        }, m2.diff = function(r2, d2, l2) {
          var $2, y2 = this, M3 = b.p(d2), m3 = O(r2), v2 = (m3.utcOffset() - this.utcOffset()) * e, g2 = this - m3, D2 = function() {
            return b.m(y2, m3);
          };
          switch (M3) {
            case h:
              $2 = D2() / 12;
              break;
            case c:
              $2 = D2();
              break;
            case f:
              $2 = D2() / 3;
              break;
            case o:
              $2 = (g2 - v2) / 6048e5;
              break;
            case a:
              $2 = (g2 - v2) / 864e5;
              break;
            case u:
              $2 = g2 / n;
              break;
            case s:
              $2 = g2 / e;
              break;
            case i:
              $2 = g2 / t;
              break;
            default:
              $2 = g2;
          }
          return l2 ? $2 : b.a($2);
        }, m2.daysInMonth = function() {
          return this.endOf(c).$D;
        }, m2.$locale = function() {
          return D[this.$L];
        }, m2.locale = function(t2, e2) {
          if (!t2) return this.$L;
          var n2 = this.clone(), r2 = w(t2, e2, true);
          return r2 && (n2.$L = r2), n2;
        }, m2.clone = function() {
          return b.w(this.$d, this);
        }, m2.toDate = function() {
          return new Date(this.valueOf());
        }, m2.toJSON = function() {
          return this.isValid() ? this.toISOString() : null;
        }, m2.toISOString = function() {
          return this.$d.toISOString();
        }, m2.toString = function() {
          return this.$d.toUTCString();
        }, M2;
      })(), k = _.prototype;
      return O.prototype = k, [["$ms", r], ["$s", i], ["$m", s], ["$H", u], ["$W", a], ["$M", c], ["$y", h], ["$D", d]].forEach((function(t2) {
        k[t2[1]] = function(e2) {
          return this.$g(e2, t2[0], t2[1]);
        };
      })), O.extend = function(t2, e2) {
        return t2.$i || (t2(e2, _, O), t2.$i = true), O;
      }, O.locale = w, O.isDayjs = S, O.unix = function(t2) {
        return O(1e3 * t2);
      }, O.en = D[g], O.Ls = D, O.p = {}, O;
    }));
  }
});

// node_modules/.pnpm/dayjs@1.11.13/node_modules/dayjs/plugin/weekOfYear.js
var require_weekOfYear = __commonJS({
  "node_modules/.pnpm/dayjs@1.11.13/node_modules/dayjs/plugin/weekOfYear.js"(exports, module) {
    !(function(e, t) {
      "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = "undefined" != typeof globalThis ? globalThis : e || self).dayjs_plugin_weekOfYear = t();
    })(exports, (function() {
      "use strict";
      var e = "week", t = "year";
      return function(i, n, r) {
        var f = n.prototype;
        f.week = function(i2) {
          if (void 0 === i2 && (i2 = null), null !== i2) return this.add(7 * (i2 - this.week()), "day");
          var n2 = this.$locale().yearStart || 1;
          if (11 === this.month() && this.date() > 25) {
            var f2 = r(this).startOf(t).add(1, t).date(n2), s = r(this).endOf(e);
            if (f2.isBefore(s)) return 1;
          }
          var a = r(this).startOf(t).date(n2).startOf(e).subtract(1, "millisecond"), o = this.diff(a, e, true);
          return o < 0 ? r(this).startOf("week").week() : Math.ceil(o);
        }, f.weeks = function(e2) {
          return void 0 === e2 && (e2 = null), this.week(e2);
        };
      };
    }));
  }
});

// node_modules/.pnpm/dayjs@1.11.13/node_modules/dayjs/plugin/customParseFormat.js
var require_customParseFormat = __commonJS({
  "node_modules/.pnpm/dayjs@1.11.13/node_modules/dayjs/plugin/customParseFormat.js"(exports, module) {
    !(function(e, t) {
      "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = "undefined" != typeof globalThis ? globalThis : e || self).dayjs_plugin_customParseFormat = t();
    })(exports, (function() {
      "use strict";
      var e = { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" }, t = /(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g, n = /\d/, r = /\d\d/, i = /\d\d?/, o = /\d*[^-_:/,()\s\d]+/, s = {}, a = function(e2) {
        return (e2 = +e2) + (e2 > 68 ? 1900 : 2e3);
      };
      var f = function(e2) {
        return function(t2) {
          this[e2] = +t2;
        };
      }, h = [/[+-]\d\d:?(\d\d)?|Z/, function(e2) {
        (this.zone || (this.zone = {})).offset = (function(e3) {
          if (!e3) return 0;
          if ("Z" === e3) return 0;
          var t2 = e3.match(/([+-]|\d\d)/g), n2 = 60 * t2[1] + (+t2[2] || 0);
          return 0 === n2 ? 0 : "+" === t2[0] ? -n2 : n2;
        })(e2);
      }], u = function(e2) {
        var t2 = s[e2];
        return t2 && (t2.indexOf ? t2 : t2.s.concat(t2.f));
      }, d = function(e2, t2) {
        var n2, r2 = s.meridiem;
        if (r2) {
          for (var i2 = 1; i2 <= 24; i2 += 1) if (e2.indexOf(r2(i2, 0, t2)) > -1) {
            n2 = i2 > 12;
            break;
          }
        } else n2 = e2 === (t2 ? "pm" : "PM");
        return n2;
      }, c = { A: [o, function(e2) {
        this.afternoon = d(e2, false);
      }], a: [o, function(e2) {
        this.afternoon = d(e2, true);
      }], Q: [n, function(e2) {
        this.month = 3 * (e2 - 1) + 1;
      }], S: [n, function(e2) {
        this.milliseconds = 100 * +e2;
      }], SS: [r, function(e2) {
        this.milliseconds = 10 * +e2;
      }], SSS: [/\d{3}/, function(e2) {
        this.milliseconds = +e2;
      }], s: [i, f("seconds")], ss: [i, f("seconds")], m: [i, f("minutes")], mm: [i, f("minutes")], H: [i, f("hours")], h: [i, f("hours")], HH: [i, f("hours")], hh: [i, f("hours")], D: [i, f("day")], DD: [r, f("day")], Do: [o, function(e2) {
        var t2 = s.ordinal, n2 = e2.match(/\d+/);
        if (this.day = n2[0], t2) for (var r2 = 1; r2 <= 31; r2 += 1) t2(r2).replace(/\[|\]/g, "") === e2 && (this.day = r2);
      }], w: [i, f("week")], ww: [r, f("week")], M: [i, f("month")], MM: [r, f("month")], MMM: [o, function(e2) {
        var t2 = u("months"), n2 = (u("monthsShort") || t2.map((function(e3) {
          return e3.slice(0, 3);
        }))).indexOf(e2) + 1;
        if (n2 < 1) throw new Error();
        this.month = n2 % 12 || n2;
      }], MMMM: [o, function(e2) {
        var t2 = u("months").indexOf(e2) + 1;
        if (t2 < 1) throw new Error();
        this.month = t2 % 12 || t2;
      }], Y: [/[+-]?\d+/, f("year")], YY: [r, function(e2) {
        this.year = a(e2);
      }], YYYY: [/\d{4}/, f("year")], Z: h, ZZ: h };
      function l(n2) {
        var r2, i2;
        r2 = n2, i2 = s && s.formats;
        for (var o2 = (n2 = r2.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, (function(t2, n3, r3) {
          var o3 = r3 && r3.toUpperCase();
          return n3 || i2[r3] || e[r3] || i2[o3].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, (function(e2, t3, n4) {
            return t3 || n4.slice(1);
          }));
        }))).match(t), a2 = o2.length, f2 = 0; f2 < a2; f2 += 1) {
          var h2 = o2[f2], u2 = c[h2], d2 = u2 && u2[0], l2 = u2 && u2[1];
          o2[f2] = l2 ? { regex: d2, parser: l2 } : h2.replace(/^\[|\]$/g, "");
        }
        return function(e2) {
          for (var t2 = {}, n3 = 0, r3 = 0; n3 < a2; n3 += 1) {
            var i3 = o2[n3];
            if ("string" == typeof i3) r3 += i3.length;
            else {
              var s2 = i3.regex, f3 = i3.parser, h3 = e2.slice(r3), u3 = s2.exec(h3)[0];
              f3.call(t2, u3), e2 = e2.replace(u3, "");
            }
          }
          return (function(e3) {
            var t3 = e3.afternoon;
            if (void 0 !== t3) {
              var n4 = e3.hours;
              t3 ? n4 < 12 && (e3.hours += 12) : 12 === n4 && (e3.hours = 0), delete e3.afternoon;
            }
          })(t2), t2;
        };
      }
      return function(e2, t2, n2) {
        n2.p.customParseFormat = true, e2 && e2.parseTwoDigitYear && (a = e2.parseTwoDigitYear);
        var r2 = t2.prototype, i2 = r2.parse;
        r2.parse = function(e3) {
          var t3 = e3.date, r3 = e3.utc, o2 = e3.args;
          this.$u = r3;
          var a2 = o2[1];
          if ("string" == typeof a2) {
            var f2 = true === o2[2], h2 = true === o2[3], u2 = f2 || h2, d2 = o2[2];
            h2 && (d2 = o2[2]), s = this.$locale(), !f2 && d2 && (s = n2.Ls[d2]), this.$d = (function(e4, t4, n3, r4) {
              try {
                if (["x", "X"].indexOf(t4) > -1) return new Date(("X" === t4 ? 1e3 : 1) * e4);
                var i3 = l(t4)(e4), o3 = i3.year, s2 = i3.month, a3 = i3.day, f3 = i3.hours, h3 = i3.minutes, u3 = i3.seconds, d3 = i3.milliseconds, c3 = i3.zone, m2 = i3.week, M2 = /* @__PURE__ */ new Date(), Y = a3 || (o3 || s2 ? 1 : M2.getDate()), p = o3 || M2.getFullYear(), v = 0;
                o3 && !s2 || (v = s2 > 0 ? s2 - 1 : M2.getMonth());
                var D, w = f3 || 0, g = h3 || 0, y = u3 || 0, L = d3 || 0;
                return c3 ? new Date(Date.UTC(p, v, Y, w, g, y, L + 60 * c3.offset * 1e3)) : n3 ? new Date(Date.UTC(p, v, Y, w, g, y, L)) : (D = new Date(p, v, Y, w, g, y, L), m2 && (D = r4(D).week(m2).toDate()), D);
              } catch (e5) {
                return /* @__PURE__ */ new Date("");
              }
            })(t3, a2, r3, n2), this.init(), d2 && true !== d2 && (this.$L = this.locale(d2).$L), u2 && t3 != this.format(a2) && (this.$d = /* @__PURE__ */ new Date("")), s = {};
          } else if (a2 instanceof Array) for (var c2 = a2.length, m = 1; m <= c2; m += 1) {
            o2[1] = a2[m - 1];
            var M = n2.apply(this, o2);
            if (M.isValid()) {
              this.$d = M.$d, this.$L = M.$L, this.init();
              break;
            }
            m === c2 && (this.$d = /* @__PURE__ */ new Date(""));
          }
          else i2.call(this, e3);
        };
      };
    }));
  }
});

// node_modules/.pnpm/dayjs@1.11.13/node_modules/dayjs/plugin/localizedFormat.js
var require_localizedFormat = __commonJS({
  "node_modules/.pnpm/dayjs@1.11.13/node_modules/dayjs/plugin/localizedFormat.js"(exports, module) {
    !(function(e, t) {
      "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = "undefined" != typeof globalThis ? globalThis : e || self).dayjs_plugin_localizedFormat = t();
    })(exports, (function() {
      "use strict";
      var e = { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" };
      return function(t, o, n) {
        var r = o.prototype, i = r.format;
        n.en.formats = e, r.format = function(t2) {
          void 0 === t2 && (t2 = "YYYY-MM-DDTHH:mm:ssZ");
          var o2 = this.$locale().formats, n2 = (function(t3, o3) {
            return t3.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, (function(t4, n3, r2) {
              var i2 = r2 && r2.toUpperCase();
              return n3 || o3[r2] || e[r2] || o3[i2].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, (function(e2, t5, o4) {
                return t5 || o4.slice(1);
              }));
            }));
          })(t2, void 0 === o2 ? {} : o2);
          return i.call(this, n2);
        };
      };
    }));
  }
});

// node_modules/.pnpm/dayjs@1.11.13/node_modules/dayjs/plugin/isBetween.js
var require_isBetween = __commonJS({
  "node_modules/.pnpm/dayjs@1.11.13/node_modules/dayjs/plugin/isBetween.js"(exports, module) {
    !(function(e, i) {
      "object" == typeof exports && "undefined" != typeof module ? module.exports = i() : "function" == typeof define && define.amd ? define(i) : (e = "undefined" != typeof globalThis ? globalThis : e || self).dayjs_plugin_isBetween = i();
    })(exports, (function() {
      "use strict";
      return function(e, i, t) {
        i.prototype.isBetween = function(e2, i2, s, f) {
          var n = t(e2), o = t(i2), r = "(" === (f = f || "()")[0], u = ")" === f[1];
          return (r ? this.isAfter(n, s) : !this.isBefore(n, s)) && (u ? this.isBefore(o, s) : !this.isAfter(o, s)) || (r ? this.isBefore(n, s) : !this.isAfter(n, s)) && (u ? this.isAfter(o, s) : !this.isBefore(o, s));
        };
      };
    }));
  }
});

// node_modules/.pnpm/dayjs@1.11.13/node_modules/dayjs/plugin/advancedFormat.js
var require_advancedFormat = __commonJS({
  "node_modules/.pnpm/dayjs@1.11.13/node_modules/dayjs/plugin/advancedFormat.js"(exports, module) {
    !(function(e, t) {
      "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = "undefined" != typeof globalThis ? globalThis : e || self).dayjs_plugin_advancedFormat = t();
    })(exports, (function() {
      "use strict";
      return function(e, t) {
        var r = t.prototype, n = r.format;
        r.format = function(e2) {
          var t2 = this, r2 = this.$locale();
          if (!this.isValid()) return n.bind(this)(e2);
          var s = this.$utils(), a = (e2 || "YYYY-MM-DDTHH:mm:ssZ").replace(/\[([^\]]+)]|Q|wo|ww|w|WW|W|zzz|z|gggg|GGGG|Do|X|x|k{1,2}|S/g, (function(e3) {
            switch (e3) {
              case "Q":
                return Math.ceil((t2.$M + 1) / 3);
              case "Do":
                return r2.ordinal(t2.$D);
              case "gggg":
                return t2.weekYear();
              case "GGGG":
                return t2.isoWeekYear();
              case "wo":
                return r2.ordinal(t2.week(), "W");
              case "w":
              case "ww":
                return s.s(t2.week(), "w" === e3 ? 1 : 2, "0");
              case "W":
              case "WW":
                return s.s(t2.isoWeek(), "W" === e3 ? 1 : 2, "0");
              case "k":
              case "kk":
                return s.s(String(0 === t2.$H ? 24 : t2.$H), "k" === e3 ? 1 : 2, "0");
              case "X":
                return Math.floor(t2.$d.getTime() / 1e3);
              case "x":
                return t2.$d.getTime();
              case "z":
                return "[" + t2.offsetName() + "]";
              case "zzz":
                return "[" + t2.offsetName("long") + "]";
              default:
                return e3;
            }
          }));
          return n.bind(this)(a);
        };
      };
    }));
  }
});

// node_modules/.pnpm/@toolpad+core@0.16.0_d46cabc535141b65151421393ad6a060/node_modules/@toolpad/core/esm/SignInPage/SignInPage.js
var React21 = __toESM(require_react(), 1);
var import_prop_types = __toESM(require_prop_types(), 1);

// node_modules/.pnpm/@mui+icons-material@7.3.7_@mui+material@7.3.7_@emotion+react@11.14.0_@types+react@19.2._1e6712ae5dd075c3ed43d1d3d27c7f8c/node_modules/@mui/icons-material/esm/GitHub.js
var React = __toESM(require_react());
var import_jsx_runtime = __toESM(require_jsx_runtime());
var GitHub_default = createSvgIcon((0, import_jsx_runtime.jsx)("path", {
  d: "M12 1.27a11 11 0 00-3.48 21.46c.55.09.73-.28.73-.55v-1.84c-3.03.64-3.67-1.46-3.67-1.46-.55-1.29-1.28-1.65-1.28-1.65-.92-.65.1-.65.1-.65 1.1 0 1.73 1.1 1.73 1.1.92 1.65 2.57 1.2 3.21.92a2 2 0 01.64-1.47c-2.47-.27-5.04-1.19-5.04-5.5 0-1.1.46-2.1 1.2-2.84a3.76 3.76 0 010-2.93s.91-.28 3.11 1.1c1.8-.49 3.7-.49 5.5 0 2.1-1.38 3.02-1.1 3.02-1.1a3.76 3.76 0 010 2.93c.83.74 1.2 1.74 1.2 2.94 0 4.21-2.57 5.13-5.04 5.4.45.37.82.92.82 2.02v3.03c0 .27.1.64.73.55A11 11 0 0012 1.27"
}), "GitHub");

// node_modules/.pnpm/@mui+icons-material@7.3.7_@mui+material@7.3.7_@emotion+react@11.14.0_@types+react@19.2._1e6712ae5dd075c3ed43d1d3d27c7f8c/node_modules/@mui/icons-material/esm/Password.js
var import_jsx_runtime2 = __toESM(require_jsx_runtime());
var Password_default = createSvgIcon((0, import_jsx_runtime2.jsx)("path", {
  d: "M2 17h20v2H2zm1.15-4.05L4 11.47l.85 1.48 1.3-.75-.85-1.48H7v-1.5H5.3l.85-1.47L4.85 7 4 8.47 3.15 7l-1.3.75.85 1.47H1v1.5h1.7l-.85 1.48zm6.7-.75 1.3.75.85-1.48.85 1.48 1.3-.75-.85-1.48H15v-1.5h-1.7l.85-1.47-1.3-.75L12 8.47 11.15 7l-1.3.75.85 1.47H9v1.5h1.7zM23 9.22h-1.7l.85-1.47-1.3-.75L20 8.47 19.15 7l-1.3.75.85 1.47H17v1.5h1.7l-.85 1.48 1.3.75.85-1.48.85 1.48 1.3-.75-.85-1.48H23z"
}), "Password");

// node_modules/.pnpm/@mui+icons-material@7.3.7_@mui+material@7.3.7_@emotion+react@11.14.0_@types+react@19.2._1e6712ae5dd075c3ed43d1d3d27c7f8c/node_modules/@mui/icons-material/esm/Fingerprint.js
var import_jsx_runtime3 = __toESM(require_jsx_runtime());
var Fingerprint_default = createSvgIcon((0, import_jsx_runtime3.jsx)("path", {
  d: "M17.81 4.47c-.08 0-.16-.02-.23-.06C15.66 3.42 14 3 12.01 3c-1.98 0-3.86.47-5.57 1.41-.24.13-.54.04-.68-.2-.13-.24-.04-.55.2-.68C7.82 2.52 9.86 2 12.01 2c2.13 0 3.99.47 6.03 1.52.25.13.34.43.21.67-.09.18-.26.28-.44.28M3.5 9.72c-.1 0-.2-.03-.29-.09-.23-.16-.28-.47-.12-.7.99-1.4 2.25-2.5 3.75-3.27C9.98 4.04 14 4.03 17.15 5.65c1.5.77 2.76 1.86 3.75 3.25.16.22.11.54-.12.7s-.54.11-.7-.12c-.9-1.26-2.04-2.25-3.39-2.94-2.87-1.47-6.54-1.47-9.4.01-1.36.7-2.5 1.7-3.4 2.96-.08.14-.23.21-.39.21m6.25 12.07c-.13 0-.26-.05-.35-.15-.87-.87-1.34-1.43-2.01-2.64-.69-1.23-1.05-2.73-1.05-4.34 0-2.97 2.54-5.39 5.66-5.39s5.66 2.42 5.66 5.39c0 .28-.22.5-.5.5s-.5-.22-.5-.5c0-2.42-2.09-4.39-4.66-4.39s-4.66 1.97-4.66 4.39c0 1.44.32 2.77.93 3.85.64 1.15 1.08 1.64 1.85 2.42.19.2.19.51 0 .71-.11.1-.24.15-.37.15m7.17-1.85c-1.19 0-2.24-.3-3.1-.89-1.49-1.01-2.38-2.65-2.38-4.39 0-.28.22-.5.5-.5s.5.22.5.5c0 1.41.72 2.74 1.94 3.56.71.48 1.54.71 2.54.71.24 0 .64-.03 1.04-.1.27-.05.53.13.58.41.05.27-.13.53-.41.58-.57.11-1.07.12-1.21.12M14.91 22c-.04 0-.09-.01-.13-.02-1.59-.44-2.63-1.03-3.72-2.1-1.4-1.39-2.17-3.24-2.17-5.22 0-1.62 1.38-2.94 3.08-2.94s3.08 1.32 3.08 2.94c0 1.07.93 1.94 2.08 1.94s2.08-.87 2.08-1.94c0-3.77-3.25-6.83-7.25-6.83-2.84 0-5.44 1.58-6.61 4.03-.39.81-.59 1.76-.59 2.8 0 .78.07 2.01.67 3.61.1.26-.03.55-.29.64-.26.1-.55-.04-.64-.29-.49-1.31-.73-2.61-.73-3.96 0-1.2.23-2.29.68-3.24 1.33-2.79 4.28-4.6 7.51-4.6 4.55 0 8.25 3.51 8.25 7.83 0 1.62-1.38 2.94-3.08 2.94s-3.08-1.32-3.08-2.94c0-1.07-.93-1.94-2.08-1.94s-2.08.87-2.08 1.94c0 1.71.66 3.31 1.87 4.51.95.94 1.86 1.46 3.27 1.85.27.07.42.35.35.61-.05.23-.26.38-.47.38"
}), "Fingerprint");

// node_modules/.pnpm/@mui+icons-material@7.3.7_@mui+material@7.3.7_@emotion+react@11.14.0_@types+react@19.2._1e6712ae5dd075c3ed43d1d3d27c7f8c/node_modules/@mui/icons-material/esm/Apple.js
var React2 = __toESM(require_react());
var import_jsx_runtime4 = __toESM(require_jsx_runtime());
var Apple_default = createSvgIcon((0, import_jsx_runtime4.jsx)("path", {
  d: "M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"
}), "Apple");

// node_modules/.pnpm/@toolpad+core@0.16.0_d46cabc535141b65151421393ad6a060/node_modules/@toolpad/core/esm/SignInPage/icons/Google.js
var React3 = __toESM(require_react(), 1);
var import_jsx_runtime5 = __toESM(require_jsx_runtime(), 1);
var _svg;
function GoogleIcon() {
  return _svg || (_svg = (0, import_jsx_runtime5.jsxs)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    height: "24",
    viewBox: "0 0 24 24",
    width: "24",
    children: [(0, import_jsx_runtime5.jsx)("path", {
      d: "M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z",
      fill: "#4285F4"
    }), (0, import_jsx_runtime5.jsx)("path", {
      d: "M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z",
      fill: "#34A853"
    }), (0, import_jsx_runtime5.jsx)("path", {
      d: "M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z",
      fill: "#FBBC05"
    }), (0, import_jsx_runtime5.jsx)("path", {
      d: "M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z",
      fill: "#EA4335"
    }), (0, import_jsx_runtime5.jsx)("path", {
      d: "M1 1h22v22H1z",
      fill: "none"
    })]
  }));
}
var Google_default = GoogleIcon;

// node_modules/.pnpm/@toolpad+core@0.16.0_d46cabc535141b65151421393ad6a060/node_modules/@toolpad/core/esm/SignInPage/icons/Facebook.js
var React4 = __toESM(require_react(), 1);
var import_jsx_runtime6 = __toESM(require_jsx_runtime(), 1);
var _svg2;
function FacebookIcon() {
  return _svg2 || (_svg2 = (0, import_jsx_runtime6.jsxs)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    viewBox: "0 0 48 48",
    children: [(0, import_jsx_runtime6.jsx)("path", {
      fill: "#316FF6",
      d: "M24,4C12.954,4,4,12.954,4,24s8.954,20,20,20s20-8.954,20-20S35.046,4,24,4z"
    }), (0, import_jsx_runtime6.jsx)("path", {
      fill: "#fff",
      d: "M26.707,29.301h5.176l0.813-5.258h-5.989v-2.874c0-2.184,0.714-4.121,2.757-4.121h3.283V12.46 c-0.577-0.078-1.797-0.248-4.102-0.248c-4.814,0-7.636,2.542-7.636,8.334v3.498H16.06v5.258h4.948v14.452 C21.988,43.9,22.981,44,24,44c0.921,0,1.82-0.084,2.707-0.204V29.301z"
    })]
  }));
}
var Facebook_default = FacebookIcon;

// node_modules/.pnpm/@toolpad+core@0.16.0_d46cabc535141b65151421393ad6a060/node_modules/@toolpad/core/esm/SignInPage/icons/Twitter.js
var React5 = __toESM(require_react(), 1);
var import_jsx_runtime7 = __toESM(require_jsx_runtime(), 1);
var _svg3;
function TwitterIcon() {
  return _svg3 || (_svg3 = (0, import_jsx_runtime7.jsx)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "117.8 161.3 464.4 377.4",
    width: "24",
    height: "24",
    children: (0, import_jsx_runtime7.jsx)("path", {
      fill: "#1da1f2",
      d: "M582.2 206c-17 7.5-35.4 12.7-54.7 15a95.5 95.5 0 0 0 41.9-52.8 190.2 190.2 0 0 1-60.5 23.2A95.2 95.2 0 0 0 344 256.6a97.3 97.3 0 0 0 2.4 21.7c-79.2-4-149.4-42-196.4-99.6A95.2 95.2 0 0 0 179.6 306a95 95 0 0 1-43.1-11.9v1.2a95.3 95.3 0 0 0 76.4 93.5 96 96 0 0 1-25 3.3 96 96 0 0 1-18-1.7 95.3 95.3 0 0 0 89 66.1 191.2 191.2 0 0 1-141 39.5c42 27 92.1 42.8 146 42.8 175.2 0 271-145.2 271-271 0-4.2 0-8.3-.3-12.4a193.7 193.7 0 0 0 47.6-49.3z"
    })
  }));
}
var Twitter_default = TwitterIcon;

// node_modules/.pnpm/@toolpad+core@0.16.0_d46cabc535141b65151421393ad6a060/node_modules/@toolpad/core/esm/SignInPage/icons/Instagram.js
var React6 = __toESM(require_react(), 1);
var import_jsx_runtime8 = __toESM(require_jsx_runtime(), 1);
var _svg4;
function InstagramIcon() {
  return _svg4 || (_svg4 = (0, import_jsx_runtime8.jsxs)("svg", {
    width: "24",
    height: "24",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 3364.7 3364.7",
    children: [(0, import_jsx_runtime8.jsxs)("defs", {
      children: [(0, import_jsx_runtime8.jsxs)("radialGradient", {
        id: "a",
        cx: "217.8",
        cy: "3291",
        r: "4271.9",
        gradientUnits: "userSpaceOnUse",
        children: [(0, import_jsx_runtime8.jsx)("stop", {
          offset: ".1",
          stopColor: "#fa8f21"
        }), (0, import_jsx_runtime8.jsx)("stop", {
          offset: ".8",
          stopColor: "#d82d7e"
        })]
      }), (0, import_jsx_runtime8.jsxs)("radialGradient", {
        id: "b",
        cx: "2330.6",
        cy: "3182.9",
        r: "3759.3",
        gradientUnits: "userSpaceOnUse",
        children: [(0, import_jsx_runtime8.jsx)("stop", {
          offset: ".6",
          stopColor: "#8c3aaa",
          stopOpacity: "0"
        }), (0, import_jsx_runtime8.jsx)("stop", {
          offset: "1",
          stopColor: "#8c3aaa"
        })]
      })]
    }), (0, import_jsx_runtime8.jsx)("path", {
      fill: "url(#a)",
      d: "M853.2 3352.8c-200.1-9.1-308.8-42.4-381.1-70.6-95.8-37.3-164.1-81.7-236-153.5s-116.4-140.1-153.5-235.9c-28.2-72.3-61.5-181-70.6-381.1-10-216.3-12-281.2-12-829.2s2.2-612.8 11.9-829.3C21 653.1 54.5 544.6 82.5 472.1A640 640 0 0 1 236 236 633.5 633.5 0 0 1 472 82.5C544.3 54.3 653 21 853.1 11.9 1069.5 2 1134.5 0 1682.3 0c548 0 612.8 2.2 829.3 11.9 200.1 9.1 308.6 42.6 381.1 70.6 95.8 37.1 164.1 81.7 236 153.5s116.2 140.2 153.5 236c28.2 72.3 61.5 181 70.6 381.1 9.9 216.5 11.9 281.3 11.9 829.3 0 547.8-2 612.8-11.9 829.3-9.1 200.1-42.6 308.8-70.6 381.1-37.3 95.8-81.7 164.1-153.5 235.9s-140.2 116.2-236 153.5c-72.3 28.2-181 61.5-381.1 70.6-216.3 9.9-281.3 11.9-829.3 11.9-547.8 0-612.8-1.9-829.1-11.9"
    }), (0, import_jsx_runtime8.jsx)("path", {
      fill: "url(#b)",
      d: "M853.2 3352.8c-200.1-9.1-308.8-42.4-381.1-70.6-95.8-37.3-164.1-81.7-236-153.5s-116.4-140.1-153.5-235.9c-28.2-72.3-61.5-181-70.6-381.1-10-216.3-12-281.2-12-829.2s2.2-612.8 11.9-829.3C21 653.1 54.5 544.6 82.5 472.1A640 640 0 0 1 236 236 633.5 633.5 0 0 1 472 82.5C544.3 54.3 653 21 853.1 11.9 1069.5 2 1134.5 0 1682.3 0c548 0 612.8 2.2 829.3 11.9 200.1 9.1 308.6 42.6 381.1 70.6 95.8 37.1 164.1 81.7 236 153.5s116.2 140.2 153.5 236c28.2 72.3 61.5 181 70.6 381.1 9.9 216.5 11.9 281.3 11.9 829.3 0 547.8-2 612.8-11.9 829.3-9.1 200.1-42.6 308.8-70.6 381.1-37.3 95.8-81.7 164.1-153.5 235.9s-140.2 116.2-236 153.5c-72.3 28.2-181 61.5-381.1 70.6-216.3 9.9-281.3 11.9-829.3 11.9-547.8 0-612.8-1.9-829.1-11.9"
    }), (0, import_jsx_runtime8.jsx)("path", {
      fill: "#fff",
      d: "M1269.3 1689.5a416.6 416.6 0 1 1 833.2 0 416.6 416.6 0 0 1-833.3 0m-225.2 0a641.8 641.8 0 1 0 1283.7 0 641.8 641.8 0 0 0-1283.7 0m1159.1-667.3a150 150 0 1 0 150-150 150 150 0 0 0-150 150M1181 2707c-122-5.5-188.2-25.8-232.2-43-58.3-22.7-100-49.8-143.8-93.5s-70.8-85.3-93.5-143.7c-17.1-44-37.4-110.2-43-232.1-6-131.8-7.2-171.3-7.2-505.2s1.3-373.2 7.2-505.1c5.6-121.9 26-188 43-232.1 22.8-58.4 49.8-100 93.5-143.8s85.4-70.9 143.8-93.5c44-17.2 110.3-37.5 232.1-43 131.8-6 171.4-7.3 505-7.3s373.3 1.3 505.2 7.3c121.9 5.6 188 26 232.1 43 58.4 22.6 100 49.8 143.8 93.5s70.8 85.4 93.5 143.8c17.2 44 37.5 110.2 43 232.1 6 131.9 7.3 171.3 7.3 505.2s-1.2 373.2-7.3 505.1c-5.5 121.9-26 188.1-43 232.1-22.7 58.4-49.8 100-93.5 143.7s-85.4 70.8-143.8 93.5c-44 17.2-110.2 37.5-232.1 43-131.8 6-171.3 7.3-505.1 7.3s-373.3-1.2-505-7.3m-10.4-2260c-133 6.2-224 27.3-303.4 58.2-82.2 31.9-151.9 74.7-221.4 144.1S533.4 788.5 501.5 870.8c-31 79.4-52 170.3-58 303.4-6.2 133.3-7.6 175.9-7.6 515.3s1.4 382 7.5 515.4c6 133 27.2 224 58 303.4 32 82.2 74.7 152 144.3 221.4S784.8 2842 867 2874c79.6 30.9 170.3 52 303.4 58 133.4 6.1 175.9 7.6 515.4 7.6s382-1.4 515.3-7.6c133-6 224-27.1 303.4-58 82.2-32 151.9-74.7 221.4-144.2s112.2-139.2 144.2-221.4c31-79.5 52.1-170.4 58-303.4 6.1-133.4 7.5-176 7.5-515.4s-1.4-382-7.4-515.3c-6-133.1-27.2-224-58-303.4-32-82.2-74.8-151.9-144.3-221.5s-139.2-112.2-221.3-144.2c-79.5-30.9-170.4-52-303.4-58-133.3-6.1-175.9-7.6-515.3-7.6s-382.1 1.4-515.4 7.6"
    })]
  }, "instagram"));
}

// node_modules/.pnpm/@toolpad+core@0.16.0_d46cabc535141b65151421393ad6a060/node_modules/@toolpad/core/esm/SignInPage/icons/TikTok.js
var React7 = __toESM(require_react(), 1);
var import_jsx_runtime9 = __toESM(require_jsx_runtime(), 1);
var _svg5;
function TikTokIcon() {
  return _svg5 || (_svg5 = (0, import_jsx_runtime9.jsxs)("svg", {
    viewBox: "-58.35000000000002 -186.70564362582354 2548.289756960746 2538.849821747569",
    width: "24",
    height: "24",
    xmlns: "http://www.w3.org/2000/svg",
    children: [(0, import_jsx_runtime9.jsxs)("g", {
      fill: "#25f4ee",
      children: [(0, import_jsx_runtime9.jsx)("path", {
        d: "M779.38 890.55v-88.12a650.81 650.81 0 0 0-92.45-7.94c-299.8-.64-565.22 193.64-655.25 479.6S47.92 1871.34 294 2042.56a684.7 684.7 0 0 1 485.36-1152z"
      }), (0, import_jsx_runtime9.jsx)("path", {
        d: "M796 1888.72c167.62-.23 305.4-132.28 312.74-299.74V94.62h273A512.17 512.17 0 0 1 1373.8 0h-373.41v1492.92c-6.21 168.31-144.32 301.63-312.74 301.9a317.76 317.76 0 0 1-144.45-36.11A313.48 313.48 0 0 0 796 1888.72zM1891.66 601.64v-83.06a509.85 509.85 0 0 1-282.4-85.22 517.79 517.79 0 0 0 282.4 168.28z"
      })]
    }), (0, import_jsx_runtime9.jsx)("path", {
      d: "M1609.26 433.36a514.19 514.19 0 0 1-127.84-339.47h-99.68a517.16 517.16 0 0 0 227.52 339.47zM686.93 1167.9a313.46 313.46 0 0 0-144.46 590.81A312.75 312.75 0 0 1 796 1262.51a329.69 329.69 0 0 1 92.44 14.49V897.05a654.77 654.77 0 0 0-92.44-7.22h-16.62v288.9a321.13 321.13 0 0 0-92.45-10.83z",
      fill: "#fe2c55"
    }), (0, import_jsx_runtime9.jsx)("path", {
      d: "M1891.66 601.64v288.91a886.23 886.23 0 0 1-517.86-168.29v759.1c-.8 378.78-308.09 685.43-686.87 685.43A679.65 679.65 0 0 1 294 2042.56 685.43 685.43 0 0 0 1481.42 1576V819.05A887.71 887.71 0 0 0 2000 985.17v-372a529.59 529.59 0 0 1-108.34-11.53z",
      fill: "#fe2c55"
    }), (0, import_jsx_runtime9.jsx)("path", {
      d: "M1373.8 1481.36v-759.1a886.11 886.11 0 0 0 518.58 166.12v-288.9a517.87 517.87 0 0 1-283.12-166.12 517.16 517.16 0 0 1-227.52-339.47h-273V1589a313.46 313.46 0 0 1-567 171.17 313.46 313.46 0 0 1 144.46-590.83 321.35 321.35 0 0 1 92.45 14.45V894.88A684.71 684.71 0 0 0 293.29 2050.5a679.65 679.65 0 0 0 393.64 116.29c378.78 0 686.07-306.65 686.87-685.43z"
    })]
  }));
}
var TikTok_default = TikTokIcon;

// node_modules/.pnpm/@toolpad+core@0.16.0_d46cabc535141b65151421393ad6a060/node_modules/@toolpad/core/esm/SignInPage/icons/LinkedIn.js
var React8 = __toESM(require_react(), 1);
var import_jsx_runtime10 = __toESM(require_jsx_runtime(), 1);
var _svg6;
function LinkedInIcon() {
  return _svg6 || (_svg6 = (0, import_jsx_runtime10.jsxs)("svg", {
    viewBox: "0 5 2490 2490.0000000000005",
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    children: [(0, import_jsx_runtime10.jsx)("path", {
      d: "M185.2 313.1H2252V2291H185.2z",
      fill: "#fff"
    }), (0, import_jsx_runtime10.jsx)("path", {
      d: "M0 183.4C0 84.9 82.4 5 184 5h2122c101.6 0 184 79.9 184 178.4v2133.3c0 98.5-82.4 178.3-184 178.3H184c-101.6 0-184-79.8-184-178.3z",
      fill: "#0a66c2"
    }), (0, import_jsx_runtime10.jsx)("path", {
      d: "M756.7 2088.8v-1121H384.1v1121zm-186.2-1274c129.9 0 210.8-86.1 210.8-193.7-2.4-110-80.9-193.7-208.3-193.7-127.5 0-210.8 83.7-210.8 193.7 0 107.6 80.8 193.7 205.9 193.7zm392.4 1274h372.6v-626c0-33.5 2.4-67 12.3-90.9 26.9-67 88.2-136.3 191.2-136.3 134.8 0 188.7 102.8 188.7 253.5v599.6h372.6V1446c0-344.3-183.8-504.5-428.9-504.5-201 0-289.2 112.3-338.3 188.8h2.5V967.8H962.9c4.9 105.2 0 1121 0 1121z",
      fill: "#fff"
    })]
  }));
}
var LinkedIn_default = LinkedInIcon;

// node_modules/.pnpm/@toolpad+core@0.16.0_d46cabc535141b65151421393ad6a060/node_modules/@toolpad/core/esm/SignInPage/icons/Slack.js
var React9 = __toESM(require_react(), 1);
var import_jsx_runtime11 = __toESM(require_jsx_runtime(), 1);
var _svg7;
function SlackIcon() {
  return _svg7 || (_svg7 = (0, import_jsx_runtime11.jsx)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 2447.6 2452.5",
    width: "24",
    height: "24",
    children: (0, import_jsx_runtime11.jsxs)("g", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      children: [(0, import_jsx_runtime11.jsx)("path", {
        fill: "#36c5f0",
        d: "M897.4 0a245 245 0 0 0-244.7 245.2 245 245 0 0 0 244.8 245.2h244.8V245.3A245.2 245.2 0 0 0 897.4 0c.1 0 .1 0 0 0m0 654H244.8A245 245 0 0 0 0 899.2a245 245 0 0 0 244.7 245.3h652.7a245 245 0 0 0 244.8-245.2A245 245 0 0 0 897.4 654z"
      }), (0, import_jsx_runtime11.jsx)("path", {
        fill: "#2eb67d",
        d: "M2447.6 899.2A245 245 0 0 0 2202.8 654 245 245 0 0 0 1958 899.2v245.3h244.8a245 245 0 0 0 244.8-245.3zm-652.7 0v-654A245 245 0 0 0 1550.2 0a245 245 0 0 0-244.8 245.2v654a245 245 0 0 0 244.7 245.3 245 245 0 0 0 244.8-245.3z"
      }), (0, import_jsx_runtime11.jsx)("path", {
        fill: "#ecb22e",
        d: "M1550.1 2452.5a245 245 0 0 0 244.8-245.2 245 245 0 0 0-244.8-245.2h-244.8v245.2a245.1 245.1 0 0 0 244.8 245.2zm0-654.1h652.7a245 245 0 0 0 244.8-245.2 245 245 0 0 0-244.7-245.3h-652.7a245 245 0 0 0-244.8 245.2 245 245 0 0 0 244.7 245.3z"
      }), (0, import_jsx_runtime11.jsx)("path", {
        fill: "#e01e5a",
        d: "M0 1553.2a245 245 0 0 0 244.8 245.2 245 245 0 0 0 244.8-245.2V1308H244.8A245 245 0 0 0 0 1553.2zm652.7 0v654a245 245 0 0 0 244.7 245.3 245 245 0 0 0 244.8-245.2v-653.9a244.8 244.8 0 1 0-489.5-.2s0 .1 0 0"
      })]
    })
  }));
}

// node_modules/.pnpm/@toolpad+core@0.16.0_d46cabc535141b65151421393ad6a060/node_modules/@toolpad/core/esm/SignInPage/icons/Spotify.js
var React10 = __toESM(require_react(), 1);
var import_jsx_runtime12 = __toESM(require_jsx_runtime(), 1);
var _svg8;
function SpotifyIcon() {
  return _svg8 || (_svg8 = (0, import_jsx_runtime12.jsx)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 2931 2931",
    width: "24",
    height: "24",
    children: (0, import_jsx_runtime12.jsx)("path", {
      d: "M1465.5 0C656.1 0 0 656.1 0 1465.5S656.1 2931 1465.5 2931 2931 2274.9 2931 1465.5C2931 656.2 2274.9.1 1465.5 0zm672.1 2113.6A91.3 91.3 0 0 1 2012 2144c-344.1-210.3-777.3-257.8-1287.4-141.3a91.3 91.3 0 1 1-40.7-178.1C1242.1 1697.1 1721 1752 2107.3 1988a91.4 91.4 0 0 1 30.3 125.6zm179.3-398.9a114.3 114.3 0 0 1-157.2 37.6c-393.8-242.1-994.4-312.2-1460.3-170.8a114.4 114.4 0 0 1-142.6-76.1 114.5 114.5 0 0 1 76.2-142.5c532.2-161.5 1193.9-83.3 1646.2 194.7a114.2 114.2 0 0 1 37.7 157.1zm15.4-415.6c-472.4-280.5-1251.6-306.3-1702.6-169.5a137 137 0 1 1-79.5-262.3c517.7-157.1 1378.2-126.8 1922 196a137.1 137.1 0 0 1-139.9 235.8z"
    })
  }));
}
var Spotify_default = SpotifyIcon;

// node_modules/.pnpm/@toolpad+core@0.16.0_d46cabc535141b65151421393ad6a060/node_modules/@toolpad/core/esm/SignInPage/icons/Twitch.js
var React11 = __toESM(require_react(), 1);
var import_jsx_runtime13 = __toESM(require_jsx_runtime(), 1);
var _svg9;
function TwitchIcon() {
  return _svg9 || (_svg9 = (0, import_jsx_runtime13.jsxs)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    viewBox: "0 0 300 300",
    children: [(0, import_jsx_runtime13.jsx)("path", {
      fill: "#65459B",
      fillRule: "evenodd",
      d: "M215.2 260.8h-58.7L117.4 300H78.3v-39.2H6.6V52.2L26.1 0h267.3v182.6l-78.2 78.2zm52.2-91.2V26.1H52.2v189.1h58.7v39.1l39.1-39.1h71.7l45.7-45.6z",
      clipRule: "evenodd"
    }), (0, import_jsx_runtime13.jsx)("path", {
      fill: "#65459B",
      d: "M195.6 78.3v78.3h26.1V78.3h-26.1zm-71.7 78.2H150V78.3h-26.1v78.2z"
    })]
  }));
}
var Twitch_default = TwitchIcon;

// node_modules/.pnpm/@toolpad+core@0.16.0_d46cabc535141b65151421393ad6a060/node_modules/@toolpad/core/esm/SignInPage/icons/Discord.js
var React12 = __toESM(require_react(), 1);
var import_jsx_runtime14 = __toESM(require_jsx_runtime(), 1);
var _svg10;
function DiscordIcon() {
  return _svg10 || (_svg10 = (0, import_jsx_runtime14.jsx)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    preserveAspectRatio: "xMidYMid",
    viewBox: "0 0 256 199",
    width: "24",
    height: "24",
    children: (0, import_jsx_runtime14.jsx)("path", {
      fill: "#5865F2",
      d: "M216.9 16.6A208.5 208.5 0 0 0 164 0c-2.2 4.1-4.9 9.6-6.7 14a194 194 0 0 0-58.6 0C97 9.6 94.2 4.1 92 0a207.8 207.8 0 0 0-53 16.6A221.5 221.5 0 0 0 1 165a211.2 211.2 0 0 0 65 33 161 161 0 0 0 13.8-22.8c-7.6-2.9-15-6.5-21.8-10.6l5.3-4.3a149.3 149.3 0 0 0 129.6 0c1.7 1.5 3.5 3 5.3 4.3a136 136 0 0 1-21.9 10.6c4 8 8.7 15.7 13.9 22.9a210.7 210.7 0 0 0 64.8-33.2c5.3-56.3-9-105.1-38-148.4ZM85.5 135.1c-12.7 0-23-11.8-23-26.2 0-14.4 10.1-26.2 23-26.2 12.8 0 23.2 11.8 23 26.2 0 14.4-10.2 26.2-23 26.2Zm85 0c-12.6 0-23-11.8-23-26.2 0-14.4 10.2-26.2 23-26.2 12.9 0 23.3 11.8 23 26.2 0 14.4-10.1 26.2-23 26.2Z"
    })
  }));
}
var Discord_default = DiscordIcon;

// node_modules/.pnpm/@toolpad+core@0.16.0_d46cabc535141b65151421393ad6a060/node_modules/@toolpad/core/esm/SignInPage/icons/Line.js
var React13 = __toESM(require_react(), 1);
var import_jsx_runtime15 = __toESM(require_jsx_runtime(), 1);
var _svg11;
function LineIcon() {
  return _svg11 || (_svg11 = (0, import_jsx_runtime15.jsxs)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 377.8 377.8",
    height: "24",
    width: "24",
    children: [(0, import_jsx_runtime15.jsx)("path", {
      fill: "#00C300",
      fillRule: "evenodd",
      d: "M77.3 0h223.1a77.5 77.5 0 0 1 77.4 77.3v223.1a77.5 77.5 0 0 1-77.4 77.4h-223A77.5 77.5 0 0 1 0 300.4v-223A77.5 77.5 0 0 1 77.3 0z",
      clipRule: "evenodd"
    }), (0, import_jsx_runtime15.jsx)("path", {
      fill: "#FFF",
      fillRule: "evenodd",
      d: "M188.5 62.6c76.6 0 138.6 49.7 138.6 111A94.8 94.8 0 0 1 304 235l-.1.1a119 119 0 0 1-15.1 15c-38.3 35.5-101.4 77.6-109.7 71.1-7.3-5.6 11.9-33.3-10.2-37.9l-4.6-.6C99.3 273.5 50 228.1 50 173.5c0-61.3 62-111 138.6-111z",
      clipRule: "evenodd"
    }), (0, import_jsx_runtime15.jsx)("path", {
      fill: "#00C300",
      fillRule: "evenodd",
      d: "M108.1 209h28c4 0 7.2-3.3 7.2-7.3v-.6c0-4-3.3-7.2-7.2-7.2h-20.2V148c0-4-3.2-7.2-7.2-7.2h-.6c-4 0-7.2 3.2-7.2 7.2v53.6c0 4 3.2 7.3 7.2 7.3zm173.2-33.6v-.7c0-4-3.2-7.2-7.2-7.2H254v-11.4h20c4 0 7.3-3.3 7.3-7.3v-.6c0-4-3.2-7.2-7.2-7.2h-28c-4 0-7.2 3.3-7.2 7.2V202c0 4 3.3 7.2 7.2 7.2h28c4 0 7.2-3.3 7.2-7.2v-.7c0-4-3.2-7.2-7.2-7.2H254v-11.4h20c4 0 7.3-3.3 7.3-7.2zm-53.7 31.4a7.2 7.2 0 0 0 2-5V148c0-4-3.2-7.2-7.2-7.2h-.6c-4 0-7.2 3.2-7.2 7.2v31.5l-26.1-35a7.2 7.2 0 0 0-6.3-3.7h-.6c-4 0-7.2 3.2-7.2 7.2v53.6c0 4 3.2 7.3 7.2 7.3h.6c4 0 7.2-3.3 7.2-7.3v-32l26.3 36 .6.6a6 6 0 0 0 2.8 2.1 6 6 0 0 0 2.7.6h.6a7.2 7.2 0 0 0 3.4-.9 5 5 0 0 0 1.8-1.3zm-71.3 2.2h.6c4 0 7.3-3.3 7.3-7.3v-53.6c0-4-3.3-7.2-7.3-7.2h-.6c-4 0-7.2 3.2-7.2 7.2v53.6c0 4 3.3 7.3 7.2 7.3z",
      clipRule: "evenodd"
    })]
  }));
}

// node_modules/.pnpm/@toolpad+core@0.16.0_d46cabc535141b65151421393ad6a060/node_modules/@toolpad/core/esm/SignInPage/icons/Auth0.js
var React14 = __toESM(require_react(), 1);
var import_jsx_runtime16 = __toESM(require_jsx_runtime(), 1);
var _svg12;
function Auth0Icon() {
  return _svg12 || (_svg12 = (0, import_jsx_runtime16.jsx)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    viewBox: "0 0 64 64",
    children: (0, import_jsx_runtime16.jsx)("path", {
      d: "M49.012 51.774L42.514 32l17.008-12.22h-21.02L32.005 0h21.032l6.506 19.78c3.767 11.468-.118 24.52-10.53 31.993zm-34.023 0L31.998 64l17.015-12.226-17.008-12.22zm-10.516-32c-3.976 12.1.64 24.917 10.5 32.007v-.007L21.482 32 4.474 19.774l21.025.007L31.998 0H10.972z",
      fill: "#eb5424"
    })
  }));
}
var Auth0_default = Auth0Icon;

// node_modules/.pnpm/@toolpad+core@0.16.0_d46cabc535141b65151421393ad6a060/node_modules/@toolpad/core/esm/SignInPage/icons/MicrosoftEntra.js
var React15 = __toESM(require_react(), 1);
var import_jsx_runtime17 = __toESM(require_jsx_runtime(), 1);
var _svg13;
function MicrosoftEntraIdIcon() {
  return _svg13 || (_svg13 = (0, import_jsx_runtime17.jsxs)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    height: "24",
    width: "24",
    children: [(0, import_jsx_runtime17.jsx)("path", {
      fill: "#f3f3f3",
      d: "M0 0h23v23H0z"
    }), (0, import_jsx_runtime17.jsx)("path", {
      fill: "#f35325",
      d: "M1 1h10v10H1z"
    }), (0, import_jsx_runtime17.jsx)("path", {
      fill: "#81bc06",
      d: "M12 1h10v10H12z"
    }), (0, import_jsx_runtime17.jsx)("path", {
      fill: "#05a6f0",
      d: "M1 12h10v10H1z"
    }), (0, import_jsx_runtime17.jsx)("path", {
      fill: "#ffba08",
      d: "M12 12h10v10H12z"
    })]
  }));
}

// node_modules/.pnpm/@toolpad+core@0.16.0_d46cabc535141b65151421393ad6a060/node_modules/@toolpad/core/esm/SignInPage/icons/Cognito.js
var React16 = __toESM(require_react(), 1);
var import_jsx_runtime18 = __toESM(require_jsx_runtime(), 1);
var _svg14;
function CognitoIcon() {
  return _svg14 || (_svg14 = (0, import_jsx_runtime18.jsxs)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    preserveAspectRatio: "xMidYMid",
    viewBox: "0 0 256 299",
    width: "24",
    height: "24",
    children: [(0, import_jsx_runtime18.jsx)("path", {
      fill: "#7A3E65",
      d: "m208.8 58 25.7-6.6.2.3.7 155.6-.9.9-5.3.2-20.1-3.2-.3-.7V58M59.7 219h.1l68 19.7.2.2.3.2-.1 59.2-.2.3-68.3-33.2V219"
    }), (0, import_jsx_runtime18.jsx)("path", {
      fill: "#CFB2C1",
      d: "M208.8 204.5 128 223.8 87.6 214l-27.9 5 68.3 19.9 105.4-28.6 1.1-2.1-25.7-3.7"
    }), (0, import_jsx_runtime18.jsx)("path", {
      fill: "#512843",
      d: "m196.3 79.6-.7-.7-66.9-19.5-.7.3-.7-.3L22.1 89.7l-.6.7.8.5 24.1 3.5.8-.3L128 74.8l40.5 9.8 27.9-5"
    }), (0, import_jsx_runtime18.jsx)("path", {
      fill: "#C17B9E",
      d: "m47.2 240.5-25.7 6.3v-.2l-1-155 1-1.2 25.7 3.7v146.4"
    }), (0, import_jsx_runtime18.jsx)("path", {
      fill: "#7A3E65",
      d: "m82 180.4 46 5.4.3-.5.2-72-.5-.5-46 5.4v62.2"
    }), (0, import_jsx_runtime18.jsx)("path", {
      fill: "#C17B9E",
      d: "m174 180.4-46 5.4v-73l46 5.4v62.2m22.3-100.8L128 59.7V0l68.3 33.2v46.4"
    }), (0, import_jsx_runtime18.jsx)("path", {
      fill: "#7A3E65",
      d: "M128 0 0 61.8v175l21.5 10V90.4L128 59.7V0"
    }), (0, import_jsx_runtime18.jsx)("path", {
      fill: "#C17B9E",
      d: "M234.5 51.4v156.8L128 238.9v59.7l128-61.8v-175l-21.5-10.4"
    })]
  }));
}
var Cognito_default = CognitoIcon;

// node_modules/.pnpm/@toolpad+core@0.16.0_d46cabc535141b65151421393ad6a060/node_modules/@toolpad/core/esm/SignInPage/icons/GitLab.js
var React17 = __toESM(require_react(), 1);
var import_jsx_runtime19 = __toESM(require_jsx_runtime(), 1);
var _svg15;
function GitLabIcon() {
  return _svg15 || (_svg15 = (0, import_jsx_runtime19.jsxs)("svg", {
    height: "24",
    viewBox: "-.1 .5 960.2 923.9",
    width: "24",
    xmlns: "http://www.w3.org/2000/svg",
    children: [(0, import_jsx_runtime19.jsx)("path", {
      d: "m958.9 442.4c1.1 26.1-2 52.1-9.2 77.2-7.1 25.1-18.3 48.8-33.1 70.3a240.43 240.43 0 0 1 -53.6 56.2l-.5.4-199.9 149.8-98.3 74.5-59.9 45.2c-3.5 2.7-7.4 4.7-11.5 6.1s-8.5 2.1-12.9 2.1c-4.3 0-8.7-.7-12.8-2.1s-8-3.4-11.5-6.1l-59.9-45.2-98.3-74.5-198.7-148.9-1.2-.8-.4-.4c-20.9-15.7-39-34.7-53.8-56.2s-26-45.3-33.2-70.4c-7.2-25.1-10.3-51.2-9.2-77.3 1.2-26.1 6.5-51.8 15.8-76.2l1.3-3.5 130.7-340.5q1-2.5 2.4-4.8 1.3-2.3 3.1-4.3 1.7-2.1 3.7-3.9 2-1.7 4.2-3.2c3.1-1.9 6.3-3.3 9.8-4.1 3.4-.9 7-1.3 10.5-1.1 3.6.2 7.1.9 10.4 2.2 3.3 1.2 6.5 3 9.3 5.2q2 1.7 3.9 3.6 1.8 2 3.2 4.3 1.5 2.2 2.6 4.7 1.1 2.4 1.8 5l88.1 269.7h356.6l88.1-269.7q.7-2.6 1.9-5 1.1-2.4 2.6-4.7 1.4-2.2 3.2-4.2 1.8-2 3.9-3.7c2.8-2.2 5.9-3.9 9.2-5.2 3.4-1.2 6.9-1.9 10.4-2.1 3.6-.2 7.1.1 10.6 1 3.4.9 6.7 2.3 9.7 4.2q2.3 1.4 4.3 3.2 2 1.7 3.7 3.8 1.7 2.1 3.1 4.4 1.3 2.3 2.3 4.8l130.5 340.6 1.3 3.5c9.3 24.3 14.6 50 15.7 76.1z",
      fill: "#e24329"
    }), (0, import_jsx_runtime19.jsx)("path", {
      d: "m959 442.5c1.1 26-2 52.1-9.2 77.2s-18.4 48.9-33.2 70.4-32.9 40.5-53.7 56.2l-.5.4-199.9 149.8s-84.9-64.1-182.5-138l286.5-216.8c12.9-9.7 26.4-18.6 40.3-26.8 13.9-8.3 28.3-15.7 43-22.3 14.8-6.6 29.9-12.5 45.2-17.4 15.4-5 31-9.1 46.9-12.4l1.3 3.5c9.3 24.4 14.6 50.1 15.8 76.2z",
      fill: "#fc6d26"
    }), (0, import_jsx_runtime19.jsx)("path", {
      d: "m480 658.5c97.6 73.7 182.6 138 182.6 138l-98.3 74.5-59.9 45.2c-3.5 2.7-7.4 4.7-11.5 6.1s-8.5 2.1-12.9 2.1c-4.3 0-8.7-.7-12.8-2.1s-8-3.4-11.5-6.1l-59.9-45.2-98.3-74.5s84.9-64.3 182.5-138z",
      fill: "#fca326"
    }), (0, import_jsx_runtime19.jsx)("path", {
      d: "m480 658.3c-97.7 73.9-182.5 138-182.5 138l-198.7-148.9-1.2-.8-.4-.4c-20.9-15.7-39-34.7-53.8-56.2s-26-45.3-33.2-70.4c-7.2-25.1-10.3-51.2-9.2-77.3 1.2-26.1 6.5-51.8 15.8-76.2l1.3-3.5c15.9 3.3 31.5 7.4 46.9 12.4 15.3 5 30.4 10.8 45.2 17.5 14.7 6.6 29.1 14.1 43 22.3s27.3 17.2 40.3 26.9z",
      fill: "#fc6d26"
    })]
  }));
}

// node_modules/.pnpm/@toolpad+core@0.16.0_d46cabc535141b65151421393ad6a060/node_modules/@toolpad/core/esm/SignInPage/icons/Keycloak.js
var React18 = __toESM(require_react(), 1);
var import_jsx_runtime20 = __toESM(require_jsx_runtime(), 1);
var _svg16;
function KeycloakIcon() {
  return _svg16 || (_svg16 = (0, import_jsx_runtime20.jsxs)("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 1024 1024",
    xmlns: "http://www.w3.org/2000/svg",
    children: [(0, import_jsx_runtime20.jsx)("circle", {
      cx: "512",
      cy: "512",
      r: "512",
      fill: "#008aaa"
    }), (0, import_jsx_runtime20.jsx)("path", {
      d: "M786.2 395.5h-80.6c-1.5 0-3-.8-3.7-2.1l-64.7-112.2c-.8-1.3-2.2-2.1-3.8-2.1h-264c-1.5 0-3 .8-3.7 2.1l-67.3 116.4-64.8 112.2c-.7 1.3-.7 2.9 0 4.3l64.8 112.2 67.2 116.5c.7 1.3 2.2 2.2 3.7 2.1h264.1c1.5 0 3-.8 3.8-2.1L702 630.6c.7-1.3 2.2-2.2 3.7-2.1h80.6c2.7 0 4.8-2.2 4.8-4.8V400.4c-.1-2.7-2.3-4.9-4.9-4.9zM477.5 630.6l-20.3 35c-.3.5-.8 1-1.3 1.3-.6.3-1.2.5-1.9.5h-40.3c-1.4 0-2.7-.7-3.3-2l-60.1-104.3-5.9-10.3-21.6-36.9c-.3-.5-.5-1.1-.4-1.8 0-.6.2-1.3.5-1.8l21.7-37.6 65.9-114c.7-1.2 2-2 3.3-2H454c.7 0 1.4.2 2.1.5.5.3 1 .7 1.3 1.3l20.3 35.2c.6 1.2.5 2.7-.2 3.8l-65.1 112.8c-.3.5-.4 1.1-.4 1.6 0 .6.2 1.1.4 1.6l65.1 112.7c.9 1.5.8 3.1 0 4.4zm202.1-116.7L658 550.8l-5.9 10.3L592 665.4c-.7 1.2-1.9 2-3.3 2h-40.3c-.7 0-1.3-.2-1.9-.5-.5-.3-1-.7-1.3-1.3l-20.3-35c-.9-1.3-.9-2.9-.1-4.2l65.1-112.7c.3-.5.4-1.1.4-1.6 0-.6-.2-1.1-.4-1.6l-65.1-112.8c-.7-1.2-.8-2.6-.2-3.8l20.3-35.2c.3-.5.8-1 1.3-1.3.6-.4 1.3-.5 2.1-.5h40.4c1.4 0 2.7.7 3.3 2l65.9 114 21.7 37.6c.3.6.5 1.2.5 1.8 0 .4-.2 1-.5 1.6z",
      fill: "#fff"
    })]
  }, "keycloak"));
}

// node_modules/.pnpm/@toolpad+core@0.16.0_d46cabc535141b65151421393ad6a060/node_modules/@toolpad/core/esm/SignInPage/icons/Okta.js
var React19 = __toESM(require_react(), 1);
var import_jsx_runtime21 = __toESM(require_jsx_runtime(), 1);
var _svg17;
function OktaIcon() {
  return _svg17 || (_svg17 = (0, import_jsx_runtime21.jsx)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    preserveAspectRatio: "xMidYMid",
    viewBox: "0 0 256 256",
    height: "24",
    width: "24",
    children: (0, import_jsx_runtime21.jsx)("path", {
      fill: "#000000",
      d: "m140.8 1.8-5.2 64.8a66.1 66.1 0 0 0-17 .3l-3-31.4c0-1 .8-1.9 1.8-1.9h5.3l-2.6-31.8c0-1 .7-1.8 1.7-1.8h17.4c1 0 1.8.9 1.6 1.8ZM96.8 5c-.2-1-1.2-1.5-2.1-1.2l-16.4 6c-1 .4-1.4 1.4-1 2.3l13.4 29-5 1.9c-1 .3-1.4 1.4-1 2.2l13.6 28.5a61 61 0 0 1 15.9-6L96.9 5Zm-40 18 37.6 53a61.7 61.7 0 0 0-12.8 11.2L59 65c-.7-.7-.6-1.9 0-2.5l4.2-3.4-22.4-22.7c-.7-.7-.6-1.8.1-2.5l13.3-11.1c.8-.7 1.9-.5 2.5.2ZM25 53.8c-.7-.6-1.9-.3-2.4.5L14 69.4c-.5.9-.1 2 .7 2.4l29 13.6-2.8 4.6c-.5.9-.1 2 .8 2.4l28.8 13.1c2-5.3 4.8-10.3 8.2-14.8l-53.6-37Zm-21 41c.1-1 1.1-1.6 2-1.4l63 16.4c-1.6 5.3-2.6 11-2.7 16.8L34.7 124c-1 0-1.7-1-1.5-2l1-5.2-31.9-3c-1 0-1.6-1-1.5-2l3-17.2v.1Zm-2.4 42.4c-1 .1-1.6 1-1.5 2l3 17.2c.2 1 1.2 1.5 2.1 1.3l31-8 .9 5.3c0 1 1 1.5 2 1.3l30.5-8.4c-1.8-5.3-3-10.9-3.2-16.6l-64.9 6h.1Zm10.1 45.1c-.5-.8-.1-1.9.7-2.3l58.7-28a60.6 60.6 0 0 0 8.8 14.6L54 185c-.8.6-2 .4-2.4-.5l-2.7-4.7L22.7 198c-.8.5-1.9.3-2.4-.6l-8.8-15h.1Zm71.2-12.2-45.7 46.3c-.7.7-.6 1.8.1 2.5L50.6 230c.8.7 1.9.5 2.4-.2l18.5-26 4.2 3.4c.7.7 1.9.5 2.5-.3l17.9-26A64 64 0 0 1 82.9 170Zm-9 74.3c-1-.3-1.3-1.4-1-2.3L100 183c5 2.5 10.4 4.4 16 5.5l-8 30.6c-.2 1-1.2 1.5-2.2 1.1l-5-1.8-8.5 30.8c-.3.9-1.3 1.5-2.2 1.1l-16.4-6 .1.1Zm46.7-55.1-5.3 64.9c0 1 .7 1.8 1.7 1.8h17.4c1 0 1.8-.9 1.6-1.8l-2.5-31.8h5.3c1 0 1.8-.9 1.7-1.9l-3-31.4a58.4 58.4 0 0 1-17 .2Zm62.8-175.6c.4-.9 0-1.9-1-2.3l-16.3-6c-1-.3-2 .3-2.2 1.2l-8.5 30.8-5-1.8c-1-.4-2 .2-2.3 1l-8 30.7c5.8 1.1 11 3 16 5.5l27.3-59ZM219 39.5l-45.8 46.3a62.1 62.1 0 0 0-13.1-10.7L178 49c.6-.8 1.7-1 2.5-.4l4.1 3.5 18.5-26c.6-.8 1.7-1 2.4-.3L219 37c.8.7.8 1.8.1 2.5ZM243.7 76c1-.4 1.3-1.4.8-2.3l-8.8-15c-.5-1-1.6-1.1-2.4-.6L207 76l-2.7-4.5c-.5-.9-1.6-1.2-2.4-.5l-25.8 18.3A63 63 0 0 1 185 104l58.7-28Zm9.3 23.7 3 17c.1 1-.5 2-1.5 2l-64.8 6.1a61 61 0 0 0-3.2-16.6l30.4-8.4c1-.3 2 .4 2 1.3l1 5.3 30.9-8c1-.2 2 .3 2 1.3h.2Zm-3 62.9c1 .2 2-.4 2.1-1.4l3-17.1c.2-1-.5-1.8-1.5-2l-31.8-3 1-5.2c0-1-.5-1.9-1.5-2l-31.6-2.6c-.1 5.8-1 11.5-2.7 16.8l63 16.4Zm-16.7 39.1c-.5.9-1.7 1-2.4.6l-53.6-37c3.4-4.5 6.2-9.5 8.2-14.8l28.8 13.2c1 .4 1.3 1.4.8 2.3l-2.7 4.6 28.9 13.7c.8.4 1.2 1.5.7 2.3l-8.7 15.1Zm-71.7-21.8 37.7 53c.5.8 1.7 1 2.4.3L215 222c.8-.6.8-1.7.1-2.5l-22.4-22.6 4.1-3.4c.8-.7.8-1.8.1-2.5l-22.5-22.2a61 61 0 0 1-12.8 11Zm-.3 72.2c-1 .4-2-.2-2.2-1.1l-17.3-62.7a61 61 0 0 0 16-6l13.5 28.4c.4 1 0 2-1 2.3l-5 1.9 13.3 29c.5.9 0 1.9-.9 2.2l-16.4 6Z"
    })
  }));
}

// node_modules/.pnpm/@toolpad+core@0.16.0_d46cabc535141b65151421393ad6a060/node_modules/@toolpad/core/esm/SignInPage/icons/FusionAuth.js
var React20 = __toESM(require_react(), 1);
var import_jsx_runtime22 = __toESM(require_jsx_runtime(), 1);
var _svg18;
function FusionAuthIcon() {
  return _svg18 || (_svg18 = (0, import_jsx_runtime22.jsx)("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 200 200",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    children: (0, import_jsx_runtime22.jsx)("g", {
      id: "fa_logo_purple_orange",
      stroke: "none",
      strokeWidth: "1",
      fill: "none",
      fillRule: "evenodd",
      children: (0, import_jsx_runtime22.jsxs)("g", {
        id: "logo-white-only-copy",
        transform: "translate(25, 22)",
        fillRule: "nonzero",
        children: [(0, import_jsx_runtime22.jsx)("path", {
          d: "M42.1484996,137.754645 C36.6833384,134.611754 31.6963641,130.701607 27.3395673,126.143375 C26.0759931,127.729247 24.5313734,129.068742 22.7829727,130.094854 C21.8172658,130.640438 20.7996702,131.088456 19.745243,131.432278 C43.3171444,157.188724 81.514904,163.302868 111.940339,146.189533 C113.379034,145.362954 114.266165,143.829671 114.266165,142.169663 C114.266165,140.509655 113.379034,138.976372 111.940339,138.149793 L111.940339,138.149793 C110.544127,137.311693 108.807093,137.282725 107.383745,138.073803 C87.1145338,149.52678 62.3048166,149.4054 42.1484996,137.754645 Z",
          id: "Path",
          fill: "#1E293B"
        }), (0, import_jsx_runtime22.jsx)("path", {
          d: "M42.1333109,23.8304593 C47.6002209,20.6754696 53.4933346,18.3259868 59.630634,16.8545787 C58.8680272,14.9186117 58.4764302,12.856306 58.4762967,10.7753799 C58.4791507,9.65265933 58.5910603,8.53287448 58.810447,7.43182054 C24.7434872,15.0010379 0.377235926,45.0557123 0,79.9718603 C0.00543281109,81.630629 0.893430551,83.1609286 2.33044934,83.9879579 C3.76746812,84.8149873 5.53593485,84.8135292 6.97158966,83.9841315 L6.97158966,83.9841315 C8.38121575,83.1916489 9.26556465,81.7110433 9.29545288,80.0934442 C9.54382298,56.8525337 22.0258546,35.4663534 42.1333109,23.8304593 Z",
          id: "Path",
          fill: "#1E293B"
        }), (0, import_jsx_runtime22.jsx)("path", {
          d: "M140.722828,80.7925521 C140.720716,87.1061507 139.810183,93.3865586 138.019249,99.4404944 C140.061684,99.7400409 142.029781,100.420535 143.821313,101.44663 C144.782663,101.997028 145.692586,102.63284 146.540081,103.34638 C156.995816,70.0401536 143.153599,33.9149136 113.125054,16.1402728 C111.686863,15.3863646 109.959746,15.4380661 108.569167,16.2766538 C107.178589,17.1152416 106.326144,18.6191435 106.32029,20.243732 L106.32029,20.243732 C106.303683,21.8581638 107.14136,23.3611307 108.522894,24.1952112 C128.489516,36.0495444 140.728313,57.561493 140.722828,80.7925521 Z",
          id: "Path",
          fill: "#1E293B"
        }), (0, import_jsx_runtime22.jsx)("path", {
          d: "M75.0167349,49.5150705 C87.6608927,49.5089266 99.0634414,57.1255404 103.906409,68.8126449 C108.749376,80.4997495 106.078804,93.9552423 97.1402067,102.90369 C88.201609,111.852137 74.7556924,114.530892 63.0734243,109.690625 C51.3911563,104.850357 43.773685,93.4444937 43.773685,80.7925521 C43.7904148,63.5313487 57.7661594,49.5402038 75.0167349,49.5150705 M75.0167349,40.2290952 C52.627938,40.2290952 34.4782321,58.3899751 34.4782321,80.7925521 C34.4782321,103.195129 52.627938,121.356006 75.0167349,121.356006 C97.4055318,121.356006 115.555241,103.195129 115.555241,80.7925521 C115.559269,70.0332192 111.289555,59.7134023 103.686237,52.1054045 C96.0829187,44.4974067 85.7694496,40.2250646 75.0167349,40.2290952 Z",
          id: "Shape",
          fill: "#1E293B"
        }), (0, import_jsx_runtime22.jsx)("ellipse", {
          id: "Oval",
          fill: "#F58320",
          cx: "75.0015463",
          cy: "10.8209739",
          rx: "10.8143177",
          ry: "10.8209739"
        }), (0, import_jsx_runtime22.jsx)("ellipse", {
          id: "Oval",
          fill: "#F58320",
          cx: "14.4444047",
          cy: "115.763143",
          rx: "10.8143177",
          ry: "10.8209739"
        }), (0, import_jsx_runtime22.jsx)("ellipse", {
          id: "Oval",
          fill: "#F58320",
          cx: "135.558688",
          cy: "115.763143",
          rx: "10.8143177",
          ry: "10.8209739"
        }), (0, import_jsx_runtime22.jsx)("path", {
          d: "M83.9780918,73.3911276 C83.9840178,69.0270314 80.8491326,65.2923902 76.5522173,64.5446237 C72.255302,63.7968572 68.0443705,66.2531497 66.5774916,70.3630144 C65.1106126,74.472879 66.8138325,79.0426297 70.6120269,81.1877 L67.7869382,95.5194112 C67.6945357,95.9718848 67.8127575,96.441852 68.1082279,96.7966347 C68.4036983,97.1514175 68.8443581,97.3525209 69.3058031,97.343483 L80.80361,97.343483 C81.265055,97.3525209 81.7057148,97.1514175 82.0011852,96.7966347 C82.2966556,96.441852 82.4148774,95.9718848 82.3224749,95.5194112 L79.4821976,81.1877 C82.2726337,79.5865952 83.9892107,76.6097505 83.9780918,73.3911276 L83.9780918,73.3911276 Z",
          id: "Path",
          fill: "#F58320"
        })]
      })
    })
  }));
}
var FusionAuth_default = FusionAuthIcon;

// node_modules/.pnpm/@toolpad+core@0.16.0_d46cabc535141b65151421393ad6a060/node_modules/@toolpad/core/esm/SignInPage/SignInPage.js
var import_jsx_runtime23 = __toESM(require_jsx_runtime(), 1);
var mergeSlotSx = (defaultSx, slotProps) => {
  if (Array.isArray(slotProps?.sx)) {
    return [defaultSx, ...slotProps.sx];
  }
  if (slotProps?.sx) {
    return [defaultSx, slotProps?.sx];
  }
  return [defaultSx];
};
var getCommonTextFieldProps = (theme, baseProps = {}) => ({
  required: true,
  fullWidth: true,
  ...baseProps,
  slotProps: {
    ...baseProps.slotProps,
    htmlInput: {
      ...baseProps.slotProps?.htmlInput,
      sx: mergeSlotSx({
        paddingTop: theme.spacing(1),
        paddingBottom: theme.spacing(1)
      }, typeof baseProps.slotProps?.htmlInput === "function" ? {} : baseProps.slotProps?.htmlInput)
    },
    inputLabel: {
      ...baseProps.slotProps?.inputLabel,
      sx: mergeSlotSx({
        lineHeight: theme.typography.pxToRem(12),
        fontSize: theme.typography.pxToRem(14)
      }, typeof baseProps.slotProps?.inputLabel === "function" ? {} : baseProps.slotProps?.inputLabel)
    }
  }
});
var IconProviderMap = /* @__PURE__ */ new Map([["github", (0, import_jsx_runtime23.jsx)(GitHub_default, {}, "github")], ["credentials", (0, import_jsx_runtime23.jsx)(Password_default, {}, "credentials")], ["google", (0, import_jsx_runtime23.jsx)(Google_default, {}, "google")], ["facebook", (0, import_jsx_runtime23.jsx)(Facebook_default, {}, "facebook")], ["passkey", (0, import_jsx_runtime23.jsx)(Fingerprint_default, {}, "passkey")], ["twitter", (0, import_jsx_runtime23.jsx)(Twitter_default, {}, "twitter")], ["apple", (0, import_jsx_runtime23.jsx)(Apple_default, {}, "apple")], ["instagram", (0, import_jsx_runtime23.jsx)(InstagramIcon, {}, "instagram")], ["tiktok", (0, import_jsx_runtime23.jsx)(TikTok_default, {}, "tiktok")], ["linkedin", (0, import_jsx_runtime23.jsx)(LinkedIn_default, {}, "linkedin")], ["slack", (0, import_jsx_runtime23.jsx)(SlackIcon, {}, "slack")], ["spotify", (0, import_jsx_runtime23.jsx)(Spotify_default, {}, "spotify")], ["twitch", (0, import_jsx_runtime23.jsx)(Twitch_default, {}, "twitch")], ["discord", (0, import_jsx_runtime23.jsx)(Discord_default, {}, "discord")], ["line", (0, import_jsx_runtime23.jsx)(LineIcon, {}, "line")], ["auth0", (0, import_jsx_runtime23.jsx)(Auth0_default, {}, "auth0")], ["microsoft-entra-id", (0, import_jsx_runtime23.jsx)(MicrosoftEntraIdIcon, {}, "microsoft-entra-id")], ["cognito", (0, import_jsx_runtime23.jsx)(Cognito_default, {}, "cognito")], ["gitlab", (0, import_jsx_runtime23.jsx)(GitLabIcon, {}, "gitlab")], ["keycloak", (0, import_jsx_runtime23.jsx)(KeycloakIcon, {}, "keycloak")], ["okta", (0, import_jsx_runtime23.jsx)(OktaIcon, {}, "okta")], ["fusionauth", (0, import_jsx_runtime23.jsx)(FusionAuth_default, {}, "fusionauth")]]);
var defaultLocaleText = {
  signInTitle: (brandingTitle) => brandingTitle ? `Sign in to ${brandingTitle}` : "Sign in",
  signInSubtitle: "Please sign in to continue",
  providerSignInTitle: (provider) => `Sign in with ${provider}`,
  signInRememberMe: "Remember me",
  email: "Email",
  password: "Password",
  or: "or",
  with: "with",
  passkey: "Passkey",
  to: "to"
};
function SignInPage(props) {
  const {
    providers,
    signIn,
    slots,
    slotProps,
    sx,
    localeText: propsLocaleText
  } = props;
  const theme = useTheme();
  const branding = React21.useContext(BrandingContext);
  const router = React21.useContext(RouterContext);
  const globalLocaleText = useLocaleText();
  const localeText = {
    ...defaultLocaleText,
    ...globalLocaleText,
    ...propsLocaleText
  };
  const [{
    loading,
    selectedProviderId,
    error,
    success
  }, setFormStatus] = React21.useState({
    selectedProviderId: void 0,
    loading: false,
    error: "",
    success: ""
  });
  const callbackUrl = router?.searchParams.get("callbackUrl") ?? "/";
  const singleProvider = React21.useMemo(() => providers?.length === 1, [providers]);
  const isOauthProvider = React21.useCallback((provider) => provider && provider !== "credentials" && provider !== "nodemailer" && provider !== "passkey", []);
  const hasOauthProvider = React21.useMemo(() => providers?.some((provider) => isOauthProvider(provider.id)), [isOauthProvider, providers]);
  const isPasskeyProvider = React21.useCallback((provider) => provider && provider === "passkey", []);
  const isEmailProvider = React21.useCallback((provider) => provider && provider === "nodemailer", []);
  const isCredentialsProvider = React21.useCallback((provider) => provider && provider === "credentials", []);
  return (0, import_jsx_runtime23.jsx)(Box_default, {
    sx: {
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      ...sx
    },
    children: (0, import_jsx_runtime23.jsx)(Container_default, {
      component: "main",
      maxWidth: "xs",
      children: (0, import_jsx_runtime23.jsxs)(Stack_default, {
        sx: {
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          bgcolor: "background.paper",
          borderRadius: 1,
          p: 4,
          gap: 1,
          border: "1px solid",
          borderColor: alpha(theme.palette.grey[400], 0.4),
          boxShadow: theme.shadows[4]
        },
        children: [branding?.logo, slots?.title ? (0, import_jsx_runtime23.jsx)(slots.title, {}) : (0, import_jsx_runtime23.jsx)(Typography_default, {
          variant: "h5",
          component: "h1",
          color: "textPrimary",
          sx: {
            textAlign: "center",
            fontWeight: 600
          },
          children: typeof localeText.signInTitle === "string" ? localeText.signInTitle : localeText.signInTitle(branding?.title)
        }), slots?.subtitle ? (0, import_jsx_runtime23.jsx)(slots.subtitle, {}) : (0, import_jsx_runtime23.jsx)(Typography_default, {
          variant: "body2",
          color: "textSecondary",
          gutterBottom: true,
          textAlign: "center",
          children: localeText?.signInSubtitle
        }), (0, import_jsx_runtime23.jsxs)(Box_default, {
          sx: {
            width: "100%"
          },
          children: [(0, import_jsx_runtime23.jsxs)(Stack_default, {
            spacing: 1,
            children: [error && isOauthProvider(selectedProviderId) ? (0, import_jsx_runtime23.jsx)(Alert_default, {
              severity: "error",
              children: error
            }) : null, Object.values(providers ?? {}).filter((provider) => isOauthProvider(provider.id)).map((provider) => {
              return (0, import_jsx_runtime23.jsx)("form", {
                onSubmit: async (event) => {
                  event.preventDefault();
                  setFormStatus({
                    error: "",
                    selectedProviderId: provider.id,
                    loading: true
                  });
                  const oauthResponse = await signIn?.(provider, void 0, callbackUrl);
                  setFormStatus((prev) => ({
                    ...prev,
                    loading: oauthResponse?.error ? false : prev.loading,
                    error: oauthResponse?.error
                  }));
                },
                ...slotProps?.form,
                children: (0, import_jsx_runtime23.jsx)(Button_default, {
                  variant: "outlined",
                  type: "submit",
                  fullWidth: true,
                  size: "large",
                  disableElevation: true,
                  name: "provider",
                  color: "inherit",
                  loading: loading && selectedProviderId === provider.id,
                  value: provider.id,
                  startIcon: IconProviderMap.get(provider.id),
                  sx: {
                    textTransform: "capitalize"
                  },
                  ...slotProps?.oAuthButton,
                  children: (0, import_jsx_runtime23.jsx)("span", {
                    children: localeText.providerSignInTitle(provider.name)
                  })
                }, provider.id)
              }, provider.id);
            })]
          }), Object.values(providers ?? {}).filter((provider) => !isOauthProvider(provider.id)).map((provider, index) => {
            return (0, import_jsx_runtime23.jsxs)(React21.Fragment, {
              children: [isPasskeyProvider(provider.id) ? (0, import_jsx_runtime23.jsxs)(React21.Fragment, {
                children: [hasOauthProvider || index > 0 ? (0, import_jsx_runtime23.jsx)(Divider_default, {
                  sx: {
                    mt: 2,
                    mx: 0,
                    mb: 1
                  },
                  children: localeText.or
                }) : null, error && selectedProviderId === "passkey" ? (0, import_jsx_runtime23.jsx)(Alert_default, {
                  sx: {
                    mt: 1,
                    mb: 2
                  },
                  severity: "error",
                  children: error
                }) : null, (0, import_jsx_runtime23.jsxs)(Box_default, {
                  component: "form",
                  onSubmit: async (event) => {
                    setFormStatus({
                      error: "",
                      selectedProviderId: provider.id,
                      loading: true
                    });
                    event.preventDefault();
                    const formData = new FormData(event.currentTarget);
                    const passkeyResponse = await signIn?.(provider, formData, callbackUrl);
                    setFormStatus((prev) => ({
                      ...prev,
                      loading: false,
                      error: passkeyResponse?.error
                    }));
                  },
                  ...slotProps?.form,
                  children: [slots?.emailField ? (0, import_jsx_runtime23.jsx)(slots.emailField, {
                    ...slotProps?.emailField
                  }) : (0, import_jsx_runtime23.jsx)(TextField_default, {
                    ...getCommonTextFieldProps(theme, {
                      label: localeText.email,
                      placeholder: "your@email.com",
                      id: "email-passkey",
                      name: "email",
                      type: "email",
                      autoComplete: "email-webauthn",
                      autoFocus: singleProvider,
                      sx: {
                        mt: 1
                      },
                      ...slotProps?.emailField
                    })
                  }), slots?.submitButton ? (0, import_jsx_runtime23.jsx)(slots.submitButton, {
                    ...slotProps?.submitButton
                  }) : (0, import_jsx_runtime23.jsx)(Button_default, {
                    type: "submit",
                    fullWidth: true,
                    size: "large",
                    variant: "outlined",
                    disableElevation: true,
                    startIcon: IconProviderMap.get(provider.id),
                    color: "inherit",
                    loading: loading && selectedProviderId === provider.id,
                    sx: {
                      mt: 3,
                      mb: 2,
                      textTransform: "capitalize"
                    },
                    ...slotProps?.submitButton,
                    children: localeText.providerSignInTitle(provider.name || localeText.passkey)
                  })]
                })]
              }) : null, isEmailProvider(provider.id) ? (0, import_jsx_runtime23.jsxs)(React21.Fragment, {
                children: [hasOauthProvider || index > 0 ? (0, import_jsx_runtime23.jsx)(Divider_default, {
                  sx: {
                    mt: 2,
                    mx: 0,
                    mb: 1
                  },
                  children: localeText.or
                }) : null, error && selectedProviderId === "nodemailer" ? (0, import_jsx_runtime23.jsx)(Alert_default, {
                  sx: {
                    my: 1
                  },
                  severity: "error",
                  children: error
                }) : null, success && selectedProviderId === "nodemailer" ? (0, import_jsx_runtime23.jsx)(Alert_default, {
                  sx: {
                    my: 1
                  },
                  severity: "success",
                  children: success
                }) : null, (0, import_jsx_runtime23.jsxs)(Box_default, {
                  component: "form",
                  onSubmit: async (event) => {
                    event.preventDefault();
                    setFormStatus({
                      error: "",
                      selectedProviderId: provider.id,
                      loading: true
                    });
                    const formData = new FormData(event.currentTarget);
                    const emailResponse = await signIn?.(provider, formData, callbackUrl);
                    setFormStatus((prev) => ({
                      ...prev,
                      loading: false,
                      error: emailResponse?.error,
                      success: emailResponse?.success
                    }));
                  },
                  ...slotProps?.form,
                  children: [slots?.emailField ? (0, import_jsx_runtime23.jsx)(slots.emailField, {
                    ...slotProps?.emailField
                  }) : (0, import_jsx_runtime23.jsx)(TextField_default, {
                    ...getCommonTextFieldProps(theme, {
                      label: localeText.email,
                      placeholder: "your@email.com",
                      name: "email",
                      id: "email-nodemailer",
                      type: "email",
                      autoComplete: "email-nodemailer",
                      autoFocus: singleProvider,
                      sx: {
                        mt: 1
                      },
                      ...slotProps?.emailField
                    })
                  }), slots?.submitButton ? (0, import_jsx_runtime23.jsx)(slots.submitButton, {
                    ...slotProps?.submitButton
                  }) : (0, import_jsx_runtime23.jsx)(Button_default, {
                    type: "submit",
                    fullWidth: true,
                    size: "large",
                    variant: "outlined",
                    disableElevation: true,
                    id: "submit-nodemailer",
                    color: "inherit",
                    loading: loading && selectedProviderId === provider.id,
                    sx: {
                      mt: 3,
                      mb: 2,
                      textTransform: "capitalize"
                    },
                    ...slotProps?.submitButton,
                    children: localeText.providerSignInTitle((provider.name || localeText.email).toLocaleLowerCase())
                  })]
                })]
              }) : null, isCredentialsProvider(provider.id) ? (0, import_jsx_runtime23.jsxs)(React21.Fragment, {
                children: [hasOauthProvider || index > 0 ? (0, import_jsx_runtime23.jsx)(Divider_default, {
                  sx: {
                    mt: 2,
                    mx: 0,
                    mb: 1
                  },
                  children: localeText.or
                }) : null, error && selectedProviderId === "credentials" ? (0, import_jsx_runtime23.jsx)(Alert_default, {
                  sx: {
                    mt: 1,
                    mb: 2
                  },
                  severity: "error",
                  children: error
                }) : null, (0, import_jsx_runtime23.jsxs)(Box_default, {
                  component: "form",
                  onSubmit: async (event) => {
                    setFormStatus({
                      error: "",
                      selectedProviderId: provider.id,
                      loading: true
                    });
                    event.preventDefault();
                    const formData = new FormData(event.currentTarget);
                    const credentialsResponse = await signIn?.(provider, formData, callbackUrl);
                    setFormStatus((prev) => ({
                      ...prev,
                      loading: false,
                      error: credentialsResponse?.error
                    }));
                  },
                  ...slotProps?.form,
                  children: [(0, import_jsx_runtime23.jsxs)(Stack_default, {
                    direction: "column",
                    spacing: 2,
                    marginTop: 1,
                    children: [slots?.emailField ? (0, import_jsx_runtime23.jsx)(slots.emailField, {
                      ...slotProps?.emailField
                    }) : (0, import_jsx_runtime23.jsx)(TextField_default, {
                      ...getCommonTextFieldProps(theme, {
                        label: localeText.email,
                        placeholder: "your@email.com",
                        id: "email",
                        name: "email",
                        type: "email",
                        autoComplete: "email",
                        autoFocus: singleProvider,
                        ...slotProps?.emailField
                      })
                    }), slots?.passwordField ? (0, import_jsx_runtime23.jsx)(slots.passwordField, {
                      ...slotProps?.passwordField
                    }) : (0, import_jsx_runtime23.jsx)(TextField_default, {
                      ...getCommonTextFieldProps(theme, {
                        name: "password",
                        type: "password",
                        label: localeText.password,
                        id: "password",
                        placeholder: "*****",
                        autoComplete: "current-password",
                        ...slotProps?.passwordField
                      })
                    })]
                  }), slots?.forgotPasswordLink || slots?.rememberMe ? (0, import_jsx_runtime23.jsxs)(Stack_default, {
                    direction: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    spacing: 1,
                    mt: 2,
                    sx: {
                      justifyContent: "space-between"
                    },
                    children: [slots?.rememberMe ? (0, import_jsx_runtime23.jsx)(slots.rememberMe, {
                      ...slotProps?.rememberMe
                    }) : null, slots?.forgotPasswordLink ? (0, import_jsx_runtime23.jsx)(slots.forgotPasswordLink, {
                      ...slotProps?.forgotPasswordLink
                    }) : null]
                  }) : null, slots?.submitButton ? (0, import_jsx_runtime23.jsx)(slots.submitButton, {
                    ...slotProps?.submitButton
                  }) : (0, import_jsx_runtime23.jsx)(Button_default, {
                    type: "submit",
                    fullWidth: true,
                    size: "large",
                    variant: "outlined",
                    disableElevation: true,
                    color: "inherit",
                    loading: loading && selectedProviderId === provider.id,
                    sx: {
                      mt: 3,
                      mb: 2,
                      textTransform: "capitalize"
                    },
                    ...slotProps?.submitButton,
                    children: localeText.providerSignInTitle((provider.name || localeText.password).toLocaleLowerCase())
                  }), slots?.signUpLink ? (0, import_jsx_runtime23.jsx)(Box_default, {
                    sx: {
                      display: "flex",
                      justifyContent: "center"
                    },
                    children: slots?.signUpLink ? (0, import_jsx_runtime23.jsx)(slots.signUpLink, {
                      ...slotProps?.signUpLink
                    }) : null
                  }) : null]
                })]
              }) : null]
            }, provider.id);
          })]
        })]
      })
    })
  });
}
true ? SignInPage.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The labels for the account component.
   */
  localeText: import_prop_types.default.object,
  /**
   * The list of authentication providers to display.
   * @default []
   */
  providers: import_prop_types.default.arrayOf(import_prop_types.default.shape({
    id: import_prop_types.default.string.isRequired,
    name: import_prop_types.default.string.isRequired
  })),
  /**
   * Callback fired when a user signs in.
   * @param {AuthProvider} provider The authentication provider.
   * @param {FormData} formData The form data if the provider id is 'credentials'.\
   * @param {string} callbackUrl The URL to redirect to after signing in.
   * @returns {void|Promise<AuthResponse>}
   * @default undefined
   */
  signIn: import_prop_types.default.func,
  /**
   * The props used for each slot inside.
   * @default {}
   * @example { emailField: { autoFocus: false } }
   * @example { passwordField: { variant: 'outlined' } }
   * @example { emailField: { autoFocus: false }, passwordField: { variant: 'outlined' } }
   */
  slotProps: import_prop_types.default.shape({
    emailField: import_prop_types.default.object,
    forgotPasswordLink: import_prop_types.default.object,
    form: import_prop_types.default.object,
    oAuthButton: import_prop_types.default.object,
    passwordField: import_prop_types.default.object,
    rememberMe: import_prop_types.default.object,
    signUpLink: import_prop_types.default.object,
    submitButton: import_prop_types.default.object
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   * @example { forgotPasswordLink: <Link href="/forgot-password">Forgot password?</Link> }
   * @example { signUpLink: <Link href="/sign-up">Sign up</Link> }
   */
  slots: import_prop_types.default.shape({
    emailField: import_prop_types.default.elementType,
    forgotPasswordLink: import_prop_types.default.elementType,
    passwordField: import_prop_types.default.elementType,
    rememberMe: import_prop_types.default.elementType,
    signUpLink: import_prop_types.default.elementType,
    submitButton: import_prop_types.default.elementType,
    subtitle: import_prop_types.default.elementType,
    title: import_prop_types.default.elementType
  }),
  /**
   * The prop used to customize the styles on the `SignInPage` container
   */
  sx: import_prop_types.default.oneOfType([import_prop_types.default.arrayOf(import_prop_types.default.oneOfType([import_prop_types.default.func, import_prop_types.default.object, import_prop_types.default.bool])), import_prop_types.default.func, import_prop_types.default.object])
} : void 0;

// node_modules/.pnpm/@toolpad+core@0.16.0_d46cabc535141b65151421393ad6a060/node_modules/@toolpad/core/esm/Crud/cache.js
var DataSourceCache = class {
  constructor(config) {
    this.cache = {};
    this.ttl = config?.ttl ?? 3e5;
  }
  set(key, value) {
    const expiry = Date.now() + this.ttl;
    this.cache[key] = {
      value,
      expiry
    };
  }
  get(key) {
    const entry = this.cache[key];
    if (!entry) {
      return void 0;
    }
    if (Date.now() > entry.expiry) {
      delete this.cache[key];
      return void 0;
    }
    return entry.value;
  }
  clear() {
    this.cache = {};
  }
};

// node_modules/.pnpm/@toolpad+core@0.16.0_d46cabc535141b65151421393ad6a060/node_modules/@toolpad/core/esm/Crud/CrudForm.js
var React108 = __toESM(require_react(), 1);
var import_prop_types32 = __toESM(require_prop_types(), 1);
var import_invariant = __toESM(require_browser(), 1);

// node_modules/.pnpm/@mui+x-date-pickers@8.26.0_@emotion+react@11.14.0_@types+react@19.2.7_react@19.2.3__@em_45e4fa7585d24d6c7a3cddedaa636f9d/node_modules/@mui/x-date-pickers/esm/AdapterDayjs/AdapterDayjs.js
var import_dayjs = __toESM(require_dayjs_min(), 1);
var import_weekOfYear = __toESM(require_weekOfYear(), 1);
var import_customParseFormat = __toESM(require_customParseFormat(), 1);
var import_localizedFormat = __toESM(require_localizedFormat(), 1);
var import_isBetween = __toESM(require_isBetween(), 1);
var import_advancedFormat = __toESM(require_advancedFormat(), 1);
import_dayjs.default.extend(import_localizedFormat.default);
import_dayjs.default.extend(import_weekOfYear.default);
import_dayjs.default.extend(import_isBetween.default);
import_dayjs.default.extend(import_advancedFormat.default);
var formatTokenMap = {
  // Year
  YY: "year",
  YYYY: {
    sectionType: "year",
    contentType: "digit",
    maxLength: 4
  },
  // Month
  M: {
    sectionType: "month",
    contentType: "digit",
    maxLength: 2
  },
  MM: "month",
  MMM: {
    sectionType: "month",
    contentType: "letter"
  },
  MMMM: {
    sectionType: "month",
    contentType: "letter"
  },
  // Day of the month
  D: {
    sectionType: "day",
    contentType: "digit",
    maxLength: 2
  },
  DD: "day",
  Do: {
    sectionType: "day",
    contentType: "digit-with-letter"
  },
  // Day of the week
  d: {
    sectionType: "weekDay",
    contentType: "digit",
    maxLength: 2
  },
  dd: {
    sectionType: "weekDay",
    contentType: "letter"
  },
  ddd: {
    sectionType: "weekDay",
    contentType: "letter"
  },
  dddd: {
    sectionType: "weekDay",
    contentType: "letter"
  },
  // Meridiem
  A: "meridiem",
  a: "meridiem",
  // Hours
  H: {
    sectionType: "hours",
    contentType: "digit",
    maxLength: 2
  },
  HH: "hours",
  h: {
    sectionType: "hours",
    contentType: "digit",
    maxLength: 2
  },
  hh: "hours",
  // Minutes
  m: {
    sectionType: "minutes",
    contentType: "digit",
    maxLength: 2
  },
  mm: "minutes",
  // Seconds
  s: {
    sectionType: "seconds",
    contentType: "digit",
    maxLength: 2
  },
  ss: "seconds"
};
var defaultFormats = {
  year: "YYYY",
  month: "MMMM",
  monthShort: "MMM",
  dayOfMonth: "D",
  dayOfMonthFull: "Do",
  weekday: "dddd",
  weekdayShort: "dd",
  hours24h: "HH",
  hours12h: "hh",
  meridiem: "A",
  minutes: "mm",
  seconds: "ss",
  fullDate: "ll",
  keyboardDate: "L",
  shortDate: "MMM D",
  normalDate: "D MMMM",
  normalDateWithWeekday: "ddd, MMM D",
  fullTime12h: "hh:mm A",
  fullTime24h: "HH:mm",
  keyboardDateTime12h: "L hh:mm A",
  keyboardDateTime24h: "L HH:mm"
};
var MISSING_UTC_PLUGIN = ["Missing UTC plugin", "To be able to use UTC or timezones, you have to enable the `utc` plugin", "Find more information on https://mui.com/x/react-date-pickers/timezone/#day-js-and-utc"].join("\n");
var MISSING_TIMEZONE_PLUGIN = ["Missing timezone plugin", "To be able to use timezones, you have to enable both the `utc` and the `timezone` plugin", "Find more information on https://mui.com/x/react-date-pickers/timezone/#day-js-and-timezone"].join("\n");
var AdapterDayjs = class {
  isMUIAdapter = true;
  isTimezoneCompatible = true;
  lib = "dayjs";
  escapedCharacters = {
    start: "[",
    end: "]"
  };
  formatTokenMap = /* @__PURE__ */ (() => formatTokenMap)();
  constructor({
    locale,
    formats
  } = {}) {
    this.locale = locale;
    this.formats = _extends({}, defaultFormats, formats);
    import_dayjs.default.extend(import_customParseFormat.default);
  }
  setLocaleToValue = (value) => {
    const expectedLocale = this.getCurrentLocaleCode();
    if (expectedLocale === value.locale()) {
      return value;
    }
    return value.locale(expectedLocale);
  };
  hasUTCPlugin = () => typeof import_dayjs.default.utc !== "undefined";
  hasTimezonePlugin = () => typeof import_dayjs.default.tz !== "undefined";
  isSame = (value, comparing, comparisonTemplate) => {
    const comparingInValueTimezone = this.setTimezone(comparing, this.getTimezone(value));
    return value.format(comparisonTemplate) === comparingInValueTimezone.format(comparisonTemplate);
  };
  /**
   * Replaces "default" by undefined and "system" by the system timezone before passing it to `dayjs`.
   */
  cleanTimezone = (timezone) => {
    switch (timezone) {
      case "default": {
        return void 0;
      }
      case "system": {
        return import_dayjs.default.tz.guess();
      }
      default: {
        return timezone;
      }
    }
  };
  createSystemDate = (value) => {
    let date;
    if (this.hasUTCPlugin() && this.hasTimezonePlugin()) {
      const timezone = import_dayjs.default.tz.guess();
      if (timezone === "UTC") {
        date = (0, import_dayjs.default)(value);
      } else {
        date = import_dayjs.default.tz(value, timezone);
      }
    } else {
      date = (0, import_dayjs.default)(value);
    }
    return this.setLocaleToValue(date);
  };
  createUTCDate = (value) => {
    if (!this.hasUTCPlugin()) {
      throw new Error(MISSING_UTC_PLUGIN);
    }
    return this.setLocaleToValue(import_dayjs.default.utc(value));
  };
  createTZDate = (value, timezone) => {
    if (!this.hasUTCPlugin()) {
      throw new Error(MISSING_UTC_PLUGIN);
    }
    if (!this.hasTimezonePlugin()) {
      throw new Error(MISSING_TIMEZONE_PLUGIN);
    }
    const keepLocalTime = value !== void 0 && !value.endsWith("Z");
    return this.setLocaleToValue((0, import_dayjs.default)(value).tz(this.cleanTimezone(timezone), keepLocalTime));
  };
  getLocaleFormats = () => {
    const locales = import_dayjs.default.Ls;
    const locale = this.locale || "en";
    let localeObject = locales[locale];
    if (localeObject === void 0) {
      if (true) {
        warnOnce(["MUI X: Your locale has not been found.", "Either the locale key is not a supported one. Locales supported by dayjs are available here: https://github.com/iamkun/dayjs/tree/dev/src/locale.", "Or you forget to import the locale from 'dayjs/locale/{localeUsed}'", "fallback on English locale."]);
      }
      localeObject = locales.en;
    }
    return localeObject.formats;
  };
  /**
   * If the new day does not have the same offset as the old one (when switching to summer day time for example),
   * Then dayjs will not automatically adjust the offset (moment does).
   * We have to parse again the value to make sure the `fixOffset` method is applied.
   * See https://github.com/iamkun/dayjs/blob/b3624de619d6e734cd0ffdbbd3502185041c1b60/src/plugin/timezone/index.js#L72
   */
  adjustOffset = (value) => {
    if (!this.hasTimezonePlugin()) {
      return value;
    }
    const timezone = this.getTimezone(value);
    if (timezone !== "UTC") {
      const fixedValue = value.tz(this.cleanTimezone(timezone), true);
      if (fixedValue.$offset === (value.$offset ?? 0)) {
        return value;
      }
      value.$offset = fixedValue.$offset;
    }
    return value;
  };
  date = (value, timezone = "default") => {
    if (value === null) {
      return null;
    }
    if (timezone === "UTC") {
      return this.createUTCDate(value);
    }
    if (timezone === "system" || timezone === "default" && !this.hasTimezonePlugin()) {
      return this.createSystemDate(value);
    }
    return this.createTZDate(value, timezone);
  };
  getInvalidDate = () => (0, import_dayjs.default)(/* @__PURE__ */ new Date("Invalid date"));
  getTimezone = (value) => {
    if (this.hasTimezonePlugin()) {
      const zone = value.$x?.$timezone;
      if (zone) {
        return zone;
      }
    }
    if (this.hasUTCPlugin() && value.isUTC()) {
      return "UTC";
    }
    return "system";
  };
  setTimezone = (value, timezone) => {
    if (this.getTimezone(value) === timezone) {
      return value;
    }
    if (timezone === "UTC") {
      if (!this.hasUTCPlugin()) {
        throw new Error(MISSING_UTC_PLUGIN);
      }
      return value.utc();
    }
    if (timezone === "system") {
      return value.local();
    }
    if (!this.hasTimezonePlugin()) {
      if (timezone === "default") {
        return value;
      }
      throw new Error(MISSING_TIMEZONE_PLUGIN);
    }
    return this.setLocaleToValue(import_dayjs.default.tz(value, this.cleanTimezone(timezone)));
  };
  toJsDate = (value) => {
    return value.toDate();
  };
  parse = (value, format) => {
    if (value === "") {
      return null;
    }
    return (0, import_dayjs.default)(value, format, this.locale, true);
  };
  getCurrentLocaleCode = () => {
    return this.locale || "en";
  };
  is12HourCycleInCurrentLocale = () => {
    return /A|a/.test(this.getLocaleFormats().LT || "");
  };
  expandFormat = (format) => {
    const localeFormats = this.getLocaleFormats();
    const t = (formatBis) => formatBis.replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, (_, a, b) => a || b.slice(1));
    return format.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, (_, a, b) => {
      const B = b && b.toUpperCase();
      return a || localeFormats[b] || t(localeFormats[B]);
    });
  };
  isValid = (value) => {
    if (value == null) {
      return false;
    }
    return value.isValid();
  };
  format = (value, formatKey) => {
    return this.formatByString(value, this.formats[formatKey]);
  };
  formatByString = (value, formatString) => {
    return this.setLocaleToValue(value).format(formatString);
  };
  formatNumber = (numberToFormat) => {
    return numberToFormat;
  };
  isEqual = (value, comparing) => {
    if (value === null && comparing === null) {
      return true;
    }
    if (value === null || comparing === null) {
      return false;
    }
    return value.toDate().getTime() === comparing.toDate().getTime();
  };
  isSameYear = (value, comparing) => {
    return this.isSame(value, comparing, "YYYY");
  };
  isSameMonth = (value, comparing) => {
    return this.isSame(value, comparing, "YYYY-MM");
  };
  isSameDay = (value, comparing) => {
    return this.isSame(value, comparing, "YYYY-MM-DD");
  };
  isSameHour = (value, comparing) => {
    return value.isSame(comparing, "hour");
  };
  isAfter = (value, comparing) => {
    return value > comparing;
  };
  isAfterYear = (value, comparing) => {
    if (!this.hasUTCPlugin()) {
      return value.isAfter(comparing, "year");
    }
    return !this.isSameYear(value, comparing) && value.utc() > comparing.utc();
  };
  isAfterDay = (value, comparing) => {
    if (!this.hasUTCPlugin()) {
      return value.isAfter(comparing, "day");
    }
    return !this.isSameDay(value, comparing) && value.utc() > comparing.utc();
  };
  isBefore = (value, comparing) => {
    return value < comparing;
  };
  isBeforeYear = (value, comparing) => {
    if (!this.hasUTCPlugin()) {
      return value.isBefore(comparing, "year");
    }
    return !this.isSameYear(value, comparing) && value.utc() < comparing.utc();
  };
  isBeforeDay = (value, comparing) => {
    if (!this.hasUTCPlugin()) {
      return value.isBefore(comparing, "day");
    }
    return !this.isSameDay(value, comparing) && value.utc() < comparing.utc();
  };
  isWithinRange = (value, [start, end]) => {
    return value >= start && value <= end;
  };
  startOfYear = (value) => {
    return this.adjustOffset(value.startOf("year"));
  };
  startOfMonth = (value) => {
    return this.adjustOffset(value.startOf("month"));
  };
  startOfWeek = (value) => {
    return this.adjustOffset(this.setLocaleToValue(value).startOf("week"));
  };
  startOfDay = (value) => {
    return this.adjustOffset(value.startOf("day"));
  };
  endOfYear = (value) => {
    return this.adjustOffset(value.endOf("year"));
  };
  endOfMonth = (value) => {
    return this.adjustOffset(value.endOf("month"));
  };
  endOfWeek = (value) => {
    return this.adjustOffset(this.setLocaleToValue(value).endOf("week"));
  };
  endOfDay = (value) => {
    return this.adjustOffset(value.endOf("day"));
  };
  addYears = (value, amount) => {
    return this.adjustOffset(value.add(amount, "year"));
  };
  addMonths = (value, amount) => {
    return this.adjustOffset(value.add(amount, "month"));
  };
  addWeeks = (value, amount) => {
    return this.adjustOffset(value.add(amount, "week"));
  };
  addDays = (value, amount) => {
    return this.adjustOffset(value.add(amount, "day"));
  };
  addHours = (value, amount) => {
    return this.adjustOffset(value.add(amount, "hour"));
  };
  addMinutes = (value, amount) => {
    return this.adjustOffset(value.add(amount, "minute"));
  };
  addSeconds = (value, amount) => {
    return this.adjustOffset(value.add(amount, "second"));
  };
  getYear = (value) => {
    return value.year();
  };
  getMonth = (value) => {
    return value.month();
  };
  getDate = (value) => {
    return value.date();
  };
  getHours = (value) => {
    return value.hour();
  };
  getMinutes = (value) => {
    return value.minute();
  };
  getSeconds = (value) => {
    return value.second();
  };
  getMilliseconds = (value) => {
    return value.millisecond();
  };
  setYear = (value, year) => {
    return this.adjustOffset(value.set("year", year));
  };
  setMonth = (value, month) => {
    return this.adjustOffset(value.set("month", month));
  };
  setDate = (value, date) => {
    return this.adjustOffset(value.set("date", date));
  };
  setHours = (value, hours) => {
    return this.adjustOffset(value.set("hour", hours));
  };
  setMinutes = (value, minutes) => {
    return this.adjustOffset(value.set("minute", minutes));
  };
  setSeconds = (value, seconds) => {
    return this.adjustOffset(value.set("second", seconds));
  };
  setMilliseconds = (value, milliseconds) => {
    return this.adjustOffset(value.set("millisecond", milliseconds));
  };
  getDaysInMonth = (value) => {
    return value.daysInMonth();
  };
  getWeekArray = (value) => {
    const start = this.startOfWeek(this.startOfMonth(value));
    const end = this.endOfWeek(this.endOfMonth(value));
    let count = 0;
    let current = start;
    const nestedWeeks = [];
    while (current < end) {
      const weekNumber = Math.floor(count / 7);
      nestedWeeks[weekNumber] = nestedWeeks[weekNumber] || [];
      nestedWeeks[weekNumber].push(current);
      current = this.addDays(current, 1);
      count += 1;
    }
    return nestedWeeks;
  };
  getWeekNumber = (value) => {
    return value.week();
  };
  getDayOfWeek(value) {
    return value.day() + 1;
  }
  getYearRange = ([start, end]) => {
    const startDate = this.startOfYear(start);
    const endDate = this.endOfYear(end);
    const years = [];
    let current = startDate;
    while (this.isBefore(current, endDate)) {
      years.push(current);
      current = this.addYears(current, 1);
    }
    return years;
  };
};

// node_modules/.pnpm/@mui+x-date-pickers@8.26.0_@emotion+react@11.14.0_@types+react@19.2.7_react@19.2.3__@em_45e4fa7585d24d6c7a3cddedaa636f9d/node_modules/@mui/x-date-pickers/esm/DatePicker/DatePicker.js
var React88 = __toESM(require_react(), 1);
var import_prop_types21 = __toESM(require_prop_types(), 1);

// node_modules/.pnpm/@mui+x-date-pickers@8.26.0_@emotion+react@11.14.0_@types+react@19.2.7_react@19.2.3__@em_45e4fa7585d24d6c7a3cddedaa636f9d/node_modules/@mui/x-date-pickers/esm/DesktopDatePicker/DesktopDatePicker.js
var React85 = __toESM(require_react(), 1);
var import_prop_types19 = __toESM(require_prop_types(), 1);

// node_modules/.pnpm/@mui+x-date-pickers@8.26.0_@emotion+react@11.14.0_@types+react@19.2.7_react@19.2.3__@em_45e4fa7585d24d6c7a3cddedaa636f9d/node_modules/@mui/x-date-pickers/esm/internals/utils/views.js
var areViewsEqual = (views, expectedViews) => {
  if (views.length !== expectedViews.length) {
    return false;
  }
  return expectedViews.every((expectedView) => views.includes(expectedView));
};
var applyDefaultViewProps = ({
  openTo,
  defaultOpenTo,
  views,
  defaultViews
}) => {
  const viewsWithDefault = views ?? defaultViews;
  let openToWithDefault;
  if (openTo != null) {
    openToWithDefault = openTo;
  } else if (viewsWithDefault.includes(defaultOpenTo)) {
    openToWithDefault = defaultOpenTo;
  } else if (viewsWithDefault.length > 0) {
    openToWithDefault = viewsWithDefault[0];
  } else {
    throw new Error("MUI X: The `views` prop must contain at least one view.");
  }
  return {
    views: viewsWithDefault,
    openTo: openToWithDefault
  };
};

// node_modules/.pnpm/@mui+x-date-pickers@8.26.0_@emotion+react@11.14.0_@types+react@19.2.7_react@19.2.3__@em_45e4fa7585d24d6c7a3cddedaa636f9d/node_modules/@mui/x-date-pickers/esm/internals/utils/date-utils.js
var mergeDateAndTime = (adapter, dateParam, timeParam) => {
  let mergedDate = dateParam;
  mergedDate = adapter.setHours(mergedDate, adapter.getHours(timeParam));
  mergedDate = adapter.setMinutes(mergedDate, adapter.getMinutes(timeParam));
  mergedDate = adapter.setSeconds(mergedDate, adapter.getSeconds(timeParam));
  mergedDate = adapter.setMilliseconds(mergedDate, adapter.getMilliseconds(timeParam));
  return mergedDate;
};
var findClosestEnabledDate = ({
  date,
  disableFuture,
  disablePast,
  maxDate,
  minDate,
  isDateDisabled,
  adapter,
  timezone
}) => {
  const today = mergeDateAndTime(adapter, adapter.date(void 0, timezone), date);
  if (disablePast && adapter.isBefore(minDate, today)) {
    minDate = today;
  }
  if (disableFuture && adapter.isAfter(maxDate, today)) {
    maxDate = today;
  }
  let forward = date;
  let backward = date;
  if (adapter.isBefore(date, minDate)) {
    forward = minDate;
    backward = null;
  }
  if (adapter.isAfter(date, maxDate)) {
    if (backward) {
      backward = maxDate;
    }
    forward = null;
  }
  while (forward || backward) {
    if (forward && adapter.isAfter(forward, maxDate)) {
      forward = null;
    }
    if (backward && adapter.isBefore(backward, minDate)) {
      backward = null;
    }
    if (forward) {
      if (!isDateDisabled(forward)) {
        return forward;
      }
      forward = adapter.addDays(forward, 1);
    }
    if (backward) {
      if (!isDateDisabled(backward)) {
        return backward;
      }
      backward = adapter.addDays(backward, -1);
    }
  }
  return null;
};
var replaceInvalidDateByNull = (adapter, value) => !adapter.isValid(value) ? null : value;
var applyDefaultDate = (adapter, value, defaultValue) => {
  if (value == null || !adapter.isValid(value)) {
    return defaultValue;
  }
  return value;
};
var areDatesEqual = (adapter, a, b) => {
  if (!adapter.isValid(a) && a != null && !adapter.isValid(b) && b != null) {
    return true;
  }
  return adapter.isEqual(a, b);
};
var getMonthsInYear = (adapter, year) => {
  const firstMonth = adapter.startOfYear(year);
  const months = [firstMonth];
  while (months.length < 12) {
    const prevMonth = months[months.length - 1];
    months.push(adapter.addMonths(prevMonth, 1));
  }
  return months;
};
var getTodayDate = (adapter, timezone, valueType) => valueType === "date" ? adapter.startOfDay(adapter.date(void 0, timezone)) : adapter.date(void 0, timezone);
var formatMeridiem = (adapter, meridiem) => {
  const date = adapter.setHours(adapter.date(), meridiem === "am" ? 2 : 14);
  return adapter.format(date, "meridiem");
};
var DATE_VIEWS = ["year", "month", "day"];
var isDatePickerView = (view) => DATE_VIEWS.includes(view);
var resolveDateFormat = (adapter, {
  format,
  views
}, isInToolbar) => {
  if (format != null) {
    return format;
  }
  const formats = adapter.formats;
  if (areViewsEqual(views, ["year"])) {
    return formats.year;
  }
  if (areViewsEqual(views, ["month"])) {
    return formats.month;
  }
  if (areViewsEqual(views, ["day"])) {
    return formats.dayOfMonth;
  }
  if (areViewsEqual(views, ["month", "year"])) {
    return `${formats.month} ${formats.year}`;
  }
  if (areViewsEqual(views, ["day", "month"])) {
    return `${formats.month} ${formats.dayOfMonth}`;
  }
  if (isInToolbar) {
    return /en/.test(adapter.getCurrentLocaleCode()) ? formats.normalDateWithWeekday : formats.normalDate;
  }
  return formats.keyboardDate;
};
var getWeekdays = (adapter, date) => {
  const start = adapter.startOfWeek(date);
  return [0, 1, 2, 3, 4, 5, 6].map((diff) => adapter.addDays(start, diff));
};

// node_modules/.pnpm/@mui+x-date-pickers@8.26.0_@emotion+react@11.14.0_@types+react@19.2.7_react@19.2.3__@em_45e4fa7585d24d6c7a3cddedaa636f9d/node_modules/@mui/x-date-pickers/esm/internals/utils/time-utils.js
var EXPORTED_TIME_VIEWS = ["hours", "minutes", "seconds"];
var TIME_VIEWS = ["hours", "minutes", "seconds", "meridiem"];
var isTimeView = (view) => EXPORTED_TIME_VIEWS.includes(view);
var isInternalTimeView = (view) => TIME_VIEWS.includes(view);
var getMeridiem = (date, adapter) => {
  if (!date) {
    return null;
  }
  return adapter.getHours(date) >= 12 ? "pm" : "am";
};
var convertValueToMeridiem = (value, meridiem, ampm) => {
  if (ampm) {
    const currentMeridiem = value >= 12 ? "pm" : "am";
    if (currentMeridiem !== meridiem) {
      return meridiem === "am" ? value - 12 : value + 12;
    }
  }
  return value;
};
var convertToMeridiem = (time, meridiem, ampm, adapter) => {
  const newHoursAmount = convertValueToMeridiem(adapter.getHours(time), meridiem, ampm);
  return adapter.setHours(time, newHoursAmount);
};
var getSecondsInDay = (date, adapter) => {
  return adapter.getHours(date) * 3600 + adapter.getMinutes(date) * 60 + adapter.getSeconds(date);
};
var createIsAfterIgnoreDatePart = (disableIgnoringDatePartForTimeValidation, adapter) => (dateLeft, dateRight) => {
  if (disableIgnoringDatePartForTimeValidation) {
    return adapter.isAfter(dateLeft, dateRight);
  }
  return getSecondsInDay(dateLeft, adapter) > getSecondsInDay(dateRight, adapter);
};
var resolveTimeFormat = (adapter, {
  format,
  views,
  ampm
}) => {
  if (format != null) {
    return format;
  }
  const formats = adapter.formats;
  if (areViewsEqual(views, ["hours"])) {
    return ampm ? `${formats.hours12h} ${formats.meridiem}` : formats.hours24h;
  }
  if (areViewsEqual(views, ["minutes"])) {
    return formats.minutes;
  }
  if (areViewsEqual(views, ["seconds"])) {
    return formats.seconds;
  }
  if (areViewsEqual(views, ["minutes", "seconds"])) {
    return `${formats.minutes}:${formats.seconds}`;
  }
  if (areViewsEqual(views, ["hours", "minutes", "seconds"])) {
    return ampm ? `${formats.hours12h}:${formats.minutes}:${formats.seconds} ${formats.meridiem}` : `${formats.hours24h}:${formats.minutes}:${formats.seconds}`;
  }
  return ampm ? `${formats.hours12h}:${formats.minutes} ${formats.meridiem}` : `${formats.hours24h}:${formats.minutes}`;
};

// node_modules/.pnpm/@mui+x-date-pickers@8.26.0_@emotion+react@11.14.0_@types+react@19.2.7_react@19.2.3__@em_45e4fa7585d24d6c7a3cddedaa636f9d/node_modules/@mui/x-date-pickers/esm/internals/utils/getDefaultReferenceDate.js
var SECTION_TYPE_GRANULARITY = {
  year: 1,
  month: 2,
  day: 3,
  hours: 4,
  minutes: 5,
  seconds: 6,
  milliseconds: 7
};
var getSectionTypeGranularity = (sections) => Math.max(...sections.map((section) => SECTION_TYPE_GRANULARITY[section.type] ?? 1));
var roundDate = (adapter, granularity, date) => {
  if (granularity === SECTION_TYPE_GRANULARITY.year) {
    return adapter.startOfYear(date);
  }
  if (granularity === SECTION_TYPE_GRANULARITY.month) {
    return adapter.startOfMonth(date);
  }
  if (granularity === SECTION_TYPE_GRANULARITY.day) {
    return adapter.startOfDay(date);
  }
  let roundedDate = date;
  if (granularity < SECTION_TYPE_GRANULARITY.minutes) {
    roundedDate = adapter.setMinutes(roundedDate, 0);
  }
  if (granularity < SECTION_TYPE_GRANULARITY.seconds) {
    roundedDate = adapter.setSeconds(roundedDate, 0);
  }
  if (granularity < SECTION_TYPE_GRANULARITY.milliseconds) {
    roundedDate = adapter.setMilliseconds(roundedDate, 0);
  }
  return roundedDate;
};
var getDefaultReferenceDate = ({
  props,
  adapter,
  granularity,
  timezone,
  getTodayDate: inGetTodayDate
}) => {
  let referenceDate = inGetTodayDate ? inGetTodayDate() : roundDate(adapter, granularity, getTodayDate(adapter, timezone));
  if (props.minDate != null && adapter.isAfterDay(props.minDate, referenceDate)) {
    referenceDate = roundDate(adapter, granularity, props.minDate);
  }
  if (props.maxDate != null && adapter.isBeforeDay(props.maxDate, referenceDate)) {
    referenceDate = roundDate(adapter, granularity, props.maxDate);
  }
  const isAfter = createIsAfterIgnoreDatePart(props.disableIgnoringDatePartForTimeValidation ?? false, adapter);
  if (props.minTime != null && isAfter(props.minTime, referenceDate)) {
    referenceDate = roundDate(adapter, granularity, props.disableIgnoringDatePartForTimeValidation ? props.minTime : mergeDateAndTime(adapter, referenceDate, props.minTime));
  }
  if (props.maxTime != null && isAfter(referenceDate, props.maxTime)) {
    referenceDate = roundDate(adapter, granularity, props.disableIgnoringDatePartForTimeValidation ? props.maxTime : mergeDateAndTime(adapter, referenceDate, props.maxTime));
  }
  return referenceDate;
};

// node_modules/.pnpm/@mui+x-date-pickers@8.26.0_@emotion+react@11.14.0_@types+react@19.2.7_react@19.2.3__@em_45e4fa7585d24d6c7a3cddedaa636f9d/node_modules/@mui/x-date-pickers/esm/internals/hooks/useField/useField.utils.js
var getDateSectionConfigFromFormatToken = (adapter, formatToken) => {
  const config = adapter.formatTokenMap[formatToken];
  if (config == null) {
    throw new Error([`MUI X: The token "${formatToken}" is not supported by the Date and Time Pickers.`, "Please try using another token or open an issue on https://github.com/mui/mui-x/issues/new/choose if you think it should be supported."].join("\n"));
  }
  if (typeof config === "string") {
    return {
      type: config,
      contentType: config === "meridiem" ? "letter" : "digit",
      maxLength: void 0
    };
  }
  return {
    type: config.sectionType,
    contentType: config.contentType,
    maxLength: config.maxLength
  };
};
var getDaysInWeekStr = (adapter, format) => {
  const elements = [];
  const now = adapter.date(void 0, "default");
  const startDate = adapter.startOfWeek(now);
  const endDate = adapter.endOfWeek(now);
  let current = startDate;
  while (adapter.isBefore(current, endDate)) {
    elements.push(current);
    current = adapter.addDays(current, 1);
  }
  return elements.map((weekDay) => adapter.formatByString(weekDay, format));
};
var getLetterEditingOptions = (adapter, timezone, sectionType, format) => {
  switch (sectionType) {
    case "month": {
      return getMonthsInYear(adapter, adapter.date(void 0, timezone)).map((month) => adapter.formatByString(month, format));
    }
    case "weekDay": {
      return getDaysInWeekStr(adapter, format);
    }
    case "meridiem": {
      const now = adapter.date(void 0, timezone);
      return [adapter.startOfDay(now), adapter.endOfDay(now)].map((date) => adapter.formatByString(date, format));
    }
    default: {
      return [];
    }
  }
};
var FORMAT_SECONDS_NO_LEADING_ZEROS = "s";
var NON_LOCALIZED_DIGITS = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var getLocalizedDigits = (adapter) => {
  const today = adapter.date(void 0);
  const formattedZero = adapter.formatByString(adapter.setSeconds(today, 0), FORMAT_SECONDS_NO_LEADING_ZEROS);
  if (formattedZero === "0") {
    return NON_LOCALIZED_DIGITS;
  }
  return Array.from({
    length: 10
  }).map((_, index) => adapter.formatByString(adapter.setSeconds(today, index), FORMAT_SECONDS_NO_LEADING_ZEROS));
};
var removeLocalizedDigits = (valueStr, localizedDigits) => {
  if (localizedDigits[0] === "0") {
    return valueStr;
  }
  const digits = [];
  let currentFormattedDigit = "";
  for (let i = 0; i < valueStr.length; i += 1) {
    currentFormattedDigit += valueStr[i];
    const matchingDigitIndex = localizedDigits.indexOf(currentFormattedDigit);
    if (matchingDigitIndex > -1) {
      digits.push(matchingDigitIndex.toString());
      currentFormattedDigit = "";
    }
  }
  return digits.join("");
};
var applyLocalizedDigits = (valueStr, localizedDigits) => {
  if (localizedDigits[0] === "0") {
    return valueStr;
  }
  return valueStr.split("").map((char) => localizedDigits[Number(char)]).join("");
};
var isStringNumber = (valueStr, localizedDigits) => {
  const nonLocalizedValueStr = removeLocalizedDigits(valueStr, localizedDigits);
  return nonLocalizedValueStr !== " " && !Number.isNaN(Number(nonLocalizedValueStr));
};
var cleanLeadingZeros = (valueStr, size) => {
  return Number(valueStr).toString().padStart(size, "0");
};
var cleanDigitSectionValue = (adapter, value, sectionBoundaries, localizedDigits, section) => {
  if (true) {
    if (section.type !== "day" && section.contentType === "digit-with-letter") {
      throw new Error([`MUI X: The token "${section.format}" is a digit format with letter in it.'
             This type of format is only supported for 'day' sections`].join("\n"));
    }
  }
  if (section.type === "day" && section.contentType === "digit-with-letter") {
    const date = adapter.setDate(sectionBoundaries.longestMonth, value);
    return adapter.formatByString(date, section.format);
  }
  let valueStr = value.toString();
  if (section.hasLeadingZerosInInput) {
    valueStr = cleanLeadingZeros(valueStr, section.maxLength);
  }
  return applyLocalizedDigits(valueStr, localizedDigits);
};
var getSectionVisibleValue = (section, target, localizedDigits) => {
  let value = section.value || section.placeholder;
  const hasLeadingZeros = target === "non-input" ? section.hasLeadingZerosInFormat : section.hasLeadingZerosInInput;
  if (target === "non-input" && section.hasLeadingZerosInInput && !section.hasLeadingZerosInFormat) {
    value = Number(removeLocalizedDigits(value, localizedDigits)).toString();
  }
  const shouldAddInvisibleSpace = ["input-rtl", "input-ltr"].includes(target) && section.contentType === "digit" && !hasLeadingZeros && value.length === 1;
  if (shouldAddInvisibleSpace) {
    value = `${value}‎`;
  }
  if (target === "input-rtl") {
    value = `⁨${value}⁩`;
  }
  return value;
};
var changeSectionValueFormat = (adapter, valueStr, currentFormat, newFormat) => {
  if (true) {
    if (getDateSectionConfigFromFormatToken(adapter, currentFormat).type === "weekDay") {
      throw new Error("changeSectionValueFormat doesn't support week day formats");
    }
  }
  return adapter.formatByString(adapter.parse(valueStr, currentFormat), newFormat);
};
var isFourDigitYearFormat = (adapter, format) => adapter.formatByString(adapter.date(void 0, "system"), format).length === 4;
var doesSectionFormatHaveLeadingZeros = (adapter, contentType, sectionType, format) => {
  if (contentType !== "digit") {
    return false;
  }
  const now = adapter.date(void 0, "default");
  switch (sectionType) {
    // We can't use `changeSectionValueFormat`, because  `adapter.parse('1', 'YYYY')` returns `1971` instead of `1`.
    case "year": {
      if (adapter.lib === "dayjs" && format === "YY") {
        return true;
      }
      return adapter.formatByString(adapter.setYear(now, 1), format).startsWith("0");
    }
    case "month": {
      return adapter.formatByString(adapter.startOfYear(now), format).length > 1;
    }
    case "day": {
      return adapter.formatByString(adapter.startOfMonth(now), format).length > 1;
    }
    case "weekDay": {
      return adapter.formatByString(adapter.startOfWeek(now), format).length > 1;
    }
    case "hours": {
      return adapter.formatByString(adapter.setHours(now, 1), format).length > 1;
    }
    case "minutes": {
      return adapter.formatByString(adapter.setMinutes(now, 1), format).length > 1;
    }
    case "seconds": {
      return adapter.formatByString(adapter.setSeconds(now, 1), format).length > 1;
    }
    default: {
      throw new Error("Invalid section type");
    }
  }
};
var getDateFromDateSections = (adapter, sections, localizedDigits) => {
  const shouldSkipWeekDays = sections.some((section) => section.type === "day");
  const sectionFormats = [];
  const sectionValues = [];
  for (let i = 0; i < sections.length; i += 1) {
    const section = sections[i];
    const shouldSkip = shouldSkipWeekDays && section.type === "weekDay";
    if (!shouldSkip) {
      sectionFormats.push(section.format);
      sectionValues.push(getSectionVisibleValue(section, "non-input", localizedDigits));
    }
  }
  const formatWithoutSeparator = sectionFormats.join(" ");
  const dateWithoutSeparatorStr = sectionValues.join(" ");
  return adapter.parse(dateWithoutSeparatorStr, formatWithoutSeparator);
};
var createDateStrForV7HiddenInputFromSections = (sections) => sections.map((section) => {
  return `${section.startSeparator}${section.value || section.placeholder}${section.endSeparator}`;
}).join("");
var createDateStrForV6InputFromSections = (sections, localizedDigits, isRtl) => {
  const formattedSections = sections.map((section) => {
    const dateValue = getSectionVisibleValue(section, isRtl ? "input-rtl" : "input-ltr", localizedDigits);
    return `${section.startSeparator}${dateValue}${section.endSeparator}`;
  });
  const dateStr = formattedSections.join("");
  if (!isRtl) {
    return dateStr;
  }
  return `⁦${dateStr}⁩`;
};
var getSectionsBoundaries = (adapter, localizedDigits, timezone) => {
  const today = adapter.date(void 0, timezone);
  const endOfYear = adapter.endOfYear(today);
  const endOfDay = adapter.endOfDay(today);
  const {
    maxDaysInMonth,
    longestMonth
  } = getMonthsInYear(adapter, today).reduce((acc, month) => {
    const daysInMonth = adapter.getDaysInMonth(month);
    if (daysInMonth > acc.maxDaysInMonth) {
      return {
        maxDaysInMonth: daysInMonth,
        longestMonth: month
      };
    }
    return acc;
  }, {
    maxDaysInMonth: 0,
    longestMonth: null
  });
  return {
    year: ({
      format
    }) => ({
      minimum: 0,
      maximum: isFourDigitYearFormat(adapter, format) ? 9999 : 99
    }),
    month: () => ({
      minimum: 1,
      // Assumption: All years have the same amount of months
      maximum: adapter.getMonth(endOfYear) + 1
    }),
    day: ({
      currentDate
    }) => ({
      minimum: 1,
      maximum: adapter.isValid(currentDate) ? adapter.getDaysInMonth(currentDate) : maxDaysInMonth,
      longestMonth
    }),
    weekDay: ({
      format,
      contentType
    }) => {
      if (contentType === "digit") {
        const daysInWeek = getDaysInWeekStr(adapter, format).map(Number);
        return {
          minimum: Math.min(...daysInWeek),
          maximum: Math.max(...daysInWeek)
        };
      }
      return {
        minimum: 1,
        maximum: 7
      };
    },
    hours: ({
      format
    }) => {
      const lastHourInDay = adapter.getHours(endOfDay);
      const hasMeridiem = removeLocalizedDigits(adapter.formatByString(adapter.endOfDay(today), format), localizedDigits) !== lastHourInDay.toString();
      if (hasMeridiem) {
        return {
          minimum: 1,
          maximum: Number(removeLocalizedDigits(adapter.formatByString(adapter.startOfDay(today), format), localizedDigits))
        };
      }
      return {
        minimum: 0,
        maximum: lastHourInDay
      };
    },
    minutes: () => ({
      minimum: 0,
      // Assumption: All years have the same amount of minutes
      maximum: adapter.getMinutes(endOfDay)
    }),
    seconds: () => ({
      minimum: 0,
      // Assumption: All years have the same amount of seconds
      maximum: adapter.getSeconds(endOfDay)
    }),
    meridiem: () => ({
      minimum: 0,
      maximum: 1
    }),
    empty: () => ({
      minimum: 0,
      maximum: 0
    })
  };
};
var warnedOnceInvalidSection = false;
var validateSections = (sections, valueType) => {
  if (true) {
    if (!warnedOnceInvalidSection) {
      const supportedSections = ["empty"];
      if (["date", "date-time"].includes(valueType)) {
        supportedSections.push("weekDay", "day", "month", "year");
      }
      if (["time", "date-time"].includes(valueType)) {
        supportedSections.push("hours", "minutes", "seconds", "meridiem");
      }
      const invalidSection = sections.find((section) => !supportedSections.includes(section.type));
      if (invalidSection) {
        console.warn(`MUI X: The field component you are using is not compatible with the "${invalidSection.type}" date section.`, `The supported date sections are ["${supportedSections.join('", "')}"]\`.`);
        warnedOnceInvalidSection = true;
      }
    }
  }
};
var transferDateSectionValue = (adapter, section, dateToTransferFrom, dateToTransferTo) => {
  switch (section.type) {
    case "year": {
      return adapter.setYear(dateToTransferTo, adapter.getYear(dateToTransferFrom));
    }
    case "month": {
      return adapter.setMonth(dateToTransferTo, adapter.getMonth(dateToTransferFrom));
    }
    case "weekDay": {
      let dayInWeekStrOfActiveDate = adapter.formatByString(dateToTransferFrom, section.format);
      if (section.hasLeadingZerosInInput) {
        dayInWeekStrOfActiveDate = cleanLeadingZeros(dayInWeekStrOfActiveDate, section.maxLength);
      }
      const formattedDaysInWeek = getDaysInWeekStr(adapter, section.format);
      const dayInWeekOfActiveDate = formattedDaysInWeek.indexOf(dayInWeekStrOfActiveDate);
      const dayInWeekOfNewSectionValue = formattedDaysInWeek.indexOf(section.value);
      const diff = dayInWeekOfNewSectionValue - dayInWeekOfActiveDate;
      return adapter.addDays(dateToTransferFrom, diff);
    }
    case "day": {
      return adapter.setDate(dateToTransferTo, adapter.getDate(dateToTransferFrom));
    }
    case "meridiem": {
      const isAM = adapter.getHours(dateToTransferFrom) < 12;
      const mergedDateHours = adapter.getHours(dateToTransferTo);
      if (isAM && mergedDateHours >= 12) {
        return adapter.addHours(dateToTransferTo, -12);
      }
      if (!isAM && mergedDateHours < 12) {
        return adapter.addHours(dateToTransferTo, 12);
      }
      return dateToTransferTo;
    }
    case "hours": {
      return adapter.setHours(dateToTransferTo, adapter.getHours(dateToTransferFrom));
    }
    case "minutes": {
      return adapter.setMinutes(dateToTransferTo, adapter.getMinutes(dateToTransferFrom));
    }
    case "seconds": {
      return adapter.setSeconds(dateToTransferTo, adapter.getSeconds(dateToTransferFrom));
    }
    default: {
      return dateToTransferTo;
    }
  }
};
var reliableSectionModificationOrder = {
  year: 1,
  month: 2,
  day: 3,
  weekDay: 4,
  hours: 5,
  minutes: 6,
  seconds: 7,
  meridiem: 8,
  empty: 9
};
var mergeDateIntoReferenceDate = (adapter, dateToTransferFrom, sections, referenceDate, shouldLimitToEditedSections) => (
  // cloning sections before sort to avoid mutating it
  [...sections].sort((a, b) => reliableSectionModificationOrder[a.type] - reliableSectionModificationOrder[b.type]).reduce((mergedDate, section) => {
    if (!shouldLimitToEditedSections || section.modified) {
      return transferDateSectionValue(adapter, section, dateToTransferFrom, mergedDate);
    }
    return mergedDate;
  }, referenceDate)
);
var isAndroid = () => navigator.userAgent.toLowerCase().includes("android");
var getSectionOrder = (sections, shouldApplyRTL) => {
  const neighbors = {};
  if (!shouldApplyRTL) {
    sections.forEach((_, index) => {
      const leftIndex = index === 0 ? null : index - 1;
      const rightIndex = index === sections.length - 1 ? null : index + 1;
      neighbors[index] = {
        leftIndex,
        rightIndex
      };
    });
    return {
      neighbors,
      startIndex: 0,
      endIndex: sections.length - 1
    };
  }
  const rtl2ltr = {};
  const ltr2rtl = {};
  let groupedSectionsStart = 0;
  let groupedSectionsEnd = 0;
  let RTLIndex = sections.length - 1;
  while (RTLIndex >= 0) {
    groupedSectionsEnd = sections.findIndex(
      // eslint-disable-next-line @typescript-eslint/no-loop-func
      (section, index) => index >= groupedSectionsStart && section.endSeparator?.includes(" ") && // Special case where the spaces were not there in the initial input
      section.endSeparator !== " / "
    );
    if (groupedSectionsEnd === -1) {
      groupedSectionsEnd = sections.length - 1;
    }
    for (let i = groupedSectionsEnd; i >= groupedSectionsStart; i -= 1) {
      ltr2rtl[i] = RTLIndex;
      rtl2ltr[RTLIndex] = i;
      RTLIndex -= 1;
    }
    groupedSectionsStart = groupedSectionsEnd + 1;
  }
  sections.forEach((_, index) => {
    const rtlIndex = ltr2rtl[index];
    const leftIndex = rtlIndex === 0 ? null : rtl2ltr[rtlIndex - 1];
    const rightIndex = rtlIndex === sections.length - 1 ? null : rtl2ltr[rtlIndex + 1];
    neighbors[index] = {
      leftIndex,
      rightIndex
    };
  });
  return {
    neighbors,
    startIndex: rtl2ltr[0],
    endIndex: rtl2ltr[sections.length - 1]
  };
};
var parseSelectedSections = (selectedSections, sections) => {
  if (selectedSections == null) {
    return null;
  }
  if (selectedSections === "all") {
    return "all";
  }
  if (typeof selectedSections === "string") {
    const index = sections.findIndex((section) => section.type === selectedSections);
    return index === -1 ? null : index;
  }
  return selectedSections;
};

// node_modules/.pnpm/@mui+x-date-pickers@8.26.0_@emotion+react@11.14.0_@types+react@19.2.7_react@19.2.3__@em_45e4fa7585d24d6c7a3cddedaa636f9d/node_modules/@mui/x-date-pickers/esm/internals/utils/valueManagers.js
var _excluded = ["value", "referenceDate"];
var singleItemValueManager = {
  emptyValue: null,
  getTodayValue: getTodayDate,
  getInitialReferenceValue: (_ref) => {
    let {
      value,
      referenceDate
    } = _ref, params = _objectWithoutPropertiesLoose(_ref, _excluded);
    if (params.adapter.isValid(value)) {
      return value;
    }
    if (referenceDate != null) {
      return referenceDate;
    }
    return getDefaultReferenceDate(params);
  },
  cleanValue: replaceInvalidDateByNull,
  areValuesEqual: areDatesEqual,
  isSameError: (a, b) => a === b,
  hasError: (error) => error != null,
  defaultErrorState: null,
  getTimezone: (adapter, value) => adapter.isValid(value) ? adapter.getTimezone(value) : null,
  setTimezone: (adapter, timezone, value) => value == null ? null : adapter.setTimezone(value, timezone)
};
var singleItemFieldValueManager = {
  updateReferenceValue: (adapter, value, prevReferenceValue) => adapter.isValid(value) ? value : prevReferenceValue,
  getSectionsFromValue: (date, getSectionsFromDate) => getSectionsFromDate(date),
  getV7HiddenInputValueFromSections: createDateStrForV7HiddenInputFromSections,
  getV6InputValueFromSections: createDateStrForV6InputFromSections,
  parseValueStr: (valueStr, referenceValue, parseDate) => parseDate(valueStr.trim(), referenceValue),
  getDateFromSection: (value) => value,
  getDateSectionsFromValue: (sections) => sections,
  updateDateInValue: (value, activeSection, activeDate) => activeDate,
  clearDateSections: (sections) => sections.map((section) => _extends({}, section, {
    value: ""
  }))
};

// node_modules/.pnpm/@mui+x-date-pickers@8.26.0_@emotion+react@11.14.0_@types+react@19.2.7_react@19.2.3__@em_45e4fa7585d24d6c7a3cddedaa636f9d/node_modules/@mui/x-date-pickers/esm/DatePicker/shared.js
var React39 = __toESM(require_react(), 1);

// node_modules/.pnpm/@mui+x-date-pickers@8.26.0_@emotion+react@11.14.0_@types+react@19.2.7_react@19.2.3__@em_45e4fa7585d24d6c7a3cddedaa636f9d/node_modules/@mui/x-date-pickers/esm/DatePicker/DatePickerToolbar.js
var React35 = __toESM(require_react(), 1);
var import_prop_types3 = __toESM(require_prop_types(), 1);

// node_modules/.pnpm/@mui+x-date-pickers@8.26.0_@emotion+react@11.14.0_@types+react@19.2.7_react@19.2.3__@em_45e4fa7585d24d6c7a3cddedaa636f9d/node_modules/@mui/x-date-pickers/esm/internals/components/PickersToolbar.js
var React29 = __toESM(require_react(), 1);

// node_modules/.pnpm/@mui+x-date-pickers@8.26.0_@emotion+react@11.14.0_@types+react@19.2.7_react@19.2.3__@em_45e4fa7585d24d6c7a3cddedaa636f9d/node_modules/@mui/x-date-pickers/esm/internals/components/pickersToolbarClasses.js
function getPickersToolbarUtilityClass(slot) {
  return generateUtilityClass("MuiPickersToolbar", slot);
}
var pickersToolbarClasses = generateUtilityClasses("MuiPickersToolbar", ["root", "title", "content"]);

// node_modules/.pnpm/@mui+x-date-pickers@8.26.0_@emotion+react@11.14.0_@types+react@19.2.7_react@19.2.3__@em_45e4fa7585d24d6c7a3cddedaa636f9d/node_modules/@mui/x-date-pickers/esm/internals/hooks/useToolbarOwnerState.js
var React28 = __toESM(require_react(), 1);

// node_modules/.pnpm/@mui+x-date-pickers@8.26.0_@emotion+react@11.14.0_@types+react@19.2.7_react@19.2.3__@em_45e4fa7585d24d6c7a3cddedaa636f9d/node_modules/@mui/x-date-pickers/esm/internals/hooks/usePickerPrivateContext.js
var React27 = __toESM(require_react(), 1);

// node_modules/.pnpm/@mui+x-date-pickers@8.26.0_@emotion+react@11.14.0_@types+react@19.2.7_react@19.2.3__@em_45e4fa7585d24d6c7a3cddedaa636f9d/node_modules/@mui/x-date-pickers/esm/internals/components/PickerProvider.js
var React26 = __toESM(require_react(), 1);

// node_modules/.pnpm/@mui+x-date-pickers@8.26.0_@emotion+react@11.14.0_@types+react@19.2.7_react@19.2.3__@em_45e4fa7585d24d6c7a3cddedaa636f9d/node_modules/@mui/x-date-pickers/esm/LocalizationProvider/LocalizationProvider.js
var React22 = __toESM(require_react(), 1);
var import_prop_types2 = __toESM(require_prop_types(), 1);
var import_jsx_runtime24 = __toESM(require_jsx_runtime(), 1);
var _excluded2 = ["localeText"];
var PickerAdapterContext = React22.createContext(null);
if (true) PickerAdapterContext.displayName = "PickerAdapterContext";
var LocalizationProvider2 = function LocalizationProvider3(inProps) {
  const {
    localeText: inLocaleText
  } = inProps, otherInProps = _objectWithoutPropertiesLoose(inProps, _excluded2);
  const {
    adapter: parentAdapter,
    localeText: parentLocaleText
  } = React22.useContext(PickerAdapterContext) ?? {
    utils: void 0,
    adapter: void 0,
    localeText: void 0
  };
  const props = useThemeProps({
    // We don't want to pass the `localeText` prop to the theme, that way it will always return the theme value,
    // We will then merge this theme value with our value manually
    props: otherInProps,
    name: "MuiLocalizationProvider"
  });
  const {
    children,
    dateAdapter: DateAdapter,
    dateFormats,
    dateLibInstance,
    adapterLocale,
    localeText: themeLocaleText
  } = props;
  const localeText = React22.useMemo(() => _extends({}, themeLocaleText, parentLocaleText, inLocaleText), [themeLocaleText, parentLocaleText, inLocaleText]);
  const adapter = React22.useMemo(() => {
    if (!DateAdapter) {
      if (parentAdapter) {
        return parentAdapter;
      }
      return null;
    }
    const dateAdapter = new DateAdapter({
      locale: adapterLocale,
      formats: dateFormats,
      instance: dateLibInstance
    });
    if (!dateAdapter.isMUIAdapter) {
      throw new Error(["MUI X: The date adapter should be imported from `@mui/x-date-pickers` or `@mui/x-date-pickers-pro`, not from `@date-io`", "For example, `import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'` instead of `import AdapterDayjs from '@date-io/dayjs'`", "More information on the installation documentation: https://mui.com/x/react-date-pickers/quickstart/#installation"].join(`
`));
    }
    return dateAdapter;
  }, [DateAdapter, adapterLocale, dateFormats, dateLibInstance, parentAdapter]);
  const defaultDates = React22.useMemo(() => {
    if (!adapter) {
      return null;
    }
    return {
      minDate: adapter.date("1900-01-01T00:00:00.000"),
      maxDate: adapter.date("2099-12-31T00:00:00.000")
    };
  }, [adapter]);
  const contextValue = React22.useMemo(() => {
    return {
      utils: adapter,
      adapter,
      defaultDates,
      localeText
    };
  }, [defaultDates, adapter, localeText]);
  return (0, import_jsx_runtime24.jsx)(PickerAdapterContext.Provider, {
    value: contextValue,
    children
  });
};
if (true) LocalizationProvider2.displayName = "LocalizationProvider";
true ? LocalizationProvider2.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * Locale for the date library you are using
   */
  adapterLocale: import_prop_types2.default.any,
  children: import_prop_types2.default.node,
  /**
   * Date library adapter class function.
   * @see See the localization provider {@link https://mui.com/x/react-date-pickers/quickstart/#integrate-provider-and-adapter date adapter setup section} for more details.
   */
  dateAdapter: import_prop_types2.default.func,
  /**
   * Formats that are used for any child pickers
   */
  dateFormats: import_prop_types2.default.shape({
    dayOfMonth: import_prop_types2.default.string,
    dayOfMonthFull: import_prop_types2.default.string,
    fullDate: import_prop_types2.default.string,
    fullTime12h: import_prop_types2.default.string,
    fullTime24h: import_prop_types2.default.string,
    hours12h: import_prop_types2.default.string,
    hours24h: import_prop_types2.default.string,
    keyboardDate: import_prop_types2.default.string,
    keyboardDateTime12h: import_prop_types2.default.string,
    keyboardDateTime24h: import_prop_types2.default.string,
    meridiem: import_prop_types2.default.string,
    minutes: import_prop_types2.default.string,
    month: import_prop_types2.default.string,
    monthShort: import_prop_types2.default.string,
    normalDate: import_prop_types2.default.string,
    normalDateWithWeekday: import_prop_types2.default.string,
    seconds: import_prop_types2.default.string,
    shortDate: import_prop_types2.default.string,
    weekday: import_prop_types2.default.string,
    weekdayShort: import_prop_types2.default.string,
    year: import_prop_types2.default.string
  }),
  /**
   * Date library instance you are using, if it has some global overrides
   * ```jsx
   * dateLibInstance={momentTimeZone}
   * ```
   */
  dateLibInstance: import_prop_types2.default.any,
  /**
   * Locale for components texts
   */
  localeText: import_prop_types2.default.object
} : void 0;

// node_modules/.pnpm/@mui+x-date-pickers@8.26.0_@emotion+react@11.14.0_@types+react@19.2.7_react@19.2.3__@em_45e4fa7585d24d6c7a3cddedaa636f9d/node_modules/@mui/x-date-pickers/esm/hooks/useIsValidValue.js
var React23 = __toESM(require_react(), 1);
var IsValidValueContext = React23.createContext(() => true);
if (true) IsValidValueContext.displayName = "IsValidValueContext";
function useIsValidValue() {
  return React23.useContext(IsValidValueContext);
}

// node_modules/.pnpm/@mui+x-date-pickers@8.26.0_@emotion+react@11.14.0_@types+react@19.2.7_react@19.2.3__@em_45e4fa7585d24d6c7a3cddedaa636f9d/node_modules/@mui/x-date-pickers/esm/internals/hooks/useNullableFieldPrivateContext.js
var React24 = __toESM(require_react(), 1);
var PickerFieldPrivateContext = React24.createContext(null);
if (true) PickerFieldPrivateContext.displayName = "PickerFieldPrivateContext";
function useNullableFieldPrivateContext() {
  return React24.useContext(PickerFieldPrivateContext);
}

// node_modules/.pnpm/@mui+x-date-pickers@8.26.0_@emotion+react@11.14.0_@types+react@19.2.7_react@19.2.3__@em_45e4fa7585d24d6c7a3cddedaa636f9d/node_modules/@mui/x-date-pickers/esm/hooks/usePickerContext.js
var React25 = __toESM(require_react(), 1);
var PickerContext = React25.createContext(null);
if (true) PickerContext.displayName = "PickerContext";
var usePickerContext = () => {
  const value = React25.useContext(PickerContext);
  if (value == null) {
    throw new Error("MUI X: The `usePickerContext` hook can only be called inside the context of a Picker component");
  }
  return value;
};

// node_modules/.pnpm/@mui+x-date-pickers@8.26.0_@emotion+react@11.14.0_@types+react@19.2.7_react@19.2.3__@em_45e4fa7585d24d6c7a3cddedaa636f9d/node_modules/@mui/x-date-pickers/esm/internals/components/PickerProvider.js
var import_jsx_runtime25 = __toESM(require_jsx_runtime(), 1);
var PickerActionsContext = React26.createContext(null);
if (true) PickerActionsContext.displayName = "PickerActionsContext";
var PickerPrivateContext = React26.createContext({
  ownerState: {
    isPickerDisabled: false,
    isPickerReadOnly: false,
    isPickerValueEmpty: false,
    isPickerOpen: false,
    pickerVariant: "desktop",
    pickerOrientation: "portrait"
  },
  rootRefObject: {
    current: null
  },
  labelId: void 0,
  dismissViews: () => {
  },
  hasUIView: true,
  getCurrentViewMode: () => "UI",
  triggerElement: null,
  viewContainerRole: null,
  defaultActionBarActions: [],
  onPopperExited: void 0
});
if (true) PickerPrivateContext.displayName = "PickerPrivateContext";
function PickerProvider(props) {
  const {
    contextValue,
    actionsContextValue,
    privateContextValue,
    fieldPrivateContextValue,
    isValidContextValue,
    localeText,
    children
  } = props;
  return (0, import_jsx_runtime25.jsx)(PickerContext.Provider, {
    value: contextValue,
    children: (0, import_jsx_runtime25.jsx)(PickerActionsContext.Provider, {
      value: actionsContextValue,
      children: (0, import_jsx_runtime25.jsx)(PickerPrivateContext.Provider, {
        value: privateContextValue,
        children: (0, import_jsx_runtime25.jsx)(PickerFieldPrivateContext.Provider, {
          value: fieldPrivateContextValue,
          children: (0, import_jsx_runtime25.jsx)(IsValidValueContext.Provider, {
            value: isValidContextValue,
            children: (0, import_jsx_runtime25.jsx)(LocalizationProvider2, {
              localeText,
              children
            })
          })
        })
      })
    })
  });
}

// node_modules/.pnpm/@mui+x-date-pickers@8.26.0_@emotion+react@11.14.0_@types+react@19.2.7_react@19.2.3__@em_45e4fa7585d24d6c7a3cddedaa636f9d/node_modules/@mui/x-date-pickers/esm/internals/hooks/usePickerPrivateContext.js
var usePickerPrivateContext = () => React27.useContext(PickerPrivateContext);

// node_modules/.pnpm/@mui+x-date-pickers@8.26.0_@emotion+react@11.14.0_@types+react@19.2.7_react@19.2.3__@em_45e4fa7585d24d6c7a3cddedaa636f9d/node_modules/@mui/x-date-pickers/esm/internals/hooks/useToolbarOwnerState.js
function useToolbarOwnerState() {
  const {
    ownerState: pickerOwnerState
  } = usePickerPrivateContext();
  const isRtl = useRtl();
  return React28.useMemo(() => _extends({}, pickerOwnerState, {
    toolbarDirection: isRtl ? "rtl" : "ltr"
  }), [pickerOwnerState, isRtl]);
}

// node_modules/.pnpm/@mui+x-date-pickers@8.26.0_@emotion+react@11.14.0_@types+react@19.2.7_react@19.2.3__@em_45e4fa7585d24d6c7a3cddedaa636f9d/node_modules/@mui/x-date-pickers/esm/internals/components/PickersToolbar.js
var import_jsx_runtime26 = __toESM(require_jsx_runtime(), 1);
var _excluded3 = ["children", "className", "classes", "toolbarTitle", "hidden", "titleId", "classes", "landscapeDirection"];
var useUtilityClasses = (classes) => {
  const slots = {
    root: ["root"],
    title: ["title"],
    content: ["content"]
  };
  return composeClasses(slots, getPickersToolbarUtilityClass, classes);
};
var PickersToolbarRoot = styled_default("div", {
  name: "MuiPickersToolbar",
  slot: "Root"
})(({
  theme
}) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "space-between",
  padding: theme.spacing(2, 3),
  variants: [{
    props: {
      pickerOrientation: "landscape"
    },
    style: {
      height: "auto",
      maxWidth: 160,
      padding: 16,
      justifyContent: "flex-start",
      flexWrap: "wrap"
    }
  }]
}));
var PickersToolbarContent = styled_default("div", {
  name: "MuiPickersToolbar",
  slot: "Content",
  shouldForwardProp: (prop) => shouldForwardProp(prop) && prop !== "landscapeDirection"
})({
  display: "flex",
  flexWrap: "wrap",
  width: "100%",
  flex: 1,
  justifyContent: "space-between",
  alignItems: "center",
  flexDirection: "row",
  variants: [{
    props: {
      pickerOrientation: "landscape"
    },
    style: {
      justifyContent: "flex-start",
      alignItems: "flex-start",
      flexDirection: "column"
    }
  }, {
    props: {
      pickerOrientation: "landscape",
      landscapeDirection: "row"
    },
    style: {
      flexDirection: "row"
    }
  }]
});
var PickersToolbar = React29.forwardRef(function PickersToolbar2(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiPickersToolbar"
  });
  const {
    children,
    className,
    classes: classesProp,
    toolbarTitle,
    hidden,
    titleId,
    landscapeDirection
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded3);
  const ownerState = useToolbarOwnerState();
  const classes = useUtilityClasses(classesProp);
  if (hidden) {
    return null;
  }
  return (0, import_jsx_runtime26.jsxs)(PickersToolbarRoot, _extends({
    ref,
    className: clsx_default(classes.root, className),
    ownerState
  }, other, {
    children: [(0, import_jsx_runtime26.jsx)(Typography_default, {
      color: "text.secondary",
      variant: "overline",
      id: titleId,
      className: classes.title,
      children: toolbarTitle
    }), (0, import_jsx_runtime26.jsx)(PickersToolbarContent, {
      className: classes.content,
      ownerState,
      landscapeDirection,
      children
    })]
  }));
});
if (true) PickersToolbar.displayName = "PickersToolbar";

// node_modules/.pnpm/@mui+x-date-pickers@8.26.0_@emotion+react@11.14.0_@types+react@19.2.7_react@19.2.3__@em_45e4fa7585d24d6c7a3cddedaa636f9d/node_modules/@mui/x-date-pickers/esm/hooks/usePickerAdapter.js
var React30 = __toESM(require_react(), 1);

// node_modules/.pnpm/@mui+x-date-pickers@8.26.0_@emotion+react@11.14.0_@types+react@19.2.7_react@19.2.3__@em_45e4fa7585d24d6c7a3cddedaa636f9d/node_modules/@mui/x-date-pickers/esm/locales/utils/getPickersLocalization.js
var getPickersLocalization = (pickersTranslations) => {
  return {
    components: {
      MuiLocalizationProvider: {
        defaultProps: {
          localeText: _extends({}, pickersTranslations)
        }
      }
    }
  };
};

// node_modules/.pnpm/@mui+x-date-pickers@8.26.0_@emotion+react@11.14.0_@types+react@19.2.7_react@19.2.3__@em_45e4fa7585d24d6c7a3cddedaa636f9d/node_modules/@mui/x-date-pickers/esm/locales/enUS.js
var enUSPickers = {
  // Calendar navigation
  previousMonth: "Previous month",
  nextMonth: "Next month",
  // View navigation
  openPreviousView: "Open previous view",
  openNextView: "Open next view",
  calendarViewSwitchingButtonAriaLabel: (view) => view === "year" ? "year view is open, switch to calendar view" : "calendar view is open, switch to year view",
  // DateRange labels
  start: "Start",
  end: "End",
  startDate: "Start date",
  startTime: "Start time",
  endDate: "End date",
  endTime: "End time",
  // Action bar
  cancelButtonLabel: "Cancel",
  clearButtonLabel: "Clear",
  okButtonLabel: "OK",
  todayButtonLabel: "Today",
  nextStepButtonLabel: "Next",
  // Toolbar titles
  datePickerToolbarTitle: "Select date",
  dateTimePickerToolbarTitle: "Select date & time",
  timePickerToolbarTitle: "Select time",
  dateRangePickerToolbarTitle: "Select date range",
  timeRangePickerToolbarTitle: "Select time range",
  // Clock labels
  clockLabelText: (view, formattedTime) => `Select ${view}. ${!formattedTime ? "No time selected" : `Selected time is ${formattedTime}`}`,
  hoursClockNumberText: (hours) => `${hours} hours`,
  minutesClockNumberText: (minutes) => `${minutes} minutes`,
  secondsClockNumberText: (seconds) => `${seconds} seconds`,
  // Digital clock labels
  selectViewText: (view) => `Select ${view}`,
  // Calendar labels
  calendarWeekNumberHeaderLabel: "Week number",
  calendarWeekNumberHeaderText: "#",
  calendarWeekNumberAriaLabelText: (weekNumber) => `Week ${weekNumber}`,
  calendarWeekNumberText: (weekNumber) => `${weekNumber}`,
  // Open Picker labels
  openDatePickerDialogue: (formattedDate) => formattedDate ? `Choose date, selected date is ${formattedDate}` : "Choose date",
  openTimePickerDialogue: (formattedTime) => formattedTime ? `Choose time, selected time is ${formattedTime}` : "Choose time",
  openRangePickerDialogue: (formattedRange) => formattedRange ? `Choose range, selected range is ${formattedRange}` : "Choose range",
  fieldClearLabel: "Clear",
  // Table labels
  timeTableLabel: "pick time",
  dateTableLabel: "pick date",
  // Field section placeholders
  fieldYearPlaceholder: (params) => "Y".repeat(params.digitAmount),
  fieldMonthPlaceholder: (params) => params.contentType === "letter" ? "MMMM" : "MM",
  fieldDayPlaceholder: () => "DD",
  fieldWeekDayPlaceholder: (params) => params.contentType === "letter" ? "EEEE" : "EE",
  fieldHoursPlaceholder: () => "hh",
  fieldMinutesPlaceholder: () => "mm",
  fieldSecondsPlaceholder: () => "ss",
  fieldMeridiemPlaceholder: () => "aa",
  // View names
  year: "Year",
  month: "Month",
  day: "Day",
  weekDay: "Week day",
  hours: "Hours",
  minutes: "Minutes",
  seconds: "Seconds",
  meridiem: "Meridiem",
  // Common
  empty: "Empty"
};
var DEFAULT_LOCALE = enUSPickers;
var enUS = getPickersLocalization(enUSPickers);

// node_modules/.pnpm/@mui+x-date-pickers@8.26.0_@emotion+react@11.14.0_@types+react@19.2.7_react@19.2.3__@em_45e4fa7585d24d6c7a3cddedaa636f9d/node_modules/@mui/x-date-pickers/esm/hooks/usePickerAdapter.js
var useLocalizationContext = () => {
  const localization = React30.useContext(PickerAdapterContext);
  if (localization === null) {
    throw new Error(["MUI X: Can not find the date and time pickers localization context.", "It looks like you forgot to wrap your component in LocalizationProvider.", "This can also happen if you are bundling multiple versions of the `@mui/x-date-pickers` package"].join("\n"));
  }
  if (localization.adapter === null) {
    throw new Error(["MUI X: Can not find the date and time pickers adapter from its localization context.", "It looks like you forgot to pass a `dateAdapter` to your LocalizationProvider."].join("\n"));
  }
  const localeText = React30.useMemo(() => _extends({}, DEFAULT_LOCALE, localization.localeText), [localization.localeText]);
  return React30.useMemo(() => _extends({}, localization, {
    localeText
  }), [localization, localeText]);
};
var usePickerAdapter = () => useLocalizationContext().adapter;

// node_modules/.pnpm/@mui+x-date-pickers@8.26.0_@emotion+react@11.14.0_@types+react@19.2.7_react@19.2.3__@em_45e4fa7585d24d6c7a3cddedaa636f9d/node_modules/@mui/x-date-pickers/esm/hooks/usePickerTranslations.js
var usePickerTranslations = () => useLocalizationContext().localeText;

// node_modules/.pnpm/@mui+x-date-pickers@8.26.0_@emotion+react@11.14.0_@types+react@19.2.7_react@19.2.3__@em_45e4fa7585d24d6c7a3cddedaa636f9d/node_modules/@mui/x-date-pickers/esm/hooks/useSplitFieldProps.js
var React31 = __toESM(require_react(), 1);

// node_modules/.pnpm/@mui+x-date-pickers@8.26.0_@emotion+react@11.14.0_@types+react@19.2.7_react@19.2.3__@em_45e4fa7585d24d6c7a3cddedaa636f9d/node_modules/@mui/x-date-pickers/esm/validation/extractValidationProps.js
var DATE_VALIDATION_PROP_NAMES = ["disablePast", "disableFuture", "minDate", "maxDate", "shouldDisableDate", "shouldDisableMonth", "shouldDisableYear"];
var TIME_VALIDATION_PROP_NAMES = ["disablePast", "disableFuture", "minTime", "maxTime", "shouldDisableTime", "minutesStep", "ampm", "disableIgnoringDatePartForTimeValidation"];
var DATE_TIME_VALIDATION_PROP_NAMES = ["minDateTime", "maxDateTime"];
var VALIDATION_PROP_NAMES = [...DATE_VALIDATION_PROP_NAMES, ...TIME_VALIDATION_PROP_NAMES, ...DATE_TIME_VALIDATION_PROP_NAMES];
var extractValidationProps = (props) => VALIDATION_PROP_NAMES.reduce((extractedProps, propName) => {
  if (props.hasOwnProperty(propName)) {
    extractedProps[propName] = props[propName];
  }
  return extractedProps;
}, {});

// node_modules/.pnpm/@mui+x-date-pickers@8.26.0_@emotion+react@11.14.0_@types+react@19.2.7_react@19.2.3__@em_45e4fa7585d24d6c7a3cddedaa636f9d/node_modules/@mui/x-date-pickers/esm/hooks/useSplitFieldProps.js
var SHARED_FIELD_INTERNAL_PROP_NAMES = ["value", "defaultValue", "referenceDate", "format", "formatDensity", "onChange", "timezone", "onError", "shouldRespectLeadingZeros", "selectedSections", "onSelectedSectionsChange", "unstableFieldRef", "unstableStartFieldRef", "unstableEndFieldRef", "enableAccessibleFieldDOMStructure", "disabled", "readOnly", "dateSeparator", "autoFocus", "focused"];
var useSplitFieldProps = (props, valueType) => {
  return React31.useMemo(() => {
    const forwardedProps = _extends({}, props);
    const internalProps = {};
    const extractProp = (propName) => {
      if (forwardedProps.hasOwnProperty(propName)) {
        internalProps[propName] = forwardedProps[propName];
        delete forwardedProps[propName];
      }
    };
    SHARED_FIELD_INTERNAL_PROP_NAMES.forEach(extractProp);
    if (valueType === "date") {
      DATE_VALIDATION_PROP_NAMES.forEach(extractProp);
    } else if (valueType === "time") {
      TIME_VALIDATION_PROP_NAMES.forEach(extractProp);
    } else if (valueType === "date-time") {
      DATE_VALIDATION_PROP_NAMES.forEach(extractProp);
      TIME_VALIDATION_PROP_NAMES.forEach(extractProp);
      DATE_TIME_VALIDATION_PROP_NAMES.forEach(extractProp);
    }
    return {
      forwardedProps,
      internalProps
    };
  }, [props, valueType]);
};

// node_modules/.pnpm/@mui+x-date-pickers@8.26.0_@emotion+react@11.14.0_@types+react@19.2.7_react@19.2.3__@em_45e4fa7585d24d6c7a3cddedaa636f9d/node_modules/@mui/x-date-pickers/esm/hooks/useParsedFormat.js
var React33 = __toESM(require_react(), 1);

// node_modules/.pnpm/@mui+x-date-pickers@8.26.0_@emotion+react@11.14.0_@types+react@19.2.7_react@19.2.3__@em_45e4fa7585d24d6c7a3cddedaa636f9d/node_modules/@mui/x-date-pickers/esm/internals/hooks/useField/buildSectionsFromFormat.js
var expandFormat = ({
  adapter,
  format
}) => {
  let formatExpansionOverflow = 10;
  let prevFormat = format;
  let nextFormat = adapter.expandFormat(format);
  while (nextFormat !== prevFormat) {
    prevFormat = nextFormat;
    nextFormat = adapter.expandFormat(prevFormat);
    formatExpansionOverflow -= 1;
    if (formatExpansionOverflow < 0) {
      throw new Error("MUI X: The format expansion seems to be in an infinite loop. Please open an issue with the format passed to the component.");
    }
  }
  return nextFormat;
};
var getEscapedPartsFromFormat = ({
  adapter,
  expandedFormat
}) => {
  const escapedParts = [];
  const {
    start: startChar,
    end: endChar
  } = adapter.escapedCharacters;
  const regExp = new RegExp(`(\\${startChar}[^\\${endChar}]*\\${endChar})+`, "g");
  let match2 = null;
  while (match2 = regExp.exec(expandedFormat)) {
    escapedParts.push({
      start: match2.index,
      end: regExp.lastIndex - 1
    });
  }
  return escapedParts;
};
var getSectionPlaceholder = (adapter, localeText, sectionConfig, sectionFormat) => {
  switch (sectionConfig.type) {
    case "year": {
      return localeText.fieldYearPlaceholder({
        digitAmount: adapter.formatByString(adapter.date(void 0, "default"), sectionFormat).length,
        format: sectionFormat
      });
    }
    case "month": {
      return localeText.fieldMonthPlaceholder({
        contentType: sectionConfig.contentType,
        format: sectionFormat
      });
    }
    case "day": {
      return localeText.fieldDayPlaceholder({
        format: sectionFormat
      });
    }
    case "weekDay": {
      return localeText.fieldWeekDayPlaceholder({
        contentType: sectionConfig.contentType,
        format: sectionFormat
      });
    }
    case "hours": {
      return localeText.fieldHoursPlaceholder({
        format: sectionFormat
      });
    }
    case "minutes": {
      return localeText.fieldMinutesPlaceholder({
        format: sectionFormat
      });
    }
    case "seconds": {
      return localeText.fieldSecondsPlaceholder({
        format: sectionFormat
      });
    }
    case "meridiem": {
      return localeText.fieldMeridiemPlaceholder({
        format: sectionFormat
      });
    }
    default: {
      return sectionFormat;
    }
  }
};
var createSection = ({
  adapter,
  date,
  shouldRespectLeadingZeros,
  localeText,
  localizedDigits,
  now,
  token,
  startSeparator
}) => {
  if (token === "") {
    throw new Error("MUI X: Should not call `commitToken` with an empty token");
  }
  const sectionConfig = getDateSectionConfigFromFormatToken(adapter, token);
  const hasLeadingZerosInFormat = doesSectionFormatHaveLeadingZeros(adapter, sectionConfig.contentType, sectionConfig.type, token);
  const hasLeadingZerosInInput = shouldRespectLeadingZeros ? hasLeadingZerosInFormat : sectionConfig.contentType === "digit";
  const isValidDate = adapter.isValid(date);
  let sectionValue = isValidDate ? adapter.formatByString(date, token) : "";
  let maxLength = null;
  if (hasLeadingZerosInInput) {
    if (hasLeadingZerosInFormat) {
      maxLength = sectionValue === "" ? adapter.formatByString(now, token).length : sectionValue.length;
    } else {
      if (sectionConfig.maxLength == null) {
        throw new Error(`MUI X: The token ${token} should have a 'maxLength' property on it's adapter`);
      }
      maxLength = sectionConfig.maxLength;
      if (isValidDate) {
        sectionValue = applyLocalizedDigits(cleanLeadingZeros(removeLocalizedDigits(sectionValue, localizedDigits), maxLength), localizedDigits);
      }
    }
  }
  return _extends({}, sectionConfig, {
    format: token,
    maxLength,
    value: sectionValue,
    placeholder: getSectionPlaceholder(adapter, localeText, sectionConfig, token),
    hasLeadingZerosInFormat,
    hasLeadingZerosInInput,
    startSeparator,
    endSeparator: "",
    modified: false
  });
};
var buildSections = (parameters) => {
  const {
    adapter,
    expandedFormat,
    escapedParts
  } = parameters;
  const now = adapter.date(void 0);
  const sections = [];
  let startSeparator = "";
  const validTokens = Object.keys(adapter.formatTokenMap).sort((a, b) => b.length - a.length);
  const regExpFirstWordInFormat = /^([a-zA-Z]+)/;
  const regExpWordOnlyComposedOfTokens = new RegExp(`^(${validTokens.join("|")})*$`);
  const regExpFirstTokenInWord = new RegExp(`^(${validTokens.join("|")})`);
  const getEscapedPartOfCurrentChar = (i2) => escapedParts.find((escapeIndex) => escapeIndex.start <= i2 && escapeIndex.end >= i2);
  let i = 0;
  while (i < expandedFormat.length) {
    const escapedPartOfCurrentChar = getEscapedPartOfCurrentChar(i);
    const isEscapedChar = escapedPartOfCurrentChar != null;
    const firstWordInFormat = regExpFirstWordInFormat.exec(expandedFormat.slice(i))?.[1];
    if (!isEscapedChar && firstWordInFormat != null && regExpWordOnlyComposedOfTokens.test(firstWordInFormat)) {
      let word = firstWordInFormat;
      while (word.length > 0) {
        const firstWord = regExpFirstTokenInWord.exec(word)[1];
        word = word.slice(firstWord.length);
        sections.push(createSection(_extends({}, parameters, {
          now,
          token: firstWord,
          startSeparator
        })));
        startSeparator = "";
      }
      i += firstWordInFormat.length;
    } else {
      const char = expandedFormat[i];
      const isEscapeBoundary = isEscapedChar && escapedPartOfCurrentChar?.start === i || escapedPartOfCurrentChar?.end === i;
      if (!isEscapeBoundary) {
        if (sections.length === 0) {
          startSeparator += char;
        } else {
          sections[sections.length - 1].endSeparator += char;
          sections[sections.length - 1].isEndFormatSeparator = true;
        }
      }
      i += 1;
    }
  }
  if (sections.length === 0 && startSeparator.length > 0) {
    sections.push({
      type: "empty",
      contentType: "letter",
      maxLength: null,
      format: "",
      value: "",
      placeholder: "",
      hasLeadingZerosInFormat: false,
      hasLeadingZerosInInput: false,
      startSeparator,
      endSeparator: "",
      modified: false
    });
  }
  return sections;
};
var postProcessSections = ({
  isRtl,
  formatDensity,
  sections
}) => {
  return sections.map((section) => {
    const cleanSeparator = (separator) => {
      let cleanedSeparator = separator;
      if (isRtl && cleanedSeparator !== null && cleanedSeparator.includes(" ")) {
        cleanedSeparator = `⁩${cleanedSeparator}⁦`;
      }
      if (formatDensity === "spacious" && ["/", ".", "-"].includes(cleanedSeparator)) {
        cleanedSeparator = ` ${cleanedSeparator} `;
      }
      return cleanedSeparator;
    };
    section.startSeparator = cleanSeparator(section.startSeparator);
    section.endSeparator = cleanSeparator(section.endSeparator);
    return section;
  });
};
var buildSectionsFromFormat = (parameters) => {
  let expandedFormat = expandFormat(parameters);
  if (parameters.isRtl && parameters.enableAccessibleFieldDOMStructure) {
    expandedFormat = expandedFormat.split(" ").reverse().join(" ");
  }
  const escapedParts = getEscapedPartsFromFormat(_extends({}, parameters, {
    expandedFormat
  }));
  const sections = buildSections(_extends({}, parameters, {
    expandedFormat,
    escapedParts
  }));
  return postProcessSections(_extends({}, parameters, {
    sections
  }));
};

// node_modules/.pnpm/@mui+x-date-pickers@8.26.0_@emotion+react@11.14.0_@types+react@19.2.7_react@19.2.3__@em_45e4fa7585d24d6c7a3cddedaa636f9d/node_modules/@mui/x-date-pickers/esm/internals/hooks/useNullablePickerContext.js
var React32 = __toESM(require_react(), 1);
var useNullablePickerContext = () => React32.useContext(PickerContext);

// node_modules/.pnpm/@mui+x-date-pickers@8.26.0_@emotion+react@11.14.0_@types+react@19.2.7_react@19.2.3__@em_45e4fa7585d24d6c7a3cddedaa636f9d/node_modules/@mui/x-date-pickers/esm/hooks/usePickerActionsContext.js
var React34 = __toESM(require_react(), 1);
var usePickerActionsContext = () => {
  const value = React34.useContext(PickerActionsContext);
  if (value == null) {
    throw new Error(["MUI X: The `usePickerActionsContext` can only be called in fields that are used as a slot of a Picker component"].join("\n"));
  }
  return value;
};

// node_modules/.pnpm/@mui+x-date-pickers@8.26.0_@emotion+react@11.14.0_@types+react@19.2.7_react@19.2.3__@em_45e4fa7585d24d6c7a3cddedaa636f9d/node_modules/@mui/x-date-pickers/esm/DatePicker/datePickerToolbarClasses.js
function getDatePickerToolbarUtilityClass(slot) {
  return generateUtilityClass("MuiDatePickerToolbar", slot);
}
var datePickerToolbarClasses = generateUtilityClasses("MuiDatePickerToolbar", ["root", "title"]);

// node_modules/.pnpm/@mui+x-date-pickers@8.26.0_@emotion+react@11.14.0_@types+react@19.2.7_react@19.2.3__@em_45e4fa7585d24d6c7a3cddedaa636f9d/node_modules/@mui/x-date-pickers/esm/DatePicker/DatePickerToolbar.js
var import_jsx_runtime27 = __toESM(require_jsx_runtime(), 1);
var _excluded4 = ["toolbarFormat", "toolbarPlaceholder", "className", "classes"];
var useUtilityClasses2 = (classes) => {
  const slots = {
    root: ["root"],
    title: ["title"]
  };
  return composeClasses(slots, getDatePickerToolbarUtilityClass, classes);
};
var DatePickerToolbarRoot = styled_default(PickersToolbar, {
  name: "MuiDatePickerToolbar",
  slot: "Root"
})({});
var DatePickerToolbarTitle = styled_default(Typography_default, {
  name: "MuiDatePickerToolbar",
  slot: "Title"
})({
  variants: [{
    props: {
      pickerOrientation: "landscape"
    },
    style: {
      margin: "auto 16px auto auto"
    }
  }]
});
var DatePickerToolbar = React35.forwardRef(function DatePickerToolbar2(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiDatePickerToolbar"
  });
  const {
    toolbarFormat,
    toolbarPlaceholder = "––",
    className,
    classes: classesProp
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded4);
  const adapter = usePickerAdapter();
  const {
    value,
    views,
    orientation
  } = usePickerContext();
  const translations = usePickerTranslations();
  const ownerState = useToolbarOwnerState();
  const classes = useUtilityClasses2(classesProp);
  const dateText = React35.useMemo(() => {
    if (!adapter.isValid(value)) {
      return toolbarPlaceholder;
    }
    const formatFromViews = resolveDateFormat(adapter, {
      format: toolbarFormat,
      views
    }, true);
    return adapter.formatByString(value, formatFromViews);
  }, [value, toolbarFormat, toolbarPlaceholder, adapter, views]);
  return (0, import_jsx_runtime27.jsx)(DatePickerToolbarRoot, _extends({
    ref,
    toolbarTitle: translations.datePickerToolbarTitle,
    className: clsx_default(classes.root, className)
  }, other, {
    children: (0, import_jsx_runtime27.jsx)(DatePickerToolbarTitle, {
      variant: "h4",
      align: orientation === "landscape" ? "left" : "center",
      ownerState,
      className: classes.title,
      children: dateText
    })
  }));
});
if (true) DatePickerToolbar.displayName = "DatePickerToolbar";
true ? DatePickerToolbar.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * Override or extend the styles applied to the component.
   */
  classes: import_prop_types3.default.object,
  className: import_prop_types3.default.string,
  /**
   * If `true`, show the toolbar even in desktop mode.
   * @default `true` for Desktop, `false` for Mobile.
   */
  hidden: import_prop_types3.default.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types3.default.oneOfType([import_prop_types3.default.arrayOf(import_prop_types3.default.oneOfType([import_prop_types3.default.func, import_prop_types3.default.object, import_prop_types3.default.bool])), import_prop_types3.default.func, import_prop_types3.default.object]),
  titleId: import_prop_types3.default.string,
  /**
   * Toolbar date format.
   */
  toolbarFormat: import_prop_types3.default.string,
  /**
   * Toolbar value placeholder—it is displayed when the value is empty.
   * @default "––"
   */
  toolbarPlaceholder: import_prop_types3.default.node
} : void 0;

// node_modules/.pnpm/@mui+x-date-pickers@8.26.0_@emotion+react@11.14.0_@types+react@19.2.7_react@19.2.3__@em_45e4fa7585d24d6c7a3cddedaa636f9d/node_modules/@mui/x-date-pickers/esm/managers/useDateManager.js
var React38 = __toESM(require_react(), 1);

// node_modules/.pnpm/@mui+x-date-pickers@8.26.0_@emotion+react@11.14.0_@types+react@19.2.7_react@19.2.3__@em_45e4fa7585d24d6c7a3cddedaa636f9d/node_modules/@mui/x-date-pickers/esm/validation/validateDate.js
var validateDate = ({
  props,
  value,
  timezone,
  adapter
}) => {
  if (value === null) {
    return null;
  }
  const {
    shouldDisableDate,
    shouldDisableMonth,
    shouldDisableYear,
    disablePast,
    disableFuture,
    minDate,
    maxDate
  } = props;
  const now = adapter.date(void 0, timezone);
  switch (true) {
    case !adapter.isValid(value):
      return "invalidDate";
    case Boolean(shouldDisableDate && shouldDisableDate(value)):
      return "shouldDisableDate";
    case Boolean(shouldDisableMonth && shouldDisableMonth(value)):
      return "shouldDisableMonth";
    case Boolean(shouldDisableYear && shouldDisableYear(value)):
      return "shouldDisableYear";
    case Boolean(disableFuture && adapter.isAfterDay(value, now)):
      return "disableFuture";
    case Boolean(disablePast && adapter.isBeforeDay(value, now)):
      return "disablePast";
    case Boolean(minDate && adapter.isBeforeDay(value, minDate)):
      return "minDate";
    case Boolean(maxDate && adapter.isAfterDay(value, maxDate)):
      return "maxDate";
    default:
      return null;
  }
};
validateDate.valueManager = singleItemValueManager;

// node_modules/.pnpm/@mui+x-date-pickers@8.26.0_@emotion+react@11.14.0_@types+react@19.2.7_react@19.2.3__@em_45e4fa7585d24d6c7a3cddedaa636f9d/node_modules/@mui/x-date-pickers/esm/validation/validateTime.js
var validateTime = ({
  adapter,
  value,
  timezone,
  props
}) => {
  if (value === null) {
    return null;
  }
  const {
    minTime,
    maxTime,
    minutesStep,
    shouldDisableTime,
    disableIgnoringDatePartForTimeValidation = false,
    disablePast,
    disableFuture
  } = props;
  const now = adapter.date(void 0, timezone);
  const isAfter = createIsAfterIgnoreDatePart(disableIgnoringDatePartForTimeValidation, adapter);
  switch (true) {
    case !adapter.isValid(value):
      return "invalidDate";
    case Boolean(minTime && isAfter(minTime, value)):
      return "minTime";
    case Boolean(maxTime && isAfter(value, maxTime)):
      return "maxTime";
    case Boolean(disableFuture && adapter.isAfter(value, now)):
      return "disableFuture";
    case Boolean(disablePast && adapter.isBefore(value, now)):
      return "disablePast";
    case Boolean(shouldDisableTime && shouldDisableTime(value, "hours")):
      return "shouldDisableTime-hours";
    case Boolean(shouldDisableTime && shouldDisableTime(value, "minutes")):
      return "shouldDisableTime-minutes";
    case Boolean(shouldDisableTime && shouldDisableTime(value, "seconds")):
      return "shouldDisableTime-seconds";
    case Boolean(minutesStep && adapter.getMinutes(value) % minutesStep !== 0):
      return "minutesStep";
    default:
      return null;
  }
};
validateTime.valueManager = singleItemValueManager;

// node_modules/.pnpm/@mui+x-date-pickers@8.26.0_@emotion+react@11.14.0_@types+react@19.2.7_react@19.2.3__@em_45e4fa7585d24d6c7a3cddedaa636f9d/node_modules/@mui/x-date-pickers/esm/validation/validateDateTime.js
var validateDateTime = ({
  adapter,
  value,
  timezone,
  props
}) => {
  const dateValidationResult = validateDate({
    adapter,
    value,
    timezone,
    props
  });
  if (dateValidationResult !== null) {
    return dateValidationResult;
  }
  return validateTime({
    adapter,
    value,
    timezone,
    props
  });
};
validateDateTime.valueManager = singleItemValueManager;

// node_modules/.pnpm/@mui+x-date-pickers@8.26.0_@emotion+react@11.14.0_@types+react@19.2.7_react@19.2.3__@em_45e4fa7585d24d6c7a3cddedaa636f9d/node_modules/@mui/x-date-pickers/esm/validation/useValidation.js
var React36 = __toESM(require_react(), 1);
function useValidation(options) {
  const {
    props,
    validator,
    value,
    timezone,
    onError
  } = options;
  const adapter = usePickerAdapter();
  const previousValidationErrorRef = React36.useRef(validator.valueManager.defaultErrorState);
  const validationError = validator({
    adapter,
    value,
    timezone,
    props
  });
  const hasValidationError = validator.valueManager.hasError(validationError);
  React36.useEffect(() => {
    if (onError && !validator.valueManager.isSameError(validationError, previousValidationErrorRef.current)) {
      onError(validationError, value);
    }
    previousValidationErrorRef.current = validationError;
  }, [validator, onError, validationError, value]);
  const getValidationErrorForNewValue = useEventCallback_default((newValue) => {
    return validator({
      adapter,
      value: newValue,
      timezone,
      props
    });
  });
  return {
    validationError,
    hasValidationError,
    getValidationErrorForNewValue
  };
}

// node_modules/.pnpm/@mui+x-date-pickers@8.26.0_@emotion+react@11.14.0_@types+react@19.2.7_react@19.2.3__@em_45e4fa7585d24d6c7a3cddedaa636f9d/node_modules/@mui/x-date-pickers/esm/internals/hooks/useUtils.js
var React37 = __toESM(require_react(), 1);
var useDefaultDates = () => useLocalizationContext().defaultDates;
var useNow = (timezone) => {
  const adapter = usePickerAdapter();
  const now = React37.useRef(void 0);
  if (now.current === void 0) {
    now.current = adapter.date(void 0, timezone);
  }
  return now.current;
};

// node_modules/.pnpm/@mui+x-date-pickers@8.26.0_@emotion+react@11.14.0_@types+react@19.2.7_react@19.2.3__@em_45e4fa7585d24d6c7a3cddedaa636f9d/node_modules/@mui/x-date-pickers/esm/managers/useDateManager.js
function useDateManager(parameters = {}) {
  const {
    enableAccessibleFieldDOMStructure = true
  } = parameters;
  return React38.useMemo(() => ({
    valueType: "date",
    validator: validateDate,
    internal_valueManager: singleItemValueManager,
    internal_fieldValueManager: singleItemFieldValueManager,
    internal_enableAccessibleFieldDOMStructure: enableAccessibleFieldDOMStructure,
    internal_useApplyDefaultValuesToFieldInternalProps: useApplyDefaultValuesToDateFieldInternalProps,
    internal_useOpenPickerButtonAriaLabel: useOpenPickerButtonAriaLabel
  }), [enableAccessibleFieldDOMStructure]);
}
function useOpenPickerButtonAriaLabel(value) {
  const adapter = usePickerAdapter();
  const translations = usePickerTranslations();
  return React38.useMemo(() => {
    const formattedValue = adapter.isValid(value) ? adapter.format(value, "fullDate") : null;
    return translations.openDatePickerDialogue(formattedValue);
  }, [value, translations, adapter]);
}
function useApplyDefaultValuesToDateFieldInternalProps(internalProps) {
  const adapter = usePickerAdapter();
  const validationProps = useApplyDefaultValuesToDateValidationProps(internalProps);
  return React38.useMemo(() => _extends({}, internalProps, validationProps, {
    format: internalProps.format ?? adapter.formats.keyboardDate
  }), [internalProps, validationProps, adapter]);
}
function useApplyDefaultValuesToDateValidationProps(props) {
  const adapter = usePickerAdapter();
  const defaultDates = useDefaultDates();
  return React38.useMemo(() => ({
    disablePast: props.disablePast ?? false,
    disableFuture: props.disableFuture ?? false,
    minDate: applyDefaultDate(adapter, props.minDate, defaultDates.minDate),
    maxDate: applyDefaultDate(adapter, props.maxDate, defaultDates.maxDate)
  }), [props.minDate, props.maxDate, props.disableFuture, props.disablePast, adapter, defaultDates]);
}

// node_modules/.pnpm/@mui+x-date-pickers@8.26.0_@emotion+react@11.14.0_@types+react@19.2.7_react@19.2.3__@em_45e4fa7585d24d6c7a3cddedaa636f9d/node_modules/@mui/x-date-pickers/esm/DatePicker/shared.js
function useDatePickerDefaultizedProps(props, name) {
  const themeProps = useThemeProps({
    props,
    name
  });
  const validationProps = useApplyDefaultValuesToDateValidationProps(themeProps);
  const localeText = React39.useMemo(() => {
    if (themeProps.localeText?.toolbarTitle == null) {
      return themeProps.localeText;
    }
    return _extends({}, themeProps.localeText, {
      datePickerToolbarTitle: themeProps.localeText.toolbarTitle
    });
  }, [themeProps.localeText]);
  return _extends({}, themeProps, validationProps, {
    localeText
  }, applyDefaultViewProps({
    views: themeProps.views,
    openTo: themeProps.openTo,
    defaultViews: ["year", "day"],
    defaultOpenTo: "day"
  }), {
    slots: _extends({
      toolbar: DatePickerToolbar
    }, themeProps.slots)
  });
}

// node_modules/.pnpm/@mui+x-date-pickers@8.26.0_@emotion+react@11.14.0_@types+react@19.2.7_react@19.2.3__@em_45e4fa7585d24d6c7a3cddedaa636f9d/node_modules/@mui/x-date-pickers/esm/internals/components/PickerPopper/PickerPopper.js
var React40 = __toESM(require_react(), 1);

// node_modules/.pnpm/@mui+x-date-pickers@8.26.0_@emotion+react@11.14.0_@types+react@19.2.7_react@19.2.3__@em_45e4fa7585d24d6c7a3cddedaa636f9d/node_modules/@mui/x-date-pickers/esm/internals/components/PickerPopper/pickerPopperClasses.js
function getPickerPopperUtilityClass(slot) {
  return generateUtilityClass("MuiPickerPopper", slot);
}
var pickerPopperClasses = generateUtilityClasses("MuiPickerPopper", ["root", "paper"]);

// node_modules/.pnpm/@mui+x-date-pickers@8.26.0_@emotion+react@11.14.0_@types+react@19.2.7_react@19.2.3__@em_45e4fa7585d24d6c7a3cddedaa636f9d/node_modules/@mui/x-date-pickers/esm/internals/utils/utils.js
function arrayIncludes(array, itemOrItems) {
  if (Array.isArray(itemOrItems)) {
    return itemOrItems.every((item) => array.indexOf(item) !== -1);
  }
  return array.indexOf(itemOrItems) !== -1;
}
var executeInTheNextEventLoopTick = (fn) => {
  setTimeout(fn, 0);
};
var getActiveElementInternal = (root = document) => {
  const activeEl = root.activeElement;
  if (!activeEl) {
    return null;
  }
  if (activeEl.shadowRoot) {
    return getActiveElementInternal(activeEl.shadowRoot);
  }
  return activeEl;
};
var getActiveElement = (node) => {
  return getActiveElementInternal(ownerDocument(node));
};
var getFocusedListItemIndex = (listElement) => {
  const children = Array.from(listElement.children);
  return children.indexOf(getActiveElement(listElement));
};
var DEFAULT_DESKTOP_MODE_MEDIA_QUERY = "@media (pointer: fine)";
function mergeSx(...sxProps) {
  return sxProps.reduce((acc, sxProp) => {
    if (Array.isArray(sxProp)) {
      acc.push(...sxProp);
    } else if (sxProp != null) {
      acc.push(sxProp);
    }
    return acc;
  }, []);
}

// node_modules/.pnpm/@mui+x-date-pickers@8.26.0_@emotion+react@11.14.0_@types+react@19.2.7_react@19.2.3__@em_45e4fa7585d24d6c7a3cddedaa636f9d/node_modules/@mui/x-date-pickers/esm/internals/components/PickerPopper/PickerPopper.js
var import_jsx_runtime28 = __toESM(require_jsx_runtime(), 1);
var _excluded5 = ["PaperComponent", "ownerState", "children", "paperSlotProps", "paperClasses", "onPaperClick", "onPaperTouchStart"];
var useUtilityClasses3 = (classes) => {
  const slots = {
    root: ["root"],
    paper: ["paper"]
  };
  return composeClasses(slots, getPickerPopperUtilityClass, classes);
};
var PickerPopperRoot = styled_default(Popper_default, {
  name: "MuiPickerPopper",
  slot: "Root"
})(({
  theme
}) => ({
  zIndex: theme.zIndex.modal
}));
var PickerPopperPaper = styled_default(Paper_default, {
  name: "MuiPickerPopper",
  slot: "Paper"
})({
  outline: 0,
  transformOrigin: "top center",
  variants: [{
    props: ({
      popperPlacement
    }) => (/* @__PURE__ */ new Set(["top", "top-start", "top-end"])).has(popperPlacement),
    style: {
      transformOrigin: "bottom center"
    }
  }]
});
function clickedRootScrollbar(event, doc) {
  return doc.documentElement.clientWidth < event.clientX || doc.documentElement.clientHeight < event.clientY;
}
function useClickAwayListener(active, onClickAway) {
  const movedRef = React40.useRef(false);
  const syntheticEventRef = React40.useRef(false);
  const nodeRef = React40.useRef(null);
  const activatedRef = React40.useRef(false);
  React40.useEffect(() => {
    if (!active) {
      return void 0;
    }
    function armClickAwayListener() {
      activatedRef.current = true;
    }
    document.addEventListener("mousedown", armClickAwayListener, true);
    document.addEventListener("touchstart", armClickAwayListener, true);
    return () => {
      document.removeEventListener("mousedown", armClickAwayListener, true);
      document.removeEventListener("touchstart", armClickAwayListener, true);
      activatedRef.current = false;
    };
  }, [active]);
  const handleClickAway = useEventCallback_default((event) => {
    if (!activatedRef.current) {
      return;
    }
    const insideReactTree = syntheticEventRef.current;
    syntheticEventRef.current = false;
    const doc = ownerDocument(nodeRef.current);
    if (!nodeRef.current || // is a TouchEvent?
    "clientX" in event && clickedRootScrollbar(event, doc)) {
      return;
    }
    if (movedRef.current) {
      movedRef.current = false;
      return;
    }
    let insideDOM;
    if (event.composedPath) {
      insideDOM = event.composedPath().indexOf(nodeRef.current) > -1;
    } else {
      insideDOM = !doc.documentElement.contains(event.target) || nodeRef.current.contains(event.target);
    }
    if (!insideDOM && !insideReactTree) {
      onClickAway(event);
    }
  });
  const handleSynthetic = (event) => {
    if (!event.defaultMuiPrevented) {
      syntheticEventRef.current = true;
    }
  };
  React40.useEffect(() => {
    if (active) {
      const doc = ownerDocument(nodeRef.current);
      const handleTouchMove = () => {
        movedRef.current = true;
      };
      doc.addEventListener("touchstart", handleClickAway);
      doc.addEventListener("touchmove", handleTouchMove);
      return () => {
        doc.removeEventListener("touchstart", handleClickAway);
        doc.removeEventListener("touchmove", handleTouchMove);
      };
    }
    return void 0;
  }, [active, handleClickAway]);
  React40.useEffect(() => {
    if (active) {
      const doc = ownerDocument(nodeRef.current);
      doc.addEventListener("click", handleClickAway);
      return () => {
        doc.removeEventListener("click", handleClickAway);
        syntheticEventRef.current = false;
      };
    }
    return void 0;
  }, [active, handleClickAway]);
  return [nodeRef, handleSynthetic, handleSynthetic];
}
var PickerPopperPaperWrapper = React40.forwardRef((props, ref) => {
  const {
    PaperComponent,
    ownerState,
    children,
    paperSlotProps,
    paperClasses,
    onPaperClick,
    onPaperTouchStart
    // picks up the style props provided by `Transition`
    // https://mui.com/material-ui/transitions/#child-requirement
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded5);
  const paperProps = useSlotProps_default({
    elementType: PaperComponent,
    externalSlotProps: paperSlotProps,
    additionalProps: {
      tabIndex: -1,
      elevation: 8,
      ref
    },
    className: paperClasses,
    ownerState
  });
  return (0, import_jsx_runtime28.jsx)(PaperComponent, _extends({}, other, paperProps, {
    onClick: (event) => {
      onPaperClick(event);
      paperProps.onClick?.(event);
    },
    onTouchStart: (event) => {
      onPaperTouchStart(event);
      paperProps.onTouchStart?.(event);
    },
    ownerState,
    children
  }));
});
if (true) PickerPopperPaperWrapper.displayName = "PickerPopperPaperWrapper";
function PickerPopper(inProps) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiPickerPopper"
  });
  const {
    children,
    placement = "bottom-start",
    slots,
    slotProps,
    classes: classesProp
  } = props;
  const {
    open,
    popupRef,
    reduceAnimations
  } = usePickerContext();
  const {
    ownerState: pickerOwnerState,
    rootRefObject
  } = usePickerPrivateContext();
  const {
    dismissViews,
    getCurrentViewMode,
    onPopperExited,
    triggerElement,
    viewContainerRole
  } = usePickerPrivateContext();
  React40.useEffect(() => {
    function handleKeyDown2(nativeEvent) {
      if (open && nativeEvent.key === "Escape") {
        dismissViews();
      }
    }
    document.addEventListener("keydown", handleKeyDown2);
    return () => {
      document.removeEventListener("keydown", handleKeyDown2);
    };
  }, [dismissViews, open]);
  const lastFocusedElementRef = React40.useRef(null);
  React40.useEffect(() => {
    if (viewContainerRole === "tooltip" || getCurrentViewMode() === "field") {
      return;
    }
    if (open) {
      lastFocusedElementRef.current = getActiveElement(rootRefObject.current);
    } else if (lastFocusedElementRef.current && lastFocusedElementRef.current instanceof HTMLElement) {
      setTimeout(() => {
        if (lastFocusedElementRef.current instanceof HTMLElement) {
          lastFocusedElementRef.current.focus();
        }
      });
    }
  }, [open, viewContainerRole, getCurrentViewMode, rootRefObject]);
  const classes = useUtilityClasses3(classesProp);
  const handleClickAway = useEventCallback_default(() => {
    if (viewContainerRole === "tooltip") {
      executeInTheNextEventLoopTick(() => {
        if (rootRefObject.current?.contains(getActiveElement(rootRefObject.current)) || popupRef.current?.contains(getActiveElement(popupRef.current))) {
          return;
        }
        dismissViews();
      });
    } else {
      dismissViews();
    }
  });
  const [clickAwayRef, onPaperClick, onPaperTouchStart] = useClickAwayListener(open, handleClickAway);
  const paperRef = React40.useRef(null);
  const handleRef = useForkRef(paperRef, popupRef);
  const handlePaperRef = useForkRef(handleRef, clickAwayRef);
  const handleKeyDown = (event) => {
    if (event.key === "Escape") {
      event.stopPropagation();
      dismissViews();
    }
  };
  const Transition = slots?.desktopTransition ?? reduceAnimations ? Fade_default : Grow_default;
  const FocusTrap = slots?.desktopTrapFocus ?? FocusTrap_default;
  const Paper = slots?.desktopPaper ?? PickerPopperPaper;
  const Popper = slots?.popper ?? PickerPopperRoot;
  const popperProps = useSlotProps_default({
    elementType: Popper,
    externalSlotProps: slotProps?.popper,
    additionalProps: {
      transition: true,
      role: viewContainerRole == null ? void 0 : viewContainerRole,
      open,
      placement,
      anchorEl: triggerElement,
      onKeyDown: handleKeyDown
    },
    className: classes.root,
    ownerState: pickerOwnerState
  });
  const ownerState = React40.useMemo(() => _extends({}, pickerOwnerState, {
    popperPlacement: popperProps.placement
  }), [pickerOwnerState, popperProps.placement]);
  return (0, import_jsx_runtime28.jsx)(Popper, _extends({}, popperProps, {
    children: ({
      TransitionProps
    }) => (0, import_jsx_runtime28.jsx)(FocusTrap, _extends({
      open,
      disableAutoFocus: true,
      disableRestoreFocus: true,
      disableEnforceFocus: viewContainerRole === "tooltip",
      isEnabled: () => true
    }, slotProps?.desktopTrapFocus, {
      children: (0, import_jsx_runtime28.jsx)(Transition, _extends({}, TransitionProps, slotProps?.desktopTransition, {
        onExited: (event) => {
          onPopperExited?.();
          slotProps?.desktopTransition?.onExited?.(event);
          TransitionProps?.onExited?.();
        },
        children: (0, import_jsx_runtime28.jsx)(PickerPopperPaperWrapper, {
          PaperComponent: Paper,
          ownerState,
          ref: handlePaperRef,
          onPaperClick,
          onPaperTouchStart,
          paperClasses: classes.paper,
          paperSlotProps: slotProps?.desktopPaper,
          children
        })
      }))
    }))
  }));
}

// node_modules/.pnpm/@mui+x-date-pickers@8.26.0_@emotion+react@11.14.0_@types+react@19.2.7_react@19.2.3__@em_45e4fa7585d24d6c7a3cddedaa636f9d/node_modules/@mui/x-date-pickers/esm/internals/hooks/usePicker/usePicker.js
var React45 = __toESM(require_react(), 1);

// node_modules/.pnpm/@mui+x-date-pickers@8.26.0_@emotion+react@11.14.0_@types+react@19.2.7_react@19.2.3__@em_45e4fa7585d24d6c7a3cddedaa636f9d/node_modules/@mui/x-date-pickers/esm/internals/hooks/useReduceAnimations.js
var PREFERS_REDUCED_MOTION = "@media (prefers-reduced-motion: reduce)";
var mobileVersionMatches = typeof navigator !== "undefined" && navigator.userAgent.match(/android\s(\d+)|OS\s(\d+)/i);
var androidVersion = mobileVersionMatches && mobileVersionMatches[1] ? parseInt(mobileVersionMatches[1], 10) : null;
var iOSVersion = mobileVersionMatches && mobileVersionMatches[2] ? parseInt(mobileVersionMatches[2], 10) : null;
var slowAnimationDevices = androidVersion && androidVersion < 10 || iOSVersion && iOSVersion < 13 || false;
function useReduceAnimations(customReduceAnimations) {
  const prefersReduced = useMediaQuery_default(PREFERS_REDUCED_MOTION, {
    defaultMatches: false
  });
  if (customReduceAnimations != null) {
    return customReduceAnimations;
  }
  return prefersReduced || slowAnimationDevices;
}

// node_modules/.pnpm/@mui+x-date-pickers@8.26.0_@emotion+react@11.14.0_@types+react@19.2.7_react@19.2.3__@em_45e4fa7585d24d6c7a3cddedaa636f9d/node_modules/@mui/x-date-pickers/esm/internals/hooks/useViews.js
var React41 = __toESM(require_react(), 1);

// node_modules/.pnpm/@mui+x-date-pickers@8.26.0_@emotion+react@11.14.0_@types+react@19.2.7_react@19.2.3__@em_45e4fa7585d24d6c7a3cddedaa636f9d/node_modules/@mui/x-date-pickers/esm/internals/utils/createStepNavigation.js
var DEFAULT_STEP_NAVIGATION = {
  hasNextStep: false,
  hasSeveralSteps: false,
  goToNextStep: () => {
  },
  areViewsInSameStep: () => true
};
function createStepNavigation(parameters) {
  const {
    steps,
    isViewMatchingStep,
    onStepChange
  } = parameters;
  return (parametersBis) => {
    if (steps == null) {
      return DEFAULT_STEP_NAVIGATION;
    }
    const currentStepIndex = steps.findIndex((step) => isViewMatchingStep(parametersBis.view, step));
    const nextStep = currentStepIndex === -1 || currentStepIndex === steps.length - 1 ? null : steps[currentStepIndex + 1];
    return {
      hasNextStep: nextStep != null,
      hasSeveralSteps: steps.length > 1,
      goToNextStep: () => {
        if (nextStep == null) {
          return;
        }
        onStepChange(_extends({}, parametersBis, {
          step: nextStep
        }));
      },
      areViewsInSameStep: (viewA, viewB) => {
        const stepA = steps.find((step) => isViewMatchingStep(viewA, step));
        const stepB = steps.find((step) => isViewMatchingStep(viewB, step));
        return stepA === stepB;
      }
    };
  };
}

// node_modules/.pnpm/@mui+x-date-pickers@8.26.0_@emotion+react@11.14.0_@types+react@19.2.7_react@19.2.3__@em_45e4fa7585d24d6c7a3cddedaa636f9d/node_modules/@mui/x-date-pickers/esm/internals/hooks/useViews.js
var warnedOnceNotValidView = false;
function useViews({
  onChange,
  onViewChange,
  openTo,
  view: inView,
  views,
  autoFocus,
  focusedView: inFocusedView,
  onFocusedViewChange,
  getStepNavigation
}) {
  if (true) {
    if (!warnedOnceNotValidView) {
      if (inView != null && !views.includes(inView)) {
        console.warn(`MUI X: \`view="${inView}"\` is not a valid prop.`, `It must be an element of \`views=["${views.join('", "')}"]\`.`);
        warnedOnceNotValidView = true;
      }
      if (inView == null && openTo != null && !views.includes(openTo)) {
        console.warn(`MUI X: \`openTo="${openTo}"\` is not a valid prop.`, `It must be an element of \`views=["${views.join('", "')}"]\`.`);
        warnedOnceNotValidView = true;
      }
    }
  }
  const previousOpenTo = React41.useRef(openTo);
  const previousViews = React41.useRef(views);
  const defaultView = React41.useRef(views.includes(openTo) ? openTo : views[0]);
  const [view, setView] = useControlled({
    name: "useViews",
    state: "view",
    controlled: inView,
    default: defaultView.current
  });
  const defaultFocusedView = React41.useRef(autoFocus ? view : null);
  const [focusedView, setFocusedView] = useControlled({
    name: "useViews",
    state: "focusedView",
    controlled: inFocusedView,
    default: defaultFocusedView.current
  });
  const stepNavigation = getStepNavigation ? getStepNavigation({
    setView,
    view,
    defaultView: defaultView.current,
    views
  }) : DEFAULT_STEP_NAVIGATION;
  React41.useEffect(() => {
    if (previousOpenTo.current && previousOpenTo.current !== openTo || previousViews.current && previousViews.current.some((previousView2) => !views.includes(previousView2))) {
      setView(views.includes(openTo) ? openTo : views[0]);
      previousViews.current = views;
      previousOpenTo.current = openTo;
    }
  }, [openTo, setView, view, views]);
  const viewIndex = views.indexOf(view);
  const previousView = views[viewIndex - 1] ?? null;
  const nextView = views[viewIndex + 1] ?? null;
  const handleFocusedViewChange = useEventCallback_default((viewToFocus, hasFocus) => {
    if (hasFocus) {
      setFocusedView(viewToFocus);
    } else {
      setFocusedView(
        (prevFocusedView) => viewToFocus === prevFocusedView ? null : prevFocusedView
        // If false the blur is due to view switching
      );
    }
    onFocusedViewChange?.(viewToFocus, hasFocus);
  });
  const handleChangeView = useEventCallback_default((newView) => {
    handleFocusedViewChange(newView, true);
    if (newView === view) {
      return;
    }
    setView(newView);
    if (onViewChange) {
      onViewChange(newView);
    }
  });
  const goToNextView = useEventCallback_default(() => {
    if (nextView) {
      handleChangeView(nextView);
    }
  });
  const setValueAndGoToNextView = useEventCallback_default((value, currentViewSelectionState, selectedView) => {
    const isSelectionFinishedOnCurrentView = currentViewSelectionState === "finish";
    const hasMoreViews = selectedView ? (
      // handles case like `DateTimePicker`, where a view might return a `finish` selection state
      // but when it's not the final view given all `views` -> overall selection state should be `partial`.
      views.indexOf(selectedView) < views.length - 1
    ) : Boolean(nextView);
    const globalSelectionState = isSelectionFinishedOnCurrentView && hasMoreViews ? "partial" : currentViewSelectionState;
    onChange(value, globalSelectionState, selectedView);
    let currentView = null;
    if (selectedView != null && selectedView !== view) {
      currentView = selectedView;
    } else if (isSelectionFinishedOnCurrentView) {
      currentView = view;
    }
    if (currentView == null) {
      return;
    }
    const viewToNavigateTo = views[views.indexOf(currentView) + 1];
    if (viewToNavigateTo == null || !stepNavigation.areViewsInSameStep(currentView, viewToNavigateTo)) {
      return;
    }
    handleChangeView(viewToNavigateTo);
  });
  return _extends({}, stepNavigation, {
    view,
    setView: handleChangeView,
    focusedView,
    setFocusedView: handleFocusedViewChange,
    nextView,
    previousView,
    // Always return up-to-date default view instead of the initial one (i.e. defaultView.current)
    defaultView: views.includes(openTo) ? openTo : views[0],
    goToNextView,
    setValueAndGoToNextView
  });
}

// node_modules/.pnpm/@mui+x-date-pickers@8.26.0_@emotion+react@11.14.0_@types+react@19.2.7_react@19.2.3__@em_45e4fa7585d24d6c7a3cddedaa636f9d/node_modules/@mui/x-date-pickers/esm/internals/hooks/usePicker/hooks/useOrientation.js
var React42 = __toESM(require_react(), 1);
function getOrientation() {
  if (typeof window === "undefined") {
    return "portrait";
  }
  if (window.screen && window.screen.orientation && window.screen.orientation.angle) {
    return Math.abs(window.screen.orientation.angle) === 90 ? "landscape" : "portrait";
  }
  if (window.orientation) {
    return Math.abs(Number(window.orientation)) === 90 ? "landscape" : "portrait";
  }
  return "portrait";
}
function useOrientation(views, customOrientation) {
  const [orientation, setOrientation] = React42.useState(getOrientation);
  useEnhancedEffect_default(() => {
    const eventHandler = () => {
      setOrientation(getOrientation());
    };
    window.addEventListener("orientationchange", eventHandler);
    return () => {
      window.removeEventListener("orientationchange", eventHandler);
    };
  }, []);
  if (arrayIncludes(views, ["hours", "minutes", "seconds"])) {
    return "portrait";
  }
  return customOrientation ?? orientation;
}

// node_modules/.pnpm/@mui+x-date-pickers@8.26.0_@emotion+react@11.14.0_@types+react@19.2.7_react@19.2.3__@em_45e4fa7585d24d6c7a3cddedaa636f9d/node_modules/@mui/x-date-pickers/esm/internals/hooks/usePicker/hooks/useValueAndOpenStates.js
var React44 = __toESM(require_react(), 1);

// node_modules/.pnpm/@mui+x-date-pickers@8.26.0_@emotion+react@11.14.0_@types+react@19.2.7_react@19.2.3__@em_45e4fa7585d24d6c7a3cddedaa636f9d/node_modules/@mui/x-date-pickers/esm/internals/hooks/useControlledValue.js
var React43 = __toESM(require_react(), 1);
var useControlledValue = ({
  name,
  timezone: timezoneProp,
  value: valueProp,
  defaultValue,
  referenceDate,
  onChange: onChangeProp,
  valueManager
}) => {
  const adapter = usePickerAdapter();
  const [valueWithInputTimezone, setValue] = useControlled({
    name,
    state: "value",
    controlled: valueProp,
    default: defaultValue ?? valueManager.emptyValue
  });
  const inputTimezone = React43.useMemo(() => valueManager.getTimezone(adapter, valueWithInputTimezone), [adapter, valueManager, valueWithInputTimezone]);
  const setInputTimezone = useEventCallback_default((newValue) => {
    if (inputTimezone == null) {
      return newValue;
    }
    return valueManager.setTimezone(adapter, inputTimezone, newValue);
  });
  const timezoneToRender = React43.useMemo(() => {
    if (timezoneProp) {
      return timezoneProp;
    }
    if (inputTimezone) {
      return inputTimezone;
    }
    if (referenceDate) {
      return adapter.getTimezone(Array.isArray(referenceDate) ? referenceDate[0] : referenceDate);
    }
    return "default";
  }, [timezoneProp, inputTimezone, referenceDate, adapter]);
  const valueWithTimezoneToRender = React43.useMemo(() => valueManager.setTimezone(adapter, timezoneToRender, valueWithInputTimezone), [valueManager, adapter, timezoneToRender, valueWithInputTimezone]);
  const handleValueChange = useEventCallback_default((newValue, ...otherParams) => {
    const newValueWithInputTimezone = setInputTimezone(newValue);
    setValue(newValueWithInputTimezone);
    onChangeProp?.(newValueWithInputTimezone, ...otherParams);
  });
  return {
    value: valueWithTimezoneToRender,
    handleValueChange,
    timezone: timezoneToRender
  };
};

// node_modules/.pnpm/@mui+x-date-pickers@8.26.0_@emotion+react@11.14.0_@types+react@19.2.7_react@19.2.3__@em_45e4fa7585d24d6c7a3cddedaa636f9d/node_modules/@mui/x-date-pickers/esm/internals/hooks/usePicker/hooks/useValueAndOpenStates.js
function useValueAndOpenStates(parameters) {
  const {
    props,
    valueManager,
    validator
  } = parameters;
  const {
    value: valueProp,
    defaultValue: defaultValueProp,
    onChange,
    referenceDate,
    timezone: timezoneProp,
    onAccept,
    closeOnSelect,
    open: openProp,
    onOpen,
    onClose
  } = props;
  const {
    current: defaultValue
  } = React44.useRef(defaultValueProp);
  const {
    current: isValueControlled
  } = React44.useRef(valueProp !== void 0);
  const {
    current: isOpenControlled
  } = React44.useRef(openProp !== void 0);
  const adapter = usePickerAdapter();
  if (true) {
    if (props.renderInput != null) {
      warnOnce(["MUI X: The `renderInput` prop has been removed in version 6.0 of the Date and Time Pickers.", "You can replace it with the `textField` component slot in most cases.", "For more information, please have a look at the migration guide (https://mui.com/x/migration/migration-pickers-v5/#input-renderer-required-in-v5)."]);
    }
  }
  if (true) {
    React44.useEffect(() => {
      if (isValueControlled !== (valueProp !== void 0)) {
        console.error([`MUI X: A component is changing the ${isValueControlled ? "" : "un"}controlled value of a Picker to be ${isValueControlled ? "un" : ""}controlled.`, "Elements should not switch from uncontrolled to controlled (or vice versa).", `Decide between using a controlled or uncontrolled valuefor the lifetime of the component.`, "The nature of the state is determined during the first render. It's considered controlled if the value is not `undefined`.", "More info: https://fb.me/react-controlled-components"].join("\n"));
      }
    }, [valueProp]);
    React44.useEffect(() => {
      if (!isValueControlled && defaultValue !== defaultValueProp) {
        console.error([`MUI X: A component is changing the defaultValue of an uncontrolled Picker after being initialized. To suppress this warning opt to use a controlled value.`].join("\n"));
      }
    }, [JSON.stringify(defaultValue)]);
  }
  const {
    timezone,
    value,
    handleValueChange
  } = useControlledValue({
    name: "a picker component",
    timezone: timezoneProp,
    value: valueProp,
    defaultValue,
    referenceDate,
    onChange,
    valueManager
  });
  const [state, setState] = React44.useState(() => ({
    open: false,
    lastExternalValue: value,
    clockShallowValue: void 0,
    lastCommittedValue: value,
    hasBeenModifiedSinceMount: false
  }));
  const {
    getValidationErrorForNewValue
  } = useValidation({
    props,
    validator,
    timezone,
    value,
    onError: props.onError
  });
  const setOpen = useEventCallback_default((action) => {
    const newOpen = typeof action === "function" ? action(state.open) : action;
    if (!isOpenControlled) {
      setState((prevState) => _extends({}, prevState, {
        open: newOpen
      }));
    }
    if (newOpen && onOpen) {
      onOpen();
    }
    if (!newOpen) {
      onClose?.();
    }
  });
  const setValue = useEventCallback_default((newValue, options) => {
    const {
      changeImportance = "accept",
      skipPublicationIfPristine = false,
      validationError,
      shortcut,
      source,
      shouldClose = changeImportance === "accept"
    } = options ?? {};
    let shouldFireOnChange;
    let shouldFireOnAccept;
    if (!skipPublicationIfPristine && !isValueControlled && !state.hasBeenModifiedSinceMount) {
      shouldFireOnChange = true;
      shouldFireOnAccept = changeImportance === "accept";
    } else {
      shouldFireOnChange = !valueManager.areValuesEqual(adapter, newValue, value);
      shouldFireOnAccept = changeImportance === "accept" && !valueManager.areValuesEqual(adapter, newValue, state.lastCommittedValue);
    }
    setState((prevState) => _extends({}, prevState, {
      // We reset the shallow value whenever we fire onChange.
      clockShallowValue: shouldFireOnChange ? void 0 : prevState.clockShallowValue,
      lastCommittedValue: shouldFireOnAccept ? newValue : prevState.lastCommittedValue,
      hasBeenModifiedSinceMount: true
    }));
    let cachedContext = null;
    const getContext = () => {
      if (!cachedContext) {
        let inferredSource;
        if (source) {
          inferredSource = source;
        } else if (shortcut) {
          inferredSource = "view";
        } else {
          inferredSource = "unknown";
        }
        cachedContext = {
          validationError: validationError == null ? getValidationErrorForNewValue(newValue) : validationError,
          source: inferredSource
        };
        if (shortcut) {
          cachedContext.shortcut = shortcut;
        }
      }
      return cachedContext;
    };
    if (shouldFireOnChange) {
      handleValueChange(newValue, getContext());
    }
    if (shouldFireOnAccept && onAccept) {
      onAccept(newValue, getContext());
    }
    if (shouldClose) {
      setOpen(false);
    }
  });
  if (value !== state.lastExternalValue) {
    setState((prevState) => _extends({}, prevState, {
      lastExternalValue: value,
      clockShallowValue: void 0,
      hasBeenModifiedSinceMount: true
    }));
  }
  const setValueFromView = useEventCallback_default((newValue, selectionState = "partial") => {
    if (selectionState === "shallow") {
      setState((prev) => _extends({}, prev, {
        clockShallowValue: newValue,
        hasBeenModifiedSinceMount: true
      }));
      return;
    }
    setValue(newValue, {
      changeImportance: selectionState === "finish" && closeOnSelect ? "accept" : "set",
      source: "view"
    });
  });
  React44.useEffect(() => {
    if (isOpenControlled) {
      if (openProp === void 0) {
        throw new Error("You must not mix controlling and uncontrolled mode for `open` prop");
      }
      setState((prevState) => _extends({}, prevState, {
        open: openProp
      }));
    }
  }, [isOpenControlled, openProp]);
  const viewValue = React44.useMemo(() => valueManager.cleanValue(adapter, state.clockShallowValue === void 0 ? value : state.clockShallowValue), [adapter, valueManager, state.clockShallowValue, value]);
  return {
    timezone,
    state,
    setValue,
    setValueFromView,
    setOpen,
    value,
    viewValue
  };
}

// node_modules/.pnpm/@mui+x-date-pickers@8.26.0_@emotion+react@11.14.0_@types+react@19.2.7_react@19.2.3__@em_45e4fa7585d24d6c7a3cddedaa636f9d/node_modules/@mui/x-date-pickers/esm/internals/hooks/usePicker/usePicker.js
var import_jsx_runtime29 = __toESM(require_jsx_runtime(), 1);
var _excluded6 = ["className", "sx"];
var usePicker = ({
  ref,
  props,
  valueManager,
  valueType,
  variant,
  validator,
  onPopperExited,
  autoFocusView,
  rendererInterceptor: RendererInterceptor2,
  localeText,
  viewContainerRole,
  getStepNavigation
}) => {
  const {
    // View props
    views,
    view: viewProp,
    openTo,
    onViewChange,
    viewRenderers,
    reduceAnimations: reduceAnimationsProp,
    orientation: orientationProp,
    disableOpenPicker,
    closeOnSelect,
    // Form props
    disabled,
    readOnly,
    // Field props
    formatDensity,
    enableAccessibleFieldDOMStructure,
    selectedSections,
    onSelectedSectionsChange,
    format,
    label,
    // Other props
    autoFocus,
    name
  } = props;
  const {
    className,
    sx
  } = props, propsToForwardToView = _objectWithoutPropertiesLoose(props, _excluded6);
  const labelId = useId();
  const adapter = usePickerAdapter();
  const reduceAnimations = useReduceAnimations(reduceAnimationsProp);
  const orientation = useOrientation(views, orientationProp);
  const {
    current: initialView
  } = React45.useRef(openTo ?? null);
  const [triggerElement, triggerRef] = React45.useState(null);
  const popupRef = React45.useRef(null);
  const fieldRef = React45.useRef(null);
  const rootRefObject = React45.useRef(null);
  const rootRef = useForkRef(ref, rootRefObject);
  const {
    timezone,
    state,
    setOpen,
    setValue,
    setValueFromView,
    value,
    viewValue
  } = useValueAndOpenStates({
    props,
    valueManager,
    validator
  });
  const {
    view,
    setView,
    defaultView,
    focusedView,
    setFocusedView,
    setValueAndGoToNextView,
    goToNextStep,
    hasNextStep,
    hasSeveralSteps
  } = useViews({
    view: viewProp,
    views,
    openTo,
    onChange: setValueFromView,
    onViewChange,
    autoFocus: autoFocusView,
    getStepNavigation
  });
  const clearValue = useEventCallback_default(() => setValue(valueManager.emptyValue, {
    source: "view"
  }));
  const setValueToToday = useEventCallback_default(() => setValue(valueManager.getTodayValue(adapter, timezone, valueType), {
    source: "view"
  }));
  const acceptValueChanges = useEventCallback_default(() => setValue(value, {
    source: "view"
  }));
  const cancelValueChanges = useEventCallback_default(() => setValue(state.lastCommittedValue, {
    skipPublicationIfPristine: true,
    source: "view"
  }));
  const dismissViews = useEventCallback_default(() => {
    setValue(value, {
      skipPublicationIfPristine: true,
      source: "view"
    });
  });
  const {
    hasUIView,
    viewModeLookup,
    timeViewsCount
  } = React45.useMemo(() => views.reduce((acc, viewForReduce) => {
    const viewMode = viewRenderers[viewForReduce] == null ? "field" : "UI";
    acc.viewModeLookup[viewForReduce] = viewMode;
    if (viewMode === "UI") {
      acc.hasUIView = true;
      if (isTimeView(viewForReduce)) {
        acc.timeViewsCount += 1;
      }
    }
    return acc;
  }, {
    hasUIView: false,
    viewModeLookup: {},
    timeViewsCount: 0
  }), [viewRenderers, views]);
  const currentViewMode = viewModeLookup[view];
  const getCurrentViewMode = useEventCallback_default(() => currentViewMode);
  const [popperView, setPopperView] = React45.useState(currentViewMode === "UI" ? view : null);
  if (popperView !== view && viewModeLookup[view] === "UI") {
    setPopperView(view);
  }
  useEnhancedEffect_default(() => {
    if (currentViewMode === "field" && state.open) {
      setOpen(false);
      setTimeout(() => {
        fieldRef?.current?.setSelectedSections(view);
        fieldRef?.current?.focusField(view);
      });
    }
  }, [view]);
  useEnhancedEffect_default(() => {
    if (!state.open) {
      return;
    }
    let newView = view;
    if (currentViewMode === "field" && popperView != null) {
      newView = popperView;
    }
    if (newView !== defaultView && viewModeLookup[newView] === "UI" && viewModeLookup[defaultView] === "UI") {
      newView = defaultView;
    }
    if (newView !== view) {
      setView(newView);
    }
    setFocusedView(newView, true);
  }, [state.open]);
  const ownerState = React45.useMemo(() => ({
    isPickerValueEmpty: valueManager.areValuesEqual(adapter, value, valueManager.emptyValue),
    isPickerOpen: state.open,
    isPickerDisabled: props.disabled ?? false,
    isPickerReadOnly: props.readOnly ?? false,
    pickerOrientation: orientation,
    pickerVariant: variant
  }), [adapter, valueManager, value, state.open, orientation, variant, props.disabled, props.readOnly]);
  const triggerStatus = React45.useMemo(() => {
    if (disableOpenPicker || !hasUIView) {
      return "hidden";
    }
    if (disabled || readOnly) {
      return "disabled";
    }
    return "enabled";
  }, [disableOpenPicker, hasUIView, disabled, readOnly]);
  const wrappedGoToNextStep = useEventCallback_default(goToNextStep);
  const defaultActionBarActions = React45.useMemo(() => {
    if (closeOnSelect && !hasSeveralSteps) {
      return [];
    }
    return ["cancel", "nextOrAccept"];
  }, [closeOnSelect, hasSeveralSteps]);
  const actionsContextValue = React45.useMemo(() => ({
    setValue,
    setOpen,
    clearValue,
    setValueToToday,
    acceptValueChanges,
    cancelValueChanges,
    setView,
    goToNextStep: wrappedGoToNextStep
  }), [setValue, setOpen, clearValue, setValueToToday, acceptValueChanges, cancelValueChanges, setView, wrappedGoToNextStep]);
  const contextValue = React45.useMemo(() => _extends({}, actionsContextValue, {
    value,
    timezone,
    open: state.open,
    views,
    view: popperView,
    initialView,
    disabled: disabled ?? false,
    readOnly: readOnly ?? false,
    autoFocus: autoFocus ?? false,
    variant,
    orientation,
    popupRef,
    reduceAnimations,
    triggerRef,
    triggerStatus,
    hasNextStep,
    fieldFormat: format ?? "",
    name,
    label,
    rootSx: sx,
    rootRef,
    rootClassName: className
  }), [actionsContextValue, value, rootRef, variant, orientation, reduceAnimations, disabled, readOnly, format, className, name, label, sx, triggerStatus, hasNextStep, timezone, state.open, popperView, views, initialView, autoFocus]);
  const privateContextValue = React45.useMemo(() => ({
    dismissViews,
    ownerState,
    hasUIView,
    getCurrentViewMode,
    rootRefObject,
    labelId,
    triggerElement,
    viewContainerRole,
    defaultActionBarActions,
    onPopperExited
  }), [dismissViews, ownerState, hasUIView, getCurrentViewMode, labelId, triggerElement, viewContainerRole, defaultActionBarActions, onPopperExited]);
  const fieldPrivateContextValue = React45.useMemo(() => ({
    formatDensity,
    enableAccessibleFieldDOMStructure,
    selectedSections,
    onSelectedSectionsChange,
    fieldRef
  }), [formatDensity, enableAccessibleFieldDOMStructure, selectedSections, onSelectedSectionsChange, fieldRef]);
  const isValidContextValue = (testedValue) => {
    const error = validator({
      adapter,
      value: testedValue,
      timezone,
      props
    });
    return !valueManager.hasError(error);
  };
  const renderCurrentView = () => {
    if (popperView == null) {
      return null;
    }
    const renderer = viewRenderers[popperView];
    if (renderer == null) {
      return null;
    }
    const rendererProps = _extends({}, propsToForwardToView, {
      views,
      timezone,
      value: viewValue,
      onChange: setValueAndGoToNextView,
      view: popperView,
      onViewChange: setView,
      showViewSwitcher: timeViewsCount > 1,
      timeViewsCount
    }, viewContainerRole === "tooltip" ? {
      focusedView: null,
      onFocusedViewChange: () => {
      }
    } : {
      focusedView,
      onFocusedViewChange: setFocusedView
    });
    if (RendererInterceptor2) {
      return (0, import_jsx_runtime29.jsx)(RendererInterceptor2, {
        viewRenderers,
        popperView,
        rendererProps
      });
    }
    return renderer(rendererProps);
  };
  return {
    providerProps: {
      localeText,
      contextValue,
      privateContextValue,
      actionsContextValue,
      fieldPrivateContextValue,
      isValidContextValue
    },
    renderCurrentView,
    ownerState
  };
};

// node_modules/.pnpm/@mui+x-date-pickers@8.26.0_@emotion+react@11.14.0_@types+react@19.2.7_react@19.2.3__@em_45e4fa7585d24d6c7a3cddedaa636f9d/node_modules/@mui/x-date-pickers/esm/PickersLayout/PickersLayout.js
var React48 = __toESM(require_react(), 1);
var import_prop_types6 = __toESM(require_prop_types(), 1);

// node_modules/.pnpm/@mui+x-date-pickers@8.26.0_@emotion+react@11.14.0_@types+react@19.2.7_react@19.2.3__@em_45e4fa7585d24d6c7a3cddedaa636f9d/node_modules/@mui/x-date-pickers/esm/PickersLayout/pickersLayoutClasses.js
function getPickersLayoutUtilityClass(slot) {
  return generateUtilityClass("MuiPickersLayout", slot);
}
var pickersLayoutClasses = generateUtilityClasses("MuiPickersLayout", ["root", "landscape", "contentWrapper", "toolbar", "actionBar", "tabs", "shortcuts"]);

// node_modules/.pnpm/@mui+x-date-pickers@8.26.0_@emotion+react@11.14.0_@types+react@19.2.7_react@19.2.3__@em_45e4fa7585d24d6c7a3cddedaa636f9d/node_modules/@mui/x-date-pickers/esm/PickersLayout/usePickerLayout.js
var React47 = __toESM(require_react(), 1);

// node_modules/.pnpm/@mui+x-date-pickers@8.26.0_@emotion+react@11.14.0_@types+react@19.2.7_react@19.2.3__@em_45e4fa7585d24d6c7a3cddedaa636f9d/node_modules/@mui/x-date-pickers/esm/PickersActionBar/PickersActionBar.js
var React46 = __toESM(require_react(), 1);
var import_prop_types4 = __toESM(require_prop_types(), 1);
var import_jsx_runtime30 = __toESM(require_jsx_runtime(), 1);
var _excluded7 = ["actions"];
var PickersActionBarRoot = styled_default(DialogActions_default, {
  name: "MuiPickersLayout",
  slot: "ActionBar"
})({});
function PickersActionBarComponent(props) {
  const {
    actions
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded7);
  const translations = usePickerTranslations();
  const {
    clearValue,
    setValueToToday,
    acceptValueChanges,
    cancelValueChanges,
    goToNextStep,
    hasNextStep
  } = usePickerContext();
  if (actions == null || actions.length === 0) {
    return null;
  }
  const buttons = actions?.map((actionType) => {
    switch (actionType) {
      case "clear":
        return (0, import_jsx_runtime30.jsx)(Button_default, {
          onClick: clearValue,
          children: translations.clearButtonLabel
        }, actionType);
      case "cancel":
        return (0, import_jsx_runtime30.jsx)(Button_default, {
          onClick: cancelValueChanges,
          children: translations.cancelButtonLabel
        }, actionType);
      case "accept":
        return (0, import_jsx_runtime30.jsx)(Button_default, {
          onClick: acceptValueChanges,
          children: translations.okButtonLabel
        }, actionType);
      case "today":
        return (0, import_jsx_runtime30.jsx)(Button_default, {
          onClick: setValueToToday,
          children: translations.todayButtonLabel
        }, actionType);
      case "next":
        return (0, import_jsx_runtime30.jsx)(Button_default, {
          onClick: goToNextStep,
          children: translations.nextStepButtonLabel
        }, actionType);
      case "nextOrAccept":
        if (hasNextStep) {
          return (0, import_jsx_runtime30.jsx)(Button_default, {
            onClick: goToNextStep,
            children: translations.nextStepButtonLabel
          }, actionType);
        }
        return (0, import_jsx_runtime30.jsx)(Button_default, {
          onClick: acceptValueChanges,
          children: translations.okButtonLabel
        }, actionType);
      default:
        return null;
    }
  });
  return (0, import_jsx_runtime30.jsx)(PickersActionBarRoot, _extends({}, other, {
    children: buttons
  }));
}
true ? PickersActionBarComponent.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * Ordered array of actions to display.
   * If empty, does not display that action bar.
   * @default
   * - `[]` for Pickers with one selection step which `closeOnSelect`.
   * - `['cancel', 'nextOrAccept']` for all other Pickers.
   */
  actions: import_prop_types4.default.arrayOf(import_prop_types4.default.oneOf(["accept", "cancel", "clear", "next", "nextOrAccept", "today"]).isRequired),
  /**
   * If `true`, the actions do not have additional margin.
   * @default false
   */
  disableSpacing: import_prop_types4.default.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types4.default.oneOfType([import_prop_types4.default.arrayOf(import_prop_types4.default.oneOfType([import_prop_types4.default.func, import_prop_types4.default.object, import_prop_types4.default.bool])), import_prop_types4.default.func, import_prop_types4.default.object])
} : void 0;
var PickersActionBar = React46.memo(PickersActionBarComponent);
if (true) PickersActionBar.displayName = "PickersActionBar";

// node_modules/.pnpm/@mui+x-date-pickers@8.26.0_@emotion+react@11.14.0_@types+react@19.2.7_react@19.2.3__@em_45e4fa7585d24d6c7a3cddedaa636f9d/node_modules/@mui/x-date-pickers/esm/PickersShortcuts/PickersShortcuts.js
var import_prop_types5 = __toESM(require_prop_types(), 1);

// node_modules/.pnpm/@mui+x-date-pickers@8.26.0_@emotion+react@11.14.0_@types+react@19.2.7_react@19.2.3__@em_45e4fa7585d24d6c7a3cddedaa636f9d/node_modules/@mui/x-date-pickers/esm/internals/constants/dimensions.js
var DAY_SIZE = 36;
var DAY_MARGIN = 2;
var DIALOG_WIDTH = 320;
var MAX_CALENDAR_HEIGHT = 280;
var VIEW_HEIGHT = 336;
var DIGITAL_CLOCK_VIEW_HEIGHT = 232;
var MULTI_SECTION_CLOCK_SECTION_WIDTH = 48;

// node_modules/.pnpm/@mui+x-date-pickers@8.26.0_@emotion+react@11.14.0_@types+react@19.2.7_react@19.2.3__@em_45e4fa7585d24d6c7a3cddedaa636f9d/node_modules/@mui/x-date-pickers/esm/PickersShortcuts/PickersShortcuts.js
var import_jsx_runtime31 = __toESM(require_jsx_runtime(), 1);
var _excluded8 = ["items", "changeImportance"];
var _excluded22 = ["getValue"];
var PickersShortcutsRoot = styled_default(List_default, {
  name: "MuiPickersLayout",
  slot: "Shortcuts"
})({});
function PickersShortcuts(props) {
  const {
    items,
    changeImportance = "accept"
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded8);
  const {
    setValue
  } = usePickerActionsContext();
  const isValidValue = useIsValidValue();
  if (items == null || items.length === 0) {
    return null;
  }
  const resolvedItems = items.map((_ref) => {
    let {
      getValue
    } = _ref, item = _objectWithoutPropertiesLoose(_ref, _excluded22);
    const newValue = getValue({
      isValid: isValidValue
    });
    return _extends({}, item, {
      label: item.label,
      onClick: () => {
        setValue(newValue, {
          changeImportance,
          shortcut: item,
          source: "view"
        });
      },
      disabled: !isValidValue(newValue)
    });
  });
  return (0, import_jsx_runtime31.jsx)(PickersShortcutsRoot, _extends({
    dense: true,
    sx: [{
      maxHeight: VIEW_HEIGHT,
      maxWidth: 200,
      overflow: "auto"
    }, ...Array.isArray(other.sx) ? other.sx : [other.sx]]
  }, other, {
    children: resolvedItems.map((item) => {
      return (0, import_jsx_runtime31.jsx)(ListItem_default, {
        children: (0, import_jsx_runtime31.jsx)(Chip_default, _extends({}, item))
      }, item.id ?? item.label);
    })
  }));
}
true ? PickersShortcuts.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * Importance of the change when picking a shortcut:
   * - "accept": fires `onChange`, fires `onAccept` and closes the Picker.
   * - "set": fires `onChange` but do not fire `onAccept` and does not close the Picker.
   * @default "accept"
   */
  changeImportance: import_prop_types5.default.oneOf(["accept", "set"]),
  className: import_prop_types5.default.string,
  component: import_prop_types5.default.elementType,
  /**
   * If `true`, compact vertical padding designed for keyboard and mouse input is used for
   * the list and list items.
   * The prop is available to descendant components as the `dense` context.
   * @default false
   */
  dense: import_prop_types5.default.bool,
  /**
   * If `true`, vertical padding is removed from the list.
   * @default false
   */
  disablePadding: import_prop_types5.default.bool,
  /**
   * Ordered array of shortcuts to display.
   * If empty, does not display the shortcuts.
   * @default []
   */
  items: import_prop_types5.default.arrayOf(import_prop_types5.default.shape({
    getValue: import_prop_types5.default.func.isRequired,
    id: import_prop_types5.default.string,
    label: import_prop_types5.default.string.isRequired
  })),
  style: import_prop_types5.default.object,
  /**
   * The content of the subheader, normally `ListSubheader`.
   */
  subheader: import_prop_types5.default.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types5.default.oneOfType([import_prop_types5.default.arrayOf(import_prop_types5.default.oneOfType([import_prop_types5.default.func, import_prop_types5.default.object, import_prop_types5.default.bool])), import_prop_types5.default.func, import_prop_types5.default.object])
} : void 0;

// node_modules/.pnpm/@mui+x-date-pickers@8.26.0_@emotion+react@11.14.0_@types+react@19.2.7_react@19.2.3__@em_45e4fa7585d24d6c7a3cddedaa636f9d/node_modules/@mui/x-date-pickers/esm/PickersLayout/usePickerLayout.js
var import_jsx_runtime32 = __toESM(require_jsx_runtime(), 1);
var _excluded9 = ["ownerState"];
function toolbarHasView(toolbarProps) {
  return toolbarProps.view !== null;
}
var useUtilityClasses4 = (classes, ownerState) => {
  const {
    pickerOrientation
  } = ownerState;
  const slots = {
    root: ["root", pickerOrientation === "landscape" && "landscape"],
    contentWrapper: ["contentWrapper"],
    toolbar: ["toolbar"],
    actionBar: ["actionBar"],
    tabs: ["tabs"],
    landscape: ["landscape"],
    shortcuts: ["shortcuts"]
  };
  return composeClasses(slots, getPickersLayoutUtilityClass, classes);
};
var usePickerLayout = (props) => {
  const {
    ownerState: pickerOwnerState,
    defaultActionBarActions
  } = usePickerPrivateContext();
  const {
    view
  } = usePickerContext();
  const isRtl = useRtl();
  const {
    children,
    slots,
    slotProps,
    classes: classesProp
  } = props;
  const ownerState = React47.useMemo(() => _extends({}, pickerOwnerState, {
    layoutDirection: isRtl ? "rtl" : "ltr",
    hasShortcuts: false
  }), [pickerOwnerState, isRtl]);
  const classes = useUtilityClasses4(classesProp, ownerState);
  const ActionBar = slots?.actionBar ?? PickersActionBar;
  const _useSlotProps = useSlotProps_default({
    elementType: ActionBar,
    externalSlotProps: slotProps?.actionBar,
    additionalProps: {
      actions: defaultActionBarActions
    },
    className: classes.actionBar,
    ownerState
  }), actionBarProps = _objectWithoutPropertiesLoose(_useSlotProps, _excluded9);
  const actionBar = (0, import_jsx_runtime32.jsx)(ActionBar, _extends({}, actionBarProps));
  const Toolbar = slots?.toolbar;
  const toolbarProps = useSlotProps_default({
    elementType: Toolbar,
    externalSlotProps: slotProps?.toolbar,
    className: classes.toolbar,
    ownerState
  });
  const toolbar = toolbarHasView(toolbarProps) && !!Toolbar ? (0, import_jsx_runtime32.jsx)(Toolbar, _extends({}, toolbarProps)) : null;
  const content = children;
  const Tabs = slots?.tabs;
  const tabs = view && Tabs ? (0, import_jsx_runtime32.jsx)(Tabs, _extends({
    className: classes.tabs
  }, slotProps?.tabs)) : null;
  const Shortcuts = slots?.shortcuts ?? PickersShortcuts;
  const shortcutsProps = useSlotProps_default({
    elementType: Shortcuts,
    externalSlotProps: slotProps?.shortcuts,
    className: classes.shortcuts,
    ownerState
  });
  const hasShortcuts = Array.isArray(shortcutsProps?.items) && shortcutsProps.items.length > 0;
  const shortcuts = view && !!Shortcuts ? (0, import_jsx_runtime32.jsx)(Shortcuts, _extends({}, shortcutsProps)) : null;
  return {
    toolbar,
    content,
    tabs,
    actionBar,
    shortcuts,
    ownerState: _extends({}, ownerState, {
      hasShortcuts
    })
  };
};
var usePickerLayout_default = usePickerLayout;

// node_modules/.pnpm/@mui+x-date-pickers@8.26.0_@emotion+react@11.14.0_@types+react@19.2.7_react@19.2.3__@em_45e4fa7585d24d6c7a3cddedaa636f9d/node_modules/@mui/x-date-pickers/esm/PickersLayout/PickersLayout.js
var import_jsx_runtime33 = __toESM(require_jsx_runtime(), 1);
var useUtilityClasses5 = (classes, ownerState) => {
  const {
    pickerOrientation
  } = ownerState;
  const slots = {
    root: ["root", pickerOrientation === "landscape" && "landscape"],
    contentWrapper: ["contentWrapper"]
  };
  return composeClasses(slots, getPickersLayoutUtilityClass, classes);
};
var PickersLayoutRoot = styled_default("div", {
  name: "MuiPickersLayout",
  slot: "Root"
})({
  display: "grid",
  gridAutoColumns: "max-content auto max-content",
  gridAutoRows: "max-content auto max-content",
  [`& .${pickersLayoutClasses.actionBar}`]: {
    gridColumn: "1 / 4",
    gridRow: 3
  },
  variants: [{
    props: {
      pickerOrientation: "landscape",
      hasShortcuts: false
    },
    style: {
      [`& .${pickersLayoutClasses.toolbar}`]: {
        gridColumn: 1,
        gridRow: "1 / 3"
      }
    }
  }, {
    props: {
      pickerOrientation: "landscape",
      hasShortcuts: true
    },
    style: {
      [`& .${pickersLayoutClasses.toolbar}`]: {
        gridColumn: "2 / 4",
        gridRow: 1,
        maxWidth: "max-content"
      },
      [`& .${pickersLayoutClasses.shortcuts}`]: {
        gridColumn: 1,
        gridRow: 2
      }
    }
  }, {
    props: {
      pickerOrientation: "portrait"
    },
    style: {
      [`& .${pickersLayoutClasses.toolbar}`]: {
        gridColumn: "2 / 4",
        gridRow: 1
      },
      [`& .${pickersLayoutClasses.shortcuts}`]: {
        gridColumn: 1,
        gridRow: "2 / 3"
      }
    }
  }, {
    props: {
      hasShortcuts: true,
      layoutDirection: "rtl"
    },
    style: {
      [`& .${pickersLayoutClasses.shortcuts}`]: {
        gridColumn: 4
      }
    }
  }]
});
var PickersLayoutContentWrapper = styled_default("div", {
  name: "MuiPickersLayout",
  slot: "ContentWrapper"
})({
  gridColumn: "2 / 4",
  gridRow: 2,
  display: "flex",
  flexDirection: "column"
});
var PickersLayout = React48.forwardRef(function PickersLayout2(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiPickersLayout"
  });
  const {
    toolbar,
    content,
    tabs,
    actionBar,
    shortcuts,
    ownerState
  } = usePickerLayout_default(props);
  const {
    orientation,
    variant
  } = usePickerContext();
  const {
    sx,
    className,
    classes: classesProp
  } = props;
  const classes = useUtilityClasses5(classesProp, ownerState);
  return (0, import_jsx_runtime33.jsxs)(PickersLayoutRoot, {
    ref,
    sx,
    className: clsx_default(classes.root, className),
    ownerState,
    children: [orientation === "landscape" ? shortcuts : toolbar, orientation === "landscape" ? toolbar : shortcuts, (0, import_jsx_runtime33.jsx)(PickersLayoutContentWrapper, {
      className: classes.contentWrapper,
      ownerState,
      children: variant === "desktop" ? (0, import_jsx_runtime33.jsxs)(React48.Fragment, {
        children: [content, tabs]
      }) : (0, import_jsx_runtime33.jsxs)(React48.Fragment, {
        children: [tabs, content]
      })
    }), actionBar]
  });
});
if (true) PickersLayout.displayName = "PickersLayout";
true ? PickersLayout.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  children: import_prop_types6.default.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: import_prop_types6.default.object,
  className: import_prop_types6.default.string,
  /**
   * The props used for each component slot.
   * @default {}
   */
  slotProps: import_prop_types6.default.object,
  /**
   * Overridable component slots.
   * @default {}
   */
  slots: import_prop_types6.default.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types6.default.oneOfType([import_prop_types6.default.arrayOf(import_prop_types6.default.oneOfType([import_prop_types6.default.func, import_prop_types6.default.object, import_prop_types6.default.bool])), import_prop_types6.default.func, import_prop_types6.default.object])
} : void 0;

// node_modules/.pnpm/@mui+x-date-pickers@8.26.0_@emotion+react@11.14.0_@types+react@19.2.7_react@19.2.3__@em_45e4fa7585d24d6c7a3cddedaa636f9d/node_modules/@mui/x-date-pickers/esm/internals/utils/createNonRangePickerStepNavigation.js
function createNonRangePickerStepNavigation(parameters) {
  const {
    steps
  } = parameters;
  return createStepNavigation({
    steps,
    isViewMatchingStep: (view, step) => {
      return step.views == null || step.views.includes(view);
    },
    onStepChange: ({
      step,
      defaultView,
      setView,
      view,
      views
    }) => {
      const targetView = step.views == null ? defaultView : step.views.find((viewBis) => views.includes(viewBis));
      if (targetView !== view) {
        setView(targetView);
      }
    }
  });
}

// node_modules/.pnpm/@mui+x-date-pickers@8.26.0_@emotion+react@11.14.0_@types+react@19.2.7_react@19.2.3__@em_45e4fa7585d24d6c7a3cddedaa636f9d/node_modules/@mui/x-date-pickers/esm/internals/hooks/useDesktopPicker/useDesktopPicker.js
var import_jsx_runtime34 = __toESM(require_jsx_runtime(), 1);
var _excluded10 = ["props", "steps"];
var _excluded23 = ["ownerState"];
var useDesktopPicker = (_ref) => {
  let {
    props,
    steps
  } = _ref, pickerParams = _objectWithoutPropertiesLoose(_ref, _excluded10);
  const {
    slots,
    slotProps: innerSlotProps,
    label,
    inputRef,
    localeText
  } = props;
  const getStepNavigation = createNonRangePickerStepNavigation({
    steps
  });
  const {
    providerProps,
    renderCurrentView,
    ownerState
  } = usePicker(_extends({}, pickerParams, {
    props,
    localeText,
    autoFocusView: true,
    viewContainerRole: "dialog",
    variant: "desktop",
    getStepNavigation
  }));
  const labelId = providerProps.privateContextValue.labelId;
  const isToolbarHidden = innerSlotProps?.toolbar?.hidden ?? false;
  const Field = slots.field;
  const _useSlotProps = useSlotProps_default({
    elementType: Field,
    externalSlotProps: innerSlotProps?.field,
    additionalProps: _extends({}, isToolbarHidden && {
      id: labelId
    }),
    ownerState
  }), fieldProps = _objectWithoutPropertiesLoose(_useSlotProps, _excluded23);
  const Layout = slots.layout ?? PickersLayout;
  let labelledById = labelId;
  if (isToolbarHidden) {
    if (label) {
      labelledById = `${labelId}-label`;
    } else {
      labelledById = void 0;
    }
  }
  const slotProps = _extends({}, innerSlotProps, {
    toolbar: _extends({}, innerSlotProps?.toolbar, {
      titleId: labelId
    }),
    popper: _extends({
      "aria-labelledby": labelledById
    }, innerSlotProps?.popper)
  });
  const renderPicker = () => (0, import_jsx_runtime34.jsxs)(PickerProvider, _extends({}, providerProps, {
    children: [(0, import_jsx_runtime34.jsx)(Field, _extends({}, fieldProps, {
      slots: _extends({}, slots, fieldProps.slots),
      slotProps: _extends({}, slotProps, fieldProps.slotProps),
      inputRef
    })), (0, import_jsx_runtime34.jsx)(PickerPopper, {
      slots,
      slotProps,
      children: (0, import_jsx_runtime34.jsx)(Layout, _extends({}, slotProps?.layout, {
        slots,
        slotProps,
        children: renderCurrentView()
      }))
    })]
  }));
  if (true) renderPicker.displayName = "renderPicker";
  return {
    renderPicker
  };
};

// node_modules/.pnpm/@mui+x-date-pickers@8.26.0_@emotion+react@11.14.0_@types+react@19.2.7_react@19.2.3__@em_45e4fa7585d24d6c7a3cddedaa636f9d/node_modules/@mui/x-date-pickers/esm/DateField/DateField.js
var React69 = __toESM(require_react(), 1);
var import_prop_types13 = __toESM(require_prop_types(), 1);

// node_modules/.pnpm/@mui+x-date-pickers@8.26.0_@emotion+react@11.14.0_@types+react@19.2.7_react@19.2.3__@em_45e4fa7585d24d6c7a3cddedaa636f9d/node_modules/@mui/x-date-pickers/esm/internals/hooks/useField/useFieldV7TextField.js
var React54 = __toESM(require_react(), 1);

// node_modules/.pnpm/@mui+x-date-pickers@8.26.0_@emotion+react@11.14.0_@types+react@19.2.7_react@19.2.3__@em_45e4fa7585d24d6c7a3cddedaa636f9d/node_modules/@mui/x-date-pickers/esm/internals/hooks/useField/useFieldCharacterEditing.js
var isQueryResponseWithoutValue = (response) => response.saveQuery != null;
var useFieldCharacterEditing = ({
  stateResponse: {
    // States and derived states
    localizedDigits,
    sectionsValueBoundaries,
    state,
    timezone,
    // Methods to update the states
    setCharacterQuery,
    setTempAndroidValueStr,
    updateSectionValue
  }
}) => {
  const adapter = usePickerAdapter();
  const applyQuery = ({
    keyPressed,
    sectionIndex
  }, getFirstSectionValueMatchingWithQuery, isValidQueryValue) => {
    const cleanKeyPressed = keyPressed.toLowerCase();
    const activeSection = state.sections[sectionIndex];
    if (state.characterQuery != null && (!isValidQueryValue || isValidQueryValue(state.characterQuery.value)) && state.characterQuery.sectionIndex === sectionIndex) {
      const concatenatedQueryValue = `${state.characterQuery.value}${cleanKeyPressed}`;
      const queryResponse2 = getFirstSectionValueMatchingWithQuery(concatenatedQueryValue, activeSection);
      if (!isQueryResponseWithoutValue(queryResponse2)) {
        setCharacterQuery({
          sectionIndex,
          value: concatenatedQueryValue,
          sectionType: activeSection.type
        });
        return queryResponse2;
      }
    }
    const queryResponse = getFirstSectionValueMatchingWithQuery(cleanKeyPressed, activeSection);
    if (isQueryResponseWithoutValue(queryResponse) && !queryResponse.saveQuery) {
      setCharacterQuery(null);
      return null;
    }
    setCharacterQuery({
      sectionIndex,
      value: cleanKeyPressed,
      sectionType: activeSection.type
    });
    if (isQueryResponseWithoutValue(queryResponse)) {
      return null;
    }
    return queryResponse;
  };
  const applyLetterEditing = (params) => {
    const findMatchingOptions = (format, options, queryValue) => {
      const matchingValues = options.filter((option) => option.toLowerCase().startsWith(queryValue));
      if (matchingValues.length === 0) {
        return {
          saveQuery: false
        };
      }
      return {
        sectionValue: matchingValues[0],
        shouldGoToNextSection: matchingValues.length === 1
      };
    };
    const testQueryOnFormatAndFallbackFormat = (queryValue, activeSection, fallbackFormat, formatFallbackValue) => {
      const getOptions = (format) => getLetterEditingOptions(adapter, timezone, activeSection.type, format);
      if (activeSection.contentType === "letter") {
        return findMatchingOptions(activeSection.format, getOptions(activeSection.format), queryValue);
      }
      if (fallbackFormat && formatFallbackValue != null && getDateSectionConfigFromFormatToken(adapter, fallbackFormat).contentType === "letter") {
        const fallbackOptions = getOptions(fallbackFormat);
        const response = findMatchingOptions(fallbackFormat, fallbackOptions, queryValue);
        if (isQueryResponseWithoutValue(response)) {
          return {
            saveQuery: false
          };
        }
        return _extends({}, response, {
          sectionValue: formatFallbackValue(response.sectionValue, fallbackOptions)
        });
      }
      return {
        saveQuery: false
      };
    };
    const getFirstSectionValueMatchingWithQuery = (queryValue, activeSection) => {
      switch (activeSection.type) {
        case "month": {
          const formatFallbackValue = (fallbackValue) => changeSectionValueFormat(adapter, fallbackValue, adapter.formats.month, activeSection.format);
          return testQueryOnFormatAndFallbackFormat(queryValue, activeSection, adapter.formats.month, formatFallbackValue);
        }
        case "weekDay": {
          const formatFallbackValue = (fallbackValue, fallbackOptions) => fallbackOptions.indexOf(fallbackValue).toString();
          return testQueryOnFormatAndFallbackFormat(queryValue, activeSection, adapter.formats.weekday, formatFallbackValue);
        }
        case "meridiem": {
          return testQueryOnFormatAndFallbackFormat(queryValue, activeSection);
        }
        default: {
          return {
            saveQuery: false
          };
        }
      }
    };
    return applyQuery(params, getFirstSectionValueMatchingWithQuery);
  };
  const applyNumericEditing = (params) => {
    const getNewSectionValue = ({
      queryValue,
      skipIfBelowMinimum,
      section
    }) => {
      const cleanQueryValue = removeLocalizedDigits(queryValue, localizedDigits);
      const queryValueNumber = Number(cleanQueryValue);
      const sectionBoundaries = sectionsValueBoundaries[section.type]({
        currentDate: null,
        format: section.format,
        contentType: section.contentType
      });
      if (queryValueNumber > sectionBoundaries.maximum) {
        return {
          saveQuery: false
        };
      }
      if (skipIfBelowMinimum && queryValueNumber < sectionBoundaries.minimum) {
        return {
          saveQuery: true
        };
      }
      const shouldGoToNextSection = queryValueNumber * 10 > sectionBoundaries.maximum || cleanQueryValue.length === sectionBoundaries.maximum.toString().length;
      const newSectionValue = cleanDigitSectionValue(adapter, queryValueNumber, sectionBoundaries, localizedDigits, section);
      return {
        sectionValue: newSectionValue,
        shouldGoToNextSection
      };
    };
    const getFirstSectionValueMatchingWithQuery = (queryValue, activeSection) => {
      if (activeSection.contentType === "digit" || activeSection.contentType === "digit-with-letter") {
        return getNewSectionValue({
          queryValue,
          skipIfBelowMinimum: false,
          section: activeSection
        });
      }
      if (activeSection.type === "month") {
        const hasLeadingZerosInFormat = doesSectionFormatHaveLeadingZeros(adapter, "digit", "month", "MM");
        const response = getNewSectionValue({
          queryValue,
          skipIfBelowMinimum: true,
          section: {
            type: activeSection.type,
            format: "MM",
            hasLeadingZerosInFormat,
            hasLeadingZerosInInput: true,
            contentType: "digit",
            maxLength: 2
          }
        });
        if (isQueryResponseWithoutValue(response)) {
          return response;
        }
        const formattedValue = changeSectionValueFormat(adapter, response.sectionValue, "MM", activeSection.format);
        return _extends({}, response, {
          sectionValue: formattedValue
        });
      }
      if (activeSection.type === "weekDay") {
        const response = getNewSectionValue({
          queryValue,
          skipIfBelowMinimum: true,
          section: activeSection
        });
        if (isQueryResponseWithoutValue(response)) {
          return response;
        }
        const formattedValue = getDaysInWeekStr(adapter, activeSection.format)[Number(response.sectionValue) - 1];
        return _extends({}, response, {
          sectionValue: formattedValue
        });
      }
      return {
        saveQuery: false
      };
    };
    return applyQuery(params, getFirstSectionValueMatchingWithQuery, (queryValue) => isStringNumber(queryValue, localizedDigits));
  };
  return useEventCallback_default((params) => {
    const section = state.sections[params.sectionIndex];
    const isNumericEditing = isStringNumber(params.keyPressed, localizedDigits);
    const response = isNumericEditing ? applyNumericEditing(_extends({}, params, {
      keyPressed: applyLocalizedDigits(params.keyPressed, localizedDigits)
    })) : applyLetterEditing(params);
    if (response == null) {
      setTempAndroidValueStr(null);
      return;
    }
    updateSectionValue({
      section,
      newSectionValue: response.sectionValue,
      shouldGoToNextSection: response.shouldGoToNextSection
    });
  });
};

// node_modules/.pnpm/@mui+x-date-pickers@8.26.0_@emotion+react@11.14.0_@types+react@19.2.7_react@19.2.3__@em_45e4fa7585d24d6c7a3cddedaa636f9d/node_modules/@mui/x-date-pickers/esm/internals/hooks/useField/useFieldState.js
var React49 = __toESM(require_react(), 1);
var QUERY_LIFE_DURATION_MS = 5e3;
var useFieldState = (parameters) => {
  const adapter = usePickerAdapter();
  const translations = usePickerTranslations();
  const isRtl = useRtl();
  const {
    manager: {
      validator,
      valueType,
      internal_valueManager: valueManager,
      internal_fieldValueManager: fieldValueManager
    },
    internalPropsWithDefaults,
    internalPropsWithDefaults: {
      value: valueProp,
      defaultValue,
      referenceDate: referenceDateProp,
      onChange,
      format,
      formatDensity = "dense",
      selectedSections: selectedSectionsProp,
      onSelectedSectionsChange,
      shouldRespectLeadingZeros = false,
      timezone: timezoneProp,
      enableAccessibleFieldDOMStructure = true
    },
    forwardedProps: {
      error: errorProp
    }
  } = parameters;
  const {
    value,
    handleValueChange,
    timezone
  } = useControlledValue({
    name: "a field component",
    timezone: timezoneProp,
    value: valueProp,
    defaultValue,
    referenceDate: referenceDateProp,
    onChange,
    valueManager
  });
  const valueRef = React49.useRef(value);
  React49.useEffect(() => {
    valueRef.current = value;
  }, [value]);
  const {
    hasValidationError
  } = useValidation({
    props: internalPropsWithDefaults,
    validator,
    timezone,
    value,
    onError: internalPropsWithDefaults.onError
  });
  const localizedDigits = React49.useMemo(() => getLocalizedDigits(adapter), [adapter]);
  const sectionsValueBoundaries = React49.useMemo(() => getSectionsBoundaries(adapter, localizedDigits, timezone), [adapter, localizedDigits, timezone]);
  const getSectionsFromValue = React49.useCallback((valueToAnalyze) => fieldValueManager.getSectionsFromValue(valueToAnalyze, (date) => buildSectionsFromFormat({
    adapter,
    localeText: translations,
    localizedDigits,
    format,
    date,
    formatDensity,
    shouldRespectLeadingZeros,
    enableAccessibleFieldDOMStructure,
    isRtl
  })), [fieldValueManager, format, translations, localizedDigits, isRtl, shouldRespectLeadingZeros, adapter, formatDensity, enableAccessibleFieldDOMStructure]);
  const [state, setState] = React49.useState(() => {
    const sections = getSectionsFromValue(value);
    validateSections(sections, valueType);
    const stateWithoutReferenceDate = {
      sections,
      lastExternalValue: value,
      lastSectionsDependencies: {
        format,
        isRtl,
        locale: adapter.locale
      },
      tempValueStrAndroid: null,
      characterQuery: null
    };
    const granularity = getSectionTypeGranularity(sections);
    const referenceValue = valueManager.getInitialReferenceValue({
      referenceDate: referenceDateProp,
      value,
      adapter,
      props: internalPropsWithDefaults,
      granularity,
      timezone
    });
    return _extends({}, stateWithoutReferenceDate, {
      referenceValue
    });
  });
  const [selectedSections, innerSetSelectedSections] = useControlled({
    controlled: selectedSectionsProp,
    default: null,
    name: "useField",
    state: "selectedSections"
  });
  const setSelectedSections = (newSelectedSections) => {
    innerSetSelectedSections(newSelectedSections);
    onSelectedSectionsChange?.(newSelectedSections);
  };
  const parsedSelectedSections = React49.useMemo(() => parseSelectedSections(selectedSections, state.sections), [selectedSections, state.sections]);
  const activeSectionIndex = parsedSelectedSections === "all" ? 0 : parsedSelectedSections;
  const sectionOrder = React49.useMemo(() => getSectionOrder(state.sections, isRtl && !enableAccessibleFieldDOMStructure), [state.sections, isRtl, enableAccessibleFieldDOMStructure]);
  const areAllSectionsEmpty = React49.useMemo(() => state.sections.every((section) => section.value === ""), [state.sections]);
  const hasPartiallyFilledSectionsOnBlur = React49.useMemo(() => {
    if (activeSectionIndex != null) {
      return false;
    }
    const filledSections = state.sections.filter((s) => s.value !== "");
    return filledSections.length > 0 && state.sections.length - filledSections.length > 0;
  }, [state.sections, activeSectionIndex]);
  const error = React49.useMemo(() => {
    if (errorProp !== void 0) {
      return errorProp;
    }
    return hasValidationError || hasPartiallyFilledSectionsOnBlur;
  }, [hasValidationError, hasPartiallyFilledSectionsOnBlur, errorProp]);
  const publishValue = (newValue) => {
    const context = {
      validationError: validator({
        adapter,
        value: newValue,
        timezone,
        props: internalPropsWithDefaults
      })
    };
    handleValueChange(newValue, context);
  };
  const setSectionValue = (sectionIndex, newSectionValue) => {
    const newSections = [...state.sections];
    newSections[sectionIndex] = _extends({}, newSections[sectionIndex], {
      value: newSectionValue,
      modified: true
    });
    return newSections;
  };
  const sectionToUpdateOnNextInvalidDateRef = React49.useRef(null);
  const updateSectionValueOnNextInvalidDateTimeout = useTimeout();
  const setSectionUpdateToApplyOnNextInvalidDate = (newSectionValue) => {
    if (activeSectionIndex == null) {
      return;
    }
    sectionToUpdateOnNextInvalidDateRef.current = {
      sectionIndex: activeSectionIndex,
      value: newSectionValue
    };
    updateSectionValueOnNextInvalidDateTimeout.start(0, () => {
      sectionToUpdateOnNextInvalidDateRef.current = null;
    });
  };
  const clearValue = () => {
    if (valueManager.areValuesEqual(adapter, value, valueManager.emptyValue)) {
      setState((prevState) => _extends({}, prevState, {
        sections: prevState.sections.map((section) => _extends({}, section, {
          value: ""
        })),
        tempValueStrAndroid: null,
        characterQuery: null
      }));
    } else {
      setState((prevState) => _extends({}, prevState, {
        characterQuery: null
      }));
      publishValue(valueManager.emptyValue);
    }
  };
  const clearActiveSection = () => {
    if (activeSectionIndex == null) {
      return;
    }
    const activeSection = state.sections[activeSectionIndex];
    if (activeSection.value === "") {
      return;
    }
    setSectionUpdateToApplyOnNextInvalidDate("");
    if (fieldValueManager.getDateFromSection(value, activeSection) === null) {
      setState((prevState) => _extends({}, prevState, {
        sections: setSectionValue(activeSectionIndex, ""),
        tempValueStrAndroid: null,
        characterQuery: null
      }));
    } else {
      setState((prevState) => _extends({}, prevState, {
        characterQuery: null
      }));
      publishValue(fieldValueManager.updateDateInValue(value, activeSection, null));
    }
  };
  const updateValueFromValueStr = (valueStr) => {
    const parseDateStr = (dateStr, referenceDate) => {
      const date = adapter.parse(dateStr, format);
      if (!adapter.isValid(date)) {
        return null;
      }
      const sections = buildSectionsFromFormat({
        adapter,
        localeText: translations,
        localizedDigits,
        format,
        date,
        formatDensity,
        shouldRespectLeadingZeros,
        enableAccessibleFieldDOMStructure,
        isRtl
      });
      return mergeDateIntoReferenceDate(adapter, date, sections, referenceDate, false);
    };
    const newValue = fieldValueManager.parseValueStr(valueStr, state.referenceValue, parseDateStr);
    publishValue(newValue);
  };
  const cleanActiveDateSectionsIfValueNullTimeout = useTimeout();
  const updateSectionValue = ({
    section,
    newSectionValue,
    shouldGoToNextSection
  }) => {
    updateSectionValueOnNextInvalidDateTimeout.clear();
    cleanActiveDateSectionsIfValueNullTimeout.clear();
    const activeDate = fieldValueManager.getDateFromSection(value, section);
    if (shouldGoToNextSection && activeSectionIndex < state.sections.length - 1) {
      setSelectedSections(activeSectionIndex + 1);
    }
    const newSections = setSectionValue(activeSectionIndex, newSectionValue);
    const newActiveDateSections = fieldValueManager.getDateSectionsFromValue(newSections, section);
    const newActiveDate = getDateFromDateSections(adapter, newActiveDateSections, localizedDigits);
    if (adapter.isValid(newActiveDate)) {
      const mergedDate = mergeDateIntoReferenceDate(adapter, newActiveDate, newActiveDateSections, fieldValueManager.getDateFromSection(state.referenceValue, section), true);
      if (activeDate == null) {
        cleanActiveDateSectionsIfValueNullTimeout.start(0, () => {
          if (valueRef.current === value) {
            setState((prevState) => _extends({}, prevState, {
              sections: fieldValueManager.clearDateSections(state.sections, section),
              tempValueStrAndroid: null
            }));
          }
        });
      }
      return publishValue(fieldValueManager.updateDateInValue(value, section, mergedDate));
    }
    if (newActiveDateSections.every((sectionBis) => sectionBis.value !== "") && (activeDate == null || adapter.isValid(activeDate))) {
      setSectionUpdateToApplyOnNextInvalidDate(newSectionValue);
      return publishValue(fieldValueManager.updateDateInValue(value, section, newActiveDate));
    }
    if (activeDate != null) {
      setSectionUpdateToApplyOnNextInvalidDate(newSectionValue);
      publishValue(fieldValueManager.updateDateInValue(value, section, newActiveDate));
    }
    return setState((prevState) => _extends({}, prevState, {
      sections: newSections,
      tempValueStrAndroid: null
    }));
  };
  const setTempAndroidValueStr = (tempValueStrAndroid) => setState((prevState) => _extends({}, prevState, {
    tempValueStrAndroid
  }));
  const setCharacterQuery = useEventCallback_default((newCharacterQuery) => {
    setState((prevState) => _extends({}, prevState, {
      characterQuery: newCharacterQuery
    }));
  });
  if (value !== state.lastExternalValue) {
    const isActiveDateInvalid = sectionToUpdateOnNextInvalidDateRef.current != null && !adapter.isValid(fieldValueManager.getDateFromSection(value, state.sections[sectionToUpdateOnNextInvalidDateRef.current.sectionIndex]));
    let sections;
    if (isActiveDateInvalid) {
      sections = setSectionValue(sectionToUpdateOnNextInvalidDateRef.current.sectionIndex, sectionToUpdateOnNextInvalidDateRef.current.value);
    } else {
      sections = getSectionsFromValue(value);
    }
    setState((prevState) => _extends({}, prevState, {
      lastExternalValue: value,
      sections,
      sectionsDependencies: {
        format,
        isRtl,
        locale: adapter.locale
      },
      referenceValue: isActiveDateInvalid ? prevState.referenceValue : fieldValueManager.updateReferenceValue(adapter, value, prevState.referenceValue),
      tempValueStrAndroid: null
    }));
  }
  if (isRtl !== state.lastSectionsDependencies.isRtl || format !== state.lastSectionsDependencies.format || adapter.locale !== state.lastSectionsDependencies.locale) {
    const sections = getSectionsFromValue(value);
    validateSections(sections, valueType);
    setState((prevState) => _extends({}, prevState, {
      lastSectionsDependencies: {
        format,
        isRtl,
        locale: adapter.locale
      },
      sections,
      tempValueStrAndroid: null,
      characterQuery: null
    }));
  }
  if (state.characterQuery != null && !error && activeSectionIndex == null) {
    setCharacterQuery(null);
  }
  if (state.characterQuery != null && state.sections[state.characterQuery.sectionIndex]?.type !== state.characterQuery.sectionType) {
    setCharacterQuery(null);
  }
  React49.useEffect(() => {
    if (sectionToUpdateOnNextInvalidDateRef.current != null) {
      sectionToUpdateOnNextInvalidDateRef.current = null;
    }
  });
  const cleanCharacterQueryTimeout = useTimeout();
  React49.useEffect(() => {
    if (state.characterQuery != null) {
      cleanCharacterQueryTimeout.start(QUERY_LIFE_DURATION_MS, () => setCharacterQuery(null));
    }
    return () => {
    };
  }, [state.characterQuery, setCharacterQuery, cleanCharacterQueryTimeout]);
  React49.useEffect(() => {
    if (state.tempValueStrAndroid != null && activeSectionIndex != null) {
      clearActiveSection();
    }
  }, [state.sections]);
  return {
    // States and derived states
    activeSectionIndex,
    areAllSectionsEmpty,
    error,
    localizedDigits,
    parsedSelectedSections,
    sectionOrder,
    sectionsValueBoundaries,
    state,
    timezone,
    value,
    // Methods to update the states
    clearValue,
    clearActiveSection,
    setCharacterQuery,
    setSelectedSections,
    setTempAndroidValueStr,
    updateSectionValue,
    updateValueFromValueStr,
    // Utilities methods
    getSectionsFromValue
  };
};

// node_modules/.pnpm/@mui+x-date-pickers@8.26.0_@emotion+react@11.14.0_@types+react@19.2.7_react@19.2.3__@em_45e4fa7585d24d6c7a3cddedaa636f9d/node_modules/@mui/x-date-pickers/esm/internals/hooks/useField/useFieldInternalPropsWithDefaults.js
var React50 = __toESM(require_react(), 1);
function useFieldInternalPropsWithDefaults(parameters) {
  const {
    manager: {
      internal_useApplyDefaultValuesToFieldInternalProps: useApplyDefaultValuesToFieldInternalProps
    },
    internalProps,
    skipContextFieldRefAssignment
  } = parameters;
  const pickerContext = useNullablePickerContext();
  const fieldPrivateContext = useNullableFieldPrivateContext();
  const handleFieldRef = useForkRef(internalProps.unstableFieldRef, skipContextFieldRefAssignment ? null : fieldPrivateContext?.fieldRef);
  const setValue = pickerContext?.setValue;
  const handleChangeFromPicker = React50.useCallback((newValue, ctx) => {
    return setValue?.(newValue, {
      validationError: ctx.validationError,
      shouldClose: false
    });
  }, [setValue]);
  const internalPropsWithDefaultsFromContext = React50.useMemo(() => {
    if (fieldPrivateContext != null && pickerContext != null) {
      return _extends({
        value: pickerContext.value,
        onChange: handleChangeFromPicker,
        timezone: pickerContext.timezone,
        disabled: pickerContext.disabled,
        readOnly: pickerContext.readOnly,
        autoFocus: pickerContext.autoFocus && !pickerContext.open,
        focused: pickerContext.open ? true : void 0,
        format: pickerContext.fieldFormat,
        formatDensity: fieldPrivateContext.formatDensity,
        enableAccessibleFieldDOMStructure: fieldPrivateContext.enableAccessibleFieldDOMStructure,
        selectedSections: fieldPrivateContext.selectedSections,
        onSelectedSectionsChange: fieldPrivateContext.onSelectedSectionsChange,
        unstableFieldRef: handleFieldRef
      }, internalProps);
    }
    return internalProps;
  }, [pickerContext, fieldPrivateContext, internalProps, handleChangeFromPicker, handleFieldRef]);
  return useApplyDefaultValuesToFieldInternalProps(internalPropsWithDefaultsFromContext);
}

// node_modules/.pnpm/@mui+x-date-pickers@8.26.0_@emotion+react@11.14.0_@types+react@19.2.7_react@19.2.3__@em_45e4fa7585d24d6c7a3cddedaa636f9d/node_modules/@mui/x-date-pickers/esm/internals/hooks/useField/syncSelectionToDOM.js
function syncSelectionToDOM(parameters) {
  const {
    focused,
    domGetters,
    stateResponse: {
      // States and derived states
      parsedSelectedSections,
      state
    }
  } = parameters;
  if (!domGetters.isReady()) {
    return;
  }
  const selection = ownerDocument(domGetters.getRoot()).getSelection();
  if (!selection) {
    return;
  }
  if (parsedSelectedSections == null) {
    if (selection.rangeCount > 0 && // Firefox can return a Restricted object here
    selection.getRangeAt(0).startContainer instanceof Node && domGetters.getRoot().contains(selection.getRangeAt(0).startContainer)) {
      selection.removeAllRanges();
    }
    if (focused) {
      domGetters.getRoot().blur();
    }
    return;
  }
  if (!domGetters.getRoot().contains(getActiveElement(domGetters.getRoot()))) {
    return;
  }
  const range = new window.Range();
  let target;
  if (parsedSelectedSections === "all") {
    target = domGetters.getRoot();
  } else {
    const section = state.sections[parsedSelectedSections];
    if (section.type === "empty") {
      target = domGetters.getSectionContainer(parsedSelectedSections);
    } else {
      target = domGetters.getSectionContent(parsedSelectedSections);
    }
  }
  range.selectNodeContents(target);
  target.focus();
  selection.removeAllRanges();
  selection.addRange(range);
}

// node_modules/.pnpm/@mui+x-date-pickers@8.26.0_@emotion+react@11.14.0_@types+react@19.2.7_react@19.2.3__@em_45e4fa7585d24d6c7a3cddedaa636f9d/node_modules/@mui/x-date-pickers/esm/internals/hooks/useField/useFieldRootHandleKeyDown.js
function useFieldRootHandleKeyDown(parameters) {
  const adapter = usePickerAdapter();
  const {
    manager: {
      internal_fieldValueManager: fieldValueManager
    },
    internalPropsWithDefaults: {
      minutesStep,
      disabled,
      readOnly
    },
    stateResponse: {
      // States and derived states
      state,
      value,
      activeSectionIndex,
      parsedSelectedSections,
      sectionsValueBoundaries,
      localizedDigits,
      timezone,
      sectionOrder,
      // Methods to update the states
      clearValue,
      clearActiveSection,
      setSelectedSections,
      updateSectionValue
    }
  } = parameters;
  return useEventCallback_default((event) => {
    if (disabled) {
      return;
    }
    switch (true) {
      // Select all
      case ((event.ctrlKey || event.metaKey) && String.fromCharCode(event.keyCode) === "A" && !event.shiftKey && !event.altKey): {
        event.preventDefault();
        setSelectedSections("all");
        break;
      }
      // Move selection to next section
      case event.key === "ArrowRight": {
        event.preventDefault();
        if (parsedSelectedSections == null) {
          setSelectedSections(sectionOrder.startIndex);
        } else if (parsedSelectedSections === "all") {
          setSelectedSections(sectionOrder.endIndex);
        } else {
          const nextSectionIndex = sectionOrder.neighbors[parsedSelectedSections].rightIndex;
          if (nextSectionIndex !== null) {
            setSelectedSections(nextSectionIndex);
          }
        }
        break;
      }
      // Move selection to previous section
      case event.key === "ArrowLeft": {
        event.preventDefault();
        if (parsedSelectedSections == null) {
          setSelectedSections(sectionOrder.endIndex);
        } else if (parsedSelectedSections === "all") {
          setSelectedSections(sectionOrder.startIndex);
        } else {
          const nextSectionIndex = sectionOrder.neighbors[parsedSelectedSections].leftIndex;
          if (nextSectionIndex !== null) {
            setSelectedSections(nextSectionIndex);
          }
        }
        break;
      }
      // Reset the value of the selected section
      case event.key === "Delete": {
        event.preventDefault();
        if (readOnly) {
          break;
        }
        if (parsedSelectedSections == null || parsedSelectedSections === "all") {
          clearValue();
        } else {
          clearActiveSection();
        }
        break;
      }
      // Increment / decrement the selected section value
      case ["ArrowUp", "ArrowDown", "Home", "End", "PageUp", "PageDown"].includes(event.key): {
        event.preventDefault();
        if (readOnly || activeSectionIndex == null) {
          break;
        }
        if (parsedSelectedSections === "all") {
          setSelectedSections(activeSectionIndex);
        }
        const activeSection = state.sections[activeSectionIndex];
        const newSectionValue = adjustSectionValue(adapter, timezone, activeSection, event.key, sectionsValueBoundaries, localizedDigits, fieldValueManager.getDateFromSection(value, activeSection), {
          minutesStep
        });
        updateSectionValue({
          section: activeSection,
          newSectionValue,
          shouldGoToNextSection: false
        });
        break;
      }
    }
  });
}
function getDeltaFromKeyCode(keyCode) {
  switch (keyCode) {
    case "ArrowUp":
      return 1;
    case "ArrowDown":
      return -1;
    case "PageUp":
      return 5;
    case "PageDown":
      return -5;
    default:
      return 0;
  }
}
function adjustSectionValue(adapter, timezone, section, keyCode, sectionsValueBoundaries, localizedDigits, activeDate, stepsAttributes) {
  const delta = getDeltaFromKeyCode(keyCode);
  const isStart = keyCode === "Home";
  const isEnd = keyCode === "End";
  const shouldSetAbsolute = section.value === "" || isStart || isEnd;
  const adjustDigitSection = () => {
    const sectionBoundaries = sectionsValueBoundaries[section.type]({
      currentDate: activeDate,
      format: section.format,
      contentType: section.contentType
    });
    const getCleanValue = (value) => cleanDigitSectionValue(adapter, value, sectionBoundaries, localizedDigits, section);
    const step = section.type === "minutes" && stepsAttributes?.minutesStep ? stepsAttributes.minutesStep : 1;
    let newSectionValueNumber;
    if (shouldSetAbsolute) {
      if (section.type === "year" && !isEnd && !isStart) {
        return adapter.formatByString(adapter.date(void 0, timezone), section.format);
      }
      if (delta > 0 || isStart) {
        newSectionValueNumber = sectionBoundaries.minimum;
      } else {
        newSectionValueNumber = sectionBoundaries.maximum;
      }
    } else {
      const currentSectionValue = parseInt(removeLocalizedDigits(section.value, localizedDigits), 10);
      newSectionValueNumber = currentSectionValue + delta * step;
    }
    if (newSectionValueNumber % step !== 0) {
      if (delta < 0 || isStart) {
        newSectionValueNumber += step - (step + newSectionValueNumber) % step;
      }
      if (delta > 0 || isEnd) {
        newSectionValueNumber -= newSectionValueNumber % step;
      }
    }
    if (newSectionValueNumber > sectionBoundaries.maximum) {
      return getCleanValue(sectionBoundaries.minimum + (newSectionValueNumber - sectionBoundaries.maximum - 1) % (sectionBoundaries.maximum - sectionBoundaries.minimum + 1));
    }
    if (newSectionValueNumber < sectionBoundaries.minimum) {
      return getCleanValue(sectionBoundaries.maximum - (sectionBoundaries.minimum - newSectionValueNumber - 1) % (sectionBoundaries.maximum - sectionBoundaries.minimum + 1));
    }
    return getCleanValue(newSectionValueNumber);
  };
  const adjustLetterSection = () => {
    const options = getLetterEditingOptions(adapter, timezone, section.type, section.format);
    if (options.length === 0) {
      return section.value;
    }
    if (shouldSetAbsolute) {
      if (delta > 0 || isStart) {
        return options[0];
      }
      return options[options.length - 1];
    }
    const currentOptionIndex = options.indexOf(section.value);
    const newOptionIndex = (currentOptionIndex + delta) % options.length;
    const clampedIndex = (newOptionIndex + options.length) % options.length;
    return options[clampedIndex];
  };
  if (section.contentType === "digit" || section.contentType === "digit-with-letter") {
    return adjustDigitSection();
  }
  return adjustLetterSection();
}

// node_modules/.pnpm/@mui+x-date-pickers@8.26.0_@emotion+react@11.14.0_@types+react@19.2.7_react@19.2.3__@em_45e4fa7585d24d6c7a3cddedaa636f9d/node_modules/@mui/x-date-pickers/esm/internals/hooks/useField/useFieldRootProps.js
function useFieldRootProps(parameters) {
  const {
    manager,
    focused,
    setFocused,
    domGetters,
    stateResponse,
    applyCharacterEditing,
    internalPropsWithDefaults,
    stateResponse: {
      // States and derived states
      parsedSelectedSections,
      sectionOrder,
      state,
      // Methods to update the states
      clearValue,
      setCharacterQuery,
      setSelectedSections,
      updateValueFromValueStr
    },
    internalPropsWithDefaults: {
      disabled = false,
      readOnly = false
    }
  } = parameters;
  const handleKeyDown = useFieldRootHandleKeyDown({
    manager,
    internalPropsWithDefaults,
    stateResponse
  });
  const containerClickTimeout = useTimeout();
  const handleClick = useEventCallback_default((event) => {
    if (disabled || !domGetters.isReady()) {
      return;
    }
    setFocused(true);
    if (parsedSelectedSections === "all") {
      containerClickTimeout.start(0, () => {
        const cursorPosition = document.getSelection().getRangeAt(0).startOffset;
        if (cursorPosition === 0) {
          setSelectedSections(sectionOrder.startIndex);
          return;
        }
        let sectionIndex = 0;
        let cursorOnStartOfSection = 0;
        while (cursorOnStartOfSection < cursorPosition && sectionIndex < state.sections.length) {
          const section = state.sections[sectionIndex];
          sectionIndex += 1;
          cursorOnStartOfSection += `${section.startSeparator}${section.value || section.placeholder}${section.endSeparator}`.length;
        }
        setSelectedSections(sectionIndex - 1);
      });
    } else if (!focused) {
      setFocused(true);
      setSelectedSections(sectionOrder.startIndex);
    } else {
      const hasClickedOnASection = domGetters.getRoot().contains(event.target);
      if (!hasClickedOnASection) {
        setSelectedSections(sectionOrder.startIndex);
      }
    }
  });
  const handleInput = useEventCallback_default((event) => {
    if (!domGetters.isReady() || parsedSelectedSections !== "all") {
      return;
    }
    const target = event.target;
    const keyPressed = target.textContent ?? "";
    domGetters.getRoot().innerHTML = state.sections.map((section) => `${section.startSeparator}${section.value || section.placeholder}${section.endSeparator}`).join("");
    syncSelectionToDOM({
      focused,
      domGetters,
      stateResponse
    });
    if (keyPressed.length === 0 || keyPressed.charCodeAt(0) === 10) {
      clearValue();
      setSelectedSections("all");
    } else if (keyPressed.length > 1) {
      updateValueFromValueStr(keyPressed);
    } else {
      if (parsedSelectedSections === "all") {
        setSelectedSections(0);
      }
      applyCharacterEditing({
        keyPressed,
        sectionIndex: 0
      });
    }
  });
  const handlePaste = useEventCallback_default((event) => {
    if (readOnly || parsedSelectedSections !== "all") {
      event.preventDefault();
      return;
    }
    const pastedValue = event.clipboardData.getData("text");
    event.preventDefault();
    setCharacterQuery(null);
    updateValueFromValueStr(pastedValue);
  });
  const handleFocus = useEventCallback_default(() => {
    if (focused || disabled || !domGetters.isReady()) {
      return;
    }
    const activeElement = getActiveElement(domGetters.getRoot());
    setFocused(true);
    const isFocusInsideASection = domGetters.getSectionIndexFromDOMElement(activeElement) != null;
    if (!isFocusInsideASection) {
      setSelectedSections(sectionOrder.startIndex);
    }
  });
  const handleBlur = useEventCallback_default(() => {
    setTimeout(() => {
      if (!domGetters.isReady()) {
        return;
      }
      const activeElement = getActiveElement(domGetters.getRoot());
      const shouldBlur = !domGetters.getRoot().contains(activeElement);
      if (shouldBlur) {
        setFocused(false);
        setSelectedSections(null);
      }
    });
  });
  return {
    // Event handlers
    onKeyDown: handleKeyDown,
    onBlur: handleBlur,
    onFocus: handleFocus,
    onClick: handleClick,
    onPaste: handlePaste,
    onInput: handleInput,
    // Other
    contentEditable: parsedSelectedSections === "all",
    tabIndex: internalPropsWithDefaults.disabled || parsedSelectedSections === 0 ? -1 : 0
    // TODO: Try to set to undefined when there is a section selected.
  };
}

// node_modules/.pnpm/@mui+x-date-pickers@8.26.0_@emotion+react@11.14.0_@types+react@19.2.7_react@19.2.3__@em_45e4fa7585d24d6c7a3cddedaa636f9d/node_modules/@mui/x-date-pickers/esm/internals/hooks/useField/useFieldHiddenInputProps.js
var React51 = __toESM(require_react(), 1);
function useFieldHiddenInputProps(parameters) {
  const {
    manager: {
      internal_fieldValueManager: fieldValueManager
    },
    stateResponse: {
      // States and derived states
      areAllSectionsEmpty,
      state,
      // Methods to update the states
      updateValueFromValueStr
    }
  } = parameters;
  const handleChange = useEventCallback_default((event) => {
    updateValueFromValueStr(event.target.value);
  });
  const valueStr = React51.useMemo(() => areAllSectionsEmpty ? "" : fieldValueManager.getV7HiddenInputValueFromSections(state.sections), [areAllSectionsEmpty, state.sections, fieldValueManager]);
  return {
    value: valueStr,
    onChange: handleChange
  };
}

// node_modules/.pnpm/@mui+x-date-pickers@8.26.0_@emotion+react@11.14.0_@types+react@19.2.7_react@19.2.3__@em_45e4fa7585d24d6c7a3cddedaa636f9d/node_modules/@mui/x-date-pickers/esm/internals/hooks/useField/useFieldSectionContainerProps.js
var React52 = __toESM(require_react(), 1);
function useFieldSectionContainerProps(parameters) {
  const {
    stateResponse: {
      // Methods to update the states
      setSelectedSections
    },
    internalPropsWithDefaults: {
      disabled = false
    }
  } = parameters;
  const createHandleClick = React52.useCallback((sectionIndex) => (event) => {
    if (disabled || event.isDefaultPrevented()) {
      return;
    }
    setSelectedSections(sectionIndex);
  }, [disabled, setSelectedSections]);
  return React52.useCallback((sectionIndex) => ({
    "data-sectionindex": sectionIndex,
    onClick: createHandleClick(sectionIndex)
  }), [createHandleClick]);
}

// node_modules/.pnpm/@mui+x-date-pickers@8.26.0_@emotion+react@11.14.0_@types+react@19.2.7_react@19.2.3__@em_45e4fa7585d24d6c7a3cddedaa636f9d/node_modules/@mui/x-date-pickers/esm/internals/hooks/useField/useFieldSectionContentProps.js
var React53 = __toESM(require_react(), 1);
function useFieldSectionContentProps(parameters) {
  const adapter = usePickerAdapter();
  const translations = usePickerTranslations();
  const {
    focused,
    domGetters,
    stateResponse,
    applyCharacterEditing,
    manager: {
      internal_fieldValueManager: fieldValueManager
    },
    stateResponse: {
      // States and derived states
      parsedSelectedSections,
      sectionsValueBoundaries,
      state,
      value,
      // Methods to update the states
      clearActiveSection,
      setCharacterQuery,
      setSelectedSections,
      updateSectionValue,
      updateValueFromValueStr
    },
    internalPropsWithDefaults: {
      disabled = false,
      readOnly = false
    }
  } = parameters;
  const isContainerEditable = parsedSelectedSections === "all";
  const isEditable = !isContainerEditable && !disabled && !readOnly;
  const revertDOMSectionChange = useEventCallback_default((sectionIndex) => {
    if (!domGetters.isReady()) {
      return;
    }
    const section = state.sections[sectionIndex];
    domGetters.getSectionContent(sectionIndex).innerHTML = section.value || section.placeholder;
    syncSelectionToDOM({
      focused,
      domGetters,
      stateResponse
    });
  });
  const handleInput = useEventCallback_default((event) => {
    if (!domGetters.isReady()) {
      return;
    }
    const target = event.target;
    const keyPressed = target.textContent ?? "";
    const sectionIndex = domGetters.getSectionIndexFromDOMElement(target);
    const section = state.sections[sectionIndex];
    if (readOnly) {
      revertDOMSectionChange(sectionIndex);
      return;
    }
    if (keyPressed.length === 0) {
      if (section.value === "") {
        revertDOMSectionChange(sectionIndex);
        return;
      }
      const inputType = event.nativeEvent.inputType;
      if (inputType === "insertParagraph" || inputType === "insertLineBreak") {
        revertDOMSectionChange(sectionIndex);
        return;
      }
      revertDOMSectionChange(sectionIndex);
      clearActiveSection();
      return;
    }
    applyCharacterEditing({
      keyPressed,
      sectionIndex
    });
    revertDOMSectionChange(sectionIndex);
  });
  const handleMouseUp = useEventCallback_default((event) => {
    event.preventDefault();
  });
  const handlePaste = useEventCallback_default((event) => {
    event.preventDefault();
    if (readOnly || disabled || typeof parsedSelectedSections !== "number") {
      return;
    }
    const activeSection = state.sections[parsedSelectedSections];
    const pastedValue = event.clipboardData.getData("text");
    const lettersOnly = /^[a-zA-Z]+$/.test(pastedValue);
    const digitsOnly = /^[0-9]+$/.test(pastedValue);
    const digitsAndLetterOnly = /^(([a-zA-Z]+)|)([0-9]+)(([a-zA-Z]+)|)$/.test(pastedValue);
    const isValidPastedValue = activeSection.contentType === "letter" && lettersOnly || activeSection.contentType === "digit" && digitsOnly || activeSection.contentType === "digit-with-letter" && digitsAndLetterOnly;
    if (isValidPastedValue) {
      setCharacterQuery(null);
      updateSectionValue({
        section: activeSection,
        newSectionValue: pastedValue,
        shouldGoToNextSection: true
      });
    } else if (!lettersOnly && !digitsOnly) {
      setCharacterQuery(null);
      updateValueFromValueStr(pastedValue);
    }
  });
  const handleDragOver = useEventCallback_default((event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "none";
  });
  const createFocusHandler = React53.useCallback((sectionIndex) => () => {
    if (disabled) {
      return;
    }
    setSelectedSections(sectionIndex);
  }, [disabled, setSelectedSections]);
  return React53.useCallback((section, sectionIndex) => {
    const sectionBoundaries = sectionsValueBoundaries[section.type]({
      currentDate: fieldValueManager.getDateFromSection(value, section),
      contentType: section.contentType,
      format: section.format
    });
    return {
      // Event handlers
      onInput: handleInput,
      onPaste: handlePaste,
      onMouseUp: handleMouseUp,
      onDragOver: handleDragOver,
      onFocus: createFocusHandler(sectionIndex),
      // Aria attributes
      "aria-readonly": readOnly,
      "aria-valuenow": getSectionValueNow(section, adapter),
      "aria-valuemin": sectionBoundaries.minimum,
      "aria-valuemax": sectionBoundaries.maximum,
      "aria-valuetext": section.value ? getSectionValueText(section, adapter) : translations.empty,
      "aria-label": translations[section.type],
      "aria-disabled": disabled,
      // Other
      tabIndex: !isEditable || isContainerEditable || sectionIndex > 0 ? -1 : 0,
      contentEditable: !isContainerEditable && !disabled && !readOnly,
      role: "spinbutton",
      "data-range-position": section.dateName || void 0,
      spellCheck: isEditable ? false : void 0,
      // Firefox hydrates this as `'none`' instead of `'off'`. No problems in chromium with both values.
      // For reference https://github.com/mui/mui-x/issues/19012
      autoCapitalize: isEditable ? "none" : void 0,
      autoCorrect: isEditable ? "off" : void 0,
      children: section.value || section.placeholder,
      inputMode: section.contentType === "letter" ? "text" : "numeric"
    };
  }, [sectionsValueBoundaries, isContainerEditable, disabled, readOnly, isEditable, translations, adapter, handleInput, handlePaste, handleMouseUp, handleDragOver, createFocusHandler, fieldValueManager, value]);
}
function getSectionValueText(section, adapter) {
  if (!section.value) {
    return void 0;
  }
  switch (section.type) {
    case "month": {
      if (section.contentType === "digit") {
        const dateWithMonth = adapter.setMonth(adapter.date(), Number(section.value) - 1);
        return adapter.isValid(dateWithMonth) ? adapter.format(dateWithMonth, "month") : "";
      }
      const parsedDate = adapter.parse(section.value, section.format);
      return parsedDate && adapter.isValid(parsedDate) ? adapter.format(parsedDate, "month") : void 0;
    }
    case "day":
      if (section.contentType === "digit") {
        const dateWithDay = adapter.setDate(adapter.startOfYear(adapter.date()), Number(section.value));
        return adapter.isValid(dateWithDay) ? adapter.format(dateWithDay, "dayOfMonthFull") : "";
      }
      return section.value;
    case "weekDay":
      return void 0;
    default:
      return void 0;
  }
}
function getSectionValueNow(section, adapter) {
  if (!section.value) {
    return void 0;
  }
  switch (section.type) {
    case "weekDay": {
      if (section.contentType === "letter") {
        return void 0;
      }
      return Number(section.value);
    }
    case "meridiem": {
      const parsedDate = adapter.parse(`01:00 ${section.value}`, `${adapter.formats.hours12h}:${adapter.formats.minutes} ${section.format}`);
      if (parsedDate) {
        return adapter.getHours(parsedDate) >= 12 ? 1 : 0;
      }
      return void 0;
    }
    case "day":
      return section.contentType === "digit-with-letter" ? parseInt(section.value, 10) : Number(section.value);
    case "month": {
      if (section.contentType === "digit") {
        return Number(section.value);
      }
      const parsedDate = adapter.parse(section.value, section.format);
      return parsedDate ? adapter.getMonth(parsedDate) + 1 : void 0;
    }
    default:
      return section.contentType !== "letter" ? Number(section.value) : void 0;
  }
}

// node_modules/.pnpm/@mui+x-date-pickers@8.26.0_@emotion+react@11.14.0_@types+react@19.2.7_react@19.2.3__@em_45e4fa7585d24d6c7a3cddedaa636f9d/node_modules/@mui/x-date-pickers/esm/internals/hooks/useField/useFieldV7TextField.js
var useFieldV7TextField = (parameters) => {
  const {
    props,
    manager,
    skipContextFieldRefAssignment,
    manager: {
      valueType,
      internal_useOpenPickerButtonAriaLabel: useOpenPickerButtonAriaLabel3
    }
  } = parameters;
  const {
    internalProps,
    forwardedProps
  } = useSplitFieldProps(props, valueType);
  const internalPropsWithDefaults = useFieldInternalPropsWithDefaults({
    manager,
    internalProps,
    skipContextFieldRefAssignment
  });
  const {
    sectionListRef: sectionListRefProp,
    onBlur,
    onClick,
    onFocus,
    onInput,
    onPaste,
    onKeyDown,
    onClear,
    clearable
  } = forwardedProps;
  const {
    disabled = false,
    readOnly = false,
    autoFocus = false,
    focused: focusedProp,
    unstableFieldRef
  } = internalPropsWithDefaults;
  const sectionListRef = React54.useRef(null);
  const handleSectionListRef = useForkRef(sectionListRefProp, sectionListRef);
  const domGetters = React54.useMemo(() => ({
    isReady: () => sectionListRef.current != null,
    getRoot: () => sectionListRef.current.getRoot(),
    getSectionContainer: (sectionIndex) => sectionListRef.current.getSectionContainer(sectionIndex),
    getSectionContent: (sectionIndex) => sectionListRef.current.getSectionContent(sectionIndex),
    getSectionIndexFromDOMElement: (element) => sectionListRef.current.getSectionIndexFromDOMElement(element)
  }), [sectionListRef]);
  const stateResponse = useFieldState({
    manager,
    internalPropsWithDefaults,
    forwardedProps
  });
  const {
    // States and derived states
    areAllSectionsEmpty,
    error,
    parsedSelectedSections,
    sectionOrder,
    state,
    value,
    // Methods to update the states
    clearValue,
    setSelectedSections
  } = stateResponse;
  const applyCharacterEditing = useFieldCharacterEditing({
    stateResponse
  });
  const openPickerAriaLabel = useOpenPickerButtonAriaLabel3(value);
  const [focused, setFocused] = React54.useState(false);
  function focusField(newSelectedSections = 0) {
    if (disabled || !sectionListRef.current || // if the field is already focused, we don't need to focus it again
    getActiveSectionIndex(sectionListRef) != null) {
      return;
    }
    const newParsedSelectedSections = parseSelectedSections(newSelectedSections, state.sections);
    setFocused(true);
    sectionListRef.current.getSectionContent(newParsedSelectedSections).focus();
  }
  const rootProps = useFieldRootProps({
    manager,
    internalPropsWithDefaults,
    stateResponse,
    applyCharacterEditing,
    focused,
    setFocused,
    domGetters
  });
  const hiddenInputProps = useFieldHiddenInputProps({
    manager,
    stateResponse
  });
  const createSectionContainerProps = useFieldSectionContainerProps({
    stateResponse,
    internalPropsWithDefaults
  });
  const createSectionContentProps = useFieldSectionContentProps({
    manager,
    stateResponse,
    applyCharacterEditing,
    internalPropsWithDefaults,
    domGetters,
    focused
  });
  const handleRootKeyDown = useEventCallback_default((event) => {
    onKeyDown?.(event);
    rootProps.onKeyDown(event);
  });
  const handleRootBlur = useEventCallback_default((event) => {
    onBlur?.(event);
    rootProps.onBlur(event);
  });
  const handleRootFocus = useEventCallback_default((event) => {
    onFocus?.(event);
    rootProps.onFocus(event);
  });
  const handleRootClick = useEventCallback_default((event) => {
    if (event.isDefaultPrevented()) {
      return;
    }
    onClick?.(event);
    rootProps.onClick(event);
  });
  const handleRootPaste = useEventCallback_default((event) => {
    onPaste?.(event);
    rootProps.onPaste(event);
  });
  const handleRootInput = useEventCallback_default((event) => {
    onInput?.(event);
    rootProps.onInput(event);
  });
  const handleClear = useEventCallback_default((event, ...args) => {
    event.preventDefault();
    onClear?.(event, ...args);
    clearValue();
    if (!isFieldFocused(sectionListRef)) {
      focusField(0);
    } else {
      setSelectedSections(sectionOrder.startIndex);
    }
  });
  const elements = React54.useMemo(() => {
    return state.sections.map((section, sectionIndex) => {
      const content = createSectionContentProps(section, sectionIndex);
      return {
        container: createSectionContainerProps(sectionIndex),
        content: createSectionContentProps(section, sectionIndex),
        before: {
          children: section.startSeparator
        },
        after: {
          children: section.endSeparator,
          "data-range-position": section.isEndFormatSeparator ? content["data-range-position"] : void 0
        }
      };
    });
  }, [state.sections, createSectionContainerProps, createSectionContentProps]);
  React54.useEffect(() => {
    if (sectionListRef.current == null) {
      throw new Error(["MUI X: The `sectionListRef` prop has not been initialized by `PickersSectionList`", "You probably tried to pass a component to the `textField` slot that contains an `<input />` element instead of a `PickersSectionList`.", "", "If you want to keep using an `<input />` HTML element for the editing, please add the `enableAccessibleFieldDOMStructure={false}` prop to your Picker or Field component:", "", "<DatePicker enableAccessibleFieldDOMStructure={false} slots={{ textField: MyCustomTextField }} />", "", "Learn more about the field accessible DOM structure on the MUI documentation: https://mui.com/x/react-date-pickers/fields/#fields-to-edit-a-single-element"].join("\n"));
    }
    if (autoFocus && !disabled && sectionListRef.current) {
      sectionListRef.current.getSectionContent(sectionOrder.startIndex).focus();
    }
  }, []);
  useEnhancedEffect_default(() => {
    if (!focused || !sectionListRef.current) {
      return;
    }
    if (parsedSelectedSections === "all") {
      sectionListRef.current.getRoot().focus();
    } else if (typeof parsedSelectedSections === "number") {
      const domElement = sectionListRef.current.getSectionContent(parsedSelectedSections);
      if (domElement) {
        domElement.focus();
      }
    }
  }, [parsedSelectedSections, focused]);
  useEnhancedEffect_default(() => {
    syncSelectionToDOM({
      focused,
      domGetters,
      stateResponse
    });
  });
  React54.useImperativeHandle(unstableFieldRef, () => ({
    getSections: () => state.sections,
    getActiveSectionIndex: () => getActiveSectionIndex(sectionListRef),
    setSelectedSections: (newSelectedSections) => {
      if (disabled || !sectionListRef.current) {
        return;
      }
      const newParsedSelectedSections = parseSelectedSections(newSelectedSections, state.sections);
      const newActiveSectionIndex = newParsedSelectedSections === "all" ? 0 : newParsedSelectedSections;
      setFocused(newActiveSectionIndex !== null);
      setSelectedSections(newSelectedSections);
    },
    focusField,
    isFieldFocused: () => isFieldFocused(sectionListRef)
  }));
  return _extends({}, forwardedProps, rootProps, {
    onBlur: handleRootBlur,
    onClick: handleRootClick,
    onFocus: handleRootFocus,
    onInput: handleRootInput,
    onPaste: handleRootPaste,
    onKeyDown: handleRootKeyDown,
    onClear: handleClear
  }, hiddenInputProps, {
    error,
    clearable: Boolean(clearable && !areAllSectionsEmpty && !readOnly && !disabled),
    focused: focusedProp ?? focused,
    sectionListRef: handleSectionListRef,
    // Additional
    enableAccessibleFieldDOMStructure: true,
    elements,
    areAllSectionsEmpty,
    disabled,
    readOnly,
    autoFocus,
    openPickerAriaLabel
  });
};
function getActiveSectionIndex(sectionListRef) {
  const activeElement = getActiveElement(sectionListRef.current?.getRoot());
  if (!activeElement || !sectionListRef.current || !sectionListRef.current.getRoot().contains(activeElement)) {
    return null;
  }
  return sectionListRef.current.getSectionIndexFromDOMElement(activeElement);
}
function isFieldFocused(sectionListRef) {
  const activeElement = getActiveElement(sectionListRef.current?.getRoot());
  return !!sectionListRef.current && sectionListRef.current.getRoot().contains(activeElement);
}

// node_modules/.pnpm/@mui+x-date-pickers@8.26.0_@emotion+react@11.14.0_@types+react@19.2.7_react@19.2.3__@em_45e4fa7585d24d6c7a3cddedaa636f9d/node_modules/@mui/x-date-pickers/esm/internals/hooks/useField/useFieldV6TextField.js
var React55 = __toESM(require_react(), 1);
var cleanString = (dirtyString) => dirtyString.replace(/[\u2066\u2067\u2068\u2069]/g, "");
var addPositionPropertiesToSections = (sections, localizedDigits, isRtl) => {
  let position = 0;
  let positionInInput = isRtl ? 1 : 0;
  const newSections = [];
  for (let i = 0; i < sections.length; i += 1) {
    const section = sections[i];
    const renderedValue = getSectionVisibleValue(section, isRtl ? "input-rtl" : "input-ltr", localizedDigits);
    const sectionStr = `${section.startSeparator}${renderedValue}${section.endSeparator}`;
    const sectionLength = cleanString(sectionStr).length;
    const sectionLengthInInput = sectionStr.length;
    const cleanedValue = cleanString(renderedValue);
    const startInInput = positionInInput + (cleanedValue === "" ? 0 : renderedValue.indexOf(cleanedValue[0])) + section.startSeparator.length;
    const endInInput = startInInput + cleanedValue.length;
    newSections.push(_extends({}, section, {
      start: position,
      end: position + sectionLength,
      startInInput,
      endInInput
    }));
    position += sectionLength;
    positionInInput += sectionLengthInInput;
  }
  return newSections;
};
var useFieldV6TextField = (parameters) => {
  const isRtl = useRtl();
  const focusTimeout = useTimeout();
  const selectionSyncTimeout = useTimeout();
  const {
    props,
    manager,
    skipContextFieldRefAssignment,
    manager: {
      valueType,
      internal_valueManager: valueManager,
      internal_fieldValueManager: fieldValueManager,
      internal_useOpenPickerButtonAriaLabel: useOpenPickerButtonAriaLabel3
    }
  } = parameters;
  const {
    internalProps,
    forwardedProps
  } = useSplitFieldProps(props, valueType);
  const internalPropsWithDefaults = useFieldInternalPropsWithDefaults({
    manager,
    internalProps,
    skipContextFieldRefAssignment
  });
  const {
    onFocus,
    onClick,
    onPaste,
    onBlur,
    onKeyDown,
    onClear,
    clearable,
    inputRef: inputRefProp,
    placeholder: inPlaceholder
  } = forwardedProps;
  const {
    readOnly = false,
    disabled = false,
    autoFocus = false,
    focused,
    unstableFieldRef
  } = internalPropsWithDefaults;
  const inputRef = React55.useRef(null);
  const handleRef = useForkRef(inputRefProp, inputRef);
  const stateResponse = useFieldState({
    manager,
    internalPropsWithDefaults,
    forwardedProps
  });
  const {
    // States and derived states
    activeSectionIndex,
    areAllSectionsEmpty,
    error,
    localizedDigits,
    parsedSelectedSections,
    sectionOrder,
    state,
    value,
    // Methods to update the states
    clearValue,
    clearActiveSection,
    setCharacterQuery,
    setSelectedSections,
    setTempAndroidValueStr,
    updateSectionValue,
    updateValueFromValueStr,
    // Utilities methods
    getSectionsFromValue
  } = stateResponse;
  const applyCharacterEditing = useFieldCharacterEditing({
    stateResponse
  });
  const openPickerAriaLabel = useOpenPickerButtonAriaLabel3(value);
  const sections = React55.useMemo(() => addPositionPropertiesToSections(state.sections, localizedDigits, isRtl), [state.sections, localizedDigits, isRtl]);
  function syncSelectionFromDOM() {
    const browserStartIndex = inputRef.current.selectionStart ?? 0;
    let nextSectionIndex;
    if (browserStartIndex <= sections[0].startInInput) {
      nextSectionIndex = 1;
    } else if (browserStartIndex >= sections[sections.length - 1].endInInput) {
      nextSectionIndex = 1;
    } else {
      nextSectionIndex = sections.findIndex((section) => section.startInInput - section.startSeparator.length > browserStartIndex);
    }
    const sectionIndex = nextSectionIndex === -1 ? sections.length - 1 : nextSectionIndex - 1;
    setSelectedSections(sectionIndex);
  }
  function focusField(newSelectedSection = 0) {
    if (getActiveElement(inputRef.current) === inputRef.current) {
      return;
    }
    inputRef.current?.focus();
    setSelectedSections(newSelectedSection);
  }
  const handleInputFocus = useEventCallback_default((event) => {
    onFocus?.(event);
    const input = inputRef.current;
    focusTimeout.start(0, () => {
      if (!input || input !== inputRef.current) {
        return;
      }
      if (activeSectionIndex != null) {
        return;
      }
      if (
        // avoid selecting all sections when focusing empty field without value
        input.value.length && Number(input.selectionEnd) - Number(input.selectionStart) === input.value.length
      ) {
        setSelectedSections("all");
      } else {
        syncSelectionFromDOM();
      }
    });
  });
  const handleInputClick = useEventCallback_default((event, ...args) => {
    if (event.isDefaultPrevented()) {
      return;
    }
    onClick?.(event, ...args);
    syncSelectionFromDOM();
  });
  const handleInputPaste = useEventCallback_default((event) => {
    onPaste?.(event);
    event.preventDefault();
    if (readOnly || disabled) {
      return;
    }
    const pastedValue = event.clipboardData.getData("text");
    if (typeof parsedSelectedSections === "number") {
      const activeSection = state.sections[parsedSelectedSections];
      const lettersOnly = /^[a-zA-Z]+$/.test(pastedValue);
      const digitsOnly = /^[0-9]+$/.test(pastedValue);
      const digitsAndLetterOnly = /^(([a-zA-Z]+)|)([0-9]+)(([a-zA-Z]+)|)$/.test(pastedValue);
      const isValidPastedValue = activeSection.contentType === "letter" && lettersOnly || activeSection.contentType === "digit" && digitsOnly || activeSection.contentType === "digit-with-letter" && digitsAndLetterOnly;
      if (isValidPastedValue) {
        setCharacterQuery(null);
        updateSectionValue({
          section: activeSection,
          newSectionValue: pastedValue,
          shouldGoToNextSection: true
        });
        return;
      }
      if (lettersOnly || digitsOnly) {
        return;
      }
    }
    setCharacterQuery(null);
    updateValueFromValueStr(pastedValue);
  });
  const handleContainerBlur = useEventCallback_default((event) => {
    onBlur?.(event);
    setSelectedSections(null);
  });
  const handleInputChange = useEventCallback_default((event) => {
    if (readOnly) {
      return;
    }
    const targetValue = event.target.value;
    if (targetValue === "") {
      clearValue();
      return;
    }
    const eventData = event.nativeEvent.data;
    const shouldUseEventData = eventData && eventData.length > 1;
    const valueStr2 = shouldUseEventData ? eventData : targetValue;
    const cleanValueStr = cleanString(valueStr2);
    if (parsedSelectedSections === "all") {
      setSelectedSections(activeSectionIndex);
    }
    if (activeSectionIndex == null || shouldUseEventData) {
      updateValueFromValueStr(shouldUseEventData ? eventData : cleanValueStr);
      return;
    }
    let keyPressed;
    if (parsedSelectedSections === "all" && cleanValueStr.length === 1) {
      keyPressed = cleanValueStr;
    } else {
      const prevValueStr = cleanString(fieldValueManager.getV6InputValueFromSections(sections, localizedDigits, isRtl));
      let startOfDiffIndex = -1;
      let endOfDiffIndex = -1;
      for (let i = 0; i < prevValueStr.length; i += 1) {
        if (startOfDiffIndex === -1 && prevValueStr[i] !== cleanValueStr[i]) {
          startOfDiffIndex = i;
        }
        if (endOfDiffIndex === -1 && prevValueStr[prevValueStr.length - i - 1] !== cleanValueStr[cleanValueStr.length - i - 1]) {
          endOfDiffIndex = i;
        }
      }
      const activeSection = sections[activeSectionIndex];
      const hasDiffOutsideOfActiveSection = startOfDiffIndex < activeSection.start || prevValueStr.length - endOfDiffIndex - 1 > activeSection.end;
      if (hasDiffOutsideOfActiveSection) {
        return;
      }
      const activeSectionEndRelativeToNewValue = cleanValueStr.length - prevValueStr.length + activeSection.end - cleanString(activeSection.endSeparator || "").length;
      keyPressed = cleanValueStr.slice(activeSection.start + cleanString(activeSection.startSeparator || "").length, activeSectionEndRelativeToNewValue);
    }
    if (keyPressed.length === 0) {
      if (isAndroid()) {
        setTempAndroidValueStr(valueStr2);
      }
      clearActiveSection();
      return;
    }
    applyCharacterEditing({
      keyPressed,
      sectionIndex: activeSectionIndex
    });
  });
  const handleClear = useEventCallback_default((event, ...args) => {
    event.preventDefault();
    onClear?.(event, ...args);
    clearValue();
    if (!isFieldFocused2(inputRef)) {
      focusField(0);
    } else {
      setSelectedSections(sectionOrder.startIndex);
    }
  });
  const handleContainerKeyDown = useFieldRootHandleKeyDown({
    manager,
    internalPropsWithDefaults,
    stateResponse
  });
  const wrappedHandleContainerKeyDown = useEventCallback_default((event) => {
    onKeyDown?.(event);
    handleContainerKeyDown(event);
  });
  const placeholder = React55.useMemo(() => {
    if (inPlaceholder !== void 0) {
      return inPlaceholder;
    }
    return fieldValueManager.getV6InputValueFromSections(getSectionsFromValue(valueManager.emptyValue), localizedDigits, isRtl);
  }, [inPlaceholder, fieldValueManager, getSectionsFromValue, valueManager.emptyValue, localizedDigits, isRtl]);
  const valueStr = React55.useMemo(() => state.tempValueStrAndroid ?? fieldValueManager.getV6InputValueFromSections(state.sections, localizedDigits, isRtl), [state.sections, fieldValueManager, state.tempValueStrAndroid, localizedDigits, isRtl]);
  React55.useEffect(() => {
    if (inputRef.current && inputRef.current === getActiveElement(inputRef.current)) {
      setSelectedSections("all");
    }
  }, []);
  useEnhancedEffect_default(() => {
    function syncSelectionToDOM2() {
      if (!inputRef.current) {
        return;
      }
      if (parsedSelectedSections == null) {
        if (inputRef.current.scrollLeft) {
          inputRef.current.scrollLeft = 0;
        }
        return;
      }
      if (inputRef.current !== getActiveElement(inputRef.current)) {
        return;
      }
      const currentScrollTop = inputRef.current.scrollTop;
      if (parsedSelectedSections === "all") {
        inputRef.current.select();
      } else {
        const selectedSection = sections[parsedSelectedSections];
        const selectionStart = selectedSection.type === "empty" ? selectedSection.startInInput - selectedSection.startSeparator.length : selectedSection.startInInput;
        const selectionEnd = selectedSection.type === "empty" ? selectedSection.endInInput + selectedSection.endSeparator.length : selectedSection.endInInput;
        if (selectionStart !== inputRef.current.selectionStart || selectionEnd !== inputRef.current.selectionEnd) {
          if (inputRef.current === getActiveElement(inputRef.current)) {
            inputRef.current.setSelectionRange(selectionStart, selectionEnd);
          }
        }
        selectionSyncTimeout.start(0, () => {
          if (inputRef.current && inputRef.current === getActiveElement(inputRef.current) && // The section might loose all selection, where `selectionStart === selectionEnd`
          // https://github.com/mui/mui-x/pull/13652
          inputRef.current.selectionStart === inputRef.current.selectionEnd && (inputRef.current.selectionStart !== selectionStart || inputRef.current.selectionEnd !== selectionEnd)) {
            syncSelectionToDOM2();
          }
        });
      }
      inputRef.current.scrollTop = currentScrollTop;
    }
    syncSelectionToDOM2();
  });
  const inputMode = React55.useMemo(() => {
    if (activeSectionIndex == null) {
      return "text";
    }
    if (state.sections[activeSectionIndex].contentType === "letter") {
      return "text";
    }
    return "numeric";
  }, [activeSectionIndex, state.sections]);
  const inputHasFocus = inputRef.current && inputRef.current === getActiveElement(inputRef.current);
  const shouldShowPlaceholder = !inputHasFocus && areAllSectionsEmpty;
  React55.useImperativeHandle(unstableFieldRef, () => ({
    getSections: () => state.sections,
    getActiveSectionIndex: () => {
      const browserStartIndex = inputRef.current.selectionStart ?? 0;
      const browserEndIndex = inputRef.current.selectionEnd ?? 0;
      if (browserStartIndex === 0 && browserEndIndex === 0) {
        return null;
      }
      const nextSectionIndex = browserStartIndex <= sections[0].startInInput ? 1 : sections.findIndex((section) => section.startInInput - section.startSeparator.length > browserStartIndex);
      return nextSectionIndex === -1 ? sections.length - 1 : nextSectionIndex - 1;
    },
    setSelectedSections: (newSelectedSections) => setSelectedSections(newSelectedSections),
    focusField,
    isFieldFocused: () => isFieldFocused2(inputRef)
  }));
  return _extends({}, forwardedProps, {
    error,
    "aria-invalid": error,
    clearable: Boolean(clearable && !areAllSectionsEmpty && !readOnly && !disabled),
    onBlur: handleContainerBlur,
    onClick: handleInputClick,
    onFocus: handleInputFocus,
    onPaste: handleInputPaste,
    onKeyDown: wrappedHandleContainerKeyDown,
    onClear: handleClear,
    inputRef: handleRef,
    // Additional
    enableAccessibleFieldDOMStructure: false,
    placeholder,
    inputMode,
    autoComplete: "off",
    value: shouldShowPlaceholder ? "" : valueStr,
    onChange: handleInputChange,
    focused,
    disabled,
    readOnly,
    autoFocus,
    openPickerAriaLabel
  });
};
function isFieldFocused2(inputRef) {
  return inputRef.current === getActiveElement(inputRef.current);
}

// node_modules/.pnpm/@mui+x-date-pickers@8.26.0_@emotion+react@11.14.0_@types+react@19.2.7_react@19.2.3__@em_45e4fa7585d24d6c7a3cddedaa636f9d/node_modules/@mui/x-date-pickers/esm/internals/hooks/useField/useField.js
var useField = (parameters) => {
  const fieldPrivateContext = useNullableFieldPrivateContext();
  const enableAccessibleFieldDOMStructure = parameters.props.enableAccessibleFieldDOMStructure ?? fieldPrivateContext?.enableAccessibleFieldDOMStructure ?? true;
  const useFieldTextField = enableAccessibleFieldDOMStructure ? useFieldV7TextField : useFieldV6TextField;
  return useFieldTextField(parameters);
};

// node_modules/.pnpm/@mui+x-date-pickers@8.26.0_@emotion+react@11.14.0_@types+react@19.2.7_react@19.2.3__@em_45e4fa7585d24d6c7a3cddedaa636f9d/node_modules/@mui/x-date-pickers/esm/managers/useTimeManager.js
var React56 = __toESM(require_react(), 1);

// node_modules/.pnpm/@mui+x-date-pickers@8.26.0_@emotion+react@11.14.0_@types+react@19.2.7_react@19.2.3__@em_45e4fa7585d24d6c7a3cddedaa636f9d/node_modules/@mui/x-date-pickers/esm/managers/useDateTimeManager.js
var React57 = __toESM(require_react(), 1);
function useDateTimeManager(parameters = {}) {
  const {
    enableAccessibleFieldDOMStructure = true
  } = parameters;
  return React57.useMemo(() => ({
    valueType: "date-time",
    validator: validateDateTime,
    internal_valueManager: singleItemValueManager,
    internal_fieldValueManager: singleItemFieldValueManager,
    internal_enableAccessibleFieldDOMStructure: enableAccessibleFieldDOMStructure,
    internal_useApplyDefaultValuesToFieldInternalProps: useApplyDefaultValuesToDateTimeFieldInternalProps,
    internal_useOpenPickerButtonAriaLabel: useOpenPickerButtonAriaLabel2
  }), [enableAccessibleFieldDOMStructure]);
}
function useOpenPickerButtonAriaLabel2(value) {
  const adapter = usePickerAdapter();
  const translations = usePickerTranslations();
  return React57.useMemo(() => {
    const formattedValue = adapter.isValid(value) ? adapter.format(value, "fullDate") : null;
    return translations.openDatePickerDialogue(formattedValue);
  }, [value, translations, adapter]);
}
function useApplyDefaultValuesToDateTimeFieldInternalProps(internalProps) {
  const adapter = usePickerAdapter();
  const validationProps = useApplyDefaultValuesToDateTimeValidationProps(internalProps);
  const ampm = React57.useMemo(() => internalProps.ampm ?? adapter.is12HourCycleInCurrentLocale(), [internalProps.ampm, adapter]);
  return React57.useMemo(() => _extends({}, internalProps, validationProps, {
    format: internalProps.format ?? (ampm ? adapter.formats.keyboardDateTime12h : adapter.formats.keyboardDateTime24h)
  }), [internalProps, validationProps, ampm, adapter]);
}
function useApplyDefaultValuesToDateTimeValidationProps(props) {
  const adapter = usePickerAdapter();
  const defaultDates = useDefaultDates();
  return React57.useMemo(() => ({
    disablePast: props.disablePast ?? false,
    disableFuture: props.disableFuture ?? false,
    // TODO: Explore if we can remove it from the public API
    disableIgnoringDatePartForTimeValidation: !!props.minDateTime || !!props.maxDateTime || !!props.disableFuture || !!props.disablePast,
    minDate: applyDefaultDate(adapter, props.minDateTime ?? props.minDate, defaultDates.minDate),
    maxDate: applyDefaultDate(adapter, props.maxDateTime ?? props.maxDate, defaultDates.maxDate),
    minTime: props.minDateTime ?? props.minTime,
    maxTime: props.maxDateTime ?? props.maxTime
  }), [props.minDateTime, props.maxDateTime, props.minTime, props.maxTime, props.minDate, props.maxDate, props.disableFuture, props.disablePast, adapter, defaultDates]);
}

// node_modules/.pnpm/@mui+x-date-pickers@8.26.0_@emotion+react@11.14.0_@types+react@19.2.7_react@19.2.3__@em_45e4fa7585d24d6c7a3cddedaa636f9d/node_modules/@mui/x-date-pickers/esm/DateField/useDateField.js
var useDateField = (props) => {
  const manager = useDateManager(props);
  return useField({
    manager,
    props
  });
};

// node_modules/.pnpm/@mui+x-date-pickers@8.26.0_@emotion+react@11.14.0_@types+react@19.2.7_react@19.2.3__@em_45e4fa7585d24d6c7a3cddedaa636f9d/node_modules/@mui/x-date-pickers/esm/internals/components/PickerFieldUI.js
var React68 = __toESM(require_react(), 1);

// node_modules/.pnpm/@mui+x-date-pickers@8.26.0_@emotion+react@11.14.0_@types+react@19.2.7_react@19.2.3__@em_45e4fa7585d24d6c7a3cddedaa636f9d/node_modules/@mui/x-date-pickers/esm/internals/hooks/useFieldOwnerState.js
var React58 = __toESM(require_react(), 1);
function useFieldOwnerState(parameters) {
  const {
    ownerState: pickerOwnerState
  } = usePickerPrivateContext();
  const isRtl = useRtl();
  return React58.useMemo(() => _extends({}, pickerOwnerState, {
    isFieldDisabled: parameters.disabled ?? false,
    isFieldReadOnly: parameters.readOnly ?? false,
    isFieldRequired: parameters.required ?? false,
    fieldDirection: isRtl ? "rtl" : "ltr"
  }), [pickerOwnerState, parameters.disabled, parameters.readOnly, parameters.required, isRtl]);
}

// node_modules/.pnpm/@mui+x-date-pickers@8.26.0_@emotion+react@11.14.0_@types+react@19.2.7_react@19.2.3__@em_45e4fa7585d24d6c7a3cddedaa636f9d/node_modules/@mui/x-date-pickers/esm/icons/index.js
var React59 = __toESM(require_react(), 1);
var import_jsx_runtime35 = __toESM(require_jsx_runtime(), 1);
var ArrowDropDownIcon = createSvgIcon((0, import_jsx_runtime35.jsx)("path", {
  d: "M7 10l5 5 5-5z"
}), "ArrowDropDown");
var ArrowLeftIcon = createSvgIcon((0, import_jsx_runtime35.jsx)("path", {
  d: "M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"
}), "ArrowLeft");
var ArrowRightIcon = createSvgIcon((0, import_jsx_runtime35.jsx)("path", {
  d: "M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"
}), "ArrowRight");
var CalendarIcon = createSvgIcon((0, import_jsx_runtime35.jsx)("path", {
  d: "M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z"
}), "Calendar");
var ClockIcon = createSvgIcon((0, import_jsx_runtime35.jsxs)(React59.Fragment, {
  children: [(0, import_jsx_runtime35.jsx)("path", {
    d: "M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
  }), (0, import_jsx_runtime35.jsx)("path", {
    d: "M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"
  })]
}), "Clock");
var DateRangeIcon = createSvgIcon((0, import_jsx_runtime35.jsx)("path", {
  d: "M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z"
}), "DateRange");
var TimeIcon = createSvgIcon((0, import_jsx_runtime35.jsxs)(React59.Fragment, {
  children: [(0, import_jsx_runtime35.jsx)("path", {
    d: "M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
  }), (0, import_jsx_runtime35.jsx)("path", {
    d: "M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"
  })]
}), "Time");
var ClearIcon = createSvgIcon((0, import_jsx_runtime35.jsx)("path", {
  d: "M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
}), "Clear");

// node_modules/.pnpm/@mui+x-date-pickers@8.26.0_@emotion+react@11.14.0_@types+react@19.2.7_react@19.2.3__@em_45e4fa7585d24d6c7a3cddedaa636f9d/node_modules/@mui/x-date-pickers/esm/PickersTextField/PickersTextField.js
var React67 = __toESM(require_react(), 1);
var import_prop_types12 = __toESM(require_prop_types(), 1);

// node_modules/.pnpm/@mui+x-date-pickers@8.26.0_@emotion+react@11.14.0_@types+react@19.2.7_react@19.2.3__@em_45e4fa7585d24d6c7a3cddedaa636f9d/node_modules/@mui/x-date-pickers/esm/PickersTextField/pickersTextFieldClasses.js
function getPickersTextFieldUtilityClass(slot) {
  return generateUtilityClass("MuiPickersTextField", slot);
}
var pickersTextFieldClasses = generateUtilityClasses("MuiPickersTextField", ["root", "focused", "disabled", "error", "required"]);

// node_modules/.pnpm/@mui+x-date-pickers@8.26.0_@emotion+react@11.14.0_@types+react@19.2.7_react@19.2.3__@em_45e4fa7585d24d6c7a3cddedaa636f9d/node_modules/@mui/x-date-pickers/esm/PickersTextField/PickersOutlinedInput/PickersOutlinedInput.js
var React64 = __toESM(require_react(), 1);
var import_prop_types9 = __toESM(require_prop_types(), 1);

// node_modules/.pnpm/@mui+x-date-pickers@8.26.0_@emotion+react@11.14.0_@types+react@19.2.7_react@19.2.3__@em_45e4fa7585d24d6c7a3cddedaa636f9d/node_modules/@mui/x-date-pickers/esm/PickersTextField/PickersInputBase/PickersInputBase.js
var React62 = __toESM(require_react(), 1);
var import_prop_types8 = __toESM(require_prop_types(), 1);

// node_modules/.pnpm/@mui+x-date-pickers@8.26.0_@emotion+react@11.14.0_@types+react@19.2.7_react@19.2.3__@em_45e4fa7585d24d6c7a3cddedaa636f9d/node_modules/@mui/x-date-pickers/esm/PickersTextField/PickersInputBase/pickersInputBaseClasses.js
function getPickersInputBaseUtilityClass(slot) {
  return generateUtilityClass("MuiPickersInputBase", slot);
}
var pickersInputBaseClasses = generateUtilityClasses("MuiPickersInputBase", ["root", "focused", "disabled", "error", "notchedOutline", "sectionContent", "sectionBefore", "sectionAfter", "adornedStart", "adornedEnd", "input", "inputSizeSmall", "activeBar"]);

// node_modules/.pnpm/@mui+x-date-pickers@8.26.0_@emotion+react@11.14.0_@types+react@19.2.7_react@19.2.3__@em_45e4fa7585d24d6c7a3cddedaa636f9d/node_modules/@mui/x-date-pickers/esm/PickersSectionList/PickersSectionList.js
var React60 = __toESM(require_react(), 1);
var import_prop_types7 = __toESM(require_prop_types(), 1);

// node_modules/.pnpm/@mui+x-date-pickers@8.26.0_@emotion+react@11.14.0_@types+react@19.2.7_react@19.2.3__@em_45e4fa7585d24d6c7a3cddedaa636f9d/node_modules/@mui/x-date-pickers/esm/PickersSectionList/pickersSectionListClasses.js
function getPickersSectionListUtilityClass(slot) {
  return generateUtilityClass("MuiPickersSectionList", slot);
}
var pickersSectionListClasses = generateUtilityClasses("MuiPickersSectionList", ["root", "section", "sectionContent"]);

// node_modules/.pnpm/@mui+x-date-pickers@8.26.0_@emotion+react@11.14.0_@types+react@19.2.7_react@19.2.3__@em_45e4fa7585d24d6c7a3cddedaa636f9d/node_modules/@mui/x-date-pickers/esm/PickersSectionList/PickersSectionList.js
var import_jsx_runtime36 = __toESM(require_jsx_runtime(), 1);
var _excluded11 = ["slots", "slotProps", "elements", "sectionListRef", "classes"];
var PickersSectionListRoot = styled_default("div", {
  name: "MuiPickersSectionList",
  slot: "Root"
})({
  direction: "ltr /*! @noflip */",
  outline: "none"
});
var PickersSectionListSection = styled_default("span", {
  name: "MuiPickersSectionList",
  slot: "Section"
})({});
var PickersSectionListSectionSeparator = styled_default("span", {
  name: "MuiPickersSectionList",
  slot: "SectionSeparator"
})({
  whiteSpace: "pre"
});
var PickersSectionListSectionContent = styled_default("span", {
  name: "MuiPickersSectionList",
  slot: "SectionContent"
})({
  outline: "none"
});
var useUtilityClasses6 = (classes) => {
  const slots = {
    root: ["root"],
    section: ["section"],
    sectionContent: ["sectionContent"]
  };
  return composeClasses(slots, getPickersSectionListUtilityClass, classes);
};
function PickersSection(props) {
  const {
    slots,
    slotProps,
    element,
    classes
  } = props;
  const {
    ownerState
  } = usePickerPrivateContext();
  const Section = slots?.section ?? PickersSectionListSection;
  const sectionProps = useSlotProps_default({
    elementType: Section,
    externalSlotProps: slotProps?.section,
    externalForwardedProps: element.container,
    className: classes.section,
    ownerState
  });
  const SectionContent = slots?.sectionContent ?? PickersSectionListSectionContent;
  const sectionContentProps = useSlotProps_default({
    elementType: SectionContent,
    externalSlotProps: slotProps?.sectionContent,
    externalForwardedProps: element.content,
    additionalProps: {
      suppressContentEditableWarning: true
    },
    className: classes.sectionContent,
    ownerState
  });
  const SectionSeparator = slots?.sectionSeparator ?? PickersSectionListSectionSeparator;
  const sectionSeparatorBeforeProps = useSlotProps_default({
    elementType: SectionSeparator,
    externalSlotProps: slotProps?.sectionSeparator,
    externalForwardedProps: element.before,
    ownerState: _extends({}, ownerState, {
      separatorPosition: "before"
    })
  });
  const sectionSeparatorAfterProps = useSlotProps_default({
    elementType: SectionSeparator,
    externalSlotProps: slotProps?.sectionSeparator,
    externalForwardedProps: element.after,
    ownerState: _extends({}, ownerState, {
      separatorPosition: "after"
    })
  });
  const sectionContentRef = React60.useRef(null);
  const handleSectionContentRef = useForkRef(sectionContentProps.ref, sectionContentRef);
  const handleContentBlur = (event) => {
    const next = event.relatedTarget;
    const root = event.currentTarget.closest(`.${pickersSectionListClasses.root}`);
    if (root && next instanceof Node && root.contains(next)) {
      event.stopPropagation();
      return;
    }
  };
  return (0, import_jsx_runtime36.jsxs)(Section, _extends({}, sectionProps, {
    children: [(0, import_jsx_runtime36.jsx)(SectionSeparator, _extends({}, sectionSeparatorBeforeProps)), (0, import_jsx_runtime36.jsx)(SectionContent, _extends({}, sectionContentProps, {
      ref: handleSectionContentRef,
      onBlur: handleContentBlur
    })), (0, import_jsx_runtime36.jsx)(SectionSeparator, _extends({}, sectionSeparatorAfterProps))]
  }));
}
true ? PickersSection.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  classes: import_prop_types7.default.object.isRequired,
  element: import_prop_types7.default.shape({
    after: import_prop_types7.default.object.isRequired,
    before: import_prop_types7.default.object.isRequired,
    container: import_prop_types7.default.object.isRequired,
    content: import_prop_types7.default.object.isRequired
  }).isRequired,
  /**
   * The props used for each component slot.
   */
  slotProps: import_prop_types7.default.object,
  /**
   * Overridable component slots.
   */
  slots: import_prop_types7.default.object
} : void 0;
var PickersSectionList = React60.forwardRef(function PickersSectionList2(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiPickersSectionList"
  });
  const {
    slots,
    slotProps,
    elements,
    sectionListRef,
    classes: classesProp
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded11);
  const classes = useUtilityClasses6(classesProp);
  const {
    ownerState
  } = usePickerPrivateContext();
  const rootRef = React60.useRef(null);
  const handleRootRef = useForkRef(ref, rootRef);
  const getRoot = (methodName) => {
    if (!rootRef.current) {
      throw new Error(`MUI X: Cannot call sectionListRef.${methodName} before the mount of the component.`);
    }
    return rootRef.current;
  };
  React60.useImperativeHandle(sectionListRef, () => ({
    getRoot() {
      return getRoot("getRoot");
    },
    getSectionContainer(index) {
      const root = getRoot("getSectionContainer");
      return root.querySelector(`.${pickersSectionListClasses.section}[data-sectionindex="${index}"]`);
    },
    getSectionContent(index) {
      const root = getRoot("getSectionContent");
      return root.querySelector(`.${pickersSectionListClasses.section}[data-sectionindex="${index}"] .${pickersSectionListClasses.sectionContent}`);
    },
    getSectionIndexFromDOMElement(element) {
      const root = getRoot("getSectionIndexFromDOMElement");
      if (element == null || !root.contains(element)) {
        return null;
      }
      let sectionContainer = null;
      if (element.classList.contains(pickersSectionListClasses.section)) {
        sectionContainer = element;
      } else if (element.classList.contains(pickersSectionListClasses.sectionContent)) {
        sectionContainer = element.parentElement;
      }
      if (sectionContainer == null) {
        return null;
      }
      return Number(sectionContainer.dataset.sectionindex);
    }
  }));
  const Root = slots?.root ?? PickersSectionListRoot;
  const rootProps = useSlotProps_default({
    elementType: Root,
    externalSlotProps: slotProps?.root,
    externalForwardedProps: other,
    additionalProps: {
      ref: handleRootRef,
      suppressContentEditableWarning: true
    },
    className: classes.root,
    ownerState
  });
  return (0, import_jsx_runtime36.jsx)(Root, _extends({}, rootProps, {
    children: rootProps.contentEditable ? elements.map(({
      content,
      before,
      after
    }) => `${before.children}${content.children}${after.children}`).join("") : (0, import_jsx_runtime36.jsx)(React60.Fragment, {
      children: elements.map((element, elementIndex) => (0, import_jsx_runtime36.jsx)(PickersSection, {
        slots,
        slotProps,
        element,
        classes
      }, elementIndex))
    })
  }));
});
if (true) PickersSectionList.displayName = "PickersSectionList";
true ? PickersSectionList.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * Override or extend the styles applied to the component.
   */
  classes: import_prop_types7.default.object,
  /**
   * If true, the whole element is editable.
   * Useful when all the sections are selected.
   */
  contentEditable: import_prop_types7.default.bool.isRequired,
  /**
   * The elements to render.
   * Each element contains the prop to edit a section of the value.
   */
  elements: import_prop_types7.default.arrayOf(import_prop_types7.default.shape({
    after: import_prop_types7.default.object.isRequired,
    before: import_prop_types7.default.object.isRequired,
    container: import_prop_types7.default.object.isRequired,
    content: import_prop_types7.default.object.isRequired
  })).isRequired,
  sectionListRef: import_prop_types7.default.oneOfType([import_prop_types7.default.func, import_prop_types7.default.shape({
    current: import_prop_types7.default.shape({
      getRoot: import_prop_types7.default.func.isRequired,
      getSectionContainer: import_prop_types7.default.func.isRequired,
      getSectionContent: import_prop_types7.default.func.isRequired,
      getSectionIndexFromDOMElement: import_prop_types7.default.func.isRequired
    })
  })]),
  /**
   * The props used for each component slot.
   */
  slotProps: import_prop_types7.default.object,
  /**
   * Overridable component slots.
   */
  slots: import_prop_types7.default.object
} : void 0;

// node_modules/.pnpm/@mui+x-date-pickers@8.26.0_@emotion+react@11.14.0_@types+react@19.2.7_react@19.2.3__@em_45e4fa7585d24d6c7a3cddedaa636f9d/node_modules/@mui/x-date-pickers/esm/PickersTextField/usePickerTextFieldOwnerState.js
var React61 = __toESM(require_react(), 1);
var PickerTextFieldOwnerStateContext = React61.createContext(null);
if (true) PickerTextFieldOwnerStateContext.displayName = "PickerTextFieldOwnerStateContext";
var usePickerTextFieldOwnerState = () => {
  const value = React61.useContext(PickerTextFieldOwnerStateContext);
  if (value == null) {
    throw new Error(["MUI X: The `usePickerTextFieldOwnerState` can only be called in components that are used inside a PickerTextField component"].join("\n"));
  }
  return value;
};

// node_modules/.pnpm/@mui+x-date-pickers@8.26.0_@emotion+react@11.14.0_@types+react@19.2.7_react@19.2.3__@em_45e4fa7585d24d6c7a3cddedaa636f9d/node_modules/@mui/x-date-pickers/esm/PickersTextField/PickersInputBase/PickersInputBase.js
var import_jsx_runtime37 = __toESM(require_jsx_runtime(), 1);
var _excluded12 = ["elements", "areAllSectionsEmpty", "defaultValue", "label", "value", "onChange", "id", "autoFocus", "endAdornment", "startAdornment", "renderSuffix", "slots", "slotProps", "contentEditable", "tabIndex", "onInput", "onPaste", "onKeyDown", "fullWidth", "name", "readOnly", "inputProps", "inputRef", "sectionListRef", "onFocus", "onBlur", "classes", "ownerState"];
var round = (value) => Math.round(value * 1e5) / 1e5;
var PickersInputBaseRoot = styled_default("div", {
  name: "MuiPickersInputBase",
  slot: "Root"
})(({
  theme
}) => _extends({}, theme.typography.body1, {
  color: (theme.vars || theme).palette.text.primary,
  cursor: "text",
  padding: 0,
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  position: "relative",
  boxSizing: "border-box",
  // Prevent padding issue with fullWidth.
  letterSpacing: `${round(0.15 / 16)}em`,
  variants: [{
    props: {
      isInputInFullWidth: true
    },
    style: {
      width: "100%"
    }
  }]
}));
var PickersInputBaseSectionsContainer = styled_default(PickersSectionListRoot, {
  name: "MuiPickersInputBase",
  slot: "SectionsContainer"
})(({
  theme
}) => ({
  padding: "4px 0 5px",
  fontFamily: theme.typography.fontFamily,
  fontSize: "inherit",
  lineHeight: "1.4375em",
  // 23px
  flexGrow: 1,
  outline: "none",
  display: "flex",
  flexWrap: "nowrap",
  overflow: "hidden",
  letterSpacing: "inherit",
  // Baseline behavior
  width: "182px",
  variants: [{
    props: {
      fieldDirection: "rtl"
    },
    style: {
      justifyContent: "end"
    }
  }, {
    props: {
      inputSize: "small"
    },
    style: {
      paddingTop: 1
    }
  }, {
    props: {
      hasStartAdornment: false,
      isFieldFocused: false,
      isFieldValueEmpty: true
    },
    style: {
      color: "currentColor",
      opacity: 0
    }
  }, {
    props: {
      hasStartAdornment: false,
      isFieldFocused: false,
      isFieldValueEmpty: true,
      inputHasLabel: false
    },
    style: theme.vars ? {
      opacity: theme.vars.opacity.inputPlaceholder
    } : {
      opacity: theme.palette.mode === "light" ? 0.42 : 0.5
    }
  }, {
    props: {
      hasStartAdornment: false,
      isFieldFocused: false,
      isFieldValueEmpty: true,
      inputHasLabel: true,
      isLabelShrunk: true
    },
    style: theme.vars ? {
      opacity: theme.vars.opacity.inputPlaceholder
    } : {
      opacity: theme.palette.mode === "light" ? 0.42 : 0.5
    }
  }]
}));
var PickersInputBaseSection = styled_default(PickersSectionListSection, {
  name: "MuiPickersInputBase",
  slot: "Section"
})(({
  theme
}) => ({
  fontFamily: theme.typography.fontFamily,
  fontSize: "inherit",
  letterSpacing: "inherit",
  lineHeight: "1.4375em",
  // 23px
  display: "inline-block",
  whiteSpace: "nowrap"
}));
var PickersInputBaseSectionContent = styled_default(PickersSectionListSectionContent, {
  name: "MuiPickersInputBase",
  slot: "SectionContent",
  overridesResolver: (props, styles) => styles.content
  // FIXME: Inconsistent naming with slot
})(({
  theme
}) => ({
  fontFamily: theme.typography.fontFamily,
  lineHeight: "1.4375em",
  // 23px
  letterSpacing: "inherit",
  width: "fit-content",
  outline: "none"
}));
var PickersInputBaseSectionSeparator = styled_default(PickersSectionListSectionSeparator, {
  name: "MuiPickersInputBase",
  slot: "Separator"
})(() => ({
  whiteSpace: "pre",
  letterSpacing: "inherit"
}));
var PickersInputBaseInput = styled_default("input", {
  name: "MuiPickersInputBase",
  slot: "Input",
  overridesResolver: (props, styles) => styles.hiddenInput
  // FIXME: Inconsistent naming with slot
})(_extends({}, visuallyHidden_default));
var PickersInputBaseActiveBar = styled_default("div", {
  name: "MuiPickersInputBase",
  slot: "ActiveBar"
})(({
  theme,
  ownerState
}) => ({
  display: "none",
  position: "absolute",
  height: 2,
  bottom: 2,
  borderTopLeftRadius: 2,
  borderTopRightRadius: 2,
  transition: theme.transitions.create(["width", "left"], {
    duration: theme.transitions.duration.shortest
  }),
  backgroundColor: (theme.vars || theme).palette.primary.main,
  '[data-active-range-position="start"] &, [data-active-range-position="end"] &': {
    display: "block"
  },
  '[data-active-range-position="start"] &': {
    left: ownerState.sectionOffsets[0]
  },
  '[data-active-range-position="end"] &': {
    left: ownerState.sectionOffsets[1]
  }
}));
var useUtilityClasses7 = (classes, ownerState) => {
  const {
    isFieldFocused: isFieldFocused3,
    isFieldDisabled,
    isFieldReadOnly,
    hasFieldError,
    inputSize,
    isInputInFullWidth,
    inputColor,
    hasStartAdornment,
    hasEndAdornment
  } = ownerState;
  const slots = {
    root: ["root", isFieldFocused3 && !isFieldDisabled && "focused", isFieldDisabled && "disabled", isFieldReadOnly && "readOnly", hasFieldError && "error", isInputInFullWidth && "fullWidth", `color${capitalize(inputColor)}`, inputSize === "small" && "inputSizeSmall", hasStartAdornment && "adornedStart", hasEndAdornment && "adornedEnd"],
    notchedOutline: ["notchedOutline"],
    input: ["input"],
    sectionsContainer: ["sectionsContainer"],
    sectionContent: ["sectionContent"],
    sectionBefore: ["sectionBefore"],
    sectionAfter: ["sectionAfter"],
    activeBar: ["activeBar"]
  };
  return composeClasses(slots, getPickersInputBaseUtilityClass, classes);
};
function resolveSectionElementWidth(sectionElement, rootRef, index, dateRangePosition) {
  if (sectionElement.content.id) {
    const activeSectionElements = rootRef.current?.querySelectorAll(`[data-sectionindex="${index}"] [data-range-position="${dateRangePosition}"]`);
    if (activeSectionElements) {
      return Array.from(activeSectionElements).reduce((currentActiveBarWidth, element) => {
        return currentActiveBarWidth + element.offsetWidth;
      }, 0);
    }
  }
  return 0;
}
function resolveSectionWidthAndOffsets(elements, rootRef) {
  let activeBarWidth = 0;
  const activeRangePosition = rootRef.current?.getAttribute("data-active-range-position");
  if (activeRangePosition === "end") {
    for (let i = elements.length - 1; i >= elements.length / 2; i -= 1) {
      activeBarWidth += resolveSectionElementWidth(elements[i], rootRef, i, "end");
    }
  } else {
    for (let i = 0; i < elements.length / 2; i += 1) {
      activeBarWidth += resolveSectionElementWidth(elements[i], rootRef, i, "start");
    }
  }
  return {
    activeBarWidth,
    sectionOffsets: [rootRef.current?.querySelector(`[data-sectionindex="0"]`)?.offsetLeft || 0, rootRef.current?.querySelector(`[data-sectionindex="${elements.length / 2}"]`)?.offsetLeft || 0]
  };
}
var PickersInputBase = React62.forwardRef(function PickersInputBase2(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiPickersInputBase"
  });
  const {
    elements,
    areAllSectionsEmpty,
    value,
    onChange,
    id,
    endAdornment,
    startAdornment,
    renderSuffix,
    slots,
    slotProps,
    contentEditable,
    tabIndex,
    onInput,
    onPaste,
    onKeyDown,
    name,
    readOnly,
    inputProps,
    inputRef,
    sectionListRef,
    onFocus,
    onBlur,
    classes: classesProp,
    ownerState: ownerStateProp
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded12);
  const ownerStateContext = usePickerTextFieldOwnerState();
  const rootRef = React62.useRef(null);
  const activeBarRef = React62.useRef(null);
  const sectionOffsetsRef = React62.useRef([]);
  const handleRootRef = useForkRef(ref, rootRef);
  const handleInputRef = useForkRef(inputProps?.ref, inputRef);
  const muiFormControl = useFormControl();
  if (!muiFormControl) {
    throw new Error("MUI X: PickersInputBase should always be used inside a PickersTextField component");
  }
  const ownerState = ownerStateProp ?? ownerStateContext;
  const handleInputFocus = (event) => {
    muiFormControl.onFocus?.(event);
    onFocus?.(event);
  };
  const handleHiddenInputFocus = (event) => {
    handleInputFocus(event);
  };
  const handleKeyDown = (event) => {
    onKeyDown?.(event);
    if (event.key === "Enter" && !event.defaultMuiPrevented) {
      if (rootRef.current?.dataset.multiInput) {
        return;
      }
      const closestForm = rootRef.current?.closest("form");
      const submitTrigger = closestForm?.querySelector('[type="submit"]');
      if (!closestForm || !submitTrigger) {
        return;
      }
      event.preventDefault();
      closestForm.requestSubmit(submitTrigger);
    }
  };
  const handleInputBlur = (event) => {
    muiFormControl.onBlur?.(event);
    onBlur?.(event);
  };
  React62.useEffect(() => {
    if (muiFormControl) {
      muiFormControl.setAdornedStart(Boolean(startAdornment));
    }
  }, [muiFormControl, startAdornment]);
  React62.useEffect(() => {
    if (!muiFormControl) {
      return;
    }
    if (areAllSectionsEmpty) {
      muiFormControl.onEmpty();
    } else {
      muiFormControl.onFilled();
    }
  }, [muiFormControl, areAllSectionsEmpty]);
  const classes = useUtilityClasses7(classesProp, ownerState);
  const InputRoot = slots?.root || PickersInputBaseRoot;
  const inputRootProps = useSlotProps_default({
    elementType: InputRoot,
    externalSlotProps: slotProps?.root,
    externalForwardedProps: other,
    additionalProps: {
      "aria-invalid": muiFormControl.error,
      ref: handleRootRef
    },
    className: classes.root,
    ownerState
  });
  const InputSectionsContainer = slots?.input || PickersInputBaseSectionsContainer;
  const isSingleInputRange = elements.some((element) => element.content["data-range-position"] !== void 0);
  React62.useEffect(() => {
    if (!isSingleInputRange || !ownerState.isPickerOpen) {
      return;
    }
    const {
      activeBarWidth,
      sectionOffsets
    } = resolveSectionWidthAndOffsets(elements, rootRef);
    sectionOffsetsRef.current = [sectionOffsets[0], sectionOffsets[1]];
    if (activeBarRef.current) {
      activeBarRef.current.style.width = `${activeBarWidth}px`;
    }
  }, [elements, isSingleInputRange, ownerState.isPickerOpen]);
  return (0, import_jsx_runtime37.jsxs)(InputRoot, _extends({}, inputRootProps, {
    children: [startAdornment, (0, import_jsx_runtime37.jsx)(PickersSectionList, {
      sectionListRef,
      elements,
      contentEditable,
      tabIndex,
      className: classes.sectionsContainer,
      onFocus: handleInputFocus,
      onBlur: handleInputBlur,
      onInput,
      onPaste,
      onKeyDown: handleKeyDown,
      slots: {
        root: InputSectionsContainer,
        section: PickersInputBaseSection,
        sectionContent: PickersInputBaseSectionContent,
        sectionSeparator: PickersInputBaseSectionSeparator
      },
      slotProps: {
        root: _extends({}, slotProps?.input, {
          ownerState
        }),
        sectionContent: {
          className: pickersInputBaseClasses.sectionContent
        },
        sectionSeparator: ({
          separatorPosition
        }) => ({
          className: separatorPosition === "before" ? pickersInputBaseClasses.sectionBefore : pickersInputBaseClasses.sectionAfter
        })
      }
    }), endAdornment, renderSuffix ? renderSuffix(_extends({}, muiFormControl)) : null, (0, import_jsx_runtime37.jsx)(PickersInputBaseInput, _extends({
      name,
      className: classes.input,
      value,
      onChange,
      id,
      "aria-hidden": "true",
      tabIndex: -1,
      readOnly,
      required: muiFormControl.required,
      disabled: muiFormControl.disabled,
      onFocus: handleHiddenInputFocus
    }, inputProps, {
      ref: handleInputRef
    })), isSingleInputRange && (0, import_jsx_runtime37.jsx)(PickersInputBaseActiveBar, {
      className: classes.activeBar,
      ref: activeBarRef,
      ownerState: {
        sectionOffsets: sectionOffsetsRef.current
      }
    })]
  }));
});
if (true) PickersInputBase.displayName = "PickersInputBase";
true ? PickersInputBase.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * Is `true` if the current values equals the empty value.
   * For a single item value, it means that `value === null`
   * For a range value, it means that `value === [null, null]`
   */
  areAllSectionsEmpty: import_prop_types8.default.bool.isRequired,
  className: import_prop_types8.default.string,
  component: import_prop_types8.default.elementType,
  /**
   * If true, the whole element is editable.
   * Useful when all the sections are selected.
   */
  contentEditable: import_prop_types8.default.bool.isRequired,
  "data-multi-input": import_prop_types8.default.string,
  /**
   * The elements to render.
   * Each element contains the prop to edit a section of the value.
   */
  elements: import_prop_types8.default.arrayOf(import_prop_types8.default.shape({
    after: import_prop_types8.default.object.isRequired,
    before: import_prop_types8.default.object.isRequired,
    container: import_prop_types8.default.object.isRequired,
    content: import_prop_types8.default.object.isRequired
  })).isRequired,
  endAdornment: import_prop_types8.default.node,
  fullWidth: import_prop_types8.default.bool,
  id: import_prop_types8.default.string,
  inputProps: import_prop_types8.default.object,
  inputRef: refType_default,
  label: import_prop_types8.default.node,
  margin: import_prop_types8.default.oneOf(["dense", "none", "normal"]),
  name: import_prop_types8.default.string,
  onChange: import_prop_types8.default.func.isRequired,
  onClick: import_prop_types8.default.func.isRequired,
  onInput: import_prop_types8.default.func.isRequired,
  onKeyDown: import_prop_types8.default.func.isRequired,
  onPaste: import_prop_types8.default.func.isRequired,
  ownerState: import_prop_types8.default.any,
  readOnly: import_prop_types8.default.bool,
  renderSuffix: import_prop_types8.default.func,
  sectionListRef: import_prop_types8.default.oneOfType([import_prop_types8.default.func, import_prop_types8.default.shape({
    current: import_prop_types8.default.shape({
      getRoot: import_prop_types8.default.func.isRequired,
      getSectionContainer: import_prop_types8.default.func.isRequired,
      getSectionContent: import_prop_types8.default.func.isRequired,
      getSectionIndexFromDOMElement: import_prop_types8.default.func.isRequired
    })
  })]),
  /**
   * The props used for each component slot.
   * @default {}
   */
  slotProps: import_prop_types8.default.object,
  /**
   * The components used for each slot inside.
   *
   * @default {}
   */
  slots: import_prop_types8.default.object,
  startAdornment: import_prop_types8.default.node,
  style: import_prop_types8.default.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types8.default.oneOfType([import_prop_types8.default.arrayOf(import_prop_types8.default.oneOfType([import_prop_types8.default.func, import_prop_types8.default.object, import_prop_types8.default.bool])), import_prop_types8.default.func, import_prop_types8.default.object]),
  value: import_prop_types8.default.string.isRequired
} : void 0;

// node_modules/.pnpm/@mui+x-date-pickers@8.26.0_@emotion+react@11.14.0_@types+react@19.2.7_react@19.2.3__@em_45e4fa7585d24d6c7a3cddedaa636f9d/node_modules/@mui/x-date-pickers/esm/PickersTextField/PickersOutlinedInput/pickersOutlinedInputClasses.js
function getPickersOutlinedInputUtilityClass(slot) {
  return generateUtilityClass("MuiPickersOutlinedInput", slot);
}
var pickersOutlinedInputClasses = _extends({}, pickersInputBaseClasses, generateUtilityClasses("MuiPickersOutlinedInput", ["root", "notchedOutline", "input"]));

// node_modules/.pnpm/@mui+x-date-pickers@8.26.0_@emotion+react@11.14.0_@types+react@19.2.7_react@19.2.3__@em_45e4fa7585d24d6c7a3cddedaa636f9d/node_modules/@mui/x-date-pickers/esm/PickersTextField/PickersOutlinedInput/Outline.js
var React63 = __toESM(require_react(), 1);
var import_jsx_runtime38 = __toESM(require_jsx_runtime(), 1);
var _excluded13 = ["children", "className", "label", "notched", "shrink"];
var OutlineRoot = styled_default("fieldset", {
  name: "MuiPickersOutlinedInput",
  slot: "NotchedOutline"
})(({
  theme
}) => {
  const borderColor = theme.palette.mode === "light" ? "rgba(0, 0, 0, 0.23)" : "rgba(255, 255, 255, 0.23)";
  return {
    textAlign: "left",
    position: "absolute",
    bottom: 0,
    right: 0,
    top: -5,
    left: 0,
    margin: 0,
    padding: "0 8px",
    pointerEvents: "none",
    borderRadius: "inherit",
    borderStyle: "solid",
    borderWidth: 1,
    overflow: "hidden",
    minWidth: "0%",
    borderColor: theme.vars ? `rgba(${theme.vars.palette.common.onBackgroundChannel} / 0.23)` : borderColor
  };
});
var OutlineLabel = styled_default("span", {
  slot: "internal",
  shouldForwardProp: void 0
})(({
  theme
}) => ({
  fontFamily: theme.typography.fontFamily,
  fontSize: "inherit"
}));
var OutlineLegend = styled_default("legend", {
  slot: "internal",
  shouldForwardProp: (prop) => shouldForwardProp(prop) && prop !== "notched"
})(({
  theme
}) => ({
  float: "unset",
  // Fix conflict with bootstrap
  width: "auto",
  // Fix conflict with bootstrap
  overflow: "hidden",
  // Fix Horizontal scroll when label too long
  variants: [{
    props: {
      inputHasLabel: false
    },
    style: {
      padding: 0,
      lineHeight: "11px",
      // sync with `height` in `legend` styles
      transition: theme.transitions.create("width", {
        duration: 150,
        easing: theme.transitions.easing.easeOut
      })
    }
  }, {
    props: {
      inputHasLabel: true
    },
    style: {
      display: "block",
      // Fix conflict with normalize.css and sanitize.css
      padding: 0,
      height: 11,
      // sync with `lineHeight` in `legend` styles
      fontSize: "0.75em",
      visibility: "hidden",
      maxWidth: 0.01,
      transition: theme.transitions.create("max-width", {
        duration: 50,
        easing: theme.transitions.easing.easeOut
      }),
      whiteSpace: "nowrap",
      "& > span": {
        paddingLeft: 5,
        paddingRight: 5,
        display: "inline-block",
        opacity: 0,
        visibility: "visible"
      }
    }
  }, {
    props: {
      inputHasLabel: true,
      notched: true
    },
    style: {
      maxWidth: "100%",
      transition: theme.transitions.create("max-width", {
        duration: 100,
        easing: theme.transitions.easing.easeOut,
        delay: 50
      })
    }
  }]
}));
function Outline(props) {
  const {
    className,
    label,
    notched
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded13);
  const ownerState = usePickerTextFieldOwnerState();
  return (0, import_jsx_runtime38.jsx)(OutlineRoot, _extends({
    "aria-hidden": true,
    className
  }, other, {
    ownerState,
    children: (0, import_jsx_runtime38.jsx)(OutlineLegend, {
      ownerState,
      notched,
      children: label ? (0, import_jsx_runtime38.jsx)(OutlineLabel, {
        children: label
      }) : (
        // notranslate needed while Google Translate will not fix zero-width space issue
        (0, import_jsx_runtime38.jsx)(OutlineLabel, {
          className: "notranslate",
          children: "​"
        })
      )
    })
  }));
}

// node_modules/.pnpm/@mui+x-date-pickers@8.26.0_@emotion+react@11.14.0_@types+react@19.2.7_react@19.2.3__@em_45e4fa7585d24d6c7a3cddedaa636f9d/node_modules/@mui/x-date-pickers/esm/PickersTextField/PickersOutlinedInput/PickersOutlinedInput.js
var import_jsx_runtime39 = __toESM(require_jsx_runtime(), 1);
var _excluded14 = ["label", "autoFocus", "ownerState", "classes", "notched"];
var PickersOutlinedInputRoot = styled_default(PickersInputBaseRoot, {
  name: "MuiPickersOutlinedInput",
  slot: "Root"
})(({
  theme
}) => {
  const borderColor = theme.palette.mode === "light" ? "rgba(0, 0, 0, 0.23)" : "rgba(255, 255, 255, 0.23)";
  return {
    padding: "0 14px",
    borderRadius: (theme.vars || theme).shape.borderRadius,
    [`&:hover .${pickersOutlinedInputClasses.notchedOutline}`]: {
      borderColor: (theme.vars || theme).palette.text.primary
    },
    // Reset on touch devices, it doesn't add specificity
    "@media (hover: none)": {
      [`&:hover .${pickersOutlinedInputClasses.notchedOutline}`]: {
        borderColor: theme.vars ? `rgba(${theme.vars.palette.common.onBackgroundChannel} / 0.23)` : borderColor
      }
    },
    [`&.${pickersOutlinedInputClasses.focused} .${pickersOutlinedInputClasses.notchedOutline}`]: {
      borderStyle: "solid",
      borderWidth: 2
    },
    [`&.${pickersOutlinedInputClasses.disabled}`]: {
      [`& .${pickersOutlinedInputClasses.notchedOutline}`]: {
        borderColor: (theme.vars || theme).palette.action.disabled
      },
      "*": {
        color: (theme.vars || theme).palette.action.disabled
      }
    },
    [`&.${pickersOutlinedInputClasses.error} .${pickersOutlinedInputClasses.notchedOutline}`]: {
      borderColor: (theme.vars || theme).palette.error.main
    },
    variants: Object.keys((theme.vars ?? theme).palette).filter((key) => (theme.vars ?? theme).palette[key]?.main ?? false).map((color) => ({
      props: {
        inputColor: color
      },
      style: {
        [`&.${pickersOutlinedInputClasses.focused}:not(.${pickersOutlinedInputClasses.error}) .${pickersOutlinedInputClasses.notchedOutline}`]: {
          // @ts-ignore
          borderColor: (theme.vars || theme).palette[color].main
        }
      }
    }))
  };
});
var PickersOutlinedInputSectionsContainer = styled_default(PickersInputBaseSectionsContainer, {
  name: "MuiPickersOutlinedInput",
  slot: "SectionsContainer"
})({
  padding: "16.5px 0",
  variants: [{
    props: {
      inputSize: "small"
    },
    style: {
      padding: "8.5px 0"
    }
  }]
});
var useUtilityClasses8 = (classes) => {
  const slots = {
    root: ["root"],
    notchedOutline: ["notchedOutline"],
    input: ["input"]
  };
  const composedClasses = composeClasses(slots, getPickersOutlinedInputUtilityClass, classes);
  return _extends({}, classes, composedClasses);
};
var PickersOutlinedInput = React64.forwardRef(function PickersOutlinedInput2(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiPickersOutlinedInput"
  });
  const {
    label,
    classes: classesProp,
    notched
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded14);
  const muiFormControl = useFormControl();
  const classes = useUtilityClasses8(classesProp);
  return (0, import_jsx_runtime39.jsx)(PickersInputBase, _extends({
    slots: {
      root: PickersOutlinedInputRoot,
      input: PickersOutlinedInputSectionsContainer
    },
    renderSuffix: (state) => (0, import_jsx_runtime39.jsx)(Outline, {
      shrink: Boolean(notched || state.adornedStart || state.focused || state.filled),
      notched: Boolean(notched || state.adornedStart || state.focused || state.filled),
      className: classes.notchedOutline,
      label: label != null && label !== "" && muiFormControl?.required ? (0, import_jsx_runtime39.jsxs)(React64.Fragment, {
        children: [label, " ", "*"]
      }) : label
    })
  }, other, {
    label,
    classes,
    ref
  }));
});
if (true) PickersOutlinedInput.displayName = "PickersOutlinedInput";
true ? PickersOutlinedInput.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * Is `true` if the current values equals the empty value.
   * For a single item value, it means that `value === null`
   * For a range value, it means that `value === [null, null]`
   */
  areAllSectionsEmpty: import_prop_types9.default.bool.isRequired,
  className: import_prop_types9.default.string,
  component: import_prop_types9.default.elementType,
  /**
   * If true, the whole element is editable.
   * Useful when all the sections are selected.
   */
  contentEditable: import_prop_types9.default.bool.isRequired,
  "data-multi-input": import_prop_types9.default.string,
  /**
   * The elements to render.
   * Each element contains the prop to edit a section of the value.
   */
  elements: import_prop_types9.default.arrayOf(import_prop_types9.default.shape({
    after: import_prop_types9.default.object.isRequired,
    before: import_prop_types9.default.object.isRequired,
    container: import_prop_types9.default.object.isRequired,
    content: import_prop_types9.default.object.isRequired
  })).isRequired,
  endAdornment: import_prop_types9.default.node,
  fullWidth: import_prop_types9.default.bool,
  id: import_prop_types9.default.string,
  inputProps: import_prop_types9.default.object,
  inputRef: refType_default,
  label: import_prop_types9.default.node,
  margin: import_prop_types9.default.oneOf(["dense", "none", "normal"]),
  name: import_prop_types9.default.string,
  notched: import_prop_types9.default.bool,
  onChange: import_prop_types9.default.func.isRequired,
  onClick: import_prop_types9.default.func.isRequired,
  onInput: import_prop_types9.default.func.isRequired,
  onKeyDown: import_prop_types9.default.func.isRequired,
  onPaste: import_prop_types9.default.func.isRequired,
  ownerState: import_prop_types9.default.any,
  readOnly: import_prop_types9.default.bool,
  renderSuffix: import_prop_types9.default.func,
  sectionListRef: import_prop_types9.default.oneOfType([import_prop_types9.default.func, import_prop_types9.default.shape({
    current: import_prop_types9.default.shape({
      getRoot: import_prop_types9.default.func.isRequired,
      getSectionContainer: import_prop_types9.default.func.isRequired,
      getSectionContent: import_prop_types9.default.func.isRequired,
      getSectionIndexFromDOMElement: import_prop_types9.default.func.isRequired
    })
  })]),
  /**
   * The props used for each component slot.
   * @default {}
   */
  slotProps: import_prop_types9.default.object,
  /**
   * The components used for each slot inside.
   *
   * @default {}
   */
  slots: import_prop_types9.default.object,
  startAdornment: import_prop_types9.default.node,
  style: import_prop_types9.default.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types9.default.oneOfType([import_prop_types9.default.arrayOf(import_prop_types9.default.oneOfType([import_prop_types9.default.func, import_prop_types9.default.object, import_prop_types9.default.bool])), import_prop_types9.default.func, import_prop_types9.default.object]),
  value: import_prop_types9.default.string.isRequired
} : void 0;
PickersOutlinedInput.muiName = "Input";

// node_modules/.pnpm/@mui+x-date-pickers@8.26.0_@emotion+react@11.14.0_@types+react@19.2.7_react@19.2.3__@em_45e4fa7585d24d6c7a3cddedaa636f9d/node_modules/@mui/x-date-pickers/esm/PickersTextField/PickersFilledInput/PickersFilledInput.js
var React65 = __toESM(require_react(), 1);
var import_prop_types10 = __toESM(require_prop_types(), 1);

// node_modules/.pnpm/@mui+x-date-pickers@8.26.0_@emotion+react@11.14.0_@types+react@19.2.7_react@19.2.3__@em_45e4fa7585d24d6c7a3cddedaa636f9d/node_modules/@mui/x-date-pickers/esm/PickersTextField/PickersFilledInput/pickersFilledInputClasses.js
function getPickersFilledInputUtilityClass(slot) {
  return generateUtilityClass("MuiPickersFilledInput", slot);
}
var pickersFilledInputClasses = _extends({}, pickersInputBaseClasses, generateUtilityClasses("MuiPickersFilledInput", ["root", "underline", "input"]));

// node_modules/.pnpm/@mui+x-date-pickers@8.26.0_@emotion+react@11.14.0_@types+react@19.2.7_react@19.2.3__@em_45e4fa7585d24d6c7a3cddedaa636f9d/node_modules/@mui/x-date-pickers/esm/PickersTextField/PickersFilledInput/PickersFilledInput.js
var import_jsx_runtime40 = __toESM(require_jsx_runtime(), 1);
var _excluded15 = ["label", "autoFocus", "disableUnderline", "hiddenLabel", "classes"];
var PickersFilledInputRoot = styled_default(PickersInputBaseRoot, {
  name: "MuiPickersFilledInput",
  slot: "Root",
  shouldForwardProp: (prop) => shouldForwardProp(prop) && prop !== "disableUnderline"
})(({
  theme
}) => {
  const light = theme.palette.mode === "light";
  const bottomLineColor = light ? "rgba(0, 0, 0, 0.42)" : "rgba(255, 255, 255, 0.7)";
  const backgroundColor = light ? "rgba(0, 0, 0, 0.06)" : "rgba(255, 255, 255, 0.09)";
  const hoverBackground = light ? "rgba(0, 0, 0, 0.09)" : "rgba(255, 255, 255, 0.13)";
  const disabledBackground = light ? "rgba(0, 0, 0, 0.12)" : "rgba(255, 255, 255, 0.12)";
  return {
    backgroundColor: theme.vars ? theme.vars.palette.FilledInput.bg : backgroundColor,
    borderTopLeftRadius: (theme.vars || theme).shape.borderRadius,
    borderTopRightRadius: (theme.vars || theme).shape.borderRadius,
    transition: theme.transitions.create("background-color", {
      duration: theme.transitions.duration.shorter,
      easing: theme.transitions.easing.easeOut
    }),
    "&:hover": {
      backgroundColor: theme.vars ? theme.vars.palette.FilledInput.hoverBg : hoverBackground,
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: theme.vars ? theme.vars.palette.FilledInput.bg : backgroundColor
      }
    },
    [`&.${pickersFilledInputClasses.focused}`]: {
      backgroundColor: theme.vars ? theme.vars.palette.FilledInput.bg : backgroundColor
    },
    [`&.${pickersFilledInputClasses.disabled}`]: {
      backgroundColor: theme.vars ? theme.vars.palette.FilledInput.disabledBg : disabledBackground
    },
    variants: [...Object.keys((theme.vars ?? theme).palette).filter((key) => (theme.vars ?? theme).palette[key].main).map((color) => ({
      props: {
        inputColor: color,
        disableUnderline: false
      },
      style: {
        "&::after": {
          // @ts-ignore
          borderBottom: `2px solid ${(theme.vars || theme).palette[color]?.main}`
        }
      }
    })), {
      props: {
        disableUnderline: false
      },
      style: {
        "&::after": {
          left: 0,
          bottom: 0,
          // Doing the other way around crash on IE11 "''" https://github.com/cssinjs/jss/issues/242
          content: '""',
          position: "absolute",
          right: 0,
          transform: "scaleX(0)",
          transition: theme.transitions.create("transform", {
            duration: theme.transitions.duration.shorter,
            easing: theme.transitions.easing.easeOut
          }),
          pointerEvents: "none"
          // Transparent to the hover style.
        },
        [`&.${pickersFilledInputClasses.focused}:after`]: {
          // translateX(0) is a workaround for Safari transform scale bug
          // See https://github.com/mui/material-ui/issues/31766
          transform: "scaleX(1) translateX(0)"
        },
        [`&.${pickersFilledInputClasses.error}`]: {
          "&:before, &:after": {
            borderBottomColor: (theme.vars || theme).palette.error.main
          }
        },
        "&::before": {
          borderBottom: `1px solid ${theme.vars ? `rgba(${theme.vars.palette.common.onBackgroundChannel} / ${theme.vars.opacity.inputUnderline})` : bottomLineColor}`,
          left: 0,
          bottom: 0,
          // Doing the other way around crash on IE11 "''" https://github.com/cssinjs/jss/issues/242
          content: '"\\00a0"',
          position: "absolute",
          right: 0,
          transition: theme.transitions.create("border-bottom-color", {
            duration: theme.transitions.duration.shorter
          }),
          pointerEvents: "none"
          // Transparent to the hover style.
        },
        [`&:hover:not(.${pickersFilledInputClasses.disabled}, .${pickersFilledInputClasses.error}):before`]: {
          borderBottom: `1px solid ${(theme.vars || theme).palette.text.primary}`
        },
        [`&.${pickersFilledInputClasses.disabled}:before`]: {
          borderBottomStyle: "dotted"
        }
      }
    }, {
      props: {
        hasStartAdornment: true
      },
      style: {
        paddingLeft: 12
      }
    }, {
      props: {
        hasEndAdornment: true
      },
      style: {
        paddingRight: 12
      }
    }]
  };
});
var PickersFilledSectionsContainer = styled_default(PickersInputBaseSectionsContainer, {
  name: "MuiPickersFilledInput",
  slot: "sectionsContainer",
  shouldForwardProp: (prop) => shouldForwardProp(prop) && prop !== "hiddenLabel"
})({
  paddingTop: 25,
  paddingRight: 12,
  paddingBottom: 8,
  paddingLeft: 12,
  variants: [{
    props: {
      inputSize: "small"
    },
    style: {
      paddingTop: 21,
      paddingBottom: 4
    }
  }, {
    props: {
      hasStartAdornment: true
    },
    style: {
      paddingLeft: 0
    }
  }, {
    props: {
      hasEndAdornment: true
    },
    style: {
      paddingRight: 0
    }
  }, {
    props: {
      hiddenLabel: true
    },
    style: {
      paddingTop: 16,
      paddingBottom: 17
    }
  }, {
    props: {
      hiddenLabel: true,
      inputSize: "small"
    },
    style: {
      paddingTop: 8,
      paddingBottom: 9
    }
  }]
});
var useUtilityClasses9 = (classes, ownerState) => {
  const {
    inputHasUnderline
  } = ownerState;
  const slots = {
    root: ["root", inputHasUnderline && "underline"],
    input: ["input"]
  };
  const composedClasses = composeClasses(slots, getPickersFilledInputUtilityClass, classes);
  return _extends({}, classes, composedClasses);
};
var PickersFilledInput = React65.forwardRef(function PickersFilledInput2(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiPickersFilledInput"
  });
  const {
    label,
    disableUnderline = false,
    hiddenLabel = false,
    classes: classesProp
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded15);
  const pickerTextFieldOwnerState = usePickerTextFieldOwnerState();
  const ownerState = _extends({}, pickerTextFieldOwnerState, {
    inputHasUnderline: !disableUnderline
  });
  const classes = useUtilityClasses9(classesProp, ownerState);
  return (0, import_jsx_runtime40.jsx)(PickersInputBase, _extends({
    slots: {
      root: PickersFilledInputRoot,
      input: PickersFilledSectionsContainer
    },
    slotProps: {
      root: {
        disableUnderline
      },
      input: {
        hiddenLabel
      }
    }
  }, other, {
    label,
    classes,
    ref,
    ownerState
  }));
});
if (true) PickersFilledInput.displayName = "PickersFilledInput";
true ? PickersFilledInput.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * Is `true` if the current values equals the empty value.
   * For a single item value, it means that `value === null`
   * For a range value, it means that `value === [null, null]`
   */
  areAllSectionsEmpty: import_prop_types10.default.bool.isRequired,
  className: import_prop_types10.default.string,
  component: import_prop_types10.default.elementType,
  /**
   * If true, the whole element is editable.
   * Useful when all the sections are selected.
   */
  contentEditable: import_prop_types10.default.bool.isRequired,
  "data-multi-input": import_prop_types10.default.string,
  disableUnderline: import_prop_types10.default.bool,
  /**
   * The elements to render.
   * Each element contains the prop to edit a section of the value.
   */
  elements: import_prop_types10.default.arrayOf(import_prop_types10.default.shape({
    after: import_prop_types10.default.object.isRequired,
    before: import_prop_types10.default.object.isRequired,
    container: import_prop_types10.default.object.isRequired,
    content: import_prop_types10.default.object.isRequired
  })).isRequired,
  endAdornment: import_prop_types10.default.node,
  fullWidth: import_prop_types10.default.bool,
  hiddenLabel: import_prop_types10.default.bool,
  id: import_prop_types10.default.string,
  inputProps: import_prop_types10.default.object,
  inputRef: refType_default,
  label: import_prop_types10.default.node,
  margin: import_prop_types10.default.oneOf(["dense", "none", "normal"]),
  name: import_prop_types10.default.string,
  onChange: import_prop_types10.default.func.isRequired,
  onClick: import_prop_types10.default.func.isRequired,
  onInput: import_prop_types10.default.func.isRequired,
  onKeyDown: import_prop_types10.default.func.isRequired,
  onPaste: import_prop_types10.default.func.isRequired,
  ownerState: import_prop_types10.default.any,
  readOnly: import_prop_types10.default.bool,
  renderSuffix: import_prop_types10.default.func,
  sectionListRef: import_prop_types10.default.oneOfType([import_prop_types10.default.func, import_prop_types10.default.shape({
    current: import_prop_types10.default.shape({
      getRoot: import_prop_types10.default.func.isRequired,
      getSectionContainer: import_prop_types10.default.func.isRequired,
      getSectionContent: import_prop_types10.default.func.isRequired,
      getSectionIndexFromDOMElement: import_prop_types10.default.func.isRequired
    })
  })]),
  /**
   * The props used for each component slot.
   * @default {}
   */
  slotProps: import_prop_types10.default.object,
  /**
   * The components used for each slot inside.
   *
   * @default {}
   */
  slots: import_prop_types10.default.object,
  startAdornment: import_prop_types10.default.node,
  style: import_prop_types10.default.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types10.default.oneOfType([import_prop_types10.default.arrayOf(import_prop_types10.default.oneOfType([import_prop_types10.default.func, import_prop_types10.default.object, import_prop_types10.default.bool])), import_prop_types10.default.func, import_prop_types10.default.object]),
  value: import_prop_types10.default.string.isRequired
} : void 0;
PickersFilledInput.muiName = "Input";

// node_modules/.pnpm/@mui+x-date-pickers@8.26.0_@emotion+react@11.14.0_@types+react@19.2.7_react@19.2.3__@em_45e4fa7585d24d6c7a3cddedaa636f9d/node_modules/@mui/x-date-pickers/esm/PickersTextField/PickersInput/PickersInput.js
var React66 = __toESM(require_react(), 1);
var import_prop_types11 = __toESM(require_prop_types(), 1);

// node_modules/.pnpm/@mui+x-date-pickers@8.26.0_@emotion+react@11.14.0_@types+react@19.2.7_react@19.2.3__@em_45e4fa7585d24d6c7a3cddedaa636f9d/node_modules/@mui/x-date-pickers/esm/PickersTextField/PickersInput/pickersInputClasses.js
function getPickersInputUtilityClass(slot) {
  return generateUtilityClass("MuiPickersFilledInput", slot);
}
var pickersInputClasses = _extends({}, pickersInputBaseClasses, generateUtilityClasses("MuiPickersInput", ["root", "underline", "input"]));

// node_modules/.pnpm/@mui+x-date-pickers@8.26.0_@emotion+react@11.14.0_@types+react@19.2.7_react@19.2.3__@em_45e4fa7585d24d6c7a3cddedaa636f9d/node_modules/@mui/x-date-pickers/esm/PickersTextField/PickersInput/PickersInput.js
var import_jsx_runtime41 = __toESM(require_jsx_runtime(), 1);
var _excluded16 = ["label", "autoFocus", "disableUnderline", "ownerState", "classes"];
var PickersInputRoot = styled_default(PickersInputBaseRoot, {
  name: "MuiPickersInput",
  slot: "Root",
  shouldForwardProp: (prop) => shouldForwardProp(prop) && prop !== "disableUnderline"
})(({
  theme
}) => {
  const light = theme.palette.mode === "light";
  let bottomLineColor = light ? "rgba(0, 0, 0, 0.42)" : "rgba(255, 255, 255, 0.7)";
  if (theme.vars) {
    bottomLineColor = `rgba(${theme.vars.palette.common.onBackgroundChannel} / ${theme.vars.opacity.inputUnderline})`;
  }
  return {
    "label + &": {
      marginTop: 16
    },
    variants: [...Object.keys((theme.vars ?? theme).palette).filter((key) => (theme.vars ?? theme).palette[key].main).map((color) => ({
      props: {
        inputColor: color,
        inputHasUnderline: true
      },
      style: {
        "&::after": {
          // @ts-ignore
          borderBottom: `2px solid ${(theme.vars || theme).palette[color].main}`
        }
      }
    })), {
      props: {
        inputHasUnderline: true
      },
      style: {
        "&::after": {
          background: "red",
          left: 0,
          bottom: 0,
          // Doing the other way around crash on IE11 "''" https://github.com/cssinjs/jss/issues/242
          content: '""',
          position: "absolute",
          right: 0,
          transform: "scaleX(0)",
          transition: theme.transitions.create("transform", {
            duration: theme.transitions.duration.shorter,
            easing: theme.transitions.easing.easeOut
          }),
          pointerEvents: "none"
          // Transparent to the hover style.
        },
        [`&.${pickersInputClasses.focused}:after`]: {
          // translateX(0) is a workaround for Safari transform scale bug
          // See https://github.com/mui/material-ui/issues/31766
          transform: "scaleX(1) translateX(0)"
        },
        [`&.${pickersInputClasses.error}`]: {
          "&:before, &:after": {
            borderBottomColor: (theme.vars || theme).palette.error.main
          }
        },
        "&::before": {
          borderBottom: `1px solid ${bottomLineColor}`,
          left: 0,
          bottom: 0,
          // Doing the other way around crash on IE11 "''" https://github.com/cssinjs/jss/issues/242
          content: '"\\00a0"',
          position: "absolute",
          right: 0,
          transition: theme.transitions.create("border-bottom-color", {
            duration: theme.transitions.duration.shorter
          }),
          pointerEvents: "none"
          // Transparent to the hover style.
        },
        [`&:hover:not(.${pickersInputClasses.disabled}, .${pickersInputClasses.error}):before`]: {
          borderBottom: `2px solid ${(theme.vars || theme).palette.text.primary}`,
          // Reset on touch devices, it doesn't add specificity
          "@media (hover: none)": {
            borderBottom: `1px solid ${bottomLineColor}`
          }
        },
        [`&.${pickersInputClasses.disabled}:before`]: {
          borderBottomStyle: "dotted"
        }
      }
    }]
  };
});
var useUtilityClasses10 = (classes, ownerState) => {
  const {
    inputHasUnderline
  } = ownerState;
  const slots = {
    root: ["root", !inputHasUnderline && "underline"],
    input: ["input"]
  };
  const composedClasses = composeClasses(slots, getPickersInputUtilityClass, classes);
  return _extends({}, classes, composedClasses);
};
var PickersInput = React66.forwardRef(function PickersInput2(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiPickersInput"
  });
  const {
    label,
    disableUnderline = false,
    classes: classesProp
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded16);
  const pickerTextFieldOwnerState = usePickerTextFieldOwnerState();
  const ownerState = _extends({}, pickerTextFieldOwnerState, {
    inputHasUnderline: !disableUnderline
  });
  const classes = useUtilityClasses10(classesProp, ownerState);
  return (0, import_jsx_runtime41.jsx)(PickersInputBase, _extends({
    slots: {
      root: PickersInputRoot
    },
    slotProps: {
      root: {
        disableUnderline
      }
    }
  }, other, {
    ownerState,
    label,
    classes,
    ref
  }));
});
if (true) PickersInput.displayName = "PickersInput";
true ? PickersInput.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * Is `true` if the current values equals the empty value.
   * For a single item value, it means that `value === null`
   * For a range value, it means that `value === [null, null]`
   */
  areAllSectionsEmpty: import_prop_types11.default.bool.isRequired,
  className: import_prop_types11.default.string,
  component: import_prop_types11.default.elementType,
  /**
   * If true, the whole element is editable.
   * Useful when all the sections are selected.
   */
  contentEditable: import_prop_types11.default.bool.isRequired,
  "data-multi-input": import_prop_types11.default.string,
  disableUnderline: import_prop_types11.default.bool,
  /**
   * The elements to render.
   * Each element contains the prop to edit a section of the value.
   */
  elements: import_prop_types11.default.arrayOf(import_prop_types11.default.shape({
    after: import_prop_types11.default.object.isRequired,
    before: import_prop_types11.default.object.isRequired,
    container: import_prop_types11.default.object.isRequired,
    content: import_prop_types11.default.object.isRequired
  })).isRequired,
  endAdornment: import_prop_types11.default.node,
  fullWidth: import_prop_types11.default.bool,
  id: import_prop_types11.default.string,
  inputProps: import_prop_types11.default.object,
  inputRef: refType_default,
  label: import_prop_types11.default.node,
  margin: import_prop_types11.default.oneOf(["dense", "none", "normal"]),
  name: import_prop_types11.default.string,
  onChange: import_prop_types11.default.func.isRequired,
  onClick: import_prop_types11.default.func.isRequired,
  onInput: import_prop_types11.default.func.isRequired,
  onKeyDown: import_prop_types11.default.func.isRequired,
  onPaste: import_prop_types11.default.func.isRequired,
  ownerState: import_prop_types11.default.any,
  readOnly: import_prop_types11.default.bool,
  renderSuffix: import_prop_types11.default.func,
  sectionListRef: import_prop_types11.default.oneOfType([import_prop_types11.default.func, import_prop_types11.default.shape({
    current: import_prop_types11.default.shape({
      getRoot: import_prop_types11.default.func.isRequired,
      getSectionContainer: import_prop_types11.default.func.isRequired,
      getSectionContent: import_prop_types11.default.func.isRequired,
      getSectionIndexFromDOMElement: import_prop_types11.default.func.isRequired
    })
  })]),
  /**
   * The props used for each component slot.
   * @default {}
   */
  slotProps: import_prop_types11.default.object,
  /**
   * The components used for each slot inside.
   *
   * @default {}
   */
  slots: import_prop_types11.default.object,
  startAdornment: import_prop_types11.default.node,
  style: import_prop_types11.default.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types11.default.oneOfType([import_prop_types11.default.arrayOf(import_prop_types11.default.oneOfType([import_prop_types11.default.func, import_prop_types11.default.object, import_prop_types11.default.bool])), import_prop_types11.default.func, import_prop_types11.default.object]),
  value: import_prop_types11.default.string.isRequired
} : void 0;
PickersInput.muiName = "Input";

// node_modules/.pnpm/@mui+x-date-pickers@8.26.0_@emotion+react@11.14.0_@types+react@19.2.7_react@19.2.3__@em_45e4fa7585d24d6c7a3cddedaa636f9d/node_modules/@mui/x-date-pickers/esm/PickersTextField/PickersTextField.js
var import_jsx_runtime42 = __toESM(require_jsx_runtime(), 1);
var _excluded17 = ["onFocus", "onBlur", "className", "classes", "color", "disabled", "error", "variant", "required", "hiddenLabel", "InputProps", "inputProps", "inputRef", "sectionListRef", "elements", "areAllSectionsEmpty", "onClick", "onKeyDown", "onKeyUp", "onPaste", "onInput", "endAdornment", "startAdornment", "tabIndex", "contentEditable", "focused", "value", "onChange", "fullWidth", "id", "name", "helperText", "FormHelperTextProps", "label", "InputLabelProps", "data-active-range-position"];
var VARIANT_COMPONENT = {
  standard: PickersInput,
  filled: PickersFilledInput,
  outlined: PickersOutlinedInput
};
var PickersTextFieldRoot = styled_default(FormControl_default, {
  name: "MuiPickersTextField",
  slot: "Root"
})({
  maxWidth: "100%"
});
var useUtilityClasses11 = (classes, ownerState) => {
  const {
    isFieldFocused: isFieldFocused3,
    isFieldDisabled,
    isFieldRequired
  } = ownerState;
  const slots = {
    root: ["root", isFieldFocused3 && !isFieldDisabled && "focused", isFieldDisabled && "disabled", isFieldRequired && "required"]
  };
  return composeClasses(slots, getPickersTextFieldUtilityClass, classes);
};
var PickersTextField = React67.forwardRef(function PickersTextField2(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiPickersTextField"
  });
  const {
    // Props used by FormControl
    onFocus,
    onBlur,
    className,
    classes: classesProp,
    color = "primary",
    disabled = false,
    error = false,
    variant = "outlined",
    required = false,
    hiddenLabel = false,
    // Props used by PickersInput
    InputProps,
    inputProps,
    inputRef,
    sectionListRef,
    elements,
    areAllSectionsEmpty,
    onClick,
    onKeyDown,
    onKeyUp,
    onPaste,
    onInput,
    endAdornment,
    startAdornment,
    tabIndex,
    contentEditable,
    focused,
    value,
    onChange,
    fullWidth,
    id: idProp,
    name,
    // Props used by FormHelperText
    helperText,
    FormHelperTextProps,
    // Props used by InputLabel
    label,
    InputLabelProps,
    // @ts-ignore
    "data-active-range-position": dataActiveRangePosition
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded17);
  const rootRef = React67.useRef(null);
  const handleRootRef = useForkRef(ref, rootRef);
  const id = useId(idProp);
  const helperTextId = helperText && id ? `${id}-helper-text` : void 0;
  const inputLabelId = label && id ? `${id}-label` : void 0;
  const fieldOwnerState = useFieldOwnerState({
    disabled: props.disabled,
    required: props.required,
    readOnly: InputProps?.readOnly
  });
  const ownerState = React67.useMemo(() => _extends({}, fieldOwnerState, {
    isFieldValueEmpty: areAllSectionsEmpty,
    isFieldFocused: focused ?? false,
    hasFieldError: error ?? false,
    inputSize: props.size ?? "medium",
    inputColor: color ?? "primary",
    isInputInFullWidth: fullWidth ?? false,
    hasStartAdornment: Boolean(startAdornment ?? InputProps?.startAdornment),
    hasEndAdornment: Boolean(endAdornment ?? InputProps?.endAdornment),
    inputHasLabel: !!label,
    isLabelShrunk: Boolean(InputLabelProps?.shrink)
  }), [fieldOwnerState, areAllSectionsEmpty, focused, error, props.size, color, fullWidth, startAdornment, endAdornment, InputProps?.startAdornment, InputProps?.endAdornment, label, InputLabelProps?.shrink]);
  const classes = useUtilityClasses11(classesProp, ownerState);
  const PickersInputComponent = VARIANT_COMPONENT[variant];
  const inputAdditionalProps = {};
  if (variant === "outlined") {
    if (InputLabelProps && typeof InputLabelProps.shrink !== "undefined") {
      inputAdditionalProps.notched = InputLabelProps.shrink;
    }
    inputAdditionalProps.label = label;
  } else if (variant === "filled") {
    inputAdditionalProps.hiddenLabel = hiddenLabel;
  }
  return (0, import_jsx_runtime42.jsx)(PickerTextFieldOwnerStateContext.Provider, {
    value: ownerState,
    children: (0, import_jsx_runtime42.jsxs)(PickersTextFieldRoot, _extends({
      className: clsx_default(classes.root, className),
      ref: handleRootRef,
      focused,
      disabled,
      variant,
      error,
      color,
      fullWidth,
      required,
      ownerState
    }, other, {
      children: [label != null && label !== "" && (0, import_jsx_runtime42.jsx)(InputLabel_default, _extends({
        htmlFor: id,
        id: inputLabelId
      }, InputLabelProps, {
        children: label
      })), (0, import_jsx_runtime42.jsx)(PickersInputComponent, _extends({
        elements,
        areAllSectionsEmpty,
        onClick,
        onKeyDown,
        onKeyUp,
        onInput,
        onPaste,
        onFocus,
        onBlur,
        endAdornment,
        startAdornment,
        tabIndex,
        contentEditable,
        value,
        onChange,
        id,
        fullWidth,
        inputProps,
        inputRef,
        sectionListRef,
        label,
        name,
        role: "group",
        "aria-labelledby": inputLabelId,
        "aria-describedby": helperTextId,
        "aria-live": helperTextId ? "polite" : void 0,
        "data-active-range-position": dataActiveRangePosition
      }, inputAdditionalProps, InputProps)), helperText && (0, import_jsx_runtime42.jsx)(FormHelperText_default, _extends({
        id: helperTextId
      }, FormHelperTextProps, {
        children: helperText
      }))]
    }))
  });
});
if (true) PickersTextField.displayName = "PickersTextField";
true ? PickersTextField.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * Is `true` if the current values equals the empty value.
   * For a single item value, it means that `value === null`
   * For a range value, it means that `value === [null, null]`
   */
  areAllSectionsEmpty: import_prop_types12.default.bool.isRequired,
  className: import_prop_types12.default.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'primary'
   */
  color: import_prop_types12.default.oneOf(["error", "info", "primary", "secondary", "success", "warning"]),
  component: import_prop_types12.default.elementType,
  /**
   * If true, the whole element is editable.
   * Useful when all the sections are selected.
   */
  contentEditable: import_prop_types12.default.bool.isRequired,
  disabled: import_prop_types12.default.bool.isRequired,
  /**
   * The elements to render.
   * Each element contains the prop to edit a section of the value.
   */
  elements: import_prop_types12.default.arrayOf(import_prop_types12.default.shape({
    after: import_prop_types12.default.object.isRequired,
    before: import_prop_types12.default.object.isRequired,
    container: import_prop_types12.default.object.isRequired,
    content: import_prop_types12.default.object.isRequired
  })).isRequired,
  endAdornment: import_prop_types12.default.node,
  error: import_prop_types12.default.bool.isRequired,
  /**
   * If `true`, the component is displayed in focused state.
   */
  focused: import_prop_types12.default.bool,
  FormHelperTextProps: import_prop_types12.default.object,
  fullWidth: import_prop_types12.default.bool,
  /**
   * The helper text content.
   */
  helperText: import_prop_types12.default.node,
  /**
   * If `true`, the label is hidden.
   * This is used to increase density for a `FilledInput`.
   * Be sure to add `aria-label` to the `input` element.
   * @default false
   */
  hiddenLabel: import_prop_types12.default.bool,
  id: import_prop_types12.default.string,
  InputLabelProps: import_prop_types12.default.object,
  inputProps: import_prop_types12.default.object,
  /**
   * Props applied to the Input element.
   * It will be a [`FilledInput`](/material-ui/api/filled-input/),
   * [`OutlinedInput`](/material-ui/api/outlined-input/) or [`Input`](/material-ui/api/input/)
   * component depending on the `variant` prop value.
   */
  InputProps: import_prop_types12.default.object,
  inputRef: refType_default,
  label: import_prop_types12.default.node,
  /**
   * If `dense` or `normal`, will adjust vertical spacing of this and contained components.
   * @default 'none'
   */
  margin: import_prop_types12.default.oneOf(["dense", "none", "normal"]),
  name: import_prop_types12.default.string,
  onBlur: import_prop_types12.default.func.isRequired,
  onChange: import_prop_types12.default.func.isRequired,
  onClick: import_prop_types12.default.func.isRequired,
  onFocus: import_prop_types12.default.func.isRequired,
  onInput: import_prop_types12.default.func.isRequired,
  onKeyDown: import_prop_types12.default.func.isRequired,
  onPaste: import_prop_types12.default.func.isRequired,
  readOnly: import_prop_types12.default.bool,
  /**
   * If `true`, the label will indicate that the `input` is required.
   * @default false
   */
  required: import_prop_types12.default.bool,
  sectionListRef: import_prop_types12.default.oneOfType([import_prop_types12.default.func, import_prop_types12.default.shape({
    current: import_prop_types12.default.shape({
      getRoot: import_prop_types12.default.func.isRequired,
      getSectionContainer: import_prop_types12.default.func.isRequired,
      getSectionContent: import_prop_types12.default.func.isRequired,
      getSectionIndexFromDOMElement: import_prop_types12.default.func.isRequired
    })
  })]),
  /**
   * The size of the component.
   * @default 'medium'
   */
  size: import_prop_types12.default.oneOf(["medium", "small"]),
  startAdornment: import_prop_types12.default.node,
  style: import_prop_types12.default.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types12.default.oneOfType([import_prop_types12.default.arrayOf(import_prop_types12.default.oneOfType([import_prop_types12.default.func, import_prop_types12.default.object, import_prop_types12.default.bool])), import_prop_types12.default.func, import_prop_types12.default.object]),
  value: import_prop_types12.default.string.isRequired,
  /**
   * The variant to use.
   * @default 'outlined'
   */
  variant: import_prop_types12.default.oneOf(["filled", "outlined", "standard"])
} : void 0;

// node_modules/.pnpm/@mui+x-date-pickers@8.26.0_@emotion+react@11.14.0_@types+react@19.2.7_react@19.2.3__@em_45e4fa7585d24d6c7a3cddedaa636f9d/node_modules/@mui/x-date-pickers/esm/internals/components/PickerFieldUI.js
var import_jsx_runtime43 = __toESM(require_jsx_runtime(), 1);
var _excluded18 = ["enableAccessibleFieldDOMStructure"];
var _excluded24 = ["InputProps", "readOnly", "onClear", "clearable", "clearButtonPosition", "openPickerButtonPosition", "openPickerAriaLabel"];
var _excluded32 = ["onPaste", "onKeyDown", "inputMode", "readOnly", "InputProps", "inputProps", "inputRef", "onClear", "clearable", "clearButtonPosition", "openPickerButtonPosition", "openPickerAriaLabel"];
var _excluded42 = ["ownerState"];
var _excluded52 = ["ownerState"];
var _excluded62 = ["ownerState"];
var _excluded72 = ["ownerState"];
var _excluded82 = ["InputProps", "inputProps"];
var noop = () => {
};
var cleanFieldResponse = (_ref) => {
  let {
    enableAccessibleFieldDOMStructure
  } = _ref, fieldResponse = _objectWithoutPropertiesLoose(_ref, _excluded18);
  if (enableAccessibleFieldDOMStructure) {
    const {
      InputProps: InputProps2,
      readOnly: readOnly2,
      onClear: onClear2,
      clearable: clearable2,
      clearButtonPosition: clearButtonPosition2,
      openPickerButtonPosition: openPickerButtonPosition2,
      openPickerAriaLabel: openPickerAriaLabel2
    } = fieldResponse, other2 = _objectWithoutPropertiesLoose(fieldResponse, _excluded24);
    const mergedInputProps2 = major >= 6 && other2?.slotProps?.input ? mergeSlotProps(other2?.slotProps?.input, InputProps2) : noop;
    return {
      clearable: clearable2,
      onClear: onClear2,
      clearButtonPosition: clearButtonPosition2,
      openPickerButtonPosition: openPickerButtonPosition2,
      openPickerAriaLabel: openPickerAriaLabel2,
      textFieldProps: _extends({}, other2, major >= 6 && other2?.slotProps?.input ? {
        slotProps: _extends({}, other2?.slotProps, {
          input: (ownerState) => _extends({}, resolveComponentProps_default(mergedInputProps2, ownerState), {
            readOnly: readOnly2
          })
        })
      } : {
        InputProps: _extends({}, InputProps2 ?? {}, {
          readOnly: readOnly2
        })
      })
    };
  }
  const {
    onPaste,
    onKeyDown,
    inputMode,
    readOnly,
    InputProps,
    inputProps,
    inputRef,
    onClear,
    clearable,
    clearButtonPosition,
    openPickerButtonPosition,
    openPickerAriaLabel
  } = fieldResponse, other = _objectWithoutPropertiesLoose(fieldResponse, _excluded32);
  const mergedInputProps = major >= 6 && other?.slotProps?.input ? mergeSlotProps(other?.slotProps?.input, InputProps) : noop;
  const mergedHtmlInputProps = major >= 6 && other?.slotProps?.htmlInput ? mergeSlotProps(other?.slotProps?.htmlInput, inputProps) : noop;
  return {
    clearable,
    onClear,
    clearButtonPosition,
    openPickerButtonPosition,
    openPickerAriaLabel,
    textFieldProps: _extends({}, other, major >= 6 && (other?.slotProps?.input || other?.slotProps?.htmlInput) ? {
      slotProps: _extends({}, other?.slotProps, {
        input: (ownerState) => _extends({}, resolveComponentProps_default(mergedInputProps, ownerState), {
          readOnly
        }),
        htmlInput: (ownerState) => _extends({}, resolveComponentProps_default(mergedHtmlInputProps, ownerState), {
          inputMode,
          onPaste,
          onKeyDown,
          ref: inputRef
        })
      })
    } : {
      InputProps: _extends({}, InputProps ?? {}, {
        readOnly
      }),
      inputProps: _extends({}, inputProps ?? {}, {
        inputMode,
        onPaste,
        onKeyDown,
        ref: inputRef
      })
    })
  };
};
var PickerFieldUIContext = React68.createContext({
  slots: {},
  slotProps: {},
  inputRef: void 0
});
if (true) PickerFieldUIContext.displayName = "PickerFieldUIContext";
function PickerFieldUI(props) {
  const {
    fieldResponse,
    defaultOpenPickerIcon
  } = props;
  const translations = usePickerTranslations();
  const pickerContext = useNullablePickerContext();
  const pickerFieldUIContext = React68.useContext(PickerFieldUIContext);
  const {
    textFieldProps,
    onClear,
    clearable,
    openPickerAriaLabel,
    clearButtonPosition: clearButtonPositionProp = "end",
    openPickerButtonPosition: openPickerButtonPositionProp = "end"
  } = cleanFieldResponse(fieldResponse);
  const ownerState = useFieldOwnerState(textFieldProps);
  const handleClickOpeningButton = useEventCallback_default((event) => {
    event.preventDefault();
    pickerContext?.setOpen((prev) => !prev);
  });
  const triggerStatus = pickerContext ? pickerContext.triggerStatus : "hidden";
  const clearButtonPosition = clearable ? clearButtonPositionProp : null;
  const openPickerButtonPosition = triggerStatus !== "hidden" ? openPickerButtonPositionProp : null;
  const TextField = pickerFieldUIContext.slots.textField ?? (fieldResponse.enableAccessibleFieldDOMStructure === false ? TextField_default : PickersTextField);
  const InputAdornment = pickerFieldUIContext.slots.inputAdornment ?? InputAdornment_default;
  const _useSlotProps = useSlotProps_default({
    elementType: InputAdornment,
    externalSlotProps: pickerFieldUIContext.slotProps.inputAdornment,
    additionalProps: {
      position: "start"
    },
    ownerState: _extends({}, ownerState, {
      position: "start"
    })
  }), startInputAdornmentProps = _objectWithoutPropertiesLoose(_useSlotProps, _excluded42);
  const _useSlotProps2 = useSlotProps_default({
    elementType: InputAdornment,
    externalSlotProps: pickerFieldUIContext.slotProps.inputAdornment,
    additionalProps: {
      position: "end"
    },
    ownerState: _extends({}, ownerState, {
      position: "end"
    })
  }), endInputAdornmentProps = _objectWithoutPropertiesLoose(_useSlotProps2, _excluded52);
  const OpenPickerButton = pickerFieldUIContext.slots.openPickerButton ?? IconButton_default;
  const _useSlotProps3 = useSlotProps_default({
    elementType: OpenPickerButton,
    externalSlotProps: pickerFieldUIContext.slotProps.openPickerButton,
    additionalProps: {
      disabled: triggerStatus === "disabled",
      onClick: handleClickOpeningButton,
      "aria-label": openPickerAriaLabel,
      edge: (
        // open button is always rendered at the edge
        textFieldProps.variant !== "standard" ? openPickerButtonPosition : false
      )
    },
    ownerState
  }), openPickerButtonProps = _objectWithoutPropertiesLoose(_useSlotProps3, _excluded62);
  const OpenPickerIcon = pickerFieldUIContext.slots.openPickerIcon ?? defaultOpenPickerIcon;
  const openPickerIconProps = useSlotProps_default({
    elementType: OpenPickerIcon,
    externalSlotProps: pickerFieldUIContext.slotProps.openPickerIcon,
    ownerState
  });
  const ClearButton = pickerFieldUIContext.slots.clearButton ?? IconButton_default;
  const _useSlotProps4 = useSlotProps_default({
    elementType: ClearButton,
    externalSlotProps: pickerFieldUIContext.slotProps.clearButton,
    className: "clearButton",
    additionalProps: {
      title: translations.fieldClearLabel,
      tabIndex: -1,
      onClick: onClear,
      disabled: fieldResponse.disabled || fieldResponse.readOnly,
      edge: (
        // clear button can only be at the edge if it's position differs from the open button
        textFieldProps.variant !== "standard" && clearButtonPosition !== openPickerButtonPosition ? clearButtonPosition : false
      )
    },
    ownerState
  }), clearButtonProps = _objectWithoutPropertiesLoose(_useSlotProps4, _excluded72);
  const ClearIcon2 = pickerFieldUIContext.slots.clearIcon ?? ClearIcon;
  const clearIconProps = useSlotProps_default({
    elementType: ClearIcon2,
    externalSlotProps: pickerFieldUIContext.slotProps.clearIcon,
    additionalProps: {
      fontSize: "small"
    },
    ownerState
  });
  textFieldProps.ref = useForkRef(textFieldProps.ref, pickerContext?.rootRef);
  const additionalTextFieldInputProps = {};
  const textFieldInputProps = resolveComponentProps_default((major >= 6 && textFieldProps?.slotProps?.input) ?? textFieldProps.InputProps, ownerState);
  if (pickerContext) {
    additionalTextFieldInputProps.ref = pickerContext.triggerRef;
  }
  if (!textFieldInputProps?.startAdornment && (clearButtonPosition === "start" || openPickerButtonPosition === "start")) {
    additionalTextFieldInputProps.startAdornment = (0, import_jsx_runtime43.jsxs)(InputAdornment, _extends({}, startInputAdornmentProps, {
      children: [openPickerButtonPosition === "start" && (0, import_jsx_runtime43.jsx)(OpenPickerButton, _extends({}, openPickerButtonProps, {
        children: (0, import_jsx_runtime43.jsx)(OpenPickerIcon, _extends({}, openPickerIconProps))
      })), clearButtonPosition === "start" && (0, import_jsx_runtime43.jsx)(ClearButton, _extends({}, clearButtonProps, {
        children: (0, import_jsx_runtime43.jsx)(ClearIcon2, _extends({}, clearIconProps))
      }))]
    }));
  }
  if (!textFieldInputProps?.endAdornment && (clearButtonPosition === "end" || openPickerButtonPosition === "end")) {
    additionalTextFieldInputProps.endAdornment = (0, import_jsx_runtime43.jsxs)(InputAdornment, _extends({}, endInputAdornmentProps, {
      children: [clearButtonPosition === "end" && (0, import_jsx_runtime43.jsx)(ClearButton, _extends({}, clearButtonProps, {
        children: (0, import_jsx_runtime43.jsx)(ClearIcon2, _extends({}, clearIconProps))
      })), openPickerButtonPosition === "end" && (0, import_jsx_runtime43.jsx)(OpenPickerButton, _extends({}, openPickerButtonProps, {
        children: (0, import_jsx_runtime43.jsx)(OpenPickerIcon, _extends({}, openPickerIconProps))
      }))]
    }));
  }
  if (!additionalTextFieldInputProps?.endAdornment && !additionalTextFieldInputProps?.startAdornment && pickerFieldUIContext.slots.inputAdornment) {
    additionalTextFieldInputProps.endAdornment = (0, import_jsx_runtime43.jsx)(InputAdornment, _extends({}, endInputAdornmentProps));
  }
  if (clearButtonPosition != null) {
    textFieldProps.sx = [{
      "& .clearButton": {
        opacity: 1
      },
      "@media (pointer: fine)": {
        "& .clearButton": {
          opacity: 0
        },
        "&:hover, &:focus-within": {
          ".clearButton": {
            opacity: 1
          }
        }
      }
    }, ...Array.isArray(textFieldProps.sx) ? textFieldProps.sx : [textFieldProps.sx]];
  }
  const resolvedTextFieldInputProps = major >= 6 && textFieldProps?.slotProps?.input ? resolveComponentProps_default(mergeSlotProps(textFieldInputProps, additionalTextFieldInputProps), ownerState) : _extends({}, textFieldInputProps, additionalTextFieldInputProps);
  textFieldProps.inputProps = major >= 6 && textFieldProps?.slotProps?.htmlInput ? resolveComponentProps_default(textFieldProps.slotProps.htmlInput, ownerState) : textFieldProps.inputProps;
  delete textFieldProps?.slotProps?.input;
  if (fieldResponse.enableAccessibleFieldDOMStructure) {
    delete textFieldProps?.slotProps;
  }
  return (0, import_jsx_runtime43.jsx)(TextField, _extends({}, textFieldProps, {
    InputProps: resolvedTextFieldInputProps
  }));
}
function mergeSlotProps(slotPropsA, slotPropsB) {
  if (!slotPropsA) {
    return slotPropsB;
  }
  if (!slotPropsB) {
    return slotPropsA;
  }
  return (ownerState) => {
    return _extends({}, resolveComponentProps_default(slotPropsB, ownerState), resolveComponentProps_default(slotPropsA, ownerState));
  };
}
function useFieldTextFieldProps(parameters) {
  const {
    ref,
    externalForwardedProps,
    slotProps
  } = parameters;
  const pickerFieldUIContext = React68.useContext(PickerFieldUIContext);
  const pickerContext = useNullablePickerContext();
  const ownerState = useFieldOwnerState(externalForwardedProps);
  const {
    InputProps,
    inputProps
  } = externalForwardedProps, otherExternalForwardedProps = _objectWithoutPropertiesLoose(externalForwardedProps, _excluded82);
  const textFieldProps = useSlotProps_default({
    elementType: PickersTextField,
    externalSlotProps: mergeSlotProps(pickerFieldUIContext.slotProps.textField, slotProps?.textField),
    externalForwardedProps: otherExternalForwardedProps,
    additionalProps: {
      ref,
      sx: pickerContext?.rootSx,
      label: pickerContext?.label,
      name: pickerContext?.name,
      className: pickerContext?.rootClassName,
      inputRef: pickerFieldUIContext.inputRef
    },
    ownerState
  });
  textFieldProps.inputProps = _extends({}, inputProps, textFieldProps.inputProps);
  textFieldProps.InputProps = _extends({}, InputProps, textFieldProps.InputProps);
  return textFieldProps;
}
function PickerFieldUIContextProvider(props) {
  const {
    slots = {},
    slotProps = {},
    inputRef,
    children
  } = props;
  const contextValue = React68.useMemo(() => ({
    inputRef,
    slots: {
      openPickerButton: slots.openPickerButton,
      openPickerIcon: slots.openPickerIcon,
      textField: slots.textField,
      inputAdornment: slots.inputAdornment,
      clearIcon: slots.clearIcon,
      clearButton: slots.clearButton
    },
    slotProps: {
      openPickerButton: slotProps.openPickerButton,
      openPickerIcon: slotProps.openPickerIcon,
      textField: slotProps.textField,
      inputAdornment: slotProps.inputAdornment,
      clearIcon: slotProps.clearIcon,
      clearButton: slotProps.clearButton
    }
  }), [inputRef, slots.openPickerButton, slots.openPickerIcon, slots.textField, slots.inputAdornment, slots.clearIcon, slots.clearButton, slotProps.openPickerButton, slotProps.openPickerIcon, slotProps.textField, slotProps.inputAdornment, slotProps.clearIcon, slotProps.clearButton]);
  return (0, import_jsx_runtime43.jsx)(PickerFieldUIContext.Provider, {
    value: contextValue,
    children
  });
}

// node_modules/.pnpm/@mui+x-date-pickers@8.26.0_@emotion+react@11.14.0_@types+react@19.2.7_react@19.2.3__@em_45e4fa7585d24d6c7a3cddedaa636f9d/node_modules/@mui/x-date-pickers/esm/DateField/DateField.js
var import_jsx_runtime44 = __toESM(require_jsx_runtime(), 1);
var _excluded19 = ["slots", "slotProps"];
var DateField = React69.forwardRef(function DateField2(inProps, inRef) {
  const themeProps = useThemeProps({
    props: inProps,
    name: "MuiDateField"
  });
  const {
    slots,
    slotProps
  } = themeProps, other = _objectWithoutPropertiesLoose(themeProps, _excluded19);
  const textFieldProps = useFieldTextFieldProps({
    slotProps,
    ref: inRef,
    externalForwardedProps: other
  });
  const fieldResponse = useDateField(textFieldProps);
  return (0, import_jsx_runtime44.jsx)(PickerFieldUIContextProvider, {
    slots,
    slotProps,
    inputRef: other.inputRef,
    children: (0, import_jsx_runtime44.jsx)(PickerFieldUI, {
      fieldResponse,
      defaultOpenPickerIcon: CalendarIcon
    })
  });
});
if (true) DateField.displayName = "DateField";
true ? DateField.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * If `true`, the `input` element is focused during the first mount.
   * @default false
   */
  autoFocus: import_prop_types13.default.bool,
  className: import_prop_types13.default.string,
  /**
   * If `true`, a clear button will be shown in the field allowing value clearing.
   * @default false
   */
  clearable: import_prop_types13.default.bool,
  /**
   * The position at which the clear button is placed.
   * If the field is not clearable, the button is not rendered.
   * @default 'end'
   */
  clearButtonPosition: import_prop_types13.default.oneOf(["end", "start"]),
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'primary'
   */
  color: import_prop_types13.default.oneOf(["error", "info", "primary", "secondary", "success", "warning"]),
  component: import_prop_types13.default.elementType,
  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue: import_prop_types13.default.object,
  /**
   * If `true`, the component is disabled.
   * When disabled, the value cannot be changed and no interaction is possible.
   * @default false
   */
  disabled: import_prop_types13.default.bool,
  /**
   * If `true`, disable values after the current date for date components, time for time components and both for date time components.
   * @default false
   */
  disableFuture: import_prop_types13.default.bool,
  /**
   * If `true`, disable values before the current date for date components, time for time components and both for date time components.
   * @default false
   */
  disablePast: import_prop_types13.default.bool,
  /**
   * @default true
   */
  enableAccessibleFieldDOMStructure: import_prop_types13.default.bool,
  /**
   * If `true`, the component is displayed in focused state.
   */
  focused: import_prop_types13.default.bool,
  /**
   * Format of the date when rendered in the input(s).
   */
  format: import_prop_types13.default.string,
  /**
   * Density of the format when rendered in the input.
   * Setting `formatDensity` to `"spacious"` will add a space before and after each `/`, `-` and `.` character.
   * @default "dense"
   */
  formatDensity: import_prop_types13.default.oneOf(["dense", "spacious"]),
  /**
   * Props applied to the [`FormHelperText`](https://mui.com/material-ui/api/form-helper-text/) element.
   * @deprecated Use `slotProps.formHelperText` instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  FormHelperTextProps: import_prop_types13.default.object,
  /**
   * If `true`, the input will take up the full width of its container.
   * @default false
   */
  fullWidth: import_prop_types13.default.bool,
  /**
   * The helper text content.
   */
  helperText: import_prop_types13.default.node,
  /**
   * If `true`, the label is hidden.
   * This is used to increase density for a `FilledInput`.
   * Be sure to add `aria-label` to the `input` element.
   * @default false
   */
  hiddenLabel: import_prop_types13.default.bool,
  /**
   * The id of the `input` element.
   * Use this prop to make `label` and `helperText` accessible for screen readers.
   */
  id: import_prop_types13.default.string,
  /**
   * Props applied to the [`InputLabel`](https://mui.com/material-ui/api/input-label/) element.
   * Pointer events like `onClick` are enabled if and only if `shrink` is `true`.
   * @deprecated Use `slotProps.inputLabel` instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  InputLabelProps: import_prop_types13.default.object,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input#attributes) applied to the `input` element.
   * @deprecated Use `slotProps.htmlInput` instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  inputProps: import_prop_types13.default.object,
  /**
   * Props applied to the Input element.
   * It will be a [`FilledInput`](https://mui.com/material-ui/api/filled-input/),
   * [`OutlinedInput`](https://mui.com/material-ui/api/outlined-input/) or [`Input`](https://mui.com/material-ui/api/input/)
   * component depending on the `variant` prop value.
   * @deprecated Use `slotProps.input` instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  InputProps: import_prop_types13.default.object,
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: refType_default,
  /**
   * The label content.
   */
  label: import_prop_types13.default.node,
  /**
   * If `dense` or `normal`, will adjust vertical spacing of this and contained components.
   * @default 'none'
   */
  margin: import_prop_types13.default.oneOf(["dense", "none", "normal"]),
  /**
   * Maximal selectable date.
   * @default 2099-12-31
   */
  maxDate: import_prop_types13.default.object,
  /**
   * Minimal selectable date.
   * @default 1900-01-01
   */
  minDate: import_prop_types13.default.object,
  /**
   * Name attribute of the `input` element.
   */
  name: import_prop_types13.default.string,
  onBlur: import_prop_types13.default.func,
  /**
   * Callback fired when the value changes.
   * @template TValue The value type. It will be the same type as `value` or `null`. It can be in `[start, end]` format in case of range value.
   * @template TError The validation error type. It will be either `string` or a `null`. It can be in `[start, end]` format in case of range value.
   * @param {TValue} value The new value.
   * @param {FieldChangeHandlerContext<TError>} context The context containing the validation result of the current value.
   */
  onChange: import_prop_types13.default.func,
  /**
   * Callback fired when the clear button is clicked.
   */
  onClear: import_prop_types13.default.func,
  /**
   * Callback fired when the error associated with the current value changes.
   * When a validation error is detected, the `error` parameter contains a non-null value.
   * This can be used to render an appropriate form error.
   * @template TError The validation error type. It will be either `string` or a `null`. It can be in `[start, end]` format in case of range value.
   * @template TValue The value type. It will be the same type as `value` or `null`. It can be in `[start, end]` format in case of range value.
   * @param {TError} error The reason why the current value is not valid.
   * @param {TValue} value The value associated with the error.
   */
  onError: import_prop_types13.default.func,
  onFocus: import_prop_types13.default.func,
  /**
   * Callback fired when the selected sections change.
   * @param {FieldSelectedSections} newValue The new selected sections.
   */
  onSelectedSectionsChange: import_prop_types13.default.func,
  /**
   * The position at which the opening button is placed.
   * If there is no Picker to open, the button is not rendered
   * @default 'end'
   */
  openPickerButtonPosition: import_prop_types13.default.oneOf(["end", "start"]),
  /**
   * If `true`, the component is read-only.
   * When read-only, the value cannot be changed but the user can interact with the interface.
   * @default false
   */
  readOnly: import_prop_types13.default.bool,
  /**
   * The date used to generate a part of the new value that is not present in the format when both `value` and `defaultValue` are empty.
   * For example, on time fields it will be used to determine the date to set.
   * @default The closest valid date using the validation props, except callbacks such as `shouldDisableDate`. Value is rounded to the most granular section used.
   */
  referenceDate: import_prop_types13.default.object,
  /**
   * If `true`, the label is displayed as required and the `input` element is required.
   * @default false
   */
  required: import_prop_types13.default.bool,
  /**
   * The currently selected sections.
   * This prop accepts four formats:
   * 1. If a number is provided, the section at this index will be selected.
   * 2. If a string of type `FieldSectionType` is provided, the first section with that name will be selected.
   * 3. If `"all"` is provided, all the sections will be selected.
   * 4. If `null` is provided, no section will be selected.
   * If not provided, the selected sections will be handled internally.
   */
  selectedSections: import_prop_types13.default.oneOfType([import_prop_types13.default.oneOf(["all", "day", "empty", "hours", "meridiem", "minutes", "month", "seconds", "weekDay", "year"]), import_prop_types13.default.number]),
  /**
   * Disable specific date.
   *
   * Warning: This function can be called multiple times (for example when rendering date calendar, checking if focus can be moved to a certain date, etc.). Expensive computations can impact performance.
   *
   * @param {PickerValidDate} day The date to test.
   * @returns {boolean} If `true` the date will be disabled.
   */
  shouldDisableDate: import_prop_types13.default.func,
  /**
   * Disable specific month.
   * @param {PickerValidDate} month The month to test.
   * @returns {boolean} If `true`, the month will be disabled.
   */
  shouldDisableMonth: import_prop_types13.default.func,
  /**
   * Disable specific year.
   * @param {PickerValidDate} year The year to test.
   * @returns {boolean} If `true`, the year will be disabled.
   */
  shouldDisableYear: import_prop_types13.default.func,
  /**
   * If `true`, the format will respect the leading zeroes (for example on dayjs, the format `M/D/YYYY` will render `8/16/2018`)
   * If `false`, the format will always add leading zeroes (for example on dayjs, the format `M/D/YYYY` will render `08/16/2018`)
   *
   * Warning n°1: Luxon is not able to respect the leading zeroes when using macro tokens (for example "DD"), so `shouldRespectLeadingZeros={true}` might lead to inconsistencies when using `AdapterLuxon`.
   *
   * Warning n°2: When `shouldRespectLeadingZeros={true}`, the field will add an invisible character on the sections containing a single digit to make sure `onChange` is fired.
   * If you need to get the clean value from the input, you can remove this character using `input.value.replace(/\u200e/g, '')`.
   *
   * Warning n°3: When used in strict mode, dayjs and moment require to respect the leading zeros.
   * This mean that when using `shouldRespectLeadingZeros={false}`, if you retrieve the value directly from the input (not listening to `onChange`) and your format contains tokens without leading zeros, the value will not be parsed by your library.
   *
   * @default false
   */
  shouldRespectLeadingZeros: import_prop_types13.default.bool,
  /**
   * The size of the component.
   * @default 'medium'
   */
  size: import_prop_types13.default.oneOf(["medium", "small"]),
  /**
   * The props used for each component slot.
   * @default {}
   */
  slotProps: import_prop_types13.default.object,
  /**
   * Overridable component slots.
   * @default {}
   */
  slots: import_prop_types13.default.object,
  style: import_prop_types13.default.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types13.default.oneOfType([import_prop_types13.default.arrayOf(import_prop_types13.default.oneOfType([import_prop_types13.default.func, import_prop_types13.default.object, import_prop_types13.default.bool])), import_prop_types13.default.func, import_prop_types13.default.object]),
  /**
   * Choose which timezone to use for the value.
   * Example: "default", "system", "UTC", "America/New_York".
   * If you pass values from other timezones to some props, they will be converted to this timezone before being used.
   * @see See the {@link https://mui.com/x/react-date-pickers/timezone/ timezones documentation} for more details.
   * @default The timezone of the `value` or `defaultValue` prop is defined, 'default' otherwise.
   */
  timezone: import_prop_types13.default.string,
  /**
   * The ref object used to imperatively interact with the field.
   */
  unstableFieldRef: import_prop_types13.default.oneOfType([import_prop_types13.default.func, import_prop_types13.default.object]),
  /**
   * The selected value.
   * Used when the component is controlled.
   */
  value: import_prop_types13.default.object,
  /**
   * The variant to use.
   * @default 'outlined'
   */
  variant: import_prop_types13.default.oneOf(["filled", "outlined", "standard"])
} : void 0;

// node_modules/.pnpm/@mui+x-date-pickers@8.26.0_@emotion+react@11.14.0_@types+react@19.2.7_react@19.2.3__@em_45e4fa7585d24d6c7a3cddedaa636f9d/node_modules/@mui/x-date-pickers/esm/DateCalendar/DateCalendar.js
var React84 = __toESM(require_react(), 1);
var import_prop_types18 = __toESM(require_prop_types(), 1);

// node_modules/.pnpm/@mui+x-date-pickers@8.26.0_@emotion+react@11.14.0_@types+react@19.2.7_react@19.2.3__@em_45e4fa7585d24d6c7a3cddedaa636f9d/node_modules/@mui/x-date-pickers/esm/DateCalendar/useCalendarState.js
var React71 = __toESM(require_react(), 1);

// node_modules/.pnpm/@mui+x-date-pickers@8.26.0_@emotion+react@11.14.0_@types+react@19.2.7_react@19.2.3__@em_45e4fa7585d24d6c7a3cddedaa636f9d/node_modules/@mui/x-date-pickers/esm/DateCalendar/useIsDateDisabled.js
var React70 = __toESM(require_react(), 1);
var useIsDateDisabled = ({
  shouldDisableDate,
  shouldDisableMonth,
  shouldDisableYear,
  minDate,
  maxDate,
  disableFuture,
  disablePast,
  timezone
}) => {
  const adapter = usePickerAdapter();
  return React70.useCallback((day) => validateDate({
    adapter,
    value: day,
    timezone,
    props: {
      shouldDisableDate,
      shouldDisableMonth,
      shouldDisableYear,
      minDate,
      maxDate,
      disableFuture,
      disablePast
    }
  }) !== null, [adapter, shouldDisableDate, shouldDisableMonth, shouldDisableYear, minDate, maxDate, disableFuture, disablePast, timezone]);
};

// node_modules/.pnpm/@mui+x-date-pickers@8.26.0_@emotion+react@11.14.0_@types+react@19.2.7_react@19.2.3__@em_45e4fa7585d24d6c7a3cddedaa636f9d/node_modules/@mui/x-date-pickers/esm/DateCalendar/useCalendarState.js
var createCalendarStateReducer = (reduceAnimations, adapter) => (state, action) => {
  switch (action.type) {
    case "setVisibleDate":
      return _extends({}, state, {
        slideDirection: action.direction,
        currentMonth: action.month,
        isMonthSwitchingAnimating: !adapter.isSameMonth(action.month, state.currentMonth) && !reduceAnimations && !action.skipAnimation,
        focusedDay: action.focusedDay
      });
    case "changeMonthTimezone": {
      const newTimezone = action.newTimezone;
      if (adapter.getTimezone(state.currentMonth) === newTimezone) {
        return state;
      }
      let newCurrentMonth = adapter.setTimezone(state.currentMonth, newTimezone);
      if (adapter.getMonth(newCurrentMonth) !== adapter.getMonth(state.currentMonth)) {
        newCurrentMonth = adapter.setMonth(newCurrentMonth, adapter.getMonth(state.currentMonth));
      }
      return _extends({}, state, {
        currentMonth: newCurrentMonth
      });
    }
    case "finishMonthSwitchingAnimation":
      return _extends({}, state, {
        isMonthSwitchingAnimating: false
      });
    default:
      throw new Error("missing support");
  }
};
var useCalendarState = (params) => {
  const {
    value,
    referenceDate: referenceDateProp,
    disableFuture,
    disablePast,
    maxDate,
    minDate,
    onMonthChange,
    onYearChange,
    reduceAnimations,
    shouldDisableDate,
    timezone,
    getCurrentMonthFromVisibleDate
  } = params;
  const adapter = usePickerAdapter();
  const reducerFn = React71.useRef(createCalendarStateReducer(Boolean(reduceAnimations), adapter)).current;
  const referenceDate = React71.useMemo(
    () => {
      return singleItemValueManager.getInitialReferenceValue({
        value,
        adapter,
        timezone,
        props: params,
        referenceDate: referenceDateProp,
        granularity: SECTION_TYPE_GRANULARITY.day
      });
    },
    // We want the `referenceDate` to update on prop and `timezone` change (https://github.com/mui/mui-x/issues/10804)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [referenceDateProp, timezone]
  );
  const [calendarState, dispatch] = React71.useReducer(reducerFn, {
    isMonthSwitchingAnimating: false,
    focusedDay: referenceDate,
    // Keep the time from the reference date when computing the current month anchor.
    // Using startOfMonth would reset the time to 00:00 which breaks expectations
    // that month selections preserve the referenceDate time when no value is provided.
    // See tests: "should use `referenceDate` when no value defined".
    currentMonth: adapter.setDate(referenceDate, 1),
    slideDirection: "left"
  });
  const isDateDisabled = useIsDateDisabled({
    shouldDisableDate,
    minDate,
    maxDate,
    disableFuture,
    disablePast,
    timezone
  });
  React71.useEffect(() => {
    dispatch({
      type: "changeMonthTimezone",
      newTimezone: adapter.getTimezone(referenceDate)
    });
  }, [referenceDate, adapter]);
  const setVisibleDate = useEventCallback_default(({
    target,
    reason
  }) => {
    if (reason === "cell-interaction" && calendarState.focusedDay != null && adapter.isSameDay(target, calendarState.focusedDay)) {
      return;
    }
    const skipAnimation = reason === "cell-interaction";
    let month;
    let focusedDay;
    if (reason === "cell-interaction") {
      month = getCurrentMonthFromVisibleDate(target, calendarState.currentMonth);
      focusedDay = target;
    } else {
      month = adapter.isSameMonth(target, calendarState.currentMonth) ? calendarState.currentMonth : adapter.startOfMonth(target);
      focusedDay = target;
      if (isDateDisabled(focusedDay)) {
        const startOfMonth = adapter.startOfMonth(target);
        const endOfMonth = adapter.endOfMonth(target);
        focusedDay = findClosestEnabledDate({
          adapter,
          date: focusedDay,
          minDate: adapter.isBefore(minDate, startOfMonth) ? startOfMonth : minDate,
          maxDate: adapter.isAfter(maxDate, endOfMonth) ? endOfMonth : maxDate,
          disablePast,
          disableFuture,
          isDateDisabled,
          timezone
        });
      }
    }
    const hasChangedMonth = !adapter.isSameMonth(calendarState.currentMonth, month);
    const hasChangedYear = !adapter.isSameYear(calendarState.currentMonth, month);
    if (hasChangedMonth) {
      onMonthChange?.(month);
    }
    if (hasChangedYear) {
      onYearChange?.(adapter.startOfYear(month));
    }
    dispatch({
      type: "setVisibleDate",
      month,
      direction: adapter.isAfterDay(month, calendarState.currentMonth) ? "left" : "right",
      focusedDay: calendarState.focusedDay != null && focusedDay != null && adapter.isSameDay(focusedDay, calendarState.focusedDay) ? calendarState.focusedDay : focusedDay,
      skipAnimation
    });
  });
  const onMonthSwitchingAnimationEnd = React71.useCallback(() => {
    dispatch({
      type: "finishMonthSwitchingAnimation"
    });
  }, []);
  return {
    referenceDate,
    calendarState,
    setVisibleDate,
    isDateDisabled,
    onMonthSwitchingAnimationEnd
  };
};

// node_modules/.pnpm/@mui+x-date-pickers@8.26.0_@emotion+react@11.14.0_@types+react@19.2.7_react@19.2.3__@em_45e4fa7585d24d6c7a3cddedaa636f9d/node_modules/@mui/x-date-pickers/esm/DateCalendar/PickersFadeTransitionGroup.js
var React72 = __toESM(require_react(), 1);

// node_modules/.pnpm/@mui+x-date-pickers@8.26.0_@emotion+react@11.14.0_@types+react@19.2.7_react@19.2.3__@em_45e4fa7585d24d6c7a3cddedaa636f9d/node_modules/@mui/x-date-pickers/esm/DateCalendar/pickersFadeTransitionGroupClasses.js
var getPickersFadeTransitionGroupUtilityClass = (slot) => generateUtilityClass("MuiPickersFadeTransitionGroup", slot);
var pickersFadeTransitionGroupClasses = generateUtilityClasses("MuiPickersFadeTransitionGroup", ["root"]);

// node_modules/.pnpm/@mui+x-date-pickers@8.26.0_@emotion+react@11.14.0_@types+react@19.2.7_react@19.2.3__@em_45e4fa7585d24d6c7a3cddedaa636f9d/node_modules/@mui/x-date-pickers/esm/DateCalendar/PickersFadeTransitionGroup.js
var import_jsx_runtime45 = __toESM(require_jsx_runtime(), 1);
var _excluded20 = ["children"];
var useUtilityClasses12 = (classes) => {
  const slots = {
    root: ["root"]
  };
  return composeClasses(slots, getPickersFadeTransitionGroupUtilityClass, classes);
};
var PickersFadeTransitionGroupRoot = styled_default(TransitionGroup_default, {
  name: "MuiPickersFadeTransitionGroup",
  slot: "Root"
})({
  display: "block",
  position: "relative"
});
function PickersFadeTransitionGroup(inProps) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiPickersFadeTransitionGroup"
  });
  const {
    className,
    reduceAnimations,
    transKey,
    classes: classesProp
  } = props;
  const {
    children
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded20);
  const classes = useUtilityClasses12(classesProp);
  const theme = useTheme();
  if (reduceAnimations) {
    return children;
  }
  return (0, import_jsx_runtime45.jsx)(PickersFadeTransitionGroupRoot, {
    className: clsx_default(classes.root, className),
    ownerState: other,
    children: (0, import_jsx_runtime45.jsx)(Fade_default, {
      appear: false,
      mountOnEnter: true,
      unmountOnExit: true,
      timeout: {
        appear: theme.transitions.duration.enteringScreen,
        enter: theme.transitions.duration.enteringScreen,
        exit: 0
      },
      children
    }, transKey)
  });
}

// node_modules/.pnpm/@mui+x-date-pickers@8.26.0_@emotion+react@11.14.0_@types+react@19.2.7_react@19.2.3__@em_45e4fa7585d24d6c7a3cddedaa636f9d/node_modules/@mui/x-date-pickers/esm/DateCalendar/DayCalendar.js
var React76 = __toESM(require_react(), 1);

// node_modules/.pnpm/@mui+x-date-pickers@8.26.0_@emotion+react@11.14.0_@types+react@19.2.7_react@19.2.3__@em_45e4fa7585d24d6c7a3cddedaa636f9d/node_modules/@mui/x-date-pickers/esm/PickersDay/PickersDay.js
var React74 = __toESM(require_react(), 1);
var import_prop_types14 = __toESM(require_prop_types(), 1);

// node_modules/.pnpm/@mui+x-date-pickers@8.26.0_@emotion+react@11.14.0_@types+react@19.2.7_react@19.2.3__@em_45e4fa7585d24d6c7a3cddedaa636f9d/node_modules/@mui/x-date-pickers/esm/PickersDay/pickersDayClasses.js
function getPickersDayUtilityClass(slot) {
  return generateUtilityClass("MuiPickersDay", slot);
}
var pickersDayClasses = generateUtilityClasses("MuiPickersDay", ["root", "dayWithMargin", "dayOutsideMonth", "hiddenDaySpacingFiller", "today", "selected", "disabled"]);

// node_modules/.pnpm/@mui+x-date-pickers@8.26.0_@emotion+react@11.14.0_@types+react@19.2.7_react@19.2.3__@em_45e4fa7585d24d6c7a3cddedaa636f9d/node_modules/@mui/x-date-pickers/esm/PickersDay/usePickerDayOwnerState.js
var React73 = __toESM(require_react(), 1);
function usePickerDayOwnerState(parameters) {
  const {
    disabled,
    selected,
    today,
    outsideCurrentMonth,
    day,
    disableMargin,
    disableHighlightToday,
    showDaysOutsideCurrentMonth
  } = parameters;
  const adapter = usePickerAdapter();
  const {
    ownerState: pickerOwnerState
  } = usePickerPrivateContext();
  return React73.useMemo(() => _extends({}, pickerOwnerState, {
    day,
    isDaySelected: selected ?? false,
    isDayDisabled: disabled ?? false,
    isDayCurrent: today ?? false,
    isDayOutsideMonth: outsideCurrentMonth ?? false,
    isDayStartOfWeek: adapter.isSameDay(day, adapter.startOfWeek(day)),
    isDayEndOfWeek: adapter.isSameDay(day, adapter.endOfWeek(day)),
    disableMargin: disableMargin ?? false,
    disableHighlightToday: disableHighlightToday ?? false,
    showDaysOutsideCurrentMonth: showDaysOutsideCurrentMonth ?? false
  }), [adapter, pickerOwnerState, day, selected, disabled, today, outsideCurrentMonth, disableMargin, disableHighlightToday, showDaysOutsideCurrentMonth]);
}

// node_modules/.pnpm/@mui+x-date-pickers@8.26.0_@emotion+react@11.14.0_@types+react@19.2.7_react@19.2.3__@em_45e4fa7585d24d6c7a3cddedaa636f9d/node_modules/@mui/x-date-pickers/esm/PickersDay/PickersDay.js
var import_jsx_runtime46 = __toESM(require_jsx_runtime(), 1);
var _excluded21 = ["autoFocus", "className", "classes", "hidden", "isAnimating", "onClick", "onDaySelect", "onFocus", "onBlur", "onKeyDown", "onMouseDown", "onMouseEnter", "children", "isFirstVisibleCell", "isLastVisibleCell", "day", "selected", "disabled", "today", "outsideCurrentMonth", "disableMargin", "disableHighlightToday", "showDaysOutsideCurrentMonth"];
var useUtilityClasses13 = (classes, ownerState) => {
  const {
    isDaySelected,
    isDayDisabled,
    isDayCurrent,
    isDayOutsideMonth,
    disableMargin,
    disableHighlightToday,
    showDaysOutsideCurrentMonth
  } = ownerState;
  const isHiddenDaySpacingFiller = isDayOutsideMonth && !showDaysOutsideCurrentMonth;
  const slots = {
    root: ["root", isDaySelected && !isHiddenDaySpacingFiller && "selected", isDayDisabled && "disabled", !disableMargin && "dayWithMargin", !disableHighlightToday && isDayCurrent && "today", isDayOutsideMonth && showDaysOutsideCurrentMonth && "dayOutsideMonth", isHiddenDaySpacingFiller && "hiddenDaySpacingFiller"],
    hiddenDaySpacingFiller: ["hiddenDaySpacingFiller"]
  };
  return composeClasses(slots, getPickersDayUtilityClass, classes);
};
var styleArg = ({
  theme
}) => _extends({}, theme.typography.caption, {
  width: DAY_SIZE,
  height: DAY_SIZE,
  borderRadius: "50%",
  padding: 0,
  // explicitly setting to `transparent` to avoid potentially getting impacted by change from the overridden component
  backgroundColor: "transparent",
  transition: theme.transitions.create("background-color", {
    duration: theme.transitions.duration.short
  }),
  color: (theme.vars || theme).palette.text.primary,
  "@media (pointer: fine)": {
    "&:hover": {
      backgroundColor: theme.vars ? `rgba(${theme.vars.palette.primary.mainChannel} / ${theme.vars.palette.action.hoverOpacity})` : alpha(theme.palette.primary.main, theme.palette.action.hoverOpacity)
    }
  },
  "&:focus": {
    backgroundColor: theme.vars ? `rgba(${theme.vars.palette.primary.mainChannel} / ${theme.vars.palette.action.focusOpacity})` : alpha(theme.palette.primary.main, theme.palette.action.focusOpacity),
    [`&.${pickersDayClasses.selected}`]: {
      willChange: "background-color",
      backgroundColor: (theme.vars || theme).palette.primary.dark
    }
  },
  [`&.${pickersDayClasses.selected}`]: {
    color: (theme.vars || theme).palette.primary.contrastText,
    backgroundColor: (theme.vars || theme).palette.primary.main,
    fontWeight: theme.typography.fontWeightMedium,
    "&:hover": {
      willChange: "background-color",
      backgroundColor: (theme.vars || theme).palette.primary.dark
    }
  },
  [`&.${pickersDayClasses.disabled}:not(.${pickersDayClasses.selected})`]: {
    color: (theme.vars || theme).palette.text.disabled
  },
  [`&.${pickersDayClasses.disabled}&.${pickersDayClasses.selected}`]: {
    opacity: 0.6
  },
  variants: [{
    props: {
      disableMargin: false
    },
    style: {
      margin: `0 ${DAY_MARGIN}px`
    }
  }, {
    props: {
      isDayOutsideMonth: true,
      showDaysOutsideCurrentMonth: true
    },
    style: {
      color: (theme.vars || theme).palette.text.secondary
    }
  }, {
    props: {
      disableHighlightToday: false,
      isDayCurrent: true
    },
    style: {
      [`&:not(.${pickersDayClasses.selected})`]: {
        border: `1px solid ${(theme.vars || theme).palette.text.secondary}`
      }
    }
  }]
});
var overridesResolver = (props, styles) => {
  const {
    ownerState
  } = props;
  return [styles.root, !ownerState.disableMargin && styles.dayWithMargin, !ownerState.disableHighlightToday && ownerState.isDayCurrent && styles.today, ownerState.isDayOutsideMonth && ownerState.showDaysOutsideCurrentMonth && styles.dayOutsideMonth, ownerState.isDayOutsideMonth && !ownerState.showDaysOutsideCurrentMonth && styles.hiddenDaySpacingFiller];
};
var PickersDayRoot = styled_default(ButtonBase_default, {
  name: "MuiPickersDay",
  slot: "Root",
  overridesResolver
})(styleArg);
var PickersDayFiller = styled_default("div", {
  name: "MuiPickersDay",
  slot: "Root",
  overridesResolver
})(({
  theme
}) => _extends({}, styleArg({
  theme
}), {
  // visibility: 'hidden' does not work here as it hides the element from screen readers as well
  opacity: 0,
  pointerEvents: "none"
}));
var noop2 = () => {
};
var PickersDayRaw = React74.forwardRef(function PickersDay(inProps, forwardedRef) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiPickersDay"
  });
  const {
    autoFocus = false,
    className,
    classes: classesProp,
    isAnimating,
    onClick,
    onDaySelect,
    onFocus = noop2,
    onBlur = noop2,
    onKeyDown = noop2,
    onMouseDown = noop2,
    onMouseEnter = noop2,
    children,
    day,
    selected,
    disabled,
    today,
    outsideCurrentMonth,
    disableMargin,
    disableHighlightToday,
    showDaysOutsideCurrentMonth
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded21);
  const ownerState = usePickerDayOwnerState({
    day,
    selected,
    disabled,
    today,
    outsideCurrentMonth,
    disableMargin,
    disableHighlightToday,
    showDaysOutsideCurrentMonth
  });
  const classes = useUtilityClasses13(classesProp, ownerState);
  const adapter = usePickerAdapter();
  const ref = React74.useRef(null);
  const handleRef = useForkRef(ref, forwardedRef);
  useEnhancedEffect_default(() => {
    if (autoFocus && !disabled && !isAnimating && !outsideCurrentMonth) {
      ref.current.focus();
    }
  }, [autoFocus, disabled, isAnimating, outsideCurrentMonth]);
  const handleMouseDown = (event) => {
    onMouseDown(event);
    if (outsideCurrentMonth) {
      event.preventDefault();
    }
  };
  const handleClick = (event) => {
    event.defaultMuiPrevented = true;
    if (!disabled) {
      onDaySelect(day);
    }
    if (outsideCurrentMonth) {
      event.currentTarget.focus();
    }
    if (onClick) {
      onClick(event);
    }
  };
  if (outsideCurrentMonth && !showDaysOutsideCurrentMonth) {
    return (0, import_jsx_runtime46.jsx)(PickersDayFiller, {
      className: clsx_default(classes.root, classes.hiddenDaySpacingFiller, className),
      ownerState,
      role: other.role
    });
  }
  return (0, import_jsx_runtime46.jsx)(PickersDayRoot, _extends({
    className: clsx_default(classes.root, className),
    ref: handleRef,
    centerRipple: true,
    disabled,
    tabIndex: selected ? 0 : -1,
    onKeyDown: (event) => onKeyDown(event, day),
    onFocus: (event) => onFocus(event, day),
    onBlur: (event) => onBlur(event, day),
    onMouseEnter: (event) => onMouseEnter(event, day),
    onClick: handleClick,
    onMouseDown: handleMouseDown
  }, other, {
    ownerState,
    children: children ?? adapter.format(day, "dayOfMonth")
  }));
});
if (true) PickersDayRaw.displayName = "PickersDayRaw";
true ? PickersDayRaw.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * A ref for imperative actions.
   * It currently only supports `focusVisible()` action.
   */
  action: import_prop_types14.default.oneOfType([import_prop_types14.default.func, import_prop_types14.default.shape({
    current: import_prop_types14.default.shape({
      focusVisible: import_prop_types14.default.func.isRequired
    })
  })]),
  /**
   * If `true`, the ripples are centered.
   * They won't start at the cursor interaction position.
   * @default false
   */
  centerRipple: import_prop_types14.default.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: import_prop_types14.default.object,
  className: import_prop_types14.default.string,
  component: import_prop_types14.default.elementType,
  /**
   * The date to show.
   */
  day: import_prop_types14.default.object.isRequired,
  /**
   * If `true`, renders as disabled.
   * @default false
   */
  disabled: import_prop_types14.default.bool,
  /**
   * If `true`, today's date is rendering without highlighting with circle.
   * @default false
   */
  disableHighlightToday: import_prop_types14.default.bool,
  /**
   * If `true`, days are rendering without margin. Useful for displaying linked range of days.
   * @default false
   */
  disableMargin: import_prop_types14.default.bool,
  /**
   * If `true`, the ripple effect is disabled.
   *
   * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
   * to highlight the element by applying separate styles with the `.Mui-focusVisible` class.
   * @default false
   */
  disableRipple: import_prop_types14.default.bool,
  /**
   * If `true`, the touch ripple effect is disabled.
   * @default false
   */
  disableTouchRipple: import_prop_types14.default.bool,
  /**
   * If `true`, the base button will have a keyboard focus ripple.
   * @default false
   */
  focusRipple: import_prop_types14.default.bool,
  /**
   * This prop can help identify which element has keyboard focus.
   * The class name will be applied when the element gains the focus through keyboard interaction.
   * It's a polyfill for the [CSS :focus-visible selector](https://drafts.csswg.org/selectors-4/#the-focus-visible-pseudo).
   * The rationale for using this feature [is explained here](https://github.com/WICG/focus-visible/blob/HEAD/explainer.md).
   * A [polyfill can be used](https://github.com/WICG/focus-visible) to apply a `focus-visible` class to other components
   * if needed.
   */
  focusVisibleClassName: import_prop_types14.default.string,
  isAnimating: import_prop_types14.default.bool,
  /**
   * If `true`, day is the first visible cell of the month.
   * Either the first day of the month or the first day of the week depending on `showDaysOutsideCurrentMonth`.
   */
  isFirstVisibleCell: import_prop_types14.default.bool.isRequired,
  /**
   * If `true`, day is the last visible cell of the month.
   * Either the last day of the month or the last day of the week depending on `showDaysOutsideCurrentMonth`.
   */
  isLastVisibleCell: import_prop_types14.default.bool.isRequired,
  onBlur: import_prop_types14.default.func,
  onDaySelect: import_prop_types14.default.func.isRequired,
  onFocus: import_prop_types14.default.func,
  /**
   * Callback fired when the component is focused with a keyboard.
   * We trigger a `onFocus` callback too.
   */
  onFocusVisible: import_prop_types14.default.func,
  onKeyDown: import_prop_types14.default.func,
  onMouseEnter: import_prop_types14.default.func,
  /**
   * If `true`, day is outside of month and will be hidden.
   */
  outsideCurrentMonth: import_prop_types14.default.bool.isRequired,
  /**
   * If `true`, renders as selected.
   * @default false
   */
  selected: import_prop_types14.default.bool,
  /**
   * If `true`, days outside the current month are rendered:
   *
   * - if `fixedWeekNumber` is defined, renders days to have the weeks requested.
   *
   * - if `fixedWeekNumber` is not defined, renders day to fill the first and last week of the current month.
   *
   * - ignored if `calendars` equals more than `1` on range pickers.
   * @default false
   */
  showDaysOutsideCurrentMonth: import_prop_types14.default.bool,
  style: import_prop_types14.default.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types14.default.oneOfType([import_prop_types14.default.arrayOf(import_prop_types14.default.oneOfType([import_prop_types14.default.func, import_prop_types14.default.object, import_prop_types14.default.bool])), import_prop_types14.default.func, import_prop_types14.default.object]),
  /**
   * @default 0
   */
  tabIndex: import_prop_types14.default.number,
  /**
   * If `true`, renders as today date.
   * @default false
   */
  today: import_prop_types14.default.bool,
  /**
   * Props applied to the `TouchRipple` element.
   */
  TouchRippleProps: import_prop_types14.default.object,
  /**
   * A ref that points to the `TouchRipple` element.
   */
  touchRippleRef: import_prop_types14.default.oneOfType([import_prop_types14.default.func, import_prop_types14.default.shape({
    current: import_prop_types14.default.shape({
      pulsate: import_prop_types14.default.func.isRequired,
      start: import_prop_types14.default.func.isRequired,
      stop: import_prop_types14.default.func.isRequired
    })
  })])
} : void 0;
var PickersDay2 = React74.memo(PickersDayRaw);
if (true) PickersDay2.displayName = "PickersDay";

// node_modules/.pnpm/@mui+x-date-pickers@8.26.0_@emotion+react@11.14.0_@types+react@19.2.7_react@19.2.3__@em_45e4fa7585d24d6c7a3cddedaa636f9d/node_modules/@mui/x-date-pickers/esm/DateCalendar/PickersSlideTransition.js
var React75 = __toESM(require_react(), 1);

// node_modules/.pnpm/@mui+x-date-pickers@8.26.0_@emotion+react@11.14.0_@types+react@19.2.7_react@19.2.3__@em_45e4fa7585d24d6c7a3cddedaa636f9d/node_modules/@mui/x-date-pickers/esm/DateCalendar/pickersSlideTransitionClasses.js
var getPickersSlideTransitionUtilityClass = (slot) => generateUtilityClass("MuiPickersSlideTransition", slot);
var pickersSlideTransitionClasses = generateUtilityClasses("MuiPickersSlideTransition", ["root", "slideEnter-left", "slideEnter-right", "slideEnterActive", "slideExit", "slideExitActiveLeft-left", "slideExitActiveLeft-right"]);

// node_modules/.pnpm/@mui+x-date-pickers@8.26.0_@emotion+react@11.14.0_@types+react@19.2.7_react@19.2.3__@em_45e4fa7585d24d6c7a3cddedaa636f9d/node_modules/@mui/x-date-pickers/esm/DateCalendar/PickersSlideTransition.js
var import_jsx_runtime47 = __toESM(require_jsx_runtime(), 1);
var _excluded25 = ["children", "className", "reduceAnimations", "slideDirection", "transKey", "classes"];
var useUtilityClasses14 = (classes, ownerState) => {
  const {
    slideDirection
  } = ownerState;
  const slots = {
    root: ["root"],
    exit: ["slideExit"],
    enterActive: ["slideEnterActive"],
    enter: [`slideEnter-${slideDirection}`],
    exitActive: [`slideExitActiveLeft-${slideDirection}`]
  };
  return composeClasses(slots, getPickersSlideTransitionUtilityClass, classes);
};
var PickersSlideTransitionRoot = styled_default(TransitionGroup_default, {
  name: "MuiPickersSlideTransition",
  slot: "Root",
  overridesResolver: (_, styles) => [styles.root, {
    [`.${pickersSlideTransitionClasses["slideEnter-left"]}`]: styles["slideEnter-left"]
  }, {
    [`.${pickersSlideTransitionClasses["slideEnter-right"]}`]: styles["slideEnter-right"]
  }, {
    [`.${pickersSlideTransitionClasses.slideEnterActive}`]: styles.slideEnterActive
  }, {
    [`.${pickersSlideTransitionClasses.slideExit}`]: styles.slideExit
  }, {
    [`.${pickersSlideTransitionClasses["slideExitActiveLeft-left"]}`]: styles["slideExitActiveLeft-left"]
  }, {
    [`.${pickersSlideTransitionClasses["slideExitActiveLeft-right"]}`]: styles["slideExitActiveLeft-right"]
  }]
})(({
  theme
}) => {
  const slideTransition = theme.transitions.create("transform", {
    duration: theme.transitions.duration.complex,
    easing: "cubic-bezier(0.35, 0.8, 0.4, 1)"
  });
  return {
    display: "block",
    position: "relative",
    overflowX: "hidden",
    "& > *": {
      position: "absolute",
      top: 0,
      right: 0,
      left: 0
    },
    [`& .${pickersSlideTransitionClasses["slideEnter-left"]}`]: {
      willChange: "transform",
      transform: "translate(100%)",
      zIndex: 1
    },
    [`& .${pickersSlideTransitionClasses["slideEnter-right"]}`]: {
      willChange: "transform",
      transform: "translate(-100%)",
      zIndex: 1
    },
    [`& .${pickersSlideTransitionClasses.slideEnterActive}`]: {
      transform: "translate(0%)",
      transition: slideTransition
    },
    [`& .${pickersSlideTransitionClasses.slideExit}`]: {
      transform: "translate(0%)"
    },
    [`& .${pickersSlideTransitionClasses["slideExitActiveLeft-left"]}`]: {
      willChange: "transform",
      transform: "translate(-100%)",
      transition: slideTransition,
      zIndex: 0
    },
    [`& .${pickersSlideTransitionClasses["slideExitActiveLeft-right"]}`]: {
      willChange: "transform",
      transform: "translate(100%)",
      transition: slideTransition,
      zIndex: 0
    }
  };
});
function PickersSlideTransition(inProps) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiPickersSlideTransition"
  });
  const {
    children,
    className,
    reduceAnimations,
    slideDirection,
    transKey,
    classes: classesProp
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded25);
  const {
    ownerState: pickerOwnerState
  } = usePickerPrivateContext();
  const ownerState = _extends({}, pickerOwnerState, {
    slideDirection
  });
  const classes = useUtilityClasses14(classesProp, ownerState);
  const theme = useTheme();
  if (reduceAnimations) {
    return (0, import_jsx_runtime47.jsx)("div", {
      className: clsx_default(classes.root, className),
      children
    });
  }
  const transitionClasses = {
    exit: classes.exit,
    enterActive: classes.enterActive,
    enter: classes.enter,
    exitActive: classes.exitActive
  };
  return (0, import_jsx_runtime47.jsx)(PickersSlideTransitionRoot, {
    className: clsx_default(classes.root, className),
    childFactory: (element) => React75.cloneElement(element, {
      classNames: transitionClasses
    }),
    role: "presentation",
    ownerState,
    children: (0, import_jsx_runtime47.jsx)(CSSTransition_default, _extends({
      mountOnEnter: true,
      unmountOnExit: true,
      timeout: theme.transitions.duration.complex,
      classNames: transitionClasses
    }, other, {
      children
    }), transKey)
  });
}

// node_modules/.pnpm/@mui+x-date-pickers@8.26.0_@emotion+react@11.14.0_@types+react@19.2.7_react@19.2.3__@em_45e4fa7585d24d6c7a3cddedaa636f9d/node_modules/@mui/x-date-pickers/esm/DateCalendar/dayCalendarClasses.js
var getDayCalendarUtilityClass = (slot) => generateUtilityClass("MuiDayCalendar", slot);
var dayCalendarClasses = generateUtilityClasses("MuiDayCalendar", ["root", "header", "weekDayLabel", "loadingContainer", "slideTransition", "monthContainer", "weekContainer", "weekNumberLabel", "weekNumber"]);

// node_modules/.pnpm/@mui+x-date-pickers@8.26.0_@emotion+react@11.14.0_@types+react@19.2.7_react@19.2.3__@em_45e4fa7585d24d6c7a3cddedaa636f9d/node_modules/@mui/x-date-pickers/esm/DateCalendar/DayCalendar.js
var import_jsx_runtime48 = __toESM(require_jsx_runtime(), 1);
var _excluded26 = ["parentProps", "day", "focusedDay", "selectedDays", "isDateDisabled", "currentMonthNumber", "isViewFocused"];
var _excluded27 = ["ownerState"];
var useUtilityClasses15 = (classes) => {
  const slots = {
    root: ["root"],
    header: ["header"],
    weekDayLabel: ["weekDayLabel"],
    loadingContainer: ["loadingContainer"],
    slideTransition: ["slideTransition"],
    monthContainer: ["monthContainer"],
    weekContainer: ["weekContainer"],
    weekNumberLabel: ["weekNumberLabel"],
    weekNumber: ["weekNumber"]
  };
  return composeClasses(slots, getDayCalendarUtilityClass, classes);
};
var weeksContainerHeight = (DAY_SIZE + DAY_MARGIN * 2) * 6;
var PickersCalendarDayRoot = styled_default("div", {
  name: "MuiDayCalendar",
  slot: "Root"
})({});
var PickersCalendarDayHeader = styled_default("div", {
  name: "MuiDayCalendar",
  slot: "Header"
})({
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
});
var PickersCalendarWeekDayLabel = styled_default(Typography_default, {
  name: "MuiDayCalendar",
  slot: "WeekDayLabel"
})(({
  theme
}) => ({
  width: 36,
  height: 40,
  margin: "0 2px",
  textAlign: "center",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  color: (theme.vars || theme).palette.text.secondary
}));
var PickersCalendarWeekNumberLabel = styled_default(Typography_default, {
  name: "MuiDayCalendar",
  slot: "WeekNumberLabel"
})(({
  theme
}) => ({
  width: 36,
  height: 40,
  margin: "0 2px",
  textAlign: "center",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  color: (theme.vars || theme).palette.text.disabled
}));
var PickersCalendarWeekNumber = styled_default(Typography_default, {
  name: "MuiDayCalendar",
  slot: "WeekNumber"
})(({
  theme
}) => _extends({}, theme.typography.caption, {
  width: DAY_SIZE,
  height: DAY_SIZE,
  padding: 0,
  margin: `0 ${DAY_MARGIN}px`,
  color: (theme.vars || theme).palette.text.disabled,
  fontSize: "0.75rem",
  alignItems: "center",
  justifyContent: "center",
  display: "inline-flex"
}));
var PickersCalendarLoadingContainer = styled_default("div", {
  name: "MuiDayCalendar",
  slot: "LoadingContainer"
})({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  minHeight: weeksContainerHeight
});
var PickersCalendarSlideTransition = styled_default(PickersSlideTransition, {
  name: "MuiDayCalendar",
  slot: "SlideTransition"
})({
  minHeight: weeksContainerHeight
});
var PickersCalendarWeekContainer = styled_default("div", {
  name: "MuiDayCalendar",
  slot: "MonthContainer"
})({
  overflow: "hidden"
});
var PickersCalendarWeek = styled_default("div", {
  name: "MuiDayCalendar",
  slot: "WeekContainer"
})({
  margin: `${DAY_MARGIN}px 0`,
  display: "flex",
  justifyContent: "center"
});
function WrappedDay(_ref) {
  let {
    parentProps,
    day,
    focusedDay,
    selectedDays,
    isDateDisabled,
    currentMonthNumber,
    isViewFocused
  } = _ref, other = _objectWithoutPropertiesLoose(_ref, _excluded26);
  const {
    disabled,
    disableHighlightToday,
    isMonthSwitchingAnimating,
    showDaysOutsideCurrentMonth,
    slots,
    slotProps,
    timezone
  } = parentProps;
  const adapter = usePickerAdapter();
  const now = useNow(timezone);
  const isFocusableDay = focusedDay != null && adapter.isSameDay(day, focusedDay);
  const isFocusedDay = isViewFocused && isFocusableDay;
  const isSelected = selectedDays.some((selectedDay) => adapter.isSameDay(selectedDay, day));
  const isToday = adapter.isSameDay(day, now);
  const isDisabled = React76.useMemo(() => disabled || isDateDisabled(day), [disabled, isDateDisabled, day]);
  const isOutsideCurrentMonth = React76.useMemo(() => adapter.getMonth(day) !== currentMonthNumber, [adapter, day, currentMonthNumber]);
  const ownerState = usePickerDayOwnerState({
    day,
    selected: isSelected,
    disabled: isDisabled,
    today: isToday,
    outsideCurrentMonth: isOutsideCurrentMonth,
    disableMargin: void 0,
    // This prop can only be defined using slotProps.day so the ownerState for useSlotProps cannot have its value.
    disableHighlightToday,
    showDaysOutsideCurrentMonth
  });
  const Day = slots?.day ?? PickersDay2;
  const _useSlotProps = useSlotProps_default({
    elementType: Day,
    externalSlotProps: slotProps?.day,
    additionalProps: _extends({
      disableHighlightToday,
      showDaysOutsideCurrentMonth,
      role: "gridcell",
      isAnimating: isMonthSwitchingAnimating,
      // it is used in date range dragging logic by accessing `dataset.timestamp`
      "data-timestamp": adapter.toJsDate(day).valueOf()
    }, other),
    ownerState: _extends({}, ownerState, {
      day,
      isDayDisabled: isDisabled,
      isDaySelected: isSelected
    })
  }), dayProps = _objectWithoutPropertiesLoose(_useSlotProps, _excluded27);
  const isFirstVisibleCell = React76.useMemo(() => {
    const startOfMonth = adapter.startOfMonth(adapter.setMonth(day, currentMonthNumber));
    if (!showDaysOutsideCurrentMonth) {
      return adapter.isSameDay(day, startOfMonth);
    }
    return adapter.isSameDay(day, adapter.startOfWeek(startOfMonth));
  }, [currentMonthNumber, day, showDaysOutsideCurrentMonth, adapter]);
  const isLastVisibleCell = React76.useMemo(() => {
    const endOfMonth = adapter.endOfMonth(adapter.setMonth(day, currentMonthNumber));
    if (!showDaysOutsideCurrentMonth) {
      return adapter.isSameDay(day, endOfMonth);
    }
    return adapter.isSameDay(day, adapter.endOfWeek(endOfMonth));
  }, [currentMonthNumber, day, showDaysOutsideCurrentMonth, adapter]);
  return (0, import_jsx_runtime48.jsx)(Day, _extends({}, dayProps, {
    day,
    disabled: isDisabled,
    autoFocus: !isOutsideCurrentMonth && isFocusedDay,
    today: isToday,
    outsideCurrentMonth: isOutsideCurrentMonth,
    isFirstVisibleCell,
    isLastVisibleCell,
    selected: isSelected,
    tabIndex: isFocusableDay ? 0 : -1,
    "aria-selected": isSelected,
    "aria-current": isToday ? "date" : void 0
  }));
}
function DayCalendar(inProps) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiDayCalendar"
  });
  const adapter = usePickerAdapter();
  const {
    onFocusedDayChange,
    className,
    classes: classesProp,
    currentMonth,
    selectedDays,
    focusedDay,
    loading,
    onSelectedDaysChange,
    onMonthSwitchingAnimationEnd,
    readOnly,
    reduceAnimations,
    renderLoading = () => (0, import_jsx_runtime48.jsx)("span", {
      children: "..."
    }),
    slideDirection,
    TransitionProps,
    disablePast,
    disableFuture,
    minDate,
    maxDate,
    shouldDisableDate,
    shouldDisableMonth,
    shouldDisableYear,
    dayOfWeekFormatter = (date) => adapter.format(date, "weekdayShort").charAt(0).toUpperCase(),
    hasFocus,
    onFocusedViewChange,
    gridLabelId,
    displayWeekNumber,
    fixedWeekNumber,
    timezone
  } = props;
  const now = useNow(timezone);
  const classes = useUtilityClasses15(classesProp);
  const isRtl = useRtl();
  const isDateDisabled = useIsDateDisabled({
    shouldDisableDate,
    shouldDisableMonth,
    shouldDisableYear,
    minDate,
    maxDate,
    disablePast,
    disableFuture,
    timezone
  });
  const translations = usePickerTranslations();
  const handleDaySelect = useEventCallback_default((day) => {
    if (readOnly) {
      return;
    }
    onSelectedDaysChange(day);
  });
  const focusDay = (day) => {
    if (!isDateDisabled(day)) {
      onFocusedDayChange(day);
      onFocusedViewChange?.(true);
    }
  };
  const handleKeyDown = useEventCallback_default((event, day) => {
    switch (event.key) {
      case "ArrowUp":
        focusDay(adapter.addDays(day, -7));
        event.preventDefault();
        break;
      case "ArrowDown":
        focusDay(adapter.addDays(day, 7));
        event.preventDefault();
        break;
      case "ArrowLeft": {
        const newFocusedDayDefault = adapter.addDays(day, isRtl ? 1 : -1);
        const nextAvailableMonth = adapter.addMonths(day, isRtl ? 1 : -1);
        const closestDayToFocus = findClosestEnabledDate({
          adapter,
          date: newFocusedDayDefault,
          minDate: isRtl ? newFocusedDayDefault : adapter.startOfMonth(nextAvailableMonth),
          maxDate: isRtl ? adapter.endOfMonth(nextAvailableMonth) : newFocusedDayDefault,
          isDateDisabled,
          timezone
        });
        focusDay(closestDayToFocus || newFocusedDayDefault);
        event.preventDefault();
        break;
      }
      case "ArrowRight": {
        const newFocusedDayDefault = adapter.addDays(day, isRtl ? -1 : 1);
        const nextAvailableMonth = adapter.addMonths(day, isRtl ? -1 : 1);
        const closestDayToFocus = findClosestEnabledDate({
          adapter,
          date: newFocusedDayDefault,
          minDate: isRtl ? adapter.startOfMonth(nextAvailableMonth) : newFocusedDayDefault,
          maxDate: isRtl ? newFocusedDayDefault : adapter.endOfMonth(nextAvailableMonth),
          isDateDisabled,
          timezone
        });
        focusDay(closestDayToFocus || newFocusedDayDefault);
        event.preventDefault();
        break;
      }
      case "Home":
        focusDay(adapter.startOfWeek(day));
        event.preventDefault();
        break;
      case "End":
        focusDay(adapter.endOfWeek(day));
        event.preventDefault();
        break;
      case "PageUp":
        focusDay(adapter.addMonths(day, 1));
        event.preventDefault();
        break;
      case "PageDown":
        focusDay(adapter.addMonths(day, -1));
        event.preventDefault();
        break;
      default:
        break;
    }
  });
  const handleFocus = useEventCallback_default((event, day) => focusDay(day));
  const handleBlur = useEventCallback_default((event, day) => {
    if (focusedDay != null && adapter.isSameDay(focusedDay, day)) {
      onFocusedViewChange?.(false);
    }
  });
  const currentMonthNumber = adapter.getMonth(currentMonth);
  const currentYearNumber = adapter.getYear(currentMonth);
  const validSelectedDays = React76.useMemo(() => selectedDays.filter((day) => !!day).map((day) => adapter.startOfDay(day)), [adapter, selectedDays]);
  const transitionKey = `${currentYearNumber}-${currentMonthNumber}`;
  const slideNodeRef = React76.useMemo(() => React76.createRef(), [transitionKey]);
  const weeksToDisplay = React76.useMemo(() => {
    const toDisplay = adapter.getWeekArray(currentMonth);
    let nextMonth = adapter.addMonths(currentMonth, 1);
    while (fixedWeekNumber && toDisplay.length < fixedWeekNumber) {
      const additionalWeeks = adapter.getWeekArray(nextMonth);
      const hasCommonWeek = adapter.isSameDay(toDisplay[toDisplay.length - 1][0], additionalWeeks[0][0]);
      additionalWeeks.slice(hasCommonWeek ? 1 : 0).forEach((week) => {
        if (toDisplay.length < fixedWeekNumber) {
          toDisplay.push(week);
        }
      });
      nextMonth = adapter.addMonths(nextMonth, 1);
    }
    return toDisplay;
  }, [currentMonth, fixedWeekNumber, adapter]);
  return (0, import_jsx_runtime48.jsxs)(PickersCalendarDayRoot, {
    role: "grid",
    "aria-labelledby": gridLabelId,
    className: classes.root,
    children: [(0, import_jsx_runtime48.jsxs)(PickersCalendarDayHeader, {
      role: "row",
      className: classes.header,
      children: [displayWeekNumber && (0, import_jsx_runtime48.jsx)(PickersCalendarWeekNumberLabel, {
        variant: "caption",
        role: "columnheader",
        "aria-label": translations.calendarWeekNumberHeaderLabel,
        className: classes.weekNumberLabel,
        children: translations.calendarWeekNumberHeaderText
      }), getWeekdays(adapter, now).map((weekday, i) => (0, import_jsx_runtime48.jsx)(PickersCalendarWeekDayLabel, {
        variant: "caption",
        role: "columnheader",
        "aria-label": adapter.format(weekday, "weekday"),
        className: classes.weekDayLabel,
        children: dayOfWeekFormatter(weekday)
      }, i.toString()))]
    }), loading ? (0, import_jsx_runtime48.jsx)(PickersCalendarLoadingContainer, {
      className: classes.loadingContainer,
      children: renderLoading()
    }) : (0, import_jsx_runtime48.jsx)(PickersCalendarSlideTransition, _extends({
      transKey: transitionKey,
      onExited: onMonthSwitchingAnimationEnd,
      reduceAnimations,
      slideDirection,
      className: clsx_default(className, classes.slideTransition)
    }, TransitionProps, {
      nodeRef: slideNodeRef,
      children: (0, import_jsx_runtime48.jsx)(PickersCalendarWeekContainer, {
        ref: slideNodeRef,
        role: "rowgroup",
        className: classes.monthContainer,
        children: weeksToDisplay.map((week, index) => (0, import_jsx_runtime48.jsxs)(PickersCalendarWeek, {
          role: "row",
          className: classes.weekContainer,
          "aria-rowindex": index + 1,
          children: [displayWeekNumber && (0, import_jsx_runtime48.jsx)(PickersCalendarWeekNumber, {
            className: classes.weekNumber,
            role: "rowheader",
            "aria-label": translations.calendarWeekNumberAriaLabelText(adapter.getWeekNumber(week[0])),
            children: translations.calendarWeekNumberText(adapter.getWeekNumber(week[0]))
          }), week.map((day, dayIndex) => (0, import_jsx_runtime48.jsx)(WrappedDay, {
            parentProps: props,
            day,
            selectedDays: validSelectedDays,
            isViewFocused: hasFocus,
            focusedDay,
            onKeyDown: handleKeyDown,
            onFocus: handleFocus,
            onBlur: handleBlur,
            onDaySelect: handleDaySelect,
            isDateDisabled,
            currentMonthNumber,
            "aria-colindex": dayIndex + 1
          }, day.toString()))]
        }, `week-${week[0]}`))
      })
    }))]
  });
}

// node_modules/.pnpm/@mui+x-date-pickers@8.26.0_@emotion+react@11.14.0_@types+react@19.2.7_react@19.2.3__@em_45e4fa7585d24d6c7a3cddedaa636f9d/node_modules/@mui/x-date-pickers/esm/MonthCalendar/MonthCalendar.js
var React78 = __toESM(require_react(), 1);
var import_prop_types15 = __toESM(require_prop_types(), 1);

// node_modules/.pnpm/@mui+x-date-pickers@8.26.0_@emotion+react@11.14.0_@types+react@19.2.7_react@19.2.3__@em_45e4fa7585d24d6c7a3cddedaa636f9d/node_modules/@mui/x-date-pickers/esm/MonthCalendar/MonthCalendarButton.js
var React77 = __toESM(require_react(), 1);

// node_modules/.pnpm/@mui+x-date-pickers@8.26.0_@emotion+react@11.14.0_@types+react@19.2.7_react@19.2.3__@em_45e4fa7585d24d6c7a3cddedaa636f9d/node_modules/@mui/x-date-pickers/esm/MonthCalendar/monthCalendarClasses.js
function getMonthCalendarUtilityClass(slot) {
  return generateUtilityClass("MuiMonthCalendar", slot);
}
var monthCalendarClasses = generateUtilityClasses("MuiMonthCalendar", ["root", "button", "disabled", "selected"]);

// node_modules/.pnpm/@mui+x-date-pickers@8.26.0_@emotion+react@11.14.0_@types+react@19.2.7_react@19.2.3__@em_45e4fa7585d24d6c7a3cddedaa636f9d/node_modules/@mui/x-date-pickers/esm/MonthCalendar/MonthCalendarButton.js
var import_jsx_runtime49 = __toESM(require_jsx_runtime(), 1);
var _excluded28 = ["autoFocus", "classes", "disabled", "selected", "value", "onClick", "onKeyDown", "onFocus", "onBlur", "slots", "slotProps"];
var useUtilityClasses16 = (classes, ownerState) => {
  const slots = {
    button: ["button", ownerState.isMonthDisabled && "disabled", ownerState.isMonthSelected && "selected"]
  };
  return composeClasses(slots, getMonthCalendarUtilityClass, classes);
};
var DefaultMonthButton = styled_default("button", {
  name: "MuiMonthCalendar",
  slot: "Button",
  overridesResolver: (_, styles) => [styles.button, {
    [`&.${monthCalendarClasses.disabled}`]: styles.disabled
  }, {
    [`&.${monthCalendarClasses.selected}`]: styles.selected
  }]
})(({
  theme
}) => _extends({
  color: "unset",
  backgroundColor: "transparent",
  border: 0,
  outline: 0
}, theme.typography.subtitle1, {
  height: 36,
  width: 72,
  borderRadius: 18,
  cursor: "pointer",
  "&:focus": {
    backgroundColor: theme.vars ? `rgba(${theme.vars.palette.action.activeChannel} / ${theme.vars.palette.action.hoverOpacity})` : alpha(theme.palette.action.active, theme.palette.action.hoverOpacity)
  },
  "&:hover": {
    backgroundColor: theme.vars ? `rgba(${theme.vars.palette.action.activeChannel} / ${theme.vars.palette.action.hoverOpacity})` : alpha(theme.palette.action.active, theme.palette.action.hoverOpacity)
  },
  "&:disabled": {
    cursor: "auto",
    pointerEvents: "none"
  },
  [`&.${monthCalendarClasses.disabled}`]: {
    color: (theme.vars || theme).palette.text.secondary
  },
  [`&.${monthCalendarClasses.selected}`]: {
    color: (theme.vars || theme).palette.primary.contrastText,
    backgroundColor: (theme.vars || theme).palette.primary.main,
    "&:focus, &:hover": {
      backgroundColor: (theme.vars || theme).palette.primary.dark
    }
  }
}));
var MonthCalendarButton = React77.memo(function MonthCalendarButton2(props) {
  const {
    autoFocus,
    classes: classesProp,
    disabled,
    selected,
    value,
    onClick,
    onKeyDown,
    onFocus,
    onBlur,
    slots,
    slotProps
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded28);
  const ref = React77.useRef(null);
  const {
    ownerState: pickerOwnerState
  } = usePickerPrivateContext();
  const ownerState = _extends({}, pickerOwnerState, {
    isMonthDisabled: disabled,
    isMonthSelected: selected
  });
  const classes = useUtilityClasses16(classesProp, ownerState);
  useEnhancedEffect_default(() => {
    if (autoFocus) {
      ref.current?.focus();
    }
  }, [autoFocus]);
  const MonthButton = slots?.monthButton ?? DefaultMonthButton;
  const monthButtonProps = useSlotProps_default({
    elementType: MonthButton,
    externalSlotProps: slotProps?.monthButton,
    externalForwardedProps: other,
    additionalProps: {
      disabled,
      ref,
      type: "button",
      role: "radio",
      "aria-checked": selected,
      onClick: (event) => onClick(event, value),
      onKeyDown: (event) => onKeyDown(event, value),
      onFocus: (event) => onFocus(event, value),
      onBlur: (event) => onBlur(event, value)
    },
    ownerState,
    className: classes.button
  });
  return (0, import_jsx_runtime49.jsx)(MonthButton, _extends({}, monthButtonProps));
});
if (true) MonthCalendarButton.displayName = "MonthCalendarButton";

// node_modules/.pnpm/@mui+x-date-pickers@8.26.0_@emotion+react@11.14.0_@types+react@19.2.7_react@19.2.3__@em_45e4fa7585d24d6c7a3cddedaa636f9d/node_modules/@mui/x-date-pickers/esm/MonthCalendar/MonthCalendar.js
var import_jsx_runtime50 = __toESM(require_jsx_runtime(), 1);
var _excluded29 = ["autoFocus", "className", "currentMonth", "classes", "value", "defaultValue", "referenceDate", "disabled", "disableFuture", "disablePast", "maxDate", "minDate", "onChange", "shouldDisableMonth", "readOnly", "disableHighlightToday", "onMonthFocus", "hasFocus", "onFocusedViewChange", "monthsPerRow", "timezone", "gridLabelId", "slots", "slotProps"];
var useUtilityClasses17 = (classes) => {
  const slots = {
    root: ["root"]
  };
  return composeClasses(slots, getMonthCalendarUtilityClass, classes);
};
function useMonthCalendarDefaultizedProps(props, name) {
  const themeProps = useThemeProps({
    props,
    name
  });
  const validationProps = useApplyDefaultValuesToDateValidationProps(themeProps);
  return _extends({}, themeProps, validationProps, {
    monthsPerRow: themeProps.monthsPerRow ?? 3
  });
}
var isSameMonth = (monthA, monthB, yearA, yearB, adapter) => Boolean(monthA === monthB && yearB && adapter.isSameYear(yearA, yearB));
var MonthCalendarRoot = styled_default("div", {
  name: "MuiMonthCalendar",
  slot: "Root",
  shouldForwardProp: (prop) => shouldForwardProp(prop) && prop !== "monthsPerRow"
})({
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-evenly",
  rowGap: 16,
  padding: "8px 0",
  width: DIALOG_WIDTH,
  // avoid padding increasing width over defined
  boxSizing: "border-box",
  variants: [{
    props: {
      monthsPerRow: 3
    },
    style: {
      columnGap: 24
    }
  }, {
    props: {
      monthsPerRow: 4
    },
    style: {
      columnGap: 0
    }
  }]
});
var MonthCalendar = React78.forwardRef(function MonthCalendar2(inProps, ref) {
  const props = useMonthCalendarDefaultizedProps(inProps, "MuiMonthCalendar");
  const {
    autoFocus,
    className,
    currentMonth,
    classes: classesProp,
    value: valueProp,
    defaultValue,
    referenceDate: referenceDateProp,
    disabled,
    disableFuture,
    disablePast,
    maxDate,
    minDate,
    onChange,
    shouldDisableMonth,
    readOnly,
    onMonthFocus,
    hasFocus,
    onFocusedViewChange,
    monthsPerRow,
    timezone: timezoneProp,
    gridLabelId,
    slots,
    slotProps
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded29);
  const {
    value,
    handleValueChange,
    timezone
  } = useControlledValue({
    name: "MonthCalendar",
    timezone: timezoneProp,
    value: valueProp,
    defaultValue,
    referenceDate: referenceDateProp,
    onChange,
    valueManager: singleItemValueManager
  });
  const now = useNow(timezone);
  const isRtl = useRtl();
  const adapter = usePickerAdapter();
  const {
    ownerState
  } = usePickerPrivateContext();
  const referenceDate = React78.useMemo(
    () => singleItemValueManager.getInitialReferenceValue({
      value,
      adapter,
      props,
      timezone,
      referenceDate: referenceDateProp,
      granularity: SECTION_TYPE_GRANULARITY.month
    }),
    []
    // eslint-disable-line react-hooks/exhaustive-deps
  );
  const classes = useUtilityClasses17(classesProp);
  const todayMonth = React78.useMemo(() => adapter.getMonth(now), [adapter, now]);
  const selectedMonth = React78.useMemo(() => {
    if (value != null) {
      return adapter.getMonth(value);
    }
    return null;
  }, [value, adapter]);
  const [focusedMonth, setFocusedMonth] = React78.useState(() => selectedMonth || adapter.getMonth(referenceDate));
  const [internalHasFocus, setInternalHasFocus] = useControlled({
    name: "MonthCalendar",
    state: "hasFocus",
    controlled: hasFocus,
    default: autoFocus ?? false
  });
  const changeHasFocus = useEventCallback_default((newHasFocus) => {
    setInternalHasFocus(newHasFocus);
    if (onFocusedViewChange) {
      onFocusedViewChange(newHasFocus);
    }
  });
  const isMonthDisabled = React78.useCallback((dateToValidate) => {
    const firstEnabledMonth = adapter.startOfMonth(disablePast && adapter.isAfter(now, minDate) ? now : minDate);
    const lastEnabledMonth = adapter.startOfMonth(disableFuture && adapter.isBefore(now, maxDate) ? now : maxDate);
    const monthToValidate = adapter.startOfMonth(dateToValidate);
    if (adapter.isBefore(monthToValidate, firstEnabledMonth)) {
      return true;
    }
    if (adapter.isAfter(monthToValidate, lastEnabledMonth)) {
      return true;
    }
    if (!shouldDisableMonth) {
      return false;
    }
    return shouldDisableMonth(monthToValidate);
  }, [disableFuture, disablePast, maxDate, minDate, now, shouldDisableMonth, adapter]);
  const handleMonthSelection = useEventCallback_default((event, month) => {
    if (readOnly) {
      return;
    }
    const currentValue = value && currentMonth && !adapter.isSameYear(value, currentMonth) ? adapter.setYear(value, adapter.getYear(currentMonth)) : value;
    const baseDateForMonth = currentValue ?? currentMonth ?? referenceDate;
    const newDate = adapter.setMonth(baseDateForMonth, month);
    handleValueChange(newDate);
  });
  const focusMonth = useEventCallback_default((month) => {
    if (!isMonthDisabled(adapter.setMonth(value ?? currentMonth ?? referenceDate, month))) {
      setFocusedMonth(month);
      changeHasFocus(true);
      if (onMonthFocus) {
        onMonthFocus(month);
      }
    }
  });
  React78.useEffect(() => {
    setFocusedMonth((prevFocusedMonth) => selectedMonth !== null && prevFocusedMonth !== selectedMonth ? selectedMonth : prevFocusedMonth);
  }, [selectedMonth]);
  const handleKeyDown = useEventCallback_default((event, month) => {
    const monthsInYear = 12;
    const monthsInRow = 3;
    switch (event.key) {
      case "ArrowUp":
        focusMonth((monthsInYear + month - monthsInRow) % monthsInYear);
        event.preventDefault();
        break;
      case "ArrowDown":
        focusMonth((monthsInYear + month + monthsInRow) % monthsInYear);
        event.preventDefault();
        break;
      case "ArrowLeft":
        focusMonth((monthsInYear + month + (isRtl ? 1 : -1)) % monthsInYear);
        event.preventDefault();
        break;
      case "ArrowRight":
        focusMonth((monthsInYear + month + (isRtl ? -1 : 1)) % monthsInYear);
        event.preventDefault();
        break;
      default:
        break;
    }
  });
  const handleMonthFocus = useEventCallback_default((event, month) => {
    focusMonth(month);
  });
  const handleMonthBlur = useEventCallback_default((event, month) => {
    if (focusedMonth === month) {
      changeHasFocus(false);
    }
  });
  return (0, import_jsx_runtime50.jsx)(MonthCalendarRoot, _extends({
    ref,
    className: clsx_default(classes.root, className),
    ownerState,
    role: "radiogroup",
    "aria-labelledby": gridLabelId,
    monthsPerRow
  }, other, {
    children: getMonthsInYear(adapter, currentMonth ?? value ?? referenceDate).map((month) => {
      const monthNumber = adapter.getMonth(month);
      const monthText = adapter.format(month, "monthShort");
      const monthLabel = adapter.format(month, "month");
      const isSelected = isSameMonth(monthNumber, selectedMonth, month, value, adapter);
      const isDisabled = disabled || isMonthDisabled(month);
      return (0, import_jsx_runtime50.jsx)(MonthCalendarButton, {
        selected: isSelected,
        value: monthNumber,
        onClick: handleMonthSelection,
        onKeyDown: handleKeyDown,
        autoFocus: internalHasFocus && monthNumber === focusedMonth,
        disabled: isDisabled,
        tabIndex: monthNumber === focusedMonth && !isDisabled ? 0 : -1,
        onFocus: handleMonthFocus,
        onBlur: handleMonthBlur,
        "aria-current": isSameMonth(monthNumber, todayMonth, month, now, adapter) ? "date" : void 0,
        "aria-label": monthLabel,
        slots,
        slotProps,
        classes: classesProp,
        children: monthText
      }, monthText);
    })
  }));
});
if (true) MonthCalendar.displayName = "MonthCalendar";
true ? MonthCalendar.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  autoFocus: import_prop_types15.default.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: import_prop_types15.default.object,
  className: import_prop_types15.default.string,
  currentMonth: import_prop_types15.default.object,
  /**
   * The default selected value.
   * Used when the component is not controlled.
   */
  defaultValue: import_prop_types15.default.object,
  /**
   * If `true`, the component is disabled.
   * When disabled, the value cannot be changed and no interaction is possible.
   * @default false
   */
  disabled: import_prop_types15.default.bool,
  /**
   * If `true`, disable values after the current date for date components, time for time components and both for date time components.
   * @default false
   */
  disableFuture: import_prop_types15.default.bool,
  /**
   * If `true`, today's date is rendering without highlighting with circle.
   * @default false
   */
  disableHighlightToday: import_prop_types15.default.bool,
  /**
   * If `true`, disable values before the current date for date components, time for time components and both for date time components.
   * @default false
   */
  disablePast: import_prop_types15.default.bool,
  gridLabelId: import_prop_types15.default.string,
  hasFocus: import_prop_types15.default.bool,
  /**
   * Maximal selectable date.
   * @default 2099-12-31
   */
  maxDate: import_prop_types15.default.object,
  /**
   * Minimal selectable date.
   * @default 1900-01-01
   */
  minDate: import_prop_types15.default.object,
  /**
   * Months rendered per row.
   * @default 3
   */
  monthsPerRow: import_prop_types15.default.oneOf([3, 4]),
  /**
   * Callback fired when the value changes.
   * @param {PickerValidDate} value The new value.
   */
  onChange: import_prop_types15.default.func,
  onFocusedViewChange: import_prop_types15.default.func,
  onMonthFocus: import_prop_types15.default.func,
  /**
   * If `true`, the component is read-only.
   * When read-only, the value cannot be changed but the user can interact with the interface.
   * @default false
   */
  readOnly: import_prop_types15.default.bool,
  /**
   * The date used to generate the new value when both `value` and `defaultValue` are empty.
   * @default The closest valid month using the validation props, except callbacks such as `shouldDisableMonth`.
   */
  referenceDate: import_prop_types15.default.object,
  /**
   * Disable specific month.
   * @param {PickerValidDate} month The month to test.
   * @returns {boolean} If `true`, the month will be disabled.
   */
  shouldDisableMonth: import_prop_types15.default.func,
  /**
   * The props used for each component slot.
   * @default {}
   */
  slotProps: import_prop_types15.default.object,
  /**
   * Overridable component slots.
   * @default {}
   */
  slots: import_prop_types15.default.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types15.default.oneOfType([import_prop_types15.default.arrayOf(import_prop_types15.default.oneOfType([import_prop_types15.default.func, import_prop_types15.default.object, import_prop_types15.default.bool])), import_prop_types15.default.func, import_prop_types15.default.object]),
  /**
   * Choose which timezone to use for the value.
   * Example: "default", "system", "UTC", "America/New_York".
   * If you pass values from other timezones to some props, they will be converted to this timezone before being used.
   * @see See the {@link https://mui.com/x/react-date-pickers/timezone/ timezones documentation} for more details.
   * @default The timezone of the `value` or `defaultValue` prop is defined, 'default' otherwise.
   */
  timezone: import_prop_types15.default.string,
  /**
   * The selected value.
   * Used when the component is controlled.
   */
  value: import_prop_types15.default.object
} : void 0;

// node_modules/.pnpm/@mui+x-date-pickers@8.26.0_@emotion+react@11.14.0_@types+react@19.2.7_react@19.2.3__@em_45e4fa7585d24d6c7a3cddedaa636f9d/node_modules/@mui/x-date-pickers/esm/YearCalendar/YearCalendar.js
var React80 = __toESM(require_react(), 1);
var import_prop_types16 = __toESM(require_prop_types(), 1);

// node_modules/.pnpm/@mui+x-date-pickers@8.26.0_@emotion+react@11.14.0_@types+react@19.2.7_react@19.2.3__@em_45e4fa7585d24d6c7a3cddedaa636f9d/node_modules/@mui/x-date-pickers/esm/YearCalendar/YearCalendarButton.js
var React79 = __toESM(require_react(), 1);

// node_modules/.pnpm/@mui+x-date-pickers@8.26.0_@emotion+react@11.14.0_@types+react@19.2.7_react@19.2.3__@em_45e4fa7585d24d6c7a3cddedaa636f9d/node_modules/@mui/x-date-pickers/esm/YearCalendar/yearCalendarClasses.js
function getYearCalendarUtilityClass(slot) {
  return generateUtilityClass("MuiYearCalendar", slot);
}
var yearCalendarClasses = generateUtilityClasses("MuiYearCalendar", ["root", "button", "disabled", "selected"]);

// node_modules/.pnpm/@mui+x-date-pickers@8.26.0_@emotion+react@11.14.0_@types+react@19.2.7_react@19.2.3__@em_45e4fa7585d24d6c7a3cddedaa636f9d/node_modules/@mui/x-date-pickers/esm/YearCalendar/YearCalendarButton.js
var import_jsx_runtime51 = __toESM(require_jsx_runtime(), 1);
var _excluded30 = ["autoFocus", "classes", "disabled", "selected", "value", "onClick", "onKeyDown", "onFocus", "onBlur", "slots", "slotProps"];
var useUtilityClasses18 = (classes, ownerState) => {
  const slots = {
    button: ["button", ownerState.isYearDisabled && "disabled", ownerState.isYearSelected && "selected"]
  };
  return composeClasses(slots, getYearCalendarUtilityClass, classes);
};
var DefaultYearButton = styled_default("button", {
  name: "MuiYearCalendar",
  slot: "Button",
  overridesResolver: (_, styles) => [styles.button, {
    [`&.${yearCalendarClasses.disabled}`]: styles.disabled
  }, {
    [`&.${yearCalendarClasses.selected}`]: styles.selected
  }]
})(({
  theme
}) => _extends({
  color: "unset",
  backgroundColor: "transparent",
  border: 0,
  outline: 0
}, theme.typography.subtitle1, {
  height: 36,
  width: 72,
  borderRadius: 18,
  cursor: "pointer",
  "&:focus": {
    backgroundColor: theme.vars ? `rgba(${theme.vars.palette.action.activeChannel} / ${theme.vars.palette.action.focusOpacity})` : alpha(theme.palette.action.active, theme.palette.action.focusOpacity)
  },
  "&:hover": {
    backgroundColor: theme.vars ? `rgba(${theme.vars.palette.action.activeChannel} / ${theme.vars.palette.action.hoverOpacity})` : alpha(theme.palette.action.active, theme.palette.action.hoverOpacity)
  },
  "&:disabled": {
    cursor: "auto",
    pointerEvents: "none"
  },
  [`&.${yearCalendarClasses.disabled}`]: {
    color: (theme.vars || theme).palette.text.secondary
  },
  [`&.${yearCalendarClasses.selected}`]: {
    color: (theme.vars || theme).palette.primary.contrastText,
    backgroundColor: (theme.vars || theme).palette.primary.main,
    "&:focus, &:hover": {
      backgroundColor: (theme.vars || theme).palette.primary.dark
    }
  }
}));
var YearCalendarButton = React79.memo(function YearCalendarButton2(props) {
  const {
    autoFocus,
    classes: classesProp,
    disabled,
    selected,
    value,
    onClick,
    onKeyDown,
    onFocus,
    onBlur,
    slots,
    slotProps
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded30);
  const ref = React79.useRef(null);
  const {
    ownerState: pickerOwnerState
  } = usePickerPrivateContext();
  const ownerState = _extends({}, pickerOwnerState, {
    isYearDisabled: disabled,
    isYearSelected: selected
  });
  const classes = useUtilityClasses18(classesProp, ownerState);
  useEnhancedEffect_default(() => {
    if (autoFocus) {
      ref.current?.focus();
    }
  }, [autoFocus]);
  const YearButton = slots?.yearButton ?? DefaultYearButton;
  const yearButtonProps = useSlotProps_default({
    elementType: YearButton,
    externalSlotProps: slotProps?.yearButton,
    externalForwardedProps: other,
    additionalProps: {
      disabled,
      ref,
      type: "button",
      role: "radio",
      "aria-checked": selected,
      onClick: (event) => onClick(event, value),
      onKeyDown: (event) => onKeyDown(event, value),
      onFocus: (event) => onFocus(event, value),
      onBlur: (event) => onBlur(event, value)
    },
    ownerState,
    className: classes.button
  });
  return (0, import_jsx_runtime51.jsx)(YearButton, _extends({}, yearButtonProps));
});
if (true) YearCalendarButton.displayName = "YearCalendarButton";

// node_modules/.pnpm/@mui+x-date-pickers@8.26.0_@emotion+react@11.14.0_@types+react@19.2.7_react@19.2.3__@em_45e4fa7585d24d6c7a3cddedaa636f9d/node_modules/@mui/x-date-pickers/esm/YearCalendar/YearCalendar.js
var import_jsx_runtime52 = __toESM(require_jsx_runtime(), 1);
var _excluded31 = ["autoFocus", "className", "classes", "value", "defaultValue", "referenceDate", "disabled", "disableFuture", "disablePast", "maxDate", "minDate", "onChange", "readOnly", "shouldDisableYear", "disableHighlightToday", "onYearFocus", "hasFocus", "onFocusedViewChange", "yearsOrder", "yearsPerRow", "timezone", "gridLabelId", "slots", "slotProps"];
var useUtilityClasses19 = (classes) => {
  const slots = {
    root: ["root"]
  };
  return composeClasses(slots, getYearCalendarUtilityClass, classes);
};
function useYearCalendarDefaultizedProps(props, name) {
  const themeProps = useThemeProps({
    props,
    name
  });
  const validationProps = useApplyDefaultValuesToDateValidationProps(themeProps);
  return _extends({}, themeProps, validationProps, {
    yearsPerRow: themeProps.yearsPerRow ?? 3,
    yearsOrder: themeProps.yearsOrder ?? "asc"
  });
}
var YearCalendarRoot = styled_default("div", {
  name: "MuiYearCalendar",
  slot: "Root",
  shouldForwardProp: (prop) => shouldForwardProp(prop) && prop !== "yearsPerRow"
})({
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-evenly",
  rowGap: 12,
  padding: "6px 0",
  overflowY: "auto",
  height: "100%",
  width: DIALOG_WIDTH,
  maxHeight: MAX_CALENDAR_HEIGHT,
  // avoid padding increasing width over defined
  boxSizing: "border-box",
  position: "relative",
  variants: [{
    props: {
      yearsPerRow: 3
    },
    style: {
      columnGap: 24
    }
  }, {
    props: {
      yearsPerRow: 4
    },
    style: {
      columnGap: 0,
      padding: "0 2px"
    }
  }]
});
var YearCalendarButtonFiller = styled_default("div", {
  name: "MuiYearCalendar",
  slot: "ButtonFiller"
})({
  height: 36,
  width: 72
});
var YearCalendar = React80.forwardRef(function YearCalendar2(inProps, ref) {
  const props = useYearCalendarDefaultizedProps(inProps, "MuiYearCalendar");
  const {
    autoFocus,
    className,
    classes: classesProp,
    value: valueProp,
    defaultValue,
    referenceDate: referenceDateProp,
    disabled,
    disableFuture,
    disablePast,
    maxDate,
    minDate,
    onChange,
    readOnly,
    shouldDisableYear,
    onYearFocus,
    hasFocus,
    onFocusedViewChange,
    yearsOrder,
    yearsPerRow,
    timezone: timezoneProp,
    gridLabelId,
    slots,
    slotProps
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded31);
  const {
    value,
    handleValueChange,
    timezone
  } = useControlledValue({
    name: "YearCalendar",
    timezone: timezoneProp,
    value: valueProp,
    defaultValue,
    referenceDate: referenceDateProp,
    onChange,
    valueManager: singleItemValueManager
  });
  const now = useNow(timezone);
  const isRtl = useRtl();
  const adapter = usePickerAdapter();
  const {
    ownerState
  } = usePickerPrivateContext();
  const referenceDate = React80.useMemo(
    () => singleItemValueManager.getInitialReferenceValue({
      value,
      adapter,
      props,
      timezone,
      referenceDate: referenceDateProp,
      granularity: SECTION_TYPE_GRANULARITY.year
    }),
    []
    // eslint-disable-line react-hooks/exhaustive-deps
  );
  const classes = useUtilityClasses19(classesProp);
  const todayYear = React80.useMemo(() => adapter.getYear(now), [adapter, now]);
  const selectedYear = React80.useMemo(() => {
    if (value != null) {
      return adapter.getYear(value);
    }
    return null;
  }, [value, adapter]);
  const [focusedYear, setFocusedYear] = React80.useState(() => selectedYear || adapter.getYear(referenceDate));
  const [internalHasFocus, setInternalHasFocus] = useControlled({
    name: "YearCalendar",
    state: "hasFocus",
    controlled: hasFocus,
    default: autoFocus ?? false
  });
  const changeHasFocus = useEventCallback_default((newHasFocus) => {
    setInternalHasFocus(newHasFocus);
    if (onFocusedViewChange) {
      onFocusedViewChange(newHasFocus);
    }
  });
  const isYearDisabled = React80.useCallback((dateToValidate) => {
    if (disablePast && adapter.isBeforeYear(dateToValidate, now)) {
      return true;
    }
    if (disableFuture && adapter.isAfterYear(dateToValidate, now)) {
      return true;
    }
    if (minDate && adapter.isBeforeYear(dateToValidate, minDate)) {
      return true;
    }
    if (maxDate && adapter.isAfterYear(dateToValidate, maxDate)) {
      return true;
    }
    if (!shouldDisableYear) {
      return false;
    }
    const yearToValidate = adapter.startOfYear(dateToValidate);
    return shouldDisableYear(yearToValidate);
  }, [disableFuture, disablePast, maxDate, minDate, now, shouldDisableYear, adapter]);
  const handleYearSelection = useEventCallback_default((event, year) => {
    if (readOnly) {
      return;
    }
    const newDate = adapter.setYear(value ?? referenceDate, year);
    handleValueChange(newDate);
  });
  const focusYear = useEventCallback_default((year) => {
    if (!isYearDisabled(adapter.setYear(value ?? referenceDate, year))) {
      setFocusedYear(year);
      changeHasFocus(true);
      onYearFocus?.(year);
    }
  });
  React80.useEffect(() => {
    setFocusedYear((prevFocusedYear) => selectedYear !== null && prevFocusedYear !== selectedYear ? selectedYear : prevFocusedYear);
  }, [selectedYear]);
  const verticalDirection = yearsOrder !== "desc" ? yearsPerRow * 1 : yearsPerRow * -1;
  const horizontalDirection = isRtl && yearsOrder === "asc" || !isRtl && yearsOrder === "desc" ? -1 : 1;
  const handleKeyDown = useEventCallback_default((event, year) => {
    switch (event.key) {
      case "ArrowUp":
        focusYear(year - verticalDirection);
        event.preventDefault();
        break;
      case "ArrowDown":
        focusYear(year + verticalDirection);
        event.preventDefault();
        break;
      case "ArrowLeft":
        focusYear(year - horizontalDirection);
        event.preventDefault();
        break;
      case "ArrowRight":
        focusYear(year + horizontalDirection);
        event.preventDefault();
        break;
      default:
        break;
    }
  });
  const handleYearFocus = useEventCallback_default((event, year) => {
    focusYear(year);
  });
  const handleYearBlur = useEventCallback_default((event, year) => {
    if (focusedYear === year) {
      changeHasFocus(false);
    }
  });
  const scrollerRef = React80.useRef(null);
  const handleRef = useForkRef(ref, scrollerRef);
  React80.useEffect(() => {
    if (autoFocus || scrollerRef.current === null) {
      return;
    }
    const tabbableButton = scrollerRef.current.querySelector('[tabindex="0"]');
    if (!tabbableButton) {
      return;
    }
    const offsetHeight = tabbableButton.offsetHeight;
    const offsetTop = tabbableButton.offsetTop;
    const clientHeight = scrollerRef.current.clientHeight;
    const scrollTop = scrollerRef.current.scrollTop;
    const elementBottom = offsetTop + offsetHeight;
    if (offsetHeight > clientHeight || offsetTop < scrollTop) {
      return;
    }
    scrollerRef.current.scrollTop = elementBottom - clientHeight / 2 - offsetHeight / 2;
  }, [autoFocus]);
  const yearRange = adapter.getYearRange([minDate, maxDate]);
  if (yearsOrder === "desc") {
    yearRange.reverse();
  }
  let fillerAmount = yearsPerRow - yearRange.length % yearsPerRow;
  if (fillerAmount === yearsPerRow) {
    fillerAmount = 0;
  }
  return (0, import_jsx_runtime52.jsxs)(YearCalendarRoot, _extends({
    ref: handleRef,
    className: clsx_default(classes.root, className),
    ownerState,
    role: "radiogroup",
    "aria-labelledby": gridLabelId,
    yearsPerRow
  }, other, {
    children: [yearRange.map((year) => {
      const yearNumber = adapter.getYear(year);
      const isSelected = yearNumber === selectedYear;
      const isDisabled = disabled || isYearDisabled(year);
      return (0, import_jsx_runtime52.jsx)(YearCalendarButton, {
        selected: isSelected,
        value: yearNumber,
        onClick: handleYearSelection,
        onKeyDown: handleKeyDown,
        autoFocus: internalHasFocus && yearNumber === focusedYear,
        disabled: isDisabled,
        tabIndex: yearNumber === focusedYear && !isDisabled ? 0 : -1,
        onFocus: handleYearFocus,
        onBlur: handleYearBlur,
        "aria-current": todayYear === yearNumber ? "date" : void 0,
        slots,
        slotProps,
        classes: classesProp,
        children: adapter.format(year, "year")
      }, adapter.format(year, "year"));
    }), Array.from({
      length: fillerAmount
    }, (_, index) => (0, import_jsx_runtime52.jsx)(YearCalendarButtonFiller, {}, index))]
  }));
});
if (true) YearCalendar.displayName = "YearCalendar";
true ? YearCalendar.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  autoFocus: import_prop_types16.default.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: import_prop_types16.default.object,
  className: import_prop_types16.default.string,
  /**
   * The default selected value.
   * Used when the component is not controlled.
   */
  defaultValue: import_prop_types16.default.object,
  /**
   * If `true`, the component is disabled.
   * When disabled, the value cannot be changed and no interaction is possible.
   * @default false
   */
  disabled: import_prop_types16.default.bool,
  /**
   * If `true`, disable values after the current date for date components, time for time components and both for date time components.
   * @default false
   */
  disableFuture: import_prop_types16.default.bool,
  /**
   * If `true`, today's date is rendering without highlighting with circle.
   * @default false
   */
  disableHighlightToday: import_prop_types16.default.bool,
  /**
   * If `true`, disable values before the current date for date components, time for time components and both for date time components.
   * @default false
   */
  disablePast: import_prop_types16.default.bool,
  gridLabelId: import_prop_types16.default.string,
  hasFocus: import_prop_types16.default.bool,
  /**
   * Maximal selectable date.
   * @default 2099-12-31
   */
  maxDate: import_prop_types16.default.object,
  /**
   * Minimal selectable date.
   * @default 1900-01-01
   */
  minDate: import_prop_types16.default.object,
  /**
   * Callback fired when the value changes.
   * @param {PickerValidDate} value The new value.
   */
  onChange: import_prop_types16.default.func,
  onFocusedViewChange: import_prop_types16.default.func,
  onYearFocus: import_prop_types16.default.func,
  /**
   * If `true`, the component is read-only.
   * When read-only, the value cannot be changed but the user can interact with the interface.
   * @default false
   */
  readOnly: import_prop_types16.default.bool,
  /**
   * The date used to generate the new value when both `value` and `defaultValue` are empty.
   * @default The closest valid year using the validation props, except callbacks such as `shouldDisableYear`.
   */
  referenceDate: import_prop_types16.default.object,
  /**
   * Disable specific year.
   * @param {PickerValidDate} year The year to test.
   * @returns {boolean} If `true`, the year will be disabled.
   */
  shouldDisableYear: import_prop_types16.default.func,
  /**
   * The props used for each component slot.
   * @default {}
   */
  slotProps: import_prop_types16.default.object,
  /**
   * Overridable component slots.
   * @default {}
   */
  slots: import_prop_types16.default.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types16.default.oneOfType([import_prop_types16.default.arrayOf(import_prop_types16.default.oneOfType([import_prop_types16.default.func, import_prop_types16.default.object, import_prop_types16.default.bool])), import_prop_types16.default.func, import_prop_types16.default.object]),
  /**
   * Choose which timezone to use for the value.
   * Example: "default", "system", "UTC", "America/New_York".
   * If you pass values from other timezones to some props, they will be converted to this timezone before being used.
   * @see See the {@link https://mui.com/x/react-date-pickers/timezone/ timezones documentation} for more details.
   * @default The timezone of the `value` or `defaultValue` prop is defined, 'default' otherwise.
   */
  timezone: import_prop_types16.default.string,
  /**
   * The selected value.
   * Used when the component is controlled.
   */
  value: import_prop_types16.default.object,
  /**
   * Years are displayed in ascending (chronological) order by default.
   * If `desc`, years are displayed in descending order.
   * @default 'asc'
   */
  yearsOrder: import_prop_types16.default.oneOf(["asc", "desc"]),
  /**
   * Years rendered per row.
   * @default 3
   */
  yearsPerRow: import_prop_types16.default.oneOf([3, 4])
} : void 0;

// node_modules/.pnpm/@mui+x-date-pickers@8.26.0_@emotion+react@11.14.0_@types+react@19.2.7_react@19.2.3__@em_45e4fa7585d24d6c7a3cddedaa636f9d/node_modules/@mui/x-date-pickers/esm/PickersCalendarHeader/pickersCalendarHeaderClasses.js
var getPickersCalendarHeaderUtilityClass = (slot) => generateUtilityClass("MuiPickersCalendarHeader", slot);
var pickersCalendarHeaderClasses = generateUtilityClasses("MuiPickersCalendarHeader", ["root", "labelContainer", "label", "switchViewButton", "switchViewIcon"]);

// node_modules/.pnpm/@mui+x-date-pickers@8.26.0_@emotion+react@11.14.0_@types+react@19.2.7_react@19.2.3__@em_45e4fa7585d24d6c7a3cddedaa636f9d/node_modules/@mui/x-date-pickers/esm/PickersCalendarHeader/PickersCalendarHeader.js
var React83 = __toESM(require_react(), 1);
var import_prop_types17 = __toESM(require_prop_types(), 1);

// node_modules/.pnpm/@mui+x-date-pickers@8.26.0_@emotion+react@11.14.0_@types+react@19.2.7_react@19.2.3__@em_45e4fa7585d24d6c7a3cddedaa636f9d/node_modules/@mui/x-date-pickers/esm/internals/components/PickersArrowSwitcher/PickersArrowSwitcher.js
var React81 = __toESM(require_react(), 1);

// node_modules/.pnpm/@mui+x-date-pickers@8.26.0_@emotion+react@11.14.0_@types+react@19.2.7_react@19.2.3__@em_45e4fa7585d24d6c7a3cddedaa636f9d/node_modules/@mui/x-date-pickers/esm/internals/components/PickersArrowSwitcher/pickersArrowSwitcherClasses.js
function getPickersArrowSwitcherUtilityClass(slot) {
  return generateUtilityClass("MuiPickersArrowSwitcher", slot);
}
var pickersArrowSwitcherClasses = generateUtilityClasses("MuiPickersArrowSwitcher", ["root", "spacer", "button", "previousIconButton", "nextIconButton", "leftArrowIcon", "rightArrowIcon"]);

// node_modules/.pnpm/@mui+x-date-pickers@8.26.0_@emotion+react@11.14.0_@types+react@19.2.7_react@19.2.3__@em_45e4fa7585d24d6c7a3cddedaa636f9d/node_modules/@mui/x-date-pickers/esm/internals/components/PickersArrowSwitcher/PickersArrowSwitcher.js
var import_jsx_runtime53 = __toESM(require_jsx_runtime(), 1);
var _excluded33 = ["children", "className", "slots", "slotProps", "isNextDisabled", "isNextHidden", "onGoToNext", "nextLabel", "isPreviousDisabled", "isPreviousHidden", "onGoToPrevious", "previousLabel", "labelId", "classes"];
var _excluded210 = ["ownerState"];
var _excluded34 = ["ownerState"];
var PickersArrowSwitcherRoot = styled_default("div", {
  name: "MuiPickersArrowSwitcher",
  slot: "Root"
})({
  display: "flex"
});
var PickersArrowSwitcherSpacer = styled_default("div", {
  name: "MuiPickersArrowSwitcher",
  slot: "Spacer"
})(({
  theme
}) => ({
  width: theme.spacing(3)
}));
var PickersArrowSwitcherButton = styled_default(IconButton_default, {
  name: "MuiPickersArrowSwitcher",
  slot: "Button"
})({
  variants: [{
    props: {
      isButtonHidden: true
    },
    style: {
      visibility: "hidden"
    }
  }]
});
var useUtilityClasses20 = (classes) => {
  const slots = {
    root: ["root"],
    spacer: ["spacer"],
    button: ["button"],
    previousIconButton: ["previousIconButton"],
    nextIconButton: ["nextIconButton"],
    leftArrowIcon: ["leftArrowIcon"],
    rightArrowIcon: ["rightArrowIcon"]
  };
  return composeClasses(slots, getPickersArrowSwitcherUtilityClass, classes);
};
var PickersArrowSwitcher = React81.forwardRef(function PickersArrowSwitcher2(inProps, ref) {
  const isRtl = useRtl();
  const props = useThemeProps({
    props: inProps,
    name: "MuiPickersArrowSwitcher"
  });
  const {
    children,
    className,
    slots,
    slotProps,
    isNextDisabled,
    isNextHidden,
    onGoToNext,
    nextLabel,
    isPreviousDisabled,
    isPreviousHidden,
    onGoToPrevious,
    previousLabel,
    labelId,
    classes: classesProp
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded33);
  const {
    ownerState
  } = usePickerPrivateContext();
  const classes = useUtilityClasses20(classesProp);
  const nextProps = {
    isDisabled: isNextDisabled,
    isHidden: isNextHidden,
    goTo: onGoToNext,
    label: nextLabel
  };
  const previousProps = {
    isDisabled: isPreviousDisabled,
    isHidden: isPreviousHidden,
    goTo: onGoToPrevious,
    label: previousLabel
  };
  const PreviousIconButton = slots?.previousIconButton ?? PickersArrowSwitcherButton;
  const previousIconButtonProps = useSlotProps_default({
    elementType: PreviousIconButton,
    externalSlotProps: slotProps?.previousIconButton,
    additionalProps: {
      size: "medium",
      title: previousProps.label,
      "aria-label": previousProps.label,
      disabled: previousProps.isDisabled,
      edge: "end",
      onClick: previousProps.goTo
    },
    ownerState: _extends({}, ownerState, {
      isButtonHidden: previousProps.isHidden ?? false
    }),
    className: clsx_default(classes.button, classes.previousIconButton)
  });
  const NextIconButton = slots?.nextIconButton ?? PickersArrowSwitcherButton;
  const nextIconButtonProps = useSlotProps_default({
    elementType: NextIconButton,
    externalSlotProps: slotProps?.nextIconButton,
    additionalProps: {
      size: "medium",
      title: nextProps.label,
      "aria-label": nextProps.label,
      disabled: nextProps.isDisabled,
      edge: "start",
      onClick: nextProps.goTo
    },
    ownerState: _extends({}, ownerState, {
      isButtonHidden: nextProps.isHidden ?? false
    }),
    className: clsx_default(classes.button, classes.nextIconButton)
  });
  const LeftArrowIcon = slots?.leftArrowIcon ?? ArrowLeftIcon;
  const _useSlotProps = useSlotProps_default({
    elementType: LeftArrowIcon,
    externalSlotProps: slotProps?.leftArrowIcon,
    additionalProps: {
      fontSize: "inherit"
    },
    ownerState,
    className: classes.leftArrowIcon
  }), leftArrowIconProps = _objectWithoutPropertiesLoose(_useSlotProps, _excluded210);
  const RightArrowIcon = slots?.rightArrowIcon ?? ArrowRightIcon;
  const _useSlotProps2 = useSlotProps_default({
    elementType: RightArrowIcon,
    externalSlotProps: slotProps?.rightArrowIcon,
    additionalProps: {
      fontSize: "inherit"
    },
    ownerState,
    className: classes.rightArrowIcon
  }), rightArrowIconProps = _objectWithoutPropertiesLoose(_useSlotProps2, _excluded34);
  return (0, import_jsx_runtime53.jsxs)(PickersArrowSwitcherRoot, _extends({
    ref,
    className: clsx_default(classes.root, className),
    ownerState
  }, other, {
    children: [(0, import_jsx_runtime53.jsx)(PreviousIconButton, _extends({}, previousIconButtonProps, {
      children: isRtl ? (0, import_jsx_runtime53.jsx)(RightArrowIcon, _extends({}, rightArrowIconProps)) : (0, import_jsx_runtime53.jsx)(LeftArrowIcon, _extends({}, leftArrowIconProps))
    })), children ? (0, import_jsx_runtime53.jsx)(Typography_default, {
      variant: "subtitle1",
      component: "span",
      id: labelId,
      children
    }) : (0, import_jsx_runtime53.jsx)(PickersArrowSwitcherSpacer, {
      className: classes.spacer,
      ownerState
    }), (0, import_jsx_runtime53.jsx)(NextIconButton, _extends({}, nextIconButtonProps, {
      children: isRtl ? (0, import_jsx_runtime53.jsx)(LeftArrowIcon, _extends({}, leftArrowIconProps)) : (0, import_jsx_runtime53.jsx)(RightArrowIcon, _extends({}, rightArrowIconProps))
    }))]
  }));
});
if (true) PickersArrowSwitcher.displayName = "PickersArrowSwitcher";

// node_modules/.pnpm/@mui+x-date-pickers@8.26.0_@emotion+react@11.14.0_@types+react@19.2.7_react@19.2.3__@em_45e4fa7585d24d6c7a3cddedaa636f9d/node_modules/@mui/x-date-pickers/esm/internals/hooks/date-helpers-hooks.js
var React82 = __toESM(require_react(), 1);
function useNextMonthDisabled(month, {
  disableFuture,
  maxDate,
  timezone
}) {
  const adapter = usePickerAdapter();
  return React82.useMemo(() => {
    const now = adapter.date(void 0, timezone);
    const lastEnabledMonth = adapter.startOfMonth(disableFuture && adapter.isBefore(now, maxDate) ? now : maxDate);
    return !adapter.isAfter(lastEnabledMonth, month);
  }, [disableFuture, maxDate, month, adapter, timezone]);
}
function usePreviousMonthDisabled(month, {
  disablePast,
  minDate,
  timezone
}) {
  const adapter = usePickerAdapter();
  return React82.useMemo(() => {
    const now = adapter.date(void 0, timezone);
    const firstEnabledMonth = adapter.startOfMonth(disablePast && adapter.isAfter(now, minDate) ? now : minDate);
    return !adapter.isBefore(firstEnabledMonth, month);
  }, [disablePast, minDate, month, adapter, timezone]);
}
function useMeridiemMode(date, ampm, onChange, selectionState) {
  const adapter = usePickerAdapter();
  const cleanDate = React82.useMemo(() => !adapter.isValid(date) ? null : date, [adapter, date]);
  const meridiemMode = getMeridiem(cleanDate, adapter);
  const handleMeridiemChange = React82.useCallback((mode) => {
    const timeWithMeridiem = cleanDate == null ? null : convertToMeridiem(cleanDate, mode, Boolean(ampm), adapter);
    onChange(timeWithMeridiem, selectionState ?? "partial");
  }, [ampm, cleanDate, onChange, selectionState, adapter]);
  return {
    meridiemMode,
    handleMeridiemChange
  };
}

// node_modules/.pnpm/@mui+x-date-pickers@8.26.0_@emotion+react@11.14.0_@types+react@19.2.7_react@19.2.3__@em_45e4fa7585d24d6c7a3cddedaa636f9d/node_modules/@mui/x-date-pickers/esm/PickersCalendarHeader/PickersCalendarHeader.js
var import_jsx_runtime54 = __toESM(require_jsx_runtime(), 1);
var _excluded35 = ["slots", "slotProps", "currentMonth", "disabled", "disableFuture", "disablePast", "maxDate", "minDate", "onMonthChange", "onViewChange", "view", "reduceAnimations", "views", "labelId", "className", "classes", "timezone", "format"];
var _excluded211 = ["ownerState"];
var useUtilityClasses21 = (classes) => {
  const slots = {
    root: ["root"],
    labelContainer: ["labelContainer"],
    label: ["label"],
    switchViewButton: ["switchViewButton"],
    switchViewIcon: ["switchViewIcon"]
  };
  return composeClasses(slots, getPickersCalendarHeaderUtilityClass, classes);
};
var PickersCalendarHeaderRoot = styled_default("div", {
  name: "MuiPickersCalendarHeader",
  slot: "Root"
})({
  display: "flex",
  alignItems: "center",
  marginTop: 12,
  marginBottom: 4,
  paddingLeft: 24,
  paddingRight: 12,
  // prevent jumping in safari
  maxHeight: 40,
  minHeight: 40
});
var PickersCalendarHeaderLabelContainer = styled_default("div", {
  name: "MuiPickersCalendarHeader",
  slot: "LabelContainer"
})(({
  theme
}) => _extends({
  display: "flex",
  overflow: "hidden",
  alignItems: "center",
  cursor: "pointer",
  marginRight: "auto"
}, theme.typography.body1, {
  fontWeight: theme.typography.fontWeightMedium
}));
var PickersCalendarHeaderLabel = styled_default("div", {
  name: "MuiPickersCalendarHeader",
  slot: "Label"
})({
  marginRight: 6
});
var PickersCalendarHeaderSwitchViewButton = styled_default(IconButton_default, {
  name: "MuiPickersCalendarHeader",
  slot: "SwitchViewButton"
})({
  marginRight: "auto",
  variants: [{
    props: {
      view: "year"
    },
    style: {
      [`.${pickersCalendarHeaderClasses.switchViewIcon}`]: {
        transform: "rotate(180deg)"
      }
    }
  }]
});
var PickersCalendarHeaderSwitchViewIcon = styled_default(ArrowDropDownIcon, {
  name: "MuiPickersCalendarHeader",
  slot: "SwitchViewIcon"
})(({
  theme
}) => ({
  willChange: "transform",
  transition: theme.transitions.create("transform"),
  transform: "rotate(0deg)"
}));
var PickersCalendarHeader = React83.forwardRef(function PickersCalendarHeader2(inProps, ref) {
  const translations = usePickerTranslations();
  const adapter = usePickerAdapter();
  const props = useThemeProps({
    props: inProps,
    name: "MuiPickersCalendarHeader"
  });
  const {
    slots,
    slotProps,
    currentMonth: month,
    disabled,
    disableFuture,
    disablePast,
    maxDate,
    minDate,
    onMonthChange,
    onViewChange,
    view,
    reduceAnimations,
    views,
    labelId,
    className,
    classes: classesProp,
    timezone,
    format = `${adapter.formats.month} ${adapter.formats.year}`
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded35);
  const {
    ownerState
  } = usePickerPrivateContext();
  const classes = useUtilityClasses21(classesProp);
  const SwitchViewButton = slots?.switchViewButton ?? PickersCalendarHeaderSwitchViewButton;
  const switchViewButtonProps = useSlotProps_default({
    elementType: SwitchViewButton,
    externalSlotProps: slotProps?.switchViewButton,
    additionalProps: {
      size: "small",
      "aria-label": translations.calendarViewSwitchingButtonAriaLabel(view)
    },
    ownerState: _extends({}, ownerState, {
      view
    }),
    className: classes.switchViewButton
  });
  const SwitchViewIcon = slots?.switchViewIcon ?? PickersCalendarHeaderSwitchViewIcon;
  const _useSlotProps = useSlotProps_default({
    elementType: SwitchViewIcon,
    externalSlotProps: slotProps?.switchViewIcon,
    ownerState,
    className: classes.switchViewIcon
  }), switchViewIconProps = _objectWithoutPropertiesLoose(_useSlotProps, _excluded211);
  const selectNextMonth = () => onMonthChange(adapter.addMonths(month, 1));
  const selectPreviousMonth = () => onMonthChange(adapter.addMonths(month, -1));
  const isNextMonthDisabled = useNextMonthDisabled(month, {
    disableFuture,
    maxDate,
    timezone
  });
  const isPreviousMonthDisabled = usePreviousMonthDisabled(month, {
    disablePast,
    minDate,
    timezone
  });
  const handleToggleView = () => {
    if (views.length === 1 || !onViewChange || disabled) {
      return;
    }
    if (views.length === 2) {
      onViewChange(views.find((el) => el !== view) || views[0]);
    } else {
      const nextIndexToOpen = views.indexOf(view) !== 0 ? 0 : 1;
      onViewChange(views[nextIndexToOpen]);
    }
  };
  if (views.length === 1 && views[0] === "year") {
    return null;
  }
  const label = adapter.formatByString(month, format);
  return (0, import_jsx_runtime54.jsxs)(PickersCalendarHeaderRoot, _extends({}, other, {
    ownerState,
    className: clsx_default(classes.root, className),
    ref,
    children: [(0, import_jsx_runtime54.jsxs)(PickersCalendarHeaderLabelContainer, {
      role: "presentation",
      onClick: handleToggleView,
      ownerState,
      "aria-live": "polite",
      className: classes.labelContainer,
      children: [(0, import_jsx_runtime54.jsx)(PickersFadeTransitionGroup, {
        reduceAnimations,
        transKey: label,
        children: (0, import_jsx_runtime54.jsx)(PickersCalendarHeaderLabel, {
          id: labelId,
          ownerState,
          className: classes.label,
          children: label
        })
      }), views.length > 1 && !disabled && (0, import_jsx_runtime54.jsx)(SwitchViewButton, _extends({}, switchViewButtonProps, {
        children: (0, import_jsx_runtime54.jsx)(SwitchViewIcon, _extends({}, switchViewIconProps))
      }))]
    }), (0, import_jsx_runtime54.jsx)(Fade_default, {
      in: view === "day",
      appear: !reduceAnimations,
      enter: !reduceAnimations,
      children: (0, import_jsx_runtime54.jsx)(PickersArrowSwitcher, {
        slots,
        slotProps,
        onGoToPrevious: selectPreviousMonth,
        isPreviousDisabled: isPreviousMonthDisabled,
        previousLabel: translations.previousMonth,
        onGoToNext: selectNextMonth,
        isNextDisabled: isNextMonthDisabled,
        nextLabel: translations.nextMonth
      })
    })]
  }));
});
if (true) PickersCalendarHeader.displayName = "PickersCalendarHeader";
true ? PickersCalendarHeader.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * Override or extend the styles applied to the component.
   */
  classes: import_prop_types17.default.object,
  className: import_prop_types17.default.string,
  currentMonth: import_prop_types17.default.object.isRequired,
  disabled: import_prop_types17.default.bool,
  disableFuture: import_prop_types17.default.bool,
  disablePast: import_prop_types17.default.bool,
  /**
   * Format used to display the date.
   * @default `${adapter.formats.month} ${adapter.formats.year}`
   */
  format: import_prop_types17.default.string,
  /**
   * Id of the calendar text element.
   * It is used to establish an `aria-labelledby` relationship with the calendar `grid` element.
   */
  labelId: import_prop_types17.default.string,
  maxDate: import_prop_types17.default.object.isRequired,
  minDate: import_prop_types17.default.object.isRequired,
  onMonthChange: import_prop_types17.default.func.isRequired,
  onViewChange: import_prop_types17.default.func,
  reduceAnimations: import_prop_types17.default.bool.isRequired,
  /**
   * The props used for each component slot.
   * @default {}
   */
  slotProps: import_prop_types17.default.object,
  /**
   * Overridable component slots.
   * @default {}
   */
  slots: import_prop_types17.default.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types17.default.oneOfType([import_prop_types17.default.arrayOf(import_prop_types17.default.oneOfType([import_prop_types17.default.func, import_prop_types17.default.object, import_prop_types17.default.bool])), import_prop_types17.default.func, import_prop_types17.default.object]),
  timezone: import_prop_types17.default.string.isRequired,
  view: import_prop_types17.default.oneOf(["day", "month", "year"]).isRequired,
  views: import_prop_types17.default.arrayOf(import_prop_types17.default.oneOf(["day", "month", "year"]).isRequired).isRequired
} : void 0;

// node_modules/.pnpm/@mui+x-date-pickers@8.26.0_@emotion+react@11.14.0_@types+react@19.2.7_react@19.2.3__@em_45e4fa7585d24d6c7a3cddedaa636f9d/node_modules/@mui/x-date-pickers/esm/internals/components/PickerViewRoot/PickerViewRoot.js
var PickerViewRoot = styled_default("div", {
  slot: "internal",
  shouldForwardProp: void 0
})({
  overflow: "hidden",
  width: DIALOG_WIDTH,
  maxHeight: VIEW_HEIGHT,
  display: "flex",
  flexDirection: "column",
  margin: "0 auto"
});

// node_modules/.pnpm/@mui+x-date-pickers@8.26.0_@emotion+react@11.14.0_@types+react@19.2.7_react@19.2.3__@em_45e4fa7585d24d6c7a3cddedaa636f9d/node_modules/@mui/x-date-pickers/esm/DateCalendar/dateCalendarClasses.js
var getDateCalendarUtilityClass = (slot) => generateUtilityClass("MuiDateCalendar", slot);
var dateCalendarClasses = generateUtilityClasses("MuiDateCalendar", ["root", "viewTransitionContainer"]);

// node_modules/.pnpm/@mui+x-date-pickers@8.26.0_@emotion+react@11.14.0_@types+react@19.2.7_react@19.2.3__@em_45e4fa7585d24d6c7a3cddedaa636f9d/node_modules/@mui/x-date-pickers/esm/DateCalendar/DateCalendar.js
var import_jsx_runtime55 = __toESM(require_jsx_runtime(), 1);
var _excluded36 = ["autoFocus", "onViewChange", "value", "defaultValue", "referenceDate", "disableFuture", "disablePast", "onChange", "onYearChange", "onMonthChange", "reduceAnimations", "shouldDisableDate", "shouldDisableMonth", "shouldDisableYear", "view", "views", "openTo", "className", "classes", "disabled", "readOnly", "minDate", "maxDate", "disableHighlightToday", "focusedView", "onFocusedViewChange", "showDaysOutsideCurrentMonth", "fixedWeekNumber", "dayOfWeekFormatter", "slots", "slotProps", "loading", "renderLoading", "displayWeekNumber", "yearsOrder", "yearsPerRow", "monthsPerRow", "timezone"];
var useUtilityClasses22 = (classes) => {
  const slots = {
    root: ["root"],
    viewTransitionContainer: ["viewTransitionContainer"]
  };
  return composeClasses(slots, getDateCalendarUtilityClass, classes);
};
function useDateCalendarDefaultizedProps(props, name) {
  const themeProps = useThemeProps({
    props,
    name
  });
  const reduceAnimations = useReduceAnimations(themeProps.reduceAnimations);
  const validationProps = useApplyDefaultValuesToDateValidationProps(themeProps);
  return _extends({}, themeProps, validationProps, {
    loading: themeProps.loading ?? false,
    openTo: themeProps.openTo ?? "day",
    views: themeProps.views ?? ["year", "day"],
    reduceAnimations,
    renderLoading: themeProps.renderLoading ?? (() => (0, import_jsx_runtime55.jsx)("span", {
      children: "..."
    }))
  });
}
var DateCalendarRoot = styled_default(PickerViewRoot, {
  name: "MuiDateCalendar",
  slot: "Root"
})({
  display: "flex",
  flexDirection: "column",
  height: VIEW_HEIGHT
});
var DateCalendarViewTransitionContainer = styled_default(PickersFadeTransitionGroup, {
  name: "MuiDateCalendar",
  slot: "ViewTransitionContainer"
})({});
var DateCalendar = React84.forwardRef(function DateCalendar2(inProps, ref) {
  const adapter = usePickerAdapter();
  const {
    ownerState
  } = usePickerPrivateContext();
  const id = useId();
  const props = useDateCalendarDefaultizedProps(inProps, "MuiDateCalendar");
  const {
    autoFocus,
    onViewChange,
    value: valueProp,
    defaultValue,
    referenceDate: referenceDateProp,
    disableFuture,
    disablePast,
    onChange,
    onMonthChange,
    reduceAnimations,
    shouldDisableDate,
    shouldDisableMonth,
    shouldDisableYear,
    view: inView,
    views,
    openTo,
    className,
    classes: classesProp,
    disabled,
    readOnly,
    minDate,
    maxDate,
    disableHighlightToday,
    focusedView: focusedViewProp,
    onFocusedViewChange,
    showDaysOutsideCurrentMonth,
    fixedWeekNumber,
    dayOfWeekFormatter,
    slots,
    slotProps,
    loading,
    renderLoading,
    displayWeekNumber,
    yearsOrder,
    yearsPerRow,
    monthsPerRow,
    timezone: timezoneProp
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded36);
  const {
    value,
    handleValueChange,
    timezone
  } = useControlledValue({
    name: "DateCalendar",
    timezone: timezoneProp,
    value: valueProp,
    defaultValue,
    referenceDate: referenceDateProp,
    onChange,
    valueManager: singleItemValueManager
  });
  const {
    view,
    setView,
    focusedView,
    setFocusedView,
    goToNextView,
    setValueAndGoToNextView
  } = useViews({
    view: inView,
    views,
    openTo,
    onChange: handleValueChange,
    onViewChange,
    autoFocus,
    focusedView: focusedViewProp,
    onFocusedViewChange
  });
  const {
    referenceDate,
    calendarState,
    setVisibleDate,
    isDateDisabled,
    onMonthSwitchingAnimationEnd
  } = useCalendarState({
    value,
    referenceDate: referenceDateProp,
    reduceAnimations,
    onMonthChange,
    minDate,
    maxDate,
    shouldDisableDate,
    disablePast,
    disableFuture,
    timezone,
    getCurrentMonthFromVisibleDate: (visibleDate, prevMonth) => {
      if (adapter.isSameMonth(visibleDate, prevMonth)) {
        return prevMonth;
      }
      return adapter.startOfMonth(visibleDate);
    }
  });
  const minDateWithDisabled = disabled && value || minDate;
  const maxDateWithDisabled = disabled && value || maxDate;
  const gridLabelId = `${id}-grid-label`;
  const hasFocus = focusedView !== null;
  const CalendarHeader = slots?.calendarHeader ?? PickersCalendarHeader;
  const calendarHeaderProps = useSlotProps_default({
    elementType: CalendarHeader,
    externalSlotProps: slotProps?.calendarHeader,
    additionalProps: {
      views,
      view,
      currentMonth: calendarState.currentMonth,
      onViewChange: setView,
      onMonthChange: (month) => setVisibleDate({
        target: month,
        reason: "header-navigation"
      }),
      minDate: minDateWithDisabled,
      maxDate: maxDateWithDisabled,
      disabled,
      disablePast,
      disableFuture,
      reduceAnimations,
      timezone,
      labelId: gridLabelId
    },
    ownerState
  });
  const handleDateMonthChange = useEventCallback_default((newDate) => {
    const startOfMonth = adapter.startOfMonth(newDate);
    const endOfMonth = adapter.endOfMonth(newDate);
    const closestEnabledDate = isDateDisabled(newDate) ? findClosestEnabledDate({
      adapter,
      date: newDate,
      minDate: adapter.isBefore(minDate, startOfMonth) ? startOfMonth : minDate,
      maxDate: adapter.isAfter(maxDate, endOfMonth) ? endOfMonth : maxDate,
      disablePast,
      disableFuture,
      isDateDisabled,
      timezone
    }) : newDate;
    if (closestEnabledDate) {
      setValueAndGoToNextView(closestEnabledDate, "finish");
      setVisibleDate({
        target: closestEnabledDate,
        reason: "cell-interaction"
      });
    } else {
      goToNextView();
      setVisibleDate({
        target: startOfMonth,
        reason: "cell-interaction"
      });
    }
  });
  const handleDateYearChange = useEventCallback_default((newDate) => {
    const startOfYear = adapter.startOfYear(newDate);
    const endOfYear = adapter.endOfYear(newDate);
    const closestEnabledDate = isDateDisabled(newDate) ? findClosestEnabledDate({
      adapter,
      date: newDate,
      minDate: adapter.isBefore(minDate, startOfYear) ? startOfYear : minDate,
      maxDate: adapter.isAfter(maxDate, endOfYear) ? endOfYear : maxDate,
      disablePast,
      disableFuture,
      isDateDisabled,
      timezone
    }) : newDate;
    if (closestEnabledDate) {
      setValueAndGoToNextView(closestEnabledDate, "finish");
      setVisibleDate({
        target: closestEnabledDate,
        reason: "cell-interaction"
      });
    } else {
      goToNextView();
      setVisibleDate({
        target: startOfYear,
        reason: "cell-interaction"
      });
    }
  });
  const handleSelectedDayChange = useEventCallback_default((day) => {
    if (day) {
      return handleValueChange(mergeDateAndTime(adapter, day, value ?? referenceDate), "finish", view);
    }
    return handleValueChange(day, "finish", view);
  });
  React84.useEffect(() => {
    if (adapter.isValid(value)) {
      setVisibleDate({
        target: value,
        reason: "controlled-value-change"
      });
    }
  }, [value]);
  const classes = useUtilityClasses22(classesProp);
  const baseDateValidationProps = {
    disablePast,
    disableFuture,
    maxDate,
    minDate
  };
  const commonViewProps = {
    disableHighlightToday,
    readOnly,
    disabled,
    timezone,
    gridLabelId,
    slots,
    slotProps
  };
  const prevOpenViewRef = React84.useRef(view);
  React84.useEffect(() => {
    if (prevOpenViewRef.current === view) {
      return;
    }
    if (focusedView === prevOpenViewRef.current) {
      setFocusedView(view, true);
    }
    prevOpenViewRef.current = view;
  }, [focusedView, setFocusedView, view]);
  const selectedDays = React84.useMemo(() => [value], [value]);
  return (0, import_jsx_runtime55.jsxs)(DateCalendarRoot, _extends({
    ref,
    className: clsx_default(classes.root, className),
    ownerState
  }, other, {
    children: [(0, import_jsx_runtime55.jsx)(CalendarHeader, _extends({}, calendarHeaderProps, {
      slots,
      slotProps
    })), (0, import_jsx_runtime55.jsx)(DateCalendarViewTransitionContainer, {
      reduceAnimations,
      className: classes.viewTransitionContainer,
      transKey: view,
      ownerState,
      children: (0, import_jsx_runtime55.jsxs)("div", {
        children: [view === "year" && (0, import_jsx_runtime55.jsx)(YearCalendar, _extends({}, baseDateValidationProps, commonViewProps, {
          value,
          onChange: handleDateYearChange,
          shouldDisableYear,
          hasFocus,
          onFocusedViewChange: (isViewFocused) => setFocusedView("year", isViewFocused),
          yearsOrder,
          yearsPerRow,
          referenceDate
        })), view === "month" && (0, import_jsx_runtime55.jsx)(MonthCalendar, _extends({}, baseDateValidationProps, commonViewProps, {
          currentMonth: calendarState.currentMonth,
          hasFocus,
          className,
          value,
          onChange: handleDateMonthChange,
          shouldDisableMonth,
          onFocusedViewChange: (isViewFocused) => setFocusedView("month", isViewFocused),
          monthsPerRow,
          referenceDate
        })), view === "day" && (0, import_jsx_runtime55.jsx)(DayCalendar, _extends({}, calendarState, baseDateValidationProps, commonViewProps, {
          onMonthSwitchingAnimationEnd,
          hasFocus,
          onFocusedDayChange: (focusedDate) => setVisibleDate({
            target: focusedDate,
            reason: "cell-interaction"
          }),
          reduceAnimations,
          selectedDays,
          onSelectedDaysChange: handleSelectedDayChange,
          shouldDisableDate,
          shouldDisableMonth,
          shouldDisableYear,
          onFocusedViewChange: (isViewFocused) => setFocusedView("day", isViewFocused),
          showDaysOutsideCurrentMonth,
          fixedWeekNumber,
          dayOfWeekFormatter,
          displayWeekNumber,
          loading,
          renderLoading
        }))]
      })
    })]
  }));
});
if (true) DateCalendar.displayName = "DateCalendar";
true ? DateCalendar.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * If `true`, the main element is focused during the first mount.
   * This main element is:
   * - the element chosen by the visible view if any (i.e: the selected day on the `day` view).
   * - the `input` element if there is a field rendered.
   */
  autoFocus: import_prop_types18.default.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: import_prop_types18.default.object,
  className: import_prop_types18.default.string,
  /**
   * Formats the day of week displayed in the calendar header.
   * @param {PickerValidDate} date The date of the day of week provided by the adapter.
   * @returns {string} The name to display.
   * @default (date: PickerValidDate) => adapter.format(date, 'weekdayShort').charAt(0).toUpperCase()
   */
  dayOfWeekFormatter: import_prop_types18.default.func,
  /**
   * The default selected value.
   * Used when the component is not controlled.
   */
  defaultValue: import_prop_types18.default.object,
  /**
   * If `true`, the component is disabled.
   * When disabled, the value cannot be changed and no interaction is possible.
   * @default false
   */
  disabled: import_prop_types18.default.bool,
  /**
   * If `true`, disable values after the current date for date components, time for time components and both for date time components.
   * @default false
   */
  disableFuture: import_prop_types18.default.bool,
  /**
   * If `true`, today's date is rendering without highlighting with circle.
   * @default false
   */
  disableHighlightToday: import_prop_types18.default.bool,
  /**
   * If `true`, disable values before the current date for date components, time for time components and both for date time components.
   * @default false
   */
  disablePast: import_prop_types18.default.bool,
  /**
   * If `true`, the week number will be display in the calendar.
   */
  displayWeekNumber: import_prop_types18.default.bool,
  /**
   * The day view will show as many weeks as needed after the end of the current month to match this value.
   * Put it to 6 to have a fixed number of weeks in Gregorian calendars
   */
  fixedWeekNumber: import_prop_types18.default.number,
  /**
   * Controlled focused view.
   */
  focusedView: import_prop_types18.default.oneOf(["day", "month", "year"]),
  /**
   * If `true`, calls `renderLoading` instead of rendering the day calendar.
   * Can be used to preload information and show it in calendar.
   * @default false
   */
  loading: import_prop_types18.default.bool,
  /**
   * Maximal selectable date.
   * @default 2099-12-31
   */
  maxDate: import_prop_types18.default.object,
  /**
   * Minimal selectable date.
   * @default 1900-01-01
   */
  minDate: import_prop_types18.default.object,
  /**
   * Months rendered per row.
   * @default 3
   */
  monthsPerRow: import_prop_types18.default.oneOf([3, 4]),
  /**
   * Callback fired when the value changes.
   * @template TValue The value type. It will be the same type as `value` or `null`. It can be in `[start, end]` format in case of range value.
   * @template TView The view type. Will be one of date or time views.
   * @param {TValue} value The new value.
   * @param {PickerSelectionState | undefined} selectionState Indicates if the date selection is complete.
   * @param {TView | undefined} selectedView Indicates the view in which the selection has been made.
   */
  onChange: import_prop_types18.default.func,
  /**
   * Callback fired on focused view change.
   * @template TView Type of the view. It will vary based on the Picker type and the `views` it uses.
   * @param {TView} view The new view to focus or not.
   * @param {boolean} hasFocus `true` if the view should be focused.
   */
  onFocusedViewChange: import_prop_types18.default.func,
  /**
   * Callback fired on month change.
   * @param {PickerValidDate} month The new month.
   */
  onMonthChange: import_prop_types18.default.func,
  /**
   * Callback fired on view change.
   * @template TView Type of the view. It will vary based on the Picker type and the `views` it uses.
   * @param {TView} view The new view.
   */
  onViewChange: import_prop_types18.default.func,
  /**
   * Callback fired on year change.
   * @param {PickerValidDate} year The new year.
   */
  onYearChange: import_prop_types18.default.func,
  /**
   * The default visible view.
   * Used when the component view is not controlled.
   * Must be a valid option from `views` list.
   */
  openTo: import_prop_types18.default.oneOf(["day", "month", "year"]),
  /**
   * If `true`, the component is read-only.
   * When read-only, the value cannot be changed but the user can interact with the interface.
   * @default false
   */
  readOnly: import_prop_types18.default.bool,
  /**
   * If `true`, disable heavy animations.
   * @default `@media(prefers-reduced-motion: reduce)` || `navigator.userAgent` matches Android <10 or iOS <13
   */
  reduceAnimations: import_prop_types18.default.bool,
  /**
   * The date used to generate the new value when both `value` and `defaultValue` are empty.
   * @default The closest valid date using the validation props, except callbacks such as `shouldDisableDate`.
   */
  referenceDate: import_prop_types18.default.object,
  /**
   * Component displaying when passed `loading` true.
   * @returns {React.ReactNode} The node to render when loading.
   * @default () => <span>...</span>
   */
  renderLoading: import_prop_types18.default.func,
  /**
   * Disable specific date.
   *
   * Warning: This function can be called multiple times (for example when rendering date calendar, checking if focus can be moved to a certain date, etc.). Expensive computations can impact performance.
   *
   * @param {PickerValidDate} day The date to test.
   * @returns {boolean} If `true` the date will be disabled.
   */
  shouldDisableDate: import_prop_types18.default.func,
  /**
   * Disable specific month.
   * @param {PickerValidDate} month The month to test.
   * @returns {boolean} If `true`, the month will be disabled.
   */
  shouldDisableMonth: import_prop_types18.default.func,
  /**
   * Disable specific year.
   * @param {PickerValidDate} year The year to test.
   * @returns {boolean} If `true`, the year will be disabled.
   */
  shouldDisableYear: import_prop_types18.default.func,
  /**
   * If `true`, days outside the current month are rendered:
   *
   * - if `fixedWeekNumber` is defined, renders days to have the weeks requested.
   *
   * - if `fixedWeekNumber` is not defined, renders day to fill the first and last week of the current month.
   *
   * - ignored if `calendars` equals more than `1` on range pickers.
   * @default false
   */
  showDaysOutsideCurrentMonth: import_prop_types18.default.bool,
  /**
   * The props used for each component slot.
   * @default {}
   */
  slotProps: import_prop_types18.default.object,
  /**
   * Overridable component slots.
   * @default {}
   */
  slots: import_prop_types18.default.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types18.default.oneOfType([import_prop_types18.default.arrayOf(import_prop_types18.default.oneOfType([import_prop_types18.default.func, import_prop_types18.default.object, import_prop_types18.default.bool])), import_prop_types18.default.func, import_prop_types18.default.object]),
  /**
   * Choose which timezone to use for the value.
   * Example: "default", "system", "UTC", "America/New_York".
   * If you pass values from other timezones to some props, they will be converted to this timezone before being used.
   * @see See the {@link https://mui.com/x/react-date-pickers/timezone/ timezones documentation} for more details.
   * @default The timezone of the `value` or `defaultValue` prop is defined, 'default' otherwise.
   */
  timezone: import_prop_types18.default.string,
  /**
   * The selected value.
   * Used when the component is controlled.
   */
  value: import_prop_types18.default.object,
  /**
   * The visible view.
   * Used when the component view is controlled.
   * Must be a valid option from `views` list.
   */
  view: import_prop_types18.default.oneOf(["day", "month", "year"]),
  /**
   * Available views.
   */
  views: import_prop_types18.default.arrayOf(import_prop_types18.default.oneOf(["day", "month", "year"]).isRequired),
  /**
   * Years are displayed in ascending (chronological) order by default.
   * If `desc`, years are displayed in descending order.
   * @default 'asc'
   */
  yearsOrder: import_prop_types18.default.oneOf(["asc", "desc"]),
  /**
   * Years rendered per row.
   * @default 3
   */
  yearsPerRow: import_prop_types18.default.oneOf([3, 4])
} : void 0;

// node_modules/.pnpm/@mui+x-date-pickers@8.26.0_@emotion+react@11.14.0_@types+react@19.2.7_react@19.2.3__@em_45e4fa7585d24d6c7a3cddedaa636f9d/node_modules/@mui/x-date-pickers/esm/dateViewRenderers/dateViewRenderers.js
var import_jsx_runtime56 = __toESM(require_jsx_runtime(), 1);
var renderDateViewCalendar = ({
  view,
  onViewChange,
  views,
  focusedView,
  onFocusedViewChange,
  value,
  defaultValue,
  referenceDate,
  onChange,
  className,
  classes,
  disableFuture,
  disablePast,
  minDate,
  maxDate,
  shouldDisableDate,
  shouldDisableMonth,
  shouldDisableYear,
  reduceAnimations,
  onMonthChange,
  monthsPerRow,
  onYearChange,
  yearsOrder,
  yearsPerRow,
  slots,
  slotProps,
  loading,
  renderLoading,
  disableHighlightToday,
  readOnly,
  disabled,
  showDaysOutsideCurrentMonth,
  dayOfWeekFormatter,
  sx,
  autoFocus,
  fixedWeekNumber,
  displayWeekNumber,
  timezone
}) => (0, import_jsx_runtime56.jsx)(DateCalendar, {
  view,
  onViewChange,
  views: views.filter(isDatePickerView),
  focusedView: focusedView && isDatePickerView(focusedView) ? focusedView : null,
  onFocusedViewChange,
  value,
  defaultValue,
  referenceDate,
  onChange,
  className,
  classes,
  disableFuture,
  disablePast,
  minDate,
  maxDate,
  shouldDisableDate,
  shouldDisableMonth,
  shouldDisableYear,
  reduceAnimations,
  onMonthChange,
  monthsPerRow,
  onYearChange,
  yearsOrder,
  yearsPerRow,
  slots,
  slotProps,
  loading,
  renderLoading,
  disableHighlightToday,
  readOnly,
  disabled,
  showDaysOutsideCurrentMonth,
  dayOfWeekFormatter,
  sx,
  autoFocus,
  fixedWeekNumber,
  displayWeekNumber,
  timezone
});
if (true) renderDateViewCalendar.displayName = "renderDateViewCalendar";

// node_modules/.pnpm/@mui+x-date-pickers@8.26.0_@emotion+react@11.14.0_@types+react@19.2.7_react@19.2.3__@em_45e4fa7585d24d6c7a3cddedaa636f9d/node_modules/@mui/x-date-pickers/esm/DesktopDatePicker/DesktopDatePicker.js
var DesktopDatePicker = React85.forwardRef(function DesktopDatePicker2(inProps, ref) {
  const adapter = usePickerAdapter();
  const defaultizedProps = useDatePickerDefaultizedProps(inProps, "MuiDesktopDatePicker");
  const viewRenderers = _extends({
    day: renderDateViewCalendar,
    month: renderDateViewCalendar,
    year: renderDateViewCalendar
  }, defaultizedProps.viewRenderers);
  const props = _extends({}, defaultizedProps, {
    closeOnSelect: defaultizedProps.closeOnSelect ?? true,
    viewRenderers,
    format: resolveDateFormat(adapter, defaultizedProps, false),
    yearsPerRow: defaultizedProps.yearsPerRow ?? 4,
    slots: _extends({
      field: DateField
    }, defaultizedProps.slots),
    slotProps: _extends({}, defaultizedProps.slotProps, {
      field: (ownerState) => _extends({}, resolveComponentProps_default(defaultizedProps.slotProps?.field, ownerState), extractValidationProps(defaultizedProps)),
      toolbar: _extends({
        hidden: true
      }, defaultizedProps.slotProps?.toolbar)
    })
  });
  const {
    renderPicker
  } = useDesktopPicker({
    ref,
    props,
    valueManager: singleItemValueManager,
    valueType: "date",
    validator: validateDate,
    steps: null
  });
  return renderPicker();
});
if (true) DesktopDatePicker.displayName = "DesktopDatePicker";
DesktopDatePicker.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * If `true`, the main element is focused during the first mount.
   * This main element is:
   * - the element chosen by the visible view if any (i.e: the selected day on the `day` view).
   * - the `input` element if there is a field rendered.
   */
  autoFocus: import_prop_types19.default.bool,
  className: import_prop_types19.default.string,
  /**
   * If `true`, the Picker will close after submitting the full date.
   * @default true
   */
  closeOnSelect: import_prop_types19.default.bool,
  /**
   * Formats the day of week displayed in the calendar header.
   * @param {PickerValidDate} date The date of the day of week provided by the adapter.
   * @returns {string} The name to display.
   * @default (date: PickerValidDate) => adapter.format(date, 'weekdayShort').charAt(0).toUpperCase()
   */
  dayOfWeekFormatter: import_prop_types19.default.func,
  /**
   * The default value.
   * Used when the component is not controlled.
   */
  defaultValue: import_prop_types19.default.object,
  /**
   * If `true`, the component is disabled.
   * When disabled, the value cannot be changed and no interaction is possible.
   * @default false
   */
  disabled: import_prop_types19.default.bool,
  /**
   * If `true`, disable values after the current date for date components, time for time components and both for date time components.
   * @default false
   */
  disableFuture: import_prop_types19.default.bool,
  /**
   * If `true`, today's date is rendering without highlighting with circle.
   * @default false
   */
  disableHighlightToday: import_prop_types19.default.bool,
  /**
   * If `true`, the button to open the Picker will not be rendered (it will only render the field).
   * @deprecated Use the [field component](https://mui.com/x/react-date-pickers/fields/) instead.
   * @default false
   */
  disableOpenPicker: import_prop_types19.default.bool,
  /**
   * If `true`, disable values before the current date for date components, time for time components and both for date time components.
   * @default false
   */
  disablePast: import_prop_types19.default.bool,
  /**
   * If `true`, the week number will be display in the calendar.
   */
  displayWeekNumber: import_prop_types19.default.bool,
  /**
   * @default true
   */
  enableAccessibleFieldDOMStructure: import_prop_types19.default.any,
  /**
   * The day view will show as many weeks as needed after the end of the current month to match this value.
   * Put it to 6 to have a fixed number of weeks in Gregorian calendars
   */
  fixedWeekNumber: import_prop_types19.default.number,
  /**
   * Format of the date when rendered in the input(s).
   * Defaults to localized format based on the used `views`.
   */
  format: import_prop_types19.default.string,
  /**
   * Density of the format when rendered in the input.
   * Setting `formatDensity` to `"spacious"` will add a space before and after each `/`, `-` and `.` character.
   * @default "dense"
   */
  formatDensity: import_prop_types19.default.oneOf(["dense", "spacious"]),
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: refType_default,
  /**
   * The label content.
   */
  label: import_prop_types19.default.node,
  /**
   * If `true`, calls `renderLoading` instead of rendering the day calendar.
   * Can be used to preload information and show it in calendar.
   * @default false
   */
  loading: import_prop_types19.default.bool,
  /**
   * Locale for components texts.
   * Allows overriding texts coming from `LocalizationProvider` and `theme`.
   */
  localeText: import_prop_types19.default.object,
  /**
   * Maximal selectable date.
   * @default 2099-12-31
   */
  maxDate: import_prop_types19.default.object,
  /**
   * Minimal selectable date.
   * @default 1900-01-01
   */
  minDate: import_prop_types19.default.object,
  /**
   * Months rendered per row.
   * @default 3
   */
  monthsPerRow: import_prop_types19.default.oneOf([3, 4]),
  /**
   * Name attribute used by the `input` element in the Field.
   */
  name: import_prop_types19.default.string,
  /**
   * Callback fired when the value is accepted.
   * @template TValue The value type. It will be the same type as `value` or `null`. It can be in `[start, end]` format in case of range value.
   * @template TError The validation error type. It will be either `string` or a `null`. It can be in `[start, end]` format in case of range value.
   * @param {TValue} value The value that was just accepted.
   * @param {FieldChangeHandlerContext<TError>} context Context about this acceptance:
   * - `validationError`: validation result of the current value
   * - `source`: source of the acceptance. One of 'field' | 'view' | 'unknown'
   * - `shortcut` (optional): the shortcut metadata if the value was accepted via a shortcut selection
   */
  onAccept: import_prop_types19.default.func,
  /**
   * Callback fired when the value changes.
   * @template TValue The value type. It will be the same type as `value` or `null`. It can be in `[start, end]` format in case of range value.
   * @template TError The validation error type. It will be either `string` or a `null`. It can be in `[start, end]` format in case of range value.
   * @param {TValue} value The new value.
   * @param {FieldChangeHandlerContext<TError>} context Context about this change:
   * - `validationError`: validation result of the current value
   * - `source`: source of the change. One of 'field' | 'view' | 'unknown'
   * - `shortcut` (optional): the shortcut metadata if the change was triggered by a shortcut selection
   */
  onChange: import_prop_types19.default.func,
  /**
   * Callback fired when the popup requests to be closed.
   * Use in controlled mode (see `open`).
   */
  onClose: import_prop_types19.default.func,
  /**
   * Callback fired when the error associated with the current value changes.
   * When a validation error is detected, the `error` parameter contains a non-null value.
   * This can be used to render an appropriate form error.
   * @template TError The validation error type. It will be either `string` or a `null`. It can be in `[start, end]` format in case of range value.
   * @template TValue The value type. It will be the same type as `value` or `null`. It can be in `[start, end]` format in case of range value.
   * @param {TError} error The reason why the current value is not valid.
   * @param {TValue} value The value associated with the error.
   */
  onError: import_prop_types19.default.func,
  /**
   * Callback fired on month change.
   * @param {PickerValidDate} month The new month.
   */
  onMonthChange: import_prop_types19.default.func,
  /**
   * Callback fired when the popup requests to be opened.
   * Use in controlled mode (see `open`).
   */
  onOpen: import_prop_types19.default.func,
  /**
   * Callback fired when the selected sections change.
   * @param {FieldSelectedSections} newValue The new selected sections.
   */
  onSelectedSectionsChange: import_prop_types19.default.func,
  /**
   * Callback fired on view change.
   * @template TView Type of the view. It will vary based on the Picker type and the `views` it uses.
   * @param {TView} view The new view.
   */
  onViewChange: import_prop_types19.default.func,
  /**
   * Callback fired on year change.
   * @param {PickerValidDate} year The new year.
   */
  onYearChange: import_prop_types19.default.func,
  /**
   * Control the popup or dialog open state.
   * @default false
   */
  open: import_prop_types19.default.bool,
  /**
   * The default visible view.
   * Used when the component view is not controlled.
   * Must be a valid option from `views` list.
   */
  openTo: import_prop_types19.default.oneOf(["day", "month", "year"]),
  /**
   * Force rendering in particular orientation.
   */
  orientation: import_prop_types19.default.oneOf(["landscape", "portrait"]),
  /**
   * If `true`, the component is read-only.
   * When read-only, the value cannot be changed but the user can interact with the interface.
   * @default false
   */
  readOnly: import_prop_types19.default.bool,
  /**
   * If `true`, disable heavy animations.
   * @default `@media(prefers-reduced-motion: reduce)` || `navigator.userAgent` matches Android <10 or iOS <13
   */
  reduceAnimations: import_prop_types19.default.bool,
  /**
   * The date used to generate the new value when both `value` and `defaultValue` are empty.
   * @default The closest valid date-time using the validation props, except callbacks like `shouldDisable<...>`.
   */
  referenceDate: import_prop_types19.default.object,
  /**
   * Component displaying when passed `loading` true.
   * @returns {React.ReactNode} The node to render when loading.
   * @default () => <span>...</span>
   */
  renderLoading: import_prop_types19.default.func,
  /**
   * The currently selected sections.
   * This prop accepts four formats:
   * 1. If a number is provided, the section at this index will be selected.
   * 2. If a string of type `FieldSectionType` is provided, the first section with that name will be selected.
   * 3. If `"all"` is provided, all the sections will be selected.
   * 4. If `null` is provided, no section will be selected.
   * If not provided, the selected sections will be handled internally.
   */
  selectedSections: import_prop_types19.default.oneOfType([import_prop_types19.default.oneOf(["all", "day", "empty", "hours", "meridiem", "minutes", "month", "seconds", "weekDay", "year"]), import_prop_types19.default.number]),
  /**
   * Disable specific date.
   *
   * Warning: This function can be called multiple times (for example when rendering date calendar, checking if focus can be moved to a certain date, etc.). Expensive computations can impact performance.
   *
   * @param {PickerValidDate} day The date to test.
   * @returns {boolean} If `true` the date will be disabled.
   */
  shouldDisableDate: import_prop_types19.default.func,
  /**
   * Disable specific month.
   * @param {PickerValidDate} month The month to test.
   * @returns {boolean} If `true`, the month will be disabled.
   */
  shouldDisableMonth: import_prop_types19.default.func,
  /**
   * Disable specific year.
   * @param {PickerValidDate} year The year to test.
   * @returns {boolean} If `true`, the year will be disabled.
   */
  shouldDisableYear: import_prop_types19.default.func,
  /**
   * If `true`, days outside the current month are rendered:
   *
   * - if `fixedWeekNumber` is defined, renders days to have the weeks requested.
   *
   * - if `fixedWeekNumber` is not defined, renders day to fill the first and last week of the current month.
   *
   * - ignored if `calendars` equals more than `1` on range pickers.
   * @default false
   */
  showDaysOutsideCurrentMonth: import_prop_types19.default.bool,
  /**
   * The props used for each component slot.
   * @default {}
   */
  slotProps: import_prop_types19.default.object,
  /**
   * Overridable component slots.
   * @default {}
   */
  slots: import_prop_types19.default.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types19.default.oneOfType([import_prop_types19.default.arrayOf(import_prop_types19.default.oneOfType([import_prop_types19.default.func, import_prop_types19.default.object, import_prop_types19.default.bool])), import_prop_types19.default.func, import_prop_types19.default.object]),
  /**
   * Choose which timezone to use for the value.
   * Example: "default", "system", "UTC", "America/New_York".
   * If you pass values from other timezones to some props, they will be converted to this timezone before being used.
   * @see See the {@link https://mui.com/x/react-date-pickers/timezone/ timezones documentation} for more details.
   * @default The timezone of the `value` or `defaultValue` prop is defined, 'default' otherwise.
   */
  timezone: import_prop_types19.default.string,
  /**
   * The selected value.
   * Used when the component is controlled.
   */
  value: import_prop_types19.default.object,
  /**
   * The visible view.
   * Used when the component view is controlled.
   * Must be a valid option from `views` list.
   */
  view: import_prop_types19.default.oneOf(["day", "month", "year"]),
  /**
   * Define custom view renderers for each section.
   * If `null`, the section will only have field editing.
   * If `undefined`, internally defined view will be used.
   */
  viewRenderers: import_prop_types19.default.shape({
    day: import_prop_types19.default.func,
    month: import_prop_types19.default.func,
    year: import_prop_types19.default.func
  }),
  /**
   * Available views.
   */
  views: import_prop_types19.default.arrayOf(import_prop_types19.default.oneOf(["day", "month", "year"]).isRequired),
  /**
   * Years are displayed in ascending (chronological) order by default.
   * If `desc`, years are displayed in descending order.
   * @default 'asc'
   */
  yearsOrder: import_prop_types19.default.oneOf(["asc", "desc"]),
  /**
   * Years rendered per row.
   * @default 4
   */
  yearsPerRow: import_prop_types19.default.oneOf([3, 4])
};

// node_modules/.pnpm/@mui+x-date-pickers@8.26.0_@emotion+react@11.14.0_@types+react@19.2.7_react@19.2.3__@em_45e4fa7585d24d6c7a3cddedaa636f9d/node_modules/@mui/x-date-pickers/esm/MobileDatePicker/MobileDatePicker.js
var React87 = __toESM(require_react(), 1);
var import_prop_types20 = __toESM(require_prop_types(), 1);

// node_modules/.pnpm/@mui+x-date-pickers@8.26.0_@emotion+react@11.14.0_@types+react@19.2.7_react@19.2.3__@em_45e4fa7585d24d6c7a3cddedaa636f9d/node_modules/@mui/x-date-pickers/esm/internals/components/PickersModalDialog.js
var React86 = __toESM(require_react(), 1);
var import_jsx_runtime57 = __toESM(require_jsx_runtime(), 1);
var PickersModalDialogRoot = styled_default(Dialog_default, {
  slot: "internal"
})({
  [`& .${dialogClasses_default.container}`]: {
    outline: 0
  },
  [`& .${dialogClasses_default.paper}`]: {
    outline: 0,
    minWidth: DIALOG_WIDTH
  }
});
var PickersModalDialogContent = styled_default(DialogContent_default, {
  slot: "internal"
})({
  "&:first-of-type": {
    padding: 0
  }
});
function PickersModalDialog(props) {
  const {
    children,
    slots,
    slotProps
  } = props;
  const {
    open
  } = usePickerContext();
  const {
    dismissViews,
    onPopperExited
  } = usePickerPrivateContext();
  const Dialog = slots?.dialog ?? PickersModalDialogRoot;
  const Transition = slots?.mobileTransition ?? Fade_default;
  return (0, import_jsx_runtime57.jsx)(Dialog, _extends({
    open,
    onClose: () => {
      dismissViews();
      onPopperExited?.();
    }
  }, slotProps?.dialog, {
    TransitionComponent: Transition,
    TransitionProps: slotProps?.mobileTransition,
    PaperComponent: slots?.mobilePaper,
    PaperProps: slotProps?.mobilePaper,
    children: (0, import_jsx_runtime57.jsx)(PickersModalDialogContent, {
      children
    })
  }));
}

// node_modules/.pnpm/@mui+x-date-pickers@8.26.0_@emotion+react@11.14.0_@types+react@19.2.7_react@19.2.3__@em_45e4fa7585d24d6c7a3cddedaa636f9d/node_modules/@mui/x-date-pickers/esm/internals/hooks/useMobilePicker/useMobilePicker.js
var import_jsx_runtime58 = __toESM(require_jsx_runtime(), 1);
var _excluded37 = ["props", "steps"];
var _excluded212 = ["ownerState"];
var useMobilePicker = (_ref) => {
  let {
    props,
    steps
  } = _ref, pickerParams = _objectWithoutPropertiesLoose(_ref, _excluded37);
  const {
    slots,
    slotProps: innerSlotProps,
    label,
    inputRef,
    localeText
  } = props;
  const getStepNavigation = createNonRangePickerStepNavigation({
    steps
  });
  const {
    providerProps,
    renderCurrentView,
    ownerState
  } = usePicker(_extends({}, pickerParams, {
    props,
    localeText,
    autoFocusView: true,
    viewContainerRole: "dialog",
    variant: "mobile",
    getStepNavigation
  }));
  const labelId = providerProps.privateContextValue.labelId;
  const isToolbarHidden = innerSlotProps?.toolbar?.hidden ?? false;
  const Field = slots.field;
  const _useSlotProps = useSlotProps_default({
    elementType: Field,
    externalSlotProps: innerSlotProps?.field,
    additionalProps: _extends({}, isToolbarHidden && {
      id: labelId
    }),
    ownerState
  }), fieldProps = _objectWithoutPropertiesLoose(_useSlotProps, _excluded212);
  const Layout = slots.layout ?? PickersLayout;
  let labelledById = labelId;
  if (isToolbarHidden) {
    if (label) {
      labelledById = `${labelId}-label`;
    } else {
      labelledById = void 0;
    }
  }
  const slotProps = _extends({}, innerSlotProps, {
    toolbar: _extends({}, innerSlotProps?.toolbar, {
      titleId: labelId
    }),
    mobilePaper: _extends({
      "aria-labelledby": labelledById
    }, innerSlotProps?.mobilePaper)
  });
  const renderPicker = () => (0, import_jsx_runtime58.jsxs)(PickerProvider, _extends({}, providerProps, {
    children: [(0, import_jsx_runtime58.jsx)(Field, _extends({}, fieldProps, {
      slots: _extends({}, slots, fieldProps.slots),
      slotProps: _extends({}, slotProps, fieldProps.slotProps),
      inputRef
    })), (0, import_jsx_runtime58.jsx)(PickersModalDialog, {
      slots,
      slotProps,
      children: (0, import_jsx_runtime58.jsx)(Layout, _extends({}, slotProps?.layout, {
        slots,
        slotProps,
        children: renderCurrentView()
      }))
    })]
  }));
  if (true) renderPicker.displayName = "renderPicker";
  return {
    renderPicker
  };
};

// node_modules/.pnpm/@mui+x-date-pickers@8.26.0_@emotion+react@11.14.0_@types+react@19.2.7_react@19.2.3__@em_45e4fa7585d24d6c7a3cddedaa636f9d/node_modules/@mui/x-date-pickers/esm/MobileDatePicker/MobileDatePicker.js
var MobileDatePicker = React87.forwardRef(function MobileDatePicker2(inProps, ref) {
  const adapter = usePickerAdapter();
  const defaultizedProps = useDatePickerDefaultizedProps(inProps, "MuiMobileDatePicker");
  const viewRenderers = _extends({
    day: renderDateViewCalendar,
    month: renderDateViewCalendar,
    year: renderDateViewCalendar
  }, defaultizedProps.viewRenderers);
  const props = _extends({}, defaultizedProps, {
    viewRenderers,
    format: resolveDateFormat(adapter, defaultizedProps, false),
    slots: _extends({
      field: DateField
    }, defaultizedProps.slots),
    slotProps: _extends({}, defaultizedProps.slotProps, {
      field: (ownerState) => _extends({}, resolveComponentProps_default(defaultizedProps.slotProps?.field, ownerState), extractValidationProps(defaultizedProps)),
      toolbar: _extends({
        hidden: false
      }, defaultizedProps.slotProps?.toolbar)
    })
  });
  const {
    renderPicker
  } = useMobilePicker({
    ref,
    props,
    valueManager: singleItemValueManager,
    valueType: "date",
    validator: validateDate,
    steps: null
  });
  return renderPicker();
});
if (true) MobileDatePicker.displayName = "MobileDatePicker";
MobileDatePicker.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * If `true`, the main element is focused during the first mount.
   * This main element is:
   * - the element chosen by the visible view if any (i.e: the selected day on the `day` view).
   * - the `input` element if there is a field rendered.
   */
  autoFocus: import_prop_types20.default.bool,
  className: import_prop_types20.default.string,
  /**
   * If `true`, the Picker will close after submitting the full date.
   * @default false
   */
  closeOnSelect: import_prop_types20.default.bool,
  /**
   * Formats the day of week displayed in the calendar header.
   * @param {PickerValidDate} date The date of the day of week provided by the adapter.
   * @returns {string} The name to display.
   * @default (date: PickerValidDate) => adapter.format(date, 'weekdayShort').charAt(0).toUpperCase()
   */
  dayOfWeekFormatter: import_prop_types20.default.func,
  /**
   * The default value.
   * Used when the component is not controlled.
   */
  defaultValue: import_prop_types20.default.object,
  /**
   * If `true`, the component is disabled.
   * When disabled, the value cannot be changed and no interaction is possible.
   * @default false
   */
  disabled: import_prop_types20.default.bool,
  /**
   * If `true`, disable values after the current date for date components, time for time components and both for date time components.
   * @default false
   */
  disableFuture: import_prop_types20.default.bool,
  /**
   * If `true`, today's date is rendering without highlighting with circle.
   * @default false
   */
  disableHighlightToday: import_prop_types20.default.bool,
  /**
   * If `true`, the button to open the Picker will not be rendered (it will only render the field).
   * @deprecated Use the [field component](https://mui.com/x/react-date-pickers/fields/) instead.
   * @default false
   */
  disableOpenPicker: import_prop_types20.default.bool,
  /**
   * If `true`, disable values before the current date for date components, time for time components and both for date time components.
   * @default false
   */
  disablePast: import_prop_types20.default.bool,
  /**
   * If `true`, the week number will be display in the calendar.
   */
  displayWeekNumber: import_prop_types20.default.bool,
  /**
   * @default true
   */
  enableAccessibleFieldDOMStructure: import_prop_types20.default.any,
  /**
   * The day view will show as many weeks as needed after the end of the current month to match this value.
   * Put it to 6 to have a fixed number of weeks in Gregorian calendars
   */
  fixedWeekNumber: import_prop_types20.default.number,
  /**
   * Format of the date when rendered in the input(s).
   * Defaults to localized format based on the used `views`.
   */
  format: import_prop_types20.default.string,
  /**
   * Density of the format when rendered in the input.
   * Setting `formatDensity` to `"spacious"` will add a space before and after each `/`, `-` and `.` character.
   * @default "dense"
   */
  formatDensity: import_prop_types20.default.oneOf(["dense", "spacious"]),
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: refType_default,
  /**
   * The label content.
   */
  label: import_prop_types20.default.node,
  /**
   * If `true`, calls `renderLoading` instead of rendering the day calendar.
   * Can be used to preload information and show it in calendar.
   * @default false
   */
  loading: import_prop_types20.default.bool,
  /**
   * Locale for components texts.
   * Allows overriding texts coming from `LocalizationProvider` and `theme`.
   */
  localeText: import_prop_types20.default.object,
  /**
   * Maximal selectable date.
   * @default 2099-12-31
   */
  maxDate: import_prop_types20.default.object,
  /**
   * Minimal selectable date.
   * @default 1900-01-01
   */
  minDate: import_prop_types20.default.object,
  /**
   * Months rendered per row.
   * @default 3
   */
  monthsPerRow: import_prop_types20.default.oneOf([3, 4]),
  /**
   * Name attribute used by the `input` element in the Field.
   */
  name: import_prop_types20.default.string,
  /**
   * Callback fired when the value is accepted.
   * @template TValue The value type. It will be the same type as `value` or `null`. It can be in `[start, end]` format in case of range value.
   * @template TError The validation error type. It will be either `string` or a `null`. It can be in `[start, end]` format in case of range value.
   * @param {TValue} value The value that was just accepted.
   * @param {FieldChangeHandlerContext<TError>} context Context about this acceptance:
   * - `validationError`: validation result of the current value
   * - `source`: source of the acceptance. One of 'field' | 'view' | 'unknown'
   * - `shortcut` (optional): the shortcut metadata if the value was accepted via a shortcut selection
   */
  onAccept: import_prop_types20.default.func,
  /**
   * Callback fired when the value changes.
   * @template TValue The value type. It will be the same type as `value` or `null`. It can be in `[start, end]` format in case of range value.
   * @template TError The validation error type. It will be either `string` or a `null`. It can be in `[start, end]` format in case of range value.
   * @param {TValue} value The new value.
   * @param {FieldChangeHandlerContext<TError>} context Context about this change:
   * - `validationError`: validation result of the current value
   * - `source`: source of the change. One of 'field' | 'view' | 'unknown'
   * - `shortcut` (optional): the shortcut metadata if the change was triggered by a shortcut selection
   */
  onChange: import_prop_types20.default.func,
  /**
   * Callback fired when the popup requests to be closed.
   * Use in controlled mode (see `open`).
   */
  onClose: import_prop_types20.default.func,
  /**
   * Callback fired when the error associated with the current value changes.
   * When a validation error is detected, the `error` parameter contains a non-null value.
   * This can be used to render an appropriate form error.
   * @template TError The validation error type. It will be either `string` or a `null`. It can be in `[start, end]` format in case of range value.
   * @template TValue The value type. It will be the same type as `value` or `null`. It can be in `[start, end]` format in case of range value.
   * @param {TError} error The reason why the current value is not valid.
   * @param {TValue} value The value associated with the error.
   */
  onError: import_prop_types20.default.func,
  /**
   * Callback fired on month change.
   * @param {PickerValidDate} month The new month.
   */
  onMonthChange: import_prop_types20.default.func,
  /**
   * Callback fired when the popup requests to be opened.
   * Use in controlled mode (see `open`).
   */
  onOpen: import_prop_types20.default.func,
  /**
   * Callback fired when the selected sections change.
   * @param {FieldSelectedSections} newValue The new selected sections.
   */
  onSelectedSectionsChange: import_prop_types20.default.func,
  /**
   * Callback fired on view change.
   * @template TView Type of the view. It will vary based on the Picker type and the `views` it uses.
   * @param {TView} view The new view.
   */
  onViewChange: import_prop_types20.default.func,
  /**
   * Callback fired on year change.
   * @param {PickerValidDate} year The new year.
   */
  onYearChange: import_prop_types20.default.func,
  /**
   * Control the popup or dialog open state.
   * @default false
   */
  open: import_prop_types20.default.bool,
  /**
   * The default visible view.
   * Used when the component view is not controlled.
   * Must be a valid option from `views` list.
   */
  openTo: import_prop_types20.default.oneOf(["day", "month", "year"]),
  /**
   * Force rendering in particular orientation.
   */
  orientation: import_prop_types20.default.oneOf(["landscape", "portrait"]),
  /**
   * If `true`, the component is read-only.
   * When read-only, the value cannot be changed but the user can interact with the interface.
   * @default false
   */
  readOnly: import_prop_types20.default.bool,
  /**
   * If `true`, disable heavy animations.
   * @default `@media(prefers-reduced-motion: reduce)` || `navigator.userAgent` matches Android <10 or iOS <13
   */
  reduceAnimations: import_prop_types20.default.bool,
  /**
   * The date used to generate the new value when both `value` and `defaultValue` are empty.
   * @default The closest valid date-time using the validation props, except callbacks like `shouldDisable<...>`.
   */
  referenceDate: import_prop_types20.default.object,
  /**
   * Component displaying when passed `loading` true.
   * @returns {React.ReactNode} The node to render when loading.
   * @default () => <span>...</span>
   */
  renderLoading: import_prop_types20.default.func,
  /**
   * The currently selected sections.
   * This prop accepts four formats:
   * 1. If a number is provided, the section at this index will be selected.
   * 2. If a string of type `FieldSectionType` is provided, the first section with that name will be selected.
   * 3. If `"all"` is provided, all the sections will be selected.
   * 4. If `null` is provided, no section will be selected.
   * If not provided, the selected sections will be handled internally.
   */
  selectedSections: import_prop_types20.default.oneOfType([import_prop_types20.default.oneOf(["all", "day", "empty", "hours", "meridiem", "minutes", "month", "seconds", "weekDay", "year"]), import_prop_types20.default.number]),
  /**
   * Disable specific date.
   *
   * Warning: This function can be called multiple times (for example when rendering date calendar, checking if focus can be moved to a certain date, etc.). Expensive computations can impact performance.
   *
   * @param {PickerValidDate} day The date to test.
   * @returns {boolean} If `true` the date will be disabled.
   */
  shouldDisableDate: import_prop_types20.default.func,
  /**
   * Disable specific month.
   * @param {PickerValidDate} month The month to test.
   * @returns {boolean} If `true`, the month will be disabled.
   */
  shouldDisableMonth: import_prop_types20.default.func,
  /**
   * Disable specific year.
   * @param {PickerValidDate} year The year to test.
   * @returns {boolean} If `true`, the year will be disabled.
   */
  shouldDisableYear: import_prop_types20.default.func,
  /**
   * If `true`, days outside the current month are rendered:
   *
   * - if `fixedWeekNumber` is defined, renders days to have the weeks requested.
   *
   * - if `fixedWeekNumber` is not defined, renders day to fill the first and last week of the current month.
   *
   * - ignored if `calendars` equals more than `1` on range pickers.
   * @default false
   */
  showDaysOutsideCurrentMonth: import_prop_types20.default.bool,
  /**
   * The props used for each component slot.
   * @default {}
   */
  slotProps: import_prop_types20.default.object,
  /**
   * Overridable component slots.
   * @default {}
   */
  slots: import_prop_types20.default.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types20.default.oneOfType([import_prop_types20.default.arrayOf(import_prop_types20.default.oneOfType([import_prop_types20.default.func, import_prop_types20.default.object, import_prop_types20.default.bool])), import_prop_types20.default.func, import_prop_types20.default.object]),
  /**
   * Choose which timezone to use for the value.
   * Example: "default", "system", "UTC", "America/New_York".
   * If you pass values from other timezones to some props, they will be converted to this timezone before being used.
   * @see See the {@link https://mui.com/x/react-date-pickers/timezone/ timezones documentation} for more details.
   * @default The timezone of the `value` or `defaultValue` prop is defined, 'default' otherwise.
   */
  timezone: import_prop_types20.default.string,
  /**
   * The selected value.
   * Used when the component is controlled.
   */
  value: import_prop_types20.default.object,
  /**
   * The visible view.
   * Used when the component view is controlled.
   * Must be a valid option from `views` list.
   */
  view: import_prop_types20.default.oneOf(["day", "month", "year"]),
  /**
   * Define custom view renderers for each section.
   * If `null`, the section will only have field editing.
   * If `undefined`, internally defined view will be used.
   */
  viewRenderers: import_prop_types20.default.shape({
    day: import_prop_types20.default.func,
    month: import_prop_types20.default.func,
    year: import_prop_types20.default.func
  }),
  /**
   * Available views.
   */
  views: import_prop_types20.default.arrayOf(import_prop_types20.default.oneOf(["day", "month", "year"]).isRequired),
  /**
   * Years are displayed in ascending (chronological) order by default.
   * If `desc`, years are displayed in descending order.
   * @default 'asc'
   */
  yearsOrder: import_prop_types20.default.oneOf(["asc", "desc"]),
  /**
   * Years rendered per row.
   * @default 3
   */
  yearsPerRow: import_prop_types20.default.oneOf([3, 4])
};

// node_modules/.pnpm/@mui+x-date-pickers@8.26.0_@emotion+react@11.14.0_@types+react@19.2.7_react@19.2.3__@em_45e4fa7585d24d6c7a3cddedaa636f9d/node_modules/@mui/x-date-pickers/esm/DatePicker/DatePicker.js
var import_jsx_runtime59 = __toESM(require_jsx_runtime(), 1);
var _excluded38 = ["desktopModeMediaQuery"];
var DatePicker = React88.forwardRef(function DatePicker2(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiDatePicker"
  });
  const {
    desktopModeMediaQuery = DEFAULT_DESKTOP_MODE_MEDIA_QUERY
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded38);
  const isDesktop = useMediaQuery_default(desktopModeMediaQuery, {
    defaultMatches: true
  });
  if (isDesktop) {
    return (0, import_jsx_runtime59.jsx)(DesktopDatePicker, _extends({
      ref
    }, other));
  }
  return (0, import_jsx_runtime59.jsx)(MobileDatePicker, _extends({
    ref
  }, other));
});
if (true) DatePicker.displayName = "DatePicker";
true ? DatePicker.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * If `true`, the main element is focused during the first mount.
   * This main element is:
   * - the element chosen by the visible view if any (i.e: the selected day on the `day` view).
   * - the `input` element if there is a field rendered.
   */
  autoFocus: import_prop_types21.default.bool,
  className: import_prop_types21.default.string,
  /**
   * If `true`, the Picker will close after submitting the full date.
   * @default `true` for desktop, `false` for mobile (based on the chosen wrapper and `desktopModeMediaQuery` prop).
   */
  closeOnSelect: import_prop_types21.default.bool,
  /**
   * Formats the day of week displayed in the calendar header.
   * @param {PickerValidDate} date The date of the day of week provided by the adapter.
   * @returns {string} The name to display.
   * @default (date: PickerValidDate) => adapter.format(date, 'weekdayShort').charAt(0).toUpperCase()
   */
  dayOfWeekFormatter: import_prop_types21.default.func,
  /**
   * The default value.
   * Used when the component is not controlled.
   */
  defaultValue: import_prop_types21.default.object,
  /**
   * CSS media query when `Mobile` mode will be changed to `Desktop`.
   * @default '@media (pointer: fine)'
   * @example '@media (min-width: 720px)' or theme.breakpoints.up("sm")
   */
  desktopModeMediaQuery: import_prop_types21.default.string,
  /**
   * If `true`, the component is disabled.
   * When disabled, the value cannot be changed and no interaction is possible.
   * @default false
   */
  disabled: import_prop_types21.default.bool,
  /**
   * If `true`, disable values after the current date for date components, time for time components and both for date time components.
   * @default false
   */
  disableFuture: import_prop_types21.default.bool,
  /**
   * If `true`, today's date is rendering without highlighting with circle.
   * @default false
   */
  disableHighlightToday: import_prop_types21.default.bool,
  /**
   * If `true`, the button to open the Picker will not be rendered (it will only render the field).
   * @deprecated Use the [field component](https://mui.com/x/react-date-pickers/fields/) instead.
   * @default false
   */
  disableOpenPicker: import_prop_types21.default.bool,
  /**
   * If `true`, disable values before the current date for date components, time for time components and both for date time components.
   * @default false
   */
  disablePast: import_prop_types21.default.bool,
  /**
   * If `true`, the week number will be display in the calendar.
   */
  displayWeekNumber: import_prop_types21.default.bool,
  /**
   * @default true
   */
  enableAccessibleFieldDOMStructure: import_prop_types21.default.any,
  /**
   * The day view will show as many weeks as needed after the end of the current month to match this value.
   * Put it to 6 to have a fixed number of weeks in Gregorian calendars
   */
  fixedWeekNumber: import_prop_types21.default.number,
  /**
   * Format of the date when rendered in the input(s).
   * Defaults to localized format based on the used `views`.
   */
  format: import_prop_types21.default.string,
  /**
   * Density of the format when rendered in the input.
   * Setting `formatDensity` to `"spacious"` will add a space before and after each `/`, `-` and `.` character.
   * @default "dense"
   */
  formatDensity: import_prop_types21.default.oneOf(["dense", "spacious"]),
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: refType_default,
  /**
   * The label content.
   */
  label: import_prop_types21.default.node,
  /**
   * If `true`, calls `renderLoading` instead of rendering the day calendar.
   * Can be used to preload information and show it in calendar.
   * @default false
   */
  loading: import_prop_types21.default.bool,
  /**
   * Locale for components texts.
   * Allows overriding texts coming from `LocalizationProvider` and `theme`.
   */
  localeText: import_prop_types21.default.object,
  /**
   * Maximal selectable date.
   * @default 2099-12-31
   */
  maxDate: import_prop_types21.default.object,
  /**
   * Minimal selectable date.
   * @default 1900-01-01
   */
  minDate: import_prop_types21.default.object,
  /**
   * Months rendered per row.
   * @default 3
   */
  monthsPerRow: import_prop_types21.default.oneOf([3, 4]),
  /**
   * Name attribute used by the `input` element in the Field.
   */
  name: import_prop_types21.default.string,
  /**
   * Callback fired when the value is accepted.
   * @template TValue The value type. It will be the same type as `value` or `null`. It can be in `[start, end]` format in case of range value.
   * @template TError The validation error type. It will be either `string` or a `null`. It can be in `[start, end]` format in case of range value.
   * @param {TValue} value The value that was just accepted.
   * @param {FieldChangeHandlerContext<TError>} context Context about this acceptance:
   * - `validationError`: validation result of the current value
   * - `source`: source of the acceptance. One of 'field' | 'view' | 'unknown'
   * - `shortcut` (optional): the shortcut metadata if the value was accepted via a shortcut selection
   */
  onAccept: import_prop_types21.default.func,
  /**
   * Callback fired when the value changes.
   * @template TValue The value type. It will be the same type as `value` or `null`. It can be in `[start, end]` format in case of range value.
   * @template TError The validation error type. It will be either `string` or a `null`. It can be in `[start, end]` format in case of range value.
   * @param {TValue} value The new value.
   * @param {FieldChangeHandlerContext<TError>} context Context about this change:
   * - `validationError`: validation result of the current value
   * - `source`: source of the change. One of 'field' | 'view' | 'unknown'
   * - `shortcut` (optional): the shortcut metadata if the change was triggered by a shortcut selection
   */
  onChange: import_prop_types21.default.func,
  /**
   * Callback fired when the popup requests to be closed.
   * Use in controlled mode (see `open`).
   */
  onClose: import_prop_types21.default.func,
  /**
   * Callback fired when the error associated with the current value changes.
   * When a validation error is detected, the `error` parameter contains a non-null value.
   * This can be used to render an appropriate form error.
   * @template TError The validation error type. It will be either `string` or a `null`. It can be in `[start, end]` format in case of range value.
   * @template TValue The value type. It will be the same type as `value` or `null`. It can be in `[start, end]` format in case of range value.
   * @param {TError} error The reason why the current value is not valid.
   * @param {TValue} value The value associated with the error.
   */
  onError: import_prop_types21.default.func,
  /**
   * Callback fired on month change.
   * @param {PickerValidDate} month The new month.
   */
  onMonthChange: import_prop_types21.default.func,
  /**
   * Callback fired when the popup requests to be opened.
   * Use in controlled mode (see `open`).
   */
  onOpen: import_prop_types21.default.func,
  /**
   * Callback fired when the selected sections change.
   * @param {FieldSelectedSections} newValue The new selected sections.
   */
  onSelectedSectionsChange: import_prop_types21.default.func,
  /**
   * Callback fired on view change.
   * @template TView Type of the view. It will vary based on the Picker type and the `views` it uses.
   * @param {TView} view The new view.
   */
  onViewChange: import_prop_types21.default.func,
  /**
   * Callback fired on year change.
   * @param {PickerValidDate} year The new year.
   */
  onYearChange: import_prop_types21.default.func,
  /**
   * Control the popup or dialog open state.
   * @default false
   */
  open: import_prop_types21.default.bool,
  /**
   * The default visible view.
   * Used when the component view is not controlled.
   * Must be a valid option from `views` list.
   */
  openTo: import_prop_types21.default.oneOf(["day", "month", "year"]),
  /**
   * Force rendering in particular orientation.
   */
  orientation: import_prop_types21.default.oneOf(["landscape", "portrait"]),
  /**
   * If `true`, the component is read-only.
   * When read-only, the value cannot be changed but the user can interact with the interface.
   * @default false
   */
  readOnly: import_prop_types21.default.bool,
  /**
   * If `true`, disable heavy animations.
   * @default `@media(prefers-reduced-motion: reduce)` || `navigator.userAgent` matches Android <10 or iOS <13
   */
  reduceAnimations: import_prop_types21.default.bool,
  /**
   * The date used to generate the new value when both `value` and `defaultValue` are empty.
   * @default The closest valid date-time using the validation props, except callbacks like `shouldDisable<...>`.
   */
  referenceDate: import_prop_types21.default.object,
  /**
   * Component displaying when passed `loading` true.
   * @returns {React.ReactNode} The node to render when loading.
   * @default () => <span>...</span>
   */
  renderLoading: import_prop_types21.default.func,
  /**
   * The currently selected sections.
   * This prop accepts four formats:
   * 1. If a number is provided, the section at this index will be selected.
   * 2. If a string of type `FieldSectionType` is provided, the first section with that name will be selected.
   * 3. If `"all"` is provided, all the sections will be selected.
   * 4. If `null` is provided, no section will be selected.
   * If not provided, the selected sections will be handled internally.
   */
  selectedSections: import_prop_types21.default.oneOfType([import_prop_types21.default.oneOf(["all", "day", "empty", "hours", "meridiem", "minutes", "month", "seconds", "weekDay", "year"]), import_prop_types21.default.number]),
  /**
   * Disable specific date.
   *
   * Warning: This function can be called multiple times (for example when rendering date calendar, checking if focus can be moved to a certain date, etc.). Expensive computations can impact performance.
   *
   * @param {PickerValidDate} day The date to test.
   * @returns {boolean} If `true` the date will be disabled.
   */
  shouldDisableDate: import_prop_types21.default.func,
  /**
   * Disable specific month.
   * @param {PickerValidDate} month The month to test.
   * @returns {boolean} If `true`, the month will be disabled.
   */
  shouldDisableMonth: import_prop_types21.default.func,
  /**
   * Disable specific year.
   * @param {PickerValidDate} year The year to test.
   * @returns {boolean} If `true`, the year will be disabled.
   */
  shouldDisableYear: import_prop_types21.default.func,
  /**
   * If `true`, days outside the current month are rendered:
   *
   * - if `fixedWeekNumber` is defined, renders days to have the weeks requested.
   *
   * - if `fixedWeekNumber` is not defined, renders day to fill the first and last week of the current month.
   *
   * - ignored if `calendars` equals more than `1` on range pickers.
   * @default false
   */
  showDaysOutsideCurrentMonth: import_prop_types21.default.bool,
  /**
   * The props used for each component slot.
   * @default {}
   */
  slotProps: import_prop_types21.default.object,
  /**
   * Overridable component slots.
   * @default {}
   */
  slots: import_prop_types21.default.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types21.default.oneOfType([import_prop_types21.default.arrayOf(import_prop_types21.default.oneOfType([import_prop_types21.default.func, import_prop_types21.default.object, import_prop_types21.default.bool])), import_prop_types21.default.func, import_prop_types21.default.object]),
  /**
   * Choose which timezone to use for the value.
   * Example: "default", "system", "UTC", "America/New_York".
   * If you pass values from other timezones to some props, they will be converted to this timezone before being used.
   * @see See the {@link https://mui.com/x/react-date-pickers/timezone/ timezones documentation} for more details.
   * @default The timezone of the `value` or `defaultValue` prop is defined, 'default' otherwise.
   */
  timezone: import_prop_types21.default.string,
  /**
   * The selected value.
   * Used when the component is controlled.
   */
  value: import_prop_types21.default.object,
  /**
   * The visible view.
   * Used when the component view is controlled.
   * Must be a valid option from `views` list.
   */
  view: import_prop_types21.default.oneOf(["day", "month", "year"]),
  /**
   * Define custom view renderers for each section.
   * If `null`, the section will only have field editing.
   * If `undefined`, internally defined view will be used.
   */
  viewRenderers: import_prop_types21.default.shape({
    day: import_prop_types21.default.func,
    month: import_prop_types21.default.func,
    year: import_prop_types21.default.func
  }),
  /**
   * Available views.
   */
  views: import_prop_types21.default.arrayOf(import_prop_types21.default.oneOf(["day", "month", "year"]).isRequired),
  /**
   * Years are displayed in ascending (chronological) order by default.
   * If `desc`, years are displayed in descending order.
   * @default 'asc'
   */
  yearsOrder: import_prop_types21.default.oneOf(["asc", "desc"]),
  /**
   * Years rendered per row.
   * @default 4 on desktop, 3 on mobile
   */
  yearsPerRow: import_prop_types21.default.oneOf([3, 4])
} : void 0;

// node_modules/.pnpm/@mui+x-date-pickers@8.26.0_@emotion+react@11.14.0_@types+react@19.2.7_react@19.2.3__@em_45e4fa7585d24d6c7a3cddedaa636f9d/node_modules/@mui/x-date-pickers/esm/DateTimePicker/DateTimePicker.js
var React107 = __toESM(require_react(), 1);
var import_prop_types31 = __toESM(require_prop_types(), 1);

// node_modules/.pnpm/@mui+x-date-pickers@8.26.0_@emotion+react@11.14.0_@types+react@19.2.7_react@19.2.3__@em_45e4fa7585d24d6c7a3cddedaa636f9d/node_modules/@mui/x-date-pickers/esm/DesktopDateTimePicker/DesktopDateTimePicker.js
var React105 = __toESM(require_react(), 1);
var import_prop_types29 = __toESM(require_prop_types(), 1);

// node_modules/.pnpm/@mui+x-date-pickers@8.26.0_@emotion+react@11.14.0_@types+react@19.2.7_react@19.2.3__@em_45e4fa7585d24d6c7a3cddedaa636f9d/node_modules/@mui/x-date-pickers/esm/DateTimeField/DateTimeField.js
var React89 = __toESM(require_react(), 1);
var import_prop_types22 = __toESM(require_prop_types(), 1);

// node_modules/.pnpm/@mui+x-date-pickers@8.26.0_@emotion+react@11.14.0_@types+react@19.2.7_react@19.2.3__@em_45e4fa7585d24d6c7a3cddedaa636f9d/node_modules/@mui/x-date-pickers/esm/DateTimeField/useDateTimeField.js
var useDateTimeField = (props) => {
  const manager = useDateTimeManager(props);
  return useField({
    manager,
    props
  });
};

// node_modules/.pnpm/@mui+x-date-pickers@8.26.0_@emotion+react@11.14.0_@types+react@19.2.7_react@19.2.3__@em_45e4fa7585d24d6c7a3cddedaa636f9d/node_modules/@mui/x-date-pickers/esm/DateTimeField/DateTimeField.js
var import_jsx_runtime60 = __toESM(require_jsx_runtime(), 1);
var _excluded39 = ["slots", "slotProps"];
var DateTimeField = React89.forwardRef(function DateTimeField2(inProps, inRef) {
  const themeProps = useThemeProps({
    props: inProps,
    name: "MuiDateTimeField"
  });
  const {
    slots,
    slotProps
  } = themeProps, other = _objectWithoutPropertiesLoose(themeProps, _excluded39);
  const textFieldProps = useFieldTextFieldProps({
    slotProps,
    ref: inRef,
    externalForwardedProps: other
  });
  const fieldResponse = useDateTimeField(textFieldProps);
  return (0, import_jsx_runtime60.jsx)(PickerFieldUIContextProvider, {
    slots,
    slotProps,
    inputRef: other.inputRef,
    children: (0, import_jsx_runtime60.jsx)(PickerFieldUI, {
      fieldResponse,
      defaultOpenPickerIcon: CalendarIcon
    })
  });
});
if (true) DateTimeField.displayName = "DateTimeField";
true ? DateTimeField.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * 12h/24h view for hour selection clock.
   * @default adapter.is12HourCycleInCurrentLocale()
   */
  ampm: import_prop_types22.default.bool,
  /**
   * If `true`, the `input` element is focused during the first mount.
   * @default false
   */
  autoFocus: import_prop_types22.default.bool,
  className: import_prop_types22.default.string,
  /**
   * If `true`, a clear button will be shown in the field allowing value clearing.
   * @default false
   */
  clearable: import_prop_types22.default.bool,
  /**
   * The position at which the clear button is placed.
   * If the field is not clearable, the button is not rendered.
   * @default 'end'
   */
  clearButtonPosition: import_prop_types22.default.oneOf(["end", "start"]),
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'primary'
   */
  color: import_prop_types22.default.oneOf(["error", "info", "primary", "secondary", "success", "warning"]),
  component: import_prop_types22.default.elementType,
  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue: import_prop_types22.default.object,
  /**
   * If `true`, the component is disabled.
   * When disabled, the value cannot be changed and no interaction is possible.
   * @default false
   */
  disabled: import_prop_types22.default.bool,
  /**
   * If `true`, disable values after the current date for date components, time for time components and both for date time components.
   * @default false
   */
  disableFuture: import_prop_types22.default.bool,
  /**
   * Do not ignore date part when validating min/max time.
   * @default false
   */
  disableIgnoringDatePartForTimeValidation: import_prop_types22.default.bool,
  /**
   * If `true`, disable values before the current date for date components, time for time components and both for date time components.
   * @default false
   */
  disablePast: import_prop_types22.default.bool,
  /**
   * @default true
   */
  enableAccessibleFieldDOMStructure: import_prop_types22.default.bool,
  /**
   * If `true`, the component is displayed in focused state.
   */
  focused: import_prop_types22.default.bool,
  /**
   * Format of the date when rendered in the input(s).
   */
  format: import_prop_types22.default.string,
  /**
   * Density of the format when rendered in the input.
   * Setting `formatDensity` to `"spacious"` will add a space before and after each `/`, `-` and `.` character.
   * @default "dense"
   */
  formatDensity: import_prop_types22.default.oneOf(["dense", "spacious"]),
  /**
   * Props applied to the [`FormHelperText`](https://mui.com/material-ui/api/form-helper-text/) element.
   * @deprecated Use `slotProps.formHelperText` instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  FormHelperTextProps: import_prop_types22.default.object,
  /**
   * If `true`, the input will take up the full width of its container.
   * @default false
   */
  fullWidth: import_prop_types22.default.bool,
  /**
   * The helper text content.
   */
  helperText: import_prop_types22.default.node,
  /**
   * If `true`, the label is hidden.
   * This is used to increase density for a `FilledInput`.
   * Be sure to add `aria-label` to the `input` element.
   * @default false
   */
  hiddenLabel: import_prop_types22.default.bool,
  /**
   * The id of the `input` element.
   * Use this prop to make `label` and `helperText` accessible for screen readers.
   */
  id: import_prop_types22.default.string,
  /**
   * Props applied to the [`InputLabel`](https://mui.com/material-ui/api/input-label/) element.
   * Pointer events like `onClick` are enabled if and only if `shrink` is `true`.
   * @deprecated Use `slotProps.inputLabel` instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  InputLabelProps: import_prop_types22.default.object,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input#attributes) applied to the `input` element.
   * @deprecated Use `slotProps.htmlInput` instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  inputProps: import_prop_types22.default.object,
  /**
   * Props applied to the Input element.
   * It will be a [`FilledInput`](https://mui.com/material-ui/api/filled-input/),
   * [`OutlinedInput`](https://mui.com/material-ui/api/outlined-input/) or [`Input`](https://mui.com/material-ui/api/input/)
   * component depending on the `variant` prop value.
   * @deprecated Use `slotProps.input` instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  InputProps: import_prop_types22.default.object,
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: refType_default,
  /**
   * The label content.
   */
  label: import_prop_types22.default.node,
  /**
   * If `dense` or `normal`, will adjust vertical spacing of this and contained components.
   * @default 'none'
   */
  margin: import_prop_types22.default.oneOf(["dense", "none", "normal"]),
  /**
   * Maximal selectable date.
   * @default 2099-12-31
   */
  maxDate: import_prop_types22.default.object,
  /**
   * Maximal selectable moment of time with binding to date, to set max time in each day use `maxTime`.
   */
  maxDateTime: import_prop_types22.default.object,
  /**
   * Maximal selectable time.
   * The date part of the object will be ignored unless `props.disableIgnoringDatePartForTimeValidation === true`.
   */
  maxTime: import_prop_types22.default.object,
  /**
   * Minimal selectable date.
   * @default 1900-01-01
   */
  minDate: import_prop_types22.default.object,
  /**
   * Minimal selectable moment of time with binding to date, to set min time in each day use `minTime`.
   */
  minDateTime: import_prop_types22.default.object,
  /**
   * Minimal selectable time.
   * The date part of the object will be ignored unless `props.disableIgnoringDatePartForTimeValidation === true`.
   */
  minTime: import_prop_types22.default.object,
  /**
   * Step over minutes.
   * @default 1
   */
  minutesStep: import_prop_types22.default.number,
  /**
   * Name attribute of the `input` element.
   */
  name: import_prop_types22.default.string,
  onBlur: import_prop_types22.default.func,
  /**
   * Callback fired when the value changes.
   * @template TValue The value type. It will be the same type as `value` or `null`. It can be in `[start, end]` format in case of range value.
   * @template TError The validation error type. It will be either `string` or a `null`. It can be in `[start, end]` format in case of range value.
   * @param {TValue} value The new value.
   * @param {FieldChangeHandlerContext<TError>} context The context containing the validation result of the current value.
   */
  onChange: import_prop_types22.default.func,
  /**
   * Callback fired when the clear button is clicked.
   */
  onClear: import_prop_types22.default.func,
  /**
   * Callback fired when the error associated with the current value changes.
   * When a validation error is detected, the `error` parameter contains a non-null value.
   * This can be used to render an appropriate form error.
   * @template TError The validation error type. It will be either `string` or a `null`. It can be in `[start, end]` format in case of range value.
   * @template TValue The value type. It will be the same type as `value` or `null`. It can be in `[start, end]` format in case of range value.
   * @param {TError} error The reason why the current value is not valid.
   * @param {TValue} value The value associated with the error.
   */
  onError: import_prop_types22.default.func,
  onFocus: import_prop_types22.default.func,
  /**
   * Callback fired when the selected sections change.
   * @param {FieldSelectedSections} newValue The new selected sections.
   */
  onSelectedSectionsChange: import_prop_types22.default.func,
  /**
   * The position at which the opening button is placed.
   * If there is no Picker to open, the button is not rendered
   * @default 'end'
   */
  openPickerButtonPosition: import_prop_types22.default.oneOf(["end", "start"]),
  /**
   * If `true`, the component is read-only.
   * When read-only, the value cannot be changed but the user can interact with the interface.
   * @default false
   */
  readOnly: import_prop_types22.default.bool,
  /**
   * The date used to generate a part of the new value that is not present in the format when both `value` and `defaultValue` are empty.
   * For example, on time fields it will be used to determine the date to set.
   * @default The closest valid date using the validation props, except callbacks such as `shouldDisableDate`. Value is rounded to the most granular section used.
   */
  referenceDate: import_prop_types22.default.object,
  /**
   * If `true`, the label is displayed as required and the `input` element is required.
   * @default false
   */
  required: import_prop_types22.default.bool,
  /**
   * The currently selected sections.
   * This prop accepts four formats:
   * 1. If a number is provided, the section at this index will be selected.
   * 2. If a string of type `FieldSectionType` is provided, the first section with that name will be selected.
   * 3. If `"all"` is provided, all the sections will be selected.
   * 4. If `null` is provided, no section will be selected.
   * If not provided, the selected sections will be handled internally.
   */
  selectedSections: import_prop_types22.default.oneOfType([import_prop_types22.default.oneOf(["all", "day", "empty", "hours", "meridiem", "minutes", "month", "seconds", "weekDay", "year"]), import_prop_types22.default.number]),
  /**
   * Disable specific date.
   *
   * Warning: This function can be called multiple times (for example when rendering date calendar, checking if focus can be moved to a certain date, etc.). Expensive computations can impact performance.
   *
   * @param {PickerValidDate} day The date to test.
   * @returns {boolean} If `true` the date will be disabled.
   */
  shouldDisableDate: import_prop_types22.default.func,
  /**
   * Disable specific month.
   * @param {PickerValidDate} month The month to test.
   * @returns {boolean} If `true`, the month will be disabled.
   */
  shouldDisableMonth: import_prop_types22.default.func,
  /**
   * Disable specific time.
   * @param {PickerValidDate} value The value to check.
   * @param {TimeView} view The clock type of the timeValue.
   * @returns {boolean} If `true` the time will be disabled.
   */
  shouldDisableTime: import_prop_types22.default.func,
  /**
   * Disable specific year.
   * @param {PickerValidDate} year The year to test.
   * @returns {boolean} If `true`, the year will be disabled.
   */
  shouldDisableYear: import_prop_types22.default.func,
  /**
   * If `true`, the format will respect the leading zeroes (for example on dayjs, the format `M/D/YYYY` will render `8/16/2018`)
   * If `false`, the format will always add leading zeroes (for example on dayjs, the format `M/D/YYYY` will render `08/16/2018`)
   *
   * Warning n°1: Luxon is not able to respect the leading zeroes when using macro tokens (for example "DD"), so `shouldRespectLeadingZeros={true}` might lead to inconsistencies when using `AdapterLuxon`.
   *
   * Warning n°2: When `shouldRespectLeadingZeros={true}`, the field will add an invisible character on the sections containing a single digit to make sure `onChange` is fired.
   * If you need to get the clean value from the input, you can remove this character using `input.value.replace(/\u200e/g, '')`.
   *
   * Warning n°3: When used in strict mode, dayjs and moment require to respect the leading zeros.
   * This mean that when using `shouldRespectLeadingZeros={false}`, if you retrieve the value directly from the input (not listening to `onChange`) and your format contains tokens without leading zeros, the value will not be parsed by your library.
   *
   * @default false
   */
  shouldRespectLeadingZeros: import_prop_types22.default.bool,
  /**
   * The size of the component.
   * @default 'medium'
   */
  size: import_prop_types22.default.oneOf(["medium", "small"]),
  /**
   * The props used for each component slot.
   * @default {}
   */
  slotProps: import_prop_types22.default.object,
  /**
   * Overridable component slots.
   * @default {}
   */
  slots: import_prop_types22.default.object,
  style: import_prop_types22.default.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types22.default.oneOfType([import_prop_types22.default.arrayOf(import_prop_types22.default.oneOfType([import_prop_types22.default.func, import_prop_types22.default.object, import_prop_types22.default.bool])), import_prop_types22.default.func, import_prop_types22.default.object]),
  /**
   * Choose which timezone to use for the value.
   * Example: "default", "system", "UTC", "America/New_York".
   * If you pass values from other timezones to some props, they will be converted to this timezone before being used.
   * @see See the {@link https://mui.com/x/react-date-pickers/timezone/ timezones documentation} for more details.
   * @default The timezone of the `value` or `defaultValue` prop is defined, 'default' otherwise.
   */
  timezone: import_prop_types22.default.string,
  /**
   * The ref object used to imperatively interact with the field.
   */
  unstableFieldRef: import_prop_types22.default.oneOfType([import_prop_types22.default.func, import_prop_types22.default.object]),
  /**
   * The selected value.
   * Used when the component is controlled.
   */
  value: import_prop_types22.default.object,
  /**
   * The variant to use.
   * @default 'outlined'
   */
  variant: import_prop_types22.default.oneOf(["filled", "outlined", "standard"])
} : void 0;

// node_modules/.pnpm/@mui+x-date-pickers@8.26.0_@emotion+react@11.14.0_@types+react@19.2.7_react@19.2.3__@em_45e4fa7585d24d6c7a3cddedaa636f9d/node_modules/@mui/x-date-pickers/esm/DateTimePicker/shared.js
var React94 = __toESM(require_react(), 1);

// node_modules/.pnpm/@mui+x-date-pickers@8.26.0_@emotion+react@11.14.0_@types+react@19.2.7_react@19.2.3__@em_45e4fa7585d24d6c7a3cddedaa636f9d/node_modules/@mui/x-date-pickers/esm/DateTimePicker/DateTimePickerTabs.js
var React90 = __toESM(require_react(), 1);
var import_prop_types23 = __toESM(require_prop_types(), 1);

// node_modules/.pnpm/@mui+x-date-pickers@8.26.0_@emotion+react@11.14.0_@types+react@19.2.7_react@19.2.3__@em_45e4fa7585d24d6c7a3cddedaa636f9d/node_modules/@mui/x-date-pickers/esm/DateTimePicker/dateTimePickerTabsClasses.js
function getDateTimePickerTabsUtilityClass(slot) {
  return generateUtilityClass("MuiDateTimePickerTabs", slot);
}
var dateTimePickerTabsClasses = generateUtilityClasses("MuiDateTimePickerTabs", ["root"]);

// node_modules/.pnpm/@mui+x-date-pickers@8.26.0_@emotion+react@11.14.0_@types+react@19.2.7_react@19.2.3__@em_45e4fa7585d24d6c7a3cddedaa636f9d/node_modules/@mui/x-date-pickers/esm/DateTimePicker/DateTimePickerTabs.js
var import_jsx_runtime61 = __toESM(require_jsx_runtime(), 1);
var viewToTab = (view) => {
  if (isDatePickerView(view)) {
    return "date";
  }
  return "time";
};
var tabToView = (tab) => {
  if (tab === "date") {
    return "day";
  }
  return "hours";
};
var useUtilityClasses23 = (classes) => {
  const slots = {
    root: ["root"]
  };
  return composeClasses(slots, getDateTimePickerTabsUtilityClass, classes);
};
var DateTimePickerTabsRoot = styled_default(Tabs_default, {
  name: "MuiDateTimePickerTabs",
  slot: "Root"
})(({
  theme
}) => ({
  boxShadow: `0 -1px 0 0 inset ${(theme.vars || theme).palette.divider}`,
  "&:last-child": {
    boxShadow: `0 1px 0 0 inset ${(theme.vars || theme).palette.divider}`,
    [`& .${tabsClasses_default.indicator}`]: {
      bottom: "auto",
      top: 0
    }
  }
}));
var DateTimePickerTabs = function DateTimePickerTabs2(inProps) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiDateTimePickerTabs"
  });
  const {
    dateIcon = (0, import_jsx_runtime61.jsx)(DateRangeIcon, {}),
    timeIcon = (0, import_jsx_runtime61.jsx)(TimeIcon, {}),
    hidden = typeof window === "undefined" || window.innerHeight < 667,
    className,
    classes: classesProp,
    sx
  } = props;
  const translations = usePickerTranslations();
  const {
    ownerState
  } = usePickerPrivateContext();
  const {
    view,
    setView
  } = usePickerContext();
  const classes = useUtilityClasses23(classesProp);
  const handleChange = (event, value) => {
    setView(tabToView(value));
  };
  if (hidden) {
    return null;
  }
  return (0, import_jsx_runtime61.jsxs)(DateTimePickerTabsRoot, {
    ownerState,
    variant: "fullWidth",
    value: viewToTab(view),
    onChange: handleChange,
    className: clsx_default(className, classes.root),
    sx,
    children: [(0, import_jsx_runtime61.jsx)(Tab_default, {
      value: "date",
      "aria-label": translations.dateTableLabel,
      icon: (0, import_jsx_runtime61.jsx)(React90.Fragment, {
        children: dateIcon
      })
    }), (0, import_jsx_runtime61.jsx)(Tab_default, {
      value: "time",
      "aria-label": translations.timeTableLabel,
      icon: (0, import_jsx_runtime61.jsx)(React90.Fragment, {
        children: timeIcon
      })
    })]
  });
};
if (true) DateTimePickerTabs.displayName = "DateTimePickerTabs";
true ? DateTimePickerTabs.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * Override or extend the styles applied to the component.
   */
  classes: import_prop_types23.default.object,
  className: import_prop_types23.default.string,
  /**
   * Date tab icon.
   * @default DateRange
   */
  dateIcon: import_prop_types23.default.node,
  /**
   * Toggles visibility of the tabs allowing view switching.
   * @default `window.innerHeight < 667` for `DesktopDateTimePicker` and `MobileDateTimePicker`, `displayStaticWrapperAs === 'desktop'` for `StaticDateTimePicker`
   */
  hidden: import_prop_types23.default.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types23.default.oneOfType([import_prop_types23.default.arrayOf(import_prop_types23.default.oneOfType([import_prop_types23.default.func, import_prop_types23.default.object, import_prop_types23.default.bool])), import_prop_types23.default.func, import_prop_types23.default.object]),
  /**
   * Time tab icon.
   * @default Time
   */
  timeIcon: import_prop_types23.default.node
} : void 0;

// node_modules/.pnpm/@mui+x-date-pickers@8.26.0_@emotion+react@11.14.0_@types+react@19.2.7_react@19.2.3__@em_45e4fa7585d24d6c7a3cddedaa636f9d/node_modules/@mui/x-date-pickers/esm/DateTimePicker/DateTimePickerToolbar.js
var React93 = __toESM(require_react(), 1);
var import_prop_types24 = __toESM(require_prop_types(), 1);

// node_modules/.pnpm/@mui+x-date-pickers@8.26.0_@emotion+react@11.14.0_@types+react@19.2.7_react@19.2.3__@em_45e4fa7585d24d6c7a3cddedaa636f9d/node_modules/@mui/x-date-pickers/esm/internals/components/PickersToolbarText.js
var React91 = __toESM(require_react(), 1);

// node_modules/.pnpm/@mui+x-date-pickers@8.26.0_@emotion+react@11.14.0_@types+react@19.2.7_react@19.2.3__@em_45e4fa7585d24d6c7a3cddedaa636f9d/node_modules/@mui/x-date-pickers/esm/internals/components/pickersToolbarTextClasses.js
function getPickersToolbarTextUtilityClass(slot) {
  return generateUtilityClass("MuiPickersToolbarText", slot);
}
var pickersToolbarTextClasses = generateUtilityClasses("MuiPickersToolbarText", ["root"]);

// node_modules/.pnpm/@mui+x-date-pickers@8.26.0_@emotion+react@11.14.0_@types+react@19.2.7_react@19.2.3__@em_45e4fa7585d24d6c7a3cddedaa636f9d/node_modules/@mui/x-date-pickers/esm/internals/components/PickersToolbarText.js
var import_jsx_runtime62 = __toESM(require_jsx_runtime(), 1);
var _excluded40 = ["className", "classes", "selected", "value"];
var useUtilityClasses24 = (classes) => {
  const slots = {
    root: ["root"]
  };
  return composeClasses(slots, getPickersToolbarTextUtilityClass, classes);
};
var PickersToolbarTextRoot = styled_default(Typography_default, {
  name: "MuiPickersToolbarText",
  slot: "Root"
})(({
  theme
}) => ({
  transition: theme.transitions.create("color"),
  color: (theme.vars || theme).palette.text.secondary,
  [`&[data-selected]`]: {
    color: (theme.vars || theme).palette.text.primary
  }
}));
var PickersToolbarText = React91.forwardRef(function PickersToolbarText2(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiPickersToolbarText"
  });
  const {
    className,
    classes: classesProp,
    selected,
    value
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded40);
  const classes = useUtilityClasses24(classesProp);
  return (0, import_jsx_runtime62.jsx)(PickersToolbarTextRoot, _extends({
    ref,
    className: clsx_default(classes.root, className),
    component: "span",
    ownerState: props
  }, selected && {
    "data-selected": true
  }, other, {
    children: value
  }));
});
if (true) PickersToolbarText.displayName = "PickersToolbarText";

// node_modules/.pnpm/@mui+x-date-pickers@8.26.0_@emotion+react@11.14.0_@types+react@19.2.7_react@19.2.3__@em_45e4fa7585d24d6c7a3cddedaa636f9d/node_modules/@mui/x-date-pickers/esm/internals/components/PickersToolbarButton.js
var React92 = __toESM(require_react(), 1);
var import_jsx_runtime63 = __toESM(require_jsx_runtime(), 1);
var _excluded41 = ["align", "className", "classes", "selected", "typographyClassName", "value", "variant", "width"];
var useUtilityClasses25 = (classes) => {
  const slots = {
    root: ["root"]
  };
  return composeClasses(slots, getPickersToolbarUtilityClass, classes);
};
var PickersToolbarButtonRoot = styled_default(Button_default, {
  name: "MuiPickersToolbarButton",
  slot: "Root"
})({
  padding: 0,
  minWidth: 16,
  textTransform: "none"
});
var PickersToolbarButton = React92.forwardRef(function PickersToolbarButton2(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiPickersToolbarButton"
  });
  const {
    align,
    className,
    classes: classesProp,
    selected,
    typographyClassName,
    value,
    variant,
    width
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded41);
  const classes = useUtilityClasses25(classesProp);
  return (0, import_jsx_runtime63.jsx)(PickersToolbarButtonRoot, _extends({
    variant: "text",
    ref,
    className: clsx_default(classes.root, className),
    ownerState: props
  }, width ? {
    sx: {
      width
    }
  } : {}, other, {
    children: (0, import_jsx_runtime63.jsx)(PickersToolbarText, {
      align,
      className: typographyClassName,
      variant,
      value,
      selected
    })
  }));
});
if (true) PickersToolbarButton.displayName = "PickersToolbarButton";

// node_modules/.pnpm/@mui+x-date-pickers@8.26.0_@emotion+react@11.14.0_@types+react@19.2.7_react@19.2.3__@em_45e4fa7585d24d6c7a3cddedaa636f9d/node_modules/@mui/x-date-pickers/esm/DateTimePicker/dateTimePickerToolbarClasses.js
function getDateTimePickerToolbarUtilityClass(slot) {
  return generateUtilityClass("MuiDateTimePickerToolbar", slot);
}
var dateTimePickerToolbarClasses = generateUtilityClasses("MuiDateTimePickerToolbar", ["root", "dateContainer", "timeContainer", "timeDigitsContainer", "separator", "timeLabelReverse", "ampmSelection", "ampmLandscape", "ampmLabel"]);

// node_modules/.pnpm/@mui+x-date-pickers@8.26.0_@emotion+react@11.14.0_@types+react@19.2.7_react@19.2.3__@em_45e4fa7585d24d6c7a3cddedaa636f9d/node_modules/@mui/x-date-pickers/esm/DateTimePicker/DateTimePickerToolbar.js
var import_jsx_runtime64 = __toESM(require_jsx_runtime(), 1);
var _excluded43 = ["ampm", "ampmInClock", "toolbarFormat", "toolbarPlaceholder", "toolbarTitle", "className", "classes"];
var useUtilityClasses26 = (classes, ownerState) => {
  const {
    pickerOrientation,
    toolbarDirection
  } = ownerState;
  const slots = {
    root: ["root"],
    dateContainer: ["dateContainer"],
    timeContainer: ["timeContainer", toolbarDirection === "rtl" && "timeLabelReverse"],
    timeDigitsContainer: ["timeDigitsContainer", toolbarDirection === "rtl" && "timeLabelReverse"],
    separator: ["separator"],
    ampmSelection: ["ampmSelection", pickerOrientation === "landscape" && "ampmLandscape"],
    ampmLabel: ["ampmLabel"]
  };
  return composeClasses(slots, getDateTimePickerToolbarUtilityClass, classes);
};
var DateTimePickerToolbarRoot = styled_default(PickersToolbar, {
  name: "MuiDateTimePickerToolbar",
  slot: "Root",
  shouldForwardProp: (prop) => shouldForwardProp(prop) && prop !== "toolbarVariant"
})(({
  theme
}) => ({
  paddingLeft: 16,
  paddingRight: 16,
  justifyContent: "space-around",
  position: "relative",
  variants: [{
    props: {
      toolbarVariant: "desktop"
    },
    style: {
      borderBottom: `1px solid ${(theme.vars || theme).palette.divider}`,
      [`& .${pickersToolbarClasses.content} .${pickersToolbarTextClasses.root}[data-selected]`]: {
        color: (theme.vars || theme).palette.primary.main,
        fontWeight: theme.typography.fontWeightBold
      }
    }
  }, {
    props: {
      toolbarVariant: "desktop",
      pickerOrientation: "landscape"
    },
    style: {
      borderRight: `1px solid ${(theme.vars || theme).palette.divider}`
    }
  }, {
    props: {
      toolbarVariant: "desktop",
      pickerOrientation: "portrait"
    },
    style: {
      paddingLeft: 24,
      paddingRight: 0
    }
  }]
}));
var DateTimePickerToolbarDateContainer = styled_default("div", {
  name: "MuiDateTimePickerToolbar",
  slot: "DateContainer"
})({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start"
});
var DateTimePickerToolbarTimeContainer = styled_default("div", {
  name: "MuiDateTimePickerToolbar",
  slot: "TimeContainer",
  shouldForwardProp: (prop) => shouldForwardProp(prop) && prop !== "toolbarVariant"
})({
  display: "flex",
  flexDirection: "row",
  variants: [{
    props: {
      toolbarDirection: "rtl"
    },
    style: {
      flexDirection: "row-reverse"
    }
  }, {
    props: {
      toolbarVariant: "desktop",
      pickerOrientation: "portrait"
    },
    style: {
      gap: 9,
      marginRight: 4,
      alignSelf: "flex-end"
    }
  }, {
    props: ({
      pickerOrientation,
      toolbarVariant
    }) => pickerOrientation === "landscape" && toolbarVariant !== "desktop",
    style: {
      flexDirection: "column"
    }
  }, {
    props: ({
      pickerOrientation,
      toolbarVariant,
      toolbarDirection
    }) => pickerOrientation === "landscape" && toolbarVariant !== "desktop" && toolbarDirection === "rtl",
    style: {
      flexDirection: "column-reverse"
    }
  }]
});
var DateTimePickerToolbarTimeDigitsContainer = styled_default("div", {
  name: "MuiDateTimePickerToolbar",
  slot: "TimeDigitsContainer",
  shouldForwardProp: (prop) => shouldForwardProp(prop) && prop !== "toolbarVariant"
})({
  display: "flex",
  variants: [{
    props: {
      toolbarDirection: "rtl"
    },
    style: {
      flexDirection: "row-reverse"
    }
  }, {
    props: {
      toolbarVariant: "desktop"
    },
    style: {
      gap: 1.5
    }
  }]
});
var DateTimePickerToolbarSeparator = styled_default(PickersToolbarText, {
  name: "MuiDateTimePickerToolbar",
  slot: "Separator",
  shouldForwardProp: (prop) => shouldForwardProp(prop) && prop !== "toolbarVariant"
})({
  margin: "0 4px 0 2px",
  cursor: "default",
  variants: [{
    props: {
      toolbarVariant: "desktop"
    },
    style: {
      margin: 0
    }
  }]
});
var DateTimePickerToolbarAmPmSelection = styled_default("div", {
  name: "MuiDateTimePickerToolbar",
  slot: "AmPmSelection",
  overridesResolver: (props, styles) => [{
    [`.${dateTimePickerToolbarClasses.ampmLabel}`]: styles.ampmLabel
  }, {
    [`&.${dateTimePickerToolbarClasses.ampmLandscape}`]: styles.ampmLandscape
  }, styles.ampmSelection]
})({
  display: "flex",
  flexDirection: "column",
  marginRight: "auto",
  marginLeft: 12,
  [`& .${dateTimePickerToolbarClasses.ampmLabel}`]: {
    fontSize: 17
  },
  variants: [{
    props: {
      pickerOrientation: "landscape"
    },
    style: {
      margin: "4px 0 auto",
      flexDirection: "row",
      justifyContent: "space-around",
      width: "100%"
    }
  }]
});
var DateTimePickerToolbarOverrideContext = React93.createContext(null);
if (true) DateTimePickerToolbarOverrideContext.displayName = "DateTimePickerToolbarOverrideContext";
function DateTimePickerToolbar(inProps) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiDateTimePickerToolbar"
  });
  const {
    ampm,
    ampmInClock,
    toolbarFormat,
    toolbarPlaceholder = "––",
    toolbarTitle: inToolbarTitle,
    className,
    classes: classesProp
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded43);
  const {
    value: valueContext,
    setValue: setValueContext,
    disabled,
    readOnly,
    variant,
    orientation,
    view: viewContext,
    setView: setViewContext,
    views
  } = usePickerContext();
  const translations = usePickerTranslations();
  const ownerState = useToolbarOwnerState();
  const classes = useUtilityClasses26(classesProp, ownerState);
  const adapter = usePickerAdapter();
  const overrides = React93.useContext(DateTimePickerToolbarOverrideContext);
  const value = overrides ? overrides.value : valueContext;
  const setValue = overrides ? overrides.setValue : setValueContext;
  const view = overrides ? overrides.view : viewContext;
  const setView = overrides ? overrides.setView : setViewContext;
  const {
    meridiemMode,
    handleMeridiemChange
  } = useMeridiemMode(value, ampm, (newValue) => setValue(newValue, {
    changeImportance: "set",
    source: "view"
  }));
  const toolbarVariant = overrides?.forceDesktopVariant ? "desktop" : variant;
  const isDesktop = toolbarVariant === "desktop";
  const showAmPmControl = Boolean(ampm && !ampmInClock);
  const toolbarTitle = inToolbarTitle ?? translations.dateTimePickerToolbarTitle;
  const dateText = React93.useMemo(() => {
    if (!adapter.isValid(value)) {
      return toolbarPlaceholder;
    }
    if (toolbarFormat) {
      return adapter.formatByString(value, toolbarFormat);
    }
    return adapter.format(value, "shortDate");
  }, [value, toolbarFormat, toolbarPlaceholder, adapter]);
  const formatSection = (format, fallback) => {
    if (!adapter.isValid(value)) {
      return fallback;
    }
    return adapter.format(value, format);
  };
  return (0, import_jsx_runtime64.jsxs)(DateTimePickerToolbarRoot, _extends({
    className: clsx_default(classes.root, className),
    toolbarTitle,
    toolbarVariant
  }, other, {
    ownerState,
    children: [(0, import_jsx_runtime64.jsxs)(DateTimePickerToolbarDateContainer, {
      className: classes.dateContainer,
      ownerState,
      children: [views.includes("year") && (0, import_jsx_runtime64.jsx)(PickersToolbarButton, {
        tabIndex: -1,
        variant: "subtitle1",
        onClick: () => setView("year"),
        selected: view === "year",
        value: formatSection("year", "–")
      }), views.includes("day") && (0, import_jsx_runtime64.jsx)(PickersToolbarButton, {
        tabIndex: -1,
        variant: isDesktop ? "h5" : "h4",
        onClick: () => setView("day"),
        selected: view === "day",
        value: dateText
      })]
    }), (0, import_jsx_runtime64.jsxs)(DateTimePickerToolbarTimeContainer, {
      className: classes.timeContainer,
      ownerState,
      toolbarVariant,
      children: [(0, import_jsx_runtime64.jsxs)(DateTimePickerToolbarTimeDigitsContainer, {
        className: classes.timeDigitsContainer,
        ownerState,
        toolbarVariant,
        children: [views.includes("hours") && (0, import_jsx_runtime64.jsxs)(React93.Fragment, {
          children: [(0, import_jsx_runtime64.jsx)(PickersToolbarButton, {
            variant: isDesktop ? "h5" : "h3",
            width: isDesktop && orientation === "portrait" ? MULTI_SECTION_CLOCK_SECTION_WIDTH : void 0,
            onClick: () => setView("hours"),
            selected: view === "hours",
            value: formatSection(ampm ? "hours12h" : "hours24h", "--")
          }), (0, import_jsx_runtime64.jsx)(DateTimePickerToolbarSeparator, {
            variant: isDesktop ? "h5" : "h3",
            value: ":",
            className: classes.separator,
            ownerState,
            toolbarVariant
          }), (0, import_jsx_runtime64.jsx)(PickersToolbarButton, {
            variant: isDesktop ? "h5" : "h3",
            width: isDesktop && orientation === "portrait" ? MULTI_SECTION_CLOCK_SECTION_WIDTH : void 0,
            onClick: () => setView("minutes"),
            selected: view === "minutes" || !views.includes("minutes") && view === "hours",
            value: formatSection("minutes", "--"),
            disabled: !views.includes("minutes")
          })]
        }), views.includes("seconds") && (0, import_jsx_runtime64.jsxs)(React93.Fragment, {
          children: [(0, import_jsx_runtime64.jsx)(DateTimePickerToolbarSeparator, {
            variant: isDesktop ? "h5" : "h3",
            value: ":",
            className: classes.separator,
            ownerState,
            toolbarVariant
          }), (0, import_jsx_runtime64.jsx)(PickersToolbarButton, {
            variant: isDesktop ? "h5" : "h3",
            width: isDesktop && orientation === "portrait" ? MULTI_SECTION_CLOCK_SECTION_WIDTH : void 0,
            onClick: () => setView("seconds"),
            selected: view === "seconds",
            value: formatSection("seconds", "--")
          })]
        })]
      }), showAmPmControl && !isDesktop && (0, import_jsx_runtime64.jsxs)(DateTimePickerToolbarAmPmSelection, {
        className: classes.ampmSelection,
        ownerState,
        children: [(0, import_jsx_runtime64.jsx)(PickersToolbarButton, {
          variant: "subtitle2",
          selected: meridiemMode === "am",
          typographyClassName: classes.ampmLabel,
          value: formatMeridiem(adapter, "am"),
          onClick: readOnly ? void 0 : () => handleMeridiemChange("am"),
          disabled
        }), (0, import_jsx_runtime64.jsx)(PickersToolbarButton, {
          variant: "subtitle2",
          selected: meridiemMode === "pm",
          typographyClassName: classes.ampmLabel,
          value: formatMeridiem(adapter, "pm"),
          onClick: readOnly ? void 0 : () => handleMeridiemChange("pm"),
          disabled
        })]
      }), ampm && isDesktop && (0, import_jsx_runtime64.jsx)(PickersToolbarButton, {
        variant: "h5",
        onClick: () => setView("meridiem"),
        selected: view === "meridiem",
        value: value && meridiemMode ? formatMeridiem(adapter, meridiemMode) : "--",
        width: MULTI_SECTION_CLOCK_SECTION_WIDTH
      })]
    })]
  }));
}
true ? DateTimePickerToolbar.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  ampm: import_prop_types24.default.bool,
  ampmInClock: import_prop_types24.default.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: import_prop_types24.default.object,
  className: import_prop_types24.default.string,
  /**
   * If `true`, show the toolbar even in desktop mode.
   * @default `true` for Desktop, `false` for Mobile.
   */
  hidden: import_prop_types24.default.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types24.default.oneOfType([import_prop_types24.default.arrayOf(import_prop_types24.default.oneOfType([import_prop_types24.default.func, import_prop_types24.default.object, import_prop_types24.default.bool])), import_prop_types24.default.func, import_prop_types24.default.object]),
  titleId: import_prop_types24.default.string,
  /**
   * Toolbar date format.
   */
  toolbarFormat: import_prop_types24.default.string,
  /**
   * Toolbar value placeholder—it is displayed when the value is empty.
   * @default "––"
   */
  toolbarPlaceholder: import_prop_types24.default.node,
  /**
   * If provided, it will be used instead of `dateTimePickerToolbarTitle` from localization.
   */
  toolbarTitle: import_prop_types24.default.node
} : void 0;

// node_modules/.pnpm/@mui+x-date-pickers@8.26.0_@emotion+react@11.14.0_@types+react@19.2.7_react@19.2.3__@em_45e4fa7585d24d6c7a3cddedaa636f9d/node_modules/@mui/x-date-pickers/esm/internals/utils/date-time-utils.js
var _excluded44 = ["views", "format"];
var resolveDateTimeFormat = (adapter, _ref, ignoreDateResolving) => {
  let {
    views,
    format
  } = _ref, other = _objectWithoutPropertiesLoose(_ref, _excluded44);
  if (format) {
    return format;
  }
  const dateViews = [];
  const timeViews = [];
  views.forEach((view) => {
    if (isTimeView(view)) {
      timeViews.push(view);
    } else if (isDatePickerView(view)) {
      dateViews.push(view);
    }
  });
  if (timeViews.length === 0) {
    return resolveDateFormat(adapter, _extends({
      views: dateViews
    }, other), false);
  }
  if (dateViews.length === 0) {
    return resolveTimeFormat(adapter, _extends({
      views: timeViews
    }, other));
  }
  const timeFormat = resolveTimeFormat(adapter, _extends({
    views: timeViews
  }, other));
  const dateFormat = ignoreDateResolving ? adapter.formats.keyboardDate : resolveDateFormat(adapter, _extends({
    views: dateViews
  }, other), false);
  return `${dateFormat} ${timeFormat}`;
};
var resolveViews = (ampm, views, shouldUseSingleColumn) => {
  if (shouldUseSingleColumn) {
    return views.filter((view) => !isInternalTimeView(view) || view === "hours");
  }
  return ampm ? [...views, "meridiem"] : views;
};
var resolveShouldRenderTimeInASingleColumn = (timeSteps, threshold) => 24 * 60 / ((timeSteps.hours ?? 1) * (timeSteps.minutes ?? 5)) <= threshold;
function resolveTimeViewsResponse({
  thresholdToRenderTimeInASingleColumn: inThreshold,
  ampm,
  timeSteps: inTimeSteps,
  views
}) {
  const thresholdToRenderTimeInASingleColumn = inThreshold ?? 24;
  const timeSteps = _extends({
    hours: 1,
    minutes: 5,
    seconds: 5
  }, inTimeSteps);
  const shouldRenderTimeInASingleColumn = resolveShouldRenderTimeInASingleColumn(timeSteps, thresholdToRenderTimeInASingleColumn);
  return {
    thresholdToRenderTimeInASingleColumn,
    timeSteps,
    shouldRenderTimeInASingleColumn,
    views: resolveViews(ampm, views, shouldRenderTimeInASingleColumn)
  };
}

// node_modules/.pnpm/@mui+x-date-pickers@8.26.0_@emotion+react@11.14.0_@types+react@19.2.7_react@19.2.3__@em_45e4fa7585d24d6c7a3cddedaa636f9d/node_modules/@mui/x-date-pickers/esm/DateTimePicker/shared.js
function useDateTimePickerDefaultizedProps(props, name) {
  const adapter = usePickerAdapter();
  const themeProps = useThemeProps({
    props,
    name
  });
  const validationProps = useApplyDefaultValuesToDateTimeValidationProps(themeProps);
  const ampm = themeProps.ampm ?? adapter.is12HourCycleInCurrentLocale();
  const localeText = React94.useMemo(() => {
    if (themeProps.localeText?.toolbarTitle == null) {
      return themeProps.localeText;
    }
    return _extends({}, themeProps.localeText, {
      dateTimePickerToolbarTitle: themeProps.localeText.toolbarTitle
    });
  }, [themeProps.localeText]);
  const {
    openTo,
    views: defaultViews
  } = applyDefaultViewProps({
    views: themeProps.views,
    openTo: themeProps.openTo,
    defaultViews: ["year", "day", "hours", "minutes"],
    defaultOpenTo: "day"
  });
  const {
    shouldRenderTimeInASingleColumn,
    thresholdToRenderTimeInASingleColumn,
    views,
    timeSteps
  } = resolveTimeViewsResponse({
    thresholdToRenderTimeInASingleColumn: themeProps.thresholdToRenderTimeInASingleColumn,
    ampm,
    timeSteps: themeProps.timeSteps,
    views: defaultViews
  });
  const viewsForFormatting = ampm ? [...defaultViews, "meridiem"] : defaultViews;
  return _extends({}, themeProps, validationProps, {
    timeSteps,
    openTo,
    shouldRenderTimeInASingleColumn,
    thresholdToRenderTimeInASingleColumn,
    views,
    viewsForFormatting,
    ampm,
    localeText,
    orientation: themeProps.orientation ?? "portrait",
    slots: _extends({
      toolbar: DateTimePickerToolbar,
      tabs: DateTimePickerTabs
    }, themeProps.slots),
    slotProps: _extends({}, themeProps.slotProps, {
      toolbar: _extends({
        ampm
      }, themeProps.slotProps?.toolbar)
    })
  });
}

// node_modules/.pnpm/@mui+x-date-pickers@8.26.0_@emotion+react@11.14.0_@types+react@19.2.7_react@19.2.3__@em_45e4fa7585d24d6c7a3cddedaa636f9d/node_modules/@mui/x-date-pickers/esm/TimeClock/TimeClock.js
var React100 = __toESM(require_react(), 1);
var import_prop_types25 = __toESM(require_prop_types(), 1);

// node_modules/.pnpm/@mui+x-date-pickers@8.26.0_@emotion+react@11.14.0_@types+react@19.2.7_react@19.2.3__@em_45e4fa7585d24d6c7a3cddedaa636f9d/node_modules/@mui/x-date-pickers/esm/TimeClock/timeClockClasses.js
function getTimeClockUtilityClass(slot) {
  return generateUtilityClass("MuiTimeClock", slot);
}
var timeClockClasses = generateUtilityClasses("MuiTimeClock", ["root", "arrowSwitcher"]);

// node_modules/.pnpm/@mui+x-date-pickers@8.26.0_@emotion+react@11.14.0_@types+react@19.2.7_react@19.2.3__@em_45e4fa7585d24d6c7a3cddedaa636f9d/node_modules/@mui/x-date-pickers/esm/TimeClock/Clock.js
var React96 = __toESM(require_react(), 1);

// node_modules/.pnpm/@mui+x-date-pickers@8.26.0_@emotion+react@11.14.0_@types+react@19.2.7_react@19.2.3__@em_45e4fa7585d24d6c7a3cddedaa636f9d/node_modules/@mui/x-date-pickers/esm/TimeClock/ClockPointer.js
var React95 = __toESM(require_react(), 1);

// node_modules/.pnpm/@mui+x-date-pickers@8.26.0_@emotion+react@11.14.0_@types+react@19.2.7_react@19.2.3__@em_45e4fa7585d24d6c7a3cddedaa636f9d/node_modules/@mui/x-date-pickers/esm/TimeClock/shared.js
var CLOCK_WIDTH = 220;
var CLOCK_HOUR_WIDTH = 36;
var clockCenter = {
  x: CLOCK_WIDTH / 2,
  y: CLOCK_WIDTH / 2
};
var baseClockPoint = {
  x: clockCenter.x,
  y: 0
};
var cx = baseClockPoint.x - clockCenter.x;
var cy = baseClockPoint.y - clockCenter.y;
var rad2deg = (rad) => rad * (180 / Math.PI);
var getAngleValue = (step, offsetX, offsetY) => {
  const x = offsetX - clockCenter.x;
  const y = offsetY - clockCenter.y;
  const atan = Math.atan2(cx, cy) - Math.atan2(x, y);
  let deg = rad2deg(atan);
  deg = Math.round(deg / step) * step;
  deg %= 360;
  const value = Math.floor(deg / step) || 0;
  const delta = x ** 2 + y ** 2;
  const distance = Math.sqrt(delta);
  return {
    value,
    distance
  };
};
var getMinutes = (offsetX, offsetY, step = 1) => {
  const angleStep = step * 6;
  let {
    value
  } = getAngleValue(angleStep, offsetX, offsetY);
  value = value * step % 60;
  return value;
};
var getHours = (offsetX, offsetY, ampm) => {
  const {
    value,
    distance
  } = getAngleValue(30, offsetX, offsetY);
  let hour = value || 12;
  if (!ampm) {
    if (distance < CLOCK_WIDTH / 2 - CLOCK_HOUR_WIDTH) {
      hour += 12;
      hour %= 24;
    }
  } else {
    hour %= 12;
  }
  return hour;
};

// node_modules/.pnpm/@mui+x-date-pickers@8.26.0_@emotion+react@11.14.0_@types+react@19.2.7_react@19.2.3__@em_45e4fa7585d24d6c7a3cddedaa636f9d/node_modules/@mui/x-date-pickers/esm/TimeClock/clockPointerClasses.js
function getClockPointerUtilityClass(slot) {
  return generateUtilityClass("MuiClockPointer", slot);
}
var clockPointerClasses = generateUtilityClasses("MuiClockPointer", ["root", "thumb"]);

// node_modules/.pnpm/@mui+x-date-pickers@8.26.0_@emotion+react@11.14.0_@types+react@19.2.7_react@19.2.3__@em_45e4fa7585d24d6c7a3cddedaa636f9d/node_modules/@mui/x-date-pickers/esm/TimeClock/ClockPointer.js
var import_jsx_runtime65 = __toESM(require_jsx_runtime(), 1);
var _excluded45 = ["className", "classes", "isBetweenTwoClockValues", "isInner", "type", "viewValue"];
var useUtilityClasses27 = (classes) => {
  const slots = {
    root: ["root"],
    thumb: ["thumb"]
  };
  return composeClasses(slots, getClockPointerUtilityClass, classes);
};
var ClockPointerRoot = styled_default("div", {
  name: "MuiClockPointer",
  slot: "Root"
})(({
  theme
}) => ({
  width: 2,
  backgroundColor: (theme.vars || theme).palette.primary.main,
  position: "absolute",
  left: "calc(50% - 1px)",
  bottom: "50%",
  transformOrigin: "center bottom 0px",
  variants: [{
    props: {
      isClockPointerAnimated: true
    },
    style: {
      transition: theme.transitions.create(["transform", "height"])
    }
  }]
}));
var ClockPointerThumb = styled_default("div", {
  name: "MuiClockPointer",
  slot: "Thumb"
})(({
  theme
}) => ({
  width: 4,
  height: 4,
  backgroundColor: (theme.vars || theme).palette.primary.contrastText,
  borderRadius: "50%",
  position: "absolute",
  top: -21,
  left: `calc(50% - ${CLOCK_HOUR_WIDTH / 2}px)`,
  border: `${(CLOCK_HOUR_WIDTH - 4) / 2}px solid ${(theme.vars || theme).palette.primary.main}`,
  boxSizing: "content-box",
  variants: [{
    props: {
      isClockPointerBetweenTwoValues: false
    },
    style: {
      backgroundColor: (theme.vars || theme).palette.primary.main
    }
  }]
}));
function ClockPointer(inProps) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiClockPointer"
  });
  const {
    className,
    classes: classesProp,
    isBetweenTwoClockValues,
    isInner,
    type,
    viewValue
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded45);
  const previousType = React95.useRef(type);
  React95.useEffect(() => {
    previousType.current = type;
  }, [type]);
  const {
    ownerState: pickerOwnerState
  } = usePickerPrivateContext();
  const ownerState = _extends({}, pickerOwnerState, {
    isClockPointerAnimated: previousType.current !== type,
    isClockPointerBetweenTwoValues: isBetweenTwoClockValues
  });
  const classes = useUtilityClasses27(classesProp);
  const getAngleStyle = () => {
    const max = type === "hours" ? 12 : 60;
    let angle = 360 / max * viewValue;
    if (type === "hours" && viewValue > 12) {
      angle -= 360;
    }
    return {
      height: Math.round((isInner ? 0.26 : 0.4) * CLOCK_WIDTH),
      transform: `rotateZ(${angle}deg)`
    };
  };
  return (0, import_jsx_runtime65.jsx)(ClockPointerRoot, _extends({
    style: getAngleStyle(),
    className: clsx_default(classes.root, className),
    ownerState
  }, other, {
    children: (0, import_jsx_runtime65.jsx)(ClockPointerThumb, {
      ownerState,
      className: classes.thumb
    })
  }));
}

// node_modules/.pnpm/@mui+x-date-pickers@8.26.0_@emotion+react@11.14.0_@types+react@19.2.7_react@19.2.3__@em_45e4fa7585d24d6c7a3cddedaa636f9d/node_modules/@mui/x-date-pickers/esm/TimeClock/clockClasses.js
function getClockUtilityClass(slot) {
  return generateUtilityClass("MuiClock", slot);
}
var clockClasses = generateUtilityClasses("MuiClock", ["root", "clock", "wrapper", "squareMask", "pin", "amButton", "pmButton", "meridiemText", "selected"]);

// node_modules/.pnpm/@mui+x-date-pickers@8.26.0_@emotion+react@11.14.0_@types+react@19.2.7_react@19.2.3__@em_45e4fa7585d24d6c7a3cddedaa636f9d/node_modules/@mui/x-date-pickers/esm/TimeClock/Clock.js
var import_jsx_runtime66 = __toESM(require_jsx_runtime(), 1);
var useUtilityClasses28 = (classes, ownerState) => {
  const slots = {
    root: ["root"],
    clock: ["clock"],
    wrapper: ["wrapper"],
    squareMask: ["squareMask"],
    pin: ["pin"],
    amButton: ["amButton", ownerState.clockMeridiemMode === "am" && "selected"],
    pmButton: ["pmButton", ownerState.clockMeridiemMode === "pm" && "selected"],
    meridiemText: ["meridiemText"]
  };
  return composeClasses(slots, getClockUtilityClass, classes);
};
var ClockRoot = styled_default("div", {
  name: "MuiClock",
  slot: "Root"
})(({
  theme
}) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  margin: theme.spacing(2)
}));
var ClockClock = styled_default("div", {
  name: "MuiClock",
  slot: "Clock"
})({
  backgroundColor: "rgba(0,0,0,.07)",
  borderRadius: "50%",
  height: 220,
  width: 220,
  flexShrink: 0,
  position: "relative",
  pointerEvents: "none"
});
var ClockWrapper = styled_default("div", {
  name: "MuiClock",
  slot: "Wrapper"
})({
  "&:focus": {
    outline: "none"
  }
});
var ClockSquareMask = styled_default("div", {
  name: "MuiClock",
  slot: "SquareMask"
})({
  width: "100%",
  height: "100%",
  position: "absolute",
  pointerEvents: "auto",
  outline: 0,
  // Disable scroll capabilities.
  touchAction: "none",
  userSelect: "none",
  variants: [{
    props: {
      isClockDisabled: false
    },
    style: {
      "@media (pointer: fine)": {
        cursor: "pointer",
        borderRadius: "50%"
      },
      "&:active": {
        cursor: "move"
      }
    }
  }]
});
var ClockPin = styled_default("div", {
  name: "MuiClock",
  slot: "Pin"
})(({
  theme
}) => ({
  width: 6,
  height: 6,
  borderRadius: "50%",
  backgroundColor: (theme.vars || theme).palette.primary.main,
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)"
}));
var meridiemButtonCommonStyles = (theme, clockMeridiemMode) => ({
  zIndex: 1,
  bottom: 8,
  paddingLeft: 4,
  paddingRight: 4,
  width: CLOCK_HOUR_WIDTH,
  variants: [{
    props: {
      clockMeridiemMode
    },
    style: {
      backgroundColor: (theme.vars || theme).palette.primary.main,
      color: (theme.vars || theme).palette.primary.contrastText,
      "&:hover": {
        backgroundColor: (theme.vars || theme).palette.primary.light
      }
    }
  }]
});
var ClockAmButton = styled_default(IconButton_default, {
  name: "MuiClock",
  slot: "AmButton"
})(({
  theme
}) => _extends({}, meridiemButtonCommonStyles(theme, "am"), {
  // keeping it here to make TS happy
  position: "absolute",
  left: 8
}));
var ClockPmButton = styled_default(IconButton_default, {
  name: "MuiClock",
  slot: "PmButton"
})(({
  theme
}) => _extends({}, meridiemButtonCommonStyles(theme, "pm"), {
  // keeping it here to make TS happy
  position: "absolute",
  right: 8
}));
var ClockMeridiemText = styled_default(Typography_default, {
  name: "MuiClock",
  slot: "MeridiemText"
})({
  overflow: "hidden",
  whiteSpace: "nowrap",
  textOverflow: "ellipsis"
});
function Clock(inProps) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiClock"
  });
  const {
    ampm,
    ampmInClock,
    autoFocus,
    children,
    value,
    handleMeridiemChange,
    isTimeDisabled,
    meridiemMode,
    minutesStep = 1,
    onChange,
    selectedId,
    type,
    viewValue,
    viewRange: [minViewValue, maxViewValue],
    disabled = false,
    readOnly,
    className,
    classes: classesProp
  } = props;
  const adapter = usePickerAdapter();
  const translations = usePickerTranslations();
  const {
    ownerState: pickerOwnerState
  } = usePickerPrivateContext();
  const ownerState = _extends({}, pickerOwnerState, {
    isClockDisabled: disabled,
    clockMeridiemMode: meridiemMode
  });
  const isMoving = React96.useRef(false);
  const classes = useUtilityClasses28(classesProp, ownerState);
  const isSelectedTimeDisabled = isTimeDisabled(viewValue, type);
  const isPointerInner = !ampm && type === "hours" && (viewValue < 1 || viewValue > 12);
  const handleValueChange = (newValue, isFinish) => {
    if (disabled || readOnly) {
      return;
    }
    if (isTimeDisabled(newValue, type)) {
      return;
    }
    onChange(newValue, isFinish);
  };
  const setTime = (event, isFinish) => {
    let {
      offsetX,
      offsetY
    } = event;
    if (offsetX === void 0) {
      const rect = event.target.getBoundingClientRect();
      offsetX = event.changedTouches[0].clientX - rect.left;
      offsetY = event.changedTouches[0].clientY - rect.top;
    }
    const newSelectedValue = type === "seconds" || type === "minutes" ? getMinutes(offsetX, offsetY, minutesStep) : getHours(offsetX, offsetY, Boolean(ampm));
    handleValueChange(newSelectedValue, isFinish);
  };
  const handleTouchSelection = (event) => {
    isMoving.current = true;
    setTime(event, "shallow");
  };
  const handleTouchEnd = (event) => {
    if (isMoving.current) {
      setTime(event, "finish");
      isMoving.current = false;
    }
    event.preventDefault();
  };
  const handleMouseMove = (event) => {
    if (event.buttons > 0) {
      setTime(event.nativeEvent, "shallow");
    }
  };
  const handleMouseUp = (event) => {
    if (isMoving.current) {
      isMoving.current = false;
    }
    setTime(event.nativeEvent, "finish");
  };
  const isPointerBetweenTwoClockValues = type === "hours" ? false : viewValue % 5 !== 0;
  const keyboardControlStep = type === "minutes" ? minutesStep : 1;
  const listboxRef = React96.useRef(null);
  useEnhancedEffect_default(() => {
    if (autoFocus) {
      listboxRef.current.focus();
    }
  }, [autoFocus]);
  const clampValue = (newValue) => Math.max(minViewValue, Math.min(maxViewValue, newValue));
  const circleValue = (newValue) => (newValue + (maxViewValue + 1)) % (maxViewValue + 1);
  const handleKeyDown = (event) => {
    if (isMoving.current) {
      return;
    }
    switch (event.key) {
      case "Home":
        handleValueChange(minViewValue, "partial");
        event.preventDefault();
        break;
      case "End":
        handleValueChange(maxViewValue, "partial");
        event.preventDefault();
        break;
      case "ArrowUp":
        handleValueChange(circleValue(viewValue + keyboardControlStep), "partial");
        event.preventDefault();
        break;
      case "ArrowDown":
        handleValueChange(circleValue(viewValue - keyboardControlStep), "partial");
        event.preventDefault();
        break;
      case "PageUp":
        handleValueChange(clampValue(viewValue + 5), "partial");
        event.preventDefault();
        break;
      case "PageDown":
        handleValueChange(clampValue(viewValue - 5), "partial");
        event.preventDefault();
        break;
      case "Enter":
      case " ":
        handleValueChange(viewValue, "finish");
        event.preventDefault();
        break;
      default:
    }
  };
  return (0, import_jsx_runtime66.jsxs)(ClockRoot, {
    className: clsx_default(classes.root, className),
    children: [(0, import_jsx_runtime66.jsxs)(ClockClock, {
      className: classes.clock,
      children: [(0, import_jsx_runtime66.jsx)(ClockSquareMask, {
        onTouchMove: handleTouchSelection,
        onTouchStart: handleTouchSelection,
        onTouchEnd: handleTouchEnd,
        onMouseUp: handleMouseUp,
        onMouseMove: handleMouseMove,
        ownerState,
        className: classes.squareMask
      }), !isSelectedTimeDisabled && (0, import_jsx_runtime66.jsxs)(React96.Fragment, {
        children: [(0, import_jsx_runtime66.jsx)(ClockPin, {
          className: classes.pin
        }), value != null && (0, import_jsx_runtime66.jsx)(ClockPointer, {
          type,
          viewValue,
          isInner: isPointerInner,
          isBetweenTwoClockValues: isPointerBetweenTwoClockValues
        })]
      }), (0, import_jsx_runtime66.jsx)(ClockWrapper, {
        "aria-activedescendant": selectedId,
        "aria-label": translations.clockLabelText(type, value == null ? null : adapter.format(value, ampm ? "fullTime12h" : "fullTime24h")),
        ref: listboxRef,
        role: "listbox",
        onKeyDown: handleKeyDown,
        tabIndex: 0,
        className: classes.wrapper,
        children
      })]
    }), ampm && ampmInClock && (0, import_jsx_runtime66.jsxs)(React96.Fragment, {
      children: [(0, import_jsx_runtime66.jsx)(ClockAmButton, {
        onClick: readOnly ? void 0 : () => handleMeridiemChange("am"),
        disabled: disabled || meridiemMode === null,
        ownerState,
        className: classes.amButton,
        title: formatMeridiem(adapter, "am"),
        children: (0, import_jsx_runtime66.jsx)(ClockMeridiemText, {
          variant: "caption",
          className: classes.meridiemText,
          children: formatMeridiem(adapter, "am")
        })
      }), (0, import_jsx_runtime66.jsx)(ClockPmButton, {
        disabled: disabled || meridiemMode === null,
        onClick: readOnly ? void 0 : () => handleMeridiemChange("pm"),
        ownerState,
        className: classes.pmButton,
        title: formatMeridiem(adapter, "pm"),
        children: (0, import_jsx_runtime66.jsx)(ClockMeridiemText, {
          variant: "caption",
          className: classes.meridiemText,
          children: formatMeridiem(adapter, "pm")
        })
      })]
    })]
  });
}

// node_modules/.pnpm/@mui+x-date-pickers@8.26.0_@emotion+react@11.14.0_@types+react@19.2.7_react@19.2.3__@em_45e4fa7585d24d6c7a3cddedaa636f9d/node_modules/@mui/x-date-pickers/esm/TimeClock/ClockNumbers.js
var React98 = __toESM(require_react(), 1);

// node_modules/.pnpm/@mui+x-date-pickers@8.26.0_@emotion+react@11.14.0_@types+react@19.2.7_react@19.2.3__@em_45e4fa7585d24d6c7a3cddedaa636f9d/node_modules/@mui/x-date-pickers/esm/TimeClock/ClockNumber.js
var React97 = __toESM(require_react(), 1);

// node_modules/.pnpm/@mui+x-date-pickers@8.26.0_@emotion+react@11.14.0_@types+react@19.2.7_react@19.2.3__@em_45e4fa7585d24d6c7a3cddedaa636f9d/node_modules/@mui/x-date-pickers/esm/TimeClock/clockNumberClasses.js
function getClockNumberUtilityClass(slot) {
  return generateUtilityClass("MuiClockNumber", slot);
}
var clockNumberClasses = generateUtilityClasses("MuiClockNumber", ["root", "selected", "disabled"]);

// node_modules/.pnpm/@mui+x-date-pickers@8.26.0_@emotion+react@11.14.0_@types+react@19.2.7_react@19.2.3__@em_45e4fa7585d24d6c7a3cddedaa636f9d/node_modules/@mui/x-date-pickers/esm/TimeClock/ClockNumber.js
var import_jsx_runtime67 = __toESM(require_jsx_runtime(), 1);
var _excluded46 = ["className", "classes", "disabled", "index", "inner", "label", "selected"];
var useUtilityClasses29 = (classes, ownerState) => {
  const slots = {
    root: ["root", ownerState.isClockNumberSelected && "selected", ownerState.isClockNumberDisabled && "disabled"]
  };
  return composeClasses(slots, getClockNumberUtilityClass, classes);
};
var ClockNumberRoot = styled_default("span", {
  name: "MuiClockNumber",
  slot: "Root",
  overridesResolver: (_, styles) => [styles.root, {
    [`&.${clockNumberClasses.disabled}`]: styles.disabled
  }, {
    [`&.${clockNumberClasses.selected}`]: styles.selected
  }]
})(({
  theme
}) => ({
  height: CLOCK_HOUR_WIDTH,
  width: CLOCK_HOUR_WIDTH,
  position: "absolute",
  left: `calc((100% - ${CLOCK_HOUR_WIDTH}px) / 2)`,
  display: "inline-flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "50%",
  color: (theme.vars || theme).palette.text.primary,
  fontFamily: theme.typography.fontFamily,
  "&:focused": {
    backgroundColor: (theme.vars || theme).palette.background.paper
  },
  [`&.${clockNumberClasses.selected}`]: {
    color: (theme.vars || theme).palette.primary.contrastText
  },
  [`&.${clockNumberClasses.disabled}`]: {
    pointerEvents: "none",
    color: (theme.vars || theme).palette.text.disabled
  },
  variants: [{
    props: {
      isClockNumberInInnerRing: true
    },
    style: _extends({}, theme.typography.body2, {
      color: (theme.vars || theme).palette.text.secondary
    })
  }]
}));
function ClockNumber(inProps) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiClockNumber"
  });
  const {
    className,
    classes: classesProp,
    disabled,
    index,
    inner,
    label,
    selected
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded46);
  const {
    ownerState: pickerOwnerState
  } = usePickerPrivateContext();
  const ownerState = _extends({}, pickerOwnerState, {
    isClockNumberInInnerRing: inner,
    isClockNumberSelected: selected,
    isClockNumberDisabled: disabled
  });
  const classes = useUtilityClasses29(classesProp, ownerState);
  const angle = index % 12 / 12 * Math.PI * 2 - Math.PI / 2;
  const length = (CLOCK_WIDTH - CLOCK_HOUR_WIDTH - 2) / 2 * (inner ? 0.65 : 1);
  const x = Math.round(Math.cos(angle) * length);
  const y = Math.round(Math.sin(angle) * length);
  return (0, import_jsx_runtime67.jsx)(ClockNumberRoot, _extends({
    className: clsx_default(classes.root, className),
    "aria-disabled": disabled ? true : void 0,
    "aria-selected": selected ? true : void 0,
    role: "option",
    style: {
      transform: `translate(${x}px, ${y + (CLOCK_WIDTH - CLOCK_HOUR_WIDTH) / 2}px`
    },
    ownerState
  }, other, {
    children: label
  }));
}

// node_modules/.pnpm/@mui+x-date-pickers@8.26.0_@emotion+react@11.14.0_@types+react@19.2.7_react@19.2.3__@em_45e4fa7585d24d6c7a3cddedaa636f9d/node_modules/@mui/x-date-pickers/esm/TimeClock/ClockNumbers.js
var import_jsx_runtime68 = __toESM(require_jsx_runtime(), 1);
var getHourNumbers = ({
  ampm,
  value,
  getClockNumberText,
  isDisabled,
  selectedId,
  adapter
}) => {
  const currentHours = value ? adapter.getHours(value) : null;
  const hourNumbers = [];
  const startHour = ampm ? 1 : 0;
  const endHour = ampm ? 12 : 23;
  const isSelected = (hour) => {
    if (currentHours === null) {
      return false;
    }
    if (ampm) {
      if (hour === 12) {
        return currentHours === 12 || currentHours === 0;
      }
      return currentHours === hour || currentHours - 12 === hour;
    }
    return currentHours === hour;
  };
  for (let hour = startHour; hour <= endHour; hour += 1) {
    let label = hour.toString();
    if (hour === 0) {
      label = "00";
    }
    const inner = !ampm && (hour === 0 || hour > 12);
    label = adapter.formatNumber(label);
    const selected = isSelected(hour);
    hourNumbers.push((0, import_jsx_runtime68.jsx)(ClockNumber, {
      id: selected ? selectedId : void 0,
      index: hour,
      inner,
      selected,
      disabled: isDisabled(hour),
      label,
      "aria-label": getClockNumberText(label)
    }, hour));
  }
  return hourNumbers;
};
var getMinutesNumbers = ({
  adapter,
  value,
  isDisabled,
  getClockNumberText,
  selectedId
}) => {
  const f = adapter.formatNumber;
  return [[5, f("05")], [10, f("10")], [15, f("15")], [20, f("20")], [25, f("25")], [30, f("30")], [35, f("35")], [40, f("40")], [45, f("45")], [50, f("50")], [55, f("55")], [0, f("00")]].map(([numberValue, label], index) => {
    const selected = numberValue === value;
    return (0, import_jsx_runtime68.jsx)(ClockNumber, {
      label,
      id: selected ? selectedId : void 0,
      index: index + 1,
      inner: false,
      disabled: isDisabled(numberValue),
      selected,
      "aria-label": getClockNumberText(label)
    }, numberValue);
  });
};

// node_modules/.pnpm/@mui+x-date-pickers@8.26.0_@emotion+react@11.14.0_@types+react@19.2.7_react@19.2.3__@em_45e4fa7585d24d6c7a3cddedaa636f9d/node_modules/@mui/x-date-pickers/esm/internals/hooks/useClockReferenceDate.js
var React99 = __toESM(require_react(), 1);
var useClockReferenceDate = ({
  value,
  referenceDate: referenceDateProp,
  adapter,
  props,
  timezone
}) => {
  const referenceDate = React99.useMemo(
    () => singleItemValueManager.getInitialReferenceValue({
      value,
      adapter,
      props,
      referenceDate: referenceDateProp,
      granularity: SECTION_TYPE_GRANULARITY.day,
      timezone,
      getTodayDate: () => getTodayDate(adapter, timezone, "date")
    }),
    // We want the `referenceDate` to update on prop and `timezone` change (https://github.com/mui/mui-x/issues/10804)
    [referenceDateProp, timezone]
    // eslint-disable-line react-hooks/exhaustive-deps
  );
  return value ?? referenceDate;
};

// node_modules/.pnpm/@mui+x-date-pickers@8.26.0_@emotion+react@11.14.0_@types+react@19.2.7_react@19.2.3__@em_45e4fa7585d24d6c7a3cddedaa636f9d/node_modules/@mui/x-date-pickers/esm/TimeClock/TimeClock.js
var import_jsx_runtime69 = __toESM(require_jsx_runtime(), 1);
var _excluded47 = ["ampm", "ampmInClock", "autoFocus", "slots", "slotProps", "value", "defaultValue", "referenceDate", "disableIgnoringDatePartForTimeValidation", "maxTime", "minTime", "disableFuture", "disablePast", "minutesStep", "shouldDisableTime", "showViewSwitcher", "onChange", "view", "views", "openTo", "onViewChange", "focusedView", "onFocusedViewChange", "className", "classes", "disabled", "readOnly", "timezone"];
var useUtilityClasses30 = (classes) => {
  const slots = {
    root: ["root"],
    arrowSwitcher: ["arrowSwitcher"]
  };
  return composeClasses(slots, getTimeClockUtilityClass, classes);
};
var TimeClockRoot = styled_default(PickerViewRoot, {
  name: "MuiTimeClock",
  slot: "Root"
})({
  display: "flex",
  flexDirection: "column",
  position: "relative"
});
var TimeClockArrowSwitcher = styled_default(PickersArrowSwitcher, {
  name: "MuiTimeClock",
  slot: "ArrowSwitcher"
})({
  position: "absolute",
  right: 12,
  top: 15
});
var TIME_CLOCK_DEFAULT_VIEWS = ["hours", "minutes"];
var TimeClock = React100.forwardRef(function TimeClock2(inProps, ref) {
  const adapter = usePickerAdapter();
  const props = useThemeProps({
    props: inProps,
    name: "MuiTimeClock"
  });
  const {
    ampm = adapter.is12HourCycleInCurrentLocale(),
    ampmInClock = false,
    autoFocus,
    slots,
    slotProps,
    value: valueProp,
    defaultValue,
    referenceDate: referenceDateProp,
    disableIgnoringDatePartForTimeValidation = false,
    maxTime,
    minTime,
    disableFuture,
    disablePast,
    minutesStep = 1,
    shouldDisableTime,
    showViewSwitcher,
    onChange,
    view: inView,
    views = TIME_CLOCK_DEFAULT_VIEWS,
    openTo,
    onViewChange,
    focusedView,
    onFocusedViewChange,
    className,
    classes: classesProp,
    disabled,
    readOnly,
    timezone: timezoneProp
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded47);
  const {
    value,
    handleValueChange,
    timezone
  } = useControlledValue({
    name: "TimeClock",
    timezone: timezoneProp,
    value: valueProp,
    defaultValue,
    referenceDate: referenceDateProp,
    onChange,
    valueManager: singleItemValueManager
  });
  const valueOrReferenceDate = useClockReferenceDate({
    value,
    referenceDate: referenceDateProp,
    adapter,
    props,
    timezone
  });
  const translations = usePickerTranslations();
  const now = useNow(timezone);
  const selectedId = useId();
  const {
    ownerState
  } = usePickerPrivateContext();
  const {
    view,
    setView,
    previousView,
    nextView,
    setValueAndGoToNextView
  } = useViews({
    view: inView,
    views,
    openTo,
    onViewChange,
    onChange: handleValueChange,
    focusedView,
    onFocusedViewChange
  });
  const {
    meridiemMode,
    handleMeridiemChange
  } = useMeridiemMode(valueOrReferenceDate, ampm, setValueAndGoToNextView);
  const isTimeDisabled = React100.useCallback((rawValue, viewType) => {
    const isAfter = createIsAfterIgnoreDatePart(disableIgnoringDatePartForTimeValidation, adapter);
    const shouldCheckPastEnd = viewType === "hours" || viewType === "minutes" && views.includes("seconds");
    const containsValidTime = ({
      start,
      end
    }) => {
      if (minTime && isAfter(minTime, end)) {
        return false;
      }
      if (maxTime && isAfter(start, maxTime)) {
        return false;
      }
      if (disableFuture && isAfter(start, now)) {
        return false;
      }
      if (disablePast && isAfter(now, shouldCheckPastEnd ? end : start)) {
        return false;
      }
      return true;
    };
    const isValidValue = (timeValue, step = 1) => {
      if (timeValue % step !== 0) {
        return false;
      }
      if (shouldDisableTime) {
        switch (viewType) {
          case "hours":
            return !shouldDisableTime(adapter.setHours(valueOrReferenceDate, timeValue), "hours");
          case "minutes":
            return !shouldDisableTime(adapter.setMinutes(valueOrReferenceDate, timeValue), "minutes");
          case "seconds":
            return !shouldDisableTime(adapter.setSeconds(valueOrReferenceDate, timeValue), "seconds");
          default:
            return false;
        }
      }
      return true;
    };
    switch (viewType) {
      case "hours": {
        const valueWithMeridiem = convertValueToMeridiem(rawValue, meridiemMode, ampm);
        const dateWithNewHours = adapter.setHours(valueOrReferenceDate, valueWithMeridiem);
        if (adapter.getHours(dateWithNewHours) !== valueWithMeridiem) {
          return true;
        }
        const start = adapter.setSeconds(adapter.setMinutes(dateWithNewHours, 0), 0);
        const end = adapter.setSeconds(adapter.setMinutes(dateWithNewHours, 59), 59);
        return !containsValidTime({
          start,
          end
        }) || !isValidValue(valueWithMeridiem);
      }
      case "minutes": {
        const dateWithNewMinutes = adapter.setMinutes(valueOrReferenceDate, rawValue);
        const start = adapter.setSeconds(dateWithNewMinutes, 0);
        const end = adapter.setSeconds(dateWithNewMinutes, 59);
        return !containsValidTime({
          start,
          end
        }) || !isValidValue(rawValue, minutesStep);
      }
      case "seconds": {
        const dateWithNewSeconds = adapter.setSeconds(valueOrReferenceDate, rawValue);
        const start = dateWithNewSeconds;
        const end = dateWithNewSeconds;
        return !containsValidTime({
          start,
          end
        }) || !isValidValue(rawValue);
      }
      default:
        throw new Error("not supported");
    }
  }, [ampm, valueOrReferenceDate, disableIgnoringDatePartForTimeValidation, maxTime, meridiemMode, minTime, minutesStep, shouldDisableTime, adapter, disableFuture, disablePast, now, views]);
  const viewProps = React100.useMemo(() => {
    switch (view) {
      case "hours": {
        const handleHoursChange = (hourValue, isFinish) => {
          const valueWithMeridiem = convertValueToMeridiem(hourValue, meridiemMode, ampm);
          setValueAndGoToNextView(adapter.setHours(valueOrReferenceDate, valueWithMeridiem), isFinish, "hours");
        };
        const viewValue = adapter.getHours(valueOrReferenceDate);
        let viewRange;
        if (ampm) {
          if (viewValue > 12) {
            viewRange = [12, 23];
          } else {
            viewRange = [0, 11];
          }
        } else {
          viewRange = [0, 23];
        }
        return {
          onChange: handleHoursChange,
          viewValue,
          children: getHourNumbers({
            value,
            adapter,
            ampm,
            onChange: handleHoursChange,
            getClockNumberText: translations.hoursClockNumberText,
            isDisabled: (hourValue) => disabled || isTimeDisabled(hourValue, "hours"),
            selectedId
          }),
          viewRange
        };
      }
      case "minutes": {
        const minutesValue = adapter.getMinutes(valueOrReferenceDate);
        const handleMinutesChange = (minuteValue, isFinish) => {
          setValueAndGoToNextView(adapter.setMinutes(valueOrReferenceDate, minuteValue), isFinish, "minutes");
        };
        return {
          viewValue: minutesValue,
          onChange: handleMinutesChange,
          children: getMinutesNumbers({
            adapter,
            value: minutesValue,
            onChange: handleMinutesChange,
            getClockNumberText: translations.minutesClockNumberText,
            isDisabled: (minuteValue) => disabled || isTimeDisabled(minuteValue, "minutes"),
            selectedId
          }),
          viewRange: [0, 59]
        };
      }
      case "seconds": {
        const secondsValue = adapter.getSeconds(valueOrReferenceDate);
        const handleSecondsChange = (secondValue, isFinish) => {
          setValueAndGoToNextView(adapter.setSeconds(valueOrReferenceDate, secondValue), isFinish, "seconds");
        };
        return {
          viewValue: secondsValue,
          onChange: handleSecondsChange,
          children: getMinutesNumbers({
            adapter,
            value: secondsValue,
            onChange: handleSecondsChange,
            getClockNumberText: translations.secondsClockNumberText,
            isDisabled: (secondValue) => disabled || isTimeDisabled(secondValue, "seconds"),
            selectedId
          }),
          viewRange: [0, 59]
        };
      }
      default:
        throw new Error("You must provide the type for ClockView");
    }
  }, [view, adapter, value, ampm, translations.hoursClockNumberText, translations.minutesClockNumberText, translations.secondsClockNumberText, meridiemMode, setValueAndGoToNextView, valueOrReferenceDate, isTimeDisabled, selectedId, disabled]);
  const classes = useUtilityClasses30(classesProp);
  return (0, import_jsx_runtime69.jsxs)(TimeClockRoot, _extends({
    ref,
    className: clsx_default(classes.root, className),
    ownerState
  }, other, {
    children: [(0, import_jsx_runtime69.jsx)(Clock, _extends({
      autoFocus: autoFocus ?? !!focusedView,
      ampmInClock: ampmInClock && views.includes("hours"),
      value,
      type: view,
      ampm,
      minutesStep,
      isTimeDisabled,
      meridiemMode,
      handleMeridiemChange,
      selectedId,
      disabled,
      readOnly
    }, viewProps)), showViewSwitcher && (0, import_jsx_runtime69.jsx)(TimeClockArrowSwitcher, {
      className: classes.arrowSwitcher,
      slots,
      slotProps,
      onGoToPrevious: () => setView(previousView),
      isPreviousDisabled: !previousView,
      previousLabel: translations.openPreviousView,
      onGoToNext: () => setView(nextView),
      isNextDisabled: !nextView,
      nextLabel: translations.openNextView,
      ownerState
    })]
  }));
});
if (true) TimeClock.displayName = "TimeClock";
true ? TimeClock.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * 12h/24h view for hour selection clock.
   * @default adapter.is12HourCycleInCurrentLocale()
   */
  ampm: import_prop_types25.default.bool,
  /**
   * Display ampm controls under the clock (instead of in the toolbar).
   * @default false
   */
  ampmInClock: import_prop_types25.default.bool,
  /**
   * If `true`, the main element is focused during the first mount.
   * This main element is:
   * - the element chosen by the visible view if any (i.e: the selected day on the `day` view).
   * - the `input` element if there is a field rendered.
   */
  autoFocus: import_prop_types25.default.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: import_prop_types25.default.object,
  className: import_prop_types25.default.string,
  /**
   * The default selected value.
   * Used when the component is not controlled.
   */
  defaultValue: import_prop_types25.default.object,
  /**
   * If `true`, the component is disabled.
   * When disabled, the value cannot be changed and no interaction is possible.
   * @default false
   */
  disabled: import_prop_types25.default.bool,
  /**
   * If `true`, disable values after the current date for date components, time for time components and both for date time components.
   * @default false
   */
  disableFuture: import_prop_types25.default.bool,
  /**
   * Do not ignore date part when validating min/max time.
   * @default false
   */
  disableIgnoringDatePartForTimeValidation: import_prop_types25.default.bool,
  /**
   * If `true`, disable values before the current date for date components, time for time components and both for date time components.
   * @default false
   */
  disablePast: import_prop_types25.default.bool,
  /**
   * Controlled focused view.
   */
  focusedView: import_prop_types25.default.oneOf(["hours", "minutes", "seconds"]),
  /**
   * Maximal selectable time.
   * The date part of the object will be ignored unless `props.disableIgnoringDatePartForTimeValidation === true`.
   */
  maxTime: import_prop_types25.default.object,
  /**
   * Minimal selectable time.
   * The date part of the object will be ignored unless `props.disableIgnoringDatePartForTimeValidation === true`.
   */
  minTime: import_prop_types25.default.object,
  /**
   * Step over minutes.
   * @default 1
   */
  minutesStep: import_prop_types25.default.number,
  /**
   * Callback fired when the value changes.
   * @template TValue The value type. It will be the same type as `value` or `null`. It can be in `[start, end]` format in case of range value.
   * @template TView The view type. Will be one of date or time views.
   * @param {TValue} value The new value.
   * @param {PickerSelectionState | undefined} selectionState Indicates if the date selection is complete.
   * @param {TView | undefined} selectedView Indicates the view in which the selection has been made.
   */
  onChange: import_prop_types25.default.func,
  /**
   * Callback fired on focused view change.
   * @template TView Type of the view. It will vary based on the Picker type and the `views` it uses.
   * @param {TView} view The new view to focus or not.
   * @param {boolean} hasFocus `true` if the view should be focused.
   */
  onFocusedViewChange: import_prop_types25.default.func,
  /**
   * Callback fired on view change.
   * @template TView Type of the view. It will vary based on the Picker type and the `views` it uses.
   * @param {TView} view The new view.
   */
  onViewChange: import_prop_types25.default.func,
  /**
   * The default visible view.
   * Used when the component view is not controlled.
   * Must be a valid option from `views` list.
   */
  openTo: import_prop_types25.default.oneOf(["hours", "minutes", "seconds"]),
  /**
   * If `true`, the component is read-only.
   * When read-only, the value cannot be changed but the user can interact with the interface.
   * @default false
   */
  readOnly: import_prop_types25.default.bool,
  /**
   * The date used to generate the new value when both `value` and `defaultValue` are empty.
   * @default The closest valid time using the validation props, except callbacks such as `shouldDisableTime`.
   */
  referenceDate: import_prop_types25.default.object,
  /**
   * Disable specific time.
   * @param {PickerValidDate} value The value to check.
   * @param {TimeView} view The clock type of the timeValue.
   * @returns {boolean} If `true` the time will be disabled.
   */
  shouldDisableTime: import_prop_types25.default.func,
  showViewSwitcher: import_prop_types25.default.bool,
  /**
   * The props used for each component slot.
   * @default {}
   */
  slotProps: import_prop_types25.default.object,
  /**
   * Overridable component slots.
   * @default {}
   */
  slots: import_prop_types25.default.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types25.default.oneOfType([import_prop_types25.default.arrayOf(import_prop_types25.default.oneOfType([import_prop_types25.default.func, import_prop_types25.default.object, import_prop_types25.default.bool])), import_prop_types25.default.func, import_prop_types25.default.object]),
  /**
   * Choose which timezone to use for the value.
   * Example: "default", "system", "UTC", "America/New_York".
   * If you pass values from other timezones to some props, they will be converted to this timezone before being used.
   * @see See the {@link https://mui.com/x/react-date-pickers/timezone/ timezones documentation} for more details.
   * @default The timezone of the `value` or `defaultValue` prop is defined, 'default' otherwise.
   */
  timezone: import_prop_types25.default.string,
  /**
   * The selected value.
   * Used when the component is controlled.
   */
  value: import_prop_types25.default.object,
  /**
   * The visible view.
   * Used when the component view is controlled.
   * Must be a valid option from `views` list.
   */
  view: import_prop_types25.default.oneOf(["hours", "minutes", "seconds"]),
  /**
   * Available views.
   * @default ['hours', 'minutes']
   */
  views: import_prop_types25.default.arrayOf(import_prop_types25.default.oneOf(["hours", "minutes", "seconds"]).isRequired)
} : void 0;

// node_modules/.pnpm/@mui+x-date-pickers@8.26.0_@emotion+react@11.14.0_@types+react@19.2.7_react@19.2.3__@em_45e4fa7585d24d6c7a3cddedaa636f9d/node_modules/@mui/x-date-pickers/esm/DigitalClock/DigitalClock.js
var React101 = __toESM(require_react(), 1);
var import_prop_types26 = __toESM(require_prop_types(), 1);

// node_modules/.pnpm/@mui+x-date-pickers@8.26.0_@emotion+react@11.14.0_@types+react@19.2.7_react@19.2.3__@em_45e4fa7585d24d6c7a3cddedaa636f9d/node_modules/@mui/x-date-pickers/esm/DigitalClock/digitalClockClasses.js
function getDigitalClockUtilityClass(slot) {
  return generateUtilityClass("MuiDigitalClock", slot);
}
var digitalClockClasses = generateUtilityClasses("MuiDigitalClock", ["root", "list", "item"]);

// node_modules/.pnpm/@mui+x-date-pickers@8.26.0_@emotion+react@11.14.0_@types+react@19.2.7_react@19.2.3__@em_45e4fa7585d24d6c7a3cddedaa636f9d/node_modules/@mui/x-date-pickers/esm/DigitalClock/DigitalClock.js
var import_jsx_runtime70 = __toESM(require_jsx_runtime(), 1);
var _excluded48 = ["ampm", "timeStep", "autoFocus", "slots", "slotProps", "value", "defaultValue", "referenceDate", "disableIgnoringDatePartForTimeValidation", "maxTime", "minTime", "disableFuture", "disablePast", "minutesStep", "shouldDisableTime", "onChange", "view", "openTo", "onViewChange", "focusedView", "onFocusedViewChange", "className", "classes", "disabled", "readOnly", "views", "skipDisabled", "timezone"];
var useUtilityClasses31 = (classes) => {
  const slots = {
    root: ["root"],
    list: ["list"],
    item: ["item"]
  };
  return composeClasses(slots, getDigitalClockUtilityClass, classes);
};
var DigitalClockRoot = styled_default(PickerViewRoot, {
  name: "MuiDigitalClock",
  slot: "Root"
})({
  overflowY: "auto",
  width: "100%",
  scrollbarWidth: "thin",
  "@media (prefers-reduced-motion: no-preference)": {
    scrollBehavior: "auto"
  },
  maxHeight: DIGITAL_CLOCK_VIEW_HEIGHT,
  variants: [{
    props: {
      hasDigitalClockAlreadyBeenRendered: true
    },
    style: {
      "@media (prefers-reduced-motion: no-preference)": {
        scrollBehavior: "smooth"
      }
    }
  }]
});
var DigitalClockList = styled_default(MenuList_default, {
  name: "MuiDigitalClock",
  slot: "List"
})({
  padding: 0
});
var DigitalClockItem = styled_default(MenuItem_default, {
  name: "MuiDigitalClock",
  slot: "Item",
  shouldForwardProp: (prop) => prop !== "itemValue" && prop !== "formattedValue"
})(({
  theme
}) => ({
  padding: "8px 16px",
  margin: "2px 4px",
  "&:first-of-type": {
    marginTop: 4
  },
  "&:hover": {
    backgroundColor: theme.vars ? `rgba(${theme.vars.palette.primary.mainChannel} / ${theme.vars.palette.action.hoverOpacity})` : alpha(theme.palette.primary.main, theme.palette.action.hoverOpacity)
  },
  "&.Mui-selected": {
    backgroundColor: (theme.vars || theme).palette.primary.main,
    color: (theme.vars || theme).palette.primary.contrastText,
    "&:focus-visible, &:hover": {
      backgroundColor: (theme.vars || theme).palette.primary.dark
    }
  },
  "&.Mui-focusVisible": {
    backgroundColor: theme.vars ? `rgba(${theme.vars.palette.primary.mainChannel} / ${theme.vars.palette.action.focusOpacity})` : alpha(theme.palette.primary.main, theme.palette.action.focusOpacity)
  }
}));
var DigitalClock = React101.forwardRef(function DigitalClock2(inProps, ref) {
  const adapter = usePickerAdapter();
  const containerRef = React101.useRef(null);
  const handleRef = useForkRef(ref, containerRef);
  const listRef = React101.useRef(null);
  const props = useThemeProps({
    props: inProps,
    name: "MuiDigitalClock"
  });
  const {
    ampm = adapter.is12HourCycleInCurrentLocale(),
    timeStep = 30,
    autoFocus,
    slots,
    slotProps,
    value: valueProp,
    defaultValue,
    referenceDate: referenceDateProp,
    disableIgnoringDatePartForTimeValidation = false,
    maxTime,
    minTime,
    disableFuture,
    disablePast,
    minutesStep = 1,
    shouldDisableTime,
    onChange,
    view: inView,
    openTo,
    onViewChange,
    focusedView,
    onFocusedViewChange,
    className,
    classes: classesProp,
    disabled,
    readOnly,
    views = ["hours"],
    skipDisabled = false,
    timezone: timezoneProp
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded48);
  const {
    value,
    handleValueChange: handleRawValueChange,
    timezone
  } = useControlledValue({
    name: "DigitalClock",
    timezone: timezoneProp,
    value: valueProp,
    defaultValue,
    referenceDate: referenceDateProp,
    onChange,
    valueManager: singleItemValueManager
  });
  const translations = usePickerTranslations();
  const now = useNow(timezone);
  const {
    ownerState: pickerOwnerState
  } = usePickerPrivateContext();
  const ownerState = _extends({}, pickerOwnerState, {
    hasDigitalClockAlreadyBeenRendered: !!containerRef.current
  });
  const classes = useUtilityClasses31(classesProp);
  const ClockItem = slots?.digitalClockItem ?? DigitalClockItem;
  const clockItemProps = useSlotProps_default({
    elementType: ClockItem,
    externalSlotProps: slotProps?.digitalClockItem,
    ownerState,
    className: classes.item
  });
  const valueOrReferenceDate = useClockReferenceDate({
    value,
    referenceDate: referenceDateProp,
    adapter,
    props,
    timezone
  });
  const handleValueChange = useEventCallback_default((newValue) => handleRawValueChange(newValue, "finish", "hours"));
  const {
    setValueAndGoToNextView
  } = useViews({
    view: inView,
    views,
    openTo,
    onViewChange,
    onChange: handleValueChange,
    focusedView,
    onFocusedViewChange
  });
  const handleItemSelect = useEventCallback_default((newValue) => {
    setValueAndGoToNextView(newValue, "finish");
  });
  useEnhancedEffect_default(() => {
    if (containerRef.current === null) {
      return;
    }
    const activeItem = containerRef.current.querySelector('[role="listbox"] [role="option"][tabindex="0"], [role="listbox"] [role="option"][aria-selected="true"]');
    if (!activeItem) {
      return;
    }
    const offsetTop = activeItem.offsetTop;
    if (autoFocus || !!focusedView) {
      activeItem.focus();
    }
    containerRef.current.scrollTop = offsetTop - 4;
  });
  const isTimeDisabled = React101.useCallback((valueToCheck) => {
    const isAfter = createIsAfterIgnoreDatePart(disableIgnoringDatePartForTimeValidation, adapter);
    const containsValidTime = () => {
      if (minTime && isAfter(minTime, valueToCheck)) {
        return false;
      }
      if (maxTime && isAfter(valueToCheck, maxTime)) {
        return false;
      }
      if (disableFuture && isAfter(valueToCheck, now)) {
        return false;
      }
      if (disablePast && isAfter(now, valueToCheck)) {
        return false;
      }
      return true;
    };
    const isValidValue = () => {
      if (adapter.getMinutes(valueToCheck) % minutesStep !== 0) {
        return false;
      }
      if (shouldDisableTime) {
        return !shouldDisableTime(valueToCheck, "hours");
      }
      return true;
    };
    return !containsValidTime() || !isValidValue();
  }, [disableIgnoringDatePartForTimeValidation, adapter, minTime, maxTime, disableFuture, now, disablePast, minutesStep, shouldDisableTime]);
  const timeOptions = React101.useMemo(() => {
    const result = [];
    const startOfDay = adapter.startOfDay(valueOrReferenceDate);
    let nextTimeStepOption = startOfDay;
    while (adapter.isSameDay(valueOrReferenceDate, nextTimeStepOption)) {
      result.push(nextTimeStepOption);
      nextTimeStepOption = adapter.addMinutes(nextTimeStepOption, timeStep);
    }
    return result;
  }, [valueOrReferenceDate, timeStep, adapter]);
  const focusedOptionIndex = timeOptions.findIndex((option) => adapter.isEqual(option, valueOrReferenceDate));
  const handleKeyDown = (event) => {
    switch (event.key) {
      case "PageUp": {
        const newIndex = getFocusedListItemIndex(listRef.current) - 5;
        const children = listRef.current.children;
        const newFocusedIndex = Math.max(0, newIndex);
        const childToFocus = children[newFocusedIndex];
        if (childToFocus) {
          childToFocus.focus();
        }
        event.preventDefault();
        break;
      }
      case "PageDown": {
        const newIndex = getFocusedListItemIndex(listRef.current) + 5;
        const children = listRef.current.children;
        const newFocusedIndex = Math.min(children.length - 1, newIndex);
        const childToFocus = children[newFocusedIndex];
        if (childToFocus) {
          childToFocus.focus();
        }
        event.preventDefault();
        break;
      }
      default:
    }
  };
  return (0, import_jsx_runtime70.jsx)(DigitalClockRoot, _extends({
    ref: handleRef,
    className: clsx_default(classes.root, className),
    ownerState
  }, other, {
    children: (0, import_jsx_runtime70.jsx)(DigitalClockList, {
      ref: listRef,
      role: "listbox",
      "aria-label": translations.timePickerToolbarTitle,
      className: classes.list,
      onKeyDown: handleKeyDown,
      children: timeOptions.map((option, index) => {
        const optionDisabled = isTimeDisabled(option);
        if (skipDisabled && optionDisabled) {
          return null;
        }
        const isSelected = adapter.isEqual(option, value);
        const formattedValue = adapter.format(option, ampm ? "fullTime12h" : "fullTime24h");
        const isFocused = focusedOptionIndex === index || focusedOptionIndex === -1 && index === 0;
        const tabIndex = isFocused ? 0 : -1;
        return (0, import_jsx_runtime70.jsx)(ClockItem, _extends({
          onClick: () => !readOnly && handleItemSelect(option),
          selected: isSelected,
          disabled: disabled || optionDisabled,
          disableRipple: readOnly,
          role: "option",
          "aria-disabled": readOnly,
          "aria-selected": isSelected,
          tabIndex,
          itemValue: option,
          formattedValue
        }, clockItemProps, {
          children: formattedValue
        }), `${option.valueOf()}-${formattedValue}`);
      })
    })
  }));
});
if (true) DigitalClock.displayName = "DigitalClock";
true ? DigitalClock.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * 12h/24h view for hour selection clock.
   * @default adapter.is12HourCycleInCurrentLocale()
   */
  ampm: import_prop_types26.default.bool,
  /**
   * If `true`, the main element is focused during the first mount.
   * This main element is:
   * - the element chosen by the visible view if any (i.e: the selected day on the `day` view).
   * - the `input` element if there is a field rendered.
   */
  autoFocus: import_prop_types26.default.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: import_prop_types26.default.object,
  className: import_prop_types26.default.string,
  /**
   * The default selected value.
   * Used when the component is not controlled.
   */
  defaultValue: import_prop_types26.default.object,
  /**
   * If `true`, the component is disabled.
   * When disabled, the value cannot be changed and no interaction is possible.
   * @default false
   */
  disabled: import_prop_types26.default.bool,
  /**
   * If `true`, disable values after the current date for date components, time for time components and both for date time components.
   * @default false
   */
  disableFuture: import_prop_types26.default.bool,
  /**
   * Do not ignore date part when validating min/max time.
   * @default false
   */
  disableIgnoringDatePartForTimeValidation: import_prop_types26.default.bool,
  /**
   * If `true`, disable values before the current date for date components, time for time components and both for date time components.
   * @default false
   */
  disablePast: import_prop_types26.default.bool,
  /**
   * Controlled focused view.
   */
  focusedView: import_prop_types26.default.oneOf(["hours"]),
  /**
   * Maximal selectable time.
   * The date part of the object will be ignored unless `props.disableIgnoringDatePartForTimeValidation === true`.
   */
  maxTime: import_prop_types26.default.object,
  /**
   * Minimal selectable time.
   * The date part of the object will be ignored unless `props.disableIgnoringDatePartForTimeValidation === true`.
   */
  minTime: import_prop_types26.default.object,
  /**
   * Step over minutes.
   * @default 1
   */
  minutesStep: import_prop_types26.default.number,
  /**
   * Callback fired when the value changes.
   * @template TValue The value type. It will be the same type as `value` or `null`. It can be in `[start, end]` format in case of range value.
   * @template TView The view type. Will be one of date or time views.
   * @param {TValue} value The new value.
   * @param {PickerSelectionState | undefined} selectionState Indicates if the date selection is complete.
   * @param {TView | undefined} selectedView Indicates the view in which the selection has been made.
   */
  onChange: import_prop_types26.default.func,
  /**
   * Callback fired on focused view change.
   * @template TView Type of the view. It will vary based on the Picker type and the `views` it uses.
   * @param {TView} view The new view to focus or not.
   * @param {boolean} hasFocus `true` if the view should be focused.
   */
  onFocusedViewChange: import_prop_types26.default.func,
  /**
   * Callback fired on view change.
   * @template TView Type of the view. It will vary based on the Picker type and the `views` it uses.
   * @param {TView} view The new view.
   */
  onViewChange: import_prop_types26.default.func,
  /**
   * The default visible view.
   * Used when the component view is not controlled.
   * Must be a valid option from `views` list.
   */
  openTo: import_prop_types26.default.oneOf(["hours"]),
  /**
   * If `true`, the component is read-only.
   * When read-only, the value cannot be changed but the user can interact with the interface.
   * @default false
   */
  readOnly: import_prop_types26.default.bool,
  /**
   * The date used to generate the new value when both `value` and `defaultValue` are empty.
   * @default The closest valid time using the validation props, except callbacks such as `shouldDisableTime`.
   */
  referenceDate: import_prop_types26.default.object,
  /**
   * Disable specific time.
   * @param {PickerValidDate} value The value to check.
   * @param {TimeView} view The clock type of the timeValue.
   * @returns {boolean} If `true` the time will be disabled.
   */
  shouldDisableTime: import_prop_types26.default.func,
  /**
   * If `true`, disabled digital clock items will not be rendered.
   * @default false
   */
  skipDisabled: import_prop_types26.default.bool,
  /**
   * The props used for each component slot.
   * @default {}
   */
  slotProps: import_prop_types26.default.object,
  /**
   * Overrideable component slots.
   * @default {}
   */
  slots: import_prop_types26.default.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types26.default.oneOfType([import_prop_types26.default.arrayOf(import_prop_types26.default.oneOfType([import_prop_types26.default.func, import_prop_types26.default.object, import_prop_types26.default.bool])), import_prop_types26.default.func, import_prop_types26.default.object]),
  /**
   * The time steps between two time options.
   * For example, if `timeStep = 45`, then the available time options will be `[00:00, 00:45, 01:30, 02:15, 03:00, etc.]`.
   * @default 30
   */
  timeStep: import_prop_types26.default.number,
  /**
   * Choose which timezone to use for the value.
   * Example: "default", "system", "UTC", "America/New_York".
   * If you pass values from other timezones to some props, they will be converted to this timezone before being used.
   * @see See the {@link https://mui.com/x/react-date-pickers/timezone/ timezones documentation} for more details.
   * @default The timezone of the `value` or `defaultValue` prop is defined, 'default' otherwise.
   */
  timezone: import_prop_types26.default.string,
  /**
   * The selected value.
   * Used when the component is controlled.
   */
  value: import_prop_types26.default.object,
  /**
   * The visible view.
   * Used when the component view is controlled.
   * Must be a valid option from `views` list.
   */
  view: import_prop_types26.default.oneOf(["hours"]),
  /**
   * Available views.
   * @default ['hours']
   */
  views: import_prop_types26.default.arrayOf(import_prop_types26.default.oneOf(["hours"]))
} : void 0;

// node_modules/.pnpm/@mui+x-date-pickers@8.26.0_@emotion+react@11.14.0_@types+react@19.2.7_react@19.2.3__@em_45e4fa7585d24d6c7a3cddedaa636f9d/node_modules/@mui/x-date-pickers/esm/MultiSectionDigitalClock/MultiSectionDigitalClock.js
var React103 = __toESM(require_react(), 1);
var import_prop_types27 = __toESM(require_prop_types(), 1);

// node_modules/.pnpm/@mui+x-date-pickers@8.26.0_@emotion+react@11.14.0_@types+react@19.2.7_react@19.2.3__@em_45e4fa7585d24d6c7a3cddedaa636f9d/node_modules/@mui/x-date-pickers/esm/MultiSectionDigitalClock/multiSectionDigitalClockClasses.js
function getMultiSectionDigitalClockUtilityClass(slot) {
  return generateUtilityClass("MuiMultiSectionDigitalClock", slot);
}
var multiSectionDigitalClockClasses = generateUtilityClasses("MuiMultiSectionDigitalClock", ["root"]);

// node_modules/.pnpm/@mui+x-date-pickers@8.26.0_@emotion+react@11.14.0_@types+react@19.2.7_react@19.2.3__@em_45e4fa7585d24d6c7a3cddedaa636f9d/node_modules/@mui/x-date-pickers/esm/MultiSectionDigitalClock/MultiSectionDigitalClockSection.js
var React102 = __toESM(require_react(), 1);

// node_modules/.pnpm/@mui+x-date-pickers@8.26.0_@emotion+react@11.14.0_@types+react@19.2.7_react@19.2.3__@em_45e4fa7585d24d6c7a3cddedaa636f9d/node_modules/@mui/x-date-pickers/esm/MultiSectionDigitalClock/multiSectionDigitalClockSectionClasses.js
function getMultiSectionDigitalClockSectionUtilityClass(slot) {
  return generateUtilityClass("MuiMultiSectionDigitalClockSection", slot);
}
var multiSectionDigitalClockSectionClasses = generateUtilityClasses("MuiMultiSectionDigitalClockSection", ["root", "item"]);

// node_modules/.pnpm/@mui+x-date-pickers@8.26.0_@emotion+react@11.14.0_@types+react@19.2.7_react@19.2.3__@em_45e4fa7585d24d6c7a3cddedaa636f9d/node_modules/@mui/x-date-pickers/esm/MultiSectionDigitalClock/MultiSectionDigitalClockSection.js
var import_jsx_runtime71 = __toESM(require_jsx_runtime(), 1);
var _excluded49 = ["autoFocus", "onChange", "className", "classes", "disabled", "readOnly", "items", "active", "slots", "slotProps", "skipDisabled"];
var useUtilityClasses32 = (classes) => {
  const slots = {
    root: ["root"],
    item: ["item"]
  };
  return composeClasses(slots, getMultiSectionDigitalClockSectionUtilityClass, classes);
};
var MultiSectionDigitalClockSectionRoot = styled_default(MenuList_default, {
  name: "MuiMultiSectionDigitalClockSection",
  slot: "Root"
})(({
  theme
}) => ({
  maxHeight: DIGITAL_CLOCK_VIEW_HEIGHT,
  width: 56,
  padding: 0,
  overflow: "hidden",
  scrollbarWidth: "thin",
  "@media (prefers-reduced-motion: no-preference)": {
    scrollBehavior: "auto"
  },
  "@media (pointer: fine)": {
    "&:hover": {
      overflowY: "auto"
    }
  },
  "@media (pointer: none), (pointer: coarse)": {
    overflowY: "auto"
  },
  "&:not(:first-of-type)": {
    borderLeft: `1px solid ${(theme.vars || theme).palette.divider}`
  },
  variants: [{
    props: {
      hasDigitalClockAlreadyBeenRendered: true
    },
    style: {
      "@media (prefers-reduced-motion: no-preference)": {
        scrollBehavior: "smooth"
      }
    }
  }]
}));
var MultiSectionDigitalClockSectionItem = styled_default(MenuItem_default, {
  name: "MuiMultiSectionDigitalClockSection",
  slot: "Item"
})(({
  theme
}) => ({
  padding: 8,
  margin: "2px 4px",
  width: MULTI_SECTION_CLOCK_SECTION_WIDTH,
  justifyContent: "center",
  "&:first-of-type": {
    marginTop: 4
  },
  "&:hover": {
    backgroundColor: theme.vars ? `rgba(${theme.vars.palette.primary.mainChannel} / ${theme.vars.palette.action.hoverOpacity})` : alpha(theme.palette.primary.main, theme.palette.action.hoverOpacity)
  },
  "&.Mui-selected": {
    backgroundColor: (theme.vars || theme).palette.primary.main,
    color: (theme.vars || theme).palette.primary.contrastText,
    "&:focus-visible, &:hover": {
      backgroundColor: (theme.vars || theme).palette.primary.dark
    }
  },
  "&.Mui-focusVisible": {
    backgroundColor: theme.vars ? `rgba(${theme.vars.palette.primary.mainChannel} / ${theme.vars.palette.action.focusOpacity})` : alpha(theme.palette.primary.main, theme.palette.action.focusOpacity)
  }
}));
var MultiSectionDigitalClockSection = React102.forwardRef(function MultiSectionDigitalClockSection2(inProps, ref) {
  const containerRef = React102.useRef(null);
  const handleRef = useForkRef(ref, containerRef);
  const previousActive = React102.useRef(null);
  const props = useThemeProps({
    props: inProps,
    name: "MuiMultiSectionDigitalClockSection"
  });
  const {
    autoFocus,
    onChange,
    className,
    classes: classesProp,
    disabled,
    readOnly,
    items,
    active,
    slots,
    slotProps,
    skipDisabled
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded49);
  const {
    ownerState: pickerOwnerState
  } = usePickerPrivateContext();
  const ownerState = _extends({}, pickerOwnerState, {
    hasDigitalClockAlreadyBeenRendered: !!containerRef.current
  });
  const classes = useUtilityClasses32(classesProp);
  const DigitalClockSectionItem = slots?.digitalClockSectionItem ?? MultiSectionDigitalClockSectionItem;
  useEnhancedEffect_default(() => {
    if (containerRef.current === null) {
      return;
    }
    const activeItem = containerRef.current.querySelector('[role="option"][tabindex="0"], [role="option"][aria-selected="true"]');
    if (active && autoFocus && activeItem) {
      activeItem.focus();
    }
    if (!activeItem || previousActive.current === activeItem) {
      return;
    }
    previousActive.current = activeItem;
    const offsetTop = activeItem.offsetTop;
    const itemHeight = activeItem.offsetHeight;
    const containerHeight = containerRef.current.clientHeight;
    const scrollableHeight = containerRef.current.scrollHeight;
    const centeredPosition = offsetTop - containerHeight / 2 + itemHeight / 2;
    const maxScrollTop = scrollableHeight - containerHeight;
    const scrollPosition = Math.min(centeredPosition, maxScrollTop);
    containerRef.current.scrollTop = Math.max(0, scrollPosition);
  });
  const focusedOptionIndex = items.findIndex((item) => item.isFocused(item.value));
  const handleKeyDown = (event) => {
    switch (event.key) {
      case "PageUp": {
        const newIndex = getFocusedListItemIndex(containerRef.current) - 5;
        const children = containerRef.current.children;
        const newFocusedIndex = Math.max(0, newIndex);
        const childToFocus = children[newFocusedIndex];
        if (childToFocus) {
          childToFocus.focus();
        }
        event.preventDefault();
        break;
      }
      case "PageDown": {
        const newIndex = getFocusedListItemIndex(containerRef.current) + 5;
        const children = containerRef.current.children;
        const newFocusedIndex = Math.min(children.length - 1, newIndex);
        const childToFocus = children[newFocusedIndex];
        if (childToFocus) {
          childToFocus.focus();
        }
        event.preventDefault();
        break;
      }
      default:
    }
  };
  return (0, import_jsx_runtime71.jsx)(MultiSectionDigitalClockSectionRoot, _extends({
    ref: handleRef,
    className: clsx_default(classes.root, className),
    ownerState,
    autoFocusItem: autoFocus && active,
    role: "listbox",
    onKeyDown: handleKeyDown
  }, other, {
    children: items.map((option, index) => {
      const isItemDisabled = option.isDisabled?.(option.value);
      const isDisabled = disabled || isItemDisabled;
      if (skipDisabled && isDisabled) {
        return null;
      }
      const isSelected = option.isSelected(option.value);
      const tabIndex = focusedOptionIndex === index || focusedOptionIndex === -1 && index === 0 ? 0 : -1;
      return (0, import_jsx_runtime71.jsx)(DigitalClockSectionItem, _extends({
        onClick: () => !readOnly && onChange(option.value),
        selected: isSelected,
        disabled: isDisabled,
        disableRipple: readOnly,
        role: "option",
        "aria-disabled": readOnly || isDisabled || void 0,
        "aria-label": option.ariaLabel,
        "aria-selected": isSelected,
        tabIndex,
        className: classes.item
      }, slotProps?.digitalClockSectionItem, {
        children: option.label
      }), option.label);
    })
  }));
});
if (true) MultiSectionDigitalClockSection.displayName = "MultiSectionDigitalClockSection";

// node_modules/.pnpm/@mui+x-date-pickers@8.26.0_@emotion+react@11.14.0_@types+react@19.2.7_react@19.2.3__@em_45e4fa7585d24d6c7a3cddedaa636f9d/node_modules/@mui/x-date-pickers/esm/MultiSectionDigitalClock/MultiSectionDigitalClock.utils.js
var getHourSectionOptions = ({
  now,
  value,
  adapter,
  ampm,
  isDisabled,
  resolveAriaLabel,
  timeStep,
  valueOrReferenceDate
}) => {
  const currentHours = value ? adapter.getHours(value) : null;
  const result = [];
  const isSelected = (hour, overriddenCurrentHours) => {
    const resolvedCurrentHours = overriddenCurrentHours ?? currentHours;
    if (resolvedCurrentHours === null) {
      return false;
    }
    if (ampm) {
      if (hour === 12) {
        return resolvedCurrentHours === 12 || resolvedCurrentHours === 0;
      }
      return resolvedCurrentHours === hour || resolvedCurrentHours - 12 === hour;
    }
    return resolvedCurrentHours === hour;
  };
  const isFocused = (hour) => {
    return isSelected(hour, adapter.getHours(valueOrReferenceDate));
  };
  const endHour = ampm ? 11 : 23;
  for (let hour = 0; hour <= endHour; hour += timeStep) {
    let label = adapter.format(adapter.setHours(now, hour), ampm ? "hours12h" : "hours24h");
    const ariaLabel = resolveAriaLabel(parseInt(label, 10).toString());
    label = adapter.formatNumber(label);
    result.push({
      value: hour,
      label,
      isSelected,
      isDisabled,
      isFocused,
      ariaLabel
    });
  }
  return result;
};
var getTimeSectionOptions = ({
  value,
  adapter,
  isDisabled,
  timeStep,
  resolveLabel,
  resolveAriaLabel,
  hasValue = true
}) => {
  const isSelected = (timeValue) => {
    if (value === null) {
      return false;
    }
    return hasValue && value === timeValue;
  };
  const isFocused = (timeValue) => {
    return value === timeValue;
  };
  return [...Array.from({
    length: Math.ceil(60 / timeStep)
  }, (_, index) => {
    const timeValue = timeStep * index;
    return {
      value: timeValue,
      label: adapter.formatNumber(resolveLabel(timeValue)),
      isDisabled,
      isSelected,
      isFocused,
      ariaLabel: resolveAriaLabel(timeValue.toString())
    };
  })];
};

// node_modules/.pnpm/@mui+x-date-pickers@8.26.0_@emotion+react@11.14.0_@types+react@19.2.7_react@19.2.3__@em_45e4fa7585d24d6c7a3cddedaa636f9d/node_modules/@mui/x-date-pickers/esm/MultiSectionDigitalClock/MultiSectionDigitalClock.js
var import_jsx_runtime72 = __toESM(require_jsx_runtime(), 1);
var _excluded50 = ["ampm", "timeSteps", "autoFocus", "slots", "slotProps", "value", "defaultValue", "referenceDate", "disableIgnoringDatePartForTimeValidation", "maxTime", "minTime", "disableFuture", "disablePast", "minutesStep", "shouldDisableTime", "onChange", "view", "views", "openTo", "onViewChange", "focusedView", "onFocusedViewChange", "className", "classes", "disabled", "readOnly", "skipDisabled", "timezone"];
var useUtilityClasses33 = (classes) => {
  const slots = {
    root: ["root"]
  };
  return composeClasses(slots, getMultiSectionDigitalClockUtilityClass, classes);
};
var MultiSectionDigitalClockRoot = styled_default(PickerViewRoot, {
  name: "MuiMultiSectionDigitalClock",
  slot: "Root"
})(({
  theme
}) => ({
  flexDirection: "row",
  width: "100%",
  borderBottom: `1px solid ${(theme.vars || theme).palette.divider}`
}));
var MultiSectionDigitalClock = React103.forwardRef(function MultiSectionDigitalClock2(inProps, ref) {
  const adapter = usePickerAdapter();
  const isRtl = useRtl();
  const props = useThemeProps({
    props: inProps,
    name: "MuiMultiSectionDigitalClock"
  });
  const {
    ampm = adapter.is12HourCycleInCurrentLocale(),
    timeSteps: inTimeSteps,
    autoFocus,
    slots,
    slotProps,
    value: valueProp,
    defaultValue,
    referenceDate: referenceDateProp,
    disableIgnoringDatePartForTimeValidation = false,
    maxTime,
    minTime,
    disableFuture,
    disablePast,
    minutesStep = 1,
    shouldDisableTime,
    onChange,
    view: inView,
    views: inViews = ["hours", "minutes"],
    openTo,
    onViewChange,
    focusedView: inFocusedView,
    onFocusedViewChange,
    className,
    classes: classesProp,
    disabled,
    readOnly,
    skipDisabled = false,
    timezone: timezoneProp
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded50);
  const {
    value,
    handleValueChange: handleRawValueChange,
    timezone
  } = useControlledValue({
    name: "MultiSectionDigitalClock",
    timezone: timezoneProp,
    value: valueProp,
    defaultValue,
    referenceDate: referenceDateProp,
    onChange,
    valueManager: singleItemValueManager
  });
  const translations = usePickerTranslations();
  const now = useNow(timezone);
  const timeSteps = React103.useMemo(() => _extends({
    hours: 1,
    minutes: 5,
    seconds: 5
  }, inTimeSteps), [inTimeSteps]);
  const valueOrReferenceDate = useClockReferenceDate({
    value,
    referenceDate: referenceDateProp,
    adapter,
    props,
    timezone
  });
  const handleValueChange = useEventCallback_default((newValue, selectionState, selectedView) => handleRawValueChange(newValue, selectionState, selectedView));
  const views = React103.useMemo(() => {
    if (!ampm || !inViews.includes("hours")) {
      return inViews;
    }
    return inViews.includes("meridiem") ? inViews : [...inViews, "meridiem"];
  }, [ampm, inViews]);
  const {
    view,
    setValueAndGoToNextView,
    focusedView
  } = useViews({
    view: inView,
    views,
    openTo,
    onViewChange,
    onChange: handleValueChange,
    focusedView: inFocusedView,
    onFocusedViewChange
  });
  const handleMeridiemValueChange = useEventCallback_default((newValue) => {
    setValueAndGoToNextView(newValue, "finish", "meridiem");
  });
  const {
    meridiemMode,
    handleMeridiemChange
  } = useMeridiemMode(valueOrReferenceDate, ampm, handleMeridiemValueChange, "finish");
  const isTimeDisabled = React103.useCallback((rawValue, viewType) => {
    const isAfter = createIsAfterIgnoreDatePart(disableIgnoringDatePartForTimeValidation, adapter);
    const shouldCheckPastEnd = viewType === "hours" || viewType === "minutes" && views.includes("seconds");
    const containsValidTime = ({
      start,
      end
    }) => {
      if (minTime && isAfter(minTime, end)) {
        return false;
      }
      if (maxTime && isAfter(start, maxTime)) {
        return false;
      }
      if (disableFuture && isAfter(start, now)) {
        return false;
      }
      if (disablePast && isAfter(now, shouldCheckPastEnd ? end : start)) {
        return false;
      }
      return true;
    };
    const isValidValue = (timeValue, step = 1) => {
      if (timeValue % step !== 0) {
        return false;
      }
      if (shouldDisableTime) {
        switch (viewType) {
          case "hours":
            return !shouldDisableTime(adapter.setHours(valueOrReferenceDate, timeValue), "hours");
          case "minutes":
            return !shouldDisableTime(adapter.setMinutes(valueOrReferenceDate, timeValue), "minutes");
          case "seconds":
            return !shouldDisableTime(adapter.setSeconds(valueOrReferenceDate, timeValue), "seconds");
          default:
            return false;
        }
      }
      return true;
    };
    switch (viewType) {
      case "hours": {
        const valueWithMeridiem = convertValueToMeridiem(rawValue, meridiemMode, ampm);
        const dateWithNewHours = adapter.setHours(valueOrReferenceDate, valueWithMeridiem);
        if (adapter.getHours(dateWithNewHours) !== valueWithMeridiem) {
          return true;
        }
        const start = adapter.setSeconds(adapter.setMinutes(dateWithNewHours, 0), 0);
        const end = adapter.setSeconds(adapter.setMinutes(dateWithNewHours, 59), 59);
        return !containsValidTime({
          start,
          end
        }) || !isValidValue(valueWithMeridiem);
      }
      case "minutes": {
        const dateWithNewMinutes = adapter.setMinutes(valueOrReferenceDate, rawValue);
        const start = adapter.setSeconds(dateWithNewMinutes, 0);
        const end = adapter.setSeconds(dateWithNewMinutes, 59);
        return !containsValidTime({
          start,
          end
        }) || !isValidValue(rawValue, minutesStep);
      }
      case "seconds": {
        const dateWithNewSeconds = adapter.setSeconds(valueOrReferenceDate, rawValue);
        const start = dateWithNewSeconds;
        const end = dateWithNewSeconds;
        return !containsValidTime({
          start,
          end
        }) || !isValidValue(rawValue);
      }
      default:
        throw new Error("not supported");
    }
  }, [ampm, valueOrReferenceDate, disableIgnoringDatePartForTimeValidation, maxTime, meridiemMode, minTime, minutesStep, shouldDisableTime, adapter, disableFuture, disablePast, now, views]);
  const buildViewProps = React103.useCallback((viewToBuild) => {
    switch (viewToBuild) {
      case "hours": {
        return {
          onChange: (hours) => {
            const valueWithMeridiem = convertValueToMeridiem(hours, meridiemMode, ampm);
            setValueAndGoToNextView(adapter.setHours(valueOrReferenceDate, valueWithMeridiem), "finish", "hours");
          },
          items: getHourSectionOptions({
            now,
            value,
            ampm,
            adapter,
            isDisabled: (hours) => isTimeDisabled(hours, "hours"),
            timeStep: timeSteps.hours,
            resolveAriaLabel: translations.hoursClockNumberText,
            valueOrReferenceDate
          })
        };
      }
      case "minutes": {
        return {
          onChange: (minutes) => {
            setValueAndGoToNextView(adapter.setMinutes(valueOrReferenceDate, minutes), "finish", "minutes");
          },
          items: getTimeSectionOptions({
            value: adapter.getMinutes(valueOrReferenceDate),
            adapter,
            isDisabled: (minutes) => isTimeDisabled(minutes, "minutes"),
            resolveLabel: (minutes) => adapter.format(adapter.setMinutes(now, minutes), "minutes"),
            timeStep: timeSteps.minutes,
            hasValue: !!value,
            resolveAriaLabel: translations.minutesClockNumberText
          })
        };
      }
      case "seconds": {
        return {
          onChange: (seconds) => {
            setValueAndGoToNextView(adapter.setSeconds(valueOrReferenceDate, seconds), "finish", "seconds");
          },
          items: getTimeSectionOptions({
            value: adapter.getSeconds(valueOrReferenceDate),
            adapter,
            isDisabled: (seconds) => isTimeDisabled(seconds, "seconds"),
            resolveLabel: (seconds) => adapter.format(adapter.setSeconds(now, seconds), "seconds"),
            timeStep: timeSteps.seconds,
            hasValue: !!value,
            resolveAriaLabel: translations.secondsClockNumberText
          })
        };
      }
      case "meridiem": {
        const amLabel = formatMeridiem(adapter, "am");
        const pmLabel = formatMeridiem(adapter, "pm");
        return {
          onChange: handleMeridiemChange,
          items: [{
            value: "am",
            label: amLabel,
            isSelected: () => !!value && meridiemMode === "am",
            isFocused: () => !!valueOrReferenceDate && meridiemMode === "am",
            ariaLabel: amLabel
          }, {
            value: "pm",
            label: pmLabel,
            isSelected: () => !!value && meridiemMode === "pm",
            isFocused: () => !!valueOrReferenceDate && meridiemMode === "pm",
            ariaLabel: pmLabel
          }]
        };
      }
      default:
        throw new Error(`Unknown view: ${viewToBuild} found.`);
    }
  }, [now, value, ampm, adapter, timeSteps.hours, timeSteps.minutes, timeSteps.seconds, translations.hoursClockNumberText, translations.minutesClockNumberText, translations.secondsClockNumberText, meridiemMode, setValueAndGoToNextView, valueOrReferenceDate, isTimeDisabled, handleMeridiemChange]);
  const viewsToRender = React103.useMemo(() => {
    if (!isRtl) {
      return views;
    }
    const digitViews = views.filter((v) => v !== "meridiem");
    digitViews.reverse();
    if (views.includes("meridiem")) {
      digitViews.push("meridiem");
    }
    return digitViews;
  }, [isRtl, views]);
  const viewTimeOptions = React103.useMemo(() => {
    return views.reduce((result, currentView) => {
      return _extends({}, result, {
        [currentView]: buildViewProps(currentView)
      });
    }, {});
  }, [views, buildViewProps]);
  const {
    ownerState
  } = usePickerPrivateContext();
  const classes = useUtilityClasses33(classesProp);
  return (0, import_jsx_runtime72.jsx)(MultiSectionDigitalClockRoot, _extends({
    ref,
    className: clsx_default(classes.root, className),
    ownerState,
    role: "group"
  }, other, {
    children: viewsToRender.map((timeView) => (0, import_jsx_runtime72.jsx)(MultiSectionDigitalClockSection, {
      items: viewTimeOptions[timeView].items,
      onChange: viewTimeOptions[timeView].onChange,
      active: view === timeView,
      autoFocus: autoFocus || focusedView === timeView,
      disabled,
      readOnly,
      slots,
      slotProps,
      skipDisabled,
      "aria-label": translations.selectViewText(timeView)
    }, timeView))
  }));
});
if (true) MultiSectionDigitalClock.displayName = "MultiSectionDigitalClock";
true ? MultiSectionDigitalClock.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * 12h/24h view for hour selection clock.
   * @default adapter.is12HourCycleInCurrentLocale()
   */
  ampm: import_prop_types27.default.bool,
  /**
   * If `true`, the main element is focused during the first mount.
   * This main element is:
   * - the element chosen by the visible view if any (i.e: the selected day on the `day` view).
   * - the `input` element if there is a field rendered.
   */
  autoFocus: import_prop_types27.default.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: import_prop_types27.default.object,
  className: import_prop_types27.default.string,
  /**
   * The default selected value.
   * Used when the component is not controlled.
   */
  defaultValue: import_prop_types27.default.object,
  /**
   * If `true`, the component is disabled.
   * When disabled, the value cannot be changed and no interaction is possible.
   * @default false
   */
  disabled: import_prop_types27.default.bool,
  /**
   * If `true`, disable values after the current date for date components, time for time components and both for date time components.
   * @default false
   */
  disableFuture: import_prop_types27.default.bool,
  /**
   * Do not ignore date part when validating min/max time.
   * @default false
   */
  disableIgnoringDatePartForTimeValidation: import_prop_types27.default.bool,
  /**
   * If `true`, disable values before the current date for date components, time for time components and both for date time components.
   * @default false
   */
  disablePast: import_prop_types27.default.bool,
  /**
   * Controlled focused view.
   */
  focusedView: import_prop_types27.default.oneOf(["hours", "meridiem", "minutes", "seconds"]),
  /**
   * Maximal selectable time.
   * The date part of the object will be ignored unless `props.disableIgnoringDatePartForTimeValidation === true`.
   */
  maxTime: import_prop_types27.default.object,
  /**
   * Minimal selectable time.
   * The date part of the object will be ignored unless `props.disableIgnoringDatePartForTimeValidation === true`.
   */
  minTime: import_prop_types27.default.object,
  /**
   * Step over minutes.
   * @default 1
   */
  minutesStep: import_prop_types27.default.number,
  /**
   * Callback fired when the value changes.
   * @template TValue The value type. It will be the same type as `value` or `null`. It can be in `[start, end]` format in case of range value.
   * @template TView The view type. Will be one of date or time views.
   * @param {TValue} value The new value.
   * @param {PickerSelectionState | undefined} selectionState Indicates if the date selection is complete.
   * @param {TView | undefined} selectedView Indicates the view in which the selection has been made.
   */
  onChange: import_prop_types27.default.func,
  /**
   * Callback fired on focused view change.
   * @template TView Type of the view. It will vary based on the Picker type and the `views` it uses.
   * @param {TView} view The new view to focus or not.
   * @param {boolean} hasFocus `true` if the view should be focused.
   */
  onFocusedViewChange: import_prop_types27.default.func,
  /**
   * Callback fired on view change.
   * @template TView Type of the view. It will vary based on the Picker type and the `views` it uses.
   * @param {TView} view The new view.
   */
  onViewChange: import_prop_types27.default.func,
  /**
   * The default visible view.
   * Used when the component view is not controlled.
   * Must be a valid option from `views` list.
   */
  openTo: import_prop_types27.default.oneOf(["hours", "meridiem", "minutes", "seconds"]),
  /**
   * If `true`, the component is read-only.
   * When read-only, the value cannot be changed but the user can interact with the interface.
   * @default false
   */
  readOnly: import_prop_types27.default.bool,
  /**
   * The date used to generate the new value when both `value` and `defaultValue` are empty.
   * @default The closest valid time using the validation props, except callbacks such as `shouldDisableTime`.
   */
  referenceDate: import_prop_types27.default.object,
  /**
   * Disable specific time.
   * @param {PickerValidDate} value The value to check.
   * @param {TimeView} view The clock type of the timeValue.
   * @returns {boolean} If `true` the time will be disabled.
   */
  shouldDisableTime: import_prop_types27.default.func,
  /**
   * If `true`, disabled digital clock items will not be rendered.
   * @default false
   */
  skipDisabled: import_prop_types27.default.bool,
  /**
   * The props used for each component slot.
   * @default {}
   */
  slotProps: import_prop_types27.default.object,
  /**
   * Overrideable component slots.
   * @default {}
   */
  slots: import_prop_types27.default.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types27.default.oneOfType([import_prop_types27.default.arrayOf(import_prop_types27.default.oneOfType([import_prop_types27.default.func, import_prop_types27.default.object, import_prop_types27.default.bool])), import_prop_types27.default.func, import_prop_types27.default.object]),
  /**
   * The time steps between two time unit options.
   * For example, if `timeSteps.minutes = 8`, then the available minute options will be `[0, 8, 16, 24, 32, 40, 48, 56]`.
   * @default{ hours: 1, minutes: 5, seconds: 5 }
   */
  timeSteps: import_prop_types27.default.shape({
    hours: import_prop_types27.default.number,
    minutes: import_prop_types27.default.number,
    seconds: import_prop_types27.default.number
  }),
  /**
   * Choose which timezone to use for the value.
   * Example: "default", "system", "UTC", "America/New_York".
   * If you pass values from other timezones to some props, they will be converted to this timezone before being used.
   * @see See the {@link https://mui.com/x/react-date-pickers/timezone/ timezones documentation} for more details.
   * @default The timezone of the `value` or `defaultValue` prop is defined, 'default' otherwise.
   */
  timezone: import_prop_types27.default.string,
  /**
   * The selected value.
   * Used when the component is controlled.
   */
  value: import_prop_types27.default.object,
  /**
   * The visible view.
   * Used when the component view is controlled.
   * Must be a valid option from `views` list.
   */
  view: import_prop_types27.default.oneOf(["hours", "meridiem", "minutes", "seconds"]),
  /**
   * Available views.
   * @default ['hours', 'minutes']
   */
  views: import_prop_types27.default.arrayOf(import_prop_types27.default.oneOf(["hours", "meridiem", "minutes", "seconds"]).isRequired)
} : void 0;

// node_modules/.pnpm/@mui+x-date-pickers@8.26.0_@emotion+react@11.14.0_@types+react@19.2.7_react@19.2.3__@em_45e4fa7585d24d6c7a3cddedaa636f9d/node_modules/@mui/x-date-pickers/esm/timeViewRenderers/timeViewRenderers.js
var import_jsx_runtime73 = __toESM(require_jsx_runtime(), 1);
var renderTimeViewClock = ({
  view,
  onViewChange,
  focusedView,
  onFocusedViewChange,
  views,
  value,
  defaultValue,
  referenceDate,
  onChange,
  className,
  classes,
  disableFuture,
  disablePast,
  minTime,
  maxTime,
  shouldDisableTime,
  minutesStep,
  ampm,
  ampmInClock,
  slots,
  slotProps,
  readOnly,
  disabled,
  sx,
  autoFocus,
  showViewSwitcher,
  disableIgnoringDatePartForTimeValidation,
  timezone
}) => (0, import_jsx_runtime73.jsx)(TimeClock, {
  view,
  onViewChange,
  focusedView: focusedView && isTimeView(focusedView) ? focusedView : null,
  onFocusedViewChange,
  views: views.filter(isTimeView),
  value,
  defaultValue,
  referenceDate,
  onChange,
  className,
  classes,
  disableFuture,
  disablePast,
  minTime,
  maxTime,
  shouldDisableTime,
  minutesStep,
  ampm,
  ampmInClock,
  slots,
  slotProps,
  readOnly,
  disabled,
  sx,
  autoFocus,
  showViewSwitcher,
  disableIgnoringDatePartForTimeValidation,
  timezone
});
if (true) renderTimeViewClock.displayName = "renderTimeViewClock";
var renderDigitalClockTimeView = ({
  view,
  onViewChange,
  focusedView,
  onFocusedViewChange,
  views,
  value,
  defaultValue,
  referenceDate,
  onChange,
  className,
  classes,
  disableFuture,
  disablePast,
  minTime,
  maxTime,
  shouldDisableTime,
  minutesStep,
  ampm,
  slots,
  slotProps,
  readOnly,
  disabled,
  sx,
  autoFocus,
  disableIgnoringDatePartForTimeValidation,
  timeSteps,
  skipDisabled,
  timezone
}) => (0, import_jsx_runtime73.jsx)(DigitalClock, {
  view,
  onViewChange,
  focusedView: focusedView && isTimeView(focusedView) ? focusedView : null,
  onFocusedViewChange,
  views: views.filter(isTimeView),
  value,
  defaultValue,
  referenceDate,
  onChange,
  className,
  classes,
  disableFuture,
  disablePast,
  minTime,
  maxTime,
  shouldDisableTime,
  minutesStep,
  ampm,
  slots,
  slotProps,
  readOnly,
  disabled,
  sx,
  autoFocus,
  disableIgnoringDatePartForTimeValidation,
  timeStep: timeSteps?.minutes,
  skipDisabled,
  timezone
});
if (true) renderDigitalClockTimeView.displayName = "renderDigitalClockTimeView";
var renderMultiSectionDigitalClockTimeView = ({
  view,
  onViewChange,
  focusedView,
  onFocusedViewChange,
  views,
  value,
  defaultValue,
  referenceDate,
  onChange,
  className,
  classes,
  disableFuture,
  disablePast,
  minTime,
  maxTime,
  shouldDisableTime,
  minutesStep,
  ampm,
  slots,
  slotProps,
  readOnly,
  disabled,
  sx,
  autoFocus,
  disableIgnoringDatePartForTimeValidation,
  timeSteps,
  skipDisabled,
  timezone
}) => (0, import_jsx_runtime73.jsx)(MultiSectionDigitalClock, {
  view,
  onViewChange,
  focusedView: focusedView && isInternalTimeView(focusedView) ? focusedView : null,
  onFocusedViewChange,
  views: views.filter(isTimeView),
  value,
  defaultValue,
  referenceDate,
  onChange,
  className,
  classes,
  disableFuture,
  disablePast,
  minTime,
  maxTime,
  shouldDisableTime,
  minutesStep,
  ampm,
  slots,
  slotProps,
  readOnly,
  disabled,
  sx,
  autoFocus,
  disableIgnoringDatePartForTimeValidation,
  timeSteps,
  skipDisabled,
  timezone
});
if (true) renderMultiSectionDigitalClockTimeView.displayName = "renderMultiSectionDigitalClockTimeView";

// node_modules/.pnpm/@mui+x-date-pickers@8.26.0_@emotion+react@11.14.0_@types+react@19.2.7_react@19.2.3__@em_45e4fa7585d24d6c7a3cddedaa636f9d/node_modules/@mui/x-date-pickers/esm/DesktopDateTimePicker/DesktopDateTimePickerLayout.js
var React104 = __toESM(require_react(), 1);
var import_prop_types28 = __toESM(require_prop_types(), 1);
var import_jsx_runtime74 = __toESM(require_jsx_runtime(), 1);
var DesktopDateTimePickerLayout = React104.forwardRef(function DesktopDateTimePickerLayout2(props, ref) {
  const {
    toolbar,
    tabs,
    content,
    actionBar,
    shortcuts,
    ownerState
  } = usePickerLayout_default(props);
  const {
    orientation
  } = usePickerContext();
  const {
    sx,
    className,
    classes
  } = props;
  const isActionBarVisible = actionBar && (actionBar.props.actions?.length ?? 0) > 0;
  return (0, import_jsx_runtime74.jsxs)(PickersLayoutRoot, {
    ref,
    className: clsx_default(pickersLayoutClasses.root, classes?.root, className),
    sx: [{
      [`& .${pickersLayoutClasses.tabs}`]: {
        gridRow: 4,
        gridColumn: "1 / 4"
      },
      [`& .${pickersLayoutClasses.actionBar}`]: {
        gridRow: 5
      }
    }, ...Array.isArray(sx) ? sx : [sx]],
    ownerState,
    children: [orientation === "landscape" ? shortcuts : toolbar, orientation === "landscape" ? toolbar : shortcuts, (0, import_jsx_runtime74.jsxs)(PickersLayoutContentWrapper, {
      className: clsx_default(pickersLayoutClasses.contentWrapper, classes?.contentWrapper),
      ownerState,
      sx: {
        display: "grid"
      },
      children: [content, tabs, isActionBarVisible && (0, import_jsx_runtime74.jsx)(Divider_default, {
        sx: {
          gridRow: 3,
          gridColumn: "1 / 4"
        }
      })]
    }), actionBar]
  });
});
if (true) DesktopDateTimePickerLayout.displayName = "DesktopDateTimePickerLayout";
true ? DesktopDateTimePickerLayout.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  children: import_prop_types28.default.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: import_prop_types28.default.object,
  className: import_prop_types28.default.string,
  /**
   * The props used for each component slot.
   * @default {}
   */
  slotProps: import_prop_types28.default.object,
  /**
   * Overridable component slots.
   * @default {}
   */
  slots: import_prop_types28.default.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types28.default.oneOfType([import_prop_types28.default.arrayOf(import_prop_types28.default.oneOfType([import_prop_types28.default.func, import_prop_types28.default.object, import_prop_types28.default.bool])), import_prop_types28.default.func, import_prop_types28.default.object])
} : void 0;

// node_modules/.pnpm/@mui+x-date-pickers@8.26.0_@emotion+react@11.14.0_@types+react@19.2.7_react@19.2.3__@em_45e4fa7585d24d6c7a3cddedaa636f9d/node_modules/@mui/x-date-pickers/esm/DesktopDateTimePicker/DesktopDateTimePicker.js
var import_jsx_runtime75 = __toESM(require_jsx_runtime(), 1);
var _excluded51 = ["openTo", "focusedView", "timeViewsCount"];
var rendererInterceptor = function RendererInterceptor(props) {
  const {
    viewRenderers,
    popperView,
    rendererProps
  } = props;
  const {
    openTo,
    focusedView,
    timeViewsCount
  } = rendererProps, otherProps = _objectWithoutPropertiesLoose(rendererProps, _excluded51);
  const finalProps = _extends({}, otherProps, {
    // we control the focused view manually
    autoFocus: false,
    focusedView: null,
    sx: [{
      [`&.${multiSectionDigitalClockClasses.root}`]: {
        borderBottom: 0
      },
      [`&.${multiSectionDigitalClockClasses.root}, .${multiSectionDigitalClockSectionClasses.root}, &.${digitalClockClasses.root}`]: {
        maxHeight: VIEW_HEIGHT
      }
    }]
  });
  const isTimeViewActive = isInternalTimeView(popperView);
  const dateView = isTimeViewActive ? "day" : popperView;
  const timeView = isTimeViewActive ? popperView : "hours";
  return (0, import_jsx_runtime75.jsxs)(React105.Fragment, {
    children: [viewRenderers[dateView]?.(_extends({}, rendererProps, {
      view: !isTimeViewActive ? popperView : "day",
      focusedView: focusedView && isDatePickerView(focusedView) ? focusedView : null,
      views: rendererProps.views.filter(isDatePickerView),
      sx: [{
        gridColumn: 1
      }, ...finalProps.sx]
    })), timeViewsCount > 0 && (0, import_jsx_runtime75.jsxs)(React105.Fragment, {
      children: [(0, import_jsx_runtime75.jsx)(Divider_default, {
        orientation: "vertical",
        sx: {
          gridColumn: 2
        }
      }), viewRenderers[timeView]?.(_extends({}, finalProps, {
        view: isTimeViewActive ? popperView : "hours",
        focusedView: focusedView && isInternalTimeView(focusedView) ? focusedView : null,
        openTo: isInternalTimeView(openTo) ? openTo : "hours",
        views: rendererProps.views.filter(isInternalTimeView),
        sx: [{
          gridColumn: 3
        }, ...finalProps.sx]
      }))]
    })]
  });
};
if (true) rendererInterceptor.displayName = "rendererInterceptor";
var DesktopDateTimePicker = React105.forwardRef(function DesktopDateTimePicker2(inProps, ref) {
  const adapter = usePickerAdapter();
  const defaultizedProps = useDateTimePickerDefaultizedProps(inProps, "MuiDesktopDateTimePicker");
  const renderTimeView = defaultizedProps.shouldRenderTimeInASingleColumn ? renderDigitalClockTimeView : renderMultiSectionDigitalClockTimeView;
  const viewRenderers = _extends({
    day: renderDateViewCalendar,
    month: renderDateViewCalendar,
    year: renderDateViewCalendar,
    hours: renderTimeView,
    minutes: renderTimeView,
    seconds: renderTimeView,
    meridiem: renderTimeView
  }, defaultizedProps.viewRenderers);
  const ampmInClock = defaultizedProps.ampmInClock ?? true;
  const shouldHoursRendererContainMeridiemView = viewRenderers.hours?.name === renderMultiSectionDigitalClockTimeView.name;
  const views = !shouldHoursRendererContainMeridiemView ? defaultizedProps.views.filter((view) => view !== "meridiem") : defaultizedProps.views;
  const props = _extends({}, defaultizedProps, {
    viewRenderers,
    format: resolveDateTimeFormat(adapter, _extends({}, defaultizedProps, {
      views: defaultizedProps.viewsForFormatting
    })),
    views,
    yearsPerRow: defaultizedProps.yearsPerRow ?? 4,
    ampmInClock,
    slots: _extends({
      field: DateTimeField,
      layout: DesktopDateTimePickerLayout
    }, defaultizedProps.slots),
    slotProps: _extends({}, defaultizedProps.slotProps, {
      field: (ownerState) => _extends({}, resolveComponentProps_default(defaultizedProps.slotProps?.field, ownerState), extractValidationProps(defaultizedProps)),
      toolbar: _extends({
        hidden: true,
        ampmInClock
      }, defaultizedProps.slotProps?.toolbar),
      tabs: _extends({
        hidden: true
      }, defaultizedProps.slotProps?.tabs)
    })
  });
  const {
    renderPicker
  } = useDesktopPicker({
    ref,
    props,
    valueManager: singleItemValueManager,
    valueType: "date-time",
    validator: validateDateTime,
    rendererInterceptor,
    steps: null
  });
  return renderPicker();
});
if (true) DesktopDateTimePicker.displayName = "DesktopDateTimePicker";
DesktopDateTimePicker.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * 12h/24h view for hour selection clock.
   * @default adapter.is12HourCycleInCurrentLocale()
   */
  ampm: import_prop_types29.default.bool,
  /**
   * Display ampm controls under the clock (instead of in the toolbar).
   * @default true on desktop, false on mobile
   */
  ampmInClock: import_prop_types29.default.bool,
  /**
   * If `true`, the main element is focused during the first mount.
   * This main element is:
   * - the element chosen by the visible view if any (i.e: the selected day on the `day` view).
   * - the `input` element if there is a field rendered.
   */
  autoFocus: import_prop_types29.default.bool,
  className: import_prop_types29.default.string,
  /**
   * If `true`, the Picker will close after submitting the full date.
   * @default false
   */
  closeOnSelect: import_prop_types29.default.bool,
  /**
   * Formats the day of week displayed in the calendar header.
   * @param {PickerValidDate} date The date of the day of week provided by the adapter.
   * @returns {string} The name to display.
   * @default (date: PickerValidDate) => adapter.format(date, 'weekdayShort').charAt(0).toUpperCase()
   */
  dayOfWeekFormatter: import_prop_types29.default.func,
  /**
   * The default value.
   * Used when the component is not controlled.
   */
  defaultValue: import_prop_types29.default.object,
  /**
   * If `true`, the component is disabled.
   * When disabled, the value cannot be changed and no interaction is possible.
   * @default false
   */
  disabled: import_prop_types29.default.bool,
  /**
   * If `true`, disable values after the current date for date components, time for time components and both for date time components.
   * @default false
   */
  disableFuture: import_prop_types29.default.bool,
  /**
   * If `true`, today's date is rendering without highlighting with circle.
   * @default false
   */
  disableHighlightToday: import_prop_types29.default.bool,
  /**
   * Do not ignore date part when validating min/max time.
   * @default false
   */
  disableIgnoringDatePartForTimeValidation: import_prop_types29.default.bool,
  /**
   * If `true`, the button to open the Picker will not be rendered (it will only render the field).
   * @deprecated Use the [field component](https://mui.com/x/react-date-pickers/fields/) instead.
   * @default false
   */
  disableOpenPicker: import_prop_types29.default.bool,
  /**
   * If `true`, disable values before the current date for date components, time for time components and both for date time components.
   * @default false
   */
  disablePast: import_prop_types29.default.bool,
  /**
   * If `true`, the week number will be display in the calendar.
   */
  displayWeekNumber: import_prop_types29.default.bool,
  /**
   * @default true
   */
  enableAccessibleFieldDOMStructure: import_prop_types29.default.any,
  /**
   * The day view will show as many weeks as needed after the end of the current month to match this value.
   * Put it to 6 to have a fixed number of weeks in Gregorian calendars
   */
  fixedWeekNumber: import_prop_types29.default.number,
  /**
   * Format of the date when rendered in the input(s).
   * Defaults to localized format based on the used `views`.
   */
  format: import_prop_types29.default.string,
  /**
   * Density of the format when rendered in the input.
   * Setting `formatDensity` to `"spacious"` will add a space before and after each `/`, `-` and `.` character.
   * @default "dense"
   */
  formatDensity: import_prop_types29.default.oneOf(["dense", "spacious"]),
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: refType_default,
  /**
   * The label content.
   */
  label: import_prop_types29.default.node,
  /**
   * If `true`, calls `renderLoading` instead of rendering the day calendar.
   * Can be used to preload information and show it in calendar.
   * @default false
   */
  loading: import_prop_types29.default.bool,
  /**
   * Locale for components texts.
   * Allows overriding texts coming from `LocalizationProvider` and `theme`.
   */
  localeText: import_prop_types29.default.object,
  /**
   * Maximal selectable date.
   * @default 2099-12-31
   */
  maxDate: import_prop_types29.default.object,
  /**
   * Maximal selectable moment of time with binding to date, to set max time in each day use `maxTime`.
   */
  maxDateTime: import_prop_types29.default.object,
  /**
   * Maximal selectable time.
   * The date part of the object will be ignored unless `props.disableIgnoringDatePartForTimeValidation === true`.
   */
  maxTime: import_prop_types29.default.object,
  /**
   * Minimal selectable date.
   * @default 1900-01-01
   */
  minDate: import_prop_types29.default.object,
  /**
   * Minimal selectable moment of time with binding to date, to set min time in each day use `minTime`.
   */
  minDateTime: import_prop_types29.default.object,
  /**
   * Minimal selectable time.
   * The date part of the object will be ignored unless `props.disableIgnoringDatePartForTimeValidation === true`.
   */
  minTime: import_prop_types29.default.object,
  /**
   * Step over minutes.
   * @default 1
   */
  minutesStep: import_prop_types29.default.number,
  /**
   * Months rendered per row.
   * @default 3
   */
  monthsPerRow: import_prop_types29.default.oneOf([3, 4]),
  /**
   * Name attribute used by the `input` element in the Field.
   */
  name: import_prop_types29.default.string,
  /**
   * Callback fired when the value is accepted.
   * @template TValue The value type. It will be the same type as `value` or `null`. It can be in `[start, end]` format in case of range value.
   * @template TError The validation error type. It will be either `string` or a `null`. It can be in `[start, end]` format in case of range value.
   * @param {TValue} value The value that was just accepted.
   * @param {FieldChangeHandlerContext<TError>} context Context about this acceptance:
   * - `validationError`: validation result of the current value
   * - `source`: source of the acceptance. One of 'field' | 'view' | 'unknown'
   * - `shortcut` (optional): the shortcut metadata if the value was accepted via a shortcut selection
   */
  onAccept: import_prop_types29.default.func,
  /**
   * Callback fired when the value changes.
   * @template TValue The value type. It will be the same type as `value` or `null`. It can be in `[start, end]` format in case of range value.
   * @template TError The validation error type. It will be either `string` or a `null`. It can be in `[start, end]` format in case of range value.
   * @param {TValue} value The new value.
   * @param {FieldChangeHandlerContext<TError>} context Context about this change:
   * - `validationError`: validation result of the current value
   * - `source`: source of the change. One of 'field' | 'view' | 'unknown'
   * - `shortcut` (optional): the shortcut metadata if the change was triggered by a shortcut selection
   */
  onChange: import_prop_types29.default.func,
  /**
   * Callback fired when the popup requests to be closed.
   * Use in controlled mode (see `open`).
   */
  onClose: import_prop_types29.default.func,
  /**
   * Callback fired when the error associated with the current value changes.
   * When a validation error is detected, the `error` parameter contains a non-null value.
   * This can be used to render an appropriate form error.
   * @template TError The validation error type. It will be either `string` or a `null`. It can be in `[start, end]` format in case of range value.
   * @template TValue The value type. It will be the same type as `value` or `null`. It can be in `[start, end]` format in case of range value.
   * @param {TError} error The reason why the current value is not valid.
   * @param {TValue} value The value associated with the error.
   */
  onError: import_prop_types29.default.func,
  /**
   * Callback fired on month change.
   * @param {PickerValidDate} month The new month.
   */
  onMonthChange: import_prop_types29.default.func,
  /**
   * Callback fired when the popup requests to be opened.
   * Use in controlled mode (see `open`).
   */
  onOpen: import_prop_types29.default.func,
  /**
   * Callback fired when the selected sections change.
   * @param {FieldSelectedSections} newValue The new selected sections.
   */
  onSelectedSectionsChange: import_prop_types29.default.func,
  /**
   * Callback fired on view change.
   * @template TView Type of the view. It will vary based on the Picker type and the `views` it uses.
   * @param {TView} view The new view.
   */
  onViewChange: import_prop_types29.default.func,
  /**
   * Callback fired on year change.
   * @param {PickerValidDate} year The new year.
   */
  onYearChange: import_prop_types29.default.func,
  /**
   * Control the popup or dialog open state.
   * @default false
   */
  open: import_prop_types29.default.bool,
  /**
   * The default visible view.
   * Used when the component view is not controlled.
   * Must be a valid option from `views` list.
   */
  openTo: import_prop_types29.default.oneOf(["day", "hours", "meridiem", "minutes", "month", "seconds", "year"]),
  /**
   * Force rendering in particular orientation.
   */
  orientation: import_prop_types29.default.oneOf(["landscape", "portrait"]),
  /**
   * If `true`, the component is read-only.
   * When read-only, the value cannot be changed but the user can interact with the interface.
   * @default false
   */
  readOnly: import_prop_types29.default.bool,
  /**
   * If `true`, disable heavy animations.
   * @default `@media(prefers-reduced-motion: reduce)` || `navigator.userAgent` matches Android <10 or iOS <13
   */
  reduceAnimations: import_prop_types29.default.bool,
  /**
   * The date used to generate the new value when both `value` and `defaultValue` are empty.
   * @default The closest valid date-time using the validation props, except callbacks like `shouldDisable<...>`.
   */
  referenceDate: import_prop_types29.default.object,
  /**
   * Component displaying when passed `loading` true.
   * @returns {React.ReactNode} The node to render when loading.
   * @default () => <span>...</span>
   */
  renderLoading: import_prop_types29.default.func,
  /**
   * The currently selected sections.
   * This prop accepts four formats:
   * 1. If a number is provided, the section at this index will be selected.
   * 2. If a string of type `FieldSectionType` is provided, the first section with that name will be selected.
   * 3. If `"all"` is provided, all the sections will be selected.
   * 4. If `null` is provided, no section will be selected.
   * If not provided, the selected sections will be handled internally.
   */
  selectedSections: import_prop_types29.default.oneOfType([import_prop_types29.default.oneOf(["all", "day", "empty", "hours", "meridiem", "minutes", "month", "seconds", "weekDay", "year"]), import_prop_types29.default.number]),
  /**
   * Disable specific date.
   *
   * Warning: This function can be called multiple times (for example when rendering date calendar, checking if focus can be moved to a certain date, etc.). Expensive computations can impact performance.
   *
   * @param {PickerValidDate} day The date to test.
   * @returns {boolean} If `true` the date will be disabled.
   */
  shouldDisableDate: import_prop_types29.default.func,
  /**
   * Disable specific month.
   * @param {PickerValidDate} month The month to test.
   * @returns {boolean} If `true`, the month will be disabled.
   */
  shouldDisableMonth: import_prop_types29.default.func,
  /**
   * Disable specific time.
   * @param {PickerValidDate} value The value to check.
   * @param {TimeView} view The clock type of the timeValue.
   * @returns {boolean} If `true` the time will be disabled.
   */
  shouldDisableTime: import_prop_types29.default.func,
  /**
   * Disable specific year.
   * @param {PickerValidDate} year The year to test.
   * @returns {boolean} If `true`, the year will be disabled.
   */
  shouldDisableYear: import_prop_types29.default.func,
  /**
   * If `true`, days outside the current month are rendered:
   *
   * - if `fixedWeekNumber` is defined, renders days to have the weeks requested.
   *
   * - if `fixedWeekNumber` is not defined, renders day to fill the first and last week of the current month.
   *
   * - ignored if `calendars` equals more than `1` on range pickers.
   * @default false
   */
  showDaysOutsideCurrentMonth: import_prop_types29.default.bool,
  /**
   * If `true`, disabled digital clock items will not be rendered.
   * @default false
   */
  skipDisabled: import_prop_types29.default.bool,
  /**
   * The props used for each component slot.
   * @default {}
   */
  slotProps: import_prop_types29.default.object,
  /**
   * Overridable component slots.
   * @default {}
   */
  slots: import_prop_types29.default.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types29.default.oneOfType([import_prop_types29.default.arrayOf(import_prop_types29.default.oneOfType([import_prop_types29.default.func, import_prop_types29.default.object, import_prop_types29.default.bool])), import_prop_types29.default.func, import_prop_types29.default.object]),
  /**
   * Amount of time options below or at which the single column time renderer is used.
   * @default 24
   */
  thresholdToRenderTimeInASingleColumn: import_prop_types29.default.number,
  /**
   * The time steps between two time unit options.
   * For example, if `timeSteps.minutes = 8`, then the available minute options will be `[0, 8, 16, 24, 32, 40, 48, 56]`.
   * When single column time renderer is used, only `timeSteps.minutes` will be used.
   * @default{ hours: 1, minutes: 5, seconds: 5 }
   */
  timeSteps: import_prop_types29.default.shape({
    hours: import_prop_types29.default.number,
    minutes: import_prop_types29.default.number,
    seconds: import_prop_types29.default.number
  }),
  /**
   * Choose which timezone to use for the value.
   * Example: "default", "system", "UTC", "America/New_York".
   * If you pass values from other timezones to some props, they will be converted to this timezone before being used.
   * @see See the {@link https://mui.com/x/react-date-pickers/timezone/ timezones documentation} for more details.
   * @default The timezone of the `value` or `defaultValue` prop is defined, 'default' otherwise.
   */
  timezone: import_prop_types29.default.string,
  /**
   * The selected value.
   * Used when the component is controlled.
   */
  value: import_prop_types29.default.object,
  /**
   * The visible view.
   * Used when the component view is controlled.
   * Must be a valid option from `views` list.
   */
  view: import_prop_types29.default.oneOf(["day", "hours", "meridiem", "minutes", "month", "seconds", "year"]),
  /**
   * Define custom view renderers for each section.
   * If `null`, the section will only have field editing.
   * If `undefined`, internally defined view will be used.
   */
  viewRenderers: import_prop_types29.default.shape({
    day: import_prop_types29.default.func,
    hours: import_prop_types29.default.func,
    meridiem: import_prop_types29.default.func,
    minutes: import_prop_types29.default.func,
    month: import_prop_types29.default.func,
    seconds: import_prop_types29.default.func,
    year: import_prop_types29.default.func
  }),
  /**
   * Available views.
   */
  views: import_prop_types29.default.arrayOf(import_prop_types29.default.oneOf(["day", "hours", "minutes", "month", "seconds", "year"]).isRequired),
  /**
   * Years are displayed in ascending (chronological) order by default.
   * If `desc`, years are displayed in descending order.
   * @default 'asc'
   */
  yearsOrder: import_prop_types29.default.oneOf(["asc", "desc"]),
  /**
   * Years rendered per row.
   * @default 4
   */
  yearsPerRow: import_prop_types29.default.oneOf([3, 4])
};

// node_modules/.pnpm/@mui+x-date-pickers@8.26.0_@emotion+react@11.14.0_@types+react@19.2.7_react@19.2.3__@em_45e4fa7585d24d6c7a3cddedaa636f9d/node_modules/@mui/x-date-pickers/esm/MobileDateTimePicker/MobileDateTimePicker.js
var React106 = __toESM(require_react(), 1);
var import_prop_types30 = __toESM(require_prop_types(), 1);
var STEPS = [{
  views: DATE_VIEWS
}, {
  views: EXPORTED_TIME_VIEWS
}];
var MobileDateTimePicker = React106.forwardRef(function MobileDateTimePicker2(inProps, ref) {
  const adapter = usePickerAdapter();
  const defaultizedProps = useDateTimePickerDefaultizedProps(inProps, "MuiMobileDateTimePicker");
  const renderTimeView = defaultizedProps.shouldRenderTimeInASingleColumn ? renderDigitalClockTimeView : renderMultiSectionDigitalClockTimeView;
  const viewRenderers = _extends({
    day: renderDateViewCalendar,
    month: renderDateViewCalendar,
    year: renderDateViewCalendar,
    hours: renderTimeView,
    minutes: renderTimeView,
    seconds: renderTimeView,
    meridiem: renderTimeView
  }, defaultizedProps.viewRenderers);
  const ampmInClock = defaultizedProps.ampmInClock ?? false;
  const shouldHoursRendererContainMeridiemView = viewRenderers.hours?.name === renderMultiSectionDigitalClockTimeView.name;
  const views = !shouldHoursRendererContainMeridiemView ? defaultizedProps.views.filter((view) => view !== "meridiem") : defaultizedProps.views;
  const props = _extends({}, defaultizedProps, {
    viewRenderers,
    format: resolveDateTimeFormat(adapter, _extends({}, defaultizedProps, {
      views: defaultizedProps.viewsForFormatting
    })),
    views,
    ampmInClock,
    slots: _extends({
      field: DateTimeField
    }, defaultizedProps.slots),
    slotProps: _extends({}, defaultizedProps.slotProps, {
      field: (ownerState) => _extends({}, resolveComponentProps_default(defaultizedProps.slotProps?.field, ownerState), extractValidationProps(defaultizedProps)),
      toolbar: _extends({
        hidden: false,
        ampmInClock
      }, defaultizedProps.slotProps?.toolbar),
      tabs: _extends({
        hidden: false
      }, defaultizedProps.slotProps?.tabs),
      layout: _extends({}, defaultizedProps.slotProps?.layout, {
        sx: mergeSx([{
          [`& .${multiSectionDigitalClockClasses.root}`]: {
            width: DIALOG_WIDTH
          },
          [`& .${multiSectionDigitalClockSectionClasses.root}`]: {
            flex: 1,
            // account for the border on `MultiSectionDigitalClock`
            maxHeight: VIEW_HEIGHT - 1,
            [`.${multiSectionDigitalClockSectionClasses.item}`]: {
              width: "auto"
            }
          },
          [`& .${digitalClockClasses.root}`]: {
            width: DIALOG_WIDTH,
            maxHeight: VIEW_HEIGHT,
            flex: 1,
            [`.${digitalClockClasses.item}`]: {
              justifyContent: "center"
            }
          }
        }], defaultizedProps.slotProps?.layout?.sx)
      })
    })
  });
  const {
    renderPicker
  } = useMobilePicker({
    ref,
    props,
    valueManager: singleItemValueManager,
    valueType: "date-time",
    validator: validateDateTime,
    steps: STEPS
  });
  return renderPicker();
});
if (true) MobileDateTimePicker.displayName = "MobileDateTimePicker";
MobileDateTimePicker.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * 12h/24h view for hour selection clock.
   * @default adapter.is12HourCycleInCurrentLocale()
   */
  ampm: import_prop_types30.default.bool,
  /**
   * Display ampm controls under the clock (instead of in the toolbar).
   * @default true on desktop, false on mobile
   */
  ampmInClock: import_prop_types30.default.bool,
  /**
   * If `true`, the main element is focused during the first mount.
   * This main element is:
   * - the element chosen by the visible view if any (i.e: the selected day on the `day` view).
   * - the `input` element if there is a field rendered.
   */
  autoFocus: import_prop_types30.default.bool,
  className: import_prop_types30.default.string,
  /**
   * If `true`, the Picker will close after submitting the full date.
   * @default false
   */
  closeOnSelect: import_prop_types30.default.bool,
  /**
   * Formats the day of week displayed in the calendar header.
   * @param {PickerValidDate} date The date of the day of week provided by the adapter.
   * @returns {string} The name to display.
   * @default (date: PickerValidDate) => adapter.format(date, 'weekdayShort').charAt(0).toUpperCase()
   */
  dayOfWeekFormatter: import_prop_types30.default.func,
  /**
   * The default value.
   * Used when the component is not controlled.
   */
  defaultValue: import_prop_types30.default.object,
  /**
   * If `true`, the component is disabled.
   * When disabled, the value cannot be changed and no interaction is possible.
   * @default false
   */
  disabled: import_prop_types30.default.bool,
  /**
   * If `true`, disable values after the current date for date components, time for time components and both for date time components.
   * @default false
   */
  disableFuture: import_prop_types30.default.bool,
  /**
   * If `true`, today's date is rendering without highlighting with circle.
   * @default false
   */
  disableHighlightToday: import_prop_types30.default.bool,
  /**
   * Do not ignore date part when validating min/max time.
   * @default false
   */
  disableIgnoringDatePartForTimeValidation: import_prop_types30.default.bool,
  /**
   * If `true`, the button to open the Picker will not be rendered (it will only render the field).
   * @deprecated Use the [field component](https://mui.com/x/react-date-pickers/fields/) instead.
   * @default false
   */
  disableOpenPicker: import_prop_types30.default.bool,
  /**
   * If `true`, disable values before the current date for date components, time for time components and both for date time components.
   * @default false
   */
  disablePast: import_prop_types30.default.bool,
  /**
   * If `true`, the week number will be display in the calendar.
   */
  displayWeekNumber: import_prop_types30.default.bool,
  /**
   * @default true
   */
  enableAccessibleFieldDOMStructure: import_prop_types30.default.any,
  /**
   * The day view will show as many weeks as needed after the end of the current month to match this value.
   * Put it to 6 to have a fixed number of weeks in Gregorian calendars
   */
  fixedWeekNumber: import_prop_types30.default.number,
  /**
   * Format of the date when rendered in the input(s).
   * Defaults to localized format based on the used `views`.
   */
  format: import_prop_types30.default.string,
  /**
   * Density of the format when rendered in the input.
   * Setting `formatDensity` to `"spacious"` will add a space before and after each `/`, `-` and `.` character.
   * @default "dense"
   */
  formatDensity: import_prop_types30.default.oneOf(["dense", "spacious"]),
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: refType_default,
  /**
   * The label content.
   */
  label: import_prop_types30.default.node,
  /**
   * If `true`, calls `renderLoading` instead of rendering the day calendar.
   * Can be used to preload information and show it in calendar.
   * @default false
   */
  loading: import_prop_types30.default.bool,
  /**
   * Locale for components texts.
   * Allows overriding texts coming from `LocalizationProvider` and `theme`.
   */
  localeText: import_prop_types30.default.object,
  /**
   * Maximal selectable date.
   * @default 2099-12-31
   */
  maxDate: import_prop_types30.default.object,
  /**
   * Maximal selectable moment of time with binding to date, to set max time in each day use `maxTime`.
   */
  maxDateTime: import_prop_types30.default.object,
  /**
   * Maximal selectable time.
   * The date part of the object will be ignored unless `props.disableIgnoringDatePartForTimeValidation === true`.
   */
  maxTime: import_prop_types30.default.object,
  /**
   * Minimal selectable date.
   * @default 1900-01-01
   */
  minDate: import_prop_types30.default.object,
  /**
   * Minimal selectable moment of time with binding to date, to set min time in each day use `minTime`.
   */
  minDateTime: import_prop_types30.default.object,
  /**
   * Minimal selectable time.
   * The date part of the object will be ignored unless `props.disableIgnoringDatePartForTimeValidation === true`.
   */
  minTime: import_prop_types30.default.object,
  /**
   * Step over minutes.
   * @default 1
   */
  minutesStep: import_prop_types30.default.number,
  /**
   * Months rendered per row.
   * @default 3
   */
  monthsPerRow: import_prop_types30.default.oneOf([3, 4]),
  /**
   * Name attribute used by the `input` element in the Field.
   */
  name: import_prop_types30.default.string,
  /**
   * Callback fired when the value is accepted.
   * @template TValue The value type. It will be the same type as `value` or `null`. It can be in `[start, end]` format in case of range value.
   * @template TError The validation error type. It will be either `string` or a `null`. It can be in `[start, end]` format in case of range value.
   * @param {TValue} value The value that was just accepted.
   * @param {FieldChangeHandlerContext<TError>} context Context about this acceptance:
   * - `validationError`: validation result of the current value
   * - `source`: source of the acceptance. One of 'field' | 'view' | 'unknown'
   * - `shortcut` (optional): the shortcut metadata if the value was accepted via a shortcut selection
   */
  onAccept: import_prop_types30.default.func,
  /**
   * Callback fired when the value changes.
   * @template TValue The value type. It will be the same type as `value` or `null`. It can be in `[start, end]` format in case of range value.
   * @template TError The validation error type. It will be either `string` or a `null`. It can be in `[start, end]` format in case of range value.
   * @param {TValue} value The new value.
   * @param {FieldChangeHandlerContext<TError>} context Context about this change:
   * - `validationError`: validation result of the current value
   * - `source`: source of the change. One of 'field' | 'view' | 'unknown'
   * - `shortcut` (optional): the shortcut metadata if the change was triggered by a shortcut selection
   */
  onChange: import_prop_types30.default.func,
  /**
   * Callback fired when the popup requests to be closed.
   * Use in controlled mode (see `open`).
   */
  onClose: import_prop_types30.default.func,
  /**
   * Callback fired when the error associated with the current value changes.
   * When a validation error is detected, the `error` parameter contains a non-null value.
   * This can be used to render an appropriate form error.
   * @template TError The validation error type. It will be either `string` or a `null`. It can be in `[start, end]` format in case of range value.
   * @template TValue The value type. It will be the same type as `value` or `null`. It can be in `[start, end]` format in case of range value.
   * @param {TError} error The reason why the current value is not valid.
   * @param {TValue} value The value associated with the error.
   */
  onError: import_prop_types30.default.func,
  /**
   * Callback fired on month change.
   * @param {PickerValidDate} month The new month.
   */
  onMonthChange: import_prop_types30.default.func,
  /**
   * Callback fired when the popup requests to be opened.
   * Use in controlled mode (see `open`).
   */
  onOpen: import_prop_types30.default.func,
  /**
   * Callback fired when the selected sections change.
   * @param {FieldSelectedSections} newValue The new selected sections.
   */
  onSelectedSectionsChange: import_prop_types30.default.func,
  /**
   * Callback fired on view change.
   * @template TView Type of the view. It will vary based on the Picker type and the `views` it uses.
   * @param {TView} view The new view.
   */
  onViewChange: import_prop_types30.default.func,
  /**
   * Callback fired on year change.
   * @param {PickerValidDate} year The new year.
   */
  onYearChange: import_prop_types30.default.func,
  /**
   * Control the popup or dialog open state.
   * @default false
   */
  open: import_prop_types30.default.bool,
  /**
   * The default visible view.
   * Used when the component view is not controlled.
   * Must be a valid option from `views` list.
   */
  openTo: import_prop_types30.default.oneOf(["day", "hours", "meridiem", "minutes", "month", "seconds", "year"]),
  /**
   * Force rendering in particular orientation.
   */
  orientation: import_prop_types30.default.oneOf(["landscape", "portrait"]),
  /**
   * If `true`, the component is read-only.
   * When read-only, the value cannot be changed but the user can interact with the interface.
   * @default false
   */
  readOnly: import_prop_types30.default.bool,
  /**
   * If `true`, disable heavy animations.
   * @default `@media(prefers-reduced-motion: reduce)` || `navigator.userAgent` matches Android <10 or iOS <13
   */
  reduceAnimations: import_prop_types30.default.bool,
  /**
   * The date used to generate the new value when both `value` and `defaultValue` are empty.
   * @default The closest valid date-time using the validation props, except callbacks like `shouldDisable<...>`.
   */
  referenceDate: import_prop_types30.default.object,
  /**
   * Component displaying when passed `loading` true.
   * @returns {React.ReactNode} The node to render when loading.
   * @default () => <span>...</span>
   */
  renderLoading: import_prop_types30.default.func,
  /**
   * The currently selected sections.
   * This prop accepts four formats:
   * 1. If a number is provided, the section at this index will be selected.
   * 2. If a string of type `FieldSectionType` is provided, the first section with that name will be selected.
   * 3. If `"all"` is provided, all the sections will be selected.
   * 4. If `null` is provided, no section will be selected.
   * If not provided, the selected sections will be handled internally.
   */
  selectedSections: import_prop_types30.default.oneOfType([import_prop_types30.default.oneOf(["all", "day", "empty", "hours", "meridiem", "minutes", "month", "seconds", "weekDay", "year"]), import_prop_types30.default.number]),
  /**
   * Disable specific date.
   *
   * Warning: This function can be called multiple times (for example when rendering date calendar, checking if focus can be moved to a certain date, etc.). Expensive computations can impact performance.
   *
   * @param {PickerValidDate} day The date to test.
   * @returns {boolean} If `true` the date will be disabled.
   */
  shouldDisableDate: import_prop_types30.default.func,
  /**
   * Disable specific month.
   * @param {PickerValidDate} month The month to test.
   * @returns {boolean} If `true`, the month will be disabled.
   */
  shouldDisableMonth: import_prop_types30.default.func,
  /**
   * Disable specific time.
   * @param {PickerValidDate} value The value to check.
   * @param {TimeView} view The clock type of the timeValue.
   * @returns {boolean} If `true` the time will be disabled.
   */
  shouldDisableTime: import_prop_types30.default.func,
  /**
   * Disable specific year.
   * @param {PickerValidDate} year The year to test.
   * @returns {boolean} If `true`, the year will be disabled.
   */
  shouldDisableYear: import_prop_types30.default.func,
  /**
   * If `true`, days outside the current month are rendered:
   *
   * - if `fixedWeekNumber` is defined, renders days to have the weeks requested.
   *
   * - if `fixedWeekNumber` is not defined, renders day to fill the first and last week of the current month.
   *
   * - ignored if `calendars` equals more than `1` on range pickers.
   * @default false
   */
  showDaysOutsideCurrentMonth: import_prop_types30.default.bool,
  /**
   * If `true`, disabled digital clock items will not be rendered.
   * @default false
   */
  skipDisabled: import_prop_types30.default.bool,
  /**
   * The props used for each component slot.
   * @default {}
   */
  slotProps: import_prop_types30.default.object,
  /**
   * Overridable component slots.
   * @default {}
   */
  slots: import_prop_types30.default.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types30.default.oneOfType([import_prop_types30.default.arrayOf(import_prop_types30.default.oneOfType([import_prop_types30.default.func, import_prop_types30.default.object, import_prop_types30.default.bool])), import_prop_types30.default.func, import_prop_types30.default.object]),
  /**
   * Amount of time options below or at which the single column time renderer is used.
   * @default 24
   */
  thresholdToRenderTimeInASingleColumn: import_prop_types30.default.number,
  /**
   * The time steps between two time unit options.
   * For example, if `timeSteps.minutes = 8`, then the available minute options will be `[0, 8, 16, 24, 32, 40, 48, 56]`.
   * When single column time renderer is used, only `timeSteps.minutes` will be used.
   * @default{ hours: 1, minutes: 5, seconds: 5 }
   */
  timeSteps: import_prop_types30.default.shape({
    hours: import_prop_types30.default.number,
    minutes: import_prop_types30.default.number,
    seconds: import_prop_types30.default.number
  }),
  /**
   * Choose which timezone to use for the value.
   * Example: "default", "system", "UTC", "America/New_York".
   * If you pass values from other timezones to some props, they will be converted to this timezone before being used.
   * @see See the {@link https://mui.com/x/react-date-pickers/timezone/ timezones documentation} for more details.
   * @default The timezone of the `value` or `defaultValue` prop is defined, 'default' otherwise.
   */
  timezone: import_prop_types30.default.string,
  /**
   * The selected value.
   * Used when the component is controlled.
   */
  value: import_prop_types30.default.object,
  /**
   * The visible view.
   * Used when the component view is controlled.
   * Must be a valid option from `views` list.
   */
  view: import_prop_types30.default.oneOf(["day", "hours", "meridiem", "minutes", "month", "seconds", "year"]),
  /**
   * Define custom view renderers for each section.
   * If `null`, the section will only have field editing.
   * If `undefined`, internally defined view will be used.
   */
  viewRenderers: import_prop_types30.default.shape({
    day: import_prop_types30.default.func,
    hours: import_prop_types30.default.func,
    meridiem: import_prop_types30.default.func,
    minutes: import_prop_types30.default.func,
    month: import_prop_types30.default.func,
    seconds: import_prop_types30.default.func,
    year: import_prop_types30.default.func
  }),
  /**
   * Available views.
   */
  views: import_prop_types30.default.arrayOf(import_prop_types30.default.oneOf(["day", "hours", "minutes", "month", "seconds", "year"]).isRequired),
  /**
   * Years are displayed in ascending (chronological) order by default.
   * If `desc`, years are displayed in descending order.
   * @default 'asc'
   */
  yearsOrder: import_prop_types30.default.oneOf(["asc", "desc"]),
  /**
   * Years rendered per row.
   * @default 3
   */
  yearsPerRow: import_prop_types30.default.oneOf([3, 4])
};

// node_modules/.pnpm/@mui+x-date-pickers@8.26.0_@emotion+react@11.14.0_@types+react@19.2.7_react@19.2.3__@em_45e4fa7585d24d6c7a3cddedaa636f9d/node_modules/@mui/x-date-pickers/esm/DateTimePicker/DateTimePicker.js
var import_jsx_runtime76 = __toESM(require_jsx_runtime(), 1);
var _excluded53 = ["desktopModeMediaQuery"];
var DateTimePicker = React107.forwardRef(function DateTimePicker2(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiDateTimePicker"
  });
  const {
    desktopModeMediaQuery = DEFAULT_DESKTOP_MODE_MEDIA_QUERY
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded53);
  const isDesktop = useMediaQuery_default(desktopModeMediaQuery, {
    defaultMatches: true
  });
  if (isDesktop) {
    return (0, import_jsx_runtime76.jsx)(DesktopDateTimePicker, _extends({
      ref
    }, other));
  }
  return (0, import_jsx_runtime76.jsx)(MobileDateTimePicker, _extends({
    ref
  }, other));
});
if (true) DateTimePicker.displayName = "DateTimePicker";
true ? DateTimePicker.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * 12h/24h view for hour selection clock.
   * @default adapter.is12HourCycleInCurrentLocale()
   */
  ampm: import_prop_types31.default.bool,
  /**
   * Display ampm controls under the clock (instead of in the toolbar).
   * @default true on desktop, false on mobile
   */
  ampmInClock: import_prop_types31.default.bool,
  /**
   * If `true`, the main element is focused during the first mount.
   * This main element is:
   * - the element chosen by the visible view if any (i.e: the selected day on the `day` view).
   * - the `input` element if there is a field rendered.
   */
  autoFocus: import_prop_types31.default.bool,
  className: import_prop_types31.default.string,
  /**
   * If `true`, the Picker will close after submitting the full date.
   * @default false
   */
  closeOnSelect: import_prop_types31.default.bool,
  /**
   * Formats the day of week displayed in the calendar header.
   * @param {PickerValidDate} date The date of the day of week provided by the adapter.
   * @returns {string} The name to display.
   * @default (date: PickerValidDate) => adapter.format(date, 'weekdayShort').charAt(0).toUpperCase()
   */
  dayOfWeekFormatter: import_prop_types31.default.func,
  /**
   * The default value.
   * Used when the component is not controlled.
   */
  defaultValue: import_prop_types31.default.object,
  /**
   * CSS media query when `Mobile` mode will be changed to `Desktop`.
   * @default '@media (pointer: fine)'
   * @example '@media (min-width: 720px)' or theme.breakpoints.up("sm")
   */
  desktopModeMediaQuery: import_prop_types31.default.string,
  /**
   * If `true`, the component is disabled.
   * When disabled, the value cannot be changed and no interaction is possible.
   * @default false
   */
  disabled: import_prop_types31.default.bool,
  /**
   * If `true`, disable values after the current date for date components, time for time components and both for date time components.
   * @default false
   */
  disableFuture: import_prop_types31.default.bool,
  /**
   * If `true`, today's date is rendering without highlighting with circle.
   * @default false
   */
  disableHighlightToday: import_prop_types31.default.bool,
  /**
   * Do not ignore date part when validating min/max time.
   * @default false
   */
  disableIgnoringDatePartForTimeValidation: import_prop_types31.default.bool,
  /**
   * If `true`, the button to open the Picker will not be rendered (it will only render the field).
   * @deprecated Use the [field component](https://mui.com/x/react-date-pickers/fields/) instead.
   * @default false
   */
  disableOpenPicker: import_prop_types31.default.bool,
  /**
   * If `true`, disable values before the current date for date components, time for time components and both for date time components.
   * @default false
   */
  disablePast: import_prop_types31.default.bool,
  /**
   * If `true`, the week number will be display in the calendar.
   */
  displayWeekNumber: import_prop_types31.default.bool,
  /**
   * @default true
   */
  enableAccessibleFieldDOMStructure: import_prop_types31.default.any,
  /**
   * The day view will show as many weeks as needed after the end of the current month to match this value.
   * Put it to 6 to have a fixed number of weeks in Gregorian calendars
   */
  fixedWeekNumber: import_prop_types31.default.number,
  /**
   * Format of the date when rendered in the input(s).
   * Defaults to localized format based on the used `views`.
   */
  format: import_prop_types31.default.string,
  /**
   * Density of the format when rendered in the input.
   * Setting `formatDensity` to `"spacious"` will add a space before and after each `/`, `-` and `.` character.
   * @default "dense"
   */
  formatDensity: import_prop_types31.default.oneOf(["dense", "spacious"]),
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: refType_default,
  /**
   * The label content.
   */
  label: import_prop_types31.default.node,
  /**
   * If `true`, calls `renderLoading` instead of rendering the day calendar.
   * Can be used to preload information and show it in calendar.
   * @default false
   */
  loading: import_prop_types31.default.bool,
  /**
   * Locale for components texts.
   * Allows overriding texts coming from `LocalizationProvider` and `theme`.
   */
  localeText: import_prop_types31.default.object,
  /**
   * Maximal selectable date.
   * @default 2099-12-31
   */
  maxDate: import_prop_types31.default.object,
  /**
   * Maximal selectable moment of time with binding to date, to set max time in each day use `maxTime`.
   */
  maxDateTime: import_prop_types31.default.object,
  /**
   * Maximal selectable time.
   * The date part of the object will be ignored unless `props.disableIgnoringDatePartForTimeValidation === true`.
   */
  maxTime: import_prop_types31.default.object,
  /**
   * Minimal selectable date.
   * @default 1900-01-01
   */
  minDate: import_prop_types31.default.object,
  /**
   * Minimal selectable moment of time with binding to date, to set min time in each day use `minTime`.
   */
  minDateTime: import_prop_types31.default.object,
  /**
   * Minimal selectable time.
   * The date part of the object will be ignored unless `props.disableIgnoringDatePartForTimeValidation === true`.
   */
  minTime: import_prop_types31.default.object,
  /**
   * Step over minutes.
   * @default 1
   */
  minutesStep: import_prop_types31.default.number,
  /**
   * Months rendered per row.
   * @default 3
   */
  monthsPerRow: import_prop_types31.default.oneOf([3, 4]),
  /**
   * Name attribute used by the `input` element in the Field.
   */
  name: import_prop_types31.default.string,
  /**
   * Callback fired when the value is accepted.
   * @template TValue The value type. It will be the same type as `value` or `null`. It can be in `[start, end]` format in case of range value.
   * @template TError The validation error type. It will be either `string` or a `null`. It can be in `[start, end]` format in case of range value.
   * @param {TValue} value The value that was just accepted.
   * @param {FieldChangeHandlerContext<TError>} context Context about this acceptance:
   * - `validationError`: validation result of the current value
   * - `source`: source of the acceptance. One of 'field' | 'view' | 'unknown'
   * - `shortcut` (optional): the shortcut metadata if the value was accepted via a shortcut selection
   */
  onAccept: import_prop_types31.default.func,
  /**
   * Callback fired when the value changes.
   * @template TValue The value type. It will be the same type as `value` or `null`. It can be in `[start, end]` format in case of range value.
   * @template TError The validation error type. It will be either `string` or a `null`. It can be in `[start, end]` format in case of range value.
   * @param {TValue} value The new value.
   * @param {FieldChangeHandlerContext<TError>} context Context about this change:
   * - `validationError`: validation result of the current value
   * - `source`: source of the change. One of 'field' | 'view' | 'unknown'
   * - `shortcut` (optional): the shortcut metadata if the change was triggered by a shortcut selection
   */
  onChange: import_prop_types31.default.func,
  /**
   * Callback fired when the popup requests to be closed.
   * Use in controlled mode (see `open`).
   */
  onClose: import_prop_types31.default.func,
  /**
   * Callback fired when the error associated with the current value changes.
   * When a validation error is detected, the `error` parameter contains a non-null value.
   * This can be used to render an appropriate form error.
   * @template TError The validation error type. It will be either `string` or a `null`. It can be in `[start, end]` format in case of range value.
   * @template TValue The value type. It will be the same type as `value` or `null`. It can be in `[start, end]` format in case of range value.
   * @param {TError} error The reason why the current value is not valid.
   * @param {TValue} value The value associated with the error.
   */
  onError: import_prop_types31.default.func,
  /**
   * Callback fired on month change.
   * @param {PickerValidDate} month The new month.
   */
  onMonthChange: import_prop_types31.default.func,
  /**
   * Callback fired when the popup requests to be opened.
   * Use in controlled mode (see `open`).
   */
  onOpen: import_prop_types31.default.func,
  /**
   * Callback fired when the selected sections change.
   * @param {FieldSelectedSections} newValue The new selected sections.
   */
  onSelectedSectionsChange: import_prop_types31.default.func,
  /**
   * Callback fired on view change.
   * @template TView Type of the view. It will vary based on the Picker type and the `views` it uses.
   * @param {TView} view The new view.
   */
  onViewChange: import_prop_types31.default.func,
  /**
   * Callback fired on year change.
   * @param {PickerValidDate} year The new year.
   */
  onYearChange: import_prop_types31.default.func,
  /**
   * Control the popup or dialog open state.
   * @default false
   */
  open: import_prop_types31.default.bool,
  /**
   * The default visible view.
   * Used when the component view is not controlled.
   * Must be a valid option from `views` list.
   */
  openTo: import_prop_types31.default.oneOf(["day", "hours", "meridiem", "minutes", "month", "seconds", "year"]),
  /**
   * Force rendering in particular orientation.
   */
  orientation: import_prop_types31.default.oneOf(["landscape", "portrait"]),
  /**
   * If `true`, the component is read-only.
   * When read-only, the value cannot be changed but the user can interact with the interface.
   * @default false
   */
  readOnly: import_prop_types31.default.bool,
  /**
   * If `true`, disable heavy animations.
   * @default `@media(prefers-reduced-motion: reduce)` || `navigator.userAgent` matches Android <10 or iOS <13
   */
  reduceAnimations: import_prop_types31.default.bool,
  /**
   * The date used to generate the new value when both `value` and `defaultValue` are empty.
   * @default The closest valid date-time using the validation props, except callbacks like `shouldDisable<...>`.
   */
  referenceDate: import_prop_types31.default.object,
  /**
   * Component displaying when passed `loading` true.
   * @returns {React.ReactNode} The node to render when loading.
   * @default () => <span>...</span>
   */
  renderLoading: import_prop_types31.default.func,
  /**
   * The currently selected sections.
   * This prop accepts four formats:
   * 1. If a number is provided, the section at this index will be selected.
   * 2. If a string of type `FieldSectionType` is provided, the first section with that name will be selected.
   * 3. If `"all"` is provided, all the sections will be selected.
   * 4. If `null` is provided, no section will be selected.
   * If not provided, the selected sections will be handled internally.
   */
  selectedSections: import_prop_types31.default.oneOfType([import_prop_types31.default.oneOf(["all", "day", "empty", "hours", "meridiem", "minutes", "month", "seconds", "weekDay", "year"]), import_prop_types31.default.number]),
  /**
   * Disable specific date.
   *
   * Warning: This function can be called multiple times (for example when rendering date calendar, checking if focus can be moved to a certain date, etc.). Expensive computations can impact performance.
   *
   * @param {PickerValidDate} day The date to test.
   * @returns {boolean} If `true` the date will be disabled.
   */
  shouldDisableDate: import_prop_types31.default.func,
  /**
   * Disable specific month.
   * @param {PickerValidDate} month The month to test.
   * @returns {boolean} If `true`, the month will be disabled.
   */
  shouldDisableMonth: import_prop_types31.default.func,
  /**
   * Disable specific time.
   * @param {PickerValidDate} value The value to check.
   * @param {TimeView} view The clock type of the timeValue.
   * @returns {boolean} If `true` the time will be disabled.
   */
  shouldDisableTime: import_prop_types31.default.func,
  /**
   * Disable specific year.
   * @param {PickerValidDate} year The year to test.
   * @returns {boolean} If `true`, the year will be disabled.
   */
  shouldDisableYear: import_prop_types31.default.func,
  /**
   * If `true`, days outside the current month are rendered:
   *
   * - if `fixedWeekNumber` is defined, renders days to have the weeks requested.
   *
   * - if `fixedWeekNumber` is not defined, renders day to fill the first and last week of the current month.
   *
   * - ignored if `calendars` equals more than `1` on range pickers.
   * @default false
   */
  showDaysOutsideCurrentMonth: import_prop_types31.default.bool,
  /**
   * If `true`, disabled digital clock items will not be rendered.
   * @default false
   */
  skipDisabled: import_prop_types31.default.bool,
  /**
   * The props used for each component slot.
   * @default {}
   */
  slotProps: import_prop_types31.default.object,
  /**
   * Overridable component slots.
   * @default {}
   */
  slots: import_prop_types31.default.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types31.default.oneOfType([import_prop_types31.default.arrayOf(import_prop_types31.default.oneOfType([import_prop_types31.default.func, import_prop_types31.default.object, import_prop_types31.default.bool])), import_prop_types31.default.func, import_prop_types31.default.object]),
  /**
   * Amount of time options below or at which the single column time renderer is used.
   * @default 24
   */
  thresholdToRenderTimeInASingleColumn: import_prop_types31.default.number,
  /**
   * The time steps between two time unit options.
   * For example, if `timeSteps.minutes = 8`, then the available minute options will be `[0, 8, 16, 24, 32, 40, 48, 56]`.
   * When single column time renderer is used, only `timeSteps.minutes` will be used.
   * @default{ hours: 1, minutes: 5, seconds: 5 }
   */
  timeSteps: import_prop_types31.default.shape({
    hours: import_prop_types31.default.number,
    minutes: import_prop_types31.default.number,
    seconds: import_prop_types31.default.number
  }),
  /**
   * Choose which timezone to use for the value.
   * Example: "default", "system", "UTC", "America/New_York".
   * If you pass values from other timezones to some props, they will be converted to this timezone before being used.
   * @see See the {@link https://mui.com/x/react-date-pickers/timezone/ timezones documentation} for more details.
   * @default The timezone of the `value` or `defaultValue` prop is defined, 'default' otherwise.
   */
  timezone: import_prop_types31.default.string,
  /**
   * The selected value.
   * Used when the component is controlled.
   */
  value: import_prop_types31.default.object,
  /**
   * The visible view.
   * Used when the component view is controlled.
   * Must be a valid option from `views` list.
   */
  view: import_prop_types31.default.oneOf(["day", "hours", "meridiem", "minutes", "month", "seconds", "year"]),
  /**
   * Define custom view renderers for each section.
   * If `null`, the section will only have field editing.
   * If `undefined`, internally defined view will be used.
   */
  viewRenderers: import_prop_types31.default.shape({
    day: import_prop_types31.default.func,
    hours: import_prop_types31.default.func,
    meridiem: import_prop_types31.default.func,
    minutes: import_prop_types31.default.func,
    month: import_prop_types31.default.func,
    seconds: import_prop_types31.default.func,
    year: import_prop_types31.default.func
  }),
  /**
   * Available views.
   */
  views: import_prop_types31.default.arrayOf(import_prop_types31.default.oneOf(["day", "hours", "minutes", "month", "seconds", "year"]).isRequired),
  /**
   * Years are displayed in ascending (chronological) order by default.
   * If `desc`, years are displayed in descending order.
   * @default 'asc'
   */
  yearsOrder: import_prop_types31.default.oneOf(["asc", "desc"]),
  /**
   * Years rendered per row.
   * @default 4 on desktop, 3 on mobile
   */
  yearsPerRow: import_prop_types31.default.oneOf([3, 4])
} : void 0;

// node_modules/.pnpm/@toolpad+core@0.16.0_d46cabc535141b65151421393ad6a060/node_modules/@toolpad/core/esm/Crud/CrudForm.js
var import_dayjs2 = __toESM(require_dayjs_min(), 1);
var import_jsx_runtime77 = __toESM(require_jsx_runtime(), 1);
function CrudForm(props) {
  const {
    formState,
    onFieldChange,
    onSubmit,
    onReset,
    submitButtonLabel,
    slots,
    slotProps
  } = props;
  const formValues = formState.values;
  const formErrors = formState.errors;
  const crudContext = React108.useContext(CrudContext);
  const dataSource = props.dataSource ?? crudContext.dataSource;
  (0, import_invariant.default)(dataSource, "No data source found.");
  const {
    fields
  } = dataSource;
  const [isSubmitting, setIsSubmitting] = React108.useState(false);
  const handleSubmit = React108.useCallback(async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    try {
      await onSubmit(formValues);
    } finally {
      setIsSubmitting(false);
    }
  }, [formValues, onSubmit]);
  const handleTextFieldChange = React108.useCallback((event) => {
    onFieldChange(event.target.name, event.target.value);
  }, [onFieldChange]);
  const handleNumberFieldChange = React108.useCallback((event) => {
    onFieldChange(event.target.name, Number(event.target.value));
  }, [onFieldChange]);
  const handleCheckboxFieldChange = React108.useCallback((event, checked) => {
    onFieldChange(event.target.name, checked);
  }, [onFieldChange]);
  const handleDateFieldChange = React108.useCallback((name) => (value) => {
    if (value?.isValid()) {
      onFieldChange(name, value.toISOString() ?? null);
    } else if (formValues[name]) {
      onFieldChange(name, null);
    }
  }, [formValues, onFieldChange]);
  const handleSelectFieldChange = React108.useCallback((event) => {
    onFieldChange(event.target.name, event.target.value);
  }, [onFieldChange]);
  const renderField = React108.useCallback((formField) => {
    const {
      field,
      type,
      headerName,
      renderFormField
    } = formField;
    const fieldValue = formValues[field];
    const fieldError = formErrors[field];
    let fieldElement = null;
    if (renderFormField) {
      fieldElement = renderFormField({
        value: fieldValue ?? null,
        onChange: (value) => onFieldChange(field, value),
        error: fieldError ?? null
      });
    } else if (!type || type === "string") {
      const TextFieldComponent = slots?.textField ?? TextField_default;
      fieldElement = (0, import_jsx_runtime77.jsx)(TextFieldComponent, {
        value: fieldValue ?? "",
        onChange: handleTextFieldChange,
        name: field,
        label: headerName,
        error: !!fieldError,
        helperText: fieldError ?? " ",
        fullWidth: true,
        ...slotProps?.textField
      });
    } else if (type === "number") {
      const TextFieldComponent = slots?.textField ?? TextField_default;
      fieldElement = (0, import_jsx_runtime77.jsx)(TextFieldComponent, {
        value: fieldValue ?? "",
        onChange: handleNumberFieldChange,
        name: field,
        type: "number",
        label: headerName,
        error: !!fieldError,
        helperText: fieldError ?? " ",
        fullWidth: true,
        ...slotProps?.textField
      });
    } else if (type === "boolean") {
      const CheckBoxComponent = slots?.checkbox ?? Checkbox_default;
      fieldElement = (0, import_jsx_runtime77.jsxs)(FormControl_default, {
        children: [(0, import_jsx_runtime77.jsx)(FormControlLabel_default, {
          name: field,
          control: (0, import_jsx_runtime77.jsx)(CheckBoxComponent, {
            size: "large",
            checked: fieldValue,
            onChange: handleCheckboxFieldChange,
            ...slotProps?.checkbox
          }),
          label: headerName
        }), (0, import_jsx_runtime77.jsx)(FormHelperText_default, {
          error: !!fieldError,
          children: fieldError ?? " "
        })]
      });
    } else if (type === "date") {
      const DatePickerComponent = slots?.datePicker ?? DatePicker;
      fieldElement = (0, import_jsx_runtime77.jsx)(LocalizationProvider2, {
        dateAdapter: AdapterDayjs,
        children: (0, import_jsx_runtime77.jsx)(DatePickerComponent, {
          value: fieldValue ? (0, import_dayjs2.default)(fieldValue) : null,
          onChange: handleDateFieldChange(field),
          name: field,
          label: headerName,
          slotProps: {
            textField: {
              error: !!fieldError,
              helperText: fieldError ?? " ",
              fullWidth: true
            }
          },
          ...slotProps?.datePicker
        })
      });
    } else if (type === "dateTime") {
      const DateTimePickerComponent = slots?.dateTimePicker ?? DateTimePicker;
      fieldElement = (0, import_jsx_runtime77.jsx)(LocalizationProvider2, {
        dateAdapter: AdapterDayjs,
        children: (0, import_jsx_runtime77.jsx)(DateTimePickerComponent, {
          value: fieldValue ? (0, import_dayjs2.default)(fieldValue) : null,
          onChange: handleDateFieldChange(field),
          name: field,
          label: headerName,
          slotProps: {
            textField: {
              error: !!fieldError,
              helperText: fieldError ?? " ",
              fullWidth: true
            }
          },
          ...slotProps?.dateTimePicker
        })
      });
    } else if (type === "singleSelect") {
      const SelectComponent = slots?.select ?? Select_default;
      const {
        getOptionValue,
        getOptionLabel,
        valueOptions
      } = formField;
      if (valueOptions && Array.isArray(valueOptions)) {
        const labelId = `${field}-label`;
        fieldElement = (0, import_jsx_runtime77.jsxs)(FormControl_default, {
          error: !!fieldError,
          fullWidth: true,
          children: [(0, import_jsx_runtime77.jsx)(InputLabel_default, {
            id: labelId,
            children: headerName
          }), (0, import_jsx_runtime77.jsx)(SelectComponent, {
            value: fieldValue ?? "",
            onChange: handleSelectFieldChange,
            labelId,
            name: field,
            label: headerName,
            defaultValue: "",
            fullWidth: true,
            ...slotProps?.select,
            children: valueOptions.map((option) => {
              let optionValue = option;
              let optionLabel = option;
              if (typeof option !== "string" && typeof option !== "number") {
                optionValue = getOptionValue ? getOptionValue(option) : option.value;
                optionLabel = getOptionLabel ? getOptionLabel(option) : option.label;
              }
              return (0, import_jsx_runtime77.jsx)(MenuItem_default, {
                value: optionValue,
                children: optionLabel
              }, optionValue);
            })
          }), (0, import_jsx_runtime77.jsx)(FormHelperText_default, {
            children: fieldError ?? " "
          })]
        });
      }
    }
    return (0, import_jsx_runtime77.jsx)(Grid_default, {
      size: {
        xs: 12,
        sm: 6
      },
      sx: {
        display: "flex"
      },
      children: fieldElement
    }, field);
  }, [formErrors, formValues, handleCheckboxFieldChange, handleDateFieldChange, handleNumberFieldChange, handleSelectFieldChange, handleTextFieldChange, onFieldChange, slotProps, slots]);
  const handleReset = React108.useCallback(async () => {
    if (onReset) {
      await onReset(formValues);
    }
  }, [formValues, onReset]);
  return (0, import_jsx_runtime77.jsxs)(Box_default, {
    component: "form",
    onSubmit: handleSubmit,
    noValidate: true,
    autoComplete: "off",
    onReset: handleReset,
    sx: {
      width: "100%"
    },
    children: [(0, import_jsx_runtime77.jsx)(FormGroup_default, {
      children: (0, import_jsx_runtime77.jsx)(Grid_default, {
        container: true,
        spacing: 2,
        sx: {
          mb: 2,
          width: "100%"
        },
        children: fields.filter(({
          field,
          editable
        }) => field !== "id" && editable !== false).map(renderField)
      })
    }), (0, import_jsx_runtime77.jsx)(Box_default, {
      sx: {
        display: "flex",
        justifyContent: "flex-end"
      },
      children: (0, import_jsx_runtime77.jsx)(Button_default, {
        type: "submit",
        variant: "contained",
        size: "large",
        loading: isSubmitting,
        children: submitButtonLabel
      })
    })]
  });
}
true ? CrudForm.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Server-side [data source](https://mui.com/toolpad/core/react-crud/#data-sources).
   */
  dataSource: import_prop_types32.default.object,
  /**
   * Form state object, including field values and errors.
   */
  formState: import_prop_types32.default.shape({
    errors: import_prop_types32.default.object.isRequired,
    values: import_prop_types32.default.object.isRequired
  }).isRequired,
  /**
   * Callback fired when a form field is changed.
   */
  onFieldChange: import_prop_types32.default.func.isRequired,
  /**
   * Callback fired when the form is reset.
   */
  onReset: import_prop_types32.default.func,
  /**
   * Callback fired when the form is submitted.
   */
  onSubmit: import_prop_types32.default.func.isRequired,
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: import_prop_types32.default.shape({
    checkbox: import_prop_types32.default.object,
    datePicker: import_prop_types32.default.object,
    dateTimePicker: import_prop_types32.default.object,
    select: import_prop_types32.default.object,
    textField: import_prop_types32.default.object
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: import_prop_types32.default.shape({
    checkbox: import_prop_types32.default.elementType,
    datePicker: import_prop_types32.default.elementType,
    dateTimePicker: import_prop_types32.default.elementType,
    select: import_prop_types32.default.elementType,
    textField: import_prop_types32.default.elementType
  }),
  /**
   * Text for form submit button.
   */
  submitButtonLabel: import_prop_types32.default.string.isRequired
} : void 0;

// node_modules/.pnpm/@toolpad+core@0.16.0_d46cabc535141b65151421393ad6a060/node_modules/@toolpad/core/esm/Crud/List.js
var React112 = __toESM(require_react(), 1);
var import_prop_types33 = __toESM(require_prop_types(), 1);

// node_modules/.pnpm/@mui+x-data-grid@8.27.1_@emotion+react@11.14.0_@types+react@19.2.7_react@19.2.3__@emoti_a2d4b4420a1771874663f3ff448f83e8/node_modules/@mui/x-data-grid/esm/hooks/utils/useGridApiRef.js
var React109 = __toESM(require_react(), 1);

// node_modules/.pnpm/@mui+icons-material@7.3.7_@mui+material@7.3.7_@emotion+react@11.14.0_@types+react@19.2._1e6712ae5dd075c3ed43d1d3d27c7f8c/node_modules/@mui/icons-material/esm/Refresh.js
var import_jsx_runtime78 = __toESM(require_jsx_runtime());
var Refresh_default = createSvgIcon((0, import_jsx_runtime78.jsx)("path", {
  d: "M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4z"
}), "Refresh");

// node_modules/.pnpm/@toolpad+core@0.16.0_d46cabc535141b65151421393ad6a060/node_modules/@toolpad/core/esm/Crud/List.js
var import_invariant2 = __toESM(require_browser(), 1);

// node_modules/.pnpm/@toolpad+core@0.16.0_d46cabc535141b65151421393ad6a060/node_modules/@toolpad/core/esm/shared/NoSsr.js
var React110 = __toESM(require_react(), 1);
var import_jsx_runtime79 = __toESM(require_jsx_runtime(), 1);
function NoSsr({
  children,
  fallback = null
}) {
  const isSsr = useSsr();
  return (0, import_jsx_runtime79.jsx)(React110.Fragment, {
    children: isSsr ? fallback : children
  });
}

// node_modules/.pnpm/@toolpad+core@0.16.0_d46cabc535141b65151421393ad6a060/node_modules/@toolpad/core/esm/Crud/useCachedDataSource.js
var React111 = __toESM(require_react(), 1);
function useCachedDataSource(dataSource, cache) {
  return React111.useMemo(() => {
    if (!cache) {
      return dataSource;
    }
    const {
      getMany,
      getOne,
      createOne,
      updateOne,
      deleteOne,
      ...rest
    } = dataSource;
    return {
      ...Object.fromEntries(Object.entries({
        getMany,
        getOne
      }).filter(([_key, method]) => !!method).map(([key, method]) => [key, async (...args) => {
        const cacheKey = JSON.stringify([key, ...args]);
        const cacheValue = cache.get(cacheKey);
        if (cacheValue) {
          return cacheValue;
        }
        const result = await method(...args);
        cache.set(cacheKey, result);
        return result;
      }])),
      ...Object.fromEntries(Object.entries({
        createOne,
        updateOne,
        deleteOne
      }).filter(([_key, method]) => !!method).map(([key, method]) => [key, async (...args) => {
        const result = await method(...args);
        cache.clear();
        return result;
      }])),
      ...rest
    };
  }, [cache, dataSource]);
}

// node_modules/.pnpm/@toolpad+core@0.16.0_d46cabc535141b65151421393ad6a060/node_modules/@toolpad/core/esm/Crud/localeText.js
var CRUD_DEFAULT_LOCALE_TEXT = {
  createNewButtonLabel: "Create new",
  reloadButtonLabel: "Reload data",
  createLabel: "Create",
  createSuccessMessage: "Item created successfully.",
  createErrorMessage: "Failed to create item. Reason:",
  editLabel: "Edit",
  editSuccessMessage: "Item edited successfully.",
  editErrorMessage: "Failed to edit item. Reason:",
  deleteLabel: "Delete",
  deleteConfirmTitle: "Delete item?",
  deleteConfirmMessage: "Do you wish to delete this item?",
  deleteConfirmLabel: "Delete",
  deleteCancelLabel: "Cancel",
  deleteSuccessMessage: "Item deleted successfully.",
  deleteErrorMessage: "Failed to delete item. Reason:",
  deletedItemMessage: "This item has been deleted."
};

// node_modules/.pnpm/@toolpad+core@0.16.0_d46cabc535141b65151421393ad6a060/node_modules/@toolpad/core/esm/Crud/List.js
var import_jsx_runtime80 = __toESM(require_jsx_runtime(), 1);
var _EditIcon;
var _DeleteIcon;
var _RefreshIcon;
var _AddIcon;
function List(props) {
  const {
    initialPageSize = 100,
    onRowClick,
    onCreateClick,
    onEditClick,
    onDelete,
    dataSourceCache,
    pageTitle,
    slots,
    slotProps,
    localeText: propsLocaleText
  } = props;
  const globalLocaleText = useLocaleText();
  const localeText = {
    ...CRUD_DEFAULT_LOCALE_TEXT,
    ...globalLocaleText,
    ...propsLocaleText
  };
  const crudContext = React112.useContext(CrudContext);
  const dataSource = props.dataSource ?? crudContext.dataSource;
  (0, import_invariant2.default)(dataSource, "No data source found.");
  const cache = React112.useMemo(() => {
    const manualCache = dataSourceCache ?? crudContext.dataSourceCache;
    return typeof manualCache !== "undefined" ? manualCache : new DataSourceCache();
  }, [crudContext.dataSourceCache, dataSourceCache]);
  const cachedDataSource = useCachedDataSource(dataSource, cache);
  const {
    fields,
    validate,
    ...methods
  } = cachedDataSource;
  const {
    getMany,
    deleteOne
  } = methods;
  const routerContext = React112.useContext(RouterContext);
  const activePage = useActivePage();
  const dialogs = useDialogs();
  const notifications = useNotifications();
  const [paginationModel, setPaginationModel] = React112.useState({
    page: routerContext?.searchParams.get("page") ? Number(routerContext?.searchParams.get("page")) : 0,
    pageSize: routerContext?.searchParams.get("pageSize") ? Number(routerContext?.searchParams.get("pageSize")) : initialPageSize
  });
  const [filterModel, setFilterModel] = React112.useState(routerContext?.searchParams.get("filter") ? JSON.parse(routerContext?.searchParams.get("filter") ?? "") : {
    items: []
  });
  const [sortModel, setSortModel] = React112.useState(routerContext?.searchParams.get("sort") ? JSON.parse(routerContext?.searchParams.get("sort") ?? "") : []);
  const cachedData = React112.useMemo(() => cache && cache.get(JSON.stringify(["getMany", {
    paginationModel,
    sortModel,
    filterModel
  }])), [cache, filterModel, paginationModel, sortModel]);
  const [rowsState, setRowsState] = React112.useState({
    rows: cachedData?.items ?? [],
    rowCount: cachedData?.itemCount ?? 0
  });
  const [isLoading, setIsLoading] = React112.useState(!cachedData);
  const [error, setError] = React112.useState(null);
  const handlePaginationModelChange = React112.useCallback((model) => {
    setPaginationModel(model);
    if (routerContext) {
      const {
        pathname,
        searchParams,
        navigate
      } = routerContext;
      const writeableSearchParams = new URLSearchParams(searchParams);
      writeableSearchParams.set("page", String(paginationModel.page));
      writeableSearchParams.set("pageSize", String(paginationModel.pageSize));
      const newSearchParamsString = writeableSearchParams.toString();
      navigate(`${pathname}${newSearchParamsString ? "?" : ""}${newSearchParamsString}`);
    }
  }, [paginationModel.page, paginationModel.pageSize, routerContext]);
  const handleFilterModelChange = React112.useCallback((model) => {
    setFilterModel(model);
    if (routerContext) {
      const {
        pathname,
        searchParams,
        navigate
      } = routerContext;
      const writeableSearchParams = new URLSearchParams(searchParams);
      if (filterModel.items.length > 0 || filterModel.quickFilterValues && filterModel.quickFilterValues.length > 0) {
        writeableSearchParams.set("filter", JSON.stringify(filterModel));
      } else {
        writeableSearchParams.delete("filter");
      }
      const newSearchParamsString = writeableSearchParams.toString();
      navigate(`${pathname}${newSearchParamsString ? "?" : ""}${newSearchParamsString}`);
    }
  }, [filterModel, routerContext]);
  const handleSortModelChange = React112.useCallback((model) => {
    setSortModel(model);
    if (routerContext) {
      const {
        pathname,
        searchParams,
        navigate
      } = routerContext;
      const writeableSearchParams = new URLSearchParams(searchParams);
      if (sortModel.length > 0) {
        writeableSearchParams.set("sort", JSON.stringify(sortModel));
      } else {
        writeableSearchParams.delete("sort");
      }
      const newSearchParamsString = writeableSearchParams.toString();
      navigate(`${pathname}${newSearchParamsString ? "?" : ""}${newSearchParamsString}`);
    }
  }, [routerContext, sortModel]);
  const loadData = React112.useCallback(async () => {
    setError(null);
    let listData = cachedData;
    if (!listData) {
      setIsLoading(true);
      try {
        listData = await getMany({
          paginationModel,
          sortModel,
          filterModel
        });
      } catch (listDataError) {
        setError(listDataError);
      }
    }
    if (listData) {
      setRowsState({
        rows: listData.items,
        rowCount: listData.itemCount
      });
    }
    setIsLoading(false);
  }, [cachedData, filterModel, getMany, paginationModel, sortModel]);
  React112.useEffect(() => {
    loadData();
  }, [loadData]);
  const handleRefresh = React112.useCallback(() => {
    if (!isLoading) {
      cache?.clear();
      loadData();
    }
  }, [cache, isLoading, loadData]);
  const handleRowClick = React112.useCallback(({
    row
  }) => {
    if (onRowClick) {
      onRowClick(row.id);
    }
  }, [onRowClick]);
  const handleItemEdit = React112.useCallback((itemId) => () => {
    if (onEditClick) {
      onEditClick(itemId);
    }
  }, [onEditClick]);
  const handleItemDelete = React112.useCallback((itemId) => async () => {
    const confirmed = await dialogs.confirm(localeText.deleteConfirmMessage, {
      title: localeText.deleteConfirmTitle,
      severity: "error",
      okText: localeText.deleteConfirmLabel,
      cancelText: localeText.deleteCancelLabel
    });
    if (confirmed) {
      setIsLoading(true);
      try {
        await deleteOne?.(itemId);
        if (onDelete) {
          onDelete(itemId);
        }
        notifications.show(localeText.deleteSuccessMessage, {
          severity: "success",
          autoHideDuration: 3e3
        });
        loadData();
      } catch (deleteError) {
        notifications.show(`${localeText.deleteErrorMessage} ${deleteError.message}`, {
          severity: "error",
          autoHideDuration: 3e3
        });
      }
      setIsLoading(false);
    }
  }, [deleteOne, dialogs, loadData, localeText.deleteCancelLabel, localeText.deleteConfirmLabel, localeText.deleteConfirmMessage, localeText.deleteConfirmTitle, localeText.deleteErrorMessage, localeText.deleteSuccessMessage, notifications, onDelete]);
  const DataGridSlot = slots?.dataGrid ?? DataGrid;
  const PageContainerSlot = slots?.pageContainer ?? PageContainer;
  const initialState = React112.useMemo(() => ({
    pagination: {
      paginationModel: {
        pageSize: initialPageSize
      }
    }
  }), [initialPageSize]);
  const columns = React112.useMemo(() => {
    const pinnedColumnsOverride = slotProps?.dataGrid?.initialState?.pinnedColumns;
    const isActionsColumnPinned = pinnedColumnsOverride?.left?.includes("actions") || pinnedColumnsOverride?.right?.includes("actions");
    return [...fields.map((field) => ({
      ...field,
      editable: false
    })), {
      field: "actions",
      type: "actions",
      flex: isActionsColumnPinned ? void 0 : 1,
      align: "right",
      getActions: ({
        id
      }) => [...onEditClick ? [(0, import_jsx_runtime80.jsx)(GridActionsCellItem, {
        icon: _EditIcon || (_EditIcon = (0, import_jsx_runtime80.jsx)(Edit_default, {})),
        label: localeText.editLabel,
        onClick: handleItemEdit(id)
      }, "edit-item")] : [], ...deleteOne ? [(0, import_jsx_runtime80.jsx)(GridActionsCellItem, {
        icon: _DeleteIcon || (_DeleteIcon = (0, import_jsx_runtime80.jsx)(Delete_default, {})),
        label: localeText.deleteLabel,
        onClick: handleItemDelete(id)
      }, "delete-item")] : []]
    }];
  }, [deleteOne, fields, handleItemDelete, handleItemEdit, localeText.deleteLabel, localeText.editLabel, onEditClick, slotProps?.dataGrid]);
  return (0, import_jsx_runtime80.jsx)(PageContainerSlot, {
    title: pageTitle,
    breadcrumbs: activePage && pageTitle ? [...activePage.breadcrumbs, {
      title: pageTitle
    }] : void 0,
    ...slotProps?.pageContainer,
    children: (0, import_jsx_runtime80.jsx)(Stack_default, {
      sx: {
        flex: 1,
        width: "100%"
      },
      children: error ? (0, import_jsx_runtime80.jsx)(Box_default, {
        sx: {
          flexGrow: 1
        },
        children: (0, import_jsx_runtime80.jsx)(Alert_default, {
          severity: "error",
          children: error.message
        })
      }) : (0, import_jsx_runtime80.jsxs)(React112.Fragment, {
        children: [(0, import_jsx_runtime80.jsxs)(Stack_default, {
          direction: "row",
          alignItems: "center",
          justifyContent: "space-between",
          sx: {
            mb: 1
          },
          children: [(0, import_jsx_runtime80.jsx)(Tooltip_default, {
            title: localeText.reloadButtonLabel,
            placement: "right",
            enterDelay: 1e3,
            children: (0, import_jsx_runtime80.jsx)("div", {
              children: (0, import_jsx_runtime80.jsx)(IconButton_default, {
                "aria-label": "refresh",
                onClick: handleRefresh,
                children: _RefreshIcon || (_RefreshIcon = (0, import_jsx_runtime80.jsx)(Refresh_default, {}))
              })
            })
          }), onCreateClick ? (0, import_jsx_runtime80.jsx)(Button_default, {
            variant: "contained",
            onClick: onCreateClick,
            startIcon: _AddIcon || (_AddIcon = (0, import_jsx_runtime80.jsx)(Add_default, {})),
            children: localeText.createNewButtonLabel
          }) : null]
        }), (0, import_jsx_runtime80.jsx)(NoSsr, {
          children: (0, import_jsx_runtime80.jsx)(DataGridSlot, {
            rows: rowsState.rows,
            rowCount: rowsState.rowCount,
            columns,
            pagination: true,
            sortingMode: "server",
            filterMode: "server",
            paginationMode: "server",
            paginationModel,
            onPaginationModelChange: handlePaginationModelChange,
            sortModel,
            onSortModelChange: handleSortModelChange,
            filterModel,
            onFilterModelChange: handleFilterModelChange,
            disableRowSelectionOnClick: true,
            onRowClick: handleRowClick,
            loading: isLoading,
            initialState,
            slots: {
              toolbar: GridToolbar
            },
            ...slotProps?.dataGrid,
            sx: {
              [`& .${gridClasses.columnHeader}, & .${gridClasses.cell}`]: {
                outline: "transparent"
              },
              [`& .${gridClasses.columnHeader}:focus-within, & .${gridClasses.cell}:focus-within`]: {
                outline: "none"
              },
              ...onRowClick ? {
                [`& .${gridClasses.row}:hover`]: {
                  cursor: "pointer"
                }
              } : {},
              ...slotProps?.dataGrid?.sx
            }
          })
        })]
      })
    })
  });
}
true ? List.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Server-side [data source](https://mui.com/toolpad/core/react-crud/#data-sources).
   */
  dataSource: import_prop_types33.default.object,
  /**
   * [Cache](https://mui.com/toolpad/core/react-crud/#data-caching) for the data source.
   */
  dataSourceCache: import_prop_types33.default.shape({
    cache: import_prop_types33.default.object.isRequired,
    clear: import_prop_types33.default.func.isRequired,
    get: import_prop_types33.default.func.isRequired,
    set: import_prop_types33.default.func.isRequired,
    ttl: import_prop_types33.default.number.isRequired
  }),
  /**
   * Initial number of rows to show per page.
   * @default 100
   */
  initialPageSize: import_prop_types33.default.number,
  /**
   * Locale text for the component.
   */
  localeText: import_prop_types33.default.object,
  /**
   * Callback fired when the "Create" button is clicked.
   */
  onCreateClick: import_prop_types33.default.func,
  /**
   * Callback fired when the item is successfully deleted.
   */
  onDelete: import_prop_types33.default.func,
  /**
   * Callback fired when the "Edit" button is clicked.
   */
  onEditClick: import_prop_types33.default.func,
  /**
   * Callback fired when a row is clicked. Not called if the target clicked is an interactive element added by the built-in columns.
   */
  onRowClick: import_prop_types33.default.func,
  /**
   * The title of the page.
   */
  pageTitle: import_prop_types33.default.string,
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: import_prop_types33.default.shape({
    dataGrid: import_prop_types33.default.object,
    pageContainer: import_prop_types33.default.object
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: import_prop_types33.default.shape({
    dataGrid: import_prop_types33.default.func,
    pageContainer: import_prop_types33.default.elementType
  })
} : void 0;

// node_modules/.pnpm/@toolpad+core@0.16.0_d46cabc535141b65151421393ad6a060/node_modules/@toolpad/core/esm/Crud/Show.js
var React113 = __toESM(require_react(), 1);
var import_prop_types34 = __toESM(require_prop_types(), 1);
var import_invariant3 = __toESM(require_browser(), 1);
var import_dayjs3 = __toESM(require_dayjs_min(), 1);
var import_jsx_runtime81 = __toESM(require_jsx_runtime(), 1);
var _CircularProgress;
var _EditIcon2;
var _DeleteIcon2;
function Show(props) {
  const {
    id,
    onEditClick,
    onDelete,
    dataSourceCache,
    pageTitle,
    localeText: propsLocaleText,
    slots,
    slotProps
  } = props;
  const globalLocaleText = useLocaleText();
  const localeText = {
    ...CRUD_DEFAULT_LOCALE_TEXT,
    ...globalLocaleText,
    ...propsLocaleText
  };
  const crudContext = React113.useContext(CrudContext);
  const dataSource = props.dataSource ?? crudContext.dataSource;
  (0, import_invariant3.default)(dataSource, "No data source found.");
  const cache = React113.useMemo(() => {
    const manualCache = dataSourceCache ?? crudContext.dataSourceCache;
    return typeof manualCache !== "undefined" ? manualCache : new DataSourceCache();
  }, [crudContext.dataSourceCache, dataSourceCache]);
  const cachedDataSource = useCachedDataSource(dataSource, cache);
  const {
    fields,
    validate,
    ...methods
  } = cachedDataSource;
  const {
    getOne,
    deleteOne
  } = methods;
  const activePage = useActivePage();
  const dialogs = useDialogs();
  const notifications = useNotifications();
  const cachedData = React113.useMemo(() => cache && cache.get(JSON.stringify(["getOne", id])), [cache, id]);
  const [data, setData] = React113.useState(cachedData);
  const [isLoading, setIsLoading] = React113.useState(!cachedData);
  const [error, setError] = React113.useState(null);
  const [hasDeleted, setHasDeleted] = React113.useState(false);
  const loadData = React113.useCallback(async () => {
    setError(null);
    let showData = cachedData;
    if (!showData) {
      setIsLoading(true);
      try {
        showData = await getOne(id);
      } catch (showDataError) {
        setError(showDataError);
      }
    }
    if (showData) {
      setData(showData);
    }
    setIsLoading(false);
  }, [cachedData, getOne, id]);
  React113.useEffect(() => {
    loadData();
  }, [loadData]);
  const handleItemEdit = React113.useCallback(() => {
    if (onEditClick) {
      onEditClick(id);
    }
  }, [id, onEditClick]);
  const handleItemDelete = React113.useCallback(async () => {
    const confirmed = await dialogs.confirm(localeText.deleteConfirmMessage, {
      title: localeText.deleteConfirmTitle,
      severity: "error",
      okText: localeText.deleteConfirmLabel,
      cancelText: localeText.deleteCancelLabel
    });
    if (confirmed) {
      setIsLoading(true);
      try {
        await deleteOne?.(id);
        if (onDelete) {
          onDelete(id);
        }
        notifications.show(localeText.deleteSuccessMessage, {
          severity: "success",
          autoHideDuration: 3e3
        });
        setHasDeleted(true);
      } catch (deleteError) {
        notifications.show(`${localeText.deleteErrorMessage} ${deleteError.message}`, {
          severity: "error",
          autoHideDuration: 3e3
        });
      }
      setIsLoading(false);
    }
  }, [deleteOne, dialogs, id, localeText.deleteCancelLabel, localeText.deleteConfirmLabel, localeText.deleteConfirmMessage, localeText.deleteConfirmTitle, localeText.deleteErrorMessage, localeText.deleteSuccessMessage, notifications, onDelete]);
  const renderField = React113.useCallback((showField) => {
    if (!data) {
      return "…";
    }
    const {
      field,
      type,
      valueFormatter
    } = showField;
    const fieldValue = data[field];
    if (valueFormatter) {
      return valueFormatter(fieldValue, data, showField);
    }
    if (type === "boolean") {
      return fieldValue ? "Yes" : "No";
    }
    if (type === "date") {
      return fieldValue ? (0, import_dayjs3.default)(fieldValue).format("MMMM D, YYYY") : "-";
    }
    if (type === "dateTime") {
      return fieldValue ? (0, import_dayjs3.default)(fieldValue).format("MMMM D, YYYY h:mm A") : "-";
    }
    if (type === "singleSelect") {
      const {
        getOptionValue,
        getOptionLabel,
        valueOptions
      } = showField;
      if (valueOptions && Array.isArray(valueOptions)) {
        const selectedOption = valueOptions.find((option) => {
          let optionValue = option;
          if (typeof option !== "string" && typeof option !== "number") {
            optionValue = getOptionValue ? getOptionValue(option) : option.value;
          }
          return optionValue === fieldValue;
        });
        if (selectedOption) {
          let selectedOptionLabel = selectedOption;
          if (typeof selectedOption !== "string" && typeof selectedOption !== "number") {
            selectedOptionLabel = getOptionLabel ? getOptionLabel(selectedOption) : selectedOption.label;
          }
          return selectedOptionLabel ? String(selectedOptionLabel) : "-";
        }
      }
    }
    return fieldValue ? String(fieldValue) : "-";
  }, [data]);
  const renderShow = React113.useMemo(() => {
    if (isLoading) {
      return (0, import_jsx_runtime81.jsx)(Box_default, {
        sx: {
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          m: 1
        },
        children: _CircularProgress || (_CircularProgress = (0, import_jsx_runtime81.jsx)(CircularProgress_default, {}))
      });
    }
    if (error) {
      return (0, import_jsx_runtime81.jsx)(Box_default, {
        sx: {
          flexGrow: 1
        },
        children: (0, import_jsx_runtime81.jsx)(Alert_default, {
          severity: "error",
          children: error.message
        })
      });
    }
    if (hasDeleted) {
      return (0, import_jsx_runtime81.jsx)(Box_default, {
        sx: {
          flexGrow: 1
        },
        children: (0, import_jsx_runtime81.jsx)(Alert_default, {
          severity: "error",
          children: localeText.deletedItemMessage
        })
      });
    }
    return data ? (0, import_jsx_runtime81.jsxs)(Box_default, {
      sx: {
        flexGrow: 1,
        width: "100%"
      },
      children: [(0, import_jsx_runtime81.jsx)(Grid_default, {
        container: true,
        spacing: 2,
        sx: {
          width: "100%"
        },
        children: fields.filter(({
          type
        }) => type !== "actions" && type !== "custom").map((showField) => {
          const {
            field,
            headerName
          } = showField;
          const renderedField = renderField(showField);
          return (0, import_jsx_runtime81.jsx)(Grid_default, {
            size: {
              xs: 12,
              sm: 6
            },
            children: (0, import_jsx_runtime81.jsxs)(Paper_default, {
              sx: {
                px: 2,
                py: 1
              },
              children: [(0, import_jsx_runtime81.jsx)(Typography_default, {
                variant: "overline",
                children: headerName
              }), (0, import_jsx_runtime81.jsx)(Typography_default, {
                variant: "body1",
                sx: {
                  mb: 1
                },
                children: renderedField && (!Array.isArray(renderedField) || renderedField.length > 0) ? renderedField : "-"
              })]
            })
          }, field);
        })
      }), (0, import_jsx_runtime81.jsx)(Divider_default, {
        sx: {
          my: 3
        }
      }), (0, import_jsx_runtime81.jsxs)(Stack_default, {
        direction: "row",
        spacing: 2,
        justifyContent: "flex-end",
        children: [onEditClick ? (0, import_jsx_runtime81.jsx)(Button_default, {
          variant: "contained",
          startIcon: _EditIcon2 || (_EditIcon2 = (0, import_jsx_runtime81.jsx)(Edit_default, {})),
          onClick: handleItemEdit,
          children: localeText.editLabel
        }) : null, deleteOne ? (0, import_jsx_runtime81.jsx)(Button_default, {
          variant: "contained",
          color: "error",
          startIcon: _DeleteIcon2 || (_DeleteIcon2 = (0, import_jsx_runtime81.jsx)(Delete_default, {})),
          onClick: handleItemDelete,
          children: localeText.deleteLabel
        }) : null]
      })]
    }) : null;
  }, [data, deleteOne, error, fields, handleItemDelete, handleItemEdit, hasDeleted, isLoading, localeText.deleteLabel, localeText.deletedItemMessage, localeText.editLabel, onEditClick, renderField]);
  const PageContainerSlot = slots?.pageContainer ?? PageContainer;
  return (0, import_jsx_runtime81.jsx)(PageContainerSlot, {
    title: pageTitle,
    breadcrumbs: activePage && pageTitle ? [...activePage.breadcrumbs, {
      title: pageTitle
    }] : void 0,
    ...slotProps?.pageContainer,
    children: (0, import_jsx_runtime81.jsx)(Box_default, {
      sx: {
        display: "flex",
        flex: 1,
        width: "100%"
      },
      children: renderShow
    })
  });
}
true ? Show.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Server-side [data source](https://mui.com/toolpad/core/react-crud/#data-sources).
   */
  dataSource: import_prop_types34.default.object,
  /**
   * [Cache](https://mui.com/toolpad/core/react-crud/#data-caching) for the data source.
   */
  dataSourceCache: import_prop_types34.default.shape({
    cache: import_prop_types34.default.object.isRequired,
    clear: import_prop_types34.default.func.isRequired,
    get: import_prop_types34.default.func.isRequired,
    set: import_prop_types34.default.func.isRequired,
    ttl: import_prop_types34.default.number.isRequired
  }),
  /**
   * @ignore
   */
  id: import_prop_types34.default.oneOfType([import_prop_types34.default.number, import_prop_types34.default.string]).isRequired,
  /**
   * Locale text for the component.
   */
  localeText: import_prop_types34.default.object,
  /**
   * Callback fired when the item is successfully deleted.
   */
  onDelete: import_prop_types34.default.func,
  /**
   * Callback fired when the "Edit" button is clicked.
   */
  onEditClick: import_prop_types34.default.func,
  /**
   * The title of the page.
   */
  pageTitle: import_prop_types34.default.string,
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: import_prop_types34.default.shape({
    pageContainer: import_prop_types34.default.object
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: import_prop_types34.default.shape({
    pageContainer: import_prop_types34.default.elementType
  })
} : void 0;

// node_modules/.pnpm/@toolpad+core@0.16.0_d46cabc535141b65151421393ad6a060/node_modules/@toolpad/core/esm/Crud/Create.js
var React114 = __toESM(require_react(), 1);
var import_prop_types35 = __toESM(require_prop_types(), 1);
var import_invariant4 = __toESM(require_browser(), 1);
var import_jsx_runtime82 = __toESM(require_jsx_runtime(), 1);
function Create(props) {
  const {
    initialValues = {},
    onSubmitSuccess,
    resetOnSubmit = false,
    dataSourceCache,
    pageTitle,
    localeText: propsLocaleText,
    slots,
    slotProps
  } = props;
  const globalLocaleText = useLocaleText();
  const localeText = {
    ...CRUD_DEFAULT_LOCALE_TEXT,
    ...globalLocaleText,
    ...propsLocaleText
  };
  const crudContext = React114.useContext(CrudContext);
  const dataSource = props.dataSource ?? crudContext.dataSource;
  const notifications = useNotifications();
  (0, import_invariant4.default)(dataSource, "No data source found.");
  const cache = React114.useMemo(() => {
    const manualCache = dataSourceCache ?? crudContext.dataSourceCache;
    return typeof manualCache !== "undefined" ? manualCache : new DataSourceCache();
  }, [crudContext.dataSourceCache, dataSourceCache]);
  const cachedDataSource = useCachedDataSource(dataSource, cache);
  const {
    fields,
    createOne,
    validate
  } = cachedDataSource;
  const activePage = useActivePage();
  const [formState, setFormState] = React114.useState(() => ({
    values: {
      ...Object.fromEntries(fields.filter(({
        field,
        editable
      }) => field !== "id" && editable !== false).map(({
        field,
        type
      }) => [field, type === "boolean" ? initialValues[field] ?? false : initialValues[field]])),
      ...initialValues
    },
    errors: {}
  }));
  const formValues = formState.values;
  const formErrors = formState.errors;
  const setFormValues = React114.useCallback((newFormValues) => {
    setFormState((previousState) => ({
      ...previousState,
      values: newFormValues
    }));
  }, []);
  const setFormErrors = React114.useCallback((newFormErrors) => {
    setFormState((previousState) => ({
      ...previousState,
      errors: newFormErrors
    }));
  }, []);
  const handleFormFieldChange = React114.useCallback((name, value) => {
    const validateField = async (values) => {
      if (validate) {
        const {
          issues
        } = await validate(values);
        setFormErrors({
          ...formErrors,
          [name]: issues?.find((issue) => issue.path?.[0] === name)?.message
        });
      }
    };
    const newFormValues = {
      ...formValues,
      [name]: value
    };
    setFormValues(newFormValues);
    validateField(newFormValues);
  }, [formErrors, formValues, setFormErrors, setFormValues, validate]);
  const handleFormReset = React114.useCallback(() => {
    setFormValues(initialValues);
  }, [initialValues, setFormValues]);
  const handleFormSubmit = React114.useCallback(async () => {
    if (validate) {
      const {
        issues
      } = await validate(formValues);
      if (issues && issues.length > 0) {
        setFormErrors(Object.fromEntries(issues.map((issue) => [issue.path?.[0], issue.message])));
        throw new Error("Form validation failed");
      }
    }
    setFormErrors({});
    try {
      await createOne(formValues);
      notifications.show(localeText.createSuccessMessage, {
        severity: "success",
        autoHideDuration: 3e3
      });
      if (onSubmitSuccess) {
        await onSubmitSuccess(formValues);
      }
      if (resetOnSubmit) {
        handleFormReset();
      }
    } catch (createError) {
      notifications.show(`${localeText.createErrorMessage} ${createError.message}`, {
        severity: "error",
        autoHideDuration: 3e3
      });
      throw createError;
    }
  }, [createOne, formValues, handleFormReset, localeText.createErrorMessage, localeText.createSuccessMessage, notifications, onSubmitSuccess, resetOnSubmit, setFormErrors, validate]);
  const PageContainerSlot = slots?.pageContainer ?? PageContainer;
  return (0, import_jsx_runtime82.jsx)(PageContainerSlot, {
    title: pageTitle,
    breadcrumbs: activePage && pageTitle ? [...activePage.breadcrumbs, {
      title: pageTitle
    }] : void 0,
    ...slotProps?.pageContainer,
    children: (0, import_jsx_runtime82.jsx)(CrudForm, {
      dataSource,
      formState,
      onFieldChange: handleFormFieldChange,
      onSubmit: handleFormSubmit,
      onReset: handleFormReset,
      submitButtonLabel: localeText.createLabel,
      slots: slots?.form,
      slotProps: slotProps?.form
    })
  });
}
true ? Create.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Server-side [data source](https://mui.com/toolpad/core/react-crud/#data-sources).
   */
  dataSource: import_prop_types35.default.object,
  /**
   * [Cache](https://mui.com/toolpad/core/react-crud/#data-caching) for the data source.
   */
  dataSourceCache: import_prop_types35.default.shape({
    cache: import_prop_types35.default.object.isRequired,
    clear: import_prop_types35.default.func.isRequired,
    get: import_prop_types35.default.func.isRequired,
    set: import_prop_types35.default.func.isRequired,
    ttl: import_prop_types35.default.number.isRequired
  }),
  /**
   * Initial form values.
   * @default {}
   */
  initialValues: import_prop_types35.default.object,
  /**
   * Locale text for the component.
   */
  localeText: import_prop_types35.default.object,
  /**
   * Callback fired when the form is successfully submitted.
   */
  onSubmitSuccess: import_prop_types35.default.func,
  /**
   * The title of the page.
   */
  pageTitle: import_prop_types35.default.string,
  /**
   * Whether the form fields should reset after the form is submitted.
   * @default false
   */
  resetOnSubmit: import_prop_types35.default.bool,
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: import_prop_types35.default.shape({
    form: import_prop_types35.default.shape({
      checkbox: import_prop_types35.default.object,
      datePicker: import_prop_types35.default.object,
      dateTimePicker: import_prop_types35.default.object,
      select: import_prop_types35.default.object,
      textField: import_prop_types35.default.object
    }),
    pageContainer: import_prop_types35.default.object
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: import_prop_types35.default.shape({
    form: import_prop_types35.default.shape({
      checkbox: import_prop_types35.default.elementType,
      datePicker: import_prop_types35.default.elementType,
      dateTimePicker: import_prop_types35.default.elementType,
      select: import_prop_types35.default.elementType,
      textField: import_prop_types35.default.elementType
    }),
    pageContainer: import_prop_types35.default.elementType
  })
} : void 0;

// node_modules/.pnpm/@toolpad+core@0.16.0_d46cabc535141b65151421393ad6a060/node_modules/@toolpad/core/esm/Crud/Edit.js
var React115 = __toESM(require_react(), 1);
var import_prop_types36 = __toESM(require_prop_types(), 1);
var import_invariant5 = __toESM(require_browser(), 1);
var import_jsx_runtime83 = __toESM(require_jsx_runtime(), 1);
var _CircularProgress2;
function EditForm(props) {
  const {
    dataSource,
    initialValues,
    onSubmit,
    onSubmitSuccess,
    localeText,
    slots,
    slotProps
  } = props;
  const {
    fields,
    validate
  } = dataSource;
  const notifications = useNotifications();
  const [formState, setFormState] = React115.useState({
    values: {
      ...Object.fromEntries(fields.filter(({
        field,
        editable
      }) => field !== "id" && editable !== false).map(({
        field,
        type
      }) => [field, type === "boolean" ? initialValues[field] ?? false : initialValues[field]])),
      ...initialValues
    },
    errors: {}
  });
  const formValues = formState.values;
  const formErrors = formState.errors;
  const setFormValues = React115.useCallback((newFormValues) => {
    setFormState((previousState) => ({
      ...previousState,
      values: newFormValues
    }));
  }, []);
  const setFormErrors = React115.useCallback((newFormErrors) => {
    setFormState((previousState) => ({
      ...previousState,
      errors: newFormErrors
    }));
  }, []);
  const handleFormFieldChange = React115.useCallback((name, value) => {
    const validateField = async (values) => {
      if (validate) {
        const {
          issues
        } = await validate(values);
        setFormErrors({
          ...formErrors,
          [name]: issues?.find((issue) => issue.path?.[0] === name)?.message
        });
      }
    };
    const newFormValues = {
      ...formValues,
      [name]: value
    };
    setFormValues(newFormValues);
    validateField(newFormValues);
  }, [formErrors, formValues, setFormErrors, setFormValues, validate]);
  const handleFormReset = React115.useCallback(() => {
    setFormValues(initialValues);
  }, [initialValues, setFormValues]);
  const handleFormSubmit = React115.useCallback(async () => {
    if (validate) {
      const {
        issues
      } = await validate(formValues);
      if (issues && issues.length > 0) {
        setFormErrors(Object.fromEntries(issues.map((issue) => [issue.path?.[0], issue.message])));
        throw new Error("Form validation failed");
      }
    }
    setFormErrors({});
    try {
      await onSubmit(formValues);
      notifications.show(localeText.editSuccessMessage, {
        severity: "success",
        autoHideDuration: 3e3
      });
      if (onSubmitSuccess) {
        await onSubmitSuccess(formValues);
      }
    } catch (editError) {
      notifications.show(`${localeText.editErrorMessage} ${editError.message}`, {
        severity: "error",
        autoHideDuration: 3e3
      });
      throw editError;
    }
  }, [formValues, localeText.editErrorMessage, localeText.editSuccessMessage, notifications, onSubmit, onSubmitSuccess, setFormErrors, validate]);
  return (0, import_jsx_runtime83.jsx)(CrudForm, {
    dataSource,
    formState,
    onFieldChange: handleFormFieldChange,
    onSubmit: handleFormSubmit,
    onReset: handleFormReset,
    submitButtonLabel: localeText.editLabel,
    slots: slots?.form,
    slotProps: slotProps?.form
  });
}
true ? EditForm.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  dataSource: import_prop_types36.default.object.isRequired,
  initialValues: import_prop_types36.default.object.isRequired,
  localeText: import_prop_types36.default.object.isRequired,
  onSubmit: import_prop_types36.default.func.isRequired,
  onSubmitSuccess: import_prop_types36.default.func,
  slotProps: import_prop_types36.default.shape({
    form: import_prop_types36.default.shape({
      checkbox: import_prop_types36.default.object,
      datePicker: import_prop_types36.default.object,
      dateTimePicker: import_prop_types36.default.object,
      select: import_prop_types36.default.object,
      textField: import_prop_types36.default.object
    })
  }),
  slots: import_prop_types36.default.shape({
    form: import_prop_types36.default.shape({
      checkbox: import_prop_types36.default.elementType,
      datePicker: import_prop_types36.default.elementType,
      dateTimePicker: import_prop_types36.default.elementType,
      select: import_prop_types36.default.elementType,
      textField: import_prop_types36.default.elementType
    })
  })
} : void 0;
function Edit(props) {
  const {
    id,
    onSubmitSuccess,
    dataSourceCache,
    pageTitle,
    localeText: propsLocaleText,
    slots,
    slotProps
  } = props;
  const globalLocaleText = useLocaleText();
  const crudContext = React115.useContext(CrudContext);
  const dataSource = props.dataSource ?? crudContext.dataSource;
  (0, import_invariant5.default)(dataSource, "No data source found.");
  const cache = React115.useMemo(() => {
    const manualCache = dataSourceCache ?? crudContext.dataSourceCache;
    return typeof manualCache !== "undefined" ? manualCache : new DataSourceCache();
  }, [crudContext.dataSourceCache, dataSourceCache]);
  const cachedDataSource = useCachedDataSource(dataSource, cache);
  const {
    fields,
    validate,
    ...methods
  } = cachedDataSource;
  const {
    getOne,
    updateOne
  } = methods;
  const activePage = useActivePage();
  const cachedData = React115.useMemo(() => cache && cache.get(JSON.stringify(["getOne", id])), [cache, id]);
  const [data, setData] = React115.useState(cachedData);
  const [isLoading, setIsLoading] = React115.useState(!cachedData);
  const [error, setError] = React115.useState(null);
  const loadData = React115.useCallback(async () => {
    setError(null);
    let showData = cachedData;
    if (!showData) {
      setIsLoading(true);
      try {
        showData = await getOne(id);
      } catch (showDataError) {
        setError(showDataError);
      }
    }
    if (showData) {
      setData(showData);
    }
    setIsLoading(false);
  }, [cachedData, getOne, id]);
  React115.useEffect(() => {
    loadData();
  }, [loadData]);
  const handleSubmit = React115.useCallback(async (formValues) => {
    const updatedData = await updateOne(id, formValues);
    setData(updatedData);
  }, [id, updateOne]);
  const renderEdit = React115.useMemo(() => {
    if (isLoading) {
      return (0, import_jsx_runtime83.jsx)(Box_default, {
        sx: {
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          m: 1
        },
        children: _CircularProgress2 || (_CircularProgress2 = (0, import_jsx_runtime83.jsx)(CircularProgress_default, {}))
      });
    }
    if (error) {
      return (0, import_jsx_runtime83.jsx)(Box_default, {
        sx: {
          flexGrow: 1
        },
        children: (0, import_jsx_runtime83.jsx)(Alert_default, {
          severity: "error",
          children: error.message
        })
      });
    }
    const localeText = {
      ...CRUD_DEFAULT_LOCALE_TEXT,
      ...globalLocaleText,
      ...propsLocaleText
    };
    return data ? (0, import_jsx_runtime83.jsx)(EditForm, {
      dataSource,
      initialValues: data,
      onSubmit: handleSubmit,
      onSubmitSuccess,
      localeText,
      slots,
      slotProps
    }) : null;
  }, [data, dataSource, error, globalLocaleText, handleSubmit, isLoading, onSubmitSuccess, propsLocaleText, slotProps, slots]);
  const PageContainerSlot = slots?.pageContainer ?? PageContainer;
  return (0, import_jsx_runtime83.jsx)(PageContainerSlot, {
    title: pageTitle,
    breadcrumbs: activePage && pageTitle ? [...activePage.breadcrumbs, {
      title: pageTitle
    }] : void 0,
    ...slotProps?.pageContainer,
    children: (0, import_jsx_runtime83.jsx)(Box_default, {
      sx: {
        display: "flex",
        flex: 1
      },
      children: renderEdit
    })
  });
}
true ? Edit.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Server-side [data source](https://mui.com/toolpad/core/react-crud/#data-sources).
   */
  dataSource: import_prop_types36.default.object,
  /**
   * [Cache](https://mui.com/toolpad/core/react-crud/#data-caching) for the data source.
   */
  dataSourceCache: import_prop_types36.default.shape({
    cache: import_prop_types36.default.object.isRequired,
    clear: import_prop_types36.default.func.isRequired,
    get: import_prop_types36.default.func.isRequired,
    set: import_prop_types36.default.func.isRequired,
    ttl: import_prop_types36.default.number.isRequired
  }),
  /**
   * @ignore
   */
  id: import_prop_types36.default.oneOfType([import_prop_types36.default.number, import_prop_types36.default.string]).isRequired,
  /**
   * Locale text for the component.
   */
  localeText: import_prop_types36.default.object,
  /**
   * Callback fired when the form is successfully submitted.
   */
  onSubmitSuccess: import_prop_types36.default.func,
  /**
   * The title of the page.
   */
  pageTitle: import_prop_types36.default.string,
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: import_prop_types36.default.shape({
    form: import_prop_types36.default.shape({
      checkbox: import_prop_types36.default.object,
      datePicker: import_prop_types36.default.object,
      dateTimePicker: import_prop_types36.default.object,
      select: import_prop_types36.default.object,
      textField: import_prop_types36.default.object
    }),
    pageContainer: import_prop_types36.default.object
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: import_prop_types36.default.shape({
    form: import_prop_types36.default.shape({
      checkbox: import_prop_types36.default.elementType,
      datePicker: import_prop_types36.default.elementType,
      dateTimePicker: import_prop_types36.default.elementType,
      select: import_prop_types36.default.elementType,
      textField: import_prop_types36.default.elementType
    }),
    pageContainer: import_prop_types36.default.elementType
  })
} : void 0;

// node_modules/.pnpm/@toolpad+core@0.16.0_d46cabc535141b65151421393ad6a060/node_modules/@toolpad/core/esm/Crud/CrudProvider.js
var React116 = __toESM(require_react(), 1);
var import_prop_types37 = __toESM(require_prop_types(), 1);
var import_jsx_runtime84 = __toESM(require_jsx_runtime(), 1);
function CrudProvider(props) {
  const {
    dataSource,
    dataSourceCache,
    children
  } = props;
  const cache = React116.useMemo(() => typeof dataSourceCache !== "undefined" ? dataSourceCache : new DataSourceCache(), [dataSourceCache]);
  return (0, import_jsx_runtime84.jsx)(CrudContext, {
    value: {
      dataSource,
      dataSourceCache: cache
    },
    children
  });
}
true ? CrudProvider.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * @ignore
   */
  children: import_prop_types37.default.node,
  /**
   * Server-side [data source](https://mui.com/toolpad/core/react-crud/#data-sources).
   */
  dataSource: import_prop_types37.default.object.isRequired,
  /**
   * [Cache](https://mui.com/toolpad/core/react-crud/#data-caching) for the data source.
   */
  dataSourceCache: import_prop_types37.default.shape({
    cache: import_prop_types37.default.object.isRequired,
    clear: import_prop_types37.default.func.isRequired,
    get: import_prop_types37.default.func.isRequired,
    set: import_prop_types37.default.func.isRequired,
    ttl: import_prop_types37.default.number.isRequired
  })
} : void 0;

// node_modules/.pnpm/@toolpad+core@0.16.0_d46cabc535141b65151421393ad6a060/node_modules/@toolpad/core/esm/Crud/Crud.js
var React117 = __toESM(require_react(), 1);
var import_prop_types38 = __toESM(require_prop_types(), 1);
var import_invariant6 = __toESM(require_browser(), 1);
var import_jsx_runtime85 = __toESM(require_jsx_runtime(), 1);
function Crud(props) {
  const {
    dataSource,
    rootPath,
    initialPageSize,
    defaultValues,
    dataSourceCache,
    pageTitles,
    slots,
    slotProps
  } = props;
  const listPath = rootPath;
  const showPath = `${rootPath}/:id`;
  const createPath = `${rootPath}/new`;
  const editPath = `${rootPath}/:id/edit`;
  const routerContext = React117.useContext(RouterContext);
  const handleRowClick = React117.useCallback((id) => {
    routerContext?.navigate(`${rootPath}/${String(id)}`);
  }, [rootPath, routerContext]);
  const handleCreateClick = React117.useCallback(() => {
    routerContext?.navigate(createPath);
  }, [createPath, routerContext]);
  const handleEditClick = React117.useCallback((id) => {
    routerContext?.navigate(`${rootPath}/${String(id)}/edit`);
  }, [rootPath, routerContext]);
  const handleCreate = React117.useCallback(() => {
    routerContext?.navigate(listPath);
  }, [listPath, routerContext]);
  const handleEdit = React117.useCallback(() => {
    routerContext?.navigate(listPath);
  }, [listPath, routerContext]);
  const handleDelete = React117.useCallback(() => {
    routerContext?.navigate(listPath);
  }, [listPath, routerContext]);
  const renderedRoute = React117.useMemo(() => {
    const pathname = routerContext?.pathname ?? "";
    if (match(listPath)(pathname)) {
      return (0, import_jsx_runtime85.jsx)(List, {
        initialPageSize,
        onRowClick: handleRowClick,
        onCreateClick: handleCreateClick,
        onEditClick: handleEditClick,
        pageTitle: pageTitles?.list,
        slots: {
          ...slots?.pageContainer ? {
            pageContainer: slots?.pageContainer
          } : {},
          ...slots?.list
        },
        slotProps: {
          ...slotProps?.pageContainer ? {
            pageContainer: slotProps?.pageContainer
          } : {},
          ...slotProps?.list
        }
      });
    }
    if (match(createPath)(pathname)) {
      return (0, import_jsx_runtime85.jsx)(Create, {
        initialValues: defaultValues,
        onSubmitSuccess: handleCreate,
        resetOnSubmit: false,
        pageTitle: pageTitles?.create,
        slots: {
          ...slots?.form ? {
            form: slots?.form
          } : {},
          ...slots?.pageContainer ? {
            pageContainer: slots?.pageContainer
          } : {}
        },
        slotProps: {
          ...slotProps?.form ? {
            form: slotProps?.form
          } : {},
          ...slotProps?.pageContainer ? {
            pageContainer: slotProps?.pageContainer
          } : {}
        }
      });
    }
    const showMatch = match(showPath)(pathname);
    if (showMatch) {
      const resourceId = showMatch.params.id;
      (0, import_invariant6.default)(resourceId, "No resource ID present in URL.");
      return (0, import_jsx_runtime85.jsx)(Show, {
        id: resourceId,
        onEditClick: handleEditClick,
        onDelete: handleDelete,
        pageTitle: pageTitles?.show,
        slots: {
          ...slots?.pageContainer ? {
            pageContainer: slots?.pageContainer
          } : {}
        },
        slotProps: {
          ...slotProps?.pageContainer ? {
            pageContainer: slotProps?.pageContainer
          } : {}
        }
      });
    }
    const editMatch = match(editPath)(pathname);
    if (editMatch) {
      const resourceId = editMatch.params.id;
      (0, import_invariant6.default)(resourceId, "No resource ID present in URL.");
      return (0, import_jsx_runtime85.jsx)(Edit, {
        id: resourceId,
        onSubmitSuccess: handleEdit,
        pageTitle: pageTitles?.edit,
        slots: {
          ...slots?.form ? {
            form: slots?.form
          } : {},
          ...slots?.pageContainer ? {
            pageContainer: slots?.pageContainer
          } : {}
        },
        slotProps: {
          ...slotProps?.form ? {
            form: slotProps?.form
          } : {},
          ...slotProps?.pageContainer ? {
            pageContainer: slotProps?.pageContainer
          } : {}
        }
      });
    }
    return null;
  }, [createPath, defaultValues, editPath, handleCreate, handleCreateClick, handleDelete, handleEdit, handleEditClick, handleRowClick, initialPageSize, listPath, pageTitles, routerContext?.pathname, showPath, slotProps, slots]);
  return (0, import_jsx_runtime85.jsx)(CrudProvider, {
    dataSource,
    dataSourceCache,
    children: renderedRoute
  });
}
true ? Crud.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Server-side [data source](https://mui.com/toolpad/core/react-crud/#data-sources).
   */
  dataSource: import_prop_types38.default.object.isRequired,
  /**
   * [Cache](https://mui.com/toolpad/core/react-crud/#data-caching) for the data source.
   */
  dataSourceCache: import_prop_types38.default.shape({
    cache: import_prop_types38.default.object.isRequired,
    clear: import_prop_types38.default.func.isRequired,
    get: import_prop_types38.default.func.isRequired,
    set: import_prop_types38.default.func.isRequired,
    ttl: import_prop_types38.default.number.isRequired
  }),
  /**
   * Default form values for a new item.
   * @default {}
   */
  defaultValues: import_prop_types38.default.object,
  /**
   * Initial number of rows to show per page.
   * @default 100
   */
  initialPageSize: import_prop_types38.default.number,
  /**
   * The title of each CRUD page.
   */
  pageTitles: import_prop_types38.default.shape({
    create: import_prop_types38.default.string,
    edit: import_prop_types38.default.string,
    list: import_prop_types38.default.string,
    show: import_prop_types38.default.string
  }),
  /**
   * Root path to CRUD pages.
   */
  rootPath: import_prop_types38.default.string.isRequired,
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: import_prop_types38.default.shape({
    form: import_prop_types38.default.shape({
      checkbox: import_prop_types38.default.object,
      datePicker: import_prop_types38.default.object,
      dateTimePicker: import_prop_types38.default.object,
      select: import_prop_types38.default.object,
      textField: import_prop_types38.default.object
    }),
    list: import_prop_types38.default.shape({
      dataGrid: import_prop_types38.default.object,
      pageContainer: import_prop_types38.default.object
    }),
    pageContainer: import_prop_types38.default.object
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: import_prop_types38.default.shape({
    form: import_prop_types38.default.shape({
      checkbox: import_prop_types38.default.elementType,
      datePicker: import_prop_types38.default.elementType,
      dateTimePicker: import_prop_types38.default.elementType,
      select: import_prop_types38.default.elementType,
      textField: import_prop_types38.default.elementType
    }),
    list: import_prop_types38.default.shape({
      dataGrid: import_prop_types38.default.func,
      pageContainer: import_prop_types38.default.elementType
    }),
    pageContainer: import_prop_types38.default.elementType
  })
} : void 0;

// node_modules/.pnpm/@toolpad+core@0.16.0_d46cabc535141b65151421393ad6a060/node_modules/@toolpad/core/esm/useNavigation/useNavigation.js
var React118 = __toESM(require_react(), 1);
function useNavigation() {
  return React118.useContext(NavigationContext);
}

// node_modules/.pnpm/@toolpad+core@0.16.0_d46cabc535141b65151421393ad6a060/node_modules/@toolpad/core/esm/useSession/useSession.js
var React119 = __toESM(require_react(), 1);
function useSession() {
  const session = React119.useContext(SessionContext);
  return session;
}

// node_modules/.pnpm/@toolpad+core@0.16.0_d46cabc535141b65151421393ad6a060/node_modules/@toolpad/core/esm/useSessionStorageState/useSessionStorageState.js
var useSessionStorageStateBrowser = (...args) => useStorageState(window.sessionStorage, ...args);
var useSessionStorageState = typeof window === "undefined" ? useStorageStateServer : useSessionStorageStateBrowser;
export {
  Account,
  AccountPopoverFooter,
  AccountPopoverHeader,
  AccountPreview,
  AlertDialog,
  AppProvider,
  AuthenticationContext,
  CODEC_DATE,
  CODEC_DATE_ONLY,
  CODEC_JSON,
  CODEC_JSON_STRICT,
  CODEC_NUMBER,
  CODEC_STRING,
  CODE_BOOLEAN,
  ConfirmDialog,
  Create,
  Crud,
  CrudForm,
  CrudProvider,
  DashboardHeader,
  DashboardLayout,
  DashboardSidebarPageItem,
  DataSourceCache,
  DialogsProvider,
  Edit,
  List,
  LocalizationContext,
  LocalizationProvider,
  NotificationsProvider,
  PageContainer,
  PageHeader,
  PageHeaderToolbar,
  PromptDialog,
  SessionContext,
  Show,
  SignInButton,
  SignInPage,
  SignOutButton,
  ThemeSwitcher,
  ToolbarActions,
  en_default as en,
  hiIN_default as hiIN,
  useActivePage,
  useDialogs,
  useLocalStorageState,
  useLocaleText,
  useNavigation,
  useNotifications,
  useSession,
  useSessionStorageState
};
//# sourceMappingURL=@toolpad_core.js.map
