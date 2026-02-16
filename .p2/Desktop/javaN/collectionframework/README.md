## What is Iterable?

-   Introduced in Java 1.5 (Java 5)
-   Iterable is a core Java interface present in the java.lang package.
-   Any class that implements Iterable allows its objects to be iterated (looped) one by one.

## Colletion Framework (1.5 v)

-   A set of classes and interfaces that provide ready made data structure
-   Support dynamic storage,searching,sorting,insertion,deletion,and iteration

## Collection Framework Hierarchy

Iterable (Java 1.5)

|

Collection (Java 1.2)

|

+-- List (Java 1.2)

| |

| +-- ArrayList (Java 1.2)

| +-- LinkedList (Java 1.2)

| +-- Vector (Java 1.0)

| +-- Stack (Java 1.0)

|

+-- Set (Java 1.2)

| |

| +-- HashSet (Java 1.2)

| +-- LinkedHashSet (Java 1.4)

| +-- TreeSet (Java 1.2)

|

+-- Queue (Java 1.5)

         |

         +-- PriorityQueue (Java 1.5)

         +-- Deque (Java 1.6)

               |
               +-- ArrayDeque (Java 1.6)

## Map (Java 1.2)

|

+-- HashMap (Java 1.2)

+-- LinkedHashMap (Java 1.4)

+-- TreeMap (Java 1.2)

+-- Hashtable (Java 1.0)

## Difference Between Array and Collection Framework

| Array                                                                                                       | Collection Framework                                                                                                                                          |
| ----------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Array (introduced in Java 1.0) is a fixed-size data structure used to store elements of the same data type. | Collection Framework (introduced in Java 1.2) is a unified architecture of interfaces and classes used to store and manipulate groups of objects dynamically. |
| Fixed size, cannot grow or shrink at runtime                                                                | Dynamic size, can grow or shrink at runtime                                                                                                                   |
| Can store both primitive data types and objects                                                             | Can store only objects                                                                                                                                        |
| Faster access due to direct indexing                                                                        | Slightly slower due to abstraction overhead                                                                                                                   |
| May cause memory wastage if size is not fully used                                                          | Efficient memory utilization                                                                                                                                  |
| Limited operations (store and access only)                                                                  | Provides rich operations like add, remove, search, sort                                                                                                       |
| Uses loops such as for and for-each                                                                         | Uses Iterator, ListIterator, and for-each                                                                                                                     |
| Less flexible                                                                                               | Highly flexible                                                                                                                                               |
| Does not support generics                                                                                   | Supports generics (Java 1.5)                                                                                                                                  |
| No built-in API methods                                                                                     | Provides many built-in methods                                                                                                                                |
| Suitable when size is fixed and performance is critical                                                     | Suitable when size changes frequently and advanced operations are needed                                                                                      |

## Difference Between Collection and Collections

| Collection                                                                                             | Collections                                                                                                                    |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| Collection (introduced in Java 1.2) is an interface in `java.util` that represents a group of objects. | Collections (introduced in Java 1.2) is a utility class in `java.util` that provides static methods to operate on collections. |
| It is a root interface of the Collection Framework hierarchy.                                          | It is not part of the hierarchy; it is a helper class.                                                                         |
| It is implemented by classes like ArrayList, HashSet, LinkedList.                                      | It works on objects created from Collection implementations.                                                                   |
| It provides methods like add(), remove(), size(), iterator().                                          | It provides methods like sort(), reverse(), shuffle(), binarySearch().                                                         |
| It is used to store and manipulate data.                                                               | It is used to perform operations on stored data.                                                                               |
| Objects of Collection interface cannot be created directly.                                            | Object of Collections class cannot be created because it has a private constructor.                                            |
| It supports iteration using Iterator and for-each loop.                                                | It does not support iteration directly.                                                                                        |
| It represents a data structure.                                                                        | It represents algorithms that work on data structures.                                                                         |
| Example: `List`, `Set`, `Queue`                                                                        | Example: `Collections.sort(list)`                                                                                              |

## Iterator vs ListIterator vs Enumeration

| Iterator                        | ListIterator                         | Enumeration               |
| ------------------------------- | ------------------------------------ | ------------------------- |
| Introduced in Java 1.2          | Introduced in Java 1.2               | Introduced in Java 1.0    |
| Forward traversal only          | Forward and backward traversal       | Forward traversal only    |
| Can remove elements             | Can add, remove, and update elements | Cannot modify elements    |
| Works with all Collection types | Works only with List                 | Works with legacy classes |
| Fail-fast                       | Fail-fast                            | Not fail-fast             |
| Modern and recommended          | Modern and powerful                  | Legacy and obsolete       |

## Iterator vs Normal loops

| Iterator                        | Normal Loop                                         |
| ------------------------------- | --------------------------------------------------- |
| Introduced in Java 1.2          | `for` since Java 1.0, `for-each` since Java 1.5     |
| Works with all Collection types | Mostly used with arrays and Lists                   |
| Allows safe removal of elements | Removal may cause `ConcurrentModificationException` |
| Uses `hasNext()` and `next()`   | Uses index or direct element access                 |
| No index access                 | Index-based access available                        |
| Fail-fast                       | Not fail-fast (array), fail-fast for collections    |

## Difference Between List and Set

| List                                                                                             | Set                                                                                                               |
| ------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------- |
| List (introduced in Java 1.2) is an interface that represents an ordered collection of elements. | Set (introduced in Java 1.2) is an interface that represents a collection that does not allow duplicate elements. |
| Allows duplicate elements                                                                        | Does not allow duplicate elements                                                                                 |
| Maintains insertion order                                                                        | Does not guarantee insertion order                                                                                |
| Elements can be accessed using index                                                             | Index-based access is not supported                                                                               |
| Multiple null values are allowed (depends on implementation)                                     | Only one null value is allowed (depends on implementation)                                                        |
| Supports positional operations like add(int, E), get(int)                                        | Does not support positional operations                                                                            |
| Common implementations: ArrayList, LinkedList, Vector                                            | Common implementations: HashSet, LinkedHashSet, TreeSet                                                           |
| Suitable when order and duplicates are required                                                  | Suitable when uniqueness is required                                                                              |
| Allows multiple occurrences of the same element                                                  | Stores only unique elements                                                                                       |

## ArrayList

-   Resizable array in java.util that can grow/shrink dynamically.

-   Java Version: 1.2

-   Features:

    -   Ordered, allows duplicates & nulls

    -   Random access via index (O(1))

    -   Not synchronized (thread-unsafe)

-   Common Methods:

    -   add(E e), add(int index, E e) → add element

    -   get(int index) → access element

    -   set(int index, E e) → update element

    -   remove(int index), remove(Object o) → delete element

    -   size(), isEmpty() → check size/empty

    -   contains(Object o), indexOf(Object o), lastIndexOf(Object o) → search

    -   clear() → remove all

## LinkedList (Java 1.2)

-   Definition: Doubly-linked list where each node contains data and references to previous & next nodes.

-   Features:

    -   Ordered, allows duplicates & nulls

    -   Efficient insertions/deletions (O(1) at ends)

    -   Slower random access than ArrayList (O(n))

    -   Implements List, Deque, Queue interfaces

-   Common Methods:

    -   Add: add(E e), addFirst(E e), addLast(E e)

    -   Access: get(int index), getFirst(), getLast()

    -   Remove: remove(int index), removeFirst(), removeLast()

    -   Other: size(), isEmpty(), contains(Object o), clear()

## Vector in Java (Java 1.0)

-   Definition: A resizable array similar to ArrayList but synchronized (thread-safe). Part of java.util.

-   Features:

    -   Ordered, allows duplicates & nulls

    -   Dynamic size, grows automatically

    -   Thread-safe (synchronized)

    -   Slower than ArrayList due to synchronization overhead

    -   Implements List, RandomAccess, Cloneable, Serializable

-   Common Methods:

    -   Add: add(E e), addElement(E e), insertElementAt(E e, int index)

    -   Access: get(int index), elementAt(int index)

    -   Remove: remove(int index), remove(Object o), removeElementAt(int index)

    -   Other: size(), isEmpty(), contains(Object o), clear()

## Stack in Java (Java 1.0)

-   Definition: A Last-In-First-Out (LIFO) data structure in java.util where elements are inserted and removed from the top only.

-   Features:

    -   LIFO order

    -   Allows duplicates & nulls

    -   Synchronized (thread-safe)

    -   Extends Vector, so inherits all Vector methods

-   Common methods

    -   push(E e) → add element to top

    -   pop() → remove & return top element

    -   peek() → view top element without removing

    -   isEmpty() → check if stack is empty

    -   search(Object o) → returns 1-based position from top

    -   size() → returns number of elements

## HashSet in Java (Java 1.2)

-   Definition: A collection that stores unique elements (no duplicates) in no particular order. Part of java.util.

-   Features:

    -   No duplicates allowed

    -   Does not maintain insertion order (unordered)

    -   Allows one null element

    -   Fast operations: add, remove, contains → O(1) on average

    -   Not synchronized (not thread-safe)

    -   Implements Set, Cloneable, Serializable

-   common methods

    -   add(E e) → adds element

    -   remove(Object o) → removes element

    -   contains(Object o) → checks existence

    -   isEmpty() → checks if empty

    -   size() → returns number of elements

    -   clear() → removes all elements

## LinkedHashSet in Java (Java 1.4)

-   Definition: A hash table and linked list implementation of Set that maintains insertion order. Part of java.util.

-   Features:

    -   No duplicates allowed

    -   Maintains insertion order

    -   Allows one null element

    -   Not synchronized (not thread-safe)

    -   Implements Set, Cloneable, Serializable

## TreeSet in Java (Java 1.2)

-   Definition: A sorted set implementation that stores elements in ascending order (natural ordering) or using a custom Comparator. Part of java.util.

-   Features:

    -   No duplicates allowed

    -   Automatically sorted

    -   Null not allowed (for natural ordering, throws NullPointerException)

    -   Not synchronized (not thread-safe)

    -   Implements Set, SortedSet, NavigableSet, Cloneable, Serializable

-   Common methods-

    -   add(E e) → adds element

    -   remove(Object o) → removes element

    -   contains(Object o) → checks existence

    -   isEmpty() → checks if empty

    -   size() → returns number of elements

    -   clear() → removes all elements

    -   first() → returns first (lowest) element

    -   last() → returns last (highest) element

    -   headSet(E toElement) → elements less than toElement

    -   tailSet(E fromElement) → elements greater than or equal to fromElement

    -   subSet(E from, E to) → elements in range [from, to)

## Queue in Java (Java 1.5)

-   Definition: A FIFO (First-In-First-Out) data structure where elements are inserted at the rear and removed from the front.

-   Features:

    -   Ordered

    -   Allows duplicates

    -   Usually does not allow null (implementation-dependent)

    -   Not synchronized

-   Common Implementations: LinkedList, PriorityQueue, ArrayDeque

-   Key Methods:

    -   offer(E e) → insert element

    -   poll() → remove & return head

    -   peek() → view head without removing

## Deque in Java (Java 1.6)

-   Definition: A double-ended queue that allows insertion and removal from both ends.

-   Features:

    -   Can act as Queue or Stack

    -   Allows duplicates

    -   Faster than Stack

-   Null elements not allowed in ArrayDeque

-   Common Implementations: ArrayDeque, LinkedList

-   Key Methods:

    -   addFirst(E e), addLast(E e)

    -   removeFirst(), removeLast()

    -   peekFirst(), peekLast()

## PriorityQueue in Java (Java 1.5)

-   Definition: A queue where elements are processed based on priority, not insertion order.

-   Features:

    -   Min-Heap by default (smallest element first)

    -   No duplicates restriction

    -   Null not allowed

    -   Not synchronized

    -   Ordering: Natural order or custom Comparator

-   Key Methods:

    -   offer(E e) → insert element

    -   poll() → remove highest priority element

    -   peek() → view highest priority element

## Map Interface in Java (Java 1.2)

-   Definition: A data structure that stores data in key–value pairs, where keys are unique and values can be duplicated.

-   Features:

    -   No duplicate keys

    -   Each key maps to exactly one value

    -   Values can be duplicated

    -   Not a child of Collection interface

-   Key Methods:

    -   put(K key, V value)

    -   get(Object key)

    -   remove(Object key)

    -   containsKey(Object key)

    -   containsValue(Object value)

    -   keySet()

    -   values()

    -   entrySet()

## HashMap in Java (Java 1.2)

-   Definition: A hash table–based implementation of Map that does not maintain order.

-   Features:

    -   No duplicate keys

    -   Allows one null key and multiple null values

    -   Unordered

    -   Not synchronized

    -   Fast performance (O(1) average)-

## Hashtable in Java (Java 1.0)

-   Definition: A legacy, synchronized Map implementation.

-   Features:

    -   No duplicate keys

    -   No null key and no null value

    -   Thread-safe (synchronized)

    -   Slower than HashMap

## LinkedHashMap in Java (Java 1.4)

-   Definition: A Map that maintains insertion order.

-   Features:

    -   No duplicate keys

    -   Allows one null key-

    -   Maintains insertion order

    -   Slightly slower than HashMap

## TreeMap in Java (Java 1.2)

-   Definition: A sorted Map implementation that stores keys in ascending order.

-   Features:

    -   No duplicate keys

    -   Sorted by natural order or Comparator

    -   Null keys not allowed

    -   Values can be null

    -   Not synchronized

## Comparable (Java 1.2) vs Comparator (Java 1.2)

| Comparable                              | Comparator                                   |
| --------------------------------------- | -------------------------------------------- |
| `java.lang` package                     | `java.util` package                          |
| Defines **natural ordering**            | Defines **custom ordering**                  |
| Uses `compareTo(Object o)`              | Uses `compare(Object o1, Object o2)`         |
| Sorting logic inside the **same class** | Sorting logic in a **separate class**        |
| Only **one** sorting logic possible     | **Multiple** sorting logics possible         |
| Class modification **required**         | Class modification **not required**          |
| Used by `Collections.sort(list)`        | Used by `Collections.sort(list, comparator)` |
| Less flexible                           | More flexible                                |
| No lambda support                       | Lambda supported (Java 8+)                   |

## Fail-Fast (Java 1.2) vs Fail-Safe (Java 1.5)

| Fail-Fast                                     | Fail-Safe                                             |
| --------------------------------------------- | ----------------------------------------------------- |
| Throws `ConcurrentModificationException`      | Does **not** throw `ConcurrentModificationException`  |
| Iterator works on **original collection**     | Iterator works on a **cloned copy**                   |
| Modification during iteration **not allowed** | Modification during iteration **allowed**             |
| Faster                                        | Slightly slower                                       |
| Memory efficient                              | Uses extra memory                                     |
| Not thread-safe                               | Thread-safe                                           |
| Examples: `ArrayList`, `HashMap`, `HashSet`   | Examples: `CopyOnWriteArrayList`, `ConcurrentHashMap` |
