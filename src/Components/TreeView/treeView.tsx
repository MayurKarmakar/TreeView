import { Button, Input } from "@mui/material";
import { TreeItem, TreeView } from "@mui/x-tree-view";
import { FC, useState } from "react";
import { getDataType } from "../../Helpers/functions";
import { Client, Product, Seal } from "../../SharedTypes/sharedTypes";
import { clientExampleData } from "../../StaticData/statics";
import { ChevronRight, ExpandMore } from "@mui/icons-material";

const TreeViewContainer: FC = (): JSX.Element => {
  const [clientData, setClientData] = useState<Client[]>(clientExampleData);

  const buildTreeFromObjectData = (
    data: unknown,
    path: string,
    parentKey: string | undefined,
    key: string
  ): JSX.Element => {
    const valueType = getDataType(data);

    if (valueType === "Number" || valueType === "String") {
      return (
        <TreeItem nodeId={path} label={key} id={key} className="w-full px-2">
          <div className="flex flex-row w-full justify-center gap-2 px-2">
            <Input defaultValue={data} />
            <Button variant="contained" type="button" color="inherit">
              Update
            </Button>
          </div>
        </TreeItem>
      );
    }

    // return Object.entries(data as Seal[] | Product[]).map(
    //   ([key, value], index: number) => {
    //     return buildTreeFromObjectData(
    //       value,
    //       path.concat(`.${value}.${index}`),
    //       key,
    //       key
    //     );
    //   }
    // );
    return (
      <TreeItem nodeId={path.concat(`.${key}`)} label={parentKey}>
        {Object.entries(data as Seal[] | Product[]).map(
          ([key, value], index: number) => {
            return buildTreeFromObjectData(
              value,
              path.concat(`.${value}.${index}`),
              key,
              key
            );
          }
        )}
      </TreeItem>
    );
  };

  const buildTreeFromArrayData = (
    data: unknown,
    path: string,
    parentKey: string
  ): JSX.Element | null => {
    const valueType = getDataType(data);

    if (valueType === "Array") {
      return (
        <TreeItem nodeId={parentKey} label={parentKey}>
          {(data as Seal[] | Product[]).map((item: Seal | Product) => {
            return buildTreeFromObjectData(item, path, parentKey, parentKey);
          })}
        </TreeItem>
      );
    }

    return null;
  };

  const buildTree = (data: Client[]) => {
    return data.map((item: Client, index: number) => {
      return Object.entries(item).map(([key, value], idx: number) => {
        const valueType = getDataType(value);

        if (valueType !== "Array") {
          return buildTreeFromObjectData(
            value,
            key,
            undefined,
            key.concat(`.${index}.${idx}`)
          );
        } else {
          return buildTreeFromArrayData(
            value,
            key,
            key.concat(`.${index}.${idx}`)
          );
        }
      });
    });
  };

  return (
    <div className="flex flex-row w-2/5 justify-center gap-5 flex-wrap px-4">
      <TreeView
        aria-label="tree data viewer"
        defaultCollapseIcon={<ExpandMore />}
        defaultExpandIcon={<ChevronRight />}
        className="px-4"
      >
        {buildTree(clientExampleData)}
      </TreeView>
    </div>
  );
};

export default TreeViewContainer;
