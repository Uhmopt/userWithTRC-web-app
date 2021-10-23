export const updateStore = (state = {}, payload) => {
  return typeof payload === "function"
    ? payload(state)
    : typeof payload === 'object'
    ? {
        ...state,
        ...payload,
      }
    : state;
};

export const formatStore = (data = {}) => {
  return {
    ...data,
    isAuth: Boolean(data?.user?.id),
  };
};
