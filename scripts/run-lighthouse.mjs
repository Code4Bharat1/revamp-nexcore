import lighthouse from 'lighthouse';
import * as chromeLauncher from 'chrome-launcher';
import fs from 'fs';

const url = process.argv[2] || 'http://localhost:3000/aboutus';
const outputPath = process.argv[3] || null;

async function run() {
  console.log(`Starting Lighthouse audit for: ${url}`);
  const chrome = await chromeLauncher.launch({
    chromeFlags: ['--headless', '--disable-gpu', '--no-sandbox']
  });

  const options = {
    logLevel: 'error',
    output: 'json',
    port: chrome.port,
    onlyCategories: ['performance', 'accessibility', 'best-practices', 'seo'],
  };

  try {
    const runnerResult = await lighthouse(url, options);
    const reportJson = runnerResult.lhr;

    if (outputPath) {
      fs.writeFileSync(outputPath, JSON.stringify(reportJson, null, 2));
      console.log(`Report written to ${outputPath}`);
    }

    const categories = reportJson.categories;
    console.log('\n========================================');
    console.log(`LIGHTHOUSE RESULTS FOR: ${url}`);
    console.log('========================================');
    console.log(`Performance:    ${Math.round((categories.performance?.score || 0) * 100)}`);
    console.log(`Accessibility:  ${Math.round((categories.accessibility?.score || 0) * 100)}`);
    console.log(`Best Practices: ${Math.round((categories['best-practices']?.score || 0) * 100)}`);
    console.log(`SEO:            ${Math.round((categories.seo?.score || 0) * 100)}`);
    console.log('----------------------------------------');
    console.log(`FCP:  ${reportJson.audits['first-contentful-paint']?.displayValue}`);
    console.log(`LCP:  ${reportJson.audits['largest-contentful-paint']?.displayValue}`);
    console.log(`TBT:  ${reportJson.audits['total-blocking-time']?.displayValue}`);
    console.log(`CLS:  ${reportJson.audits['cumulative-layout-shift']?.displayValue}`);
    console.log(`SI:   ${reportJson.audits['speed-index']?.displayValue}`);
    console.log('========================================\n');

    // List top failing audits under performance
    const failedPerformance = Object.values(reportJson.audits)
      .filter(a => a.score !== null && a.score < 0.9 && a.details && a.details.type === 'opportunity')
      .sort((a, b) => (a.score || 0) - (b.score || 0))
      .slice(0, 5);

    if (failedPerformance.length > 0) {
      console.log('Top Performance Opportunities:');
      failedPerformance.forEach(a => {
        console.log(`- ${a.title}: ${a.displayValue || ''}`);
      });
    }

    const failedA11y = Object.values(reportJson.audits)
      .filter(a => reportJson.categories.accessibility.auditRefs.some(ref => ref.id === a.id) && a.score !== null && a.score < 1);
    if (failedA11y.length > 0) {
      console.log('\nFailing Accessibility Audits:');
      failedA11y.forEach(a => {
        console.log(`- [${a.id}] ${a.title}: ${a.explanation || ''}`);
        if (a.details?.items) {
          a.details.items.slice(0, 3).forEach(item => {
            console.log(`    Node: ${item.node?.snippet || item.node?.selector || ''}`);
          });
        }
      });
    }

    const failedSeo = Object.values(reportJson.audits)
      .filter(a => reportJson.categories.seo.auditRefs.some(ref => ref.id === a.id) && a.score !== null && a.score < 1);
    if (failedSeo.length > 0) {
      console.log('\nFailing SEO Audits:');
      failedSeo.forEach(a => {
        console.log(`- [${a.id}] ${a.title}`);
        if (a.details?.items) {
          a.details.items.slice(0, 3).forEach(item => {
            console.log(`    Node: ${item.node?.snippet || item.node?.selector || ''}`);
          });
        }
      });
    }

    const lcpAudit = reportJson.audits['largest-contentful-paint-element'];
    if (lcpAudit && lcpAudit.details?.items) {
      console.log('\nLCP Element:');
      lcpAudit.details.items.forEach(item => {
        console.log(`- ${item.node?.snippet || item.node?.selector || ''}`);
      });
    }

  } finally {
    await chrome.kill();
  }
}

run().catch(err => {
  console.error('Lighthouse run failed:', err);
  process.exit(1);
});
