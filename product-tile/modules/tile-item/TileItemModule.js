import { TileItemView } from "./TileItemView.js"
import { TileItemViewModel } from "./TileItemViewModel.js";
import { TileItemController } from "./TileItemController.js";

export const TileItemModule = (id) => {
    const view = new TileItemView(id);
    const viewModel = new TileItemViewModel();
    return new TileItemController(view, viewModel);
}