# [터득 🖱️](https://toudeuk.kr/)

## Index

#### &emsp; [➤ 프로젝트 소개](#-프로젝트-소개)<br>

#### &emsp; [➤ 프로젝트 설계](#-프로젝트-설계)<br>

#### &emsp; [➤ 기능 소개](#-기능-소개)<br>

#### &emsp; [➤ 백엔드 구축 과정](#-백엔드-구축-과정)<br>

#### &emsp; [➤ 산출물](#-산출물)<br>

<br>

# 🖱️ 프로젝트 소개

- ## 기획 배경

  '터득'은 특정 조건에 따라 선정된 회원에게 보상을 지급하는 클릭 게임으로, 사용자에게 재미와 보상을 제공하는 서비스입니다.
  <br><br>
  이 서비스는 선착순 쿠폰 발행, 멤버십 리워드, 한정 이벤트와 같은 고객 참여형 프로그램을 운영하는 기업들에게 솔루션을 제공할 목적으로 개발되었습니다.

- ## 서비스 소개

  ### 이벤트성 클릭 게임 플랫폼

  1. 최다 클릭 회원, 마지막 클릭 회원 등 특정 조건에 따라 선정된 회원에게 보상을 지급하는 플랫폼

  2. 실시간으로 게임 진행 상황을 확인하고 참여할 수 있는 인터랙티브 플랫폼

  3. 적립한 포인트를 통해 다양한 기프티콘을 구매할 수 있는 리워드 시스템

  4. 트래픽과 동시성 처리를 고려한 안정적인 아키텍처

<br>

- ## 프로젝트 기간

  | 프로젝트 기간 | 2024.10.14 ~ 2024.11.29 (7주) |
  | ------------- | ----------------------------- |

  <br>

- ## 팀 소개

  | Contributors | Role | Position                                     |
  | ------------ | ---- | -------------------------------------------- |
  | 박보람       | 팀장 | - UI/UX디자인<br> - 퍼블리싱<br>- 프론트엔드 |
  | 　김연지     | 팀원 | - UI/UX디자인<br> - 퍼블리싱<br>- 프론트엔드 |
  | 　양준영     | 팀원 | - 백엔드                                     |
  | 　이인준     | 팀원 | - 백엔드                                     |
  | 　정하림     | 팀원 | - 백엔드                                     |
  | 　황성민     | 팀원 | - Infra<br> - 백엔드                         |

<br>

# 🖱️ 프로젝트 설계

- ## 개발 환경

  FE: Next.js 14.2, TypeScript, Zustand
  BE: Java 17, SpringBoot 3.3.3, Apache Kafka  
  DB: Redis 7.4 MySQL 8.0  
  Infra: Ubuntu 20.04, Docker

  <h3>Frontend</h3>
  <p>
  <img alt="typescript" src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white">
  <img alt="HTML5" src="https://img.shields.io/badge/HTML5-E34F26.svg?&style=for-the-badge&logo=HTML5&logoColor=white"/>
  <img alt="NEXT" src="https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white">
  <img alt="CSS" src="https://img.shields.io/badge/CSS-1572B6.svg?&style=for-the-badge&logo=CSS3&logoColor=white"/>
  <img alt="Tailwind" src="https://img.shields.io/badge/TailwindCSS-38B2AC?style=for-the-badge&logoColor=white&logo=tailwindcss">

  </p>
  <h3>Backend</h3>
  <p>
  <img alt="JAVA" src="https://img.shields.io/badge/Java 17-ED8B00?style=for-the-badge&logo=openjdk&logoColor=white">
  <img alt="SpringBoot" src="https://img.shields.io/badge/springboot-%236DB33F.svg?style=for-the-badge&logo=springboot&logoColor=white">
    <img alt="Kafaka" src="https://img.shields.io/badge/Apache%20Kafka-000?style=for-the-badge&logo=apachekafka">
  </p>

  <h3>Database</h3>
  <p>
    <img alt="Redis" src="https://img.shields.io/badge/Redis-DC382D?style=for-the-badge&logo=redis&logoColor=white">
  <img alt="Mysql" src="https://img.shields.io/badge/mysql-4479A1.svg?style=for-the-badge&logo=mysql&logoColor=white">
  </p>

  <h3>Infra</h3>
  <p>
  <img alt="ubuntu" src="https://img.shields.io/badge/ubuntu-E95420?style=for-the-badge&logo=ubuntu&logoColor=white"> 
  <img alt="docker"src="https://img.shields.io/badge/docker-2496ED?style=for-the-badge&logo=docker&logoColor=white"> 
  <img alt="Nginx" src="https://img.shields.io/badge/nginx-009539?style=for-the-badge&logo=nginx&logoColor=white"> 
  <img alt="jenkins"src="https://img.shields.io/badge/Jenkins-D24939?style=for-the-badge&logo=Jenkins&logoColor=white">
  <br>

  <h3>성능 테스트 & 모니터링</h3>
  <p>
  <img alt="ngrinder"src="https://img.shields.io/badge/ngrinder-green?style=for-the-badge&logo=ngrinder&logoColor=white">
  <img alt="grafana"src="https://img.shields.io/badge/grafana-orange?style=for-the-badge&logo=grafana&logoColor=white">
    <img alt="prometheus"src="https://img.shields.io/badge/prometheus-red?style=for-the-badge&logo=prometheus&logoColor=white">
  </p>

    <h3>ETC</h3>
  <p>
  <img alt="ngrinder"src="https://img.shields.io/badge/socket-blue?style=for-the-badge&logo=socket.io&logoColor=white">
  <img alt="grafana"src="https://img.shields.io/badge/stomp-orange?style=for-the-badge&logo=stomp&logoColor=white">
  <img src="https://img.shields.io/badge/socket-010101?style=for-the-badge&logo=socket.io&logoColor=white">
  </p>

  <h3>협업 툴</h3>
  <p>
  <img alt='jira' src="https://img.shields.io/badge/Jira-0052CC?style=for-the-badge&logo=Jira&logoColor=white">
  <a href="https://www.notion.so/C202-11f9285c91d880829416f709f4432732">
  <img alt='notion' src="https://img.shields.io/badge/Notion-black?style=for-the-badge&logo=Notion&logoColor=white">
  </a>
  </p>

<br>

<br>
  
<br>

# 🖱️ 기능 소개

  <!-- 1. 최다 클릭 회원, 마지막 클릭 회원 등 특정 조건에 따라 선정된 회원에게 보상을 지급하는 리워드 시스템

  2. 실시간으로 게임 진행 상황을 확인하고 참여할 수 있는 인터랙티브 플랫폼
  
  3. 적립한 포인트를 통해 다양한 기프티콘을 구매 -->

- ### **1.&nbsp; 특정 조건에 따라 선정된 회원에게 보상을 지급**

  <p style='font-size:16px; font-weight:bold;'>1.1 목록1.1</p>
  <p style='font-size:16px;'>&emsp;1.1.2 목록1.1.1</p>
  <p style='font-size:16px;'>&emsp; 설명</p>
  <img alt='func1.1.1' src='./readme-image/UI/' height=300px style="padding-left: 20px;">
  <img alt='func1.1.1' src='./readme-image/UI/' height=300px>
  <img alt='func1.1.1' src='./readme-image/UI/' height=300px>
  <p style='font-size:16px; '>&emsp;1.1.2 목록1.1.2</p>
  <p style='font-size:16px;'>&emsp; 설명</p>
  <img alt='func1.1.2' src='./readme-image/UI/' height=300px style="padding-left: 20px;">
  <img alt='func1.1.2' src='./readme-image/UI/' height=300px>
  <br><br>

  <p style='font-size:16px; font-weight:bold;'>1.2 목록1.2</p>
  <img alt='func1.2' src='./readme-image/UI/' height=300px style="padding-left: 20px;">
  <img alt='func1.2' src='./readme-image/UI/' height=300px>

<br>
  
* ### **2.&nbsp; 실시간 랭킹 및 보상 확인**
  <p style='font-size:16px; font-weight:bold;'>2.1 목록2.1</p>
  <p style='font-size:16px;'>&emsp; 설명</p>
  <img alt='func2.1' src='./readme-image/UI/' height=300px style="padding-left: 20px;">
  <img alt='func2.1' src='./readme-image/UI/' height=300px>
  <img alt='func2.1' src='./readme-image/UI/' height=300px>
  <br><br>

  <p style='font-size:16px; font-weight:bold;'>2.2 목록2.2</p>
  <p style='font-size:16px;'>&emsp; 설명</p>
  <img alt='func2.2' src='./readme-image/UI/' height=300px style="padding-left: 20px;">
  <img alt='func2.2' src='./readme-image/UI/' height=300px>
  <img alt='func2.2' src='./readme-image/UI/' height=300px>
  <br><br>
  
<br>
  
* ### **3.&nbsp; 기프티콘 구매 및 사용**
  <p style='font-size:16px; font-weight:bold;'>3.1 <del>얻은 리워드로 기프티콘 구매 어쩌고...<del></p>
  <p style='font-size:16px;'>&emsp; 설명</p>
  <img alt='func3.1' src='./readme-image/UI/' height=300px style="padding-left: 20px;">
  <img alt='func3.1' src='./readme-image/UI/' height=300px>
  <img alt='func3.1' src='./readme-image/UI/' height=300px>
  <br><br>
    
<br><br>

# 🖱️ 백엔드 구축 과정 및 성능 테스트

## 테스트 조건

```java
server.tomcat.threads.max=200
server.tomcat.threads.min-spare=10
spring.datasource.hikari.maximum-pool-size=10
spring.datasource.hikari.minimum-idle=10
```

# Vuser

total : 100

init : 25 (100초 마다 25명씩 증가)

<img src="./README-IMG/ngrinder_test/Vuser.png">

<br><br><br><br>

### **1-1단계&nbsp; DB 격리 수준 Serializable**

```
Mysql의 DB 트랜젝션 격리 수준을 Serializable로 하여 동시성 문제를 해결합니다.

TPS : 190.6
Peak TPS :  220
MTT : 436.50 ms
```

### TPS

<img src="./README-IMG/ngrinder_test/Only MySQL-serializable-connection10_TPS.png">

### MTT

<img src="./README-IMG/ngrinder_test/Only MySQL-serializable-connection10_MTT.png">

<br><br><br><br>

### **1-2단계&nbsp; MySQL + Pessimistic Lock(비관락)**

```
클릭이 동시에 일어나는 게임행의 클릭 카운트에 비관적 락을 걸어 동시성 문제를 해결합니다.
TPS : 78.4
Peak TPS :  96
MTT : 1,061.24 ms
```

### TPS

<img src="./README-IMG/ngrinder_test/Only MySQL + 비관락_TPS.png">

### MTT

<img src="./README-IMG/ngrinder_test/Only MySQL + 비관락_MTT.png">

### **2단계&nbsp; Redis + MySQL**

```
싱글 스레드로 작동하는 레디스를 이용하여 동시성 문제를 해결합니다.
TPS : 328.0
Peak TPS :  381
MTT : 253.95 ms
```

### TPS

<img src="./README-IMG/ngrinder_test/Redis + MySQL + No Lock_TPS.png">

### MTT

<img src="./README-IMG/ngrinder_test/Redis + MySQL + No Lock_MTT.png">

<br><br><br><br>

### **3단계&nbsp; Redis + 내부 Kafka + MySQL (Kafka 파티션: 1개)**

```
짧은 시간에 몰리는 DB 쓰기 요청에 대해 안정성을 확보하기 위해 Kafka 메시징 큐를 이용하였습니다.
```

### TPS

<img src="./README-IMG/ngrinder_test/Redis + 내부 Kafka_TPS.png">

### MTT

<img src="./README-IMG/ngrinder_test/Redis + 내부 Kafka_MTT.png">

<br>

<br>

<br><br>

<br>

### **5단계&nbsp; Redis + 외부 Kafka + MySQL**

```
카프카의 컨슈머를 별도 외부의 서버로 옮겨 주 서버의 부하를 분산 시킵니다.
```

### TPS

<img src="./README-IMG/ngrinder_test/Redis + 외부 Kafka_TPS.png">

### MTT

<img src="./README-IMG/ngrinder_test/Redis + 외부 Kafka_MTT.png">

# 🖱️ 산출물

#### [⚙️ Architecture](./readme-image/Architecture.png)

#### [⚙️ ERD](./readme-image/ERD.png)

#### [📑 요구사항 명세서]()

#### [📑 API 명세서](./readme-image/Swagger)

<br><br>

### 커밋 컨벤션

- `[FEAT]` : 새로운 기능 추가

- `[FIX]` : 버그 수정

- `[DOCS]` : 문서 수정

- `[STYLE]` : 코드 포맷팅, 세미콜론 누락, 코드 변경이 없는 경우

- `[REFACTOR]`: 코드 리펙토링DOCS

- `[TEST]` : 테스트 코드, 리펙토링 테스트 코드 추가

- `[CHORE]` : 빌드 업무 수정, 패키지 매니저 수정

- `[MERGE]` : 병합
