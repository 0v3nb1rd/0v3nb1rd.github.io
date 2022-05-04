---
id: 25
path: '/the-array-methods-coming-to-js-in-2022'
thumbnail: './thumbnail.jpg'
date: 2022-03-08T07:50:01.889Z
edited: 2022-03-08T07:50:01.889Z
next: '/how-to-make-an-nft'
title: 'The Array Methods Coming to JavaScript in 2022'
tags:
  - dev
  - js
  - discuss
popular: false
draft: false
---

In previous articles, I've covered that Javascript stores objects and arrays in heap storage. That means that an array is created once, and then any updates to it in the future will update that original array. For example:

```ts
let myArray = [ 1, 2, 3 ];
let newArray = myArray;

newArray[0] = 2;

// Both return [ 2, 2, 3 ]
console.log(newArray, myArray);
```

As such, we often find ourselves making copies or cloning arrays to make changes on them without affecting the original. A common way to do that is with [the three dots](https://fjolt.com/article/javascript-three-dots-spread-operator) operator:

```ts
let myArray = [ 1, 2, 3];
let newArray = [...myArray];

newArray[0] = 2;

// Returns [ 2, 2, 3 ] and [ 1, 2, 3 ]
console.log(newArray, myArray);
```

Since cloning is so common, a new specification has been written which has reached stage 3, which will give us a host of new ways to copy and then change an array. This proposal is called the ["Change Array by Copy"](https://github.com/tc39/proposal-change-array-by-copy) proposal. Let's take a look at how it works.

## Support
Currently, these features are not supported in any major browser or Node.JS version. We can expect them to be supported soon though since this specification has reached Stage 3 in the Javascript proposal process. This section will be updated as support changes.

Saying that, a [polyfill](https://github.com/tc39/proposal-change-array-by-copy/blob/main/polyfill.js) does exists to recreate the behaviour of this proposal, which you can use today.

## New Change Array by Copy Methods
The new proposal adds 4 new methods which will copy an array, and then change it in some way. These are:
- `Array.prototype.toReversed()` - clone an array, and then reverse it
- `Array.prototype.toSorted(compareFn)` - clone an array, and then sort it.
- `Array.prototype.toSpliced(start, deleteCount, ...items)` \- clone an array, and splice it in some way.
- `Array.prototype.with(index, value)` - clone an array, and add a new element somewhere within it.
All of these methods will work on `TypedArray` data too, for example, `Int8Array`.

## toReversed()
`toReversed` does exactly what it says - it takes an array, and reverses it. Since this function clones the array, we don't need to do any copying to create a new version of our original array:

```ts
let x = [ 1, 2, 3 ];
let y = x.toReversed();

// Returns [ 1, 2, 3 ], [ 3, 2, 1 ]
console.log(x, y);
```

## toSorted()
`toSorted`, is a non-destructive version of `sort()`, meaning it does not alter the original array. By default, will take an array and sort it numerically. For example:
```ts
let x = [ 5, 3, 4, 2, 1 ];
let y = x.toSorted(); // [ 1, 2, 3, 4, 5 ]
```
It also accepts a comparison function, which works the same as the sort() method in Javascript, and is useful when working with an array of objects. For example:
```ts
let x = [
    { value: 0 },
    { value: 4 },
    { value: 2 },
    { value: 3 }
];

// y becomes:
// [
//    { value: 0 },
//    { value: 2 },
//    { value: 3 },
//    { value: 4 }
// ]
let y = x.toSorted((a, b) => {
    return a.value - b.value
});
```

## toSpliced()
`toSpliced()` is a non-destructive version of `splice()`, meaning it does not alter the original array. It accepts three arguments:

- `start` - the position to start at.
- `deleteCount` - the number of elements to remove.
- `...items` - any items to insert at the start position after deletion.

### For example:
```ts
let x = [ "Dog", "Cat", "Zebra", "Bat", "Tiger", "Lion" ];

// y is [ "Dog", "Snake", "Bat", "Tiger", "Lion" ]
let y = x.toSpliced(1, 2, "Snake");

// z is [ "Dog, "Tiger", "Lion" ]
let z = x.toSpliced(1, 3);
```
***The above*** is a perfect example of how these copy functions are useful - using the original `splice()` method, we would remove elements from `x` and permanently change them. Using `toSpliced()`, we can change `x` many times, without worrying about its contents changing.

### with()
Finally, we have `with()`, which simply changes one element in an existing array. In essence, take Array A and show it `with` something else. Here is an example of it in action.
```ts
let x = [ "Dog", "Cat", "Lizard" ]
// y is now [ "Dog", "Zebra", "Lizard" ]
let y = x.with(1, "Zebra")
// z is now [ "Tiger", "Cat", "Lizard" ]
let z = x.with(0, "Tiger")
```
Again, we've been able to make multiple new arrays from one initial array, without having to create a copy each time.

## Conclusion

These array additions are pretty uncontroversial, and much-needed addition to a language that normally maintains only one copy of an array or object. Using these new methods, Javascript removes confusion and complexity in code. Although not as big of a change as something like [Temporal](https://fjolt.com/article/javascript-temporal), it is still a welcome addition to the language.