const sanitizeAddress = (address) => {
  const regex =
    /[A-Z]+?[0-9A-Z]+?[\S\s0-9][0-9][A-Z]{1,2}|[A-Z]{1,2}[1-9]{1,3}[A-Z]{1,2}/g;
  if (regex.test(address) == true) {
    const postcode = address.match(regex)[0];
    return postcode;
  }
  return null;
};

export { sanitizeAddress };
