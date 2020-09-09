import { TileItemView } from "./TileItemView.js"
import { TileItemService } from "./TileItemService.js";
import { TileItemController } from "./TileItemController.js";

export const TileItemModule = (id) => {
    const view = new TileItemView(id);
    const service = new TileItemService();
    return new TileItemController(view, service);
}