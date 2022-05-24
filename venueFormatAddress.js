const sanitizeAddress = (address) => {
  const regex =
    /[A-Z]+?[0-9A-Z]+?[\S\s0-9][0-9][A-Z]{1,2}|[A-Z]{1,2}[1-9]{1,3}[A-Z]{1,2}/g;
  const postcode = address.match(regex);
  return postcode;
};

export { sanitizeAddress };
