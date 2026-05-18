/*
give a rectangular matrix of characters, add a border of asterisks(*) to it.

example ---
picture = ["abc","ded"]
addBorder(picture) = ["*****","*abc*","*ded*","*****"]

Hints --
concat()
unshift()
push()
*/



function addBorder (pictures){
    let wall = '*'.repeat(pictures[0].length + 2)
    pictures.unshift(wall)
    pictures.push(wall)

    for(let i = 1;i<pictures.length-1;i++){
        pictures[i] = '*'.concat(pictures[i],'*')
    }
    return pictures
}
console.log(addBorder(['abc','ded']));



/*
learn str.repeat(count) ----> this is sting method
'abc'.repeat(1) --------> 'abc'
'abc'.repeat(2) --------> 'abcabc'
'abc'.repeat(3.5) --------> 'abcabcabc' ---> convert integer 3.5 = 3
'abc'.repeat(-1) --------> 'RangeError'
'abc'.repeat(1/0) --------> 'RangeError'
*/

