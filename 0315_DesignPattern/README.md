# 💁디자인 패턴

- 소프트웨어 설계 기법
  - 특정 컨텍스트에서 반복적으로 발생하는 문제에 대한 재사용 가능한 해결책
  - 다른 상황에 맞게 사용될 수 있는 문제들을 해결하는데 쓰이는 서술 또는 템플릿
  - 프로그래머가 소프트웨어를 디자인 할 떄, 공통된 문제들을 해결하는데 쓰이는 형식화된 관행

## 디자인 패턴의 요소

- 패턴의 이름
- 문제
- 해법
- 결과

## 디자인 패턴 분류

- GoF 디자인 패턴
  - 생성 패턴 : 인스턴스 만드는 과정을 구조화
  - 구조 패턴 : 더 큰 구조를 생성하기 위해 객체르 합성하는 방법
  - 행위 패턴 : 객체/클래스 사이의 알고리즘이나 책임 분배에 관한 패턴
- 동시성 패턴
- 아키택처 패턴
- 클라우드 디자인 패턴
- 기타 패턴

## 생성 패턴

객체의 생성과 관련된 패턴

- 객체의 생서과 조합을 캡슐화해 특정 객체가 생성되거나 변경되어도 프로그램 구조에 영향을 크게 받지 않는 유연성 제공
- 종류
  - 추상 팰토리
  - 빌더
  - 팩토리메소드
  - 프로토 타입
  - 싱글턴

# 싱글턴

```java
public class SingletomExample {
    private static SingletomExample singletone;

    private SingletomExample() {
    }

    public static SingletomExample getSingleton() {
        return singletone;
    }
}
```

- 활용
  - 클래스의 인스턴스가 오직 하나임을 보장, 정의된 접근 방식에 의해서만 접근해야 할 떄 사용
  - 유일하게 존재하는 인스턴스가 상속에 의해 확장되어야 할 때
- 결과
  - 유일하게 존재하는 인스턴스로의 접근을 통제
  - 변수 영역을 줄임
  - 오퍼레이션의 정제를 가능하도록 함
  - 인스턴스의 개수변경이 자유로움
  - 클래스 오퍼레이션을 사용하는 것 볻 ㅏ유연

## 비지터 패턴

- 배경
  - 변화가 적은 데이터에 대한 다양한 연산이 존재할 경우, 시스템에 대한 이해 및 유지보수, 변경 작업이 어려움.
  - 데이터에 대해 새로운 연산을 추가하고자 할 때, 관련된 클래스를 재작성하고 다시 컴파일 해야함.
- 해법

  - 각 클래스에서 서로 관련된 연산들을 추려모아 별도의 하나의 객체로 묶고, 연산 객체가 데이터에 방문 하는 형태로 구성
  - 데이터는 연산 객체의 방문을 허락하는 형태로 데이터에 대한 연산을 수행

- 자바의 foreach문의 구현에 사용되었다.

## ex

방문자 인터페이스

```java
public interface ShapeVisitor {
  void visit(Circle circle);
  void visit(Rectangle rectangle);
  void visit(Triangle triangle);
}
```

구체적인 방문자

```java
public class AreaVisitor implements ShapeVisitor {
    private double area = 0.0;

    public double getArea() {
        return area;
    }

    @Override
    public void visit(Circle circle) {
        area += Math.PI * circle.getRadius() * circle.getRadius();
    }

    @Override
    public void visit(Rectangle rectangle) {
        area += rectangle.getWidth() * rectangle.getHeight();
    }

    @Override
    public void visit(Triangle triangle) {
        double s = (triangle.getSideA() + triangle.getSideB() + triangle.getSideC()) / 2.0;
        area += Math.sqrt(s * (s - triangle.getSideA()) * (s - triangle.getSideB()) * (s - triangle.getSideC()));
    }
}
```

객체인터페이스

```java
public interface Shape {
    void accept(ShapeVisitor visitor);
}
```

구체적인 객체 클래스

```java
public class Circle implements Shape {
    private double radius;

    public Circle(double radius) {
        this.radius = radius;
    }

    public double getRadius() {
        return radius;
    }

    @Override
    public void accept(ShapeVisitor visitor) {
        visitor.visit(this);
    }
}

public class Rectangle implements Shape {
    private double width;
    private double height;

    public Rectangle(double width, double height) {
        this.width = width;
        this.height = height;
    }

    public double getWidth() {
        return width;
    }

    public double getHeight() {
        return height;
    }

    @Override
    public void accept(ShapeVisitor visitor) {
        visitor.visit(this);
    }
}

public class Triangle implements Shape {
    private double sideA;
    private double sideB;
    private double sideC;

    public Triangle(double sideA, double sideB, double sideC) {
        this.sideA = sideA;
        this.sideB = sideB;
        this.sideC = sideC;
    }

    public double getSideA() {
        return sideA;
    }

    public double getSideB() {
        return sideB;
    }

    public double getSideC() {
        return sideC;
    }

    @Override
    public void accept(ShapeVisitor visitor) {
        visitor.visit(this);
    }
}
```

```java
객체 구조
public class ShapeCollection {
    private List<Shape> shapes = new ArrayList<>();

    public void add(Shape shape) {
        shapes.add(shape);
    }

    public void remove(Shape shape) {
        shapes.remove(shape);
    }

    public void accept(ShapeVisitor visitor) {
        for (Shape shape : shapes) {
            shape.accept(visitor);
        }
    }
}
```
