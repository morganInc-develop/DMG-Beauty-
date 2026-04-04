() => {
  const text = (el) => (el?.textContent || "").replace(/\s+/g, " ").trim();
  const getDataAttributes = (el) =>
    [...el.attributes]
      .filter((attr) => attr.name.startsWith("data-"))
      .reduce((acc, attr) => ({ ...acc, [attr.name]: attr.value }), {});

  const sectionNodes = [...document.querySelectorAll("main section, section")];
  const fallbackSections =
    sectionNodes.length > 0
      ? sectionNodes
      : [...document.querySelectorAll("main > *, body > main > *")].filter(
          (el) => el.children.length || text(el)
        );

  const sections = fallbackSections.map((el, index) => ({
    index,
    tag: el.tagName.toLowerCase(),
    className: el.className || "",
    id: el.id || "",
    dataAttributes: getDataAttributes(el),
    headingCount: el.querySelectorAll("h1, h2, h3").length,
    headings: [...el.querySelectorAll("h1, h2, h3")].map((node) => ({
      tag: node.tagName.toLowerCase(),
      text: text(node),
      className: node.className || "",
    })),
    buttons: [...el.querySelectorAll("button, a[role='button'], .btn, .button")]
      .slice(0, 10)
      .map((node) => ({
        tag: node.tagName.toLowerCase(),
        text: text(node),
        className: node.className || "",
      })),
  }));

  const payload = {
    title: document.title,
    url: location.href,
    viewport: {
      width: window.innerWidth,
      height: window.innerHeight,
    },
    pageHeight: document.documentElement.scrollHeight,
    headings: [...document.querySelectorAll("h1, h2, h3")].map((node) => ({
      tag: node.tagName.toLowerCase(),
      text: text(node),
      className: node.className || "",
    })),
    sections,
  };

  return JSON.stringify(payload, null, 2);
}
