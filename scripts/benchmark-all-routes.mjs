import lighthouse from 'lighthouse';
import * as chromeLauncher from 'chrome-launcher';
import fs from 'fs';

const routes = [
  '/',
  '/aboutus',
  '/services',
  '/servicesweoffer',
  '/aisolutions',
  '/approach',
  '/apps',
  '/casestudy',
  '/clients',
  '/contactus',
  '/voiceagent'
];

const baseUrl = 'http://localhost:3005';

async function main() {
  const chrome = await chromeLauncher.launch({
    chromeFlags: ['--headless', '--disable-gpu', '--no-sandbox']
  });

  const options = {
    logLevel: 'error',
    output: 'json',
    port: chrome.port,
    onlyCategories: ['performance', 'accessibility', 'best-practices', 'seo'],
  };

  const results = [];

  for (const r of routes) {
    const fullUrl = `${baseUrl}${r}`;
    process.stdout.write(`Auditing ${r}... `);
    try {
      const runnerResult = await lighthouse(fullUrl, options);
      const lhr = runnerResult.lhr;
      const cats = lhr.categories;
      const perf = Math.round((cats.performance?.score || 0) * 100);
      const a11y = Math.round((cats.accessibility?.score || 0) * 100);
      const bp = Math.round((cats['best-practices']?.score || 0) * 100);
      const seo = Math.round((cats.seo?.score || 0) * 100);
      const fcp = lhr.audits['first-contentful-paint']?.displayValue || '-';
      const lcp = lhr.audits['largest-contentful-paint']?.displayValue || '-';
      const tbt = lhr.audits['total-blocking-time']?.displayValue || '-';
      const cls = lhr.audits['cumulative-layout-shift']?.displayValue || '-';

      results.push({
        route: r,
        perf,
        a11y,
        bp,
        seo,
        fcp,
        lcp,
        tbt,
        cls,
        status: (perf >= 90 && a11y >= 90 && bp >= 90 && seo >= 90) ? 'PASS' : 'FAIL'
      });
      console.log(`Done! Perf: ${perf}, A11y: ${a11y}, BP: ${bp}, SEO: ${seo} [${results[results.length-1].status}]`);
    } catch (e) {
      console.log(`Failed: ${e.message}`);
    }
  }

  await chrome.kill();

  fs.writeFileSync('./optimized-all-routes.json', JSON.stringify(results, null, 2));

  console.log('\n=================== BASELINE ROUTE MATRIX ===================');
  console.table(results.map(r => ({
    Route: r.route,
    Performance: r.perf,
    Accessibility: r.a11y,
    'Best Practices': r.bp,
    SEO: r.seo,
    LCP: r.lcp,
    TBT: r.tbt,
    Status: r.status
  })));
}

main().catch(console.error);
