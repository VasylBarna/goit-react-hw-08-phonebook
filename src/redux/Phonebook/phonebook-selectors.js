export const getContacts = (data, state) => {
  const getFilter = state.filter;
  const normalizedFilter = getFilter.toLowerCase();

  return data
    ? data.filter(contact =>
        contact.name.toLowerCase().includes(normalizedFilter),
      )
    : [];
};
