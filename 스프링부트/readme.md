# Introducing

## 목차
- Introducing
- Simple Rest Application Development using Spring Boot
- Initialize and Run Spring Boot Project
- Simple Web Application Development using Spring Boot
- Dependency Management and Main Function
- Auto Configuration And Externalized Configuration
- Developer Tools
- Spring Boot Actuator
- Test
- Custom Spring Boot Starter

### 교육의 목적
- Spring Boot의 구조를 알게 된다.
- Spring Boot로 애플리케이션 개발이 가능해 진다.
- Spring Boot의 배포 모듈인 Starter를 개발할 수 있게 된다.
- Spring Boot의 Product-Ready 기능을 활용할 수 있게 된다.

### 교육의 대상
- Spring Framework의 DI, IoC를 알고 있는 개발자.
- Spring Boot로 개발하고 있지만 더 잘 사용하고 싶은 개발자.
- 동작 원리를 알고 싶은 개발자.

### 교육 난이도
- 초급 ~ 중급

### Spring Boot 프로젝트 시작 (2012.10.17)
- https://jira.spring.io/browse/SPR-9888

### 요청 요약
- 서블릿이 필요없는 통합 컴포넌트 모델
- 개발자가 애플리케이션 설정을 위해 하나의 설정 모델만 학습하면 되는 환경
- public static void main 으로 실행/종료 단순화
- 단순한 자바 클래스로딩 구조
- 단순한 개발툴

### 회신 (by Phil Webb 2013.08)
- 스프링 프레임워크를 부분적으로 수정하는 대신, Spring Boot 라는 프로젝트를 시작
- 이 요청은 Spring Boot 의 기원이라고 할 수 있다.

![Spring Boot Timeline](image.png)

## Spring Boot Release
### Spring Boot Release Note
- https://github.com/spring-projects/spring-boot/wiki

### Spring Boot 0.5.0.M1 발표
- https://spring.io/blog/2013/08/06/spring-boot-simplifying-spring-for-everyone

### Spring Boot 1.5.X.RELEASE (2017.01 – EOL)
- Java 8 이상 지원
- Spring Framework 4.3
- Tomcat 8.5, Hibernate 5.0
- Configuration Properties 에 JSR303 지원
### Spring Boot 버전

- Spring Boot 2.0.X
  - Java Base line : java 8 ( java 7 이하를 지원하지 않음 )
  - Spring Framework 5.0
  - Default Datasource : HikariCP

- Spring Boot 2.3.X.RELEASE(2020.05)
  - java 14 지원
  - graceful shutdown 지원
  - spring-boot-starter-validation 이 spring-boot-starter-web 에서 제외됨

- Spring Boot 2.4(2020.11)
  - java 15 지원
  - 새로운 버전 스킴 적용 ( 2.3.5.RELEASE -->2.4.0 )
  - Docker Image Building 지원(jar)

- Spring Boot 2.5(2021.05)
  - java 16 지원
  - 환경변수 Prefix
  - Docker Image Building 지원(war)

- Spring Boot 2.6(2021.11)
  - java 16의 record 를 @ConfigurationProperties 로 사용가능
  - 순환참조 빈은 금지가 기본 (spring.main.allow-circular-references)

- Spring Boot 2.7(2022.05)
  - auto configuration 파일 위치 변경
  - spring.factories --> META-INF/spring/org.springframework.boot.autoconfigure.AutoConfiguration.imports

- Spring Boot 3.0.0-GA(2022.11)
  - java 17 지원 ( java 17 이상부터 사용가능)
  - Spring Framework 6
## Spring Boot 목표

### 목표 1: Java -jar로 실행 가능
- 사용법: `$ java -jar jarfile`

### 목표 2: 빠르고 광범위한 getting-started 경험
- 별도의 설정 없이 즉시 사용 가능 (out-of-the-box)
- 비기능 요구사항을 기본적으로 제공
- 코드 생성이나 XML 설정이 필요하지 않음

### Spring Boot의 기능
- 단독으로 실행 가능한 애플리케이션 생성
  - 실행형 jar, 실행형 war
- 내장형 웹 애플리케이션 서버 지원
  - Tomcat, Jetty, Undertow, Netty for WebFlux
- 기본 설정된 Starter 모듈
  - 의존성 (라이브러리 의존성)
  - 버전 호환성 보장 (dependencyManagement)
  - 자동 설정 (Auto Configuration)

### 상용화에 필요한 통계, 상태 점검, 외부 설정 지원
- Actuator (Health, metrics)
- 외부 설정

### Spring Framework과의 비교
- 라이브러리 의존성을 pom.xml에서 직접 설정해야 함
  - Spring Boot에서는 `spring-boot-starter-{module}`만 설정하면 필요한 라이브러리 설정 완료
- 버전 정보를 직접 설정하고 테스트 필요
  - `spring-boot-starter-parent`에서 Spring 모듈의 버전 및 3rd Party 라이브러리 버전도 제공
  - 런타임에만 확인 가능한 성가신 작업!
- Web Application Server에 배포해야 함
  - Spring Boot에서는 내장형 Web Application Server를 제공하여 서버를 구매하거나 설정할 필요가 없음

# 스프링 부트를 이용한 간단한 Rest 애플리케이션 개발

## [Demo] 간단한 의존성 주입 연습

### 목표
- 학생 성적 조회 시스템을 개발한다.
- 테스트 코드로 결과를 확인한다.

![image](image.png)

### 프로젝트 생성
https://start.spring.io
프로젝트 메타데이터
- groupId: com.nhnacademy.edu.springboot
- artifactId: student
- version: 1.0.0
- Java: 11
의존성
- lombok

![image](image.png)

### 자동 생성된 코드 살펴보기 - pom.xml
- spring-boot-starter-parent
  - 전체 프로젝트의 버전 정보를 관리함
  - BOM (Bill of Materials - 자제 명세서)
  - BOM에 기술된 정보로 3rd Party 라이브러리 호환성을 보장할 수 있음
  - 프로젝트의 dependency에는 버전 정보를 기술하지 않음

- spring-boot-starter
  - 스프링의 다른 기능을 사용하고 싶으면 spring-boot-starter-{기술명}으로 대부분 작성할 수 있음

### 자동 생성된 코드 살펴보기 – StudentApplication.java
- SpringApplication
  - spring-boot 실행의 시작점
  - static method인 run으로 실행함
  - SpringApplication의 객체를 생성 후 실행하거나 SpringApplicationBuilder로 실행 가능함
Sure! Here's the code snippet using Markdown syntax:

```java
@SpringBootApplication
public class StudentApplication {

    public static void main(String[] args) {
        SpringApplication.run(StudentApplication.class, args);
    }

}
```

[시연] 간단한 Dependency Injection 실습
자동생성 코드 살펴보기 – `@SpringBootApplication`
다음 Annotation을 포함한 Meta Annotation:
- `@EnableAutoConfiguration`: 자동설정 기능을 활성화합니다. 클래스 패스에 라이브러리가 존재하면 자동으로 Bean을 설정합니다.
- `@ComponentScan`: `basePackage` 하위의 컴포넌트를 스캔하여 Bean으로 등록합니다.
- `@SpringBootConfiguration`: 설정된 클래스 파일은 설정(java config)으로 사용할 수 있습니다.

[시연] 간단한 Dependency Injection 실습
학생 정보 클래스 (이름, 점수)
```java
@Getter
@Setter
@EqualsAndHashCode
public class Student {
    private final String name;
    private final Integer score;

    public Student(String name, Integer score) {
        this.name = name;
        this.score = score;
    }
}
```


```java
package com.nhn.edu.springboot.student;

import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class DummyStudentRepository implements StudentRepository {

    @Override
    public List<Student> findAll() {
        return List.of(new Student("zbum", 100), new Student("manty", 80));
    }
}
```

```java
public interface StudentService {
    List<Student> getStudents();
}
```

[시연] 간단한 Dependency Injection 실습
Dependency Injection 방식 3가지

1. 생성자 주입
   - 생성자를 선언하면 인자에 객체 주입
   - 권장하는 방식

2. `@Autowired`
   - 클래스 변수에 `@Autowired` 애너테이션을 설정하여 객체 주입

3. Setter
   - setter 메서드를 선언하여 객체 주입

[시연] 간단한 Dependency Injection 실습
NhnStudentService.java 개발

```java
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class NhnStudentService implements StudentService {

    private final StudentRepository studentRepository;

    @Autowired
    public NhnStudentService(StudentRepository studentRepository) {
        this.studentRepository = studentRepository;
    }

    @Override
    public List<Student> getStudents() {
        return studentRepository.findAll();
    }
}
```

```java
@Service
public class NhnStudentService implements StudentService {

    private final StudentRepository studentRepository;

    public NhnStudentService(StudentRepository studentRepository) {
        this.studentRepository = studentRepository;
    }

    @Override
    public List<Student> getStudents() {
        return studentRepository.findAll();
    }
}
```

```java
@Autowired
@Service
public class NhnStudentService implements StudentService {
    @Autowired
    private StudentRepository studentRepository;

    @Override
    public List<Student> getStudents() {
        return studentRepository.findAll();
    }
}
```

```java
@Service
public class NhnStudentService implements StudentService {
    private StudentRepository studentRepository;

    public void setStudentRepository(StudentRepository studentRepository) {
        this.studentRepository = studentRepository;
    }

    @Override
    public List<Student> getStudents() {
        return studentRepository.findAll();
    }
}
```

```java
@SpringBootTest
class NhnStudentServiceTest {
    @Autowired
    StudentService studentService;

    @Test
    void testGetStudents() {
        // when
        List<Student> actual = studentService.getStudents();
        // then
        Assertions.assertThat(actual).hasSize(2);
    }
}
```

[시연] JPA 실습
Maven 라이브러리 의존성 추가
- `pom.xml`에 다음 라이브러리 의존성을 추가합니다.
- in-memory 데이터베이스인 H2 Database를 사용합니다.

```xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-data-jpa</artifactId>
</dependency>

<dependency>
    <groupId>com.h2database</groupId>
    <artifactId>h2</artifactId>
    <scope>runtime</scope>
</dependency>
```

[시연] JPA 실습
Student.java 수정
- `@Entity` 어노테이션을 추가합니다.
- `@Id` 어노테이션을 추가합니다.
- 기본 생성자를 추가합니다.

```java
@Getter
@Setter
@EqualsAndHashCode
@Entity
public class Student {
    @Id
    private Long id;
    private String name;
    private Integer score;

    public Student() {
    }

    public Student(Long id, String name, Integer score) {
        this.id = id;
        this.name = name;
        this.score = score;
    }
}
```

### StudentRepository.java 수정

```java
package com.nhn.edu.springboot.student;

import org.springframework.data.jpa.repository.JpaRepository;

public interface StudentRepository extends JpaRepository<Student, Long> {

}
```

### StudentRepositoryTest.java 수정

```java
@Test    
void testStudentRepository() {        
    //given         
    Student zbum = new Student(1L, "zbum", 100);        
    studentRepository.save(zbum);        
    //when        
    Optional<Student> actual = studentRepository.findById(1L);        
    //then        
    Assertions.assertThat(actual).isPresent();        
    Assertions.assertThat(actual.get()).isEqualTo(zbum);    
}
```

[실습] JPA 적용 - Spring Boot로 JPA 적용 실습

### [시연] MySql 사용

#### 목표
- MySql에 데이터를 저장하도록 수정한다.
- MySql은 Docker로 실행한다.

#### UML
![UML](image.png)

### [시연] MySql 사용

#### MySql 준비
다음 명령어로 MySql을 실행합니다.

```
$ docker run --name edu-mysql -e MYSQL_ROOT_PASSWORD=test -d -p3306:3306 mysql:5.7.35
```

#### 접속 테스트
```
$ mysql -u root -p -P3306 -h 127.0.0.1
```

#### 데이터베이스 생성
```
mysql> create database student_test;
```

### [시연] MySql 사용

#### dependency 추가
H2는 삭제하고, `mysql-connector-java`를 추가합니다.

```xml
<dependency>
    <groupId>mysql</groupId>
    <artifactId>mysql-connector-java</artifactId>
    <version>8.0.31</version>
</dependency>
```

application.properties 수정
・ JPA 테이블 생성 및 SQL 로깅.

spring.jpa.generate-ddl=true 
spring.jpa.show-sql=true
・ datasource

spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver
spring.datasource.url=jdbc:mysql://localhost:3306/student_test?serverTimezone=UTC&characterEncoding=UTF-8 

spring.jpa.hibernate.naming.physical-strategy=org.hibernate.boot.model.naming.PhysicalNamingStrategyStandardImpl

spring.datasource.username=root 
spring.datasource.password=test
[실습] MySql 사용
Spring Boot로 MySql 적용 실습
[시연] RestApi 개발
목표
・ 학생정보 조회/등록 RestApi를 개발한다.

개발 API
GET /students
GET /students/{id}
POST /students
DELETE /students/{id}
UML
image.png

[시연] RestApi 개발
API 설계
GET /students
 * Response
 [
  {
    "id" : 1,
    "name" : "zbum",
    "score" : 100
  },
  {
    "id" : 2,
    "name" : "manty",
    "score" : 80
  }
]
GET /students/{id}
 * Response
  {
    "id" : 1,
    "name" : "zbum",
    "score" : 100
  }
POST /students
Request
{
   "id" : 1,
   "name" : "zbum",
   "score" : 100
}
Response
status code : 201
{
    "id" : 1,
    "name" : "zbum",
    "score" : 100
  }

DELETE /students/{id}
Response
{
  "result" : "OK"
}
[시연] RestApi 개발
의존성 변경
spring-boot-starter 를 spring-boot-starter-web 으로 변경
[시연] RestApi 개발
StudentService.java 수정
StudentService 에 다음과 같이 메서드를 추가한다.
List<Student> getStudents(); 

Student createStudent(Student student); 

Student getStudent(Long id); 

void deleteStudent(Long id);

[시연] RestApi 개발
StudentController.java 수정
GET /students API – 학생정보 리스트 조회
StudentService 인터페이스의 getStudents() 메서드를 사용
@RestController
public class StudentController {
    private final StudentService studentService;

    public StudentController(StudentService studentService) {
        this.studentService = studentService;
    }

    @GetMapping("/students")
    public List<Student> getStudents() {
        return studentService.getStudents();
    }
}
[시연] RestApi 개발
StudentController.java 수정
GET /students/{id} API – 학생정보 1건 조회
StudentService 인터페이스의 getStudent 메서드를 사용
@RestController
public class StudentController {    
    << 생략 >>    
    @GetMapping("/students/{id}") 
    public Student getStudent(@PathVariable Long id) { 
        return studentService.getStudent(id); 
    }
}
[시연] RestApi 개발
StudentController.java 수정
POST /students API – 학생정보 등록
StudentService 인터페이스의 createStudent 메서드를 사용
@RestController
public class StudentController {
    << 생략 >>
   @PostMapping("/students")
    @ResponseStatus(HttpStatus.CREATED) 
    public Student createStudent(@RequestBody Student student) { 
        return studentService.createStudent(student);
    }
}

[시연] RestApi 개발
StudentController.java 수정
DELETE /students/{id} API – 학생정보 삭제
StudentService 인터페이스의 deleteStudent 메서드를 사용
@RestController
public class StudentController {
    <<생략>>
    @DeleteMapping("/students/{id}")
    public String deleteStudent(@PathVariable Long id) { 
        studentService.deleteStudent(id);
        return "{\"result\":\"OK\"}”;
    }
}

[시연] RestApi 개발
NhnStudentService.java 개발 - getStudents
@Service 비즈니스 로직 구현
student table 의 전체 데이터 조회
JpaRepository 가 제공하는 findAll() 메서드 사용
@Service
public class NhnStudentService implements StudentService {

    << 생략 >>

    @Override
    @Transactional(readOnly=true)
    public List<Student> getStudents() {
        return studentRepository.findAll(); 
    }
}
[시연] RestApi 개발
NhnStudentService.java 개발 - getStudent
id 에 해당하는 데이터 조회
JpaRepository의 findById() 메서드 사용
존재하지 않는 ID 요청시 에러처리
@Service
public class NhnStudentService implements StudentService {

    << 생략 >>

    @Override
    @Transactional(readOnly=true)
    public Student getStudent(Long id) {
        return studentRepository.findById(id).orElseThrow();
    }
}
[시연] RestApi 개발
NhnStudentService.java 개발 - createStudent
Student 정보를 DB 에 저장
JpaRepository의 save() 메서드 사용
이미 존재하는 ID 는 IllegalStateException 처리
commit/rollback 을 해야 하는 경우 @Transactional 사용
@Service
public class NhnStudentService implements StudentService {

    << 생략 >>

    @Override
    @Transactional
    public Student createStudent(Student student) {
        boolean present = studentRepository.findById(student.getId()).isPresent();
        if ( present ) throw new IllegalStateException("already exist " + student.getId());

        return studentRepository.save(student);
    }
}
[시연] RestApi 개발
NhnStudentService.java 개발 - deleteStudent
・ Student 정보를 DB 에서 삭제
・ JpaRepository의 deleteById() 메서드 사용
・ commit/rollback 을 해야 하는 경우 @Transactional 사용

@Service
public class NhnStudentService implements StudentService {

    << 생략 >>

    @Override
    @Transactional
    public void deleteStudent(Long id) {
        studentRepository.deleteById(id);
    }
}
[시연] RestApi 개발
API Test - curl 사용
Student 정보 등록
$ curl -XPOST -H "Content-Type: application/json" \
  -d '{"id": 2, "name": "Manty", "score": 100}' \
  http://localhost:8080/students
Student 정보 등록 결과
{
"id" : 2,
"name" : "Manty",
"score" : 100
}
[시연] RestApi 개발
API Test - curl 사용
・ Student 정보 목록 조회
$ curl -XGET  http://localhost:8080/students
Student 목록 정보 조회 결과
[
{
"id" : 1,
"name" : "Manty",
"score" : 100
},
{
"id" : 2,
"name" : "Manty",
"score" : 100
}
]
[시연] RestApi 개발
API Test - curl 사용
Student 정보 단건 조회
$ curl -XGET  http://localhost:8080/students/1
Student 정보 조회 결과
{
"id" : 1,
"name" : "Manty",
"score" : 100
}
[시연] RestApi 개발
API Test - curl 사용
Student 정보 삭제
$ curl –XDELETE  http://localhost:8080/students/1
Student 정보 삭제 결과
{
"result" : "OK"
}
[실습] Spring Boot 로 RestApi 서비스 개발
Spring Boot로 RestApi 서비스 개발 실습
[Quiz]
[quiz] Simple Rest Application Develop