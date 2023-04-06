1. 다음에서 클로저를 분석하시오
```markdown
위 코드에서 outerFunction은 내부에 innerFunction 함수를 정의하고, innerFunction을 반환합니다. 반환된 innerFunction은 변수 innerFunc에 저장됩니다.

innerFunction은 outerVar와 innerVar 두 개의 변수를 사용합니다. outerVar는 outerFunction에서 정의된 변수이며, innerFunction에서 접근할 수 있습니다. innerVar는 innerFunction에서 정의된 변수이며, innerFunction 내부에서만 사용할 수 있습니다.

여기서 중요한 점은 innerFunction이 outerFunction의 스코프에 접근할 수 있다는 것입니다. innerFunction은 자신의 내부 스코프에 outerVar에 접근하면서, outerFunction의 실행이 종료된 이후에도 outerVar에 접근할 수 있게 됩니다. 이러한 현상을 클로저(Closure)라고 부릅니다.

따라서 innerFunc()을 호출하면, outerVar와 innerVar의 합인 30이 콘솔에 출력됩니다. 이는 innerFunction이 outerVar에 대한 클로저를 생성하여 outerFunction의 실행이 종료된 이후에도 outerVar에 접근할 수 있기 때문입니다.
```
---