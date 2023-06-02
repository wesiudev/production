import { store } from "@/common/redux/store";
import ImagesGrid from "./ImagePreview/ImagesGrid";

function SSRImageGrid() {
  const browseImages = store.getState().images.browseImages;
  return (
    <div>
      <ImagesGrid images={browseImages} />
    </div>
  );
}

export default SSRImageGrid;
