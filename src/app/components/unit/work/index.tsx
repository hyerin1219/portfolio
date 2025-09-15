export default function Work() {
  return (
    <section className="mt-30 w-full">
      <h2 className="text-3xl font-bold mb-6">Work</h2>

      <div className="flex flex-col gap-6">

        {/* work 01 */}
        <div className="flex items-start justify-between gap-6">
          <p className="min-w-[120px]">2023.03 ~ 2025.06</p> 
          <div className="w-[60%]">
            <p className="font-semibold mb-2">아이스캔디_주임 (웹 퍼블리셔)</p>
            <ul className="list-disc list-inside space-y-1 ">
              <li>HTML, CSS, 사내 라이브러리를 이용하여 디지털 교과서, 전자저작물 콘텐츠 개발</li>
              <li>디자이너와 개발자와 협업하여 학습용 서비스 제작</li>
              <li>웹 접근성을 고려한 마크업</li>
              <li>학습용 콘텐츠 화면 구조 설계 및 프로토타입 제작</li>
            </ul>
          </div>
        </div>

        {/* work 02 */}
        <div className="flex items-start justify-between gap-6">
          <p className="min-w-[120px]">2017 ~ 2022</p> 
          <div className="w-[60%]">
            <p className="font-semibold mb-2">제과제빵 분야 근무</p>
            <ul className="list-disc list-inside space-y-1 ">
              <li>협업과 켜뮤니케이션을 통해 제품 제작</li>
              <li>정해진 프로세스를 지키며 보완점 개선</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
