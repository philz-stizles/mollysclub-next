// import React from 'react'

// type TableProps = {}

// const Table2 = ({}: TableProps) => {
//   return <div className="table-wrapper"><div className="btn-toolbar"><div className="btn-group focus-btn-group"><button className="btn btn-default"><span className="glyphicon glyphicon-screenshot"></span> Focus</button></div><div className="btn-group dropdown-btn-group float-right"><button className="btn btn-default">Display all</button><button className="btn btn-default dropdown-toggle" data-toggle="dropdown">Display <span className="caret"></span></button><ul className="dropdown-menu"><li className="checkbox-row"><input type="checkbox" name="toggle-tech-companies-1-col-1" id="toggle-tech-companies-1-col-1" value="tech-companies-1-col-1"> <label for="toggle-tech-companies-1-col-1">Last Trade</label></li><li className="checkbox-row"><input type="checkbox" name="toggle-tech-companies-1-col-2" id="toggle-tech-companies-1-col-2" value="tech-companies-1-col-2"> <label for="toggle-tech-companies-1-col-2">Trade Time</label></li><li className="checkbox-row"><input type="checkbox" name="toggle-tech-companies-1-col-3" id="toggle-tech-companies-1-col-3" value="tech-companies-1-col-3"> <label for="toggle-tech-companies-1-col-3">Change</label></li><li className="checkbox-row"><input type="checkbox" name="toggle-tech-companies-1-col-4" id="toggle-tech-companies-1-col-4" value="tech-companies-1-col-4"> <label for="toggle-tech-companies-1-col-4">Prev Close</label></li><li className="checkbox-row"><input type="checkbox" name="toggle-tech-companies-1-col-5" id="toggle-tech-companies-1-col-5" value="tech-companies-1-col-5"> <label for="toggle-tech-companies-1-col-5">Open</label></li><li className="checkbox-row"><input type="checkbox" name="toggle-tech-companies-1-col-6" id="toggle-tech-companies-1-col-6" value="tech-companies-1-col-6"> <label for="toggle-tech-companies-1-col-6">Bid</label></li><li className="checkbox-row"><input type="checkbox" name="toggle-tech-companies-1-col-7" id="toggle-tech-companies-1-col-7" value="tech-companies-1-col-7"> <label for="toggle-tech-companies-1-col-7">Ask</label></li><li className="checkbox-row"><input type="checkbox" name="toggle-tech-companies-1-col-8" id="toggle-tech-companies-1-col-8" value="tech-companies-1-col-8"> <label for="toggle-tech-companies-1-col-8">1y Target Est</label></li><li className="checkbox-row"><input type="checkbox" name="toggle-tech-companies-1-col-9" id="toggle-tech-companies-1-col-9" value="tech-companies-1-col-9"> <label for="toggle-tech-companies-1-col-9">Lorem</label></li><li className="checkbox-row"><input type="checkbox" name="toggle-tech-companies-1-col-10" id="toggle-tech-companies-1-col-10" value="tech-companies-1-col-10"> <label for="toggle-tech-companies-1-col-10">Ipsum</label></li></ul></div></div><div className="table-responsive" data-pattern="priority-columns">
// 						<div className="sticky-table-header" style="height: 39.1px;"><table id="tech-companies-1-clone" className="table table-small-font table-bordered table-striped">
// 							<thead>
// 								<tr>
// 									<th id="tech-companies-1-col-0-clone">Company</th>
// 									<th data-priority="1" id="tech-companies-1-col-1-clone">Last Trade</th>
// 									<th data-priority="3" id="tech-companies-1-col-2-clone">Trade Time</th>
// 									<th data-priority="1" id="tech-companies-1-col-3-clone">Change</th>
// 									<th data-priority="3" id="tech-companies-1-col-4-clone">Prev Close</th>
// 									<th data-priority="3" id="tech-companies-1-col-5-clone">Open</th>
// 									<th data-priority="6" id="tech-companies-1-col-6-clone">Bid</th>
// 									<th data-priority="6" id="tech-companies-1-col-7-clone">Ask</th>
// 									<th data-priority="6" id="tech-companies-1-col-8-clone">1y Target Est</th>
// 									<th data-priority="6" id="tech-companies-1-col-9-clone">Lorem</th>
// 									<th data-priority="6" id="tech-companies-1-col-10-clone">Ipsum</th>
// 								</tr>
// 							</thead>
// 							<tbody>
// 								<tr>
// 									<th colSpan={1} data-columns="tech-companies-1-col-0">GOOG <span className="co-name">Google Inc.</span></th>
// 									<td data-priority="1" colSpan={1} data-columns="tech-companies-1-col-1">597.74</td>
// 									<td data-priority="3" colSpan={1} data-columns="tech-companies-1-col-2">12:12PM</td>
// 									<td data-priority="1" colSpan={1} data-columns="tech-companies-1-col-3">14.81 (2.54%)</td>
// 									<td data-priority="3" colSpan={1} data-columns="tech-companies-1-col-4">582.93</td>
// 									<td data-priority="3" colSpan={1} data-columns="tech-companies-1-col-5">597.95</td>
// 									<td data-priority="6" colSpan={1} data-columns="tech-companies-1-col-6">597.73 x 100</td>
// 									<td data-priority="6" colSpan={1} data-columns="tech-companies-1-col-7">597.91 x 300</td>
// 									<td data-priority="6" colSpan={1} data-columns="tech-companies-1-col-8">731.10</td>
// 									<td colSpan={2} data-priority="6" className="spn-cell" data-columns="tech-companies-1-col-9 tech-companies-1-col-10">Spanning cell</td>
// 								</tr>
// 								<tr>
// 									<th colSpan={1} data-columns="tech-companies-1-col-0">AAPL <span className="co-name">Apple Inc.</span></th>
// 									<td data-priority="1" colSpan={1} data-columns="tech-companies-1-col-1">378.94</td>
// 									<td data-priority="3" colSpan={1} data-columns="tech-companies-1-col-2">12:22PM</td>
// 									<td data-priority="1" colSpan={1} data-columns="tech-companies-1-col-3">5.74 (1.54%)</td>
// 									<td data-priority="3" colSpan={1} data-columns="tech-companies-1-col-4">373.20</td>
// 									<td data-priority="3" colSpan={1} data-columns="tech-companies-1-col-5">381.02</td>
// 									<td data-priority="6" colSpan={1} data-columns="tech-companies-1-col-6">378.92 x 300</td>
// 									<td data-priority="6" colSpan={1} data-columns="tech-companies-1-col-7">378.99 x 100</td>
// 									<td data-priority="6" colSpan={1} data-columns="tech-companies-1-col-8">505.94</td>
// 									<td colSpan={2} data-priority="6" className="spn-cell" data-columns="tech-companies-1-col-9 tech-companies-1-col-10">Spanning cell</td>
// 								</tr>
// 								<tr>
// 									<th colSpan={1} data-columns="tech-companies-1-col-0">AMZN <span className="co-name">Amazon.com Inc.</span></th>
// 									<td data-priority="1" colSpan={1} data-columns="tech-companies-1-col-1">191.55</td>
// 									<td data-priority="3" colSpan={1} data-columns="tech-companies-1-col-2">12:23PM</td>
// 									<td data-priority="1" colSpan={1} data-columns="tech-companies-1-col-3">3.16 (1.68%)</td>
// 									<td data-priority="3" colSpan={1} data-columns="tech-companies-1-col-4">188.39</td>
// 									<td data-priority="3" colSpan={1} data-columns="tech-companies-1-col-5">194.99</td>
// 									<td data-priority="6" colSpan={1} data-columns="tech-companies-1-col-6">191.52 x 300</td>
// 									<td data-priority="6" colSpan={1} data-columns="tech-companies-1-col-7">191.58 x 100</td>
// 									<td data-priority="6" colSpan={1} data-columns="tech-companies-1-col-8">240.32</td>
// 									<td colSpan={2} data-priority="6" className="spn-cell" data-columns="tech-companies-1-col-9 tech-companies-1-col-10">Spanning cell</td>
// 								</tr>
// 								<tr>
// 									<th colSpan={1} data-columns="tech-companies-1-col-0">ORCL <span className="co-name">Oracle Corporation</span></th>
// 									<td data-priority="1" colSpan={1} data-columns="tech-companies-1-col-1">31.15</td>
// 									<td data-priority="3" colSpan={1} data-columns="tech-companies-1-col-2">12:44PM</td>
// 									<td data-priority="1" colSpan={1} data-columns="tech-companies-1-col-3">1.41 (4.72%)</td>
// 									<td data-priority="3" colSpan={1} data-columns="tech-companies-1-col-4">29.74</td>
// 									<td data-priority="3" colSpan={1} data-columns="tech-companies-1-col-5">30.67</td>
// 									<td data-priority="6" colSpan={1} data-columns="tech-companies-1-col-6">31.14 x 6500</td>
// 									<td data-priority="6" colSpan={1} data-columns="tech-companies-1-col-7">31.15 x 3200</td>
// 									<td data-priority="6" colSpan={1} data-columns="tech-companies-1-col-8">36.11</td>
// 									<td colSpan={2} data-priority="6" className="spn-cell" data-columns="tech-companies-1-col-9 tech-companies-1-col-10">Spanning cell</td>
// 								</tr>
// 								<tr>
// 									<th colSpan={1} data-columns="tech-companies-1-col-0">MSFT <span className="co-name">Microsoft Corporation</span></th>
// 									<td data-priority="1" colSpan={1} data-columns="tech-companies-1-col-1">25.50</td>
// 									<td data-priority="3" colSpan={1} data-columns="tech-companies-1-col-2">12:27PM</td>
// 									<td data-priority="1" colSpan={1} data-columns="tech-companies-1-col-3">0.66 (2.67%)</td>
// 									<td data-priority="3" colSpan={1} data-columns="tech-companies-1-col-4">24.84</td>
// 									<td data-priority="3" colSpan={1} data-columns="tech-companies-1-col-5">25.37</td>
// 									<td data-priority="6" colSpan={1} data-columns="tech-companies-1-col-6">25.50 x 71100</td>
// 									<td data-priority="6" colSpan={1} data-columns="tech-companies-1-col-7">25.51 x 17800</td>
// 									<td data-priority="6" colSpan={1} data-columns="tech-companies-1-col-8">31.50</td>
// 									<td data-priority="6" colSpan={1} data-columns="tech-companies-1-col-9">Non-spanning</td>
// 									<td data-priority="6" colSpan={1} data-columns="tech-companies-1-col-10">Non-spanning</td>
// 								</tr>
// 								<tr>
// 									<th colSpan={1} data-columns="tech-companies-1-col-0">CSCO <span className="co-name">Cisco Systems, Inc.</span></th>
// 									<td data-priority="1" colSpan={1} data-columns="tech-companies-1-col-1">18.65</td>
// 									<td data-priority="3" colSpan={1} data-columns="tech-companies-1-col-2">12:45PM</td>
// 									<td data-priority="1" colSpan={1} data-columns="tech-companies-1-col-3">0.97 (5.49%)</td>
// 									<td data-priority="3" colSpan={1} data-columns="tech-companies-1-col-4">17.68</td>
// 									<td data-priority="3" colSpan={1} data-columns="tech-companies-1-col-5">18.23</td>
// 									<td data-priority="6" colSpan={1} data-columns="tech-companies-1-col-6">18.65 x 10300</td>
// 									<td data-priority="6" colSpan={1} data-columns="tech-companies-1-col-7">18.66 x 24000</td>
// 									<td data-priority="6" colSpan={1} data-columns="tech-companies-1-col-8">21.12</td>
// 									<td data-priority="6" colSpan={1} data-columns="tech-companies-1-col-9">Non-spanning</td>
// 									<td data-priority="6" colSpan={1} data-columns="tech-companies-1-col-10">Non-spanning</td>
// 								</tr>
// 								<tr>
// 									<th colSpan={1} data-columns="tech-companies-1-col-0">YHOO <span className="co-name">Yahoo! Inc.</span></th>
// 									<td data-priority="1" colSpan={1} data-columns="tech-companies-1-col-1">15.81</td>
// 									<td data-priority="3" colSpan={1} data-columns="tech-companies-1-col-2">12:25PM</td>
// 									<td data-priority="1" colSpan={1} data-columns="tech-companies-1-col-3">0.11 (0.67%)</td>
// 									<td data-priority="3" colSpan={1} data-columns="tech-companies-1-col-4">15.70</td>
// 									<td data-priority="3" colSpan={1} data-columns="tech-companies-1-col-5">15.94</td>
// 									<td data-priority="6" colSpan={1} data-columns="tech-companies-1-col-6">15.79 x 6100</td>
// 									<td data-priority="6" colSpan={1} data-columns="tech-companies-1-col-7">15.80 x 17000</td>
// 									<td data-priority="6" colSpan={1} data-columns="tech-companies-1-col-8">18.16</td>
// 									<td data-priority="6" colSpan={1} data-columns="tech-companies-1-col-9">Non-spanning</td>
// 									<td data-priority="6" colSpan={1} data-columns="tech-companies-1-col-10">Non-spanning</td>
// 								</tr>
// 								<!-- Repeat -->
// 								<tr>
// 									<th colSpan={1} data-columns="tech-companies-1-col-0">GOOG <span className="co-name">Google Inc.</span></th>
// 									<td data-priority="1" colSpan={1} data-columns="tech-companies-1-col-1">597.74</td>
// 									<td data-priority="3" colSpan={1} data-columns="tech-companies-1-col-2">12:12PM</td>
// 									<td data-priority="1" colSpan={1} data-columns="tech-companies-1-col-3">14.81 (2.54%)</td>
// 									<td data-priority="3" colSpan={1} data-columns="tech-companies-1-col-4">582.93</td>
// 									<td data-priority="3" colSpan={1} data-columns="tech-companies-1-col-5">597.95</td>
// 									<td data-priority="6" colSpan={1} data-columns="tech-companies-1-col-6">597.73 x 100</td>
// 									<td data-priority="6" colSpan={1} data-columns="tech-companies-1-col-7">597.91 x 300</td>
// 									<td data-priority="6" colSpan={1} data-columns="tech-companies-1-col-8">731.10</td>
// 									<td colSpan={2} data-priority="6" className="spn-cell" data-columns="tech-companies-1-col-9 tech-companies-1-col-10">Spanning cell</td>
// 								</tr>
// 								<tr>
// 									<th colSpan={1} data-columns="tech-companies-1-col-0">AAPL <span className="co-name">Apple Inc.</span></th>
// 									<td data-priority="1" colSpan={1} data-columns="tech-companies-1-col-1">378.94</td>
// 									<td data-priority="3" colSpan={1} data-columns="tech-companies-1-col-2">12:22PM</td>
// 									<td data-priority="1" colSpan={1} data-columns="tech-companies-1-col-3">5.74 (1.54%)</td>
// 									<td data-priority="3" colSpan={1} data-columns="tech-companies-1-col-4">373.20</td>
// 									<td data-priority="3" colSpan={1} data-columns="tech-companies-1-col-5">381.02</td>
// 									<td data-priority="6" colSpan={1} data-columns="tech-companies-1-col-6">378.92 x 300</td>
// 									<td data-priority="6" colSpan={1} data-columns="tech-companies-1-col-7">378.99 x 100</td>
// 									<td data-priority="6" colSpan={1} data-columns="tech-companies-1-col-8">505.94</td>
// 									<td colSpan={2} data-priority="6" className="spn-cell" data-columns="tech-companies-1-col-9 tech-companies-1-col-10">Spanning cell</td>
// 								</tr>
// 								<tr>
// 									<th colSpan={1} data-columns="tech-companies-1-col-0">AMZN <span className="co-name">Amazon.com Inc.</span></th>
// 									<td data-priority="1" colSpan={1} data-columns="tech-companies-1-col-1">191.55</td>
// 									<td data-priority="3" colSpan={1} data-columns="tech-companies-1-col-2">12:23PM</td>
// 									<td data-priority="1" colSpan={1} data-columns="tech-companies-1-col-3">3.16 (1.68%)</td>
// 									<td data-priority="3" colSpan={1} data-columns="tech-companies-1-col-4">188.39</td>
// 									<td data-priority="3" colSpan={1} data-columns="tech-companies-1-col-5">194.99</td>
// 									<td data-priority="6" colSpan={1} data-columns="tech-companies-1-col-6">191.52 x 300</td>
// 									<td data-priority="6" colSpan={1} data-columns="tech-companies-1-col-7">191.58 x 100</td>
// 									<td data-priority="6" colSpan={1} data-columns="tech-companies-1-col-8">240.32</td>
// 									<td colSpan={2} data-priority="6" className="spn-cell" data-columns="tech-companies-1-col-9 tech-companies-1-col-10">Spanning cell</td>
// 								</tr>
// 								<tr>
// 									<th colSpan={1} data-columns="tech-companies-1-col-0">ORCL <span className="co-name">Oracle Corporation</span></th>
// 									<td data-priority="1" colSpan={1} data-columns="tech-companies-1-col-1">31.15</td>
// 									<td data-priority="3" colSpan={1} data-columns="tech-companies-1-col-2">12:44PM</td>
// 									<td data-priority="1" colSpan={1} data-columns="tech-companies-1-col-3">1.41 (4.72%)</td>
// 									<td data-priority="3" colSpan={1} data-columns="tech-companies-1-col-4">29.74</td>
// 									<td data-priority="3" colSpan={1} data-columns="tech-companies-1-col-5">30.67</td>
// 									<td data-priority="6" colSpan={1} data-columns="tech-companies-1-col-6">31.14 x 6500</td>
// 									<td data-priority="6" colSpan={1} data-columns="tech-companies-1-col-7">31.15 x 3200</td>
// 									<td data-priority="6" colSpan={1} data-columns="tech-companies-1-col-8">36.11</td>
// 									<td colSpan={2} data-priority="6" className="spn-cell" data-columns="tech-companies-1-col-9 tech-companies-1-col-10">Spanning cell</td>
// 								</tr>
// 								<tr>
// 									<th colSpan={1} data-columns="tech-companies-1-col-0">MSFT <span className="co-name">Microsoft Corporation</span></th>
// 									<td data-priority="1" colSpan={1} data-columns="tech-companies-1-col-1">25.50</td>
// 									<td data-priority="3" colSpan={1} data-columns="tech-companies-1-col-2">12:27PM</td>
// 									<td data-priority="1" colSpan={1} data-columns="tech-companies-1-col-3">0.66 (2.67%)</td>
// 									<td data-priority="3" colSpan={1} data-columns="tech-companies-1-col-4">24.84</td>
// 									<td data-priority="3" colSpan={1} data-columns="tech-companies-1-col-5">25.37</td>
// 									<td data-priority="6" colSpan={1} data-columns="tech-companies-1-col-6">25.50 x 71100</td>
// 									<td data-priority="6" colSpan={1} data-columns="tech-companies-1-col-7">25.51 x 17800</td>
// 									<td data-priority="6" colSpan={1} data-columns="tech-companies-1-col-8">31.50</td>
// 									<td data-priority="6" colSpan={1} data-columns="tech-companies-1-col-9">Non-spanning</td>
// 									<td data-priority="6" colSpan={1} data-columns="tech-companies-1-col-10">Non-spanning</td>
// 								</tr>
// 								<tr>
// 									<th colSpan={1} data-columns="tech-companies-1-col-0">CSCO <span className="co-name">Cisco Systems, Inc.</span></th>
// 									<td data-priority="1" colSpan={1} data-columns="tech-companies-1-col-1">18.65</td>
// 									<td data-priority="3" colSpan={1} data-columns="tech-companies-1-col-2">12:45PM</td>
// 									<td data-priority="1" colSpan={1} data-columns="tech-companies-1-col-3">0.97 (5.49%)</td>
// 									<td data-priority="3" colSpan={1} data-columns="tech-companies-1-col-4">17.68</td>
// 									<td data-priority="3" colSpan={1} data-columns="tech-companies-1-col-5">18.23</td>
// 									<td data-priority="6" colSpan={1} data-columns="tech-companies-1-col-6">18.65 x 10300</td>
// 									<td data-priority="6" colSpan={1} data-columns="tech-companies-1-col-7">18.66 x 24000</td>
// 									<td data-priority="6" colSpan={1} data-columns="tech-companies-1-col-8">21.12</td>
// 									<td data-priority="6" colSpan={1} data-columns="tech-companies-1-col-9">Non-spanning</td>
// 									<td data-priority="6" colSpan={1} data-columns="tech-companies-1-col-10">Non-spanning</td>
// 								</tr>
// 								<tr>
// 									<th colSpan={1} data-columns="tech-companies-1-col-0">YHOO <span className="co-name">Yahoo! Inc.</span></th>
// 									<td data-priority="1" colSpan={1} data-columns="tech-companies-1-col-1">15.81</td>
// 									<td data-priority="3" colSpan={1} data-columns="tech-companies-1-col-2">12:25PM</td>
// 									<td data-priority="1" colSpan={1} data-columns="tech-companies-1-col-3">0.11 (0.67%)</td>
// 									<td data-priority="3" colSpan={1} data-columns="tech-companies-1-col-4">15.70</td>
// 									<td data-priority="3" colSpan={1} data-columns="tech-companies-1-col-5">15.94</td>
// 									<td data-priority="6" colSpan={1} data-columns="tech-companies-1-col-6">15.79 x 6100</td>
// 									<td data-priority="6" colSpan={1} data-columns="tech-companies-1-col-7">15.80 x 17000</td>
// 									<td data-priority="6" colSpan={1} data-columns="tech-companies-1-col-8">18.16</td>
// 									<td data-priority="6" colSpan={1} data-columns="tech-companies-1-col-9">Non-spanning</td>
// 									<td data-priority="6" colSpan={1} data-columns="tech-companies-1-col-10">Non-spanning</td>
// 								</tr>
// 								<!-- Repeat -->
// 								<tr>
// 									<th colSpan={1} data-columns="tech-companies-1-col-0">GOOG <span className="co-name">Google Inc.</span></th>
// 									<td data-priority="1" colSpan={1} data-columns="tech-companies-1-col-1">597.74</td>
// 									<td data-priority="3" colSpan={1} data-columns="tech-companies-1-col-2">12:12PM</td>
// 									<td data-priority="1" colSpan={1} data-columns="tech-companies-1-col-3">14.81 (2.54%)</td>
// 									<td data-priority="3" colSpan={1} data-columns="tech-companies-1-col-4">582.93</td>
// 									<td data-priority="3" colSpan={1} data-columns="tech-companies-1-col-5">597.95</td>
// 									<td data-priority="6" colSpan={1} data-columns="tech-companies-1-col-6">597.73 x 100</td>
// 									<td data-priority="6" colSpan={1} data-columns="tech-companies-1-col-7">597.91 x 300</td>
// 									<td data-priority="6" colSpan={1} data-columns="tech-companies-1-col-8">731.10</td>
// 									<td colSpan={2} data-priority="6" className="spn-cell" data-columns="tech-companies-1-col-9 tech-companies-1-col-10">Spanning cell</td>
// 								</tr>
// 								<tr>
// 									<th colSpan={1} data-columns="tech-companies-1-col-0">AAPL <span className="co-name">Apple Inc.</span></th>
// 									<td data-priority="1" colSpan={1} data-columns="tech-companies-1-col-1">378.94</td>
// 									<td data-priority="3" colSpan={1} data-columns="tech-companies-1-col-2">12:22PM</td>
// 									<td data-priority="1" colSpan={1} data-columns="tech-companies-1-col-3">5.74 (1.54%)</td>
// 									<td data-priority="3" colSpan={1} data-columns="tech-companies-1-col-4">373.20</td>
// 									<td data-priority="3" colSpan={1} data-columns="tech-companies-1-col-5">381.02</td>
// 									<td data-priority="6" colSpan={1} data-columns="tech-companies-1-col-6">378.92 x 300</td>
// 									<td data-priority="6" colSpan={1} data-columns="tech-companies-1-col-7">378.99 x 100</td>
// 									<td data-priority="6" colSpan={1} data-columns="tech-companies-1-col-8">505.94</td>
// 									<td colSpan={2} data-priority="6" className="spn-cell" data-columns="tech-companies-1-col-9 tech-companies-1-col-10">Spanning cell</td>
// 								</tr>
// 								<tr>
// 									<th colSpan={1} data-columns="tech-companies-1-col-0">AMZN <span className="co-name">Amazon.com Inc.</span></th>
// 									<td data-priority="1" colSpan={1} data-columns="tech-companies-1-col-1">191.55</td>
// 									<td data-priority="3" colSpan={1} data-columns="tech-companies-1-col-2">12:23PM</td>
// 									<td data-priority="1" colSpan={1} data-columns="tech-companies-1-col-3">3.16 (1.68%)</td>
// 									<td data-priority="3" colSpan={1} data-columns="tech-companies-1-col-4">188.39</td>
// 									<td data-priority="3" colSpan={1} data-columns="tech-companies-1-col-5">194.99</td>
// 									<td data-priority="6" colSpan={1} data-columns="tech-companies-1-col-6">191.52 x 300</td>
// 									<td data-priority="6" colSpan={1} data-columns="tech-companies-1-col-7">191.58 x 100</td>
// 									<td data-priority="6" colSpan={1} data-columns="tech-companies-1-col-8">240.32</td>
// 									<td colSpan={2} data-priority="6" className="spn-cell" data-columns="tech-companies-1-col-9 tech-companies-1-col-10">Spanning cell</td>
// 								</tr>
// 								<tr>
// 									<th colSpan={1} data-columns="tech-companies-1-col-0">ORCL <span className="co-name">Oracle Corporation</span></th>
// 									<td data-priority="1" colSpan={1} data-columns="tech-companies-1-col-1">31.15</td>
// 									<td data-priority="3" colSpan={1} data-columns="tech-companies-1-col-2">12:44PM</td>
// 									<td data-priority="1" colSpan={1} data-columns="tech-companies-1-col-3">1.41 (4.72%)</td>
// 									<td data-priority="3" colSpan={1} data-columns="tech-companies-1-col-4">29.74</td>
// 									<td data-priority="3" colSpan={1} data-columns="tech-companies-1-col-5">30.67</td>
// 									<td data-priority="6" colSpan={1} data-columns="tech-companies-1-col-6">31.14 x 6500</td>
// 									<td data-priority="6" colSpan={1} data-columns="tech-companies-1-col-7">31.15 x 3200</td>
// 									<td data-priority="6" colSpan={1} data-columns="tech-companies-1-col-8">36.11</td>
// 									<td colSpan={2} data-priority="6" className="spn-cell" data-columns="tech-companies-1-col-9 tech-companies-1-col-10">Spanning cell</td>
// 								</tr>
// 								<tr>
// 									<th colSpan={1} data-columns="tech-companies-1-col-0">MSFT <span className="co-name">Microsoft Corporation</span></th>
// 									<td data-priority="1" colSpan={1} data-columns="tech-companies-1-col-1">25.50</td>
// 									<td data-priority="3" colSpan={1} data-columns="tech-companies-1-col-2">12:27PM</td>
// 									<td data-priority="1" colSpan={1} data-columns="tech-companies-1-col-3">0.66 (2.67%)</td>
// 									<td data-priority="3" colSpan={1} data-columns="tech-companies-1-col-4">24.84</td>
// 									<td data-priority="3" colSpan={1} data-columns="tech-companies-1-col-5">25.37</td>
// 									<td data-priority="6" colSpan={1} data-columns="tech-companies-1-col-6">25.50 x 71100</td>
// 									<td data-priority="6" colSpan={1} data-columns="tech-companies-1-col-7">25.51 x 17800</td>
// 									<td data-priority="6" colSpan={1} data-columns="tech-companies-1-col-8">31.50</td>
// 									<td data-priority="6" colSpan={1} data-columns="tech-companies-1-col-9">Non-spanning</td>
// 									<td data-priority="6" colSpan={1} data-columns="tech-companies-1-col-10">Non-spanning</td>
// 								</tr>
// 								<tr>
// 									<th colSpan={1} data-columns="tech-companies-1-col-0">CSCO <span className="co-name">Cisco Systems, Inc.</span></th>
// 									<td data-priority="1" colSpan={1} data-columns="tech-companies-1-col-1">18.65</td>
// 									<td data-priority="3" colSpan={1} data-columns="tech-companies-1-col-2">12:45PM</td>
// 									<td data-priority="1" colSpan={1} data-columns="tech-companies-1-col-3">0.97 (5.49%)</td>
// 									<td data-priority="3" colSpan={1} data-columns="tech-companies-1-col-4">17.68</td>
// 									<td data-priority="3" colSpan={1} data-columns="tech-companies-1-col-5">18.23</td>
// 									<td data-priority="6" colSpan={1} data-columns="tech-companies-1-col-6">18.65 x 10300</td>
// 									<td data-priority="6" colSpan={1} data-columns="tech-companies-1-col-7">18.66 x 24000</td>
// 									<td data-priority="6" colSpan={1} data-columns="tech-companies-1-col-8">21.12</td>
// 									<td data-priority="6" colSpan={1} data-columns="tech-companies-1-col-9">Non-spanning</td>
// 									<td data-priority="6" colSpan={1} data-columns="tech-companies-1-col-10">Non-spanning</td>
// 								</tr>
// 								<tr>
// 									<th colSpan={1} data-columns="tech-companies-1-col-0">YHOO <span className="co-name">Yahoo! Inc.</span></th>
// 									<td data-priority="1" colSpan={1} data-columns="tech-companies-1-col-1">15.81</td>
// 									<td data-priority="3" colSpan={1} data-columns="tech-companies-1-col-2">12:25PM</td>
// 									<td data-priority="1" colSpan={1} data-columns="tech-companies-1-col-3">0.11 (0.67%)</td>
// 									<td data-priority="3" colSpan={1} data-columns="tech-companies-1-col-4">15.70</td>
// 									<td data-priority="3" colSpan={1} data-columns="tech-companies-1-col-5">15.94</td>
// 									<td data-priority="6" colSpan={1} data-columns="tech-companies-1-col-6">15.79 x 6100</td>
// 									<td data-priority="6" colSpan={1} data-columns="tech-companies-1-col-7">15.80 x 17000</td>
// 									<td data-priority="6" colSpan={1} data-columns="tech-companies-1-col-8">18.16</td>
// 									<td data-priority="6" colSpan={1} data-columns="tech-companies-1-col-9">Non-spanning</td>
// 									<td data-priority="6" colSpan={1} data-columns="tech-companies-1-col-10">Non-spanning</td>
// 								</tr>
// 								<!-- Repeat -->
// 								<tr>
// 									<th colSpan={1} data-columns="tech-companies-1-col-0">GOOG <span className="co-name">Google Inc.</span></th>
// 									<td data-priority="1" colSpan={1} data-columns="tech-companies-1-col-1">597.74</td>
// 									<td data-priority="3" colSpan={1} data-columns="tech-companies-1-col-2">12:12PM</td>
// 									<td data-priority="1" colSpan={1} data-columns="tech-companies-1-col-3">14.81 (2.54%)</td>
// 									<td data-priority="3" colSpan={1} data-columns="tech-companies-1-col-4">582.93</td>
// 									<td data-priority="3" colSpan={1} data-columns="tech-companies-1-col-5">597.95</td>
// 									<td data-priority="6" colSpan={1} data-columns="tech-companies-1-col-6">597.73 x 100</td>
// 									<td data-priority="6" colSpan={1} data-columns="tech-companies-1-col-7">597.91 x 300</td>
// 									<td data-priority="6" colSpan={1} data-columns="tech-companies-1-col-8">731.10</td>
// 									<td colSpan={2} data-priority="6" className="spn-cell" data-columns="tech-companies-1-col-9 tech-companies-1-col-10">Spanning cell</td>
// 								</tr>
// 								<tr>
// 									<th colSpan={1} data-columns="tech-companies-1-col-0">AAPL <span className="co-name">Apple Inc.</span></th>
// 									<td data-priority="1" colSpan={1} data-columns="tech-companies-1-col-1">378.94</td>
// 									<td data-priority="3" colSpan={1} data-columns="tech-companies-1-col-2">12:22PM</td>
// 									<td data-priority="1" colSpan={1} data-columns="tech-companies-1-col-3">5.74 (1.54%)</td>
// 									<td data-priority="3" colSpan={1} data-columns="tech-companies-1-col-4">373.20</td>
// 									<td data-priority="3" colSpan={1} data-columns="tech-companies-1-col-5">381.02</td>
// 									<td data-priority="6" colSpan={1} data-columns="tech-companies-1-col-6">378.92 x 300</td>
// 									<td data-priority="6" colSpan={1} data-columns="tech-companies-1-col-7">378.99 x 100</td>
// 									<td data-priority="6" colSpan={1} data-columns="tech-companies-1-col-8">505.94</td>
// 									<td colSpan={2} data-priority="6" className="spn-cell" data-columns="tech-companies-1-col-9 tech-companies-1-col-10">Spanning cell</td>
// 								</tr>
// 								<tr>
// 									<th colSpan={1} data-columns="tech-companies-1-col-0">AMZN <span className="co-name">Amazon.com Inc.</span></th>
// 									<td data-priority="1" colSpan={1} data-columns="tech-companies-1-col-1">191.55</td>
// 									<td data-priority="3" colSpan={1} data-columns="tech-companies-1-col-2">12:23PM</td>
// 									<td data-priority="1" colSpan={1} data-columns="tech-companies-1-col-3">3.16 (1.68%)</td>
// 									<td data-priority="3" colSpan={1} data-columns="tech-companies-1-col-4">188.39</td>
// 									<td data-priority="3" colSpan={1} data-columns="tech-companies-1-col-5">194.99</td>
// 									<td data-priority="6" colSpan={1} data-columns="tech-companies-1-col-6">191.52 x 300</td>
// 									<td data-priority="6" colSpan={1} data-columns="tech-companies-1-col-7">191.58 x 100</td>
// 									<td data-priority="6" colSpan={1} data-columns="tech-companies-1-col-8">240.32</td>
// 									<td colSpan={2} data-priority="6" className="spn-cell" data-columns="tech-companies-1-col-9 tech-companies-1-col-10">Spanning cell</td>
// 								</tr>
// 								<tr>
// 									<th colSpan={1} data-columns="tech-companies-1-col-0">ORCL <span className="co-name">Oracle Corporation</span></th>
// 									<td data-priority="1" colSpan={1} data-columns="tech-companies-1-col-1">31.15</td>
// 									<td data-priority="3" colSpan={1} data-columns="tech-companies-1-col-2">12:44PM</td>
// 									<td data-priority="1" colSpan={1} data-columns="tech-companies-1-col-3">1.41 (4.72%)</td>
// 									<td data-priority="3" colSpan={1} data-columns="tech-companies-1-col-4">29.74</td>
// 									<td data-priority="3" colSpan={1} data-columns="tech-companies-1-col-5">30.67</td>
// 									<td data-priority="6" colSpan={1} data-columns="tech-companies-1-col-6">31.14 x 6500</td>
// 									<td data-priority="6" colSpan={1} data-columns="tech-companies-1-col-7">31.15 x 3200</td>
// 									<td data-priority="6" colSpan={1} data-columns="tech-companies-1-col-8">36.11</td>
// 									<td colSpan={2} data-priority="6" className="spn-cell" data-columns="tech-companies-1-col-9 tech-companies-1-col-10">Spanning cell</td>
// 								</tr>
// 								<tr>
// 									<th colSpan={1} data-columns="tech-companies-1-col-0">MSFT <span className="co-name">Microsoft Corporation</span></th>
// 									<td data-priority="1" colSpan={1} data-columns="tech-companies-1-col-1">25.50</td>
// 									<td data-priority="3" colSpan={1} data-columns="tech-companies-1-col-2">12:27PM</td>
// 									<td data-priority="1" colSpan={1} data-columns="tech-companies-1-col-3">0.66 (2.67%)</td>
// 									<td data-priority="3" colSpan={1} data-columns="tech-companies-1-col-4">24.84</td>
// 									<td data-priority="3" colSpan={1} data-columns="tech-companies-1-col-5">25.37</td>
// 									<td data-priority="6" colSpan={1} data-columns="tech-companies-1-col-6">25.50 x 71100</td>
// 									<td data-priority="6" colSpan={1} data-columns="tech-companies-1-col-7">25.51 x 17800</td>
// 									<td data-priority="6" colSpan={1} data-columns="tech-companies-1-col-8">31.50</td>
// 									<td data-priority="6" colSpan={1} data-columns="tech-companies-1-col-9">Non-spanning</td>
// 									<td data-priority="6" colSpan={1} data-columns="tech-companies-1-col-10">Non-spanning</td>
// 								</tr>
// 								<tr>
// 									<th colSpan={1} data-columns="tech-companies-1-col-0">CSCO <span className="co-name">Cisco Systems, Inc.</span></th>
// 									<td data-priority="1" colSpan={1} data-columns="tech-companies-1-col-1">18.65</td>
// 									<td data-priority="3" colSpan={1} data-columns="tech-companies-1-col-2">12:45PM</td>
// 									<td data-priority="1" colSpan={1} data-columns="tech-companies-1-col-3">0.97 (5.49%)</td>
// 									<td data-priority="3" colSpan={1} data-columns="tech-companies-1-col-4">17.68</td>
// 									<td data-priority="3" colSpan={1} data-columns="tech-companies-1-col-5">18.23</td>
// 									<td data-priority="6" colSpan={1} data-columns="tech-companies-1-col-6">18.65 x 10300</td>
// 									<td data-priority="6" colSpan={1} data-columns="tech-companies-1-col-7">18.66 x 24000</td>
// 									<td data-priority="6" colSpan={1} data-columns="tech-companies-1-col-8">21.12</td>
// 									<td data-priority="6" colSpan={1} data-columns="tech-companies-1-col-9">Non-spanning</td>
// 									<td data-priority="6" colSpan={1} data-columns="tech-companies-1-col-10">Non-spanning</td>
// 								</tr>
// 								<tr>
// 									<th colSpan={1} data-columns="tech-companies-1-col-0">YHOO <span className="co-name">Yahoo! Inc.</span></th>
// 									<td data-priority="1" colSpan={1} data-columns="tech-companies-1-col-1">15.81</td>
// 									<td data-priority="3" colSpan={1} data-columns="tech-companies-1-col-2">12:25PM</td>
// 									<td data-priority="1" colSpan={1} data-columns="tech-companies-1-col-3">0.11 (0.67%)</td>
// 									<td data-priority="3" colSpan={1} data-columns="tech-companies-1-col-4">15.70</td>
// 									<td data-priority="3" colSpan={1} data-columns="tech-companies-1-col-5">15.94</td>
// 									<td data-priority="6" colSpan={1} data-columns="tech-companies-1-col-6">15.79 x 6100</td>
// 									<td data-priority="6" colSpan={1} data-columns="tech-companies-1-col-7">15.80 x 17000</td>
// 									<td data-priority="6" colSpan={1} data-columns="tech-companies-1-col-8">18.16</td>
// 									<td data-priority="6" colSpan={1} data-columns="tech-companies-1-col-9">Non-spanning</td>
// 									<td data-priority="6" colSpan={1} data-columns="tech-companies-1-col-10">Non-spanning</td>
// 								</tr>
// 								<!-- Repeat -->
// 								<tr>
// 									<th colSpan={1} data-columns="tech-companies-1-col-0">GOOG <span className="co-name">Google Inc.</span></th>
// 									<td data-priority="1" colSpan={1} data-columns="tech-companies-1-col-1">597.74</td>
// 									<td data-priority="3" colSpan={1} data-columns="tech-companies-1-col-2">12:12PM</td>
// 									<td data-priority="1" colSpan={1} data-columns="tech-companies-1-col-3">14.81 (2.54%)</td>
// 									<td data-priority="3" colSpan={1} data-columns="tech-companies-1-col-4">582.93</td>
// 									<td data-priority="3" colSpan={1} data-columns="tech-companies-1-col-5">597.95</td>
// 									<td data-priority="6" colSpan={1} data-columns="tech-companies-1-col-6">597.73 x 100</td>
// 									<td data-priority="6" colSpan={1} data-columns="tech-companies-1-col-7">597.91 x 300</td>
// 									<td data-priority="6" colSpan={1} data-columns="tech-companies-1-col-8">731.10</td>
// 									<td colSpan={2} data-priority="6" className="spn-cell" data-columns="tech-companies-1-col-9 tech-companies-1-col-10">Spanning cell</td>
// 								</tr>
// 								<tr>
// 									<th colSpan={1} data-columns="tech-companies-1-col-0">AAPL <span className="co-name">Apple Inc.</span></th>
// 									<td data-priority="1" colSpan={1} data-columns="tech-companies-1-col-1">378.94</td>
// 									<td data-priority="3" colSpan={1} data-columns="tech-companies-1-col-2">12:22PM</td>
// 									<td data-priority="1" colSpan={1} data-columns="tech-companies-1-col-3">5.74 (1.54%)</td>
// 									<td data-priority="3" colSpan={1} data-columns="tech-companies-1-col-4">373.20</td>
// 									<td data-priority="3" colSpan={1} data-columns="tech-companies-1-col-5">381.02</td>
// 									<td data-priority="6" colSpan={1} data-columns="tech-companies-1-col-6">378.92 x 300</td>
// 									<td data-priority="6" colSpan={1} data-columns="tech-companies-1-col-7">378.99 x 100</td>
// 									<td data-priority="6" colSpan={1} data-columns="tech-companies-1-col-8">505.94</td>
// 									<td colSpan={2} data-priority="6" className="spn-cell" data-columns="tech-companies-1-col-9 tech-companies-1-col-10">Spanning cell</td>
// 								</tr>
// 								<tr>
// 									<th colSpan={1} data-columns="tech-companies-1-col-0">AMZN <span className="co-name">Amazon.com Inc.</span></th>
// 									<td data-priority="1" colSpan={1} data-columns="tech-companies-1-col-1">191.55</td>
// 									<td data-priority="3" colSpan={1} data-columns="tech-companies-1-col-2">12:23PM</td>
// 									<td data-priority="1" colSpan={1} data-columns="tech-companies-1-col-3">3.16 (1.68%)</td>
// 									<td data-priority="3" colSpan={1} data-columns="tech-companies-1-col-4">188.39</td>
// 									<td data-priority="3" colSpan={1} data-columns="tech-companies-1-col-5">194.99</td>
// 									<td data-priority="6" colSpan={1} data-columns="tech-companies-1-col-6">191.52 x 300</td>
// 									<td data-priority="6" colSpan={1} data-columns="tech-companies-1-col-7">191.58 x 100</td>
// 									<td data-priority="6" colSpan={1} data-columns="tech-companies-1-col-8">240.32</td>
// 									<td colSpan={2} data-priority="6" className="spn-cell" data-columns="tech-companies-1-col-9 tech-companies-1-col-10">Spanning cell</td>
// 								</tr>
// 								<tr>
// 									<th colSpan={1} data-columns="tech-companies-1-col-0">ORCL <span className="co-name">Oracle Corporation</span></th>
// 									<td data-priority="1" colSpan={1} data-columns="tech-companies-1-col-1">31.15</td>
// 									<td data-priority="3" colSpan={1} data-columns="tech-companies-1-col-2">12:44PM</td>
// 									<td data-priority="1" colSpan={1} data-columns="tech-companies-1-col-3">1.41 (4.72%)</td>
// 									<td data-priority="3" colSpan={1} data-columns="tech-companies-1-col-4">29.74</td>
// 									<td data-priority="3" colSpan={1} data-columns="tech-companies-1-col-5">30.67</td>
// 									<td data-priority="6" colSpan={1} data-columns="tech-companies-1-col-6">31.14 x 6500</td>
// 									<td data-priority="6" colSpan={1} data-columns="tech-companies-1-col-7">31.15 x 3200</td>
// 									<td data-priority="6" colSpan={1} data-columns="tech-companies-1-col-8">36.11</td>
// 									<td colSpan={2} data-priority="6" className="spn-cell" data-columns="tech-companies-1-col-9 tech-companies-1-col-10">Spanning cell</td>
// 								</tr>
// 								<tr>
// 									<th colSpan={1} data-columns="tech-companies-1-col-0">MSFT <span className="co-name">Microsoft Corporation</span></th>
// 									<td data-priority="1" colSpan={1} data-columns="tech-companies-1-col-1">25.50</td>
// 									<td data-priority="3" colSpan={1} data-columns="tech-companies-1-col-2">12:27PM</td>
// 									<td data-priority="1" colSpan={1} data-columns="tech-companies-1-col-3">0.66 (2.67%)</td>
// 									<td data-priority="3" colSpan={1} data-columns="tech-companies-1-col-4">24.84</td>
// 									<td data-priority="3" colSpan={1} data-columns="tech-companies-1-col-5">25.37</td>
// 									<td data-priority="6" colSpan={1} data-columns="tech-companies-1-col-6">25.50 x 71100</td>
// 									<td data-priority="6" colSpan={1} data-columns="tech-companies-1-col-7">25.51 x 17800</td>
// 									<td data-priority="6" colSpan={1} data-columns="tech-companies-1-col-8">31.50</td>
// 									<td data-priority="6" colSpan={1} data-columns="tech-companies-1-col-9">Non-spanning</td>
// 									<td data-priority="6" colSpan={1} data-columns="tech-companies-1-col-10">Non-spanning</td>
// 								</tr>
// 								<tr>
// 									<th colSpan={1} data-columns="tech-companies-1-col-0">CSCO <span className="co-name">Cisco Systems, Inc.</span></th>
// 									<td data-priority="1" colSpan={1} data-columns="tech-companies-1-col-1">18.65</td>
// 									<td data-priority="3" colSpan={1} data-columns="tech-companies-1-col-2">12:45PM</td>
// 									<td data-priority="1" colSpan={1} data-columns="tech-companies-1-col-3">0.97 (5.49%)</td>
// 									<td data-priority="3" colSpan={1} data-columns="tech-companies-1-col-4">17.68</td>
// 									<td data-priority="3" colSpan={1} data-columns="tech-companies-1-col-5">18.23</td>
// 									<td data-priority="6" colSpan={1} data-columns="tech-companies-1-col-6">18.65 x 10300</td>
// 									<td data-priority="6" colSpan={1} data-columns="tech-companies-1-col-7">18.66 x 24000</td>
// 									<td data-priority="6" colSpan={1} data-columns="tech-companies-1-col-8">21.12</td>
// 									<td data-priority="6" colSpan={1} data-columns="tech-companies-1-col-9">Non-spanning</td>
// 									<td data-priority="6" colSpan={1} data-columns="tech-companies-1-col-10">Non-spanning</td>
// 								</tr>
// 								<tr>
// 									<th colSpan={1} data-columns="tech-companies-1-col-0">YHOO <span className="co-name">Yahoo! Inc.</span></th>
// 									<td data-priority="1" colSpan={1} data-columns="tech-companies-1-col-1">15.81</td>
// 									<td data-priority="3" colSpan={1} data-columns="tech-companies-1-col-2">12:25PM</td>
// 									<td data-priority="1" colSpan={1} data-columns="tech-companies-1-col-3">0.11 (0.67%)</td>
// 									<td data-priority="3" colSpan={1} data-columns="tech-companies-1-col-4">15.70</td>
// 									<td data-priority="3" colSpan={1} data-columns="tech-companies-1-col-5">15.94</td>
// 									<td data-priority="6" colSpan={1} data-columns="tech-companies-1-col-6">15.79 x 6100</td>
// 									<td data-priority="6" colSpan={1} data-columns="tech-companies-1-col-7">15.80 x 17000</td>
// 									<td data-priority="6" colSpan={1} data-columns="tech-companies-1-col-8">18.16</td>
// 									<td data-priority="6" colSpan={1} data-columns="tech-companies-1-col-9">Non-spanning</td>
// 									<td data-priority="6" colSpan={1} data-columns="tech-companies-1-col-10">Non-spanning</td>
// 								</tr>
// 							</tbody>
// 						</table></div><table id="tech-companies-1" className="table table-small-font table-bordered table-striped">
// 							<thead>
// 								<tr>
// 									<th id="tech-companies-1-col-0">Company</th>
// 									<th data-priority="1" id="tech-companies-1-col-1">Last Trade</th>
// 									<th data-priority="3" id="tech-companies-1-col-2">Trade Time</th>
// 									<th data-priority="1" id="tech-companies-1-col-3">Change</th>
// 									<th data-priority="3" id="tech-companies-1-col-4">Prev Close</th>
// 									<th data-priority="3" id="tech-companies-1-col-5">Open</th>
// 									<th data-priority="6" id="tech-companies-1-col-6">Bid</th>
// 									<th data-priority="6" id="tech-companies-1-col-7">Ask</th>
// 									<th data-priority="6" id="tech-companies-1-col-8">1y Target Est</th>
// 									<th data-priority="6" id="tech-companies-1-col-9">Lorem</th>
// 									<th data-priority="6" id="tech-companies-1-col-10">Ipsum</th>
// 								</tr>
// 							</thead>
// 							<tbody>
// 								<tr>
// 									<th colSpan={1} data-columns="tech-companies-1-col-0">GOOG <span className="co-name">Google Inc.</span></th>
// 									<td data-priority="1" colSpan={1} data-columns="tech-companies-1-col-1">597.74</td>
// 									<td data-priority="3" colSpan={1} data-columns="tech-companies-1-col-2">12:12PM</td>
// 									<td data-priority="1" colSpan={1} data-columns="tech-companies-1-col-3">14.81 (2.54%)</td>
// 									<td data-priority="3" colSpan={1} data-columns="tech-companies-1-col-4">582.93</td>
// 									<td data-priority="3" colSpan={1} data-columns="tech-companies-1-col-5">597.95</td>
// 									<td data-priority="6" colSpan={1} data-columns="tech-companies-1-col-6">597.73 x 100</td>
// 									<td data-priority="6" colSpan={1} data-columns="tech-companies-1-col-7">597.91 x 300</td>
// 									<td data-priority="6" colSpan={1} data-columns="tech-companies-1-col-8">731.10</td>
// 									<td colSpan={2} data-priority="6" className="spn-cell" data-columns="tech-companies-1-col-9 tech-companies-1-col-10">Spanning cell</td>
// 								</tr>
// 								<tr>
// 									<th colSpan={1} data-columns="tech-companies-1-col-0">AAPL <span className="co-name">Apple Inc.</span></th>
// 									<td data-priority="1" colSpan={1} data-columns="tech-companies-1-col-1">378.94</td>
// 									<td data-priority="3" colSpan={1} data-columns="tech-companies-1-col-2">12:22PM</td>
// 									<td data-priority="1" colSpan={1} data-columns="tech-companies-1-col-3">5.74 (1.54%)</td>
// 									<td data-priority="3" colSpan={1} data-columns="tech-companies-1-col-4">373.20</td>
// 									<td data-priority="3" colSpan={1} data-columns="tech-companies-1-col-5">381.02</td>
// 									<td data-priority="6" colSpan={1} data-columns="tech-companies-1-col-6">378.92 x 300</td>
// 									<td data-priority="6" colSpan={1} data-columns="tech-companies-1-col-7">378.99 x 100</td>
// 									<td data-priority="6" colSpan={1} data-columns="tech-companies-1-col-8">505.94</td>
// 									<td colSpan={2} data-priority="6" className="spn-cell" data-columns="tech-companies-1-col-9 tech-companies-1-col-10">Spanning cell</td>
// 								</tr>
// 								<tr>
// 									<th colSpan={1} data-columns="tech-companies-1-col-0">AMZN <span className="co-name">Amazon.com Inc.</span></th>
// 									<td data-priority="1" colSpan={1} data-columns="tech-companies-1-col-1">191.55</td>
// 									<td data-priority="3" colSpan={1} data-columns="tech-companies-1-col-2">12:23PM</td>
// 									<td data-priority="1" colSpan={1} data-columns="tech-companies-1-col-3">3.16 (1.68%)</td>
// 									<td data-priority="3" colSpan={1} data-columns="tech-companies-1-col-4">188.39</td>
// 									<td data-priority="3" colSpan={1} data-columns="tech-companies-1-col-5">194.99</td>
// 									<td data-priority="6" colSpan={1} data-columns="tech-companies-1-col-6">191.52 x 300</td>
// 									<td data-priority="6" colSpan={1} data-columns="tech-companies-1-col-7">191.58 x 100</td>
// 									<td data-priority="6" colSpan={1} data-columns="tech-companies-1-col-8">240.32</td>
// 									<td colSpan={2} data-priority="6" className="spn-cell" data-columns="tech-companies-1-col-9 tech-companies-1-col-10">Spanning cell</td>
// 								</tr>
// 								<tr>
// 									<th colSpan={1} data-columns="tech-companies-1-col-0">ORCL <span className="co-name">Oracle Corporation</span></th>
// 									<td data-priority="1" colSpan={1} data-columns="tech-companies-1-col-1">31.15</td>
// 									<td data-priority="3" colSpan={1} data-columns="tech-companies-1-col-2">12:44PM</td>
// 									<td data-priority="1" colSpan={1} data-columns="tech-companies-1-col-3">1.41 (4.72%)</td>
// 									<td data-priority="3" colSpan={1} data-columns="tech-companies-1-col-4">29.74</td>
// 									<td data-priority="3" colSpan={1} data-columns="tech-companies-1-col-5">30.67</td>
// 									<td data-priority="6" colSpan={1} data-columns="tech-companies-1-col-6">31.14 x 6500</td>
// 									<td data-priority="6" colSpan={1} data-columns="tech-companies-1-col-7">31.15 x 3200</td>
// 									<td data-priority="6" colSpan={1} data-columns="tech-companies-1-col-8">36.11</td>
// 									<td colSpan={2} data-priority="6" className="spn-cell" data-columns="tech-companies-1-col-9 tech-companies-1-col-10">Spanning cell</td>
// 								</tr>
// 								<tr>
// 									<th colSpan={1} data-columns="tech-companies-1-col-0">MSFT <span className="co-name">Microsoft Corporation</span></th>
// 									<td data-priority="1" colSpan={1} data-columns="tech-companies-1-col-1">25.50</td>
// 									<td data-priority="3" colSpan={1} data-columns="tech-companies-1-col-2">12:27PM</td>
// 									<td data-priority="1" colSpan={1} data-columns="tech-companies-1-col-3">0.66 (2.67%)</td>
// 									<td data-priority="3" colSpan={1} data-columns="tech-companies-1-col-4">24.84</td>
// 									<td data-priority="3" colSpan={1} data-columns="tech-companies-1-col-5">25.37</td>
// 									<td data-priority="6" colSpan={1} data-columns="tech-companies-1-col-6">25.50 x 71100</td>
// 									<td data-priority="6" colSpan={1} data-columns="tech-companies-1-col-7">25.51 x 17800</td>
// 									<td data-priority="6" colSpan={1} data-columns="tech-companies-1-col-8">31.50</td>
// 									<td data-priority="6" colSpan={1} data-columns="tech-companies-1-col-9">Non-spanning</td>
// 									<td data-priority="6" colSpan={1} data-columns="tech-companies-1-col-10">Non-spanning</td>
// 								</tr>
// 								<tr>
// 									<th colSpan={1} data-columns="tech-companies-1-col-0">CSCO <span className="co-name">Cisco Systems, Inc.</span></th>
// 									<td data-priority="1" colSpan={1} data-columns="tech-companies-1-col-1">18.65</td>
// 									<td data-priority="3" colSpan={1} data-columns="tech-companies-1-col-2">12:45PM</td>
// 									<td data-priority="1" colSpan={1} data-columns="tech-companies-1-col-3">0.97 (5.49%)</td>
// 									<td data-priority="3" colSpan={1} data-columns="tech-companies-1-col-4">17.68</td>
// 									<td data-priority="3" colSpan={1} data-columns="tech-companies-1-col-5">18.23</td>
// 									<td data-priority="6" colSpan={1} data-columns="tech-companies-1-col-6">18.65 x 10300</td>
// 									<td data-priority="6" colSpan={1} data-columns="tech-companies-1-col-7">18.66 x 24000</td>
// 									<td data-priority="6" colSpan={1} data-columns="tech-companies-1-col-8">21.12</td>
// 									<td data-priority="6" colSpan={1} data-columns="tech-companies-1-col-9">Non-spanning</td>
// 									<td data-priority="6" colSpan={1} data-columns="tech-companies-1-col-10">Non-spanning</td>
// 								</tr>
// 								<tr>
// 									<th colSpan={1} data-columns="tech-companies-1-col-0">YHOO <span className="co-name">Yahoo! Inc.</span></th>
// 									<td data-priority="1" colSpan={1} data-columns="tech-companies-1-col-1">15.81</td>
// 									<td data-priority="3" colSpan={1} data-columns="tech-companies-1-col-2">12:25PM</td>
// 									<td data-priority="1" colSpan={1} data-columns="tech-companies-1-col-3">0.11 (0.67%)</td>
// 									<td data-priority="3" colSpan={1} data-columns="tech-companies-1-col-4">15.70</td>
// 									<td data-priority="3" colSpan={1} data-columns="tech-companies-1-col-5">15.94</td>
// 									<td data-priority="6" colSpan={1} data-columns="tech-companies-1-col-6">15.79 x 6100</td>
// 									<td data-priority="6" colSpan={1} data-columns="tech-companies-1-col-7">15.80 x 17000</td>
// 									<td data-priority="6" colSpan={1} data-columns="tech-companies-1-col-8">18.16</td>
// 									<td data-priority="6" colSpan={1} data-columns="tech-companies-1-col-9">Non-spanning</td>
// 									<td data-priority="6" colSpan={1} data-columns="tech-companies-1-col-10">Non-spanning</td>
// 								</tr>
// 								<!-- Repeat -->
// 								<tr>
// 									<th colSpan={1} data-columns="tech-companies-1-col-0">GOOG <span className="co-name">Google Inc.</span></th>
// 									<td data-priority="1" colSpan={1} data-columns="tech-companies-1-col-1">597.74</td>
// 									<td data-priority="3" colSpan={1} data-columns="tech-companies-1-col-2">12:12PM</td>
// 									<td data-priority="1" colSpan={1} data-columns="tech-companies-1-col-3">14.81 (2.54%)</td>
// 									<td data-priority="3" colSpan={1} data-columns="tech-companies-1-col-4">582.93</td>
// 									<td data-priority="3" colSpan={1} data-columns="tech-companies-1-col-5">597.95</td>
// 									<td data-priority="6" colSpan={1} data-columns="tech-companies-1-col-6">597.73 x 100</td>
// 									<td data-priority="6" colSpan={1} data-columns="tech-companies-1-col-7">597.91 x 300</td>
// 									<td data-priority="6" colSpan={1} data-columns="tech-companies-1-col-8">731.10</td>
// 									<td colSpan={2} data-priority="6" className="spn-cell" data-columns="tech-companies-1-col-9 tech-companies-1-col-10">Spanning cell</td>
// 								</tr>
// 								<tr>
// 									<th colSpan={1} data-columns="tech-companies-1-col-0">AAPL <span className="co-name">Apple Inc.</span></th>
// 									<td data-priority="1" colSpan={1} data-columns="tech-companies-1-col-1">378.94</td>
// 									<td data-priority="3" colSpan={1} data-columns="tech-companies-1-col-2">12:22PM</td>
// 									<td data-priority="1" colSpan={1} data-columns="tech-companies-1-col-3">5.74 (1.54%)</td>
// 									<td data-priority="3" colSpan={1} data-columns="tech-companies-1-col-4">373.20</td>
// 									<td data-priority="3" colSpan={1} data-columns="tech-companies-1-col-5">381.02</td>
// 									<td data-priority="6" colSpan={1} data-columns="tech-companies-1-col-6">378.92 x 300</td>
// 									<td data-priority="6" colSpan={1} data-columns="tech-companies-1-col-7">378.99 x 100</td>
// 									<td data-priority="6" colSpan={1} data-columns="tech-companies-1-col-8">505.94</td>
// 									<td colSpan={2} data-priority="6" className="spn-cell" data-columns="tech-companies-1-col-9 tech-companies-1-col-10">Spanning cell</td>
// 								</tr>
// 								<tr>
// 									<th colSpan={1} data-columns="tech-companies-1-col-0">AMZN <span className="co-name">Amazon.com Inc.</span></th>
// 									<td data-priority="1" colSpan={1} data-columns="tech-companies-1-col-1">191.55</td>
// 									<td data-priority="3" colSpan={1} data-columns="tech-companies-1-col-2">12:23PM</td>
// 									<td data-priority="1" colSpan={1} data-columns="tech-companies-1-col-3">3.16 (1.68%)</td>
// 									<td data-priority="3" colSpan={1} data-columns="tech-companies-1-col-4">188.39</td>
// 									<td data-priority="3" colSpan={1} data-columns="tech-companies-1-col-5">194.99</td>
// 									<td data-priority="6" colSpan={1} data-columns="tech-companies-1-col-6">191.52 x 300</td>
// 									<td data-priority="6" colSpan={1} data-columns="tech-companies-1-col-7">191.58 x 100</td>
// 									<td data-priority="6" colSpan={1} data-columns="tech-companies-1-col-8">240.32</td>
// 									<td colSpan={2} data-priority="6" className="spn-cell" data-columns="tech-companies-1-col-9 tech-companies-1-col-10">Spanning cell</td>
// 								</tr>
// 								<tr>
// 									<th colSpan={1} data-columns="tech-companies-1-col-0">ORCL <span className="co-name">Oracle Corporation</span></th>
// 									<td data-priority="1" colSpan={1} data-columns="tech-companies-1-col-1">31.15</td>
// 									<td data-priority="3" colSpan={1} data-columns="tech-companies-1-col-2">12:44PM</td>
// 									<td data-priority="1" colSpan={1} data-columns="tech-companies-1-col-3">1.41 (4.72%)</td>
// 									<td data-priority="3" colSpan={1} data-columns="tech-companies-1-col-4">29.74</td>
// 									<td data-priority="3" colSpan={1} data-columns="tech-companies-1-col-5">30.67</td>
// 									<td data-priority="6" colSpan={1} data-columns="tech-companies-1-col-6">31.14 x 6500</td>
// 									<td data-priority="6" colSpan={1} data-columns="tech-companies-1-col-7">31.15 x 3200</td>
// 									<td data-priority="6" colSpan={1} data-columns="tech-companies-1-col-8">36.11</td>
// 									<td colSpan={2} data-priority="6" className="spn-cell" data-columns="tech-companies-1-col-9 tech-companies-1-col-10">Spanning cell</td>
// 								</tr>
// 								<tr>
// 									<th colSpan={1} data-columns="tech-companies-1-col-0">MSFT <span className="co-name">Microsoft Corporation</span></th>
// 									<td data-priority="1" colSpan={1} data-columns="tech-companies-1-col-1">25.50</td>
// 									<td data-priority="3" colSpan={1} data-columns="tech-companies-1-col-2">12:27PM</td>
// 									<td data-priority="1" colSpan={1} data-columns="tech-companies-1-col-3">0.66 (2.67%)</td>
// 									<td data-priority="3" colSpan={1} data-columns="tech-companies-1-col-4">24.84</td>
// 									<td data-priority="3" colSpan={1} data-columns="tech-companies-1-col-5">25.37</td>
// 									<td data-priority="6" colSpan={1} data-columns="tech-companies-1-col-6">25.50 x 71100</td>
// 									<td data-priority="6" colSpan={1} data-columns="tech-companies-1-col-7">25.51 x 17800</td>
// 									<td data-priority="6" colSpan={1} data-columns="tech-companies-1-col-8">31.50</td>
// 									<td data-priority="6" colSpan={1} data-columns="tech-companies-1-col-9">Non-spanning</td>
// 									<td data-priority="6" colSpan={1} data-columns="tech-companies-1-col-10">Non-spanning</td>
// 								</tr>
// 								<tr>
// 									<th colSpan={1} data-columns="tech-companies-1-col-0">CSCO <span className="co-name">Cisco Systems, Inc.</span></th>
// 									<td data-priority="1" colSpan={1} data-columns="tech-companies-1-col-1">18.65</td>
// 									<td data-priority="3" colSpan={1} data-columns="tech-companies-1-col-2">12:45PM</td>
// 									<td data-priority="1" colSpan={1} data-columns="tech-companies-1-col-3">0.97 (5.49%)</td>
// 									<td data-priority="3" colSpan={1} data-columns="tech-companies-1-col-4">17.68</td>
// 									<td data-priority="3" colSpan={1} data-columns="tech-companies-1-col-5">18.23</td>
// 									<td data-priority="6" colSpan={1} data-columns="tech-companies-1-col-6">18.65 x 10300</td>
// 									<td data-priority="6" colSpan={1} data-columns="tech-companies-1-col-7">18.66 x 24000</td>
// 									<td data-priority="6" colSpan={1} data-columns="tech-companies-1-col-8">21.12</td>
// 									<td data-priority="6" colSpan={1} data-columns="tech-companies-1-col-9">Non-spanning</td>
// 									<td data-priority="6" colSpan={1} data-columns="tech-companies-1-col-10">Non-spanning</td>
// 								</tr>
// 								<tr>
// 									<th colSpan={1} data-columns="tech-companies-1-col-0">YHOO <span className="co-name">Yahoo! Inc.</span></th>
// 									<td data-priority="1" colSpan={1} data-columns="tech-companies-1-col-1">15.81</td>
// 									<td data-priority="3" colSpan={1} data-columns="tech-companies-1-col-2">12:25PM</td>
// 									<td data-priority="1" colSpan={1} data-columns="tech-companies-1-col-3">0.11 (0.67%)</td>
// 									<td data-priority="3" colSpan={1} data-columns="tech-companies-1-col-4">15.70</td>
// 									<td data-priority="3" colSpan={1} data-columns="tech-companies-1-col-5">15.94</td>
// 									<td data-priority="6" colSpan={1} data-columns="tech-companies-1-col-6">15.79 x 6100</td>
// 									<td data-priority="6" colSpan={1} data-columns="tech-companies-1-col-7">15.80 x 17000</td>
// 									<td data-priority="6" colSpan={1} data-columns="tech-companies-1-col-8">18.16</td>
// 									<td data-priority="6" colSpan={1} data-columns="tech-companies-1-col-9">Non-spanning</td>
// 									<td data-priority="6" colSpan={1} data-columns="tech-companies-1-col-10">Non-spanning</td>
// 								</tr>
// 								<!-- Repeat -->
// 								<tr>
// 									<th colSpan={1} data-columns="tech-companies-1-col-0">GOOG <span className="co-name">Google Inc.</span></th>
// 									<td data-priority="1" colSpan={1} data-columns="tech-companies-1-col-1">597.74</td>
// 									<td data-priority="3" colSpan={1} data-columns="tech-companies-1-col-2">12:12PM</td>
// 									<td data-priority="1" colSpan={1} data-columns="tech-companies-1-col-3">14.81 (2.54%)</td>
// 									<td data-priority="3" colSpan={1} data-columns="tech-companies-1-col-4">582.93</td>
// 									<td data-priority="3" colSpan={1} data-columns="tech-companies-1-col-5">597.95</td>
// 									<td data-priority="6" colSpan={1} data-columns="tech-companies-1-col-6">597.73 x 100</td>
// 									<td data-priority="6" colSpan={1} data-columns="tech-companies-1-col-7">597.91 x 300</td>
// 									<td data-priority="6" colSpan={1} data-columns="tech-companies-1-col-8">731.10</td>
// 									<td colSpan={2} data-priority="6" className="spn-cell" data-columns="tech-companies-1-col-9 tech-companies-1-col-10">Spanning cell</td>
// 								</tr>
// 								<tr>
// 									<th colSpan={1} data-columns="tech-companies-1-col-0">AAPL <span className="co-name">Apple Inc.</span></th>
// 									<td data-priority="1" colSpan={1} data-columns="tech-companies-1-col-1">378.94</td>
// 									<td data-priority="3" colSpan={1} data-columns="tech-companies-1-col-2">12:22PM</td>
// 									<td data-priority="1" colSpan={1} data-columns="tech-companies-1-col-3">5.74 (1.54%)</td>
// 									<td data-priority="3" colSpan={1} data-columns="tech-companies-1-col-4">373.20</td>
// 									<td data-priority="3" colSpan={1} data-columns="tech-companies-1-col-5">381.02</td>
// 									<td data-priority="6" colSpan={1} data-columns="tech-companies-1-col-6">378.92 x 300</td>
// 									<td data-priority="6" colSpan={1} data-columns="tech-companies-1-col-7">378.99 x 100</td>
// 									<td data-priority="6" colSpan={1} data-columns="tech-companies-1-col-8">505.94</td>
// 									<td colSpan={2} data-priority="6" className="spn-cell" data-columns="tech-companies-1-col-9 tech-companies-1-col-10">Spanning cell</td>
// 								</tr>
// 								<tr>
// 									<th colSpan={1} data-columns="tech-companies-1-col-0">AMZN <span className="co-name">Amazon.com Inc.</span></th>
// 									<td data-priority="1" colSpan={1} data-columns="tech-companies-1-col-1">191.55</td>
// 									<td data-priority="3" colSpan={1} data-columns="tech-companies-1-col-2">12:23PM</td>
// 									<td data-priority="1" colSpan={1} data-columns="tech-companies-1-col-3">3.16 (1.68%)</td>
// 									<td data-priority="3" colSpan={1} data-columns="tech-companies-1-col-4">188.39</td>
// 									<td data-priority="3" colSpan={1} data-columns="tech-companies-1-col-5">194.99</td>
// 									<td data-priority="6" colSpan={1} data-columns="tech-companies-1-col-6">191.52 x 300</td>
// 									<td data-priority="6" colSpan={1} data-columns="tech-companies-1-col-7">191.58 x 100</td>
// 									<td data-priority="6" colSpan={1} data-columns="tech-companies-1-col-8">240.32</td>
// 									<td colSpan={2} data-priority="6" className="spn-cell" data-columns="tech-companies-1-col-9 tech-companies-1-col-10">Spanning cell</td>
// 								</tr>
// 								<tr>
// 									<th colSpan={1} data-columns="tech-companies-1-col-0">ORCL <span className="co-name">Oracle Corporation</span></th>
// 									<td data-priority="1" colSpan={1} data-columns="tech-companies-1-col-1">31.15</td>
// 									<td data-priority="3" colSpan={1} data-columns="tech-companies-1-col-2">12:44PM</td>
// 									<td data-priority="1" colSpan={1} data-columns="tech-companies-1-col-3">1.41 (4.72%)</td>
// 									<td data-priority="3" colSpan={1} data-columns="tech-companies-1-col-4">29.74</td>
// 									<td data-priority="3" colSpan={1} data-columns="tech-companies-1-col-5">30.67</td>
// 									<td data-priority="6" colSpan={1} data-columns="tech-companies-1-col-6">31.14 x 6500</td>
// 									<td data-priority="6" colSpan={1} data-columns="tech-companies-1-col-7">31.15 x 3200</td>
// 									<td data-priority="6" colSpan={1} data-columns="tech-companies-1-col-8">36.11</td>
// 									<td colSpan={2} data-priority="6" className="spn-cell" data-columns="tech-companies-1-col-9 tech-companies-1-col-10">Spanning cell</td>
// 								</tr>
// 								<tr>
// 									<th colSpan={1} data-columns="tech-companies-1-col-0">MSFT <span className="co-name">Microsoft Corporation</span></th>
// 									<td data-priority="1" colSpan={1} data-columns="tech-companies-1-col-1">25.50</td>
// 									<td data-priority="3" colSpan={1} data-columns="tech-companies-1-col-2">12:27PM</td>
// 									<td data-priority="1" colSpan={1} data-columns="tech-companies-1-col-3">0.66 (2.67%)</td>
// 									<td data-priority="3" colSpan={1} data-columns="tech-companies-1-col-4">24.84</td>
// 									<td data-priority="3" colSpan={1} data-columns="tech-companies-1-col-5">25.37</td>
// 									<td data-priority="6" colSpan={1} data-columns="tech-companies-1-col-6">25.50 x 71100</td>
// 									<td data-priority="6" colSpan={1} data-columns="tech-companies-1-col-7">25.51 x 17800</td>
// 									<td data-priority="6" colSpan={1} data-columns="tech-companies-1-col-8">31.50</td>
// 									<td data-priority="6" colSpan={1} data-columns="tech-companies-1-col-9">Non-spanning</td>
// 									<td data-priority="6" colSpan={1} data-columns="tech-companies-1-col-10">Non-spanning</td>
// 								</tr>
// 								<tr>
// 									<th colSpan={1} data-columns="tech-companies-1-col-0">CSCO <span className="co-name">Cisco Systems, Inc.</span></th>
// 									<td data-priority="1" colSpan={1} data-columns="tech-companies-1-col-1">18.65</td>
// 									<td data-priority="3" colSpan={1} data-columns="tech-companies-1-col-2">12:45PM</td>
// 									<td data-priority="1" colSpan={1} data-columns="tech-companies-1-col-3">0.97 (5.49%)</td>
// 									<td data-priority="3" colSpan={1} data-columns="tech-companies-1-col-4">17.68</td>
// 									<td data-priority="3" colSpan={1} data-columns="tech-companies-1-col-5">18.23</td>
// 									<td data-priority="6" colSpan={1} data-columns="tech-companies-1-col-6">18.65 x 10300</td>
// 									<td data-priority="6" colSpan={1} data-columns="tech-companies-1-col-7">18.66 x 24000</td>
// 									<td data-priority="6" colSpan={1} data-columns="tech-companies-1-col-8">21.12</td>
// 									<td data-priority="6" colSpan={1} data-columns="tech-companies-1-col-9">Non-spanning</td>
// 									<td data-priority="6" colSpan={1} data-columns="tech-companies-1-col-10">Non-spanning</td>
// 								</tr>
// 								<tr>
// 									<th colSpan={1} data-columns="tech-companies-1-col-0">YHOO <span className="co-name">Yahoo! Inc.</span></th>
// 									<td data-priority="1" colSpan={1} data-columns="tech-companies-1-col-1">15.81</td>
// 									<td data-priority="3" colSpan={1} data-columns="tech-companies-1-col-2">12:25PM</td>
// 									<td data-priority="1" colSpan={1} data-columns="tech-companies-1-col-3">0.11 (0.67%)</td>
// 									<td data-priority="3" colSpan={1} data-columns="tech-companies-1-col-4">15.70</td>
// 									<td data-priority="3" colSpan={1} data-columns="tech-companies-1-col-5">15.94</td>
// 									<td data-priority="6" colSpan={1} data-columns="tech-companies-1-col-6">15.79 x 6100</td>
// 									<td data-priority="6" colSpan={1} data-columns="tech-companies-1-col-7">15.80 x 17000</td>
// 									<td data-priority="6" colSpan={1} data-columns="tech-companies-1-col-8">18.16</td>
// 									<td data-priority="6" colSpan={1} data-columns="tech-companies-1-col-9">Non-spanning</td>
// 									<td data-priority="6" colSpan={1} data-columns="tech-companies-1-col-10">Non-spanning</td>
// 								</tr>
// 								<!-- Repeat -->
// 								<tr>
// 									<th colSpan={1} data-columns="tech-companies-1-col-0">GOOG <span className="co-name">Google Inc.</span></th>
// 									<td data-priority="1" colSpan={1} data-columns="tech-companies-1-col-1">597.74</td>
// 									<td data-priority="3" colSpan={1} data-columns="tech-companies-1-col-2">12:12PM</td>
// 									<td data-priority="1" colSpan={1} data-columns="tech-companies-1-col-3">14.81 (2.54%)</td>
// 									<td data-priority="3" colSpan={1} data-columns="tech-companies-1-col-4">582.93</td>
// 									<td data-priority="3" colSpan={1} data-columns="tech-companies-1-col-5">597.95</td>
// 									<td data-priority="6" colSpan={1} data-columns="tech-companies-1-col-6">597.73 x 100</td>
// 									<td data-priority="6" colSpan={1} data-columns="tech-companies-1-col-7">597.91 x 300</td>
// 									<td data-priority="6" colSpan={1} data-columns="tech-companies-1-col-8">731.10</td>
// 									<td colSpan={2} data-priority="6" className="spn-cell" data-columns="tech-companies-1-col-9 tech-companies-1-col-10">Spanning cell</td>
// 								</tr>
// 								<tr>
// 									<th colSpan={1} data-columns="tech-companies-1-col-0">AAPL <span className="co-name">Apple Inc.</span></th>
// 									<td data-priority="1" colSpan={1} data-columns="tech-companies-1-col-1">378.94</td>
// 									<td data-priority="3" colSpan={1} data-columns="tech-companies-1-col-2">12:22PM</td>
// 									<td data-priority="1" colSpan={1} data-columns="tech-companies-1-col-3">5.74 (1.54%)</td>
// 									<td data-priority="3" colSpan={1} data-columns="tech-companies-1-col-4">373.20</td>
// 									<td data-priority="3" colSpan={1} data-columns="tech-companies-1-col-5">381.02</td>
// 									<td data-priority="6" colSpan={1} data-columns="tech-companies-1-col-6">378.92 x 300</td>
// 									<td data-priority="6" colSpan={1} data-columns="tech-companies-1-col-7">378.99 x 100</td>
// 									<td data-priority="6" colSpan={1} data-columns="tech-companies-1-col-8">505.94</td>
// 									<td colSpan={2} data-priority="6" className="spn-cell" data-columns="tech-companies-1-col-9 tech-companies-1-col-10">Spanning cell</td>
// 								</tr>
// 								<tr>
// 									<th colSpan={1} data-columns="tech-companies-1-col-0">AMZN <span className="co-name">Amazon.com Inc.</span></th>
// 									<td data-priority="1" colSpan={1} data-columns="tech-companies-1-col-1">191.55</td>
// 									<td data-priority="3" colSpan={1} data-columns="tech-companies-1-col-2">12:23PM</td>
// 									<td data-priority="1" colSpan={1} data-columns="tech-companies-1-col-3">3.16 (1.68%)</td>
// 									<td data-priority="3" colSpan={1} data-columns="tech-companies-1-col-4">188.39</td>
// 									<td data-priority="3" colSpan={1} data-columns="tech-companies-1-col-5">194.99</td>
// 									<td data-priority="6" colSpan={1} data-columns="tech-companies-1-col-6">191.52 x 300</td>
// 									<td data-priority="6" colSpan={1} data-columns="tech-companies-1-col-7">191.58 x 100</td>
// 									<td data-priority="6" colSpan={1} data-columns="tech-companies-1-col-8">240.32</td>
// 									<td colSpan={2} data-priority="6" className="spn-cell" data-columns="tech-companies-1-col-9 tech-companies-1-col-10">Spanning cell</td>
// 								</tr>
// 								<tr>
// 									<th colSpan={1} data-columns="tech-companies-1-col-0">ORCL <span className="co-name">Oracle Corporation</span></th>
// 									<td data-priority="1" colSpan={1} data-columns="tech-companies-1-col-1">31.15</td>
// 									<td data-priority="3" colSpan={1} data-columns="tech-companies-1-col-2">12:44PM</td>
// 									<td data-priority="1" colSpan={1} data-columns="tech-companies-1-col-3">1.41 (4.72%)</td>
// 									<td data-priority="3" colSpan={1} data-columns="tech-companies-1-col-4">29.74</td>
// 									<td data-priority="3" colSpan={1} data-columns="tech-companies-1-col-5">30.67</td>
// 									<td data-priority="6" colSpan={1} data-columns="tech-companies-1-col-6">31.14 x 6500</td>
// 									<td data-priority="6" colSpan={1} data-columns="tech-companies-1-col-7">31.15 x 3200</td>
// 									<td data-priority="6" colSpan={1} data-columns="tech-companies-1-col-8">36.11</td>
// 									<td colSpan={2} data-priority="6" className="spn-cell" data-columns="tech-companies-1-col-9 tech-companies-1-col-10">Spanning cell</td>
// 								</tr>
// 								<tr>
// 									<th colSpan={1} data-columns="tech-companies-1-col-0">MSFT <span className="co-name">Microsoft Corporation</span></th>
// 									<td data-priority="1" colSpan={1} data-columns="tech-companies-1-col-1">25.50</td>
// 									<td data-priority="3" colSpan={1} data-columns="tech-companies-1-col-2">12:27PM</td>
// 									<td data-priority="1" colSpan={1} data-columns="tech-companies-1-col-3">0.66 (2.67%)</td>
// 									<td data-priority="3" colSpan={1} data-columns="tech-companies-1-col-4">24.84</td>
// 									<td data-priority="3" colSpan={1} data-columns="tech-companies-1-col-5">25.37</td>
// 									<td data-priority="6" colSpan={1} data-columns="tech-companies-1-col-6">25.50 x 71100</td>
// 									<td data-priority="6" colSpan={1} data-columns="tech-companies-1-col-7">25.51 x 17800</td>
// 									<td data-priority="6" colSpan={1} data-columns="tech-companies-1-col-8">31.50</td>
// 									<td data-priority="6" colSpan={1} data-columns="tech-companies-1-col-9">Non-spanning</td>
// 									<td data-priority="6" colSpan={1} data-columns="tech-companies-1-col-10">Non-spanning</td>
// 								</tr>
// 								<tr>
// 									<th colSpan={1} data-columns="tech-companies-1-col-0">CSCO <span className="co-name">Cisco Systems, Inc.</span></th>
// 									<td data-priority="1" colSpan={1} data-columns="tech-companies-1-col-1">18.65</td>
// 									<td data-priority="3" colSpan={1} data-columns="tech-companies-1-col-2">12:45PM</td>
// 									<td data-priority="1" colSpan={1} data-columns="tech-companies-1-col-3">0.97 (5.49%)</td>
// 									<td data-priority="3" colSpan={1} data-columns="tech-companies-1-col-4">17.68</td>
// 									<td data-priority="3" colSpan={1} data-columns="tech-companies-1-col-5">18.23</td>
// 									<td data-priority="6" colSpan={1} data-columns="tech-companies-1-col-6">18.65 x 10300</td>
// 									<td data-priority="6" colSpan={1} data-columns="tech-companies-1-col-7">18.66 x 24000</td>
// 									<td data-priority="6" colSpan={1} data-columns="tech-companies-1-col-8">21.12</td>
// 									<td data-priority="6" colSpan={1} data-columns="tech-companies-1-col-9">Non-spanning</td>
// 									<td data-priority="6" colSpan={1} data-columns="tech-companies-1-col-10">Non-spanning</td>
// 								</tr>
// 								<tr>
// 									<th colSpan={1} data-columns="tech-companies-1-col-0">YHOO <span className="co-name">Yahoo! Inc.</span></th>
// 									<td data-priority="1" colSpan={1} data-columns="tech-companies-1-col-1">15.81</td>
// 									<td data-priority="3" colSpan={1} data-columns="tech-companies-1-col-2">12:25PM</td>
// 									<td data-priority="1" colSpan={1} data-columns="tech-companies-1-col-3">0.11 (0.67%)</td>
// 									<td data-priority="3" colSpan={1} data-columns="tech-companies-1-col-4">15.70</td>
// 									<td data-priority="3" colSpan={1} data-columns="tech-companies-1-col-5">15.94</td>
// 									<td data-priority="6" colSpan={1} data-columns="tech-companies-1-col-6">15.79 x 6100</td>
// 									<td data-priority="6" colSpan={1} data-columns="tech-companies-1-col-7">15.80 x 17000</td>
// 									<td data-priority="6" colSpan={1} data-columns="tech-companies-1-col-8">18.16</td>
// 									<td data-priority="6" colSpan={1} data-columns="tech-companies-1-col-9">Non-spanning</td>
// 									<td data-priority="6" colSpan={1} data-columns="tech-companies-1-col-10">Non-spanning</td>
// 								</tr>
// 								<!-- Repeat -->
// 								<tr>
// 									<th colSpan={1} data-columns="tech-companies-1-col-0">GOOG <span className="co-name">Google Inc.</span></th>
// 									<td data-priority="1" colSpan={1} data-columns="tech-companies-1-col-1">597.74</td>
// 									<td data-priority="3" colSpan={1} data-columns="tech-companies-1-col-2">12:12PM</td>
// 									<td data-priority="1" colSpan={1} data-columns="tech-companies-1-col-3">14.81 (2.54%)</td>
// 									<td data-priority="3" colSpan={1} data-columns="tech-companies-1-col-4">582.93</td>
// 									<td data-priority="3" colSpan={1} data-columns="tech-companies-1-col-5">597.95</td>
// 									<td data-priority="6" colSpan={1} data-columns="tech-companies-1-col-6">597.73 x 100</td>
// 									<td data-priority="6" colSpan={1} data-columns="tech-companies-1-col-7">597.91 x 300</td>
// 									<td data-priority="6" colSpan={1} data-columns="tech-companies-1-col-8">731.10</td>
// 									<td colSpan={2} data-priority="6" className="spn-cell" data-columns="tech-companies-1-col-9 tech-companies-1-col-10">Spanning cell</td>
// 								</tr>
// 								<tr>
// 									<th colSpan={1} data-columns="tech-companies-1-col-0">AAPL <span className="co-name">Apple Inc.</span></th>
// 									<td data-priority="1" colSpan={1} data-columns="tech-companies-1-col-1">378.94</td>
// 									<td data-priority="3" colSpan={1} data-columns="tech-companies-1-col-2">12:22PM</td>
// 									<td data-priority="1" colSpan={1} data-columns="tech-companies-1-col-3">5.74 (1.54%)</td>
// 									<td data-priority="3" colSpan={1} data-columns="tech-companies-1-col-4">373.20</td>
// 									<td data-priority="3" colSpan={1} data-columns="tech-companies-1-col-5">381.02</td>
// 									<td data-priority="6" colSpan={1} data-columns="tech-companies-1-col-6">378.92 x 300</td>
// 									<td data-priority="6" colSpan={1} data-columns="tech-companies-1-col-7">378.99 x 100</td>
// 									<td data-priority="6" colSpan={1} data-columns="tech-companies-1-col-8">505.94</td>
// 									<td colSpan={2} data-priority="6" className="spn-cell" data-columns="tech-companies-1-col-9 tech-companies-1-col-10">Spanning cell</td>
// 								</tr>
// 								<tr>
// 									<th colSpan={1} data-columns="tech-companies-1-col-0">AMZN <span className="co-name">Amazon.com Inc.</span></th>
// 									<td data-priority="1" colSpan={1} data-columns="tech-companies-1-col-1">191.55</td>
// 									<td data-priority="3" colSpan={1} data-columns="tech-companies-1-col-2">12:23PM</td>
// 									<td data-priority="1" colSpan={1} data-columns="tech-companies-1-col-3">3.16 (1.68%)</td>
// 									<td data-priority="3" colSpan={1} data-columns="tech-companies-1-col-4">188.39</td>
// 									<td data-priority="3" colSpan={1} data-columns="tech-companies-1-col-5">194.99</td>
// 									<td data-priority="6" colSpan={1} data-columns="tech-companies-1-col-6">191.52 x 300</td>
// 									<td data-priority="6" colSpan={1} data-columns="tech-companies-1-col-7">191.58 x 100</td>
// 									<td data-priority="6" colSpan={1} data-columns="tech-companies-1-col-8">240.32</td>
// 									<td colSpan={2} data-priority="6" className="spn-cell" data-columns="tech-companies-1-col-9 tech-companies-1-col-10">Spanning cell</td>
// 								</tr>
// 								<tr>
// 									<th colSpan={1} data-columns="tech-companies-1-col-0">ORCL <span className="co-name">Oracle Corporation</span></th>
// 									<td data-priority="1" colSpan={1} data-columns="tech-companies-1-col-1">31.15</td>
// 									<td data-priority="3" colSpan={1} data-columns="tech-companies-1-col-2">12:44PM</td>
// 									<td data-priority="1" colSpan={1} data-columns="tech-companies-1-col-3">1.41 (4.72%)</td>
// 									<td data-priority="3" colSpan={1} data-columns="tech-companies-1-col-4">29.74</td>
// 									<td data-priority="3" colSpan={1} data-columns="tech-companies-1-col-5">30.67</td>
// 									<td data-priority="6" colSpan={1} data-columns="tech-companies-1-col-6">31.14 x 6500</td>
// 									<td data-priority="6" colSpan={1} data-columns="tech-companies-1-col-7">31.15 x 3200</td>
// 									<td data-priority="6" colSpan={1} data-columns="tech-companies-1-col-8">36.11</td>
// 									<td colSpan={2} data-priority="6" className="spn-cell" data-columns="tech-companies-1-col-9 tech-companies-1-col-10">Spanning cell</td>
// 								</tr>
// 								<tr>
// 									<th colSpan={1} data-columns="tech-companies-1-col-0">MSFT <span className="co-name">Microsoft Corporation</span></th>
// 									<td data-priority="1" colSpan={1} data-columns="tech-companies-1-col-1">25.50</td>
// 									<td data-priority="3" colSpan={1} data-columns="tech-companies-1-col-2">12:27PM</td>
// 									<td data-priority="1" colSpan={1} data-columns="tech-companies-1-col-3">0.66 (2.67%)</td>
// 									<td data-priority="3" colSpan={1} data-columns="tech-companies-1-col-4">24.84</td>
// 									<td data-priority="3" colSpan={1} data-columns="tech-companies-1-col-5">25.37</td>
// 									<td data-priority="6" colSpan={1} data-columns="tech-companies-1-col-6">25.50 x 71100</td>
// 									<td data-priority="6" colSpan={1} data-columns="tech-companies-1-col-7">25.51 x 17800</td>
// 									<td data-priority="6" colSpan={1} data-columns="tech-companies-1-col-8">31.50</td>
// 									<td data-priority="6" colSpan={1} data-columns="tech-companies-1-col-9">Non-spanning</td>
// 									<td data-priority="6" colSpan={1} data-columns="tech-companies-1-col-10">Non-spanning</td>
// 								</tr>
// 								<tr>
// 									<th colSpan={1} data-columns="tech-companies-1-col-0">CSCO <span className="co-name">Cisco Systems, Inc.</span></th>
// 									<td data-priority="1" colSpan={1} data-columns="tech-companies-1-col-1">18.65</td>
// 									<td data-priority="3" colSpan={1} data-columns="tech-companies-1-col-2">12:45PM</td>
// 									<td data-priority="1" colSpan={1} data-columns="tech-companies-1-col-3">0.97 (5.49%)</td>
// 									<td data-priority="3" colSpan={1} data-columns="tech-companies-1-col-4">17.68</td>
// 									<td data-priority="3" colSpan={1} data-columns="tech-companies-1-col-5">18.23</td>
// 									<td data-priority="6" colSpan={1} data-columns="tech-companies-1-col-6">18.65 x 10300</td>
// 									<td data-priority="6" colSpan={1} data-columns="tech-companies-1-col-7">18.66 x 24000</td>
// 									<td data-priority="6" colSpan={1} data-columns="tech-companies-1-col-8">21.12</td>
// 									<td data-priority="6" colSpan={1} data-columns="tech-companies-1-col-9">Non-spanning</td>
// 									<td data-priority="6" colSpan={1} data-columns="tech-companies-1-col-10">Non-spanning</td>
// 								</tr>
// 								<tr>
// 									<th colSpan={1} data-columns="tech-companies-1-col-0">YHOO <span className="co-name">Yahoo! Inc.</span></th>
// 									<td data-priority="1" colSpan={1} data-columns="tech-companies-1-col-1">15.81</td>
// 									<td data-priority="3" colSpan={1} data-columns="tech-companies-1-col-2">12:25PM</td>
// 									<td data-priority="1" colSpan={1} data-columns="tech-companies-1-col-3">0.11 (0.67%)</td>
// 									<td data-priority="3" colSpan={1} data-columns="tech-companies-1-col-4">15.70</td>
// 									<td data-priority="3" colSpan={1} data-columns="tech-companies-1-col-5">15.94</td>
// 									<td data-priority="6" colSpan={1} data-columns="tech-companies-1-col-6">15.79 x 6100</td>
// 									<td data-priority="6" colSpan={1} data-columns="tech-companies-1-col-7">15.80 x 17000</td>
// 									<td data-priority="6" colSpan={1} data-columns="tech-companies-1-col-8">18.16</td>
// 									<td data-priority="6" colSpan={1} data-columns="tech-companies-1-col-9">Non-spanning</td>
// 									<td data-priority="6" colSpan={1} data-columns="tech-companies-1-col-10">Non-spanning</td>
// 								</tr>
// 							</tbody>
// 						</table>
// 					</div></div>
// }

// const TableRow = ({ record }: {record}) => {
//   return <tr>
// 									<th colSpan={1} data-columns="tech-companies-1-col-0">CSCO <span className="co-name">Cisco Systems, Inc.</span></th>
// 									<td data-priority="1" colSpan={1} data-columns="tech-companies-1-col-1">18.65</td>
// 									<td data-priority="3" colSpan={1} data-columns="tech-companies-1-col-2">12:45PM</td>
// 									<td data-priority="1" colSpan={1} data-columns="tech-companies-1-col-3">0.97 (5.49%)</td>
// 									<td data-priority="3" colSpan={1} data-columns="tech-companies-1-col-4">17.68</td>
// 									<td data-priority="3" colSpan={1} data-columns="tech-companies-1-col-5">18.23</td>
// 									<td data-priority="6" colSpan={1} data-columns="tech-companies-1-col-6">18.65 x 10300</td>
// 									<td data-priority="6" colSpan={1} data-columns="tech-companies-1-col-7">18.66 x 24000</td>
// 									<td data-priority="6" colSpan={1} data-columns="tech-companies-1-col-8">21.12</td>
// 									<td data-priority="6" colSpan={1} data-columns="tech-companies-1-col-9">Non-spanning</td>
// 									<td data-priority="6" colSpan={1} data-columns="tech-companies-1-col-10">Non-spanning</td>
// 								</tr>
// }

// const TableHead = () => {
//   return <div></div>
// }

// export default Table2
