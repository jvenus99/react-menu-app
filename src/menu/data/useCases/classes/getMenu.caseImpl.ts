import { ApiPort } from "@/shared/data/port/api.port";
import {
  GetMenuCase,
  GetMenuCaseOutput,
} from "@/menu/data/useCases/getMenu.case";
import { Menu } from "@/menu/domain/entities/menu";

export type ApiGetMenuRequestBody = string;

export type ApiGetMenuResponseBody = {
  sections: Array<{
    id: number;
    name: string;
    images: Array<{ id: number; image: string }>;
    items: Array<{
      id: number;
      name: string;
      description: string;
      price: number;
      images: Array<{ id: number; image: string }>;
    }>;
  }>;
};

export class GetMovieCaseImpl implements GetMenuCase {
  constructor(
    private readonly api: ApiPort<
      ApiGetMenuRequestBody,
      ApiGetMenuResponseBody
    >
  ) {}

  async execute(): GetMenuCaseOutput {
    try {
      const response = await this.api.request({
        urlPath: `/menu`,
        method: "GET",
      });

      const data = transformResponse(response.body);

      return data;
    } catch (e) {
      console.log(e);
      throw e;
    }
  }
}

function transformResponse(response: ApiGetMenuResponseBody): Array<Menu> {
  return response.sections.map((section) => ({
    id: String(section.id),
    name: section.name,
    image: section.images[0]?.image,
    items: section.items.map((item) => ({
      id: String(item.id),
      name: item.name,
      description: item.description,
      price: item.price,
      image: item.images[0]?.image,
    })),
  }));
}
