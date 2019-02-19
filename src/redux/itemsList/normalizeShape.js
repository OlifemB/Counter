export const normalizeItemsById = itemsById =>
  itemsById.reduce((accumulator, current) => {
    accumulator[current.id] = current;
    return accumulator;
  }, {});

export const normalizeAllIds = allIds =>
  allIds.reduce((accumulator, current) => {
    accumulator.push(current.id);
    return accumulator;
  }, []);
