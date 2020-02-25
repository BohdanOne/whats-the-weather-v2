export default (currentPage: string) => {
  const links = document.querySelectorAll('.Nav_link');
  links.forEach(link => {
    link.id === currentPage
      ? link.classList.add('current')
      : link.classList.remove('current');
  });
};