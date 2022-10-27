function disemvowel(str) {
    console.log(str.replace(/[aeiouy]/ig, ''));
    return str.replace(/[aeiouy]/ig, '');
  }
  disemvowel("No offense but,\nYour writing is among the worst I've ever read")