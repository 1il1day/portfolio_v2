## Portfolio_v2
---

### MainSection
- **Visual Studio Code**를 패러디한 UI로 구성된 소개 섹션입니다.  
- 코드 클릭 시 해당 내용에 맞는 코드가 작동하도록 구현했습니다.

### ProjectsSection
- 직접 참여한 프로젝트를 소개하는 섹션입니다.
- PC 버전에서 프로젝트 리스트를 스와이프 할 수 있습니다.
- 버튼 클릭 시 PC 너비 버전, Mobile 너비 버전, 프로젝트 기술서를 새 창으로 확인할 수 있도록 구성하였습니다.

### AboutSection
- 학력, 경력, 기술 스택, 자격증을 소개하는 섹션입니다.
- `GSAP`과 `ScrollTrigger`를 활용하여 카드가 뒤집히는 인터랙션을 구현하였습니다.

### ContactSection
- 연락처 정보를 안내하는 섹션입니다.
- 전화번호 클릭 시 전화 앱이 실행, 이메일 클릭 시 메일 앱이 실행됩니다.

---

## 폴더 구조
📁 src  
├── 📁 components  
│   ├── 📁 common                // 공통 컴포넌트  
│   │   ├── 📄 Badge.tsx         // 뱃지 UI  
│   │   ├── 📄 Header.tsx        // 헤더 컴포넌트  
│   │   ├── 📄 Icon.tsx          // 아이콘 컴포넌트  
│   │   ├── 📄 SectionTitle.tsx  // 섹션 타이틀  
│   │   └── 📄 SwiperTab.tsx     // 스와이퍼 탭 UI  
│   └── 📁 section               // 각 섹션별 컴포넌트  
│       ├── 📄 AboutSection.tsx     // 소개 섹션  
│       ├── 📄 ContactSection.tsx   // 연락처 섹션  
│       ├── 📄 MainSection.tsx      // 메인 섹션  
│       ├── 📄 ProjectsSection.tsx  // 프로젝트 섹션  
│       └── 📁 items  
│           ├── 📄 AboutCard.tsx           // About 카드 컨테이너  
│           ├── 📄 AboutCardItem.tsx       // About 카드 아이템  
│           ├── 📄 AboutCardSkillItem.tsx  // 스킬 리스트 아이템  
│           └── 📄 ProjectItem.tsx         // 프로젝트 아이템  
├── 📁 pages  
│   └── 📄 MainPage.tsx         // 메인 페이지
