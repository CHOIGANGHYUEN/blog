# JDBC 프로그래밍 모델

- 단순한 프로그래밍 모델
  - 데이터베이스에 연결
  - 데이터베이스에 명령을 내림
    - 명령 수행으로 반환되는 결과가 있으면
    - 사용
  - 연결을 닫는다
- 모든 형태의 데이터 소스에 대해 완벽히 동일한 프로그래밍 모델 적용

<img src ="../image/스크린샷 2023-05-02 오전 9.22.15.png">

- 데이터베이스 연결과 연결 해제
  - 드라이버 로드(1회)
    - Connection 객체를 통해 연결
    - Statement/PreparedStatement/CallableStatement 객체를 통해 명령을 내린다.
      - 명령 수행으로 반환결과 ? ResultSet으로 받는다
      - ResultSet 객체를 사용해 반환 받은 결과를 이용
    - 모든 연결을 닫는다

## 드라이버 로드

- JDBC 드라이버는 jar형태로 데이터베이스 벤더에서 제공
- Class.forName() 메소드로 드라이버로드
  - java의 reflection 기능
  - DriverManager를 통해 사용할 수 있도록 처리
  - 반드시 예외처리

```java
String driverName = "com.mysql.cj.jdbc.Driver";
    try {
    
    Class.forName(driverName);
    
    }catch (Exception e) {
    
        e.printStackTrace();
    
    }
```

## 데이터베이스에서 명령 수행

- Statement 객체를 통해 명령 수행
  - executeQuery() 메소드
    - SELECT
    - ResultSet 객체 반환
  - executeUpdate()
    - INSERT / UPDATE / DELETE
    - 성공여부나 영향 받은 투플 수를 Int타입으로 반환
