# MVC Pattern
## Model1
<img src="../image/image%20(3).png"/>

- JSP에서 모든 로직과 출력을 처리합니다.
- 즉 JSP 페이지에 비지니스 로직을 처리하기 위한 코드와 웹브라우저에 결과를 출력하는 코드가 섞여 있습니다.
## MVC- Model2
<img src="../image/image%20(4).png"/>

- 모든 요청을 서블릿이 받아 처리하고 JSP 페이지로 포워드 합니다.
- 서블릿은 클라이언트(브라우저) 요청을 구분하여 처리합니다.
## Model2 방식 = MVC pattern
<img src="../image/TT0zIyD060Vm_Jx5Czh1Wj79mQMpa-1IEgJ9AQMNUqfwHHp53CLGLAXI9G45gIyen1gb1JzHx_8TlBoqs8ZhS___x-wvhcKo2WRfjbkyOxgc0qtJQX-wsEDs3Hcw85oJT_KHvU9NoaAdWrpFziIn1deECmYfrrXBZngmlWFr6dBX8cFKRS0sh6rKGDqErUIDh9nKgscqgEdObew5bzB_9AkvLDn5cx8iPLGW6KtLLq0MmznP.png"/>



- Model: 비즈니스 로직 및 데이터 처리 담당
- View: 모델이 처리한 결과 데이터의 화면 생성 담당
- Controller: 요청 처리 및 흐름 제어 담당
## JavaBeans/JSP/Servlet (JSP Model2)
<img src="../image/ROsn2eD038RtUugyG1qS7JfKw50e58Gkud1gMiJp8Z5Q-lQDLlGe7Uu8Nxu__r1PXn2ReMryRzbsKDggVJADlax94OEmzOEkq4jWLTJrv9LbyjO3O-TYO_BKDOeAE1mXpv0dXrAORO8eKhuw9k2pVh6JFQ5MQM2Vlv7jL9XPGjbjrlN_5Jq9Wb0FzDWn971cyfBgOt8EUHLB4g5kSOFk1AvKe_lZp8K9t1jycGy0.png">