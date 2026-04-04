async (page) => {
  const base = "output/playwright/projects";

  await page.setViewportSize({ width: 1440, height: 1400 });
  await page.waitForLoadState("networkidle");
  await page.waitForTimeout(1500);

  await page.screenshot({
    path: `${base}/desktop-full.png`,
    fullPage: true,
  });

  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(500);
  await page.screenshot({ path: `${base}/desktop-hero.png` });

  await page.evaluate(() => window.scrollTo(0, window.innerHeight * 0.9));
  await page.waitForTimeout(500);
  await page.screenshot({ path: `${base}/desktop-mid.png` });

  await page.evaluate(() => window.scrollTo(0, window.innerHeight * 2.2));
  await page.waitForTimeout(500);
  await page.screenshot({ path: `${base}/desktop-lower.png` });

  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
  await page.waitForTimeout(700);
  await page.screenshot({ path: `${base}/desktop-footer.png` });

  return "desktop capture complete";
}
