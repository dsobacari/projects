class SmallestIntegerFinder {
    findSmallestInt(args) {
      return Math.min(...args);
    }
  }


var sif = new SmallestIntegerFinder();
sif.findSmallestInt([78,56,232,12,8])