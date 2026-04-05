async (page) => {
  const base = "output/playwright/home";

  await page.setViewportSize({ width: 390, height: 844 });
  await page.waitForLoadState("networkidle");
  await page.waitForTimeout(1500);

  await page.evaluate(() => window.scrollTo(0, 0));
  await page.screenshot({
    path: `${base}/mobile-full.png`,
    fullPage: true,
  });

  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(500);
  await page.screenshot({ path: `${base}/mobile-hero.png` });

  await page.evaluate(() => window.scrollTo(0, window.innerHeight * 1.2));
  await page.waitForTimeout(500);
  await page.screenshot({ path: `${base}/mobile-mid.png` });

  return "mobile capture complete";
};
