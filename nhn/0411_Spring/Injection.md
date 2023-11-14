# 생성자 주입
```java
public class ConstructorInjectionMain {

  public static void main(String[] args) {
    try (ClassPathXmlApplicationContext context = new ClassPathXmlApplicationContext(
        "greeting1.xml")) {
      GreetingService greetingService = context.getBean("greetingService", GreetingService.class);
      greetingService.greet();
    } catch (Exception e) {
      e.printStackTrace();
    }
  }
}
```

```java
public class EnglishGreeter implements Greeter {
  @Override
  public void sayHello() {
    System.out.println("Hello");
  }
  @Override
  public void init() {
    System.out.println(Class.class.getSimpleName()+"init");
  }

  @Override
  public void destroy() {
    System.out.println(Class.class.getSimpleName()+"destroy");

  }
}
```
```java
public interface Greeter {
  public void sayHello();
  public void init();
  public void destroy();
}
```
```java
public class GreetingService {
  private Greeter greeter;
  public GreetingService(Greeter greeter){
    this.greeter = greeter;
  }
  public void greet(){
    greeter.sayHello();
  }
}
```
```java
public class KoreanGreeter implements Greeter{
@Override
  public void sayHello(){
  System.out.println("안녕하세요");
}

  @Override
  public void init() {
    System.out.println(Class.class.getSimpleName()+"탄생");
  }

  @Override
  public void destroy() {
    System.out.println(Class.class.getSimpleName()+"사망");

  }
}
```

# Setter Injection