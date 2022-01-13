import { forwardRef } from "react";
import { Icons } from "@material-table/core";
import { ArrowDownward } from "@material-ui/icons";

const OverdueOrderTableStyles = () => {

    const tableOptions = () => {
        return (
            {
                paging: true,
                pageSize: 5,
                emptyRowsWhenPaging: false,
                pageSizeOptions: [5],
                showTitle: true,
                search: false,
                toolbar: true,
                align: 'center',
                headerStyle: {
                    backgroundColor: '#cccccc',
                    color: 'rgb(77 71 71)'
                }
            });
    }

    const tableIcons: Icons = {
        SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
    };

    const tableStyles = {
        margin: "40px auto",
    }

    return { tableOptions, tableIcons,tableStyles }
}

export default OverdueOrderTableStyles



