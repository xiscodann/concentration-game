export const saveStorage = (value) => {
  const state = JSON.stringify(value);
  localStorage.setItem('cg', state);
};

export const readStorage = () => {
  const state = localStorage.getItem('cg');
  if (state === null) return false;
  return JSON.parse(state);
};

export const deleteStorage = () => {
  localStorage.clear();
  window.location.reload();
};
