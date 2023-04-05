# CGI(Common Gateway Interface)
- 웹 서버가 외부 프로그램을 실행할 수 있도록 해주는 인터페이스 명세
  - 외부 프로그램 = 동적 웹 콘텐츠를 생성하는 역할
  - c,c++,java,php,go
- 웹 서버와 CGI프로그램간의 규칙
<img src="https://nhnacademy.dooray.com/share/tree/0Cyc2JLUQtuFUwGTpR2zbw/pages/3445004075896402392/attach-files/3445005332437136141"/>
- 환경 변수나 표준 입출력을 다룰 수 있는 프로그램 언어라면 어떤 언어든지 확장하여 이용 가능
- 실행속도나 텍스트 처리의 용이함 등의 이유로 perl, 파이썬, 루비 등의 스크립트 언어를 주로 사용
<ul>
<li>컴파일 방식
<ul>
<li>기계어. 컴파일된 상태</li>
<li>c++, c</li>
</ul>
</li>
</ul>

<li>인터프리터 방식
<ul>
<li>스크립트 언어</li>
<li>asp(asp), php(.php), python(.py), per(.pl)</li>
<li>스크립트 엔진
<ul>
<li>해당 스크립트를 실행할 수 있는 엔진</li>
</ul>
</li>
<li>즉시 코드를 수정할 수 있음</li>
</ul>
</li>
# Servlet
- Java를 사용하여 동적 웹 콘텐츠를 생성하는 서버측 프로그램 
  - 쉽게 말해, Java로 만든 CGI 프로그램 같은 것
  - Servlet 인터페이스를 정의
    - 즉 Servlet 인터페이스를 구현  -> java로 구현한 cgi 프로그램이라 할 수 있습니다.
- 요청과 응답
  - 서블릿은 자바 클래스로 웹 애플리케이션을 작성
  - 웹서버의 웹컨테이너에서 작성된 애플리케이션 실행
  - 웹컨테이너는 서블릿 인스턴스를 생성해, 서버에서 실행
  - 서블릿 인스턴스는 요청과 응답에 맞는 동작 수행
- 특징
  - 클라이언트의 요청에 동적으로 작동하는 웹 애플리케이션 컴포넌트
  - html을 사용해 response
  - 자바의 스레드를 이용
  - MVC패턴에서 컨트롤러로 이용
  - udp보다 느림
  - html 변경 시 Sevlet 재 컴파일
- Servlet 컨테이너
  - 생명주기 관리
    - 서블릿 컨테이너
## CGI의 단점을 해결한?
- 매 요청마다 새로운 프로세스가 생성(CGI) -> 멀티 스레드로 해결
  - 스레드는 누가 생성하고 관리하나 -> 컨테이너의 등장
<img src= "https://nhnacademy.dooray.com/share/tree/0Cyc2JLUQtuFUwGTpR2zbw/pages/3445070575802592067/attach-files/3445095563869220443"/>



# Java EE Architecture
## JAVA EE 
- 자바언어 플랫폼 중의 하나
- 대용량, 멀티 티어의 엔터프라이즈 애플리케이션을 실행햐고 운영할 수 이있느느 기술과 환경을 제공
- 특정 운영체제와 미들웨어에 종속되지 않고 정보교환 및 애플리케이션 호환이 가능한 플랫폼을 제공하는 것이 목적
<img src="image.png"/>

t