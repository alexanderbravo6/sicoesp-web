import React from "react";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, getKeyValue } from "@nextui-org/react";

const rows = [
    {
        key: "1",
        name: "DIRECCIÓN REGIONAL DE EDUCACIÓN",
        role: "LIMA METROPOLITANA",
    },
    {
        key: "2",
        name: "CENTRO DE TRABAJO",
        role: "LIMA METROPOLITANA",
    },

];

const columns = [
    {
        key: "name",
        label: "TIPO DE INSTITUCIÓN",
    },
    {
        key: "role",
        label: "NOMBRE",
    },
    {
        key: "status",
        label: "STATUS",
    },
];

export default function AlcanceTabla() {
    const [selectedKeys, setSelectedKeys] = React.useState(new Set(["2"]));

    return (
        <Table
            aria-label="Controlled table example with dynamic content"
            selectionMode="multiple"
            selectedKeys={selectedKeys}
            onSelectionChange={setSelectedKeys}
        >
            <TableHeader columns={columns}>
                {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
            </TableHeader>
            <TableBody items={rows}>
                {(item) => (
                    <TableRow className="text-xs" key={item.key}>
                        {(columnKey) => <TableCell>{getKeyValue(item, columnKey)}</TableCell>}
                    </TableRow>
                )}
            </TableBody>
        </Table>
    );
}
