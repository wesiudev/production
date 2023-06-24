import { store } from "@/common/redux/store";
import ImagesGrid from "./ImagePreview/ImagesGrid";

function SSRImageGrid() {
  return (
    <div>
      <ImagesGrid images={store.getState().images.browseImages} />
    </div>
  );
}

export default SSRImageGrid;
