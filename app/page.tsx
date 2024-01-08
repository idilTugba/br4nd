import UploadImg from "@/component/forms/group/Upload";
import ProductCanvas from "@/component/3dElements/Canvas";
import StoreProvider from "../lib/redux/StoreProvider";

export default function Home() {
  return (
    <div className="h-screen w-screen">
      <StoreProvider>
        <ProductCanvas />
        <div className="absolute z-10 top-4 left-4">
          <UploadImg />
        </div>
      </StoreProvider>
    </div>
  );
}
