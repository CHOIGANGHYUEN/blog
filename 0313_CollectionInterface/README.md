# Collection

<img src="/Users/ganghyun/Documents/GIT/blog/blog/0313_CollectionInterface/스크린샷 2023-03-13 오후 3.34.33.png"></img>

---

## Iterator과 Iterable

- Iterable 인터페이스는 for-each의 대상이 될 수있는 추상적 동작을 정의
  - iterator() 메소드를 통해 Iterator 타입 객체 변환
  - forEach 메소드와 Spliterator Default 메소드 제공
- Iterator 인터페이스는 Colection에 저장된 요소들을 읽는 방법을 표준화
  - 사전적으로 반복자
  - 읽을 요소가 남았는지 확인 - boolean hasNext()
  - 남은 요소를 반환 - Object next()

### 사용 에제

### Student class

```java
public class Lecture implements Iterable {
    Student[] students;
    int index = 0;

    public Lecture(int size) {
        students = new Student[size];
    }

    public void add(Student student) {
        if (this.index >= students.length) {
            System.out.println("max");
        } else {
            students[index++] = student;
        }
    }

    @Override
    public Iterator iterator() {
        return new LectureIterator(this);
    }

}
```

:rocket:

### Lecture class

```java
public class Lecture implements Iterable {
    Student[] students;
    int index = 0;

    public Lecture(int size) {
        students = new Student[size];
    }

    public void add(Student student) {
        if (this.index >= students.length) {
            System.out.println("max");
        } else {
            students[index++] = student;
        }
    }

    @Override
    public Iterator iterator() {
        return new LectureIterator(this);
    }

}
```

### LectureIterator class

```java
public class LectureIterator implements Iterator {
Lecture lecture;
int index = 0;

    public LectureIterator(Lecture lectue) {
        this.lecture = lectue;

    }

    @Override
    public boolean hasNext() {
        return this.index < lecture.students.length;
    }

    @Override
    public Object next() {
        return this.lecture.students[index++];
    }

}
```

---

## Comparable과 Comparator

- 값 비교에 사용한다.
- 사용자 스스로가 값을 비교하는 기준을 정할 수 있다

### 사용 예시

### **USER** 클래스

```java
class User implements Comparable<User> { // implements Comparable<User> {
    private final int userNo;
    private final String userName;
    private final int userAge;

    public String getUser() {
        return userName;
    }

    public int getUserAge() {
        return userAge;
    }

    public User(int userNo, String userName, int userAge) {
        this.userAge = userAge;
        this.userName = userName;
        this.userNo = userNo;
    }

    @Override
    public int compareTo(User o) {
        if (this.userAge == o.userAge) {
            return 0;
        } else if (this.userAge < o.userAge) {
            return 1;
        } else
            return -1;
    }
    //
    // To-do: override compareTo method here
    //

    //
    // To-do: override toString method here
    //
}
```

### **Users** 클래스

```java
public class Users<T> implements Iterable<T> {
    List<T> userList = new ArrayList<>();

    public void add(T user) {
        userList.add(user);
    }

    @Override
    public Iterator iterator() {
        return this.userList.iterator();
    }
}
```

### **DesendingOrder** 클래스

```java
public class DesendingOrder implements Comparator<User> {
    @Override
    public int compare(User o1, User o2) {
        if (o1.getUserAge() > o2.getUserAge()) {
            return 1;
        } else if (o1.getUserAge() < o2.getUserAge()) {
            return -1;
        } else
            return 0;
    }

}


```

---

## List 인터페이스

- List느 중복을 허용, 저장 순서가 유지되는 자료구조
- 길이가 가변적, 데이터 사이 빈공간 허용 안함
- 배열의 인덱스와 같은 유일 식별자가 없음
- Collection 인터페이스의 서브 타입
- Vector, LinkedList, ArrayList 등이 List의 서브타입

<img src = "/Users/ganghyun/Documents/GIT/blog/blog/0313_CollectionInterface/스크린샷 2023-03-13 오후 1.12.13.png"></img>

### List인터페이스의 장점

- 데이터 크기에 따른 동적 할당
- 공간 낭비가 없음.
- 데이터의 삽입 삭제가 유용

---

## ArrayList

- 배열과 동일하게 연속된 메모리 공간 사용
  - index 사용가능
  - 기본 크기 10개로 할당된 후 가변적으로 크기가 변함
  - 생성된 크기 이상이 저장되면 메모리에 추가로 할당

---

## LinkedList

- 노드가 연결되는 구조
- 삽입 삭제가 쉽고 동적
  - 배열과 달리 데이터가 연속적을 존재하지 않음.
  - 모든 요소가 데이터를 연결한 형태의 자료구조
- 직접적으로 노드에 접근이 불가능함 = 순회방식의 접근

## Queue

# TIP!!

for-each문은

```java
users.foreach((item)->{System.out.println(item)})
```

으로도 사용가능

# Collection
