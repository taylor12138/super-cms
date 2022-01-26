import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
const DATA_TIME_FORMAT = 'YYYY-MM-DD HH:mm:ss'

dayjs.extend(utc)

// 安装轻量级时间转换库：dayjs
export function formatUtcTime(
  utcString: string,
  format: string = DATA_TIME_FORMAT
) {
  // 东八区,+8
  return dayjs.utc(utcString).utcOffset(8).format(format)
}
