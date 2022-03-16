export const resizeListener = (
  setIsMobile: React.Dispatch<React.SetStateAction<boolean>>
) => {
  window.addEventListener("resize", () => {
    setIsMobile(window.innerWidth <= 580);
  });
};
