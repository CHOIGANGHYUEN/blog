# getRealPath()
- 웹 어플리리케이션의 실제 경로를 반환하는 메소드
- 웹 어플리케이션의 루트 디렉토리를 기준으로 상대경로를 절대경로로 변환

```
request.getContextPath(); 
request.getRequestURI(); 
request.getHeader("REFERER"); 
request.getRealPath("/")
 

request.getContextPath()는 프로젝트의 Context path명을 반환한다.


요청 : http://localhost:8080/example/test.jsp 

리턴값 : /example

request.getRequestURI()는 웹전체 경로(프로젝트명+ 파일 경로)까지 반환한다.

요청 : http://localhost:8080/example/test.jsp

리턴값 : /example/test.jsp 



request.getHeader("REFERER")는 요청을 한 부모요청의 URL주소를 반환한다.

 

현재 페이지:  http://localhost:8080/example/test1.do

 

요청 페이지 :  http://localhost:8080/example/test.do

 

리턴값 : http://localhost:8080/example/test.do


request.getRealPath("/")는 서버 또는 로컬의 웹애플리케애션 서버의 docBase 설정값을 반환한다.

요청 : http://localhost:8080/example/test.jsp


리턴값 : D:\Project\webapps\example\

```