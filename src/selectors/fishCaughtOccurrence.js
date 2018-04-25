
//Get visible fishCaughtOccurences
export default(fishCaught, { text, sortBy }) => {
  return fishCaught.filter((fishCaught) => {
    const textMatch = fishCaught.fishType.toLowerCase().includes(text.toLowerCase());
    return textMatch;
    //sortBY IS NOT DONE!!!!!!!!
  });
};
