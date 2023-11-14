# Listener
- Servlet Container가 수행한 특정한 타입의 동작(이벤트)을 감지해
- 해당 이벤트에 대해 별도의 작업을 수행하는 객체

## Listener 종류
<table>
<thead>
<tr>
<th>Event Source</th>
<th>Event</th>
<th>Event Listener</th>
<th></th>
</tr>
</thead>
<tbody>
<tr>
<td>ServletContext</td>
<td>ServletContextEvent</td>
<td><span style="color:#e11d21"><strong>ServletContextListener</strong></span></td>
<td><span style="color:#5319e7"><strong>웹 애플리케이션 시작, 종료</strong></span></td>
</tr>
<tr>
<td>ServletContext</td>
<td>ServletContextAttributeEvent</td>
<td>ServletContextAttributeListener</td>
<td>ServletContext 속성 변경</td>
</tr>
<tr>
<td>HttpSession</td>
<td>HttpSessionEvent</td>
<td><span style="color:#e11d21"><strong>HttpSessionListener</strong></span></td>
<td><span style="color:#5319e7"><strong>세션 시작, 종료</strong></span></td>
</tr>
<tr>
<td>HttpSession</td>
<td>HttpSessionBindingEvent</td>
<td>HttpSessionAttributeListener</td>
<td>세션 속성 변경</td>
</tr>
<tr>
<td>ServletRequest</td>
<td>ServletRequestEvent</td>
<td>ServletRequestListener</td>
<td>ServletRequest 생성, 종료</td>
</tr>
<tr>
<td>ServletRequest</td>
<td>ServletRequestAttributeEvent</td>
<td>ServletRequestAttributeListener</td>
<td>ServletRequest 속성 변경</td>
</tr>
</tbody>
</table>

## ServletContainerListener interface 및 Listener 등록
```java
javax.servlet.ServletContextListener interface
public interface ServletContextListener extends EventListener {
    default public void contextInitialized(ServletContextEvent sce) {}
    default public void contextDestroyed(ServletContextEvent sce) {}
}
```
```xml
<listener>
    <listener-class>com.nhnacademy.listener.WebAppListener</listener-class>
</listener>
```
## java.servlet.HttpSessionListener interface
```java
public interface HttpSessionListener extends EventListener {
    default public void sessionCreated(HttpSessionEvent se) {}
    default public void sessionDestroyed(HttpSessionEvent se) {}
}
```
