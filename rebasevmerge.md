# Merge
```
A --- B --- C  (develop)
       \
        D --- E  (feature/GAT-8-new-test)
```

``` bash
git switch develop

echo "A" > file1.txt
git add file1.txt
git commit -m "A"

echo "B" >> file1.txt
git commit -am "B"
```

``` bash
git switch -c feature/GAT-8-new-test

echo "D" > file2.txt
git add file2.txt
git commit -am "D"

echo "E" >> file.txt
git add file2.txt
git commit -am "E"
```

``` bash
git switch develop

echo "C" >> file1.txt
git add file1.txt
git commit -am "C"
```

``` bash
git log --oneline --graph --all --decorate
```

``` bash
git merge feature/GAT-8-new-test

git log --oneline --graph --all --decorate

op <--- commit avec 2 parents dans chaque branches
|\
| * d3a95cc (feature/GAT-8-new-test) E
| * 7bd4d9c D
* | 34e261c C
|/
* 3dcfa9b B
* e4a3009 A
``` 

# Rebase
```
A --- B --- C  (develop)
       \
        D --- E  (feature/GAT-9-new-test)
```


``` bash
git switch develop

echo "A" > file1.txt
git add file1.txt
git commit -m "A"

echo "B" >> file1.txt
git commit -am "B"
```

``` bash
git switch -c feature/GAT-9-new-test

echo "D" > file2.txt
git add file2.txt
git commit -am "D"

echo "E" >> file.txt
git add file2.txt
git commit -am "E"
```

``` bash
git switch develop

echo "C" >> file1.txt
git add file1.txt
git commit -am "C"
```

``` bash
git log --oneline --graph --all --decorate
```

``` bash
git checkout feature/GAT-9-new-test
git rebase develop
```

``` bash
git log --oneline --graph --all --decorate
```

``` bash
git checkout develop
git merge feature/GAT-9-new-test
```


