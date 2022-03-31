/*
 * Complete the 'lonelyinteger' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY a as parameter.
 *
 * Given an array of integers, where all elements but one occur twice, find the unique element.
 */

  function lonelyinteger(arr) {
    let dups = arr.filter((e, i, a) => a.indexOf(e) !== i)
      console.log(`dups=`, dups);
      let unique = arr.filter((e, i, a) => a.indexOf(e) === i)
      console.log(`unique=`, unique);
      let initialValue = 0;
      const sumUnique = unique.reduce(
        (previousValue, currentValue) => previousValue + currentValue, initialValue);

      const sumDups = dups.reduce(
        (previousValue, currentValue) => previousValue + currentValue, initialValue);

      console.log(sumUnique - sumDups);
      return (sumUnique - sumDups);

    }

let arr = [4,9,17,4,83,9,83];
lonelyinteger(arr);
