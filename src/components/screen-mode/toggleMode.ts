export default (mode: string): void => {
  const rootStyle = document.documentElement.style;
  if (mode === 'light') {
    rootStyle.setProperty('--color-main', '#48484a');
    rootStyle.setProperty('--color-main-light', 'rgba(72, 72, 74, 0.8)');
    rootStyle.setProperty('--color-main-lighter', 'rgba(72, 72, 74, 0.5)');
    rootStyle.setProperty('--color-oposite', '#f2f2f1');
  } else {
    rootStyle.setProperty('--color-main', '#f2f2f1');
    rootStyle.setProperty('--color-main-light', 'rgba(242, 242, 241, 0.8)');
    rootStyle.setProperty('--color-main-lighter', 'rgba(242, 242, 241, 0.5)');
    rootStyle.setProperty('--color-oposite', '#48484a');
  }
};
