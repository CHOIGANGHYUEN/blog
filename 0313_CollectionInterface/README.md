# Collection

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
