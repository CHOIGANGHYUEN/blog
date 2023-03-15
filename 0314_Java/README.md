# 추상화

## 분해와 추상화😎

- 분해☀️ : 큰 문제를 해결하기 위한 개본 패러다임 : 분할과 정복

  - 각 하위 문제는 동일한 세부 수준에 있음
  - 각 하위 문제는 독립적으로 해결 가능
  - 하위 문제에 대한 솔루션을 결합해 원래 문제를 해결

- 추상화☀️ : 관련성 있는 속성과 그렇지 않은 속성 분리

  - 문제를 더 간단한 문제로 변환하기 위해 특정 세부 사항을 무시
  - 프로그램 설계 프로세스의 전형
  - 추상화 수준을 정의해 복잡한 구현을 계층화

### 파라미터화에 의한 추상화

- 데이터를 파라미터로 대체하여 데이터의 ID 추상화
- 형식 파라미터를 사용해 계산을 추상화
- 일반성을 달성하는 중요한 수단
- 절차를 일반화하고 더 유용하게 만듦

#### EX

하드 코딩 예시

```java
int arr[] = {1, 2, 3, 4, 5};
int sum = 0;
for(int i = 0; i < 5; i++) {
    sum += arr[i];
}
System.out.println(sum);
```

파라미터화에 의한 추상화 예시

```java
int arr[] = {1, 2, 3, 4, 5};
int sum = calculateSum(arr);
System.out.println(sum);

int calculateSum(int[] arr) {
    int sum = 0;
    for(int i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}
```

### 명세에 의한 추상화

- 구현 세부사항에서 사용자가 의존할 수 있는 동작까지 추상화
- 의존하는 동작을 지원하는 구현에서 모듈을 분리
- 프로시저 본문에 의해 설명된 계산을 추상화
- 두가지 고유 규칙
  1. 프로시저를 실행 한 후 호출이 수행될 때 전제 조건이 유지되면 사후 조건이 유지된다고 가정
     - 프로시저 사용자가 프로시저를 사용하기 위해 프로시저 본문을 볼 필요가 없음
  2. 사후 조건에서 추론 할 수 있는 속성만 가정
     - 관련성이 없는 것으로 추정되는 일부 정보를 생략한다는 것을 분명히함
- 추가 설명🔭
  - 사전조건은 함수나 프로시저에 전달되는 인자값의 조건으로, 이 조건을 만족하지 않으면 함수나 프로시저는 제대로 작동하지 않습니다.
  - 사후조건은 함수나 프로시저가 반환하는 값의 조건으로, 이 조건을 만족해야만 함수나 프로시저가 제대로 작동한 것으로 간주됩니다.
  - 사후조건에서 추론 가능한 속성만 가정하면, 사용자는 함수나 프로시저의 내부 동작 방식을 몰라도 정확하게 사용할 수 있습니다. 예를 들어, 정렬 알고리즘이 어떻게 작동하는지 몰라도, 정렬 알고리즘이 제대로 동작했는지 여부를 반환된 값으로 판단할 수 있습니다.
- 프로시저란 무엇인가요?
  - 프로시저는 함수와 비슷하지만 반환값이 없거나 void를 반환합니다. 예를 들면 정렬 알고리즘에서 배열을 받아 배열을 리턴하면 함수이고, 배열을 직접 수정하면 프로시저입니다!

### 다양한 추상화

- 프로시저 추상화
  - 새로운 작업 도입가능
- 데이터 추상화
  - 새로운 유형의 데이터 개체를 도입
- 반복 추상화
  - 항목을 얻는 방법에 대한 세부적인 정보를 공개하지 않고 컬렉션의 반복을 추상화
- 타입 계층 구조
  - 개별 데이터 유형에서 관련된 유형의 패밀리로 추상화 할 수 있음

# 객체지향 디자인 원칙(SOLID)

1. SRP, 단일 책임 원칙 (Single Responsibility Principle)
   - 한 클래스는 하나의 책임
2. OCP, 개방 폐쇄 원칙 (Open-Closed Principle)
   - 소프트웨어 요소는 확장엔 열려있으나, 변경엔 닫혀 있어야 함
3. LSP, 리스코프 치환 원칙 (Liskov Substitution Principle)
   - 객체는 프로그램의 정확성에 영향을 주지 않으며, 하위 타입의 인스턴스로 치환 될 수 있어야함.
4. ISP, 인터페이스 분리 원칙 (Interface Segregation Principle)
   - 인터페이스를 구체적이고 작은 단위로 분리해 꼭 필요한 인터페이스만 상속
5. DIP, 의존성 역전 원칙 (Dependency Inversion Principle)
   - 상위 모듈을 하위 모듈에 의존하면 안되고, 추상화에 의존해야함

## 단일 책임 원칙

- 모든 클래스는 단 하나의 책임을 수행, 그 책임은 완전히 캡슐화
  - 책임: "변경 하려는 이유"
  - 클래스나 모듈은 변경하려는 단 하나의 이유를 가져야함
  - 해당 모듈이 여러 액터들에 대해 책임지지 않음
- 변경이 필요할 때 수정할 대상이 명확
- 응집도는 높이고, 결합도는 낮춤
- 원칙들의 기초

# TIP

Extract Class 방법은 Move Method, Move Field 두 가지 방법을 사용합니다.
Move Method
메소드가 자신이 정의된 클래스보다 다른 클래스의 기능을 더 많이 사용하고 있다면, 이 메소드를 가장 많이 사용하고 있는 클래스에 비슷한 몸체를 가진 새로운 메소드를 만들고, 이전 메소드는 간단한 위임 으로 바꾸거나 완전히 삭제하는 방법입니다. 절차는 아래와 같습니다.

1. 옮길 대상이 되는 메소드에 의해 사용되는 부분을 모두 조사한다.
2. 소스클래스의서브클래스나슈퍼클래스에서옮기려고하는메소드에대한다른선언이있는지확
   인한다.
3. 타겟 클래스에 메소드를 정의한다.
4. 소스 메소드에서 타겟 메소드로 코드를 복사한다. 그리고 그 메소드가 타겟 클래스에서 동작하도록
   적절히 수정한다.
5. 타켓 클래스를 컴파일 한다.
6. 소스 클래스에서 적절한 타켓 객체를 참조하는 방법을 결정한다.
7. 소스 메소드를 위임 메소드로 바꾼다.
8. 컴파일, 테스트를 한다.
9. 소스 메소드를 제거한다면 소스 메소드를 참조하고 있는 부분을 타겟 메소드를 참조하도록 수정한다.
10. 컴파일, 테스트를 한다.
    Move Field
    필드가 자신이 정의된 클래스보다 다른 클래스에 의해 더 많이 사용되고 있다면, 타겟 클래스에 새로운 필드를 만들고 기존 필드를 사용하는 모든 부분을 변경하는 방법입니다. 절차는 아래와 같습니다.
11. 필드가 public으로 선언되어 있으면 캡슐화 한다.
12. 컴파일, 테스트를 한다.
13. 타겟 클래스에 필드와 그 필드에 대한 get/set 메소드를 만든다.
14. 타겟 클래스를 컴파일 한다.
15. 소스 클래스에서 타겟 클래스를 참조하는 방법을 결정한다.
16. 소스 클래스에 있는 필드를 제거한다.
17. 소스 필드를 참조하고 있는 모든 부분을 타겟 클래스에 있는 적당한 메소드를 참조하도록 바꾼다.
18. 컴파일, 테스트를 한다.

## EX)

```java
public class BankAccount {
    private String accountNumber;
    private String ownerName;
    private BigDecimal balance;
    private static String nextAccountNumber = "0";

    public BankAccount(String ownerName, BigDecimal balance) {
        this.accountNumber = CreateAccountNumber.createAccountNumber();
        this.ownerName = ownerName;
        this.balance = balance;
    }

    public String getAccountNumber() {
        return this.accountNumber;
    }

    public String getOwnerName() {
        return this.ownerName;
    }

    public BigDecimal getBalance() {
        return this.balance;
    }

    public void setBalance(BigDecimal bigDecimal) {
        this.balance = bigDecimal;
    }

}
```

```java
public class CreateAccountNumber {
    private static String nextAccountNumber = "0";

    public static String createAccountNumber() {
        int accountNumber = Integer.parseInt(nextAccountNumber);
        nextAccountNumber = Integer.toString(++accountNumber);
        return nextAccountNumber;
    }

}

```

```java
public class DepositProcess {

    public static void deposit(BankAccount account, BigDecimal bigDecimal) {
        if (Integer.parseInt(bigDecimal.toString()) < 0)
            return;
        account.setBalance(account.getBalance().add(bigDecimal));
    }

    public static void deposit(BankAccount account, int amount) {
        deposit(account, new BigDecimal(amount));
    }

    public static void deposit(BankAccount account, String amount) {
        deposit(account, new BigDecimal(amount));
    }
}

```

```java
public class PrintAccount {
    public static void printAccount(BankAccount account) {
        System.out.println("Account Number: " + account.getAccountNumber());
        System.out.println("Owner Name: " + account.getOwnerName());
        System.out.println("Balance: " + account.getBalance().toString());
    }
}

```

```java
public class WithDrawProcess {
    public static void withDraw(BankAccount account, BigDecimal amount) {
        if (account.getBalance().compareTo(amount) == -1)
            return;
        account.setBalance(account.getBalance().subtract(amount));
    }
}
```

## 개방 폐쇄의 원칙

- 소프트 웨어 확장엔 열려있고, 변경엔 닫힌다.
  - 요구사항의 변경이나 추갓항이 발생하더라도 기존 구성요소에는 수정이 일어나지 않아야함.
  - 쉽게 확장이 가능해 재사용이 가능하도록 구성
  - 계층 구조 설계시 변경될 수 있는 부분, 변경 되지 않는 부분 명확히 구분
- 관리 가능하고 재사용 가능한 코드를 만드는 기반
- 동작의 묶음을 표현하고, 인터페이스로 구현한 후 서브 타이핑

## 리스코프 치환 원칙

- 정사각형이 직사각형의 서브타입이라면, 프로그램의 속성변경없이 정사각형을 직사각형으로 바꿔 쓸 수 있어야 한다.
  - 서브 타입 수퍼타입을 대체 할 수 있어야한다.

### 공변성

- 메소드으

## 의존 관계 역전 원칙

- 프로그래머는 추상화에 의존해야 하며, 구체화에 의존하면 안된다.
  - 상위 모듈은 하위 모듈에 의존해서는 안된다.
  - 추상화는 세부 사항에 의존해서는 안되며, 세부 사항이 추상화에 의존해야 한다.
- 소프트웨어 모듈을 분리하는 특정 형식을 지칭
- 상위 계층이 하위 계층에 의존하는 전통적인 의존 관계를 반전시킴으로서 상위 계층이 하위 계층의 구현으로 부터 독립되게 한다.
