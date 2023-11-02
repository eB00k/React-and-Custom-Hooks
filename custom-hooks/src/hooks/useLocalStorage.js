const useLocalStorage = (key) => {
  function setItem(value) {
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (err) {
      console.error(err);
    }
  }

  function getItem(key) {
    try {
      const res = window.localStorage.getItem(key);
      return res ? JSON.parse(res) : undefined;
    } catch (err) {
      console.error(err);
    }
  }

  function removeItem(key) {
    window.localStorage.removeItem(key);
  }
  return { setItem, getItem, removeItem };
};

export default useLocalStorage;
