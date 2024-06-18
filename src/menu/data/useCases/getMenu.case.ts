import { Menu } from "@/menu/domain/entities/menu";

import UseCase from "@/shared/data/useCase/useCase";

export type GetMenuCaseOutput = Promise<Array<Menu>>;

export interface GetMenuCase extends UseCase<null, GetMenuCaseOutput> {
  execute(): GetMenuCaseOutput;
}
