import React from "react";
import { User, Link } from "@nextui-org/react";
function UserSidebar({

    name,
    description
}) {
    return (
        <div className="flex flex-col gap-1 items-start" >
            <span className="text-sm text-white">
                {name}
            </span>
            <span className="text-xs text-foreground-400 ">
                {description}
            </span>
        </div>
    )
}

export default UserSidebar