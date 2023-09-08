export default function conf() {
  const base_url = "http://localhost:9000/#/";
  const selector = (el, default_selector = "data_cy") => {
    return `[${default_selector}="${el}"]`;
  };

  return { base_url, selector };
}
