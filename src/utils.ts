export const scrollToSection = (id: string) => {
  const element = id ? document.getElementById(id) : document.body;
  if (element) {
    element.scrollIntoView({
      block: "start",
      behavior: "smooth",
    });
    window.location.hash = id ? `#${id}` : '#';
  }
};