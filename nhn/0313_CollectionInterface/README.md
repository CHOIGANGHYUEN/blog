# Collection

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

<img src = "https://user-images.githubusercontent.com/74634003/224629215-37fce3f3-3981-47a5-bfe6-d03d24696493.png"></img>

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

<img src="https://user-images.githubusercontent.com/74634003/224628758-8ad99b17-7e2f-43d0-a465-948c52314d4c.png"></img>

- 노드가 연결되는 구조
- 삽입 삭제가 쉽고 동적
  - 배열과 달리 데이터가 연속적을 존재하지 않음.
  - 모든 요소가 데이터를 연결한 형태의 자료구조
- 직접적으로 노드에 접근이 불가능함 = 순회방식의 접근

## Vector

<img src="https://user-images.githubusercontent.com/74634003/224629409-c41f8a70-ca71-4b27-b334-5a59f31f23e3.png"></img>

- Collection FrameWork가 추가되기전에 추가도니 레거시 클래스
- ArrayList와 유사, 제네릭 사용 할 수 있게 재 설계
- List인터페이스를 구현해 크기가 가변적
- ArrayList보단 별로
- 스레드에 안전하나, 동기화 비용이 발생해 ArrayList가 더 좋음

---

# Set

✨수학의 집합과 유사한 자료구조✨

- 집합과 유사한 자료구조 표현
- 중복된 요소를 허용하지 않음
- 저장 순서를 유지하지 않음
- HashSet, LinkedHashSet, TreeSet

```java
Set<String> set=new HashSet();

System.out.println("1.add color : "+ set.add("white"));
System.out.println("2.add color : "+ set.add("white"));
System.out.println("3.add color : "+ set.add("red"));

for(String s : set){
    System.out.println(s+" ");
}
```

### Set - HashSet

✨Set 인터페이스를 구현한 가장 대표적인 컬렉션✨

- 입력된 요소의 순서가 유지되지 않음
- 중복된 요소를 저장하지 않으며
- Hash 알고리즘으로 데이터를 맵핑
  - Hash에 의해 데이터의 위치를 특정시켜 해당 데이터를 **빠르게** 색인
  - 삽입, 삭제, 색인이 매우 빠른 컬렉션

### Set - TreeSet

<img src ="https://user-images.githubusercontent.com/74634003/224633734-7aa6638c-7d11-4554-8fe1-feedcbecc9c5.png"></img>

<p></p>

✨레드 블랙 트리로 구현됨✨

<p></p>
<img src="https://user-images.githubusercontent.com/74634003/224633962-aba69737-e08e-455f-8b46-204dfb5d0461.png">

- 중복을 허용 x, 저장 순서 x
- 정렬된 순서로 데이터를 저장
- 추가와 삭제에는 불리, 검색과 정렬에 유리

# MAP

✨Key - Value 쌍으로 이루어진 데이터를 저장하는 자료구조✨

- key는 중복 X
- value는 중복 O
- 입력된 순서 유지 X, 정렬 X
- 삽입, 삭제, 검색에 유리

### Map - HashMap

- Map 인터페이스로 구현
- Key, Value 쌍
- 해당 Key로 엑세스
- 스레드에 안전하지 않으나, 속도에 유리

### Map - HashTable

- Hash를 이용해 Key, Value 쌍으로 이루어진 데이터를 저장하는 전통적 자료구조
- HashMap과 동일한 방법으로 저장
- 스레드에 안전
- Collection FrameWork 이전부터 존재하던 레거시 클래스

# Collections 클래스

- Collection 객체를 위한 여러 메소드를 제공하는 유틸리티 클래스
- List, Set, Map등 모든 컬렉션 클래스에 사용
- 컬랙션 객체에 대한 생성, 정렬, 섞기, 병합, 검색 등 메소드 제공
- static 메소드

```java
List numbers = Arrays.asList(1, 3, 10, 5, 8, 9, 7, 2, 6, 4);
Collections.max(numbers);
Collections.min(numbers);
Collections.sort(numbers);
Collections.binarySearch(numbers,3);
Collections.reverse(numbers);
Collections.shuffle(numbers);
```

## Collections 동시성 처리

- 멀티 스레드 환경에서 동시성 처리가 필요
  - 하나의 컬렉션 객체에 여러 스레드가 접근시
  - 데이터 일관성ㅇ을 위한 Synchronize 처리가 필요
  - ArrayList, HashMap등엔 Collections 클래스를 사용

# TIP❗❗

for-each문은

```java
users.foreach((item)->{System.out.println(item)})
```

으로도 사용가능

# Collection
