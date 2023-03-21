# 제약조건
```SQL
제약 조건 확인하기
SELECT * FROM information_schema.table_constraints;

제약 조건 삭제하기
ALTER TABLE [테이블명] DROP CONSTRAINT [제약조건이름];

ALTER TABLE [테이블명] DROP FOREIGN KEY [제약조건이름];

제약조건 추가하기
외래키
ALTER TABLE [테이블명] ADD CONSTRAINT [제약조건이름] FOREIGN KEY(컬럼명)

REFERENCES [부모테이블명](PK컬럼명) [ON DELETE CASCADE / ON UPDATE CASCADE];

기본키
ALTER TABLE [테이블명] ADD CONSTRAINT [제약조건이름] PRIMARY KEY(컬럼명);

낫널제약조건 추가
ALTER TABLE [테이블명] MODIFY [컬럼명] [데이터타입] CONSTRAINT [제약조건이름] NOT NULL;





ALTER TABLE 테이블명 ADD COLUMN 컬럼명 타입 제약조건

ALTER TABLE 테이블명 ADD CONSTRAINT 제약조건명 FOREIGN KEY(대상 컬럼) REFERENCES 참조되는테이블(대상 컬럼)


```