"use client"; // 클라이언트 컴포넌트 지시어 추가
import "@/styles/test.css";

const AverCheckLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <div className="test-css">
        {children}
      </div>
    </div>
  );
};

export default AverCheckLayout;
