# JDBC 시작하기!

1. IntelliJ를 연다
2. 새 프로젝트를 누른다
3. 이름, 위치, 고급설정(그룹ID, 아티펙트ID)는 임의로 설정한다
4. JDK는 temurin

> 다음의 의존성을 추가해준다.
> 각각 mysql, 오라클, mssql
```xml
 <dependency>
      <groupId>com.mysql</groupId>
      <artifactId>mysql-connector-j</artifactId>
      <version>8.0.32</version>
    </dependency>
    <dependency>
      <groupId>com.oracle.database.jdbc</groupId>
      <artifactId>ojdbc8</artifactId>
      <version>19.3.0.0</version>
    </dependency>
    <dependency>
      <groupId>com.microsoft.sqlserver</groupId>
      <artifactId>mssql-jdbc</artifactId>
      <version>9.4.1.jre11</version>
    </dependency>

  </dependencies>
```
## MySql JDBC 시작하기
```java
import java.sql.*;
public class FirstConnection {

  private static final String DRIVER_NAME = "com.mysql.cj.jdbc.Driver";
  private static final String DRIVER_URL = "jdbc:mysql://localhost/AIR";
  private static final String USER_NAME = "root";
  private static final String PASSWORD = "rkdgus4197";
  Connection conn = null;
  Statement statement = null;

  ResultSet resultSet = null;
  public void connection() {
    try {
      Class.forName(DRIVER_NAME);
      conn = DriverManager.getConnection(DRIVER_URL, USER_NAME, PASSWORD);
      statement = conn.createStatement();
      resultSet = statement.executeQuery("select * from airports");

      System.out.println("접속 성공 :"+resultSet);
      while(resultSet.next()){
        System.out.println(resultSet.getInt(1));
      }
      resultSet.close();
      statement.close();
      conn.close();

    }
    catch (Exception e) {
      e.printStackTrace();
    }
  }
}
```