/* eslint-disable no-nested-ternary */
/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react';
// React Table
import { useTable, useFlexLayout, useSortBy, usePagination } from 'react-table';
// theme ui
import { Text, IconButton, Flex, Box, Button } from 'theme-ui';
import ChevronDown from 'components/icons/icon.chevronDown';
import { CustomVariants } from 'theme/theme.variants';

const getStyles = (props: any) => [
  props,
  {
    style: {
      justifyContent: props.align === 'center' ? 'center' : 'flex-start',
    },
  },
];

// TODO: @chirag check column type
const headerProps = (props: any, { column }) =>
  getStyles({ ...column.getSortByToggleProps(), align: column.align, ...props });

const cellProps = (props: any, { cell }) => getStyles({ ...props, align: cell.column.align });

type CustomTablePropTypes = {
  columns: any[];
  data: any[];
  fetchData?: any;
  loading: any;
  pageCount: any;
};

// Table component
const CustomTable: React.FC<CustomTablePropTypes> = (props: CustomTablePropTypes) => {
  const { columns, data, fetchData, loading, pageCount: controlledPageCount } = props;
  const defaultColumn = React.useMemo(
    () => ({
      minWidth: 30,
      width: 150,
      maxWidth: 200,
    }),
    [],
  );

  const {
    headerGroups,
    rows,
    getTableProps,
    getTableBodyProps,
    prepareRow,
    canPreviousPage,
    canNextPage,
    pageOptions,
    nextPage,
    previousPage,
    // Get the state from the instance
    state: { pageIndex, pageSize },
  } = useTable(
    {
      columns,
      data,
      defaultColumn,
      initialState: { pageIndex: 0 }, // Pass our hoisted table state
      manualPagination: true, // Tell the usePagination
      // hook that we'll handle our own data fetching
      // This means we'll also have to provide our own
      // pageCount.
      pageCount: controlledPageCount,
    },
    useFlexLayout,
    useSortBy,
    usePagination,
  );

  // Listen for changes in pagination and use the state to fetch our new data
  React.useEffect(() => {
    fetchData({ pageIndex, pageSize });
  }, [fetchData, pageIndex, pageSize]);

  // Render the UI for your table
  return (
    <Box>
      <Text mb={4} sx={{ textAlign: 'right', color: 'muted', fontSize: 1 }}>
        Showing 120 results
      </Text>
      <Box {...getTableProps()} variant={CustomVariants.TABLE}>
        <Box variant={CustomVariants.T_HEAD}>
          {headerGroups.map((headerGroup, i) => (
            <Flex {...headerGroup.getHeaderGroupProps()} key={String(i)} variant={CustomVariants.TR_HEAD}>
              {headerGroup.headers.map((column, index) => (
                <Flex {...column.getHeaderProps(headerProps)} key={String(index)} variant={CustomVariants.TH}>
                  {column.render('Header')}
                  <Box as="span" sx={{ ml: 2 }}>
                    {column.isSorted ? (
                      column.isSortedDesc ? (
                        <IconButton>
                          <ChevronDown sx={{ fill: 'link' }} />
                        </IconButton>
                      ) : (
                        <IconButton>
                          <ChevronDown sx={{ transform: 'rotate(180deg)', fill: 'link' }} />
                        </IconButton>
                      )
                    ) : (
                      ''
                    )}
                  </Box>
                </Flex>
              ))}
            </Flex>
          ))}
        </Box>
        <Box {...getTableBodyProps()} variant={CustomVariants.T_BODY}>
          {rows.map((row, i) => {
            prepareRow(row);
            return (
              <Flex {...row.getRowProps()} key={String(i)} variant={CustomVariants.TR}>
                {row.cells.map((cell, index) => {
                  return (
                    <Flex {...cell.getCellProps(cellProps)} key={String(index)} variant={CustomVariants.TD}>
                      {cell.render('Cell')}
                      {/* TODO: // @krushna > if loading toggle hide text display shimmer component */}
                      {/* <Box variant="animatedBackground" /> */}
                    </Flex>
                  );
                })}
              </Flex>
            );
          })}
        </Box>
      </Box>
      <Flex sx={{ justifyContent: 'flex-end' }}>
        {/* <Button variant="pagination" mr="3">
          History
        </Button> */}
        <Box variant="paginationWrap" mt={4}>
          <Button variant="pagination" onClick={() => previousPage()} disabled={!canPreviousPage}>
            <Box as="span" variant="paginationPrev">
              Prev
            </Box>
          </Button>
          <Button sx={{ bg: 'primary', color: 'white' }} variant="pagination">
            {pageIndex + 1}
          </Button>
          <Button variant="pagination">of {pageOptions.length}</Button>
          <Button variant="pagination" onClick={() => nextPage()} disabled={!canNextPage}>
            <Box as="span" variant="paginationNext">
              Next
            </Box>
          </Button>
        </Box>
      </Flex>
    </Box>
  );
};

/**
 * Table Component
 */
type PropTypes = {
  columns: any[];
  data: any[];
};
const Table: React.FC<PropTypes> = (props: PropTypes) => {
  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [pageCount, setPageCount] = React.useState(0);
  const fetchIdRef = React.useRef(0);

  const fetchData = React.useCallback(({ pageSize, pageIndex }) => {
    // This will get called when the table needs new data
    // You could fetch your data from literally anywhere,
    // even a server. But for this example, we'll just fake it.

    // Give this fetch an ID
    // eslint-disable-next-line no-plusplus
    const fetchId = ++fetchIdRef.current;

    // Set the loading state
    setLoading(true);

    // We'll even set a delay to simulate a server here
    const timer = setTimeout(() => {
      // Only update the data if this is the latest fetch
      if (fetchId === fetchIdRef.current) {
        const startRow = pageSize * pageIndex;
        const endRow = startRow + pageSize;
        setData(props.data.slice(startRow, endRow));

        // Your server could send back total page count.
        // For now we'll just fake it, too
        setPageCount(Math.ceil(props.data.length / pageSize));

        setLoading(false);
      }
      clearTimeout(timer);
    }, 1000);
  }, []);

  return (
    <CustomTable columns={props.columns} data={data} fetchData={fetchData} loading={loading} pageCount={pageCount} />
  );
};

export default Table;
