
var halvesAreAlike = function (s) {
    let arr = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    let a = s.slice(0, s.length / 2);
    let b = s.slice(s.length / 2, s.length);

    let countA = 0;
    let countB = 0;

    for (let i = 0; i < arr.length; i++) {
        for (let ia = 0; ia < a.length; ia++) {
            if (a[ia] == arr[i]) countA++;
        }
        for (let ib = 0; ib < b.length; ib++) {
            if (b[ib] == arr[i]) countB++;
        }
    }

    return (countA == countB);
};
