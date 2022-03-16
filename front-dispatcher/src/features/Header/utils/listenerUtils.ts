export const resizeListener = (
  setIsMobile: React.Dispatch<React.SetStateAction<boolean>>,
  size: number
) => {
  window.addEventListener("resize", () => {
    setIsMobile(window.innerWidth <= size);
  });
};
