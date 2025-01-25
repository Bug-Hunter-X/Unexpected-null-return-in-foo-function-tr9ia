function foo(a, b) {
  if (a === null || b === null) {
    return null; //This is the buggy part, should return 0
  }
  return a + b; 
}