() => {
  const pick = (selector) => {
    const el = document.querySelector(selector);
    if (!el) return null;
    const style = window.getComputedStyle(el);
    return {
      selector,
      text: (el.textContent || "").replace(/\s+/g, " ").trim().slice(0, 180),
      fontFamily: style.fontFamily,
      fontSize: style.fontSize,
      fontWeight: style.fontWeight,
      lineHeight: style.lineHeight,
      letterSpacing: style.letterSpacing,
      color: style.color,
      backgroundColor: style.backgroundColor,
      borderRadius: style.borderRadius,
      textTransform: style.textTransform,
    };
  };

  const payload = {
    title: document.title,
    viewport: {
      width: window.innerWidth,
      height: window.innerHeight,
    },
    body: pick("body"),
    h1: pick("h1"),
    h2: pick("h2"),
    button: pick("button, a[role='button'], .btn, .button"),
    navLink: pick("header a, nav a"),
    sections: [...document.querySelectorAll("main section, section")]
      .slice(0, 12)
      .map((el, index) => {
        const style = window.getComputedStyle(el);
        return {
          index,
          className: el.className || "",
          backgroundColor: style.backgroundColor,
          color: style.color,
          paddingTop: style.paddingTop,
          paddingBottom: style.paddingBottom,
        };
      }),
    fonts: [...new Set([...document.fonts].map((font) => font.family))],
  };

  return JSON.stringify(payload, null, 2);
}
