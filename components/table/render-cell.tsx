import {User, Tooltip, Chip} from "@heroui/react";
import React from "react";
import {DeleteIcon} from "../icons/table/delete-icon";
import {EditIcon} from "../icons/table/edit-icon";
import {EyeIcon} from "../icons/table/eye-icon";
import {users} from "./data";

interface Props {
    user: (typeof users)[number];
    columnKey: string | React.Key;
}

export const RenderCell = ({user, columnKey}: Props) => {
    // @ts-ignore
    const cellValue = user[columnKey];
    switch (columnKey) {
        case "name":
            return (
                <User
                    avatarProps={{
                        radius: "lg",
                        src: user.avatar,
                    }}
                    name={cellValue}
                    description={user.email}
                />
            );
        case "role":
            return (
                <div>
                    <div>
                        <span className="text-bold text-small capitalize">{cellValue}</span>
                    </div>
                    <div>
                        <span className="text-bold text-tiny capitalize text-default-400">{user.team}</span>
                    </div>
                </div>
            );
        case "status":
            return (
                <Chip
                    size="sm"
                    variant="flat"
                    color={
                        cellValue === "active"
                            ? "success"
                            : cellValue === "paused"
                                ? "danger"
                                : "warning"
                    }
                >
                    <span className="uppercase text-xs">{cellValue}</span>
                </Chip>
            );

        case "actions":
            return (
                <div className="flex items-center gap-4 ">
                    <div>
                        <Tooltip content="Details">
                            <button onClick={() => console.log("View user", user.id)}>
                                <EyeIcon size={20} fill="#979797"/>
                            </button>
                        </Tooltip>
                    </div>
                    <div>
                        <Tooltip content="Edit user" color="secondary">
                            <button onClick={() => console.log("Edit user", user.id)}>
                                <EditIcon size={20} fill="#979797"/>
                            </button>
                        </Tooltip>
                    </div>
                    <div>
                        <Tooltip
                            content="Delete user"
                            color="danger"
                            onClick={() => console.log("Delete user", user.id)}
                        >
                            <button>
                                <DeleteIcon size={20} fill="#FF0080"/>
                            </button>
                        </Tooltip>
                    </div>
                </div>
            );
        default:
            return cellValue;
    }
};