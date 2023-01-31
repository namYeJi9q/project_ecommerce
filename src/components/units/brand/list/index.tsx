import { useMoveToPage } from "@/src/components/commons/hooks/customs/useMoveToPage";

export default function BrandMain() {
  const { onClickMoveToPage } = useMoveToPage();

  return (
    <>
      <div>
        <h2>BEST</h2>
      </div>
      <button onClick={onClickMoveToPage("/brand/new")}>상품등록</button>
      <div></div>
    </>
  );
}
