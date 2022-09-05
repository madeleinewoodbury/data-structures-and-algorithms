# ArrayList

Let's pretend for a moment that JavaScript has no array type. No more `const x = []`. We only have one thing: objects. So we'd need to implement the array numbering ourselves. But not just that, we'd have to implment adding numbers, removing numbers, getting numbers, etc. It's a lot of work!

I'm borrowing the Java terms for these, by the way.

For array list, this works more or less how we as humans tend think about it: in memory we'll lay out everything sequentially in memory. We'd say that the array starts somewhere and then if we ask for the 2 index, we'd go to the beginning of the array and move over 3 to the 2 index. Since everything is already laid out in the order it's in memory, it makes look-ups really simple. Just by knowing where the start of the array is and the index, we know where the thing we're looking for in memory. This would be a O(1) in terms of complexity. No matter how big the ArrayList is, array lookups take the same amount of time.

Now imagine our list is 15,000 items long and we delete the 1 index. We now have to shift 14,998 items over in memory. This is called compacting and it's painful for ArrayList. Same applies for inserts.

```
[a,b,c,d,e,f,g]
-> delete index 3
-> array is [a,b,c,(blank),e,f,g]
-> shift elements 4,5,6 back one index
-> array is [a,b,c,e,f,g]
-> decrement length
```

Keep in mind you have to do an look-up and a deletion in order to do a deletion. This true regardless. We're measuring these actions independently.

So when are you going to choose an ArrayList? When you need to do lots of lookups! It's the best for that. You're essentially prematurely optimizing for lookups.

# LinkedList

For our second data structure, we're going to implement a LinkedList. LinkedList is made of a bunch of nodes that point to the next one in the list. Every node in a LinkedLists has two properties, the value of whatever is being store and a pointer to the next node in the list. These nodes will not be sequential in memory, meaning we don't get the easy lookups but the advantage is that adding things is easy since we don't have to do the compacting we had to do with ArrayList.

So let's talk about look ups. You only have access to a head node. The head node will point to the 1 node. The 1 node points to the 2 node, etc. If we want to lookup index 10,000 we're going to have to make 10,000 jumps. That means the lookups grow with length and therefore the Big O is O(n) for lookups.

Let's chat about where LinkedLists are useful then. What do we need to do if we want to delete index 10? We'll first do a lookup node 9 and we'll change the pointer of node 9's to point at node 11. Done! So these deletions are O(1). Again, remember, we consider lookups and deletions as separate actions.

Let's dissect a delete.

```
value: [a]   [b]   [c]   [d]
next:  [ ]-> [ ]-> [ ]-> [ ]-> null

-> delete is called on index 2 (value 'c')
-> grab the head (value 'a')
-> loop through the nexts until you get the index
   before the one to be deleted (value 'b')
-> change the the next of index 1 to be the next of index 2
-> decrement length
-> return the value of the deleted node
```

Let's look at insertions. Let's say I want insert at 10. I'd lookup node 9, point its next at the new node, and point the new node's next at the old node 10. Done! O(1) as well.

As you can see, the inserts and deletes work great. This makes it ideals where you're doing a lot of writes and deletions. In general, ArrayList tends to be the most generally useful because the lookup speed is so helpful, but LinkedLists definitely have their place.

There are other variations of LinkedLists as well. One is a doubly LinkedList, where you have a previous and next pointer on each node. This can be helpful if you want to be able to do lookups from the tail or from the head.
