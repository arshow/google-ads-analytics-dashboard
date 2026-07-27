import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

const exportRoot = new URL("../out/", import.meta.url);

test("exports the Google Ads API review website as static HTML", async () => {
  const html = await readFile(new URL("index.html", exportRoot), "utf8");

  assert.match(html, /Google Ads Analytics Dashboard/);
  assert.match(html, /Restricted-access reporting platform/);
  assert.match(html, /cross-border e-commerce sellers/);
  assert.match(html, /Client-authorized accounts only/);
  assert.match(html, /Account-specific client access/);
  assert.match(html, /On-demand updates/);
  assert.match(html, /Why API access is essential/);
  assert.match(html, /Security &amp; compliance/);
  assert.match(html, /GoogleAdsService\.SearchStream/);
  assert.match(
    html,
    /https:\/\/arshow\.github\.io\/google-ads-analytics-dashboard\/og\.png/,
  );
  assert.doesNotMatch(
    html,
    /codex-preview|Your site is taking shape|Owned accounts only|No third-party client access/,
  );

  await access(new URL("og.png", exportRoot));
  await access(new URL("_next/", exportRoot));
});
