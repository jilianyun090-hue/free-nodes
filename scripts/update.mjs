import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const source = 'https://raw.githubusercontent.com/free18/v2ray/refs/heads/main';
const files = [
  { name: 'v.txt', url: `${source}/v.txt` },
  { name: 'c.yaml', url: `${source}/c.yaml` },
];

async function download({ name, url }) {
  const response = await fetch(url, { signal: AbortSignal.timeout(30_000) });
  if (!response.ok) throw new Error(`${name}: HTTP ${response.status}`);
  const content = await response.text();
  if (!content || content.length > 5_000_000) throw new Error(`${name}: 文件为空或过大`);
  return content;
}

function countLinks(content) {
  const base64 = content.replace(/\s/g, '');
  if (!/^[A-Za-z0-9+/]+={0,2}$/.test(base64) || base64.length % 4 !== 0) {
    throw new Error('v.txt: 不是有效的 Base64 订阅');
  }
  const decoded = new TextDecoder('utf-8', { fatal: true }).decode(Buffer.from(base64, 'base64'));
  const count = decoded.split(/\r?\n/).filter((line) => /^(ss|ssr|vmess|vless|trojan|hysteria2?|tuic):\/\//i.test(line.trim())).length;
  if (count === 0) throw new Error('v.txt: 未找到节点链接');
  return count;
}

function validateClash(content) {
  const proxies = content.match(/^proxies:\s*$/m);
  const groups = content.match(/^proxy-groups:\s*$/m);
  if (!proxies || !groups || groups.index <= proxies.index) {
    throw new Error('c.yaml: 缺少代理或代理组配置');
  }
  const proxySection = content.slice(proxies.index, groups.index);
  if (!/^  - type:\s*\S+/m.test(proxySection) || !/^    server:\s*\S+/m.test(proxySection)) {
    throw new Error('c.yaml: 代理列表为空');
  }
}

function chinaDate() {
  const parts = new Intl.DateTimeFormat('en-US', {
    timeZone: 'Asia/Shanghai', year: 'numeric', month: '2-digit', day: '2-digit',
  }).formatToParts(new Date());
  const values = Object.fromEntries(parts.map(({ type, value }) => [type, value]));
  return `${values.year}-${values.month}-${values.day}`;
}

const [universal, clash] = await Promise.all(files.map(download));
const count = countLinks(universal);
validateClash(clash);

const readmePath = join(root, 'README.md');
const readme = await readFile(readmePath, 'utf8');
const pattern = /<!-- update:start -->[\s\S]*?<!-- update:end -->/;
if (!pattern.test(readme)) throw new Error('README.md: 找不到更新状态标记');

const date = chinaDate();
const status = `<!-- update:start -->\n> 最近成功抓取：**${date}（北京时间）** · 通用订阅包含 **${count} 条节点链接**（未验证可用性）\n<!-- update:end -->`;

await mkdir(join(root, 'subscriptions'), { recursive: true });
await Promise.all([
  writeFile(join(root, 'subscriptions', 'v.txt'), universal),
  writeFile(join(root, 'subscriptions', 'c.yaml'), clash),
]);
await writeFile(readmePath, readme.replace(pattern, status));
console.log(`已更新 ${date}，通用订阅 ${count} 条节点链接`);
