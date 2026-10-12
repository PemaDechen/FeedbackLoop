// 5th October, 2026
/*  
   ! Project and MERN STACK REVISION:
    ? What's the difference between an image and a container? (2 sentences)
    -> Image is a Read only file that contains technologies that are used, runtime environment and the code and container is an isolated running instance of an image, multiple container can be created from the image
    ? What happens when you run docker run hello-world for the first time? (Docker Hub, pull, create, start, exit)
    -> the docker searches hello-world image in the local and if not found gets it from docker hub and creates and run the image 
    ? What does ports: "8080:3000" mean? Which side do you change, and when?
    -> we are hitting port 8080 locally and when we do hit it redirects to 3000 port of the docker's running container and if we are to change we can change the left side as it defines the port of oure device
    ? Why does Mongo need a volume? What does down -v do?
    -> to persist data so that every time container is removed new data is not supposed to be created each time but we can save it and reuse it 
    ? Inside a container, what does localhost mean? How does one container reach another?
    -> 
    ? What do up -d, ps, logs and down do?
    -> -d means detached if we use -d the terminal is not attached to the output of the running commans, ps ???, logs logs the latest operation and down removes container from the docker 
    ? What is YAML, and what's the one rule that breaks it?
    ->YAML is a file extension where data are stored in key value pair and docker and many other tech uses it for better readibility 

    * Mark each one got it or shaky. Then spend your remaining time only on the shaky ones. That's your real An image is a read-only package; a container is a running instance of it. Compose lets me describe several containers in one YAML file and start or remove them with one command. In ports, left is my machine, right is the container

    Work for tommorrow
    TODO: Warm-up (5 min): re-answer the shaky questions from tonight, aloud.
    TODO: Project: the Express skeleton, a small "hello" server first. I'll explain each piece and ask you to predict before running. Signup/login can wait until the skeleton makes sense to you.
    TODO: Concept: I'd pick the Node event loop, since it connects to everything we'll build (async, queues). A short teach-back from you at the end.
    */
/*
    ! ARRAY AND HASHING REVISION
        REVISION NOTES: ARRAYS AND HASHING
        HASHING PATTERNS
        ? - Seen it before?          -> Set                          (Contains Duplicate)
        ? - How many times?          -> Map, item -> count           (Top K Frequent, First Unique Character, ? Count Pairs)
            - Where was it?            -> Map, number -> index         (Two Sum)
            - Group by a computed key  -> Map, sorted word -> list     (Group Anagram)
            - Does the next number exist? -> Set                       (Longest Consecutive)
        ? Rule: look up by X, so X is the key.

        *  HOW A HASHMAP WORKS
        - A hash function turns a key into a slot number, so you jump straight to the slot.
        - Collision: two different keys land in the same slot.
        - A slot keeps a small list of key-value pairs and compares keys to find the right one.
        - A bad hash function puts everything in one slot, so lookup becomes O(N).
        - Growing the table spreads keys out, so slots stay short and lookup stays near O(1).

       * COMPLEXITY
        - log N = how many times you can halve N.
        log 2 = 1, log 4 = 2, log 8 = 3, log 16 = 4, log 32 = 5, log 64 = 6, log 1024 = 10.
        - Sorting is N log N: log N rounds, and each round costs N.
        - Work one after another: ADD.  Work inside other work: MULTIPLY.
        - Always ask "N of what?" (words, or letters in a word?).
        - Group Anagram (sorted key) = O(N * K log K) time, O(N * K) space.
        - Top K Frequent = O(N log N) time because of .sort(), O(N) space.
        - The output array is not counted as extra space.

       * BUGS I HIT (CHECK THESE)
        - .sort and .values need () to be called.
        - .push() returns the new length, not the array.
        - [...map] makes a NEW array every time, so save the sorted one in a variable.
        - A Map uses .set, a Set uses .add.
        - Strings have no .sort(). Spread to an array, sort, then join.
        - Declare variables (let count = 0) and match the parameter names.

        * INTERVIEW ROUTINE
        Brute force -> its time and space -> what is slow -> which data structure fixes it
        -> code it -> trace one example by hand -> final time and space.

        PRODUCT OF ARRAY EXCEPT SELF (unfinished)
        answer[i] = (product of everything to the left of i) * (product of everything to the right of i)
        For [1, 2, 3, 4]:
        left  = [1, 1, 2, 6]
        right = [24, 12, 4, 1]
        answer = [24, 12, 8, 6]
        Task: rebuild left and right from a blank file, then combine them.

        TODO: TOMORROW
       TODO:  1. Redo Two Sum from a blank file (20 min).
       TODO:  2. Redo Group Anagram from a blank file (20 min).
       TODO:  3. Say the log table and the Top K complexity out loud (15 min).
       TODO: 4. Finish Product of Array Except Self (15 min).
       TODO:  5. Start Two Pointers: how to reverse an array with two fingers (30 min).

 */

//    6th October,2056
/*
    ! DSA
    TODO: REVISION 
    1. The one idea from today (5 min).
    Read this once and don't try to memorise it:

    Two pointers walk toward each other. Each step, move only one pointer, and use a rule to choose which.

    2. Re-type one small solution from memory (15 min). Pick the easiest one:

    Reverse an array with two pointers, or
    Two Sum on a sorted array (too big, so move right; too small, so move left)

    If you get stuck for 5 minutes, peek once, close it, and try again.

    3. Say one complexity out loud (5 min).

    "Two pointers is O(N) time and O(1) space, because each pointer only moves inward and never goes back."

    4. Container With Most Water, just the fix (15 min).
    Write the 4-line loop body from my last message. You don't need to solve anything new.

    ⏭️ What to skip tonight
    No new problems.
    No complexity theory. You've done plenty today.
    Don't reread everything. A short recall does more than a long reread.
    💡 One thing that helps

    Write one sentence about what you got stuck on today (for example: "I moved both pointers instead of one"). Next time you'll catch it faster.

    TODO : Tomorrow: about 2 hours, in this order

    1. Warm-up: redo from a blank file (35 min)
    Container With Most Water: the fixed loop (15 min). Test [1, 8, 6] (expect 6) and [1, 8, 6, 2, 5, 4, 8, 3, 7] (expect 49).
    Valid Palindrome, the version where pointers skip non-letters (20 min).

    2. Say it out loud (10 min)
    For each one, say: the brute force, its time and space, then the two-pointer version, its time and space. Speak it, don't just think it.

    3. One new idea (40 min): 3Sum (Blind 75)
    Given an array, find all triplets that add up to 0.
    Don't try to solve it cold. We'll build it in small steps, using what you already know:
    sort the array, then
    fix one number, and
    use two pointers on the rest, exactly like your sorted Two Sum.
    You already know each piece, so it's mostly about fitting them together.

    4. Hashing keep-alive (15 min)
    Redo Two Sum (the hashmap version) from a blank file. Just that one, so hashing stays fresh.

    5. Close the day (10 min)
    Write one sentence on what went wrong today, and one on what went right.

    ⚖️ Two rules for the day
    If one step takes more than 20 minutes, stop, note where you got stuck, and move on.
    If you're tired again, it's fine to stop after step 2. A short, clear day beats a long, foggy one.
 */

/*
 */