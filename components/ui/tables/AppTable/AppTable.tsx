import doctors from 'data/doctors'
import React from 'react'

type AppTableProps = {
  columns: object[]
  records: object[]
}
const AppTable = ({ columns, records }: AppTableProps) => {
  return (
    <div
      id="example_wrapper"
      className="dataTables_wrapper form-inline dt-bootstrap"
    >
      <div className="row">
        <div className="col-sm-6">
          <div className="dataTables_length" id="example_length">
            <label>
              Show{' '}
              <select
                name="example_length"
                aria-controls="example"
                className="form-control input-sm"
              >
                <option value="10">10</option>
                <option value="25">25</option>
                <option value="50">50</option>
                <option value="100">100</option>
              </select>{' '}
              entries
            </label>
          </div>
        </div>
        <div className="col-sm-6">
          <div id="example_filter" className="dataTables_filter">
            <label>
              Search:
              <input
                type="search"
                className="form-control input-sm"
                placeholder=""
                aria-controls="example"
              />
            </label>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-12">
          <table
            id="example"
            className="table table-striped table-bordered display dataTable"
            style={{ width: '100%' }}
            role="grid"
            aria-describedby="example_info"
          >
            <thead>
              <tr role="row">
                <th
                  className="sorting_asc"
                  tabIndex={0}
                  aria-controls="example"
                  rowSpan={1}
                  colSpan={1}
                  aria-sort="ascending"
                  aria-label="Name: activate to sort column descending"
                  style={{ width: '187.375px' }}
                >
                  Name
                </th>
                <th
                  className="sorting"
                  tabIndex={0}
                  aria-controls="example"
                  rowSpan={1}
                  colSpan={1}
                  aria-label="Position: activate to sort column ascending"
                  style={{ width: '305.562px' }}
                >
                  Position
                </th>
                <th
                  className="sorting"
                  tabIndex={0}
                  aria-controls="example"
                  rowSpan={1}
                  colSpan={1}
                  aria-label="Office: activate to sort column ascending"
                  style={{ width: '140.9px' }}
                >
                  Office
                </th>
                <th
                  className="sorting"
                  tabIndex={0}
                  aria-controls="example"
                  rowSpan={1}
                  colSpan={1}
                  aria-label="Age: activate to sort column ascending"
                  style={{ width: '69.525px' }}
                >
                  Age
                </th>
                <th
                  className="sorting"
                  tabIndex={0}
                  aria-controls="example"
                  rowSpan={1}
                  colSpan={1}
                  aria-label="Start date: activate to sort column ascending"
                  style={{ width: '132.75px' }}
                >
                  Start date
                </th>
                <th
                  className="sorting"
                  tabIndex={0}
                  aria-controls="example"
                  rowSpan={1}
                  colSpan={1}
                  aria-label="Salary: activate to sort column ascending"
                  style={{ width: '108.088px' }}
                >
                  Salary
                </th>
              </tr>
            </thead>
            <tbody>
              {doctors.map(record => {
                return (
                  <TableRow key={record.id} record={record} className={''} />
                )
              })}
            </tbody>
          </table>
        </div>
      </div>
      <Pagination page={1} size={10} count={doctors.length} />
    </div>
  )
}

const TableHead = () => {
  return <div></div>
}

type Record = {}

const TableRow = ({
  record,
  className,
}: {
  record: Record
  className: string
}) => {
  return (
    <tr role="row" className={className}>
      <td className="sorting_1">Airi Satou</td>
      <td>Accountant</td>
      <td>Tokyo</td>
      <td>33</td>
      <td>2008/11/28</td>
      <td>$162,700</td>
    </tr>
  )
}

const Pagination = ({
  page,
  size,
  count,
}: {
  page: number
  size: number
  count: number
}) => {
  const noOfPages = Math.ceil(count / size)
  return (
    <div className="row">
      <div className="col-sm-5">
        <div
          className="dataTables_info"
          id="example_info"
          role="status"
          aria-live="polite"
        >
          {`Showing 1 to 10 of ${count} entries`}
        </div>
      </div>
      <div className="col-sm-7">
        <div
          className="dataTables_paginate paging_simple_numbers"
          id="example_paginate"
        >
          <ul className="pagination">
            <li
              className="paginate_button previous disabled"
              id="example_previous"
            >
              <a href="#" aria-controls="example" data-dt-idx="0" tabIndex={0}>
                Previous
              </a>
            </li>
            {Array.from(Array(noOfPages), (e, i) => {
              i = i + 1
              return (
                <li key={i} className="paginate_button active">
                  <a
                    href="#"
                    aria-controls="example"
                    data-dt-idx={`${i}`}
                    tabIndex={0}
                  >
                    {i}
                  </a>
                </li>
              )
            })}
            <li className="paginate_button next" id="example_next">
              <a href="#" aria-controls="example" data-dt-idx="7" tabIndex={0}>
                Next
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default AppTable
